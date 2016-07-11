(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! mult tap]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events]
            [goog.history.EventType :as EventType]

            ;;Local
            [redditv.player :as p]
            [redditv.youtube :as yt]
            [redditv.utils :as utils]
            [redditv.reddit :as reddit]
            [redditv.icons :as icons]
            [redditv.events :as events]
            )
  (:import goog.History))

(enable-console-print!)

(defonce app-state
  (atom {:subreddit "videos"
         :playlist []
         :playlist-selected nil
         :layout 
         {:toggle-playlist true} ;; True --> Expanded
         }))

;;
;; Secretary Routes
;;

(secretary/set-config! :prefix "#")

(defn set-hash!
  "Set the location hash of a js/window object." 
  ([v] (set-hash! (.-location js/window)))
  ([loc v] (aset loc "hash" v)))

;; Providing Channels via /r/
(defroute subreddit-path "/r/:subreddit" 
  [subreddit]
  (swap! app-state assoc :subreddit subreddit))

;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

;;
;; Om React Components
;;

(defn player-component [entry owner]
  (reify
    om/IInitState
    (init-state [_]
      {:player (p/create-nullplayer)
       :event-channel (chan)
       })

    om/IWillMount
    (will-mount [this]
      (let [event-channel (om/get-state owner :event-channel)
            player-channel (om/get-state owner :player-channel)]
        (go-loop []
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
            (recur)))
        ))

    om/IWillReceiveProps
    (will-receive-props [this entry]
      (p/dispose (om/get-state owner :player))
      (cond
        ;; If it's nil, set it to a nullplayer
        (nil? entry)
        (om/set-state! owner :player (p/create-nullplayer))
        ;; If it's not a duplicate entry, we create a new player to serve the video
        (not= (om/get-state owner :playlist-selected) entry)
        (let [event-channel (om/get-state owner :event-channel)
              new-player
              (yt/create-youtubeplayer 
               "redditv-player"
               (-> entry :url)
               event-channel
               )]
          (om/set-state! owner :player new-player))))

    om/IRenderState
    (render-state [_ state]
      (let []
        (dom/div #js {:id "redditv-player-container"}
                 (dom/div #js {:id "redditv-player"})))
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
                        (put! selection-channel (events/video-select @entry)))}
                 [(dom/div #js {:className "entry-title noselect"} (-> entry :title))
                  (dom/img #js {:className "entry-thumbnail"
                                :src (let [thumbnail (-> entry :thumbnail)]
                                       (cond 
                                         (= thumbnail "nsfw")
                                         "http://i.imgur.com/KZOsckv.jpg"
                                         (= thumbnail "default")
                                         "http://i.imgur.com/9wEJlnk.gif"
                                         :else
                                         thumbnail))})])))))

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
                                          (put! selection-channel (events/video-previous)))}
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
                                          (put! selection-channel (events/video-next)))}
                                   (icons/google-icon "arrow_forward"))])]))))

(defn leftpane-component [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [layout-channel]}]
      (dom/div #js {:className "redditv-pane"}
               (dom/div #js {:className "button-pane"
                             :title "View Reddit Comments"
                             :onClick 
                             (fn [e]
                               (let [{:keys [permalink] :as entry} 
                                     (om/get-props owner :playlist-selected)]
                                 (.open js/window (str "http://www.reddit.com" permalink) "_blank")))}
                        (icons/google-icon "comment"))))))

(defn rightpane-component [app owner]
  (reify
    om/IInitState
    (init-state [_])

    om/IRenderState
    (render-state [this {:keys [layout-channel]}]
      (dom/div #js {:className "redditv-pane redditv-rightpane"}
               (dom/div #js {:className "button-pane"
                             :title "About Redditv"
                             :onClick
                             (fn [e]
                               (.open js/window (str "http://github.com/benzap/redditv"))
                               )}
                        (icons/google-icon "help"))))))

(defn handle-search-change [e owner {:keys [subreddit]}]
  (om/set-state! owner :subreddit (.. e -target -value)))

(defn update-playlist! 
  [app owner & {:keys [subreddit]
                :or {subreddit (-> app :subreddit)}}]
  (let [[success-channel error-channel]
        (reddit/get-subreddit-videos subreddit)]
    (println "Searching on subreddit: " subreddit)
    (om/transact!
     app
     #(merge % {:playlist []
                :playlist-selected nil}))
    (go (let [new-playlist (<! success-channel)]
          (om/transact! 
           app 
           #(merge % {:playlist new-playlist
                      :playlist-selected (first new-playlist)})
          )))
    error-channel))

