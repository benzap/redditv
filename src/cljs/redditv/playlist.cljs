(ns redditv.playlist
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [redditv.utils :refer [set-hash! force-app-reload! 
                                   app-hash open-reddit-comment
                                   set-loading-animation!]]
            [redditv.reddit :as reddit]
            [redditv.reddit.request :as reddit.request]
            [redditv.components.utils :refer [toggle-fullscreen-header!]]
            [redditv.entropy :as entropy]
            ))


(defn has-video-with-id?
  "Returns true if a video post within the playlist has the given id,
  otherwise returns false."
  [videos id]
  (->> videos
       (filter #(= (:id %) id))
       first boolean))


(defn get-index-of-id
  "Returns the index of the video post in the playlist with the given
  id."
  [app-state id]
  (let [playlist (-> @app-state :playlist)]
    (if (> (count playlist) 0)
      (loop [i 0]
        (let [video-id (-> playlist (nth i) :id)]
          (cond (= video-id id) i
                (>= i (-> playlist count dec)) 0
                :else (recur (inc i)))))
      0)))


(defn reload [app-state & {:keys [search reload?] :or {search nil reload? false}}]
  (set-loading-animation! app-state true)
  (go
    (let [{:keys [subreddit
                  settings-show-nsfw
                  settings-video-count
                  settings-video-category
                  playlist-selected-id
                  ]} @app-state
          [out err] (reddit.request/get-subreddit-videos
                     {:subreddit subreddit
                      :allow-nsfw? settings-show-nsfw
                      :rlimit settings-video-count
                      :category settings-video-category})

          ;; Swap out, so we have a loading animation while we wait for the video results
          _ (swap! app-state merge {:playlist []})
          
          ;; Grab the video results
          videos (<! out)

          ;; Check to see if the selected id is in the video
          ;; listing. If it isn't, put it at the front of the video
          ;; playlist.
          videos (if (or (has-video-with-id? videos playlist-selected-id)
                         (not playlist-selected-id))
                   videos
                   (let [[success _] (reddit.request/get-subreddit-video-by-id playlist-selected-id)
                         result (<! success)]
                     (if-not (nil? result)
                       (concat [(assoc result :redditv-oddity? true)] videos)
                       videos)))
          ]
      (when videos
        (swap! app-state merge 
               {:playlist videos
                :playlist-selected-id
                (if (has-video-with-id? videos playlist-selected-id)
                  playlist-selected-id
                  (-> videos first :id))})
        (set-hash! (app-hash app-state))
        (when reload?
          (force-app-reload! app-state))))
    (set-loading-animation! app-state false)))


(defn get-selected
  "Gets the currently selected playlist item within the playlist"
  [app-state]
  (let [playlist (-> @app-state :playlist)
        get-idx (partial get-index-of-id app-state)
        index (-> @app-state :playlist-selected-id get-idx (mod (count playlist)))]

    (when (> (count playlist) 0)
      (nth playlist index))))


(defn select-next
  "Makes the playlist change the currently selected to the next item
  in the playlist collection.
  
  Notes:
  
  - Also toggles the fullscreen header on. This gets changed back with
  redditv.entropy.

  - Changes the url hash to reflect the new video being played"
  [app-state]
  (let [{:keys [playlist-selected-id playlist subreddit]} @app-state
        get-idx (partial get-index-of-id app-state)
        size (count playlist)
        index (-> playlist-selected-id get-idx inc (mod size))
        new-id (when (> size 0) (:id (nth playlist index)))]
    (swap! app-state assoc
           :playlist-selected-id new-id
           :fullscreen-hide-header? false)
    (entropy/push-fake-mouse-event! app-state)
    (set-hash! (app-hash app-state))
    new-id))


(defn select-prev
  "Makes the playlist change the currently selected to the previous
  item in the playlist collection.

  Notes:
  
  - Also toggles the fullscreen header on. Small hack!
  - Changes the url hash to relflect the new video being played
  "
  [app-state]
  (let [{:keys [playlist-selected-id playlist subreddit]} @app-state
        get-idx (partial get-index-of-id app-state)
        size (count playlist)
        index (-> playlist-selected-id get-idx dec)
        index (if (< index 0) (dec size) index)
        new-id (when (> size 0) (:id (nth playlist index)))]
    (swap! app-state assoc
           :playlist-selected-id new-id
           :fullscreen-hide-header? false)
    (set-hash! (app-hash app-state))
    new-id))


(defn open-current-video-comments [app-state]
  (let [video (get-selected app-state)]
    (open-reddit-comment video)))
