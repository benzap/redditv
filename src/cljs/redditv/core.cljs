(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            
            ;;Local
            [redditv.player :as p]
            [redditv.youtube :as yt]
            [redditv.utils :as utils]
            [redditv.reddit :as reddit]
            [redditv.icons :as icons]
            ))

(enable-console-print!)

(defonce app-state 
  (atom {:subreddit "videos"
         :playlist []
         :playlist-selected nil
         }))

(defn player-component [entry owner]
  (reify
    om/IInitState
    (init-state [_]
      {:player (p/create-nullplayer)
       :event-channel (chan)})

    om/IWillMount
    (will-mount [this]
      (let [event-channel (om/get-state owner :event-channel)
            player-channel (om/get-state owner :player-channel)]
        (go (loop []
              (let [{:keys [event-type] :as event} (<! event-channel)]
                (case event-type
                  :video-playing
                  (println "Video Playing")
                  :video-paused
                  (println "Video Paused")
                  :video-buffering
                  (println "Video Buffering")
                  :video-ended
                  (println "Video Ended")
                  :video-not-started
                  (println "Video Not Started"))
                (put! player-channel event)
                (recur))))
        ))

    om/IWillReceiveProps
    (will-receive-props [this entry]
      (p/dispose (om/get-state owner :player))
      (when-not (nil? entry)
        (let [event-channel (om/get-state owner :event-channel)
              new-player
              (yt/create-youtubeplayer 
               "redditv-player"
               (-> entry :url)
               event-channel
               )]
          (om/set-state! owner :player new-player)
        )))

    om/IRender
    (render [_]
      (dom/div #js {:id "redditv-player-container"}
               (dom/div #js {:id "redditv-player"}))
      )))

(defn playlist-entry-component [entry owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [selected
                             selection-channel]}]
      (let [classes (if (= (:title selected) (:title (and entry @entry)))
                      "redditv-playlist-entry selected"
                      "redditv-playlist-entry")]
        (dom/div #js {:className classes
                      :title (:title entry)
                      :onClick 
                      (fn [e]
                        (put! selection-channel @entry))}
                 [(dom/div #js {:className "entry-title noselect"} (-> entry :title))
                  (dom/img #js {:className "entry-thumbnail"
                                :src (-> entry :thumbnail)})
                  ])
      ))))

(defn playlist-component [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [selection-channel]}]
      (dom/div #js {:id "redditv-playlist-root"}
               [(dom/div #js {:id "redditv-playlist-leftpane"}
                         [(icons/google-icon "arrow-back")])
                (dom/div #js {:id "redditv-playlist-container"}
                         (om/build-all playlist-entry-component (-> app :playlist)
                                       {:init-state {:selection-channel selection-channel}
                                        :state {:selected (-> app :playlist-selected)}})
                         )
                (dom/div #js {:id "redditv-playlist-rightpane"}
                         [])]))))

(defn navigation-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:toggle true})
    om/IRenderState
    (render-state [this state])
    ))

(defn update-playlist! [app owner]
  (let [subreddit (om/get-props owner :subreddit)
        [success-channel error-channel]
        (reddit/get-subreddit-videos subreddit)]
    (go (let [new-playlist (<! success-channel)]
          (when-not (om/get-props owner :playlist-selected)
            (om/update! app :playlist-selected (first new-playlist)))
          (om/update! app :playlist new-playlist)
          ))
    error-channel
    ))

(defn next-video! [app owner]
  (let [playlist (om/get-props owner :playlist)
        current-selection (om/get-props owner :playlist-selected)
        next-selection (utils/next-element playlist current-selection)]
    (println "Videos:" (map #(:title %) playlist))
    (println "Current Selection: " (:title current-selection))
    (println "Playing Next: " (-> next-selection :title))
    (om/update! app :playlist-selected next-selection)
    ))

(defn root-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      (update-playlist! app owner)
      {:selection-channel (chan)
       :player-channel (chan)
       })
    om/IWillMount
    (will-mount [_]
      (let [selection-channel (om/get-state owner :selection-channel)
            player-channel (om/get-state owner :player-channel)]

        ;; Selections are propagated from the playlist-entry up via
        ;; the selection-channel. Change :playlist-selected to the
        ;; designated selection.
        (go (loop []
              (let [playlist-entry (<! selection-channel)]
                (om/update! app :playlist-selected playlist-entry)
                (recur))))

        ;; Event hub. One of the events are passed down from the
        ;; event-channel in the player-component, in particular,
        ;; the :video-ended let's us know if we should move onto the
        ;; next video.
        (go (loop []
              (let [{:keys [event-type] :as event} (<! player-channel)]
                (case event-type
                  :video-ended
                  (next-video! app owner)
                  :video-not-started
                  (next-video! app owner)
                  nil))
              (recur)))
        
        ))
    om/IRenderState
    (render-state [_ {:keys [selection-channel
                             player-channel]}]
      (dom/div #js {:className ""} 
       [
        (om/build player-component (-> app :playlist-selected)
                  {:init-state {:player-channel player-channel}})
        (om/build playlist-component app
                  {:init-state {:selection-channel selection-channel}})
        ]))))

(om/root
 root-component
 app-state
 {:target (js/document.getElementById "app")})
