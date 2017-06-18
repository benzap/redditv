(ns redditv.utils
  (:require [goog.functions]
            [clojure.string :as string]))

(defn dom-clear-children 
  [div-id]
  (let [dom (.getElementById js/document div-id)]
    (aset dom "innerHTML" "")
    ))

(defn remove-empty-values [xs]
  (->> xs
      (filter (fn [[_ v]] (not (nil? v))))
      (into {})))

#_(remove-empty-values {:k1 nil :k2 1})

(defn gen-query-params [params]
  (let [query-string
        (->> params
             remove-empty-values
             (map (fn [[k v]] (str (name k) "=" v)))
             (interpose "&")
             (apply str "?"))]
    (if-not (= query-string "?")
      query-string
      "")))

#_(gen-query-params {:sort "top" :fullscreen false :value nil})
#_(gen-query-params {})

(defn align-to-root-left
  "scrolls the child element to align the scroll to the left margin of
  the root element"
  [root child]
  (let [child-offset-left (.-offsetLeft child)]
    (aset root "scrollLeft" child-offset-left)
    ))

(defn clear-scroll
  [root]
  (aset root "scrollLeft" 0))

(def regex-number? #"[0-9]+")

(defn numstring? [s] 
  (if (string? s)
    (->> s (re-matches regex-number?) boolean)
    false))

(defn parse-int [s]
  (if (string? s)
    (.parseInt js/window s)
    0))

(defn parse-bool [s]
  (let [s (string/lower-case s)]
    (cond
      (= s "true")
      true
      (= s "false")
      false
      :else
      false)))

#_(parse-bool "TRUE")
#_(parse-bool "False")
#_(parse-bool "")

(defn set-hash! [v]
  "Set the location hash of a js/window object." 
  (aset js/window "location" "hash" v))

(defn -force-app-reload! [app-state]
  (swap! app-state update-in [:initial-load?] inc))

(def force-app-reload! (goog.functions.debounce -force-app-reload!))

(defn app-hash [app-state]
  (let [{:keys [subreddit
                playlist-selected-index
                playlist-selected-search
                playlist
                settings-video-category
                settings-video-count
                fullscreen
                settings-show-nsfw]} @app-state]
    (str "/r/" subreddit
         "/" playlist-selected-index
         (when playlist-selected-search (str "/" (.encodeURIComponent js/window playlist-selected-search)))
         (gen-query-params 
          {:sort (when (not= settings-video-category "hot") settings-video-category)
           :count (when (not= settings-video-count 100) settings-video-count)
           :fullscreen (when (not= fullscreen false) fullscreen)
           :nsfw (when (not= settings-show-nsfw true) settings-show-nsfw)
           }))))

(defn open-link-external-window [link]
  (.open js/window link "_blank"))

(defn open-reddit-comment [{:keys [permalink] :as video}]
  (open-link-external-window (str "http://www.reddit.com" permalink)))

(defn query-in-focus? [selector]
  (if-let [elem (.querySelector js/document selector)]
    (= (.-activeElement js/document) elem)
    false))

#_(def test-uri "Are GMOs Good or Bad? Genetic Engineering &amp; Our Food")

(defn decode-html-string [s]
  (let [parser (js/DOMParser.)
        html-string (str "<!doctype html><body>" s)
        decoded-string (.parseFromString parser html-string "text/html")]
    (aget decoded-string "body" "textContent")))

#_(decode-html-string test-uri)

(defn set-loading-animation! [app-state x]
  (swap! app-state assoc-in [:loading?] x))

(defn app-css-class-layout
  [app-state class-name & {:keys [compressed? fullscreen?]
                           :or {compressed? true
                                fullscreen? true}}]
  (let [class-name (cond (keyword? class-name) (name class-name)
                         (string? class-name) (str class-name))]
  (cond
    ;; Apply "-fullscreen"
    (and fullscreen? (-> @app-state :fullscreen))
    (keyword (str class-name "-fullscreen"))
    (and compressed? (-> @app-state :show-playlist not))
    (keyword (str class-name "-compressed"))
    :else
    (keyword class-name)
    )))

(defn set-fullscreen [dom-element]
  (cond
    (aget dom-element "requestFullscreen")
    (.requestFullscreen dom-element)

    (aget dom-element "webkitRequestFullscreen")
    (.webkitRequestFullscreen dom-element)

    (aget dom-element "mozRequestFullscreen")
    (.mozRequestFullscreen dom-element)

    (aget dom-element "msRequestFullscreen")
    (.msRequestFullscreen dom-element)))
