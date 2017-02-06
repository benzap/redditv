(ns redditv.components.header
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]))

(rum/defc c-header < rum/reactive
  [app-state]
  (let [{:keys [subreddit]} (rum/react app-state)
        selected (playlist/get-selected app-state)]
    [:.redditv-header
     [:span "redditv -"]
     [:span (str "/r/" subreddit)]
     [:span (str (-> selected :title))]]))
