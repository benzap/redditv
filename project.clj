(defproject redditv "0.1.0"
  :description "Subreddit Video Player"
  :url "http://github.com/benzap/redditv"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :jvm-opts ^:replace []
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946" :scope "provided"]
                 [org.clojure/core.async "0.3.443"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [ring "1.6.2"]
                 [ring/ring-defaults "0.3.1"]
                 [bk/ring-gzip "0.2.1"]
                 [ring.middleware.logger "0.5.0"]
                 [compojure "1.6.0"]
                 [environ "1.1.0"]

                 ;; cljs
                 [garden "1.3.3"]
                 [rum "0.10.8"]
                 [cljs-http "0.1.43"]
                 [secretary "1.2.3"]
                 [cljsjs/react-mdl "1.10.1-1"]
                 [cljsjs/react-select "1.0.0-rc.3"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-environ "1.1.0"]
            [lein-garden "0.3.0"]
            [lein-ancient "0.6.14"]]

  :min-lein-version "2.6.1"

  :source-paths ["src/clj" "src/cljc" "src/cljs" "dev"]

  :test-paths ["test/clj"]

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js"]

  :uberjar-name "redditv.jar"

  ;; Use `lein run` if you just want to start a HTTP server, without figwheel
  :main redditv.server

  ;; nREPL by default starts in the :main namespace, we want to start in `user`
  ;; because that's where our development helper functions like (run) and
  ;; (browser-repl) live.
  :repl-options {:init-ns user}

  :garden
  {:builds [{:source-paths ["src/clj"]
             :stylesheet redditv.styles/main
             :compiler {:output-to "resources/public/css/main.css"}}]}

  :cljsbuild {:builds
              {:app
               {:source-paths ["src/cljc" "src/cljs"]

                :figwheel true
                ;; Alternatively, you can configure a function to run every time figwheel reloads.
                ;; :figwheel {:on-jsload "redditv.core/on-figwheel-reload"}

                :compiler {:main redditv.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/redditv.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true}}
               :prod
               {:source-paths ["src/cljc" "src/cljs"]
                :compiler {:main redditv.core
                           :asset-path "js/compiled/out"
                           :output-to "dist/js/compiled/redditv.js"
                           :output-dir "dist/js/compiled/out"
                           :optimizations :whitespace
                           :pretty-print true
                           }}}}

  ;; When running figwheel from nREPL, figwheel will read this configuration
  ;; stanza, but it will read it without passing through leiningen's profile
  ;; merging. So don't put a :figwheel section under the :dev profile, it will
  ;; not be picked up, instead configure figwheel here on the top level.

  :figwheel {;; :http-server-root "public"       ;; serve static assets from resources/public/
             ;; :server-port 3449                ;; default
             :server-ip "localhost"              ;; default
             :css-dirs ["resources/public/css"]  ;; watch and update CSS
             :ring-handler user/http-handler
             :server-logfile "log/figwheel.log"}

  :doo {:build "test"}

  :profiles {:dev
             {:dependencies [[figwheel "0.5.14"]
                             [figwheel-sidecar "0.5.14"]
                             [com.cemerick/piggieback "0.2.2"]
                             [org.clojure/tools.nrepl "0.2.13"]
                             [lein-doo "0.1.8"]]

              :plugins [[lein-figwheel "0.5.8"]
                        [lein-doo "0.1.7"]]

              :cljsbuild {:builds
                          {:test
                           {:source-paths ["src/cljc" "test/cljs"]
                            :compiler
                            {:output-to "resources/public/js/compiled/testable.js"
                             :main redditv.test-runner
                             :optimizations :none}}}}}

             :uberjar
             {:source-paths ^:replace ["src/clj"]
              :hooks [leiningen.cljsbuild]
              :omit-source true
              :aot :all
              :cljsbuild {:builds
                          {:app
                           {:source-paths ^:replace ["src/cljc" "src/cljs"]
                            :compiler
                            {:optimizations :simple
                             :pretty-print false}}}}}})
