(ns redditv.components.header
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]
            [redditv.utils :refer [decode-html-string]]))

(rum/defc c-header < rum/reactive
  [app-state]
  (let [{:keys [subreddit]} (rum/react app-state)
        selected (playlist/get-selected app-state)
        title (-> selected :title str decode-html-string)]
    [:.redditv-header
     [:.redditv-header-flex
      [:.header-logo "redditv"]
      [:.header-subreddit (str "/r/" subreddit)]
      [:.header-title {:title title} title]]]))
