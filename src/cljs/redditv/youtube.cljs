(ns redditv.youtube
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.player :as player]))

(def regex-youtube-url #"^https?://www\.youtube\.com/.*?v=([a-zA-Z0-9_-]+)&?.*")
(def regex-youtube-shortened-url #"^https?://youtu\.be/([a-zA-Z0-9_-]+)\??.*")

(defn video-url->video-id [url]
  (cond 
    (re-matches regex-youtube-url url)
    (->> url (re-matches regex-youtube-url) second)
    (re-matches regex-youtube-shortened-url url)
    (->> url (re-matches regex-youtube-shortened-url) second)
    ))

;;(video-url->video-id "https://www.youtube.com/watch?v=wM75ulDRkhI&start=10")
;;(video-url->video-id "https://youtu.be/vC9Qh709gas?t=1m13s")

(defn is-youtube-url? [url]
  (-> (or (re-matches regex-youtube-url url)
          (re-matches regex-youtube-shortened-url url))
      boolean))

;;(is-youtube-url? "https://www.youtube.com/watch?v=wM75ulDRkhI&start=10")

(defrecord YoutubePlayer [context video-url event-channel]
  player/IPlayer
  (play [this])
  (pause [this])
  (dispose [this]
    (.destroy context)
    ))

(defn ^:export create-youtubeplayer [dom-id video-url event-channel]
  (let [context
        (YT.Player. dom-id 
                    #js {:videoId (video-url->video-id video-url)
                         :playerVars #js {:autoplay 1}
                         :width "100%"
                         :height "100%"
                         :events 
                         #js {:onStateChange
                              (fn [event]
                                (let [video-state (.-data event)]
                                  (case video-state
                                    -1 ;; NOT STARTED
                                    (put! event-channel {:event-type :video-not-started})
                                    0 ;; ENDED
                                    (put! event-channel {:event-type :video-ended})
                                    1 ;; PLAYING
                                    (put! event-channel {:event-type :video-playing})
                                    2 ;; PAUSED
                                    (put! event-channel {:event-type :video-paused})
                                    3 ;; BUFFERING
                                    (put! event-channel {:event-type :video-buffering})
                                    5 ;; CUED
                                    (put! event-channel {:event-type :video-cued})
                                  )))}})
        ]
    (->YoutubePlayer context video-url event-channel)
    ))
