(ns redditv.components.settings
  (:require [rum.core :as rum]
            [redditv.playlist :as playlist]
            [redditv.components.mdl :as mdl]
            [redditv.utils :refer [parse-int]]
            [redditv.config :as config]))

(rum/defcs c-settings
  < rum/reactive
  [state app-state]
  (let [{:keys [settings-show-nsfw
                settings-video-count
                settings-video-category
                show-playlist]} (rum/react app-state)]
    [(if show-playlist
       :.redditv-settings-dialog-container.anim-fade-in-fast
       :.redditv-settings-dialog-container-compressed.anim-fade-in-fast)
         
     [:.redditv-settings-dialog-page.anim-fade-in-default
      
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
         (mdl/cell {:col 6} (mdl/slider {:min 20 :max 1000 :value settings-video-count
                                         :onChange
                                         (fn [e] 
                                           (swap! app-state assoc
                                                  :settings-video-count
                                                  (-> e .-target .-value parse-int))
                                           (playlist/reload app-state :reload? true))}))
         (mdl/cell {:col 2} (.span js/React.DOM #js {} (str settings-video-count))))]

       [:.video-type-setting
        [:span "Video Category"]
        [:select {:value settings-video-category
                  :on-change 
                  (fn [e] 
                    (swap! app-state assoc
                           :settings-video-category (-> e .-target .-value)
                           :playlist-selected-index 0)
                    (playlist/reload app-state))}
         [:option {:value "hot"} "Hot"]
         [:option {:value "new"} "New"]
         [:option {:value "rising"} "Rising"]
         
         ;; Controversial
         [:option {:value "controversial_hour"} "Controversial (Past Hour)"]
         [:option {:value "controversial_day"} "Controversial (Past 24 Hours)"]
         [:option {:value "controversial_week"} "Controversial (Past Week)"]
         [:option {:value "controversial_month"} "Controversial (Past Month)"]
         [:option {:value "controversial_year"} "Controversial (Past Year)"]
         [:option {:value "controversial_all"} "Controversial (All Time)"]

         ;; Top
         [:option {:value "top_hour"} "Top (Past Hour)"]
         [:option {:value "top_day"} "Top (Past 24 Hours)"]
         [:option {:value "top_week"} "Top (Past Week)"]
         [:option {:value "top_month"} "Top (Past Month)"]
         [:option {:value "top_year"} "Top (Past Year)"]
         [:option {:value "top_all"} "Top (All Time)"]]]
      
      ]]]))
