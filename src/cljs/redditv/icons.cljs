(ns redditv.icons
  (:require [om.dom :as dom :include-macros true]))

(defn google-icon [icon-name]
  (dom/i #js {:className "material-icons noselect"} icon-name))
