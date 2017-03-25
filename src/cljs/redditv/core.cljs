(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [rum.core :as rum]
            [goog.events]
            [goog.history.EventType :as EventType]

            ;; Local
            [redditv.utils :refer [parse-int set-hash! force-app-reload! app-hash]]
            [redditv.player :as p]
            [redditv.youtube :as yt]
            [redditv.utils :as utils]
            [redditv.reddit :as reddit]
            [redditv.playlist :as playlist]
            [redditv.icons :as icons]
            [redditv.events :as events]

            ;; Rum Components
            [redditv.components.header :refer [c-header]]
            [redditv.components.sidepane :refer [c-sidepane]]
            [redditv.components.playlist :refer [c-playlist]]
            [redditv.components.player :refer [c-player]]

            ;; JS Dependencies
            [cljsjs.react-select]
            )
  (:import goog.History))

(enable-console-print!)

(defonce app-state
  (atom {:initial-load? 0
         :subreddit "videos"
         :playlist []
         :playlist-selected-index 0
         :show-playlist true
         :fullscreen false
         :show-search false
         :show-settings false
         :settings-show-nsfw true
         :settings-video-count 100
         :settings-video-category "hot"
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
         :settings-video-category
         (get query-params :sort "hot"))
  (playlist/reload app-state))

(defroute subreddit-path-with-index #"/r/([\w\d]+)/(\d+)"
  [subreddit index]
  (swap! app-state assoc
         :subreddit subreddit
         :playlist-selected-index (parse-int index))
  (playlist/reload app-state))

;; Default route goes to /r/videos
(defroute default-route "*" []
  (playlist/reload app-state)
  (set-hash! (app-hash app-state)))

;; Quick and dirty history configuration.
(let [h (History.)]
  (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
  (doto h (.setEnabled true)))

(def mixin-keyboard-controls 
  {:did-mount (fn [state]
                (.addEventListener 
                 js/window "keydown"
                 (fn [e]
                   (let [keycode (-> e .-keyCode)]
                     (case keycode
                       37 ;; Left Arrow Key
                       (playlist/select-prev app-state)
                       39 ;; Right Arrow Key
                       (playlist/select-next app-state)
                       nil)))))})

(rum/defc app 
  < mixin-keyboard-controls
  []
  [:.redditv-main
   (c-header app-state)
   (c-sidepane app-state)
   (c-player app-state initial-load? playlist-index show-playlist fullscreen)
   (c-playlist app-state)])

(rum/mount (app) (.querySelector js/document "#app"))

