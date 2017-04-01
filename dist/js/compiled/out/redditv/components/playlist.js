// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.components.playlist');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('rum.core');
goog.require('redditv.playlist');
goog.require('redditv.utils');
goog.require('redditv.components.mdl');
redditv.components.playlist.nsfw_thumbnail_url = "http://i.imgur.com/KZOsckv.jpg";
redditv.components.playlist.default_thumbnail_url = "http://i.imgur.com/9wEJlnk.gif";
redditv.components.playlist.mixin_fix_scroll_alignment = (function redditv$components$playlist$mixin_fix_scroll_alignment(state){
var react_component_37269 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_37270 = ReactDOM.findDOMNode(react_component_37269);
var parent_node_37271 = document.querySelector(".redditv-playlist-container");
var selected_QMARK__37272 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
if(cljs.core.truth_(selected_QMARK__37272)){
redditv.utils.align_to_root_left.call(null,parent_node_37271,dom_node_37270);
} else {
}

return state;
});
/**
 * Bug Fix for compressed playlist buttons not showing
 */
redditv.components.playlist.mixin_fix_playlist_compressed = (function redditv$components$playlist$mixin_fix_playlist_compressed(state){
var temp__4657__auto___37273 = document.querySelector(".redditv-playlist-container-compressed");
if(cljs.core.truth_(temp__4657__auto___37273)){
var dom_37274 = temp__4657__auto___37273;
(dom_37274["scrollLeft"] = (0));
} else {
}

return state;
});
redditv.components.playlist.c_playlist_item = rum.core.build_defcs.call(null,(function (state,p__37275,select_chan,selected_QMARK_){
var vec__37276 = p__37275;
var i = cljs.core.nth.call(null,vec__37276,(0),null);
var item = cljs.core.nth.call(null,vec__37276,(1),null);
var title = redditv.utils.decode_html_string.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item))].join(''));
var thumbnail = new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(item);
var thumbnail__$1 = (function (){var G__37279 = thumbnail;
if(cljs.core._EQ_.call(null,"nsfw",G__37279)){
return redditv.components.playlist.nsfw_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,"default",G__37279)){
return redditv.components.playlist.default_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,null,G__37279)){
return redditv.components.playlist.default_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,"",G__37279)){
return redditv.components.playlist.default_thumbnail_url;
} else {
return thumbnail;

}
}
}
}
})();
return React.createElement("div",({"title": title, "onClick": ((function (title,thumbnail,thumbnail__$1,vec__37276,i,item){
return (function (){
return cljs.core.async.put_BANG_.call(null,select_chan,i);
});})(title,thumbnail,thumbnail__$1,vec__37276,i,item))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-playlist-item",(cljs.core.truth_(selected_QMARK_)?"selected":null)], null))}),(function (){var attrs37280 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37280))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-playlist-item-title","noselect"], null)], null),attrs37280)):({"className": "redditv-playlist-item-title noselect"})),((cljs.core.map_QMARK_.call(null,attrs37280))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37280)], null)));
})(),React.createElement("img",({"src": thumbnail__$1, "className": "redditv-playlist-item-thumbnail"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (p__37281){
var vec__37282 = p__37281;
var i = cljs.core.nth.call(null,vec__37282,(0),null);
var item = cljs.core.nth.call(null,vec__37282,(1),null);
return [cljs.core.str("playlist-item-"),cljs.core.str(i),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item))].join('');
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),redditv.components.playlist.mixin_fix_scroll_alignment,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),redditv.components.playlist.mixin_fix_scroll_alignment], null)], null),"c-playlist-item");
/**
 * Passes in a ::select-chan local variable, applies playlist index to
 *   current components app-state
 */
