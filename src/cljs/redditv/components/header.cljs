(ns redditv.components.header
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]))

(rum/defc c-header < rum/reactive
  [app-state]
  (let [{:keys [subreddit]} (rum/react app-state)
        selected (playlist/get-selected app-state)]
    [:.redditv-header
     [:.redditv-header-flex
      [:.header-logo "redditv"]
      [:.header-subreddit (str "/r/" subreddit)]
      [:.header-title {:title (:title selected)} (str (:title selected))]]]))
