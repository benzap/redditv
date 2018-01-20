(ns redditv.entropy
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.core.async :refer [put! chan <! mult tap timeout]]
   [redditv.components.utils :refer [toggle-fullscreen-header!
                                     toggle-fullscreen-controls!]]))


(defn now-ms
  "Returns the time since the web application start in milliseconds"
  []
  (.now js/window.performance))


(defn push-fake-mouse-event!
  "Generates a fake mouse event. This is required to ensure the
  fullscreen controls are correctly informed to stay awake for the
  desired duration."
  [app-state]
  (put! (-> @app-state :mouse-channel) {:event-type "fake-mouse-event"}))


(defn fs-active?
  "Determines if the fullscreen controls and header are already
  active. Returns true if they are"
  [app-state]
  (and (-> @app-state :fullscreen-hide-header? not)
       (-> @app-state :fullscreen-hide-controls? not)))


(def hide-controls-delay 1000)
(def hide-header-delay 7000)


(defn mixin-fullscreen-mouseover
  "Mixin which is used to control fullscreen controls, and have them
  fade in and out based on mouse movement and injected event changes
  through the :mouse-channel (chan) instance."
  [app-state]
  {:did-mount
  (fn [state]
    (let [mouse-channel (-> @app-state :mouse-channel)
          time-last-mouseover (atom (now-ms))]
      
      ;; An event which populates the mouse-channel with entropy
      (.addEventListener js/window "mousemove" (fn [e] (put! mouse-channel e)))

      ;; When we receive mouse movement, show the fullscreen controls and header
      (go-loop []
        (let [_ (<! mouse-channel)]
          (when-not (fs-active? app-state)
            (toggle-fullscreen-header! app-state false)
            (toggle-fullscreen-controls! app-state false))
          (reset! time-last-mouseover (now-ms))
          (recur)))

      ;; After a time delay, hide the fullscreen controls
      (go-loop []
        (<! (timeout (/ hide-controls-delay 3)))
        (when (>= (- (now-ms) @time-last-mouseover) hide-controls-delay)
          (toggle-fullscreen-controls! app-state true))
        (recur))
      
      ;; After a time delay, hide the fullscreen header
      (go-loop []
        (<! (timeout (/ hide-header-delay 3)))
        (when (>= (- (now-ms) @time-last-mouseover) hide-header-delay)
          (toggle-fullscreen-header! app-state true))
        (recur))
      
      state))})
