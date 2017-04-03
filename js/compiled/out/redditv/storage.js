// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.storage');
goog.require('cljs.core');
redditv.storage.enabled_QMARK_ = false;
redditv.storage.has_local_storage_QMARK_ = (function (){var and__30084__auto__ = redditv.storage.enabled_QMARK_;
if(cljs.core.truth_(and__30084__auto__)){
return (localStorage instanceof Storage);
} else {
return and__30084__auto__;
}
})();
redditv.storage.app_state_key = "redditv-app-state";
redditv.storage.stringify = (function redditv$storage$stringify(x){
var s = cljs.core.clj__GT_js.call(null,x);
return JSON.stringify(s);
});
redditv.storage.parse = (function redditv$storage$parse(x){
var x__$1 = JSON.parse(x);
return cljs.core.js__GT_clj.call(null,x__$1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
redditv.storage.save_app_state_BANG_ = (function redditv$storage$save_app_state_BANG_(state){
if(cljs.core.truth_(redditv.storage.has_local_storage_QMARK_)){
return localStorage.setItem(redditv.storage.app_state_key,redditv.storage.stringify.call(null,state));
} else {
return null;
}
});
redditv.storage.load_app_state = (function redditv$storage$load_app_state(){
if(cljs.core.truth_(redditv.storage.has_local_storage_QMARK_)){
return redditv.storage.parse.call(null,localStorage.getItem(redditv.storage.app_state_key));
} else {
return null;
}
});
