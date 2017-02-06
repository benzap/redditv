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

(def color-entry-hover "#90A4AE")

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

  [:.noselect
   {:-webkit-touch-callout "none"
    :-webkit-user-select "none"
    :-khtml-user-select "none"
    :-moz-user-select "none"
    :-ms-user-select "none"
    :user-select "none"}]

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

  [:.redditv-playlist-container
   {:position "absolute"
    :background-color color-background
    :height (px playlist-height)
    :bottom 0
    :left (px sidepane-width)
    :right 0
    :overflow-x "scroll"
    :overflow-y "hidden"
    :white-space "nowrap"}]

  [:.redditv-player
   {:position "absolute"
    :top (px header-height)
    :left (px sidepane-width)
    :right 0
    :bottom (px playlist-height)
    :background-color "black"}]

  [:.redditv-playlist-item
   {:position "relative"
    :display "inline-block"
    :height "100%"
    :width (px 165)
    :white-space "normal"
    :vertical-align "top"
    :margin "0px 0px 45px 0px"
    :cursor "pointer"}
   [:&:hover
    {:background-color color-entry-hover}]]

  [:.redditv-playlist-item-title
   {:cursor "pointer"
    :z-index 1
    :position "absolute"
    :font-size (px 14)
    :top 0
    :padding (px 10)
    :text-shadow "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    :white-space "nowrap"
    :width (px 140)
    :overflow "hidden"
    :text-overflow "ellipsis"}]

  [:.redditv-playlist-item-thumbnail
   {:cursor "pointer"
    :position "absolute"
    :overflow "hidden"
    :margin (px 5)
    :top 0
    :height (px 116)
    :background-color "#1d1d1d"
    :width (px 155)}]

  )
