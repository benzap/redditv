(ns redditv.jsonp
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <! close!]])
  (:import [goog.net Jsonp]
           [goog Uri]))

(defn send-jsonp [url]
  (let [success-channel (chan)
        success-handler (fn [result] (if-not (nil? result)
                                       (put! success-channel result)
                                       (close! success-channel)))
        
        error-channel (chan)
        error-handler (fn [result] (if-not (nil? result)
                                     (put! error-channel result)
                                     (close! error-channel)))

        jsonp (goog.net.Jsonp. (Uri. url) "jsonp")
        ]
    (.send jsonp nil success-handler error-handler)
    [success-channel error-channel]
    ))

#_(def test-url "http://www.reddit.com/r/videos.json")

#_(let [[success failure] (send-jsonp test-url)]
    (go (let [result (<! success)]
          (.log js/console "Success:" result)))

    (go (let [result (<! failure)]
          (println "Fail: " result))))
