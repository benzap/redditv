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
         :layout 
         {:toggle-leftpane true
          :toggle-rightpane true
          :toggle-playlist true}
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
    om/IDidUpdate
    (did-update [this _ _]
      (let [selected-entry (om/get-state owner :selected)
            is-selected? (= (:title selected-entry) (:title (and entry @entry)))]
        (when is-selected?
          ;; scroll the div to offset correctly
          (let [dom-child (om/get-node owner)
                dom-root (.getElementById js/document "redditv-playlist-container")]
            (utils/align-to-root-left dom-root dom-child))
          )
        ))

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
                        (put! selection-channel {:event-type :video-select :entry @entry})
                        )}
                 [(dom/div #js {:className "entry-title noselect"} (-> entry :title))
                  (dom/img #js {:className "entry-thumbnail"
                                :src (let [thumbnail (-> entry :thumbnail)]
                                       (cond 
                                         (= thumbnail "nsfw")
                                         "http://i.imgur.com/KZOsckv.jpg"
                                         (= thumbnail "default")
                                         "http://i.imgur.com/9wEJlnk.gif"
                                         :else
                                         thumbnail))})
                  ])
      ))))

(defn playlist-component [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [selection-channel]}]
      (dom/div #js {:id "redditv-playlist-root"}
               [(dom/div #js {:id "redditv-playlist-leftpane"}
                         [(dom/div #js {:className "button-pane"
                                        :title "Hide Panes (not implemented)"}
                                   (icons/google-icon "zoom_out_map"))
                          (dom/div #js {:className "button-pane button-pane-tall"
                                        :title "Previous Video"
                                        :onClick
                                        (fn [e]
                                          (put! selection-channel {:event-type :video-previous}))}
                                   (icons/google-icon "arrow_back"))
                          ])
                (dom/div #js {:id "redditv-playlist-container"
                              :ref "playlist-scroll-container"}
                         (om/build-all playlist-entry-component (-> app :playlist)
                                       {:init-state {:selection-channel selection-channel}
                                        :state {:selected (-> app :playlist-selected)}})
                         )
                (dom/div #js {:id "redditv-playlist-rightpane"}
                         [(dom/div #js {:className "button-pane"
                                        :title "Hide Playlist (not implemented)"}
                                   (icons/google-icon "expand_more"))
                          (dom/div #js {:className "button-pane button-pane-tall"
                                        :title "Next Video"
                                        :onClick
                                        (fn [e]
                                          (put! selection-channel {:event-type :video-next}))}
                                   (icons/google-icon "arrow_forward"))
                          ])]))))

(defn leftpane-component [app owner]
  (reify
    om/IInitState
    (init-state [_])
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:className "redditv-pane redditv-leftpane"}
               (dom/div #js {:className "button-pane"
                             :title "Expand Left Pane"} 
                        (icons/google-icon "keyboard_arrow_right"))
               (dom/div #js {:className "button-pane"
                             :title "Change Subreddit"}
                        (icons/google-icon "search"))
               (dom/div #js {:className "button-pane"
                             :title "View Reddit Comments"
                             :onClick 
                             (fn [e]
                               (let [{:keys [permalink] :as entry} 
                                     (om/get-props owner :playlist-selected)]
                                 (.open js/window (str "http://www.reddit.com" permalink) "_blank")
                                 ))
                             }
                        (icons/google-icon "comment"))))
    ))

(defn rightpane-component [app owner]
  (reify
    om/IInitState
    (init-state [_])
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:className "redditv-pane redditv-rightpane"}
               (dom/div #js {:className "button-pane"
                             :title "Expand Right Pane"}
                        (icons/google-icon "keyboard_arrow_left"))))
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
    (om/update! app :playlist-selected next-selection)
    ))

(defn previous-video! [app owner]
  (let [playlist (om/get-props owner :playlist)
        current-selection (om/get-props owner :playlist-selected)
        prev-selection (utils/prev-element playlist current-selection)]
    (om/update! app :playlist-selected prev-selection)
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
              (let [{:keys [event-type] :as event} (<! selection-channel)]
                (case event-type
                  :video-select
                  (let [{:keys [entry]} event]
                    (om/update! app :playlist-selected entry))
                  :video-next
                  (next-video! app owner)
                  :video-previous
                  (previous-video! app owner)
                  nil)
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
               [(om/build leftpane-component app)
                (om/build player-component (-> app :playlist-selected)
                          {:init-state {:player-channel player-channel}})
                (om/build rightpane-component app)
                (om/build playlist-component app
                          {:init-state {:selection-channel selection-channel}})
                ]))
    om/IDidMount
    (did-mount [_]
      (.addEventListener 
       js/window "keydown" 
       (fn [e] 
         (let [keycode (.-keyCode e)]
           (case keycode
             37 ;;Left
             (previous-video! app owner)
             39
             (next-video! app owner)
             nil)
           )))
      )
    ))

(om/root
 root-component
 app-state
 {:target (js/document.getElementById "app")})
