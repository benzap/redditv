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

(defn next-element [xs x]
  (let [i (first (positions #{x} xs))]
    (if (nil? i)
      (do
        (println "Failed to find element, grabbing first")
        (first xs))
      (nth (cycle xs) (inc i)))))

;; (next-element [{:a 1} {:b 2}] {:a 1})


