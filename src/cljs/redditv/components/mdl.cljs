(ns redditv.components.mdl
  (:require-macros [redditv.components.utils :refer [adapt-react]])
  (:require [rum.core :as rum]
            [cljsjs.react-mdl]))

(adapt-react checkbox js/ReactMDL.Checkbox)

(adapt-react fab-button js/ReactMDL.FABButton)

(adapt-react icon js/ReactMDL.Icon)
