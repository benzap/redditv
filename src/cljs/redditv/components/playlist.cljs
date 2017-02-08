(ns redditv.components.playlist
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! mult tap untap]]
            [rum.core :as rum]
            [redditv.playlist :as playlist]))

(def nsfw-thumbnail-url "http://i.imgur.com/KZOsckv.jpg")
(def default-thumbnail-url "http://i.imgur.com/9wEJlnk.gif")

(rum/defcs c-playlist-item
  < 
  {:key-fn (fn [[i item]] (str "playlist-item-" i "-" (:title item)))}
  [state [i item] select-chan selected?]
  (let [title (str (-> item :title))
        thumbnail (-> item :thumbnail)
        thumbnail (case thumbnail
                    "nsfw" nsfw-thumbnail-url
                    "default" default-thumbnail-url
                    nil default-thumbnail-url
                    "" default-thumbnail-url
                    thumbnail)]
  [:.redditv-playlist-item
   {:title title
    :on-click #(put! select-chan i)
    :class (when selected? "selected")}
   [:.redditv-playlist-item-title.noselect title]
   [:img.redditv-playlist-item-thumbnail {:src thumbnail}]]))

(defn mixin-select-item-handler 
  "Passes in a ::select-chan local variable, applies playlist index to
  current components app-state"
  []
  {:did-mount (fn [state]
                (let [app-state (-> state :rum/args first)
                      select-chan (chan)]
                  
                  ;; Loop to apply selected playlist index
                  (go-loop []
                    (let [selected-playlist-index (<! select-chan)]
                      (swap! app-state assoc :playlist-selected-index selected-playlist-index)
                      (recur)))
                  
                  (assoc state ::select-chan select-chan)))
   
   :will-unmount (fn [state]
                   (dissoc state ::select-chan))})

(rum/defcs c-playlist <
  rum/reactive
  (mixin-select-item-handler)
  [state app-state]
  (let [{:keys [playlist playlist-selected-index]} (rum/react app-state)
        playlist-items (map-indexed vector playlist)
        select-chan (::select-chan state)]
    [:.redditv-playlist
     [:.redditv-playlist-container
      (for [[index item] playlist-items]
        (c-playlist-item [index item] select-chan (= index playlist-selected-index)))]]))
