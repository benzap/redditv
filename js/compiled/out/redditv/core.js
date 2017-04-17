// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('redditv.youtube');
goog.require('redditv.player');
goog.require('redditv.reddit');
goog.require('goog.history.EventType');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('redditv.playlist');
goog.require('redditv.components.playlist');
goog.require('goog.History');
goog.require('redditv.events');
goog.require('redditv.components.sidepane');
goog.require('redditv.components.header');
goog.require('redditv.icons');
goog.require('redditv.utils');
goog.require('redditv.components.player');
goog.require('goog.events');
goog.require('redditv.components.fullscreen_controls');
goog.require('redditv.storage');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof redditv.core.app_state !== 'undefined'){
} else {
redditv.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"show-search","show-search",266138187),new cljs.core.Keyword(null,"show-settings","show-settings",680287246),new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604),new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)],[cljs.core.PersistentVector.EMPTY,true,false,false,true,false,"hot",null,(100),true,(0),"videos",(0)]));
}
if(typeof redditv.core.initial_load_QMARK_ !== 'undefined'){
} else {
redditv.core.initial_load_QMARK_ = rum.core.cursor_in.call(null,redditv.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181)], null));
}
if(typeof redditv.core.playlist_index !== 'undefined'){
} else {
redditv.core.playlist_index = rum.core.cursor_in.call(null,redditv.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)], null));
}
if(typeof redditv.core.show_playlist !== 'undefined'){
} else {
redditv.core.show_playlist = rum.core.cursor_in.call(null,redditv.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604)], null));
}
if(typeof redditv.core.fullscreen !== 'undefined'){
} else {
redditv.core.fullscreen = rum.core.cursor_in.call(null,redditv.core.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054)], null));
}
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__37773__auto___37946 = (function (params__37774__auto__){
if(cljs.core.map_QMARK_.call(null,params__37774__auto__)){
var map__37940 = params__37774__auto__;
var map__37940__$1 = ((((!((map__37940 == null)))?((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37940):map__37940);
var subreddit = cljs.core.get.call(null,map__37940__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var query_params = cljs.core.get.call(null,map__37940__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),redditv.utils.parse_int.call(null,cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"count","count",2139924085),"100")));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37774__auto__)){
var vec__37942 = params__37774__auto__;
var subreddit = cljs.core.nth.call(null,vec__37942,(0),null);
var query_params = cljs.core.nth.call(null,vec__37942,(1),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),redditv.utils.parse_int.call(null,cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"count","count",2139924085),"100")));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__37773__auto___37946);

redditv.core.subreddit_path = ((function (action__37773__auto___37946){
return (function redditv$core$subreddit_path(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37947 = arguments.length;
var i__31205__auto___37948 = (0);
while(true){
if((i__31205__auto___37948 < len__31204__auto___37947)){
args__31211__auto__.push((arguments[i__31205__auto___37948]));

var G__37949 = (i__31205__auto___37948 + (1));
i__31205__auto___37948 = G__37949;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37773__auto___37946))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37773__auto___37946){
return (function (args__37772__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__37772__auto__);
});})(action__37773__auto___37946))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__37773__auto___37946){
return (function (seq37945){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37945));
});})(action__37773__auto___37946))
;

var action__37773__auto___37956 = (function (params__37774__auto__){
if(cljs.core.map_QMARK_.call(null,params__37774__auto__)){
var map__37950 = params__37774__auto__;
var map__37950__$1 = ((((!((map__37950 == null)))?((((map__37950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37950):map__37950);
var subreddit = cljs.core.get.call(null,map__37950__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37950__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var query_params = cljs.core.get.call(null,map__37950__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),null,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),redditv.utils.parse_int.call(null,cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"count","count",2139924085)], null),"100")),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),redditv.utils.parse_bool.call(null,cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054)], null),"false")));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37774__auto__)){
var vec__37952 = params__37774__auto__;
var subreddit = cljs.core.nth.call(null,vec__37952,(0),null);
var index = cljs.core.nth.call(null,vec__37952,(1),null);
var query_params = cljs.core.nth.call(null,vec__37952,(2),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),null,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),redditv.utils.parse_int.call(null,cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"count","count",2139924085)], null),"100")),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),redditv.utils.parse_bool.call(null,cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054)], null),"false")));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d+)/,action__37773__auto___37956);

redditv.core.subreddit_path_with_index = ((function (action__37773__auto___37956){
return (function redditv$core$subreddit_path_with_index(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37957 = arguments.length;
var i__31205__auto___37958 = (0);
while(true){
if((i__31205__auto___37958 < len__31204__auto___37957)){
args__31211__auto__.push((arguments[i__31205__auto___37958]));

var G__37959 = (i__31205__auto___37958 + (1));
i__31205__auto___37958 = G__37959;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37773__auto___37956))
;

redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37773__auto___37956){
return (function (args__37772__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d+)/,args__37772__auto__);
});})(action__37773__auto___37956))
;

redditv.core.subreddit_path_with_index.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_index.cljs$lang$applyTo = ((function (action__37773__auto___37956){
return (function (seq37955){
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37955));
});})(action__37773__auto___37956))
;

