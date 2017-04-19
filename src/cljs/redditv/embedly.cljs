(ns redditv.embedly
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.utils :refer [decode-html-string]]
            [redditv.player :as player]
            [redditv.events :as events]))

(defn is-embedly-post? [item]
  (-> item :secure_media :oembed :html boolean))

(defn post->embedded-html [item]
  (-> item :secure_media :oembed :html))

(defrecord EmbedlyPlayer [dom context video-item event-channel]
  player/IPlayer
  (play [this])
  (pause [this])
  (fullscreen [this])
  (dispose [this]
    (.remove dom)
    ))

(defn gen-dom-node [html-string]
  (let [el-hold (.createElement js/document "div")
        _ (aset el-hold "innerHTML" html-string)]
    (aget el-hold "firstChild")))

(def embedly-iframe-class ".embedly-embed")

(defn create-embedly-iframe [dom-id html]
  (let [target (.getElementById js/document dom-id)
        iframe (-> html decode-html-string gen-dom-node)]
    (doto iframe
      (.setAttribute "width" "100%")
      (.setAttribute "height" "100%")
      (.setAttribute "frameborder" "0"))
    (.appendChild target iframe)))

(defn attach-embedly-player []
  (let [player (js/playerjs.Player. (.querySelector js/document embedly-iframe-class))]
    player))

(defn ^:export create-embedly-player [dom-id item event-channel]
  (let [html (post->embedded-html item)
        iframe (create-embedly-iframe dom-id html)
        player (attach-embedly-player)]
    (.on player "ready"
         (fn []
           (.log js/console "Player Ready")

           (.on player "play" #(put! event-channel (events/player-playing)))
           (if (.supports player "event" "ended")
             (.on player "ended" #(put! event-channel (events/player-ended)))
             #(put! event-channel (events/player-ended)))
           (.on player "error" #(put! event-channel (events/player-not-started)))

           (.setLoop player false)
           (.play player)
           ;; Sometimes the video doesn't play when you call 'play' right away
           (.setTimeout js/window (fn [] (.play player)) 500)
           ))
    (->EmbedlyPlayer iframe player item event-channel)
    ))
