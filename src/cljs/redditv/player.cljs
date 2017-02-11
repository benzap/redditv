(ns redditv.player
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(defprotocol IPlayer
  (play [this])
  (pause [this])
  (fullscreen [this])
  ;;(seek-forward [this seconds])
  ;;(seek-backwards [this seconds])
  (dispose [this])
  )

(defrecord NullPlayer []
  IPlayer
  (play [this])
  (pause [this])
  (fullscreen [this])
  (dispose [this])
  )

(defn create-nullplayer []
  (->NullPlayer))
