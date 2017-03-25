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
redditv.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"show-search","show-search",266138187),new cljs.core.Keyword(null,"show-settings","show-settings",680287246),new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604),new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)],[cljs.core.PersistentVector.EMPTY,false,false,true,false,"hot",(100),true,(0),"videos",(-1)]));
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
var action__37494__auto___37665 = (function (params__37495__auto__){
if(cljs.core.map_QMARK_.call(null,params__37495__auto__)){
var map__37659 = params__37495__auto__;
var map__37659__$1 = ((((!((map__37659 == null)))?((((map__37659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37659):map__37659);
var subreddit = cljs.core.get.call(null,map__37659__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37495__auto__)){
var vec__37661 = params__37495__auto__;
var subreddit = cljs.core.nth.call(null,vec__37661,(0),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__37494__auto___37665);

redditv.core.subreddit_path = ((function (action__37494__auto___37665){
return (function redditv$core$subreddit_path(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37666 = arguments.length;
var i__31205__auto___37667 = (0);
while(true){
if((i__31205__auto___37667 < len__31204__auto___37666)){
args__31211__auto__.push((arguments[i__31205__auto___37667]));

var G__37668 = (i__31205__auto___37667 + (1));
i__31205__auto___37667 = G__37668;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37494__auto___37665))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37494__auto___37665){
return (function (args__37493__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__37493__auto__);
});})(action__37494__auto___37665))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__37494__auto___37665){
return (function (seq37664){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37664));
});})(action__37494__auto___37665))
;

var action__37494__auto___37675 = (function (params__37495__auto__){
if(cljs.core.map_QMARK_.call(null,params__37495__auto__)){
var map__37669 = params__37495__auto__;
var map__37669__$1 = ((((!((map__37669 == null)))?((((map__37669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37669):map__37669);
var subreddit = cljs.core.get.call(null,map__37669__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37669__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37495__auto__)){
var vec__37671 = params__37495__auto__;
var subreddit = cljs.core.nth.call(null,vec__37671,(0),null);
var index = cljs.core.nth.call(null,vec__37671,(1),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d+)/,action__37494__auto___37675);

redditv.core.subreddit_path_with_index = ((function (action__37494__auto___37675){
return (function redditv$core$subreddit_path_with_index(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37676 = arguments.length;
var i__31205__auto___37677 = (0);
while(true){
if((i__31205__auto___37677 < len__31204__auto___37676)){
args__31211__auto__.push((arguments[i__31205__auto___37677]));

var G__37678 = (i__31205__auto___37677 + (1));
i__31205__auto___37677 = G__37678;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37494__auto___37675))
;

redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37494__auto___37675){
return (function (args__37493__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d+)/,args__37493__auto__);
});})(action__37494__auto___37675))
;

redditv.core.subreddit_path_with_index.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_index.cljs$lang$applyTo = ((function (action__37494__auto___37675){
return (function (seq37674){
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37674));
});})(action__37494__auto___37675))
;

var h_37681 = (new goog.History());
goog.events.listen(h_37681,goog.history.EventType.NAVIGATE,((function (h_37681){
return (function (p1__37679_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__37679_SHARP_.token);
});})(h_37681))
);

var G__37680_37682 = h_37681;
G__37680_37682.setEnabled(true);

redditv.core.mixin_keyboard_controls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return window.addEventListener("keydown",(function (e){
var keycode = e.keyCode;
var G__37683 = keycode;
switch (G__37683) {
case (37):
return redditv.playlist.select_prev.call(null,redditv.core.app_state);

break;
case (39):
return redditv.playlist.select_next.call(null,redditv.core.app_state);

break;
default:
return null;

}
}));
})], null);
redditv.core.app = rum.core.build_defc.call(null,(function (){
var attrs37685 = redditv.components.header.c_header.call(null,redditv.core.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37685))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-main"], null)], null),attrs37685)):({"className": "redditv-main"})),((cljs.core.map_QMARK_.call(null,attrs37685))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37685),sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.core.mixin_keyboard_controls], null),"app");
redditv.playlist.reload.call(null,redditv.core.app_state);
rum.core.mount.call(null,redditv.core.app.call(null),document.querySelector("#app"));
