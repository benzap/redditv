(ns redditv.events
  "Defined Events that are passed on the event-bus. Most of the
  components will tap into the event bus and be served these events,
  so these functions serve as documentation on the types of events
  being passed.")

;; Selection Events

(defn video-select
  "The next video entry selected for playback"
  [entry]
  {:event-type :video-select :entry entry})

(defn is-video-select?
  "Is this a video selection event?"
  [{:keys [event-type] :as event}]
  (= event-type :video-select))

(defn video-next []
  {:event-type :video-next})

(defn is-video-next? [{:keys [event-type]}]
  (= event-type :video-next))

(defn video-previous []
  {:event-type :video-previous})

(defn is-video-previous? [{:keys [event-type]}]
  (= event-type :video-previous))

;; Player Events

(defn player-not-started []
  {:event-type :video-not-started})

(defn is-player-not-started? [{:keys [event-type]}]
  (= event-type :video-not-started))

(defn player-ended []
  {:event-type :video-ended})

(defn is-player-ended? [{:keys [event-type]}]
  (= event-type :video-ended))

(defn player-playing []
  {:event-type :video-playing})

(defn is-player-playing? [{:keys [event-type]}]
  (= event-type :video-playing))

(defn player-paused []
  {:event-type :video-paused})

(defn is-player-paused? [{:keys [event-type]}]
  (= event-type :video-paused))

(defn player-buffering []
  {:event-type :video-buffering})

(defn is-player-buffering? [{:keys [event-type]}]
  (= event-type :video-buffering))

(defn player-cued []
  {:event-type :video-cued})

(defn is-player-cued? [{:keys [event-type]}]
  (= event-type :video-cued))
