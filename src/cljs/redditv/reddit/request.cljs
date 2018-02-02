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
(spec/def ::vcount nat-int?)
(spec/def ::category #(allowed-categories %))
(spec/def ::after (spec/nilable string?))


#_(spec/valid? ::limit 100)
#_(spec/valid? ::vcount -1)
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
  [{:keys [subreddit limit category after vcount]
    :or {limit 100 category "hot" after nil vcount 0}}]
  (let [[sort time] (string/split category #"_")
        base-url (str reddit-url "/r/" subreddit "/" sort "/.json")]
    (cond
      ;; If the sort criteria is a restricted category, we don't process the time
      (sort-restricted-categories sort)
      (str base-url (gen-query-params {:limit limit :after after :count vcount}))
      
      (sort-time-categories sort)
      (str base-url (gen-query-params
                     {:limit limit
                      :sort sort
                      :t time
                      :after after
                      :count vcount})))))


(spec/fdef generate-subreddit-url
           :args (spec/cat :opts (spec/keys :req-un [::subreddit]
                                            :opt-un [::limit ::category ::after ::vcount]))
           :ret string?)


#_(println (generate-subreddit-request-url {:subreddit "videos" :category "top_all"}))


(defn distinct-by-id
  "Ensures that the reddit posts are distinct within the given post collection.

  Note: maintains the first post seen as unique, removing additional
  posts with the same :id"
  [posts]
  (let [idx-kw :idx-somekeywedontcareabout
        find-index (fn [coll id]
                       (as-> coll $
                         (filter #(= id (:id %)) $)
                         (first $)
                         (idx-kw $)))
        indexed-posts (map-indexed #(assoc %2 idx-kw %1) posts)]
    (for [p indexed-posts
          :when (= (find-index indexed-posts (:id p)) (idx-kw p))]
      (dissoc p idx-kw)
      )))


#_(distinct-by-id [{:id "a"} {:id "b"} {:id "a"} {:id "c"}])


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
  pages 'after' a given set of posts have been retrieved. Note: this
  is inaccurate, you need the vcount in order to provide an
  offset. [default: nil]

  vcount - provide an offset on what is requested from a particular
  subreddit [default: 0]

  allow-nsfw? - If false, will filter out videos containing
  Not-Safe-For-Work content [default: true]

  max-requests - Maximum number of requests to perform to get the
  desired number of video posts. Upon reaching the max-requests, it
  will return video posts it was able to scrape in the resulting
  number of requests.

  Return Value:

  A vector consisting of two elements. The first element is a
  core.async Channel containing the video posts, and the second
  element is a channel which will contain Error Data if any of the
  reddit api requests fail.
  "
  [{:keys [subreddit rlimit category after vcount allow-nsfw?]
    :or {rlimit 100 category "hot" after nil vcount 0 allow-nsfw? true}}]
  (let [main-data-channel (chan)
        main-error-channel (chan)
        max-requests 15]
    
    (go-loop [video-posts '()
              num-requests 0
              after-id after]

      ;; Query the reddit api until we've reached the desired number
      ;; of video posts, or until we've reached the max number of
      ;; request we're willing to make
      (if (and (< (count video-posts) rlimit)
               (< num-requests max-requests))
        (let [
              ;; Generate the request and query reddit using jsonp
              url (generate-subreddit-request-url
                   {:subreddit subreddit :limit 100 :category category
                    :after after-id :vcount (count video-posts)})
              [s-chan e-chan] (send-jsonp url)

              ;; Convert the resulting JS Object into a clojure collection of map objects
              data-result (some-> (<! s-chan) (js->clj :keywordize-keys true) :data :children)
              result (map #(:data %) data-result)

              ;; Remove NSFW Posts if flag is not set
              clean-result (if-not allow-nsfw? (filter (complement post-is-nsfw?) result) result)

              ;; Scrape out any posts that don't contain playable videos
              video-results (filter post-is-video? clean-result)

              ;; Remove any distinct reddit posts from subsequent reddit api requests
              video-results (distinct-by-id video-results)
              ]
          (recur (take rlimit (concat video-posts video-results)) ; video-posts
                 (inc num-requests) ; num-requests
                 (or (-> result last :name) after-id)) ; after-id
          ))
      (>! main-data-channel video-posts))
    [main-data-channel main-error-channel]))


#_(let [[success error] (get-subreddit-videos {:subreddit "videos" :rlimit 200})]
    (go (let [results (<! success)]
          (.log js/console "Results:" (clj->js results))
          (.log js/console (->> results
                                (group-by :id)
                                (filter #(> (count %2) 1))
                                (clj->js)))
          )))


(defn get-subreddit-post-by-id [id]
  (let [output-channel (chan)
        url (str reddit-url "/comments/" id "/.json")
        [success-channel error-channel] (send-jsonp url)]
    (go (if-let [result
                 (some-> (<! success-channel)
                         (js->clj :keywordize-keys true)
                         first :data :children first :data)]
          (put! output-channel result)
          (close! output-channel)))
    [output-channel error-channel]))


(defn get-subreddit-video-by-id [id]
  (let [output-channel (chan)
        [success-channel error-channel] (get-subreddit-post-by-id id)]
    (go (if-let [video (<! success-channel)]
          (if (post-is-video? video)
            (>! output-channel video)
            (close! output-channel))
          (close! output-channel)))
    [output-channel error-channel]))


#_(let [[success error] (get-subreddit-video-by-id "somemadeupthing")]
    (go (let [video (<! success)]
          (.log js/console "Post" (clj->js video))
          (.log js/console "Failed to get id: 7rcqbk")
          ))

    (go (let [error (<! error)]
          (.log js/console "Error Message: " error))))
