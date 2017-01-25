(ns redditv.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [rum.core :as rum]
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

(rum/defc label [text]
  [:div {:class "label"} text])

(rum/mount (label "hello ben!") (.querySelector js/document "#app"))
