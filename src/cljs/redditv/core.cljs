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

            ;; Rum Components
            [redditv.components.header :refer [c-header]]
            [redditv.components.sidepane :refer [c-sidepane]]
            [redditv.components.playlist :refer [c-playlist]]
            [redditv.components.player :refer [c-player]]
            [redditv.components.fullscreen-controls :refer [c-fullscreen-controls]]

            )
  (:import goog.History))

(enable-console-print!)

(defonce app-state
  (atom {:loading? true
         :initial-load? 0
         :subreddit config/default-subreddit
         :playlist []
         :playlist-selected-index 0
         :playlist-selected-search nil
         :show-playlist true
         :fullscreen false
         :show-search false
         :show-settings false
         :settings-show-nsfw true
         :settings-video-count config/default-video-count
         :settings-video-category config/default-video-category
         }))

(defonce initial-load? (rum/cursor-in app-state [:initial-load?]))
(defonce playlist-index (rum/cursor-in app-state [:playlist-selected-index]))
(defonce show-playlist (rum/cursor-in app-state [:show-playlist]))
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
         :settings-video-category (get query-params :sort config/default-video-category)
         :settings-video-count (parse-int (get query-params :count (str config/default-video-count))))
  (force-app-reload! app-state)
  #_(storage/save-app-state! @app-state))

(defroute subreddit-path-with-index #"/r/([\w\d]+)/(\d+)"
  [subreddit index query-params]
  (swap! app-state assoc
         :subreddit subreddit
         :playlist-selected-index (parse-int index)
         :playlist-selected-search nil
         :settings-video-category (get-in query-params [:query-params :sort]
                                          config/default-video-category)
         :settings-video-count (parse-int (get-in query-params [:query-params :count]
                                                  (str config/default-video-count)))
         :fullscreen (parse-bool (get-in query-params [:query-params :fullscreen] "false"))
         )
  (force-app-reload! app-state)
  #_(storage/save-app-state! @app-state))

(defroute subreddit-path-with-search #"/r/([\w\d]+)/(\d)/([\w\d]+)"
  [subreddit index search query-params]
  (swap! app-state assoc
         :subreddit subreddit
         :playlist-selected-index (parse-int index)
         :playlist-selected-search search
         :settings-video-category config/default-video-category
         :settings-video-count (parse-int (get-in query-params [:query-params :count]
                                                  (str config/default-video-count)))
         :fullscreen (parse-bool (get-in query-params [:query-params :fullscreen] "false")))
  (force-app-reload! app-state)
  #_(storage/save-app-state! @app-state))


#_(defroute default-route "*" []
  (if-let [state (storage/load-app-state)]
    (reset! app-state state)
    (playlist/reload app-state))
  (force-app-reload! app-state))


;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
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
                         nil))))))})

(rum/defc app 
  < mixin-keyboard-controls
  []
  [:.redditv-main
   (c-header app-state)
   (c-sidepane app-state)
   (c-player app-state initial-load? playlist-index show-playlist fullscreen)
   (c-playlist app-state)
   (c-fullscreen-controls app-state)])

(playlist/reload app-state :reload? true)

(rum/mount (app) (.querySelector js/document "#app"))

(def search (partial playlist/search-subreddit app-state))
(aset js/window "search" search)

#_(println (clj->js @app-state))
