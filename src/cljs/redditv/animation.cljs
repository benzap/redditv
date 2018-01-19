(ns redditv.animation
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [chan timeout <!]]))


(def animation-tick-rate (* (/ 1 60) 100)) ;; ms
(def animation-speed-offset 10) ;; px
(defn approx= [x y]
  (let [x (.abs js/Math x)
        y (.abs js/Math y)
        diff (.abs js/Math (- x y))
        epsilon 0.1]
    (< diff epsilon)))


(defn smooth-scroll-to-element-h
  "Performs a smooth scroll effect from it's current position to the
  new position. Note that this is used primarily for a horizontal
  scrollbar. `parent-elem' is an element which contains horizontal
  scroll, and `child-elem' is a child element within the parent element."
  [parent-elem child-elem]
  (let [target-offset (.-offsetLeft child-elem)]
    (go-loop [offset (.-scrollLeft parent-elem)]
      (if-not (approx= offset target-offset)
        (let [interval (if (< offset target-offset)
                         (min animation-speed-offset (- target-offset offset))
                         (- (min animation-speed-offset (- offset target-offset))))]
          (aset parent-elem "scrollLeft" (+ offset interval))
          (<! (timeout animation-tick-rate)) ;; ms
          (recur (+ offset interval)))
        offset))))

