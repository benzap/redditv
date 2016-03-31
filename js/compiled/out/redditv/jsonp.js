// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.jsonp');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('goog.Uri');
redditv.jsonp.send_jsonp = (function redditv$jsonp$send_jsonp(url){
var success_channel = cljs.core.async.chan.call(null);
var success_handler = ((function (success_channel){
return (function (result){
return cljs.core.async.put_BANG_.call(null,success_channel,result);
});})(success_channel))
;
var error_channel = cljs.core.async.chan.call(null);
var error_handler = ((function (success_channel,success_handler,error_channel){
return (function (result){
return cljs.core.async.put_BANG_.call(null,error_channel,result);
});})(success_channel,success_handler,error_channel))
;
var jsonp = (new goog.net.Jsonp((new goog.Uri(url)),"jsonp"));
jsonp.send(null,success_handler,error_handler);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [success_channel,error_channel], null);
});
