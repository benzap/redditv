(ns user
  (:require [redditv.server]
            [ring.middleware.reload :refer [wrap-reload]]
            [figwheel-sidecar.repl-api :as figwheel]))

;; Let Clojure warn you when it needs to reflect on types, or when it does math
;; on unboxed numbers. In both cases you should add type annotations to prevent
;; degraded performance.
(set! *warn-on-reflection* true)
(set! *unchecked-math* :warn-on-boxed)
(def http-handler
  (wrap-reload #'redditv.server/http-handler))

(defn start []
  (figwheel/start-figwheel!))


(defn stop []
  (figwheel/stop-figwheel!))


(def go start)
(def run start)


(defn restart []
  (stop)
  (start))


(def browser-repl figwheel/cljs-repl)
