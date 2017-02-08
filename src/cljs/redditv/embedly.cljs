(ns redditv.embedly
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]
            [redditv.player :as player]
            [redditv.events :as events]))

(def regex-liveleak-url #"https?://www.liveleak.com/view?i=([a-zA-Z0-9_-]+)&?.*")

(def ex-liveleak-url "https://www.liveleak.com/view?i=be4_1486363147")

(defn video-url->video-id [url]
  (cond 
    (re-matches regex-liveleak-url url)
    (->> url (re-matches regex-liveleak-url) second)
    ))

;;(video-url->video-id ex-liveleak-url)


(defn is-liveleak-url? [url]
  (-> (or (re-matches regex-liveleak-url url))
      boolean))
