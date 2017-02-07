(ns redditv.components.sidepane
  (:require [rum.core :as rum]
            [redditv.icons :as icons]
            [redditv.playlist :as playlist]
            [redditv.components.settings :refer [c-settings]]))

(defn search-subreddit [app-state subreddit]
  (swap! app-state assoc :subreddit subreddit)
  (playlist/reload app-state))

(rum/defcs c-sidepane
  <
  rum/reactive
  (rum/local "" ::search-value)
  [state app-state]
  (let [{:keys [show-search show-settings subreddit]} (rum/react app-state)
        search-value (::search-value state)]
    [:.redditv-sidepane
     ;;Search Buttona and Toggling
     [:i.icon.material-icons.redditv-button#i-search.noselect
      {:title "Search Subreddits"
       :class (when show-search "button-active-toggle")
       :on-click 
       (fn [e] 
         (swap! app-state update-in [:show-search] not)
         )} "search"]
     [:span.mdl-tooltip.mdl-tooltip--right
      {:for "i-search"} "Search"]

     (when show-search
       [:.redditv-search-dialog.right-border-radius.anim-slideInLeft
        [:input#input-search-bar
         {:type "text"
          :placeholder "Subreddit Name"
          :value @search-value
          :on-change 
          (fn [e]
            (let [text (-> e .-target .-value)]
              (reset! search-value text)
              ))
          :on-key-down
          (fn [e]
            (let [key (-> e .-key)]
              (when (= key "Enter")
                (swap! app-state assoc :show-search false)
                (search-subreddit app-state @search-value))
              (when (= key "Escape")
                (swap! app-state assoc :show-search false))
                ))}]])

     [:i.icon.material-icons.redditv-button#i-settings.noselect
      {:title "Redditv Settings"
       :class (when show-settings "button-active-toggle")
       :on-click
       (fn [e]
         (swap! app-state update-in [:show-settings] not))}
      "settings"]
     [:span.mdl-tooltip.mdl-tooltip--right
      {:for "i-settings"} "Settings"]

     (when show-settings (c-settings app-state))

     [:i.material-icons.redditv-button#i-comments
      {:title "View Reddit Video Comments"}
      "comment"]
     [:span.mdl-tooltip.mdl-tooltip--right
      {:for "i-comments"} "View Reddit Comments"]

     [:i.material-icons.redditv-button#i-source
      {:title "View Source"} "help"]
     [:span.mdl-tooltip.mdl-tooltip--right
      {:for "i-source"} "View Github Page"]
     ]))
