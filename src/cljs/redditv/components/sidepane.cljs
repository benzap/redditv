(ns redditv.components.sidepane
  (:require [rum.core :as rum]))

(rum/defc c-sidepane
  []
  [:.redditv-sidepane
   [:i.material-icons "comment"]])
