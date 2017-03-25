(ns redditv.utils)

(defn dom-clear-children 
  [div-id]
  (let [dom (.getElementById js/document div-id)]
    (aset dom "innerHTML" "")
    ))

(defn positions
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

(defn next-element
  [xs x]
  (let [title (:title x)
        playlist-titles (map #(:title %) xs)
        i (first (positions #{title} playlist-titles))]
    (if (nil? i)
      (do
        (println "Failed to find element, grabbing first")
        (first xs))
      (nth (cycle xs) (inc i)))))

(defn prev-element
  [xs x]
  (let [title (:title x)
        playlist-titles (map #(:title %) xs)
        i (first (positions #{title} playlist-titles))]
    (if (or (nil? i) (= i 0))
      (first xs)
      (nth (cycle xs) (dec i)))))

;; (next-element [{:a 1} {:b 2}] {:a 1})
;; (prev-element [{:a 1} {:b 2}] {:b 2})

(defn align-to-root-left
  "scrolls the child element to align the scroll to the left margin of
  the root element"
  [root child]
  (let [child-offset-left (.-offsetLeft child)]
    (aset root "scrollLeft" child-offset-left)
    ))

(defn clear-scroll
  [root]
  (aset root "scrollLeft" 0))

(def regex-number? #"[0-9]+")

(defn numstring? [s] 
  (if (string? s)
    (->> s (re-matches regex-number?) boolean)
    false))

(defn parse-int [s]
  (if (string? s)
    (.parseInt js/window s)
    0))

(defn set-hash! [v]
  "Set the location hash of a js/window object." 
  (aset js/window "location" "hash" v))

(defn force-app-reload! [app-state]
  (swap! app-state update-in [:initial-load?] inc))

(defn app-hash [app-state]
  (let [{:keys [subreddit playlist-selected-index
                settings-video-category]} @app-state]
    (if (= settings-video-category "hot")
      (str "/r/" subreddit "/" playlist-selected-index)
      (str "/r/" subreddit "/" playlist-selected-index
           "?sort=" settings-video-category))))
