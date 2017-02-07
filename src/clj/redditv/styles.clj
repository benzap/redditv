(ns redditv.styles
  (:require
    [garden.def :refer [defstyles]]
    [garden.color :as color :refer [hsl rgb rgba]]
    [garden.units :refer [px]]))

(def font-mono "'Roboto', sans-serif")

(def color-light-text "#fdfdfd")
(def color-background "#607D8B")
(def color-foreground "#263238")

(def color-button-default "#455A64")
(def color-button-default-hover "#78909C")
(def color-button2-default "#03A9F4")

(def header-height 40)
(def playlist-height 140)
(def sidepane-width 40)

(def color-entry-hover "#90A4AE")

(def default-border-radius 16)

;; Search Bar
(def search-bar-width 300)

(defstyles main
  [:* 
   {:font-family font-mono
    :color color-light-text
    ;;:padding 0
    ;;:margin 0
    }]

  [:html :body
   {:height "100%" :margin 0}]

  [:body 
   {:background color-background
    :min-height "100%"}]

  [:.right-border-radius
   {:-webkit-border-top-right-radius (px default-border-radius)
    :-webkit-border-bottom-right-radius (px default-border-radius)
    :-moz-border-radius-topright (px default-border-radius)
    :-moz-border-radius-bottomright (px default-border-radius)
    :border-top-right-radius (px default-border-radius)
    :border-bottom-right-radius (px default-border-radius)}]

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
    :z-index 1
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
    :z-index -1
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

  [:.redditv-button
   {:position "relative"
    :z-index 2
    :height (px sidepane-width)
    :width (px sidepane-width)
    :text-align "center"
    :line-height (px sidepane-width)
    :background-color color-button-default
    :cursor "pointer"}
   [:&:hover
    {:background-color color-button-default-hover}]]

  [:.redditv-icon
   {:position "relative"
    :text-align "center"}]

  [:.button-active-toggle
   {:background-color (color/darken color-button-default 50)}
   [:&:hover
    {:background-color (color/darken color-button-default 50)}]]

  [:.redditv-search-dialog
   {:position "absolute"
    :z-index 0
    :top 0
    :left (px sidepane-width)
    :width (px 300)
    :height (px header-height)
    :background-color (color/darken color-foreground 10)}]

  [:#input-search-bar
   {:background-color "black"
    :font-size (px 24)
    :vertical-align "middle"
    :padding "0 5px 0 5px"
    :border-radius (px 3)
    :outline "none"
    :border "none"
    :margin (px 6)}]

  [:.redditv-settings-dialog-container
   {:position "fixed"
    :top (px header-height)
    :left (px sidepane-width)
    :right 0
    :bottom (px playlist-height)
    :background-color (rgba 13 13 13 0.5)}]

  [:.redditv-settings-dialog-page
   {:position "relative"
    :min-height (px 400)
    :max-width (px 600)
    :margin (str (+ header-height 20) "px" " auto")
    :background-color color-foreground}]
  
  [:.redditv-dialog-close
   {:z-index 99
    :position "absolute"
    :top (px -12.5)
    :right (px -12.5)}]

  [:.redditv-dialog-header
   {:position "absolute"
    :top 0
    :left 0
    :right 0
    :height (px header-height)
    :line-height (px header-height)}]

  [:.redditv-dialog-title
   {:font-size (px 26)
    :font-weight "bold"
    :padding "0 5px 0 5px"}]

  [:.redditv-dialog-content
   {:position "absolute"
    :top (px header-height)
    :background-color color-background
    :left 0
    :right 0
    :bottom 0
    :overflow-y "auto"
    :padding "10px"}]

  )
