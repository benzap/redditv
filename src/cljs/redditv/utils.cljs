(ns redditv.utils
  (:require [goog.functions]
            [clojure.spec.alpha :as spec]
            [clojure.string :as string]
            [redditv.config :as config]))


(defn dom-clear-children
  "Clear the elements of a given element defined by their `div-id'"
  [div-id]
  (let [dom (.getElementById js/document div-id)]
    (aset dom "innerHTML" "")))


(defn remove-empty-values
  "Remove map key-value pairs which have a value of nil from the
  collection of map objects defined by `xs'"
  [xs]
  (->> xs
      (filter (fn [[_ v]] (not (nil? v))))
      (into {})))

#_(remove-empty-values {:k1 nil :k2 1})


(defn gen-query-params
  "Creates the query parameter section of a URL from a map
  representation. Note that key value pairs that are nil are removed
  from the generated query parameter string that is generated.
  
  Examples:

  (gen-query-params {:a 123 :b \"some value\"})
  ;; \"?a=123&b=some%20value\"

  (gen-query-params {:a nil :b 123}})
  ;; \"?b=123\"
  "
  [params]
  (let [query-string
        (->> params
             remove-empty-values
             (map (fn [[k v]] (str (name k) "=" (.encodeURIComponent js/window v))))
             (interpose "&")
             (apply str "?"))]
    (if-not (= query-string "?")
      query-string
      "")))

#_(gen-query-params {:sort "top" :fullscreen false :value nil})
#_(gen-query-params {})


(defn align-to-root-left
  "Scrolls the child element to align the scroll to the left margin of
  the root element."
  [root child]
  (let [child-offset-left (.-offsetLeft child)]
    (aset root "scrollLeft" child-offset-left)))


(defn clear-scroll
  "Resets the horizontal scroll for a given dom element `root'"
  [root]
  (aset root "scrollLeft" 0))


(def regex-number? #"[0-9]+")
(defn numstring?
  "Determines whether the provided string only contains an integer
  number."
  [s] 
  (if (string? s)
    (->> s (re-matches regex-number?) boolean)
    false))


(defn parse-int
  "Parses an integer out of a given string `s'. Returns 0 if the value
  cannot be parsed."
  [s]
  (if (string? s)
    (.parseInt js/window s)
    0))


(defn parse-bool
  "Parses a boolean out of a given string. Returns false if the value
  cannot be parsed."
  [s]
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


(defn set-hash! 
  "Set the location hash of a js/window object." 
  [v]
  (aset js/window "location" "hash" v))


(defn -force-app-reload!
  "When called, this causes the app-state to change, which forces
  React.js to perform a re-render of the virtual dom."
  [app-state]
  (swap! app-state update-in [:force-reload-counter] inc))


;; Debouncing turns several repetitive calls to the function into a
;; single call consisting of the last call's arguments
(def force-app-reload! (goog.functions.debounce -force-app-reload!))


(defn app-hash
  "Used to generate the appropriate url for the current `app-state'."
  [app-state]
  (let [{:keys [subreddit
                playlist-selected-id
                playlist
                settings-video-category
                settings-video-count
                fullscreen
                settings-show-nsfw]} @app-state]
    (str "/r/" subreddit
         "/" playlist-selected-id
         (gen-query-params 
          {:sort (when (not= settings-video-category config/default-video-category) settings-video-category)
           :count (when (not= settings-video-count config/default-video-count) settings-video-count)
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
                         (string? class-name) (str class-name))
        result
        (cond
          ;; Apply "-fullscreen"
          (and fullscreen? (-> @app-state :fullscreen))
          (str class-name "-fullscreen")
          (and compressed? (-> @app-state :show-playlist not))
          (str class-name "-compressed")
          :else
          class-name)]
    (keyword (str result ".anim-fade-in-slow"))))


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
