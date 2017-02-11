(ns redditv.components.settings
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]
            [redditv.components.mdl :as mdl]))

(rum/defcs c-settings
  < rum/reactive
  [state app-state]
  (let [{:keys [settings-show-nsfw
                settings-video-count
                settings-video-category]} (rum/react app-state)]
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
       [:h4 "General"]
       (mdl/grid 
        {}
        (mdl/cell 
         {:col 12}
         (mdl/checkbox {:label "Show NSFW Content"
                        :ripple true
                        :checked settings-show-nsfw
                        :onChange 
                        (fn [e]
                          (swap! app-state update-in [:settings-show-nsfw] not)
                          (playlist/reload app-state)
                          )})))

       [:.video-count-setting
        (mdl/grid 
         {}
         (mdl/cell {:col 4} (.span js/React.DOM #js {:style #js {:fontSize "16px"}}
                                   "# Playlist Videos"))
         (mdl/cell {:col 6} (mdl/slider {:min 10 :max 250 :value settings-video-count
                                         :onChange 
                                         (fn [e] 
                                           (swap! app-state assoc :settings-video-count
                                                  (-> e .-target .-value))
                                           (playlist/reload app-state))}))
         (mdl/cell {:col 2} (.span js/React.DOM #js {} (str settings-video-count))))]

       [:.video-type-setting
        [:span "Video Category"]
        [:select {:value settings-video-category
                  :on-change 
                  (fn [e] 
                    (swap! app-state assoc :settings-video-category (-> e .-target .-value))
                    (playlist/reload app-state))}
         [:option {:value "hot"} "Hot"]
         [:option {:value "new"} "New"]
         [:option {:value "rising"} "Rising"]
         [:option {:value "controversial"} "Controversial"]
         [:option {:value "top"} "Top"]]]
      
      ]]]))
