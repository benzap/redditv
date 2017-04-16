(ns redditv.components.player
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap]]
            [rum.core :as rum]
            [redditv.player :as player]
            [redditv.playlist :as playlist]
            [redditv.youtube :as yt]
            [redditv.vimeo :as vimeo]
            [redditv.events :as events]
            [redditv.utils :refer [app-css-class-layout]]
            ))

(def player-instance (atom nil))

(defn generate-video-player
  [app-state item event-channel]
  (let [url (:url item)]
    (cond
      (nil? url)
      (player/create-nullplayer)
      (yt/is-youtube-url? url)
      (yt/create-youtubeplayer "redditv-player" url event-channel)
      (vimeo/is-vimeo-url? url)
      (vimeo/create-vimeo-player "redditv-player" url event-channel)
    )))

(def mixin-player-handler
  {:did-mount (fn [state]
                (let [event-channel (chan)
                      app-state (-> state :rum/args first)
                      fullscreen (-> state :rum/args (nth 2) deref)]
                  (go-loop []
                    (let [event (<! event-channel)]
                      ;;events
                      (cond
                        (or (events/is-player-not-started? event)
                            (events/is-player-ended? event))
                        (playlist/select-next app-state)
                        (events/is-player-playing? event)
                        (when fullscreen
                          (when-let [instance @player-instance]
                            (player/fullscreen instance)
                            )))
                      (recur)))

                  (-> state 
                      (assoc ::event-channel event-channel)
                      (assoc ::player-instance (player/create-nullplayer))
                      (assoc ::current-item (playlist/get-selected app-state))
                      )
                  ))

   :will-update (fn [state]
                 (let [app-state (-> state :rum/args first)
                       event-channel (-> state ::event-channel)
                       current-item (playlist/get-selected app-state)
                       old-item (-> state ::current-item)]
                   (if (not= current-item old-item)
                     (let [_ (when (-> state ::player-instance) 
                               (player/dispose (-> state ::player-instance)))
                           instance
                           (generate-video-player app-state current-item event-channel)]
                       (reset! player-instance instance)
                       (-> state
                           (assoc ::player-instance instance)
                           (assoc ::current-item current-item)))
                     state)))

   :will-unmount (fn [state]
                   (reset! player-instance nil)
                   (-> state
                       (dissoc ::event-channel)
                       (dissoc ::player-instance)
                       (dissoc ::current-item)))})

(rum/defcs c-player
  <
  rum/reactive
  mixin-player-handler
  [state app-state initial-load? playlist-index show-playlist fullscreen]
  (let [initial-load? (rum/react initial-load?)
        index (rum/react playlist-index)
        show-playlist (rum/react show-playlist)
        fullscreen (rum/react fullscreen)]
    [(app-css-class-layout app-state :#redditv-player-container)
     [:#redditv-player]]))
