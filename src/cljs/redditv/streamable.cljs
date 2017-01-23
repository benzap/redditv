(ns redditv.streamable
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.player :as player]
            [redditv.events :as events]))

(def example "https://streamable.com/wgdg")

(def regex-streamable-url #"https?://streamable.com/([a-zA-Z0-9])$")

(defn video-url->video-id [url]
  (when (re-matches regex-streamable-url url)
    (->> url (re-matches regex-streamable-url) second)))

(defn is-streamable-url? [url]
  (-> (re-matches regex-streamable-url url) boolean))

(defrecord StreamablePlayer [context video-url event-channel]
  player/IPlayer
  (play [this])
  (pause [this])
  (dispose [this]))

(defn create-streamableplayer [dom-id video-url event-channel])