redditv.components.playlist.mixin_select_item_handler = (function redditv$components$playlist$mixin_select_item_handler(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var app_state = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var select_chan = cljs.core.async.chan.call(null);
var c__33321__auto___37333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto___37333,app_state,select_chan){
return (function (){
var f__33322__auto__ = (function (){var switch__33256__auto__ = ((function (c__33321__auto___37333,app_state,select_chan){
return (function (state_37321){
var state_val_37322 = (state_37321[(1)]);
if((state_val_37322 === (1))){
var state_37321__$1 = state_37321;
var statearr_37323_37334 = state_37321__$1;
(statearr_37323_37334[(2)] = null);

(statearr_37323_37334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (2))){
var state_37321__$1 = state_37321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37321__$1,(4),select_chan);
} else {
if((state_val_37322 === (3))){
var inst_37319 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37321__$1,inst_37319);
} else {
if((state_val_37322 === (4))){
var inst_37311 = (state_37321[(2)]);
var inst_37312 = cljs.core.deref.call(null,app_state);
var inst_37313 = new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(inst_37312);
var inst_37314 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),inst_37311);
var inst_37315 = redditv.utils.app_hash.call(null,app_state);
var inst_37316 = redditv.utils.set_hash_BANG_.call(null,inst_37315);
var state_37321__$1 = (function (){var statearr_37324 = state_37321;
(statearr_37324[(7)] = inst_37316);

(statearr_37324[(8)] = inst_37313);

(statearr_37324[(9)] = inst_37314);

return statearr_37324;
})();
var statearr_37325_37335 = state_37321__$1;
(statearr_37325_37335[(2)] = null);

(statearr_37325_37335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33321__auto___37333,app_state,select_chan))
;
return ((function (switch__33256__auto__,c__33321__auto___37333,app_state,select_chan){
return (function() {
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__ = null;
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____0 = (function (){
var statearr_37329 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37329[(0)] = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__);

(statearr_37329[(1)] = (1));

return statearr_37329;
});
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____1 = (function (state_37321){
while(true){
var ret_value__33258__auto__ = (function (){try{while(true){
var result__33259__auto__ = switch__33256__auto__.call(null,state_37321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33259__auto__;
}
break;
}
}catch (e37330){if((e37330 instanceof Object)){
var ex__33260__auto__ = e37330;
var statearr_37331_37336 = state_37321;
(statearr_37331_37336[(5)] = ex__33260__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37337 = state_37321;
state_37321 = G__37337;
continue;
} else {
return ret_value__33258__auto__;
}
break;
}
});
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__ = function(state_37321){
switch(arguments.length){
case 0:
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____0.call(this);
case 1:
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____1.call(this,state_37321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____0;
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto____1;
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33257__auto__;
})()
;})(switch__33256__auto__,c__33321__auto___37333,app_state,select_chan))
})();
var state__33323__auto__ = (function (){var statearr_37332 = f__33322__auto__.call(null);
(statearr_37332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33321__auto___37333);

return statearr_37332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto___37333,app_state,select_chan))
);


return cljs.core.assoc.call(null,state,new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762),select_chan);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762));
})], null);
});
redditv.components.playlist.c_playlist = rum.core.build_defcs.call(null,(function (state,app_state){
var map__37338 = rum.core.react.call(null,app_state);
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37338):map__37338);
var playlist = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var playlist_selected_index = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var fullscreen = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054));
var show_playlist = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604));
var playlist_items = cljs.core.map_indexed.call(null,cljs.core.vector,playlist);
var select_chan = new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show_playlist)?new cljs.core.Keyword(null,".redditv-playlist",".redditv-playlist",2027679976):new cljs.core.Keyword(null,".redditv-playlist-compressed",".redditv-playlist-compressed",1770583482)),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show_playlist)?new cljs.core.Keyword(null,".redditv-playlist-rightpane",".redditv-playlist-rightpane",-758776332):new cljs.core.Keyword(null,".redditv-playlist-rightpane-compressed",".redditv-playlist-rightpane-compressed",-223416774)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(show_playlist)?"arrow_drop_down":"arrow_drop_up"),new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604)], null),cljs.core.not);
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core.not.call(null,fullscreen))?"fullscreen":"fullscreen_exit"),new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054)], null),cljs.core.not);
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null))], null)),(cljs.core.truth_(show_playlist)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-playlist-container",".redditv-playlist-container",-1255314327),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,show_playlist))?"compressed":null)], null),(function (){var iter__30879__auto__ = ((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function redditv$components$playlist$iter__37340(s__37341){
return (new cljs.core.LazySeq(null,((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
var s__37341__$1 = s__37341;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37341__$1);
if(temp__4657__auto__){
var s__37341__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37341__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__37341__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__37343 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__37342 = (0);
while(true){
if((i__37342 < size__30878__auto__)){
var vec__37350 = cljs.core._nth.call(null,c__30877__auto__,i__37342);
var index = cljs.core.nth.call(null,vec__37350,(0),null);
var item = cljs.core.nth.call(null,vec__37350,(1),null);
cljs.core.chunk_append.call(null,b__37343,redditv.components.playlist.c_playlist_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item], null),select_chan,cljs.core._EQ_.call(null,index,playlist_selected_index)));

var G__37356 = (i__37342 + (1));
i__37342 = G__37356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37343),redditv$components$playlist$iter__37340.call(null,cljs.core.chunk_rest.call(null,s__37341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37343),null);
}
} else {
var vec__37353 = cljs.core.first.call(null,s__37341__$2);
var index = cljs.core.nth.call(null,vec__37353,(0),null);
var item = cljs.core.nth.call(null,vec__37353,(1),null);
return cljs.core.cons.call(null,redditv.components.playlist.c_playlist_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item], null),select_chan,cljs.core._EQ_.call(null,index,playlist_selected_index)),redditv$components$playlist$iter__37340.call(null,cljs.core.rest.call(null,s__37341__$2)));
}
} else {
return null;
}
break;
}
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
,null,null));
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
;
return iter__30879__auto__.call(null,playlist_items);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-playlist-container-compressed",".redditv-playlist-container-compressed",-621175670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-leftpane-compressed",".redditv-leftpane-compressed",-2079951596),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"skip_previous",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return redditv.playlist.select_prev.call(null,app_state);
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"skip_next",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return redditv.playlist.select_next.call(null,app_state);
});})(map__37338,map__37338__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.redditv-playlist-count","span.redditv-playlist-count",462568137),[cljs.core.str((playlist_selected_index + (1))),cljs.core.str(" of "),cljs.core.str(cljs.core.count.call(null,playlist_items))].join('')], null),redditv.components.mdl.progress_bar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-playlist-progress",new cljs.core.Keyword(null,"progress","progress",244323547),(((playlist_selected_index + (1)) / cljs.core.count.call(null,playlist_items)) * (100))], null))], null))], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,redditv.components.playlist.mixin_select_item_handler.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),redditv.components.playlist.mixin_fix_playlist_compressed], null)], null),"c-playlist");
