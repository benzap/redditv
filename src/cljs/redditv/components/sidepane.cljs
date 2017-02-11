(ns redditv.components.sidepane
  (:require [rum.core :as rum]
            [redditv.icons :as icons]
            [redditv.playlist :as playlist]
            [redditv.components.settings :refer [c-settings]]
            [redditv.components.mdl :as mdl]))

(defn search-subreddit [app-state subreddit]
  (swap! app-state assoc :subreddit subreddit)
  (playlist/reload app-state))

(rum/defcs c-sidepane
  <
  rum/reactive
  {:init (fn [state props]
           (let [search-value (::search-value state)
                 app-state (-> state :rum/args first)
                 {:keys [subreddit]} app-state]
             (assoc state ::search-value (atom subreddit))))
   :will-unmount (fn [state]
                   (dissoc state ::search-value))}
  [state app-state]
  (let [{:keys [show-search show-settings subreddit show-playlist]} (rum/react app-state)
        search-value (::search-value state)]

    [(if show-playlist :.redditv-sidepane :.redditv-sidepane-compressed)
     ;;Search Button and Toggling
     (mdl/tooltip
      {:label "Search Subreddits" :position "right"}
      (mdl/icon {:name "search" :className (str "redditv-button "
                                                (if show-search "button-active-toggle" ""))
                 :onClick #(swap! app-state update-in [:show-search] not)}))

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


     (mdl/tooltip
      {:label "Settings" :position "right"}
      (mdl/icon {:name "settings" :className (str "redditv-button "
                                                  (if show-settings "button-active-toggle" ""))
                 :onClick #(swap! app-state update-in [:show-settings] not)}))

     (when show-settings (c-settings app-state))

     (mdl/tooltip
      {:label "View Reddit Comments" :position "right"}
      (mdl/icon {:name "comment" :className "redditv-button"
                 :onClick 
                 (fn []
                   (let [current-video (playlist/get-selected app-state)
                         {:keys [permalink]} current-video]
                     (.open js/window (str "http://www.reddit.com" permalink) "_blank")
                     ))}))

     (mdl/tooltip 
      {:label "View Github Source" :position "right"}
      (mdl/icon {:name "help" :className "redditv-button"
                 :onClick
                 (fn [] (.open js/window (str "http://github.com/benzap/redditv")))}))
     ]))
