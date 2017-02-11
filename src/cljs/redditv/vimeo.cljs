(ns redditv.vimeo
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.player :as player]
            [redditv.events :as events]))

(def regex-vimeo-url #"https?://vimeo.com/([0-9]+)&?.*")

(def ex-vimeo-url "https://vimeo.com/201783721")

(defn is-vimeo-url? [url]
  (-> (or 
       (re-matches regex-vimeo-url url))
      boolean))

;;(is-vimeo-url? ex-vimeo-url)

(defn video-url->video-id [url]
  (cond
    (re-matches regex-vimeo-url url)
    (->> url (re-matches regex-vimeo-url) second)))

;;(video-url->video-id ex-vimeo-url)

(defrecord VimeoPlayer [dom context video-url event-channel]
  player/IPlayer
  (play [this])
  (pause [this])
  (fullscreen [this])
  (dispose [this]
    (.remove dom)
    ))

(def vimeo-iframe-id "redditv-vimeo-player")

(defn create-vimeo-iframe [dom-id video-url event-channel]
  (let [iframe (.createElement js/document "iframe")
        video-id (video-url->video-id video-url)
        src (str "https://player.vimeo.com/video/"
                 video-id
                 "?api=1"
                 "&player_id=" vimeo-iframe-id)
        target (.getElementById js/document dom-id)]
    (doto iframe
      (.setAttribute "id" vimeo-iframe-id)
      (.setAttribute "src" src)
      (.setAttribute "width" "100%")
      (.setAttribute "height" "100%")
      (.setAttribute "frameborder" "0")
      (.setAttribute "webkiteallowfullscreen" true)
      (.setAttribute "mozallowfullscreen" true)
      (.setAttribute "allowfullscreen" true))
    
    (.addEventListener iframe "error" #(put! event-channel (events/player-not-started)))
    (.appendChild target iframe)
    iframe))

(defn attach-vimeo-player []
  (let [iframe (aget (js/$ (str "#" vimeo-iframe-id)) 0)
        player (js/$f iframe)]
    player))

(defn ^:export create-vimeo-player [dom-id video-url event-channel]
  (let [iframe (create-vimeo-iframe dom-id video-url event-channel)
        player (attach-vimeo-player)]
    (.addEvent player "ready" 
               (fn []
                 (.addEvent player "playing" #(put! event-channel (events/player-playing)))
                 (.addEvent player "finish" #(put! event-channel (events/player-ended)))
                 (.addEvent player "error" #(put! event-channel (events/player-not-started)))
                 
                 (.api player "play")
                 ))
    (.log js/console "player")
    (.log js/console player)
    (->VimeoPlayer iframe player video-url event-channel)))
