(ns redditv.reddit.post
  (:require 
   [redditv.youtube :as yt]
   [redditv.vimeo :as vimeo]
   [redditv.embedly :as embedly]))


(defn post-is-video? [post]
  (or
   (yt/is-youtube-url? (post :url))
   (vimeo/is-vimeo-url? (post :url))
   (embedly/is-embedly-post? post)))


(defn post-is-nsfw? [post]
  (:over_18 post))