var action__37773__auto___37966 = (function (params__37774__auto__){
if(cljs.core.map_QMARK_.call(null,params__37774__auto__)){
var map__37960 = params__37774__auto__;
var map__37960__$1 = ((((!((map__37960 == null)))?((((map__37960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37960):map__37960);
var subreddit = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var id = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var query_params = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),id,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37774__auto__)){
var vec__37962 = params__37774__auto__;
var subreddit = cljs.core.nth.call(null,vec__37962,(0),null);
var index = cljs.core.nth.call(null,vec__37962,(1),null);
var id = cljs.core.nth.call(null,vec__37962,(2),null);
var query_params = cljs.core.nth.call(null,vec__37962,(3),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),id,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d)\/([\w\d]+)/,action__37773__auto___37966);

redditv.core.subreddit_path_with_search = ((function (action__37773__auto___37966){
return (function redditv$core$subreddit_path_with_search(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37967 = arguments.length;
var i__31205__auto___37968 = (0);
while(true){
if((i__31205__auto___37968 < len__31204__auto___37967)){
args__31211__auto__.push((arguments[i__31205__auto___37968]));

var G__37969 = (i__31205__auto___37968 + (1));
i__31205__auto___37968 = G__37969;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37773__auto___37966))
;

redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37773__auto___37966){
return (function (args__37772__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d)\/([\w\d]+)/,args__37772__auto__);
});})(action__37773__auto___37966))
;

redditv.core.subreddit_path_with_search.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_search.cljs$lang$applyTo = ((function (action__37773__auto___37966){
return (function (seq37965){
return redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37965));
});})(action__37773__auto___37966))
;

var action__37773__auto___37976 = (function (params__37774__auto__){
if(cljs.core.map_QMARK_.call(null,params__37774__auto__)){
var map__37970 = params__37774__auto__;
var map__37970__$1 = ((((!((map__37970 == null)))?((((map__37970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37970):map__37970);
var temp__4655__auto___37977 = redditv.storage.load_app_state.call(null);
if(cljs.core.truth_(temp__4655__auto___37977)){
var state_37978 = temp__4655__auto___37977;
cljs.core.reset_BANG_.call(null,redditv.core.app_state,state_37978);
} else {
redditv.playlist.reload.call(null,redditv.core.app_state);
}

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37774__auto__)){
var vec__37972 = params__37774__auto__;
var temp__4655__auto___37979 = redditv.storage.load_app_state.call(null);
if(cljs.core.truth_(temp__4655__auto___37979)){
var state_37980 = temp__4655__auto___37979;
cljs.core.reset_BANG_.call(null,redditv.core.app_state,state_37980);
} else {
redditv.playlist.reload.call(null,redditv.core.app_state);
}

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__37773__auto___37976);

redditv.core.default_route = ((function (action__37773__auto___37976){
return (function redditv$core$default_route(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37981 = arguments.length;
var i__31205__auto___37982 = (0);
while(true){
if((i__31205__auto___37982 < len__31204__auto___37981)){
args__31211__auto__.push((arguments[i__31205__auto___37982]));

var G__37983 = (i__31205__auto___37982 + (1));
i__31205__auto___37982 = G__37983;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37773__auto___37976))
;

redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37773__auto___37976){
return (function (args__37772__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__37772__auto__);
});})(action__37773__auto___37976))
;

redditv.core.default_route.cljs$lang$maxFixedArity = (0);

redditv.core.default_route.cljs$lang$applyTo = ((function (action__37773__auto___37976){
return (function (seq37975){
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37975));
});})(action__37773__auto___37976))
;

var h_37986 = (new goog.History());
goog.events.listen(h_37986,goog.history.EventType.NAVIGATE,((function (h_37986){
return (function (p1__37984_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__37984_SHARP_.token);
});})(h_37986))
);

var G__37985_37987 = h_37986;
G__37985_37987.setEnabled(true);

redditv.core.mixin_keyboard_controls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return window.addEventListener("keydown",(function (e){
if(cljs.core.truth_(redditv.utils.query_in_focus_QMARK_.call(null,"#input-search-bar"))){
return null;
} else {
var keycode = e.keyCode;
var G__37988 = keycode;
switch (G__37988) {
case (27):
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),false);

break;
case (37):
return redditv.playlist.select_prev.call(null,redditv.core.app_state);

break;
case (39):
return redditv.playlist.select_next.call(null,redditv.core.app_state);

break;
case (83):
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-search","show-search",266138187),true);

break;
case (67):
return redditv.playlist.open_current_video_comments.call(null,redditv.core.app_state);

break;
default:
return null;

}
}
}));
})], null);
redditv.core.app = rum.core.build_defc.call(null,(function (){
var attrs37990 = redditv.components.header.c_header.call(null,redditv.core.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37990))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-main"], null)], null),attrs37990)):({"className": "redditv-main"})),((cljs.core.map_QMARK_.call(null,attrs37990))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.fullscreen_controls.c_fullscreen_controls.call(null,redditv.core.app_state))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37990),sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.fullscreen_controls.c_fullscreen_controls.call(null,redditv.core.app_state))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.core.mixin_keyboard_controls], null),"app");
redditv.playlist.reload.call(null,redditv.core.app_state,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
rum.core.mount.call(null,redditv.core.app.call(null),document.querySelector("#app"));
