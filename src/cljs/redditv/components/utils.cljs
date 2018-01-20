(ns redditv.components.utils
  (:require-macros
   [cljs.core.async.macros :refer [go go-loop]])
  (:require
   [cljs.spec.alpha :as spec]
   [cljs.core.async :refer [put! chan <! mult tap untap]]
   [rum.core :as rum]))


(defn mixin-async-mult [multi-chan]
  {:did-mount (fn [state]
                (let [react-component (:rum/react-component state)
                      recv-chan (chan)]
                  (tap multi-chan recv-chan)
                  (go-loop []
                    (let [recv-message (<! recv-chan)]
                      (assoc state ::recv-message recv-message)
                      (rum/request-render react-component)
                      (recur)))
                  (assoc state ::recv-chan recv-chan)))

   :will-unmount (fn [state]
                   (untap multi-chan (::recv-chan state))
                   (-> state
                       (dissoc ::recv-chan)
                       (dissoc ::recv-message)))})


(defn toggle-fullscreen-controls! [app-state x]
  (swap! app-state assoc :fullscreen-hide-controls? x))


(spec/fdef toggle-fullscreen-controls!
           :args (spec/cat :app-state #(instance? cljs.core.Atom %) :x boolean?))


(defn toggle-fullscreen-header! [app-state x]
  (swap! app-state assoc :fullscreen-hide-header? x))


(spec/fdef toggle-fullscreen-header!
           :args (spec/cat :app-state #(instance? cljs.core.Atom %) :x boolean?))
