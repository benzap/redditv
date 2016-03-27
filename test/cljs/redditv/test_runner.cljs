(ns redditv.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [redditv.core-test]))

(enable-console-print!)

(doo-tests 'redditv.core-test)
