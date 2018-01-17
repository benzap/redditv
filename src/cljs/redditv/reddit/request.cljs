(ns redditv.reddit.request
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.spec.alpha :as spec]
   [clojure.string :as string]
   [cljs.core.async :refer [chan put! <! close! >!]]
   [clojure.pprint]

   [redditv.jsonp :refer [send-jsonp]]
   [redditv.reddit.post :refer [post-is-nsfw? post-is-video?]]
   [redditv.utils :refer [gen-query-params]]))


(def reddit-url "https://www.reddit.com")

(def sort-time-categories #{"top" "controversial"})
(def sort-restricted-categories #{"hot" "new" "rising"})
(def sort-times #{"hour" "day" "week" "month" "year" "all"})

(def allowed-categories (into #{} (concat sort-restricted-categories
                                          sort-time-categories
                                          (for [c sort-time-categories
                                                t sort-times]
                                            (str c "_" t)))))

(spec/def ::subreddit string?)
(spec/def ::limit #(spec/int-in-range? 1 101 %))
(spec/def ::category #(allowed-categories %))
(spec/def ::after (spec/nilable string?))


#_(spec/valid? ::limit 100)
#_(spec/valid? ::category "top_all")
#_(spec/valid? ::after nil)


(defn generate-subreddit-request-url
  "Generate a jsonp request for reddit.com.

  Required Arguments:

  subreddit - The subreddit to grab the posts from
 
  Optional Arguments:
 
  limit - The amount of posts to grab from the subreddit. This is
  limited to (<= limit 100) by the reddit API [default: 100]

  category - Represents the sort category and time interval. Note that
  some categories don't allow a time constraint. [default: 'hot']

  after - reddit id to grab the posts 'after' which is a means to grab
  pages 'after' a given set of posts have been retrieved. [default: nil]
  "
  [{:keys [subreddit limit category after]
    :or {limit 100 category "hot" after nil}}]
  (let [[sort time] (string/split category #"_")
        base-url (str reddit-url "/r/" subreddit "/" sort "/.json")]
    (cond
      ;; If the sort criteria is a restricted category, we don't process the time
      (sort-restricted-categories sort)
      (str base-url (gen-query-params {:limit limit :after after}))
      
      (sort-time-categories sort)
      (str base-url (gen-query-params
                     {:limit limit
                      :sort sort
                      :t time
                      :after after})))))


(spec/fdef generate-subreddit-url
           :args (spec/cat :opts (spec/keys :req-un [::subreddit]
                                            :opt-un [::limit ::category ::after]))
           :ret string?)


#_(println (generate-subreddit-request-url {:subreddit "videos" :category "top_all"}))





(defn get-subreddit-videos
  "Get video posts from a subreddit.

  Required Arguments:

  subreddit - The subreddit to grab the video urls from

  Optional Arguments:

  rlimit - The number of videos to grab from the subreddit. Note this
  is not limited by the reddit api. [default: 100]

  category - Represents the sort category and time interval. Note that
  some categories don't allow a time constraint. [default: 'hot']

  after - reddit id to grab the posts 'after' which is a means to grab
  pages 'after' a given set of posts have been retrieved. [default: nil]

  allow-nsfw? - If false, will filter out videos containing
  Not-Safe-For-Work content [default: true]

  Return Value:

  A vector consisting of two elements. The first element is a
  core.async Channel containing the video posts, and the second
  element is a channel which will contain Error Data if any of the
  reddit api requests fail.
  "
  [{:keys [subreddit rlimit category after allow-nsfw?]
    :or {rlimit 100 category "hot" after nil allow-nsfw? true}}]
  (let [main-data-channel (chan)
        main-error-channel (chan)
        max-requests 12]
    
    (go-loop [video-posts '()
              num-requests 0]
      (if (and (< (count video-posts) rlimit)
               (< num-requests max-requests))
        (let [limit (min (- rlimit (count video-posts)) 100)
              after-id (or (-> video-posts last :id) after)
              url (generate-subreddit-request-url
                   {:subreddit subreddit :limit limit :category category :after after-id})
              [s-chan e-chan] (send-jsonp url)
              data-result (some-> (<! s-chan) (js->clj :keywordize-keys true) :data :children)
              result (map #(:data %) data-result)
              result (if-not allow-nsfw? (filter (complement post-is-nsfw?) result) result)
              video-results (filter post-is-video? result)
              ]
          (recur (concat video-posts video-results)
                 (inc num-requests))))
      (>! main-data-channel video-posts))
    [main-data-channel main-error-channel]))

#_(let [[success error] (get-subreddit-videos {:subreddit "videos" :rlimit 1000})]
    (go (let [results (<! success)]
          (.log js/console "Results:" (clj->js results))
          )))
