(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [rum.core :as rum]
            [goog.events]
            [goog.history.EventType :as EventType]

            ;; Local
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
            )
  (:import goog.History))

(enable-console-print!)

(defonce app-state
  (atom {:subreddit "videos"
         :playlist []
         :playlist-selected-index -1
         :show-playlist true
         :show-search false
         :show-settings false
         }))

(defonce playlist-index (rum/cursor-in app-state [:playlist-selected-index]))

(playlist/reload app-state)

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

(rum/defc app []
  [:.redditv-main
   (c-header app-state)
   (c-sidepane app-state)
   (c-player app-state playlist-index)
   (c-playlist app-state)])

(rum/mount (app) (.querySelector js/document "#app"))

