(ns redditv.storage)

(def has-local-storage? 
  (instance? js/Storage js/localStorage))

(def app-state-key "redditv-app-state")

(defn stringify [x]
  (let [s (clj->js x)]
    (.stringify js/JSON s)))

(defn parse [x]
  (let [x (.parse js/JSON x)]
    (js->clj x :keywordize-keys true)))

(defn save-app-state! [state]
  (when has-local-storage?
    (.setItem js/localStorage app-state-key (stringify state))))

(defn load-app-state []
  (when has-local-storage?
    (parse (.getItem js/localStorage app-state-key))))
