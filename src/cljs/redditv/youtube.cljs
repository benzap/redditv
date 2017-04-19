(ns redditv.youtube
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.utils :refer [numstring? parse-int]]
            [redditv.player :as player]
            [redditv.events :as events]))

(def test-url "https://youtube.com/watch?v=zB4I68XVPzQ")

(def regex-youtube-url #"^https?://w{0,3}\.?youtube\.com/.*?v=([a-zA-Z0-9_-]+)&?.*")
(def regex-youtube-shortened-url #"^https?://youtu\.be/([a-zA-Z0-9_-]+)\??.*")

(defn video-url->video-id [url]
  (cond 
    (re-matches regex-youtube-url url)
    (->> url (re-matches regex-youtube-url) second)
    (re-matches regex-youtube-shortened-url url)
    (->> url (re-matches regex-youtube-shortened-url) second)
    ))

(video-url->video-id test-url)
;;(video-url->video-id "https://www.youtube.com/watch?v=wM75ulDRkhI&t=10")
;;(video-url->video-id "https://youtu.be/vC9Qh709gas?t=1m13s")

(def regex-youtube-starttime #"^https?://.*t=([0-9smh]+)&?.*")

(defn video-url->start-time [url]
  (if (re-matches regex-youtube-starttime url)
    (->> url (re-matches regex-youtube-starttime) second)
    "0"))

;;(video-url->start-time "https://www.youtube.com/watch?v=wM75ulDRkhI&t=2h2m")
;;(video-url->start-time "https://youtu.be/vC9Qh709gas")

(def regex-hours #".*?([0-9]+)h.*")
(def regex-minutes #".*?([0-9]+)m.*")
(def regex-seconds #".*?([0-9]+)s.*")
(def regex-number? #"[0-9]+")

(defn start-time->seconds [time-string]
  (if-not (numstring? time-string)
    (let [hours (->> time-string (re-matches regex-hours) second parse-int)
          minutes (->> time-string (re-matches regex-minutes) second parse-int)
          seconds (->> time-string (re-matches regex-seconds) second parse-int)]
      (+ (* hours 3600)
         (* minutes 60)
         seconds))
    (parse-int time-string)))

;;(start-time->seconds "1m23s")
;;(start-time->seconds "1s23m")
;;(start-time->seconds "1h23s")


(defn video-url->seconds [url]
  (-> url
      video-url->start-time
      start-time->seconds
      ))

;;(video-url->seconds "https://www.youtube.com/watch?v=wM75ulDRkhI&t=1m15s")

(defn is-youtube-url? [url]
  (-> (or (re-matches regex-youtube-url url)
          (re-matches regex-youtube-shortened-url url))
      boolean))


;;(is-youtube-url? test-url)
;;(is-youtube-url? "https://www.youtube.com/watch?v=wM75ulDRkhI&start=10")

(defrecord YoutubePlayer [context video-url event-channel]
  player/IPlayer
  (play [this])
  (pause [this])
  (fullscreen [this])
  (dispose [this]
    (.destroy context)
    ))

(defn ^:export create-youtubeplayer [dom-id video-url event-channel]
  (let [context
        (YT.Player. dom-id 
                    #js {:videoId (video-url->video-id video-url)
                         :playerVars #js {:autoplay 1 :start (video-url->seconds video-url)}
                         :width "100%"
                         :height "100%"
                         :events 
                         #js {:onStateChange
                              (fn [event]
                                (let [video-state (.-data event)]
                                  (case video-state
                                    -1 ;; NOT STARTED
                                    (put! event-channel (events/player-not-started))
                                    0 ;; ENDED
                                    (put! event-channel (events/player-ended))
                                    1 ;; PLAYING
                                    (put! event-channel (events/player-playing))
                                    2 ;; PAUSED
                                    (put! event-channel (events/player-paused))
                                    3 ;; BUFFERING
                                    (put! event-channel (events/player-buffering))
                                    5 ;; CUED
                                    (put! event-channel (events/player-cued)))))}})]
    (->YoutubePlayer context video-url event-channel)))
