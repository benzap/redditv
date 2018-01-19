(ns redditv.components.playlist
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap untap]]
            [rum.core :as rum]
            [redditv.playlist :as playlist]
            [redditv.utils :refer [align-to-root-left clear-scroll set-hash!
                                   app-hash decode-html-string
                                   app-css-class-layout]]
            [redditv.animation :as anim]
            [redditv.components.mdl :as mdl]))

(def nsfw-thumbnail-url "http://i.imgur.com/KZOsckv.jpg")
(def default-thumbnail-url "http://i.imgur.com/9wEJlnk.gif")

(defn mixin-fix-scroll-alignment [state]
  ;; If the item is selected, aligns the item to the left of the container
  (let [react-component (:rum/react-component state)
        dom-node (js/ReactDOM.findDOMNode react-component)
        parent-node (.querySelector js/document ".redditv-playlist-container")
        selected? (-> state :rum/args (nth 2))]
    (when selected?
      #_(anim/smooth-scroll-to-element-h parent-node dom-node)
      (align-to-root-left parent-node dom-node)
      ))
  state)


(defn mixin-fix-playlist-compressed
  "Bug Fix for compressed playlist buttons not showing"
  [state]
  (when-let [dom (.querySelector js/document ".redditv-playlist-container-compressed")]
    (aset dom "scrollLeft" 0))
  state)

(rum/defcs c-playlist-item
  < 
  {:key-fn (fn [[i item]] (str "playlist-item-" i "-" (:title item)))
   :did-update mixin-fix-scroll-alignment
   :did-mount mixin-fix-scroll-alignment}
  [state [i item] select-chan selected?]
  (let [title (-> item :title str decode-html-string)
        thumbnail (-> item :thumbnail)
        thumbnail (case thumbnail
                    "nsfw" nsfw-thumbnail-url
                    "default" default-thumbnail-url
                    nil default-thumbnail-url
                    "" default-thumbnail-url
                    thumbnail)
        ;; If the result was tacked on as an oddity.
        oddity? (-> item :redditv-oddity?)]
  [:.redditv-playlist-item.anim-fade-in-fast
   {:title title
    :on-click #(put! select-chan i)
    :class (interpose " " [(when selected? "selected")
                           (when oddity? "oddity")])}
   [:.redditv-playlist-item-title.noselect title]
   [:img.redditv-playlist-item-thumbnail {:src thumbnail}]]))


(defn mixin-select-item-handler 
  "Passes in a ::select-chan local variable, applies playlist id to
  current components app-state"
  []
  {:did-mount (fn [state]
                (let [app-state (-> state :rum/args first)
                      select-chan (chan)]
                  
                  ;; Loop to apply selected playlist id
                  (go-loop []
                    (let [index (<! select-chan)
                          id (-> @app-state :playlist (nth index) :id)
                          subreddit (:subreddit @app-state)]
                      (swap! app-state assoc :playlist-selected-id id)
                      (set-hash! (app-hash app-state))
                      (recur)))
                  
                  (assoc state ::select-chan select-chan)))
   
   :will-unmount (fn [state]
                   (dissoc state ::select-chan))})


(rum/defcs c-playlist <
  rum/reactive
  (mixin-select-item-handler)
  {:did-update mixin-fix-playlist-compressed}
  [state app-state]
  (let [{:keys [playlist playlist-selected-id fullscreen
                show-playlist]} (rum/react app-state)
        playlist-items (map-indexed vector playlist)
        select-chan (::select-chan state)]
    [(app-css-class-layout app-state :.redditv-playlist)
     [(if show-playlist :.redditv-playlist-rightpane :.redditv-playlist-rightpane-compressed)
      (mdl/tooltip
       {:label (if show-playlist "Hide Playlist" "Show Playlist") :position "left" :large false}
       (mdl/icon {:name (if show-playlist "arrow_drop_down" "arrow_drop_up")
                  :className "redditv-button noselect"
                  :onClick #(swap! app-state update-in [:show-playlist] not)}))
      (mdl/tooltip
       {:label "Enter Fullscreen" :position "left" :large false}
       (mdl/icon {:name (if-not fullscreen "fullscreen" "fullscreen_exit")
                  :className "redditv-button noselect"
                  :onClick #(swap! app-state update-in [:fullscreen] not)}))
      ]
     (let [index (playlist/get-index-of-id app-state playlist-selected-id)]
       (if show-playlist
         [:.redditv-playlist-container {:class (if-not show-playlist "compressed")}
          (if (<= (count playlist-items) 0)
            [:.redditv-playlist-load-indicator
             (mdl/progress-bar {:className "redditv-playlist-progress" :indeterminate true})]
            (for [[idx item] playlist-items]
              (c-playlist-item [idx item] select-chan (= idx index))))]

         [:.redditv-playlist-container-compressed
          [:.redditv-leftpane-compressed
           (mdl/tooltip
            {:label "Previous Video" :position "top" :large false}
            (mdl/icon {:name "skip_previous" :className "redditv-button noselect"
                       :onClick #(playlist/select-prev app-state)}))
           (mdl/tooltip
            {:label "Next Video" :position "top" :large false}
            (mdl/icon {:name "skip_next" :className "redditv-button noselect"
                       :onClick #(playlist/select-next app-state)}))]
          [:span.redditv-playlist-count
           (str (inc index)
                " of " (count playlist-items))]
          (mdl/progress-bar {:className "redditv-playlist-progress"
                             :progress (* (/ (inc index) (count playlist-items))
                                          100)
                             :indeterminate (<= (count playlist-items) 0)})
          ]))]))
  
