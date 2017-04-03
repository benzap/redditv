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
var action__37701__auto___37872 = (function (params__37702__auto__){
if(cljs.core.map_QMARK_.call(null,params__37702__auto__)){
var map__37866 = params__37702__auto__;
var map__37866__$1 = ((((!((map__37866 == null)))?((((map__37866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37866):map__37866);
var subreddit = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var query_params = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37702__auto__)){
var vec__37868 = params__37702__auto__;
var subreddit = cljs.core.nth.call(null,vec__37868,(0),null);
var query_params = cljs.core.nth.call(null,vec__37868,(1),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get.call(null,query_params,new cljs.core.Keyword(null,"sort","sort",953465918),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__37701__auto___37872);

redditv.core.subreddit_path = ((function (action__37701__auto___37872){
return (function redditv$core$subreddit_path(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37873 = arguments.length;
var i__31205__auto___37874 = (0);
while(true){
if((i__31205__auto___37874 < len__31204__auto___37873)){
args__31211__auto__.push((arguments[i__31205__auto___37874]));

var G__37875 = (i__31205__auto___37874 + (1));
i__31205__auto___37874 = G__37875;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37701__auto___37872))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37701__auto___37872){
return (function (args__37700__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__37700__auto__);
});})(action__37701__auto___37872))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__37701__auto___37872){
return (function (seq37871){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37871));
});})(action__37701__auto___37872))
;

var action__37701__auto___37882 = (function (params__37702__auto__){
if(cljs.core.map_QMARK_.call(null,params__37702__auto__)){
var map__37876 = params__37702__auto__;
var map__37876__$1 = ((((!((map__37876 == null)))?((((map__37876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37876):map__37876);
var subreddit = cljs.core.get.call(null,map__37876__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37876__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var query_params = cljs.core.get.call(null,map__37876__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),null,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37702__auto__)){
var vec__37878 = params__37702__auto__;
var subreddit = cljs.core.nth.call(null,vec__37878,(0),null);
var index = cljs.core.nth.call(null,vec__37878,(1),null);
var query_params = cljs.core.nth.call(null,vec__37878,(2),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),null,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d+)/,action__37701__auto___37882);

redditv.core.subreddit_path_with_index = ((function (action__37701__auto___37882){
return (function redditv$core$subreddit_path_with_index(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37883 = arguments.length;
var i__31205__auto___37884 = (0);
while(true){
if((i__31205__auto___37884 < len__31204__auto___37883)){
args__31211__auto__.push((arguments[i__31205__auto___37884]));

var G__37885 = (i__31205__auto___37884 + (1));
i__31205__auto___37884 = G__37885;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37701__auto___37882))
;

redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37701__auto___37882){
return (function (args__37700__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d+)/,args__37700__auto__);
});})(action__37701__auto___37882))
;

redditv.core.subreddit_path_with_index.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_index.cljs$lang$applyTo = ((function (action__37701__auto___37882){
return (function (seq37881){
return redditv.core.subreddit_path_with_index.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37881));
});})(action__37701__auto___37882))
;

var action__37701__auto___37892 = (function (params__37702__auto__){
if(cljs.core.map_QMARK_.call(null,params__37702__auto__)){
var map__37886 = params__37702__auto__;
var map__37886__$1 = ((((!((map__37886 == null)))?((((map__37886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37886):map__37886);
var subreddit = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var index = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var id = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var query_params = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),id,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
if(cljs.core.vector_QMARK_.call(null,params__37702__auto__)){
var vec__37888 = params__37702__auto__;
var subreddit = cljs.core.nth.call(null,vec__37888,(0),null);
var index = cljs.core.nth.call(null,vec__37888,(1),null);
var id = cljs.core.nth.call(null,vec__37888,(2),null);
var query_params = cljs.core.nth.call(null,vec__37888,(3),null);
cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),redditv.utils.parse_int.call(null,index),new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694),id,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518),cljs.core.get_in.call(null,query_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"sort","sort",953465918)], null),"hot"));

redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);

return redditv.storage.save_app_state_BANG_.call(null,cljs.core.deref.call(null,redditv.core.app_state));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\/r\/([\w\d]+)\/(\d)\/([\w\d]+)/,action__37701__auto___37892);

redditv.core.subreddit_path_with_search = ((function (action__37701__auto___37892){
return (function redditv$core$subreddit_path_with_search(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37893 = arguments.length;
var i__31205__auto___37894 = (0);
while(true){
if((i__31205__auto___37894 < len__31204__auto___37893)){
args__31211__auto__.push((arguments[i__31205__auto___37894]));

var G__37895 = (i__31205__auto___37894 + (1));
i__31205__auto___37894 = G__37895;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37701__auto___37892))
;

redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37701__auto___37892){
return (function (args__37700__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,/\/r\/([\w\d]+)\/(\d)\/([\w\d]+)/,args__37700__auto__);
});})(action__37701__auto___37892))
;

redditv.core.subreddit_path_with_search.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path_with_search.cljs$lang$applyTo = ((function (action__37701__auto___37892){
return (function (seq37891){
return redditv.core.subreddit_path_with_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37891));
});})(action__37701__auto___37892))
;

var action__37701__auto___37902 = (function (params__37702__auto__){
if(cljs.core.map_QMARK_.call(null,params__37702__auto__)){
var map__37896 = params__37702__auto__;
var map__37896__$1 = ((((!((map__37896 == null)))?((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37896):map__37896);
var temp__4655__auto___37903 = redditv.storage.load_app_state.call(null);
if(cljs.core.truth_(temp__4655__auto___37903)){
var state_37904 = temp__4655__auto___37903;
cljs.core.reset_BANG_.call(null,redditv.core.app_state,state_37904);
} else {
redditv.playlist.reload.call(null,redditv.core.app_state);
}

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
if(cljs.core.vector_QMARK_.call(null,params__37702__auto__)){
var vec__37898 = params__37702__auto__;
var temp__4655__auto___37905 = redditv.storage.load_app_state.call(null);
if(cljs.core.truth_(temp__4655__auto___37905)){
var state_37906 = temp__4655__auto___37905;
cljs.core.reset_BANG_.call(null,redditv.core.app_state,state_37906);
} else {
redditv.playlist.reload.call(null,redditv.core.app_state);
}

return redditv.utils.force_app_reload_BANG_.call(null,redditv.core.app_state);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__37701__auto___37902);

redditv.core.default_route = ((function (action__37701__auto___37902){
return (function redditv$core$default_route(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37907 = arguments.length;
var i__31205__auto___37908 = (0);
while(true){
if((i__31205__auto___37908 < len__31204__auto___37907)){
args__31211__auto__.push((arguments[i__31205__auto___37908]));

var G__37909 = (i__31205__auto___37908 + (1));
i__31205__auto___37908 = G__37909;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});})(action__37701__auto___37902))
;

redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic = ((function (action__37701__auto___37902){
return (function (args__37700__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"*",args__37700__auto__);
});})(action__37701__auto___37902))
;

redditv.core.default_route.cljs$lang$maxFixedArity = (0);

redditv.core.default_route.cljs$lang$applyTo = ((function (action__37701__auto___37902){
return (function (seq37901){
return redditv.core.default_route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37901));
});})(action__37701__auto___37902))
;

var h_37912 = (new goog.History());
goog.events.listen(h_37912,goog.history.EventType.NAVIGATE,((function (h_37912){
return (function (p1__37910_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__37910_SHARP_.token);
});})(h_37912))
);

var G__37911_37913 = h_37912;
G__37911_37913.setEnabled(true);

redditv.core.mixin_keyboard_controls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
return window.addEventListener("keydown",(function (e){
if(cljs.core.truth_(redditv.utils.query_in_focus_QMARK_.call(null,"#input-search-bar"))){
return null;
} else {
var keycode = e.keyCode;
var G__37914 = keycode;
if(cljs.core._EQ_.call(null,(37),G__37914)){
return redditv.playlist.select_prev.call(null,redditv.core.app_state);
} else {
if(cljs.core._EQ_.call(null,(39),G__37914)){
return redditv.playlist.select_next.call(null,redditv.core.app_state);
} else {
if(cljs.core._EQ_.call(null,(83),G__37914)){
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-search","show-search",266138187),true);
} else {
if(cljs.core._EQ_.call(null,(67),G__37914)){
return redditv.playlist.open_current_video_comments.call(null,redditv.core.app_state);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),G__37914)){
return null;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(keycode)].join('')));

}
}
}
}
}
}
}));
})], null);
redditv.core.app = rum.core.build_defc.call(null,(function (){
var attrs37915 = redditv.components.header.c_header.call(null,redditv.core.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37915))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-main"], null)], null),attrs37915)):({"className": "redditv-main"})),((cljs.core.map_QMARK_.call(null,attrs37915))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37915),sablono.interpreter.interpret.call(null,redditv.components.sidepane.c_sidepane.call(null,redditv.core.app_state)),sablono.interpreter.interpret.call(null,redditv.components.player.c_player.call(null,redditv.core.app_state,redditv.core.initial_load_QMARK_,redditv.core.playlist_index,redditv.core.show_playlist,redditv.core.fullscreen)),sablono.interpreter.interpret.call(null,redditv.components.playlist.c_playlist.call(null,redditv.core.app_state))], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.core.mixin_keyboard_controls], null),"app");
redditv.playlist.reload.call(null,redditv.core.app_state,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);
rum.core.mount.call(null,redditv.core.app.call(null),document.querySelector("#app"));
