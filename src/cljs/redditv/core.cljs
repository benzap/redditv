(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            
            ;;Local
            [redditv.player :as p]
            [redditv.youtube :as yt]
            [redditv.utils :as utils]
            ))

(enable-console-print!)

(defonce app-state 
  (atom {:subreddit "videos"
         :playlist
         [{:name "New Zealand Creepy Anti-Phone Driving"
           :page-url "https://www.youtube.com/watch?v=wM75ulDRkhI"
           :thumbnail "https://b.thumbs.redditmedia.com/JgKhncY_1UHynTmjGqUv4RkLdi8Q-vthCYqKLzpdh-g.jpg"
           :comments-url "https://www.reddit.com/r/videos/comments/4cgd0z/new_zealand_creepy_antiphone_driving/"}
          {:name "Path of a Lightsaber"
           :page-url "https://www.youtube.com/watch?v=gIDeOYSmQ1w"
           :thumbnail "https://a.thumbs.redditmedia.com/r2tZk9I5gV0vq3gceryEVw3bBSRKaQKOpk4rPqJZ9H8.jpg"
           :comments-url "https://www.reddit.com/r/videos/comments/4cc824/path_of_a_lightsaber/"}
          ]
         :playlist-selected (atom nil)
         
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
                  (put! player-channel event))
                (recur))))
        ))

    om/IWillReceiveProps
    (will-receive-props [this entry]
      (p/dispose (om/get-state owner :player))

      (let [event-channel (om/get-state owner :event-channel)
            new-player
            (yt/create-youtubeplayer 
             "redditv-player"
             (-> entry :page-url)
             event-channel
             )]
        (om/set-state! owner :player new-player)
        ))

    om/IRender
    (render [_]
      (dom/div #js {:id "redditv-player"})
      )))

(defn playlist-entry-component [entry owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [selected
                             selection-channel]}]
      (let [classes (if (= selected @entry)
                      "redditv-playlist-entry selected"
                      "redditv-playlist-entry")]
        (dom/div #js {:className classes
                      :onClick 
                      (fn [e]
                        (put! selection-channel @entry))}
                 (-> entry :name))
      ))))

(defn playlist-component [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [selection-channel]}]
      (dom/div #js {:id "redditv-playlist"}
               (om/build-all playlist-entry-component (-> app :playlist)
                             {:init-state {:selection-channel selection-channel}
                              :state {:selected (-> app :playlist-selected)}})
               ))))

(defn root-component [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:selection-channel (chan)
       :player-channel (chan)
       })
    om/IWillMount
    (will-mount [_]
      (let [selection-channel (om/get-state owner :selection-channel)
            player-channel (om/get-state owner :player-channel)]
        (go (loop []
              (let [playlist-entry (<! selection-channel)]
                (om/update! app :playlist-selected playlist-entry)
                (recur))))
        (go (loop []
              (let [{:keys [event-type]} (<! player-channel)]
                (case event-type
                  :video-ended
                  (let [playlist (om/get-props owner :playlist)
                        current-selection (om/get-props owner :playlist-selected)
                        next-selection (utils/next-element playlist current-selection)]
                    (om/update! app :playlist-selected next-selection)
                    )))
              (recur)))
        
        ))
    om/IRenderState
    (render-state [_ {:keys [selection-channel
                             player-channel]}]
      (dom/div 
       nil 
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
