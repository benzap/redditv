(ns redditv.playlist
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [redditv.reddit :as reddit]))

(defn reload [app-state]
  (go (let [subreddit (-> @app-state :subreddit)
            [out err] (reddit/get-subreddit-videos subreddit)
            videos (<! out)]
        (when videos
          (swap! app-state merge {:playlist videos :playlist-selected-index 0})))))

(defn get-selected [app-state]
  (let [index (-> @app-state :playlist-selected-index)
        playlist (-> @app-state :playlist)]
    (when (> (count playlist) 0)
      (-> @app-state :playlist (nth index)))))

(defn select-next [app-state]
  (let [{:keys [playlist-selected-index playlist]} @app-state
        size (count playlist)
        index (-> playlist-selected-index inc (mod size))]
    (swap! app-state assoc :playlist-selected-index index)
    index))

(defn select-prev [app-state]
  (let [{:keys [playlist-selected-index playlist]} @app-state
        size (count playlist)
        index (dec playlist-selected-index)
        index (if (< index 0) (dec size) index)]
    (swap! app-state assoc :playlist-selected-index index)
    index))
