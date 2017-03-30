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
cljs.core.enable_console_print_BANG_.call(null);
if(typeof redditv.core.app_state !== 'undefined'){
} else {
redditv.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"show-search","show-search",266138187),new cljs.core.Keyword(null,"show-settings","show-settings",680287246),new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604),new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)],[cljs.core.PersistentVector.EMPTY,false,false,true,false,"hot",(100),true,(0),"videos",(0)]));
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
var action__37515__auto___37686 = (function (params__37516__auto__){
if(cljs.core.map_QMARK_.call(null,params__37516__auto__)){
var map__37680 = params__37516__auto__;
var map__37680__$1 = ((((!((map__37680 == null)))?((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37680):map__37680);
var subreddit = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var query_params = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"));

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37516__auto__)){
var vec__37682 = params__37516__auto__;
var subreddit = cljs.core.nth.call(null,vec__37682,(0),null);
var query_params = cljs.core.nth.call(null,vec__37682,(1),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"));

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__37515__auto___37686);

redditv.core.subreddit_path = ((function (action__37515__auto___37686){
return (function redditv$core$subreddit_path(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37687 = arguments.length;
var i__31205__auto___37688 = (0);
while(true){
if((i__31205__auto___37688 < len__31204__auto___37687)){
args__31211__auto__.push((arguments[i__31205__auto___37688]));

var G__37689 = (i__31205__auto___37688 + (1));
i__31205__auto___37688 = G__37689;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37515__auto___37686))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37515__auto___37686){
return (function (args__37514__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__37514__auto__);
});})(action__37515__auto___37686))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__37515__auto___37686){
return (function (seq37685){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37685));
});})(action__37515__auto___37686))
;

var action__37515__auto___37696 = (function (params__37516__auto__){
if(cljs.core.map_QMARK_.call(null,params__37516__auto__)){
var map__37690 = params__37516__auto__;
var map__37690__$1 = ((((!((map__37690 == null)))?((((map__37690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37690):map__37690);
var subreddit = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var query_params = cljs.core.get.call(null,map__37690__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37516__auto__)){
var vec__37692 = params__37516__auto__;
var subreddit = cljs.core.nth.call(null,vec__37692,(0),null);
var index = cljs.core.nth.call(null,vec__37692,(1),null);
var query_params = cljs.core.nth.call(null,vec__37692,(2),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d+)/,action__37515__auto___37696);

redditv.core.subreddit_path_with_index = ((function (action__37515__auto___37696){
return (function redditv$core$subreddit_path_with_index(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37697 = arguments.length;
var i__31205__auto___37698 = (0);
while(true){
if((i__31205__auto___37698 < len__31204__auto___37697)){
args__31211__auto__.push((arguments[i__31205__auto___37698]));

var G__37699 = (i__31205__auto___37698 + (1));
i__31205__auto___37698 = G__37699;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37515__auto___37696))
;

redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37515__auto___37696){
return (function (args__37514__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d+)/,args__37514__auto__);
});})(action__37515__auto___37696))
;

redditv.core.subreddit_path_with_index.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_index.cljs$lang$applyTo = ((function (action__37515__auto___37696){
return (function (seq37695){
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37695));
});})(action__37515__auto___37696))
;

var action__37515__auto___37706 = (function (params__37516__auto__){
if(cljs.core.map_QMARK_.call(null,params__37516__auto__)){
var map__37700 = params__37516__auto__;
var map__37700__$1 = ((((!((map__37700 == null)))?((((map__37700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37700):map__37700);
redditv.playlist.reload.call(null,redditv.core.app_state);

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37516__auto__)){
var vec__37702 = params__37516__auto__;
redditv.playlist.reload.call(null,redditv.core.app_state);

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__37515__auto___37706);

redditv.core.default_route = ((function (action__37515__auto___37706){
return (function redditv$core$default_route(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37707 = arguments.length;
var i__31205__auto___37708 = (0);
while(true){
if((i__31205__auto___37708 < len__31204__auto___37707)){
args__31211__auto__.push((arguments[i__31205__auto___37708]));

var G__37709 = (i__31205__auto___37708 + (1));
i__31205__auto___37708 = G__37709;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37515__auto___37706))
;

redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37515__auto___37706){
return (function (args__37514__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__37514__auto__);
});})(action__37515__auto___37706))
;

redditv.core.default_route.cljs$lang$maxFixedArity = (0);

redditv.core.default_route.cljs$lang$applyTo = ((function (action__37515__auto___37706){
return (function (seq37705){
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37705));
});})(action__37515__auto___37706))
;

var h_37712 = (new goog.History());
goog.events.listen(h_37712,goog.history.EventType.NAVIGATE,((function (h_37712){
return (function (p1__37710_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__37710_SHARP_.token);
});})(h_37712))
);

var G__37711_37713 = h_37712;
G__37711_37713.setEnabled(true);

redditv.core.mixin_keyboard_controls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return window.addEventListener("keydown",(function (e){
if(cljs.core.truth_(redditv.utils.query_in_focus_QMARK_.call(null,"#input-search-bar"))){
return null;
} else {
var keycode = e.keyCode;
var G__37714 = keycode;
switch (G__37714) {
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
return new cljs.core.Keyword(null,"else","else",-1508377146);

break;
default:
return null;

}
}
}));
})], null);
redditv.core.app = rum.core.build_defc.call(null,(function (){
var attrs37716 = redditv.components.header.c_header.call(null,redditv.core.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37716))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-main"], null)], null),attrs37716)):({"className": "redditv-main"})),((cljs.core.map_QMARK_.call(null,attrs37716))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37716),sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.core.mixin_keyboard_controls], null),"app");
redditv.playlist.reload.call(null,redditv.core.app_state,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
rum.core.mount.call(null,redditv.core.app.call(null),document.querySelector("#app"));
