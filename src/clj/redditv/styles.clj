(ns redditv.styles
  (:require
    [garden.def :refer [defstyles]]
    [garden.color :as color :refer [hsl rgb]]
    [garden.units :refer [px]]))

(def font-mono "'Roboto', sans-serif")

(def color-light-text "#fdfdfd")
(def color-background "#607D8B")
(def color-foreground "#263238")

(def color-button-default "#455A64")
(def color-button2-default "#03A9F4")

(def header-height 40)
(def playlist-height 140)
(def sidepane-width 40)


(defstyles main
  [:* 
   {:font-family font-mono
    :color color-light-text
    :padding 0
    :margin 0}]

  [:html :body
   {:height "100%" :margin 0}]

  [:body 
   {:background color-background
    :min-height "100%"}]

  [:.redditv-header
   {:position "absolute"
    :top 0
    :left 0
    :right 0
    :height (px header-height)
    :background-color color-foreground
    :line-height (px header-height)}]

  [:.redditv-sidepane
   {:position "absolute"
    :top (px header-height)
    :left 0
    :bottom (px playlist-height)
    :width (px sidepane-width)
    :background-color color-foreground}]

  [:.redditv-playlist
   {:position "absolute"
    :left 0
    :right 0
    :bottom 0
    :height (px playlist-height)
    :background-color color-foreground}]

  [:.redditv-player
   {:position "absolute"
    :top (px header-height)
    :left (px sidepane-width)
    :right 0
    :bottom (px playlist-height)
    :background-color "black"}]

  )
