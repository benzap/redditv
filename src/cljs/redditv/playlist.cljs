(ns redditv.playlist
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [redditv.utils :refer [set-hash! force-app-reload! 
                                   app-hash open-reddit-comment
                                   set-loading-animation!]]
            [redditv.reddit :as reddit]
            [redditv.reddit.request :as reddit.request]
            ))


(defn reload [app-state & {:keys [search reload?] :or {search nil reload? false}}]
  (set-loading-animation! app-state true)
  (swap! app-state merge {:playlist [] :playlist-selected-index 0})
  (go (let [{:keys [subreddit 
                    settings-show-nsfw 
                    settings-video-count
                    settings-video-category
                    playlist-selected-index
                    playlist-selected-search
                    ]} @app-state
            [out err] (if-not playlist-selected-search
                        (reddit.request/get-subreddit-videos {:subreddit subreddit
                                                              :allow-nsfw? settings-show-nsfw
                                                              :rlimit settings-video-count
                                                              :category settings-video-category})
                        (reddit/get-search-videos subreddit playlist-selected-search {:allow-nsfw? settings-show-nsfw}))
            videos (<! out)]
        (when videos
          (swap! app-state merge 
                 {:playlist videos
                  :playlist-selected-index
                  (if (< playlist-selected-index 0) 0 playlist-selected-index)})
          (set-hash! (app-hash app-state))
          (when reload?
            (force-app-reload! app-state))
          ))
      (set-loading-animation! app-state false)))


(defn has-video-with-id? [app-state id]
  (let [playlist (-> @app-state :playlist)]
    (->> playlist (filter #(= (:id %) id)) first boolean)))


(defn get-index-of-id [app-state id]
  (loop [i 0]
    (let [video-id (-> @app-state :playlist (nth i) :id)]
      (cond (= video-id id) i
            (>= i (-> @app-state :playlist count dec)) nil
            :else (recur (inc i))))))


(defn get-selected [app-state]
  (let [playlist (-> @app-state :playlist)
        index (-> @app-state :playlist-selected-index (mod (count playlist)))]

    (when (> (count playlist) 0)
      (nth playlist index))))


(defn select-next [app-state]
  (let [{:keys [playlist-selected-index playlist subreddit]} @app-state
        size (count playlist)
        index (-> playlist-selected-index inc (mod size))]
    (swap! app-state assoc :playlist-selected-index index)
    (set-hash! (app-hash app-state))
    index))


(defn select-prev [app-state]
  (let [{:keys [playlist-selected-index playlist subreddit]} @app-state
        size (count playlist)
        index (dec playlist-selected-index)
        index (if (< index 0) (dec size) index)]
    (swap! app-state assoc :playlist-selected-index index)
    (set-hash! (app-hash app-state))
    index))


(defn open-current-video-comments [app-state]
  (let [video (get-selected app-state)]
    (open-reddit-comment video)))


(defn search-subreddit [app-state search]
  (swap! app-state assoc :playlist-selected-search search)
  (reload app-state :reload? true))
