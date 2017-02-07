(ns redditv.components.settings
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]
            [redditv.components.mdl :as mdl]))

(rum/defc c-settings
  [app-state]
  [:.redditv-settings-dialog-container
   [:.redditv-settings-dialog-page
    
    ;; Close Button
    [:.redditv-dialog-close
     (mdl/fab-button 
      {:ripple true 
       :colored true
       :onClick (fn [e] (swap! app-state assoc :show-settings false))}
      (mdl/icon {:name "close"}))]

    ;; Header
    [:.redditv-dialog-header
     (mdl/icon 
      {:name "settings" 
       :style {:padding "5px 5px 5px 5px"}})

     [:span.redditv-dialog-title
      {:style {:padding "3px" :top "-2px" :font-size "35px"}}
      "Settings"]]

    ;; Content
    [:.redditv-dialog-content
     [:h3 "General"]
     (mdl/checkbox {:label "Show NSFW Content"
                    :ripple true})]
    
    ]])
