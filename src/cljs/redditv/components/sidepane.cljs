(ns redditv.components.sidepane
  (:require [rum.core :as rum]
            [redditv.utils :refer [set-hash! force-app-reload! app-hash]]
            [redditv.icons :as icons]
            [redditv.playlist :as playlist]
            [redditv.components.settings :refer [c-settings]]
            [redditv.components.mdl :as mdl]
            [redditv.utils :refer [app-css-class-layout]]))


(defn search-subreddit [app-state subreddit]
  (swap! app-state assoc
         :subreddit subreddit
         :playlist-selected-index 0
         :playlist-selected-search nil)
  (playlist/reload app-state :reload? true)
  (set-hash! (app-hash app-state)))


(def mixin-focus-search-bar
  {:did-update (fn [state]
                (let [comp     (:rum/react-component state)
                      dom-node (js/ReactDOM.findDOMNode comp)]
                  (when-let [search-element (.querySelector dom-node "#input-search-bar")]
                    (aset search-element "value" "")
                    (.focus search-element)))
                state)})


(rum/defcs c-sidepane
  <
  mixin-focus-search-bar
  rum/reactive
  {:init (fn [state props]
           (let [search-value (::search-value state)
                 app-state (-> state :rum/args first)
                 {:keys [subreddit]} app-state]
             (assoc state ::search-value (atom subreddit))))
   :will-unmount (fn [state]
                   (dissoc state ::search-value))}
  [state app-state show-settings show-search show-playlist fullscreen]
  (let [show-settings (rum/react show-settings)
        show-search (rum/react show-search)
        show-playlist (rum/react show-playlist)
        fullscreen (rum/react fullscreen)
        search-value (::search-value state)]

    [(app-css-class-layout app-state :.redditv-sidepane)
     ;;Search Button and Toggling
     (mdl/tooltip
      {:label "Search Subreddits" :position "right" :large false
       :className (if show-search "hide-tooltip")}
      (mdl/icon {:name "search"
                 :className (str "redditv-button noselect "
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
      {:label "Settings" :position "right" :large false
       :className (if show-settings "hide-tooltip")}
      (mdl/icon {:name "settings" :className (str "redditv-button noselect "
                                                  (if show-settings "button-active-toggle" ""))
                 :onClick #(swap! app-state update-in [:show-settings] not)}))

     (when show-settings (c-settings app-state))

     (mdl/tooltip
      {:label "View Comments" :position "right" :large false}
      (mdl/icon {:name "comment" :className "redditv-button noselect"
                 :onClick #(playlist/open-current-video-comments app-state)}))

     (mdl/tooltip 
      {:label "View Github Source" :position "right" :large false}
      (mdl/icon {:name "help" :className "redditv-button noselect"
                 :onClick
                 (fn [] (.open js/window (str "http://github.com/benzap/redditv")))}))
     ]))
