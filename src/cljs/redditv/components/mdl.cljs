(ns redditv.components.mdl
  (:require-macros [redditv.components.utils :refer [adapt-react]])
  (:require [rum.core :as rum]
            [cljsjs.react-mdl]
            [cljsjs.react-select]
            ))

(adapt-react checkbox js/ReactMDL.Checkbox)

(adapt-react fab-button js/ReactMDL.FABButton)

(adapt-react icon js/ReactMDL.Icon)

(adapt-react tooltip js/ReactMDL.Tooltip)

(adapt-react slider js/ReactMDL.Slider)

(adapt-react grid js/ReactMDL.Grid)

(adapt-react cell js/ReactMDL.Cell)

(adapt-react progress-bar js/ReactMDL.ProgressBar)
