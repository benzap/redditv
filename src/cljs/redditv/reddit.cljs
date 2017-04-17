(ns redditv.reddit
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.string :as string]
            [cljs.core.async :refer [put! chan <! close!]]
            [redditv.jsonp :refer [send-jsonp]]
            [redditv.youtube :as yt]
            [redditv.vimeo :as vimeo]
            [redditv.utils :refer [gen-query-params]]))

(def reddit-url "https://www.reddit.com")

(defn generate-subreddit-url [subreddit {:keys [limit category]
                               :or {limit 100 category "hot"}}]
  (let [base-url (str reddit-url "/r/" subreddit)
        link-categories #{"hot" "new" "rising"}
        [sort time] (string/split category #"_")]
    (if (link-categories category)
      (str base-url "/" sort "/.json" (gen-query-params {:limit limit}))
      (str base-url "/" sort "/.json" (gen-query-params
                                           {:limit limit
                                            :sort sort
                                            :t time})))))
                             
#_(generate-subreddit-url "videos" {:category "top_yearly" :limit 100})

(defn generate-search-url [subreddit search & {:keys [category]
                                               :or {category "relevance_all"}}]
  (let [base-url (str reddit-url "/r/" subreddit "/search")
        search (.encodeURIComponent js/window search)
        [sort time] (string/split category #"_")]
    (str base-url ".json" (gen-query-params
                           {:q search
                            :sort sort
                            :t (or time "relevance")
                            :restrict_sr "on"
                            :limit 100}))))

(generate-search-url "videos" "doggo")

(defn get-subreddit-posts [subreddit opts]
  (let [output-channel (chan)
        url (generate-subreddit-url subreddit opts)
        [success-channel error-channel] (send-jsonp url)]
    (go (let [result (js->clj (<! success-channel) :keywordize-keys true)
              data (-> result :data :children vec)]
          (put! output-channel (map #(:data %) data))))
    [output-channel error-channel]))

(defn post-is-video? [post]
  (or
   (yt/is-youtube-url? (post :url))
   (vimeo/is-vimeo-url? (post :url))))

(defn post-is-nsfw? [post]
  (:over_18 post))

(defn get-subreddit-videos [subreddit opts]
  (let [{:keys [allow-nsfw?]} opts
        output-channel (chan)
        [success-channel error-channel] (get-subreddit-posts subreddit opts)]
    (go (let [posts (<! success-channel)
              videos (filterv post-is-video? posts)
              videos (if-not allow-nsfw? 
                       (filterv (complement post-is-nsfw?) videos)
                       videos)]
          (put! output-channel videos)))
    [output-channel error-channel]))

(defn get-subreddit-post-by-id [id]
  (let [output-channel (chan)
        url (str reddit-url "/comments/" id "/.json")
        [success-channel error-channel] (send-jsonp url)]
    (go (let [result (js->clj (<! success-channel) :keywordize-keys true)
              data (-> result first :data :children first :data)]
          (if data
            (put! output-channel data)
            (close! output-channel))))
    [output-channel error-channel]))

(defn get-subreddit-video-by-id [id]
  (let [output-channel (chan)
        [success-channel error-channel] (get-subreddit-post-by-id id)]
    (go (if-let [video (<! success-channel)]
          (if (post-is-video? video)
            (put! output-channel video)
            (close! output-channel))
          (close! output-channel)))
    [output-channel error-channel]))

(defn get-search-posts [subreddit search opts]
  (let [output-channel (chan)
        url (generate-search-url subreddit search)
        [success-channel error-channel] (send-jsonp url)]
    (go (let [result (js->clj (<! success-channel) :keywordize-keys true)
              data (-> result :data :children vec)]
          (put! output-channel (map #(:data %) data))))
    [output-channel error-channel]))

(defn get-search-videos [subreddit search opts]
  (let [{:keys [allow-nsfw?]} opts
        output-channel (chan)
        [success-channel error-channel] (get-search-posts subreddit search opts)]
    (go (let [posts (<! success-channel)
              videos (filterv post-is-video? posts)
              videos (if-not allow-nsfw? 
                       (filterv (complement post-is-nsfw?) videos)
                       videos)]
          (put! output-channel videos)))
    [output-channel error-channel]))

#_(let [[result err] (get-search-videos "youtubehaiku" "doggo")]
    (go (if-let [data (<! result)]
          (.log js/console (clj->js data))
          (.log js/console "Video does not exist"))
        (when-let [err (<! err)]
          (.log js/console err))))
