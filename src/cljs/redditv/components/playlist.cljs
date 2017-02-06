(ns redditv.components.playlist
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]))

(def nsfw-thumbnail-url "http://i.imgur.com/KZOsckv.jpg")
(def default-thumbnail-url "http://i.imgur.com/9wEJlnk.gif")

(rum/defc c-playlist-item [[i item]]
  (let [title (str (-> item :title))
        thumbnail (-> item :thumbnail)
        thumbnail (case thumbnail
                    "nsfw" nsfw-thumbnail-url
                    "default" default-thumbnail-url
                    nil default-thumbnail-url
                    thumbnail)]
  [:.redditv-playlist-item
   [:.redditv-playlist-item-title.noselect
    {:title title} title]
   [:img.redditv-playlist-item-thumbnail
    {:src thumbnail
     :title title}]]))

(rum/defc c-playlist < rum/reactive
  [app-state]
  (let [{:keys [playlist playlist-selected-index]} (rum/react app-state)
        playlist-items (map-indexed vector playlist)]
    [:.redditv-playlist
     [:.redditv-playlist-container
      (for [playlist-item playlist-items]
        (c-playlist-item playlist-item))]]))
