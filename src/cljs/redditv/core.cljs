(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [rum.core :as rum]
            [goog.events]
            [goog.history.EventType :as EventType]

            ;; Local
            [redditv.config :as config]
            [redditv.utils :refer [parse-int
                                   parse-bool
                                   set-hash!
                                   force-app-reload!
                                   app-hash
                                   query-in-focus?
                                   app-css-class-layout]]
            [redditv.player :as p]
            [redditv.youtube :as yt]
            [redditv.utils :as utils]
            [redditv.reddit :as reddit]
            [redditv.playlist :as playlist]
            [redditv.icons :as icons]
            [redditv.events :as events]
            [redditv.storage :as storage]
            [redditv.animation :as anim]
            [redditv.entropy :as entropy]

            ;; Rum Components
            [redditv.components.utils :refer [toggle-fullscreen-controls!
                                              toggle-fullscreen-header!]]
            [redditv.components.header :refer [c-header]]
            [redditv.components.sidepane :refer [c-sidepane]]
            [redditv.components.playlist :refer [c-playlist]]
            [redditv.components.player :refer [c-player]]
            [redditv.components.fullscreen-controls :refer [c-fullscreen-controls]]
            )
  (:import goog.History))


(enable-console-print!)


(defonce app-state
  (atom {:mouse-channel (chan)
         :loading? true
         :initial-load? true
         :force-reload-counter 0
         :subreddit config/default-subreddit
         :subreddit-after-id nil
         :playlist []
         :playlist-selected-id nil
         :playlist-selected-search nil
         :show-playlist true
         :fullscreen false
         :fullscreen-hide-header? false
         :fullscreen-hide-controls? false
         :show-search false
         :show-settings false
         :settings-show-nsfw true
         :settings-video-count config/default-video-count
         :settings-video-category config/default-video-category
         }))


(defonce force-reload-counter (rum/cursor-in app-state [:force-reload-counter]))
(defonce playlist (rum/cursor-in app-state [:playlist]))
(defonce playlist-id (rum/cursor-in app-state [:playlist-selected-id]))
(defonce show-playlist (rum/cursor-in app-state [:show-playlist]))
(defonce show-settings (rum/cursor-in app-state [:show-settings]))
(defonce show-search (rum/cursor-in app-state [:show-search]))
(defonce fullscreen (rum/cursor-in app-state [:fullscreen]))

;;
;; Secretary Routes
;;

(secretary/set-config! :prefix "#")

;; Providing Channels via /r/
(defroute subreddit-path "/r/:subreddit"
  [subreddit query-params]
  (swap! app-state assoc
         :subreddit subreddit
         :subreddit-after-id (get query-params :after nil)
         :settings-video-category (get query-params :sort config/default-video-category)
         :settings-video-count (parse-int (get query-params :count (str config/default-video-count))))
  (force-app-reload! app-state))


(defroute subreddit-path-with-id #"/r/([\w\d]+)/([\w\d]+)"
  [subreddit id query-params]
  (swap! app-state assoc
         :subreddit subreddit
         :subreddit-after-id (get-in query-params [:query-params :after] nil)
         :playlist-selected-id id
         :settings-video-category (get-in query-params [:query-params :sort]
                                          config/default-video-category)
         :settings-video-count (parse-int (get-in query-params [:query-params :count]
                                                  (str config/default-video-count)))
         :fullscreen (parse-bool (get-in query-params [:query-params :fullscreen] "false"))))


(defroute default-route "*" []
  (playlist/reload app-state))


(defn on-navigate-handler [url-obj]
  (when (:initial-load? @app-state)
    (swap! app-state assoc :initial-load? false)
    (secretary/dispatch! (.-token url-obj))))


;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE on-navigate-handler)
  (doto h (.setEnabled true)))


(def mixin-keyboard-controls 
  {:did-mount (fn [state]
                (.addEventListener 
                 js/window "keydown"
                 (fn [e]
                   (when-not (query-in-focus? "#input-search-bar")
                     (let [keycode (-> e .-keyCode)]
                       (case keycode
                         27 ;; ESC Key
                         (swap! app-state assoc :fullscreen false)
                         37 ;; Left Arrow Key
                         (playlist/select-prev app-state)
                         39 ;; Right Arrow Key
                         (playlist/select-next app-state)
                         83 ;; Letter 's'
                         (swap! app-state assoc :show-search true)
                         67 ;; Letter 'c'
                         (playlist/open-current-video-comments app-state)
                         70
                         (utils/set-fullscreen (.querySelector js/document "#app"))
                         nil)))))
                state)})


(rum/defc app 
  <
  mixin-keyboard-controls
  (entropy/mixin-fullscreen-mouseover app-state)
  []
  [:.redditv-main
   (c-header app-state)
   (c-sidepane app-state show-settings show-search show-playlist fullscreen)
   (c-player app-state force-reload-counter playlist-id show-playlist fullscreen)
   (c-playlist app-state 
               {:playlist playlist :playlist-selected-id playlist-id
                :fullscreen fullscreen :show-playlist show-playlist})
   (c-fullscreen-controls app-state)])


(playlist/reload app-state :reload? true)
(rum/mount (app) (.querySelector js/document "#app"))


(defn toggle-controls [x]
  (toggle-fullscreen-controls! app-state x))


(defn toggle-header [x]
  (toggle-fullscreen-header! app-state x))