(defn header-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:subreddit "videos"})

    om/IRenderState
    (render-state [this {:keys [subreddit] :as state}]
      (let [{:keys [title] :as selected} (app :playlist-selected)]
        (dom/div #js {:className "redditv-header"}
                 [(dom/div #js {:className "button-pane"
                                :title "Search Subreddit"
                                :style #js {:display "inline-block"}
                                :onClick
                                (fn [e]
                                  (om/update! app :subreddit subreddit)
                                  (update-playlist! app owner :subreddit subreddit))}
                           (icons/google-icon "search"))
                  (dom/span nil "/r/")
                  (dom/input #js {:type "text" :value subreddit
                                  :onChange #(handle-search-change % owner state)
                                  :onKeyDown 
                                  (fn [e]
                                    (let [key (.-key e)]
                                      (case key
                                        "Enter"
                                        (do 
                                          (om/update! app :subreddit subreddit)
                                          (update-playlist! app owner :subreddit subreddit))
                                        nil))
                                    )})
                  (dom/span #js {:id "header-entry-title"} title)])))))

(defn next-video! [app owner]
  (let [playlist (om/get-props owner :playlist)
        current-selection (om/get-props owner :playlist-selected)
        next-selection (utils/next-element playlist current-selection)]
    (om/update! app :playlist-selected next-selection)))

(defn previous-video! [app owner]
  (let [playlist (om/get-props owner :playlist)
        current-selection (om/get-props owner :playlist-selected)
        prev-selection (utils/prev-element playlist current-selection)]
    (om/update! app :playlist-selected prev-selection)))

(defn root-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      (update-playlist! app owner)
      (let [event-channel (chan)
            event-bus (mult event-channel)]
        {:event-channel event-channel
         :event-bus event-bus
         :selection-channel (chan)
         :player-channel (chan)
         :layout-channel (chan)}))

    om/IWillMount
    (will-mount [_]
      (let [event-channel (om/get-state owner :event-channel)
            event-bus (om/get-state owner :event-bus)
            selection-channel (om/get-state owner :selection-channel)
            player-channel (om/get-state owner :player-channel)
            layout-channel (om/get-state owner :layout-channel)]

        ;; Selections are propagated from the playlist-entry up via
        ;; the selection-channel. Change :playlist-selected to the
        ;; designated selection.
        (go-loop []
          (let [event (<! selection-channel)]
            (cond
              (events/is-video-select? event)
              (let [{:keys [entry]} event]
                (om/update! app :playlist-selected entry))
              (events/is-video-next? event)
              (next-video! app owner)
              (events/is-video-previous? event)
              (previous-video! app owner))
            (recur)))

        ;; Event hub. One of the events are passed down from the
        ;; event-channel in the player-component, in particular,
        ;; the :video-ended let's us know if we should move onto the
        ;; next video.
        (go-loop []
          (let [event (<! player-channel)]
            (cond
              (events/is-player-ended? event)
              (next-video! app owner)
              (events/is-player-not-started? event)
              (next-video! app owner)))
          (recur))))

    om/IRenderState
    (render-state [_ {:keys [selection-channel
                             player-channel
                             layout-channel]}]
      (dom/div #js {:className ""}
               [(om/build header-component app
                          {:state {:subreddit (-> app :subreddit)}})
                (om/build leftpane-component app
                          {:init-state {:layout-channel layout-channel}
                           :state {:layout (-> app :layout)}})
                (om/build player-component (-> app :playlist-selected)
                          {:init-state {:player-channel player-channel}
                           :state {:layout (-> app :layout)}})
                (om/build rightpane-component app
                          {:init-state {:layout-channel layout-channel}
                           :state {:layout (-> app :layout)}})
                (om/build playlist-component app
                          {:init-state {:selection-channel selection-channel
                                        :layout-channel layout-channel}})]))

    om/IDidMount
    (did-mount [_]
      (.addEventListener 
       js/window "keydown" 
       (fn [e] 
         (let [keycode (.-keyCode e)]
           (case keycode
             37 ;; Left Arrow Key
             (previous-video! app owner)
             39 ;; Right Arrow Key
             (next-video! app owner)
             nil)))))))

(om/root
 root-component
 app-state
 {:target (js/document.getElementById "app")})
