(ns redditv.components.utils
  (:require [cljs.core :as cljs]))

(defmacro adapt-react [rum-name react-component]
  `(defn ~rum-name [props# & children#]
     (cond (= (count children#) 0)
           (.createElement js/React ~react-component (cljs/clj->js props#))
           (= (count children#) 1)
           (.createElement js/React ~react-component (cljs/clj->js props#) (first children#))
           :else
           (.createElement js/React ~react-component (cljs/clj->js props#) (cljs/array children#)))))

