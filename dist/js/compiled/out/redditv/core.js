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
redditv.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"show-search","show-search",266138187),new cljs.core.Keyword(null,"show-settings","show-settings",680287246),new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692),new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)],[cljs.core.PersistentVector.EMPTY,false,false,true,false,"hot",(100),true,"videos",(-1)]));
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
redditv.playlist.reload.call(null,redditv.core.app_state);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
/**
 * Set the location hash of a js/window object.
 */
redditv.core.set_hash_BANG_ = (function redditv$core$set_hash_BANG_(var_args){
var args38020 = [];
var len__31204__auto___38023 = arguments.length;
var i__31205__auto___38024 = (0);
while(true){
if((i__31205__auto___38024 < len__31204__auto___38023)){
args38020.push((arguments[i__31205__auto___38024]));

var G__38025 = (i__31205__auto___38024 + (1));
i__31205__auto___38024 = G__38025;
continue;
} else {
}
break;
}

var G__38022 = args38020.length;
switch (G__38022) {
case 1:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38020.length)].join('')));

}
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return redditv.core.set_hash_BANG_.call(null,window.location);
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (loc,v){
return (loc["hash"] = v);
});

redditv.core.set_hash_BANG_.cljs$lang$maxFixedArity = 2;

var action__37855__auto___38033 = (function (params__37856__auto__){
if(cljs.core.map_QMARK_.call(null,params__37856__auto__)){
var map__38027 = params__37856__auto__;
var map__38027__$1 = ((((!((map__38027 == null)))?((((map__38027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38027):map__38027);
var subreddit = cljs.core.get.call(null,map__38027__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37856__auto__)){
var vec__38029 = params__37856__auto__;
var subreddit = cljs.core.nth.call(null,vec__38029,(0),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__37855__auto___38033);

redditv.core.subreddit_path = ((function (action__37855__auto___38033){
return (function redditv$core$subreddit_path(var_args){
var args__31211__auto__ = [];
var len__31204__auto___38034 = arguments.length;
var i__31205__auto___38035 = (0);
while(true){
if((i__31205__auto___38035 < len__31204__auto___38034)){
args__31211__auto__.push((arguments[i__31205__auto___38035]));

var G__38036 = (i__31205__auto___38035 + (1));
i__31205__auto___38035 = G__38036;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37855__auto___38033))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37855__auto___38033){
return (function (args__37854__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__37854__auto__);
});})(action__37855__auto___38033))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__37855__auto___38033){
return (function (seq38032){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38032));
});})(action__37855__auto___38033))
;

var h_38039 = (new goog.History());
goog.events.listen(h_38039,goog.history.EventType.NAVIGATE,((function (h_38039){
return (function (p1__38037_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__38037_SHARP_.token);
});})(h_38039))
);

var G__38038_38040 = h_38039;
G__38038_38040.setEnabled(true);

redditv.core.mixin_keyboard_controls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return window.addEventListener("keydown",(function (e){
var keycode = e.keyCode;
var G__38041 = keycode;
switch (G__38041) {
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
var attrs38043 = redditv.components.header.c_header.call(null,redditv.core.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38043))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-main"], null)], null),attrs38043)):({"className": "redditv-main"})),((cljs.core.map_QMARK_.call(null,attrs38043))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38043),sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.core.mixin_keyboard_controls], null),"app");
rum.core.mount.call(null,redditv.core.app.call(null),document.querySelector("#app"));
