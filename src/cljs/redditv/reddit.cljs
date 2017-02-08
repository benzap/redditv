(ns redditv.reddit
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [redditv.jsonp :refer [send-jsonp]]
            [redditv.youtube :as yt]
            [redditv.vimeo :as vimeo]))

(def reddit-url "https://www.reddit.com")

(defn get-subreddit-posts [subreddit]
  (let [output-channel (chan)
        url (str reddit-url "/r/" subreddit ".json?limit=100")
        [success-channel error-channel] (send-jsonp url)]
    (go (let [result (js->clj (<! success-channel) :keywordize-keys true)
              data (-> result :data :children vec)]
          (put! output-channel (map #(:data %) data))))
    [output-channel error-channel]))

(defn post-is-video? [post]
  (or
   (yt/is-youtube-url? (post :url))
   (vimeo/is-vimeo-url? (post :url))))

(defn get-subreddit-videos [subreddit]
  (let [output-channel (chan)
        [success-channel error-channel] (get-subreddit-posts subreddit)]
    (go (let [posts (<! success-channel)
              videos (filterv post-is-video? posts)]
          (put! output-channel videos)))
    [output-channel error-channel]))
