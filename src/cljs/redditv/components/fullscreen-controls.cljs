(ns redditv.components.fullscreen-controls
  (:require  [rum.core :as rum]
             [redditv.playlist :as playlist]
             [redditv.utils :refer [app-css-class-layout]]
             [redditv.components.mdl :as mdl]))

(rum/defcs c-fullscreen-controls
  < rum/reactive
  [state app-state]
  (let [{:keys [fullscreen]}
        (rum/react app-state)]
    (when fullscreen
      [:.redditv-fullscreen-controls

       (mdl/tooltip
        {:label "Next Video" :position "left" :large true :className "redditv-tooltip-fullscreen"}
        (mdl/icon {:name "skip_next" :className "redditv-button-fullscreen noselect"
                   :title "Play Next Video"
                   :onClick #(playlist/select-next app-state)}))

       (mdl/tooltip
        {:label "Previous Video" :position "left" :large true :className "redditv-tooltip-fullscreen"}
        (mdl/icon {:name "skip_previous" :className "redditv-button-fullscreen noselect"
                   :title "Play Previous Video"
                   :onClick #(playlist/select-prev app-state)}))

       (mdl/tooltip
        {:label "View Comments" :position "left" :large true :className "redditv-tooltip-fullscreen"}
        (mdl/icon {:name "comment" :className "redditv-button-fullscreen noselect"
                   :title "View Comments"
                   :onClick #(playlist/open-current-video-comments app-state)}))

       (mdl/tooltip
        {:label "Exit Fullscreen" :position "left" :large true :className "redditv-tooltip-fullscreen"}
        (mdl/icon {:name "fullscreen_exit" :className "redditv-button-fullscreen noselect"
                   :title "Exit Fullscreen"
                   :onClick #(swap! app-state assoc :fullscreen false)}))
       

       ])))
