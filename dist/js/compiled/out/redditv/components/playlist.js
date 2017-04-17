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
var react_component_37499 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_37500 = ReactDOM.findDOMNode(react_component_37499);
var parent_node_37501 = document.querySelector(".redditv-playlist-container");
var selected_QMARK__37502 = cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2));
if(cljs.core.truth_(selected_QMARK__37502)){
redditv.utils.align_to_root_left.call(null,parent_node_37501,dom_node_37500);
} else {
}

return state;
});
/**
 * Bug Fix for compressed playlist buttons not showing
 */
redditv.components.playlist.mixin_fix_playlist_compressed = (function redditv$components$playlist$mixin_fix_playlist_compressed(state){
var temp__4657__auto___37503 = document.querySelector(".redditv-playlist-container-compressed");
if(cljs.core.truth_(temp__4657__auto___37503)){
var dom_37504 = temp__4657__auto___37503;
(dom_37504["scrollLeft"] = (0));
} else {
}

return state;
});
redditv.components.playlist.c_playlist_item = rum.core.build_defcs.call(null,(function (state,p__37505,select_chan,selected_QMARK_){
var vec__37506 = p__37505;
var i = cljs.core.nth.call(null,vec__37506,(0),null);
var item = cljs.core.nth.call(null,vec__37506,(1),null);
var title = redditv.utils.decode_html_string.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item))].join(''));
var thumbnail = new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(item);
var thumbnail__$1 = (function (){var G__37509 = thumbnail;
if(cljs.core._EQ_.call(null,"nsfw",G__37509)){
return redditv.components.playlist.nsfw_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,"default",G__37509)){
return redditv.components.playlist.default_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,null,G__37509)){
return redditv.components.playlist.default_thumbnail_url;
} else {
if(cljs.core._EQ_.call(null,"",G__37509)){
return redditv.components.playlist.default_thumbnail_url;
} else {
return thumbnail;

}
}
}
}
})();
return React.createElement("div",({"title": title, "onClick": ((function (title,thumbnail,thumbnail__$1,vec__37506,i,item){
return (function (){
return cljs.core.async.put_BANG_.call(null,select_chan,i);
});})(title,thumbnail,thumbnail__$1,vec__37506,i,item))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-playlist-item",(cljs.core.truth_(selected_QMARK_)?"selected":null)], null))}),(function (){var attrs37510 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37510))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["redditv-playlist-item-title","noselect"], null)], null),attrs37510)):({"className": "redditv-playlist-item-title noselect"})),((cljs.core.map_QMARK_.call(null,attrs37510))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37510)], null)));
})(),React.createElement("img",({"src": thumbnail__$1, "className": "redditv-playlist-item-thumbnail"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (p__37511){
var vec__37512 = p__37511;
var i = cljs.core.nth.call(null,vec__37512,(0),null);
var item = cljs.core.nth.call(null,vec__37512,(1),null);
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
var c__33335__auto___37563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___37563,app_state,select_chan){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___37563,app_state,select_chan){
return (function (state_37551){
var state_val_37552 = (state_37551[(1)]);
if((state_val_37552 === (1))){
var state_37551__$1 = state_37551;
var statearr_37553_37564 = state_37551__$1;
(statearr_37553_37564[(2)] = null);

(statearr_37553_37564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (2))){
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37551__$1,(4),select_chan);
} else {
if((state_val_37552 === (3))){
var inst_37549 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37551__$1,inst_37549);
} else {
if((state_val_37552 === (4))){
var inst_37541 = (state_37551[(2)]);
var inst_37542 = cljs.core.deref.call(null,app_state);
var inst_37543 = new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(inst_37542);
var inst_37544 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),inst_37541);
var inst_37545 = redditv.utils.app_hash.call(null,app_state);
var inst_37546 = redditv.utils.set_hash_BANG_.call(null,inst_37545);
var state_37551__$1 = (function (){var statearr_37554 = state_37551;
(statearr_37554[(7)] = inst_37544);

(statearr_37554[(8)] = inst_37546);

(statearr_37554[(9)] = inst_37543);

return statearr_37554;
})();
var statearr_37555_37565 = state_37551__$1;
(statearr_37555_37565[(2)] = null);

(statearr_37555_37565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33335__auto___37563,app_state,select_chan))
;
return ((function (switch__33270__auto__,c__33335__auto___37563,app_state,select_chan){
return (function() {
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__ = null;
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____0 = (function (){
var statearr_37559 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37559[(0)] = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__);

(statearr_37559[(1)] = (1));

return statearr_37559;
});
var redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____1 = (function (state_37551){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_37551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e37560){if((e37560 instanceof Object)){
var ex__33274__auto__ = e37560;
var statearr_37561_37566 = state_37551;
(statearr_37561_37566[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37567 = state_37551;
state_37551 = G__37567;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__ = function(state_37551){
switch(arguments.length){
case 0:
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____0.call(this);
case 1:
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____1.call(this,state_37551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____0;
redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto____1;
return redditv$components$playlist$mixin_select_item_handler_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___37563,app_state,select_chan))
})();
var state__33337__auto__ = (function (){var statearr_37562 = f__33336__auto__.call(null);
(statearr_37562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___37563);

return statearr_37562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___37563,app_state,select_chan))
);


return cljs.core.assoc.call(null,state,new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762),select_chan);
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762));
})], null);
});
redditv.components.playlist.c_playlist = rum.core.build_defcs.call(null,(function (state,app_state){
var map__37568 = rum.core.react.call(null,app_state);
var map__37568__$1 = ((((!((map__37568 == null)))?((((map__37568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37568):map__37568);
var playlist = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var playlist_selected_index = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var fullscreen = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054));
var show_playlist = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604));
var playlist_items = cljs.core.map_indexed.call(null,cljs.core.vector,playlist);
var select_chan = new cljs.core.Keyword("redditv.components.playlist","select-chan","redditv.components.playlist/select-chan",-2123399762).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.utils.app_css_class_layout.call(null,app_state,new cljs.core.Keyword(null,".redditv-playlist",".redditv-playlist",2027679976)),sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show_playlist)?new cljs.core.Keyword(null,".redditv-playlist-rightpane",".redditv-playlist-rightpane",-758776332):new cljs.core.Keyword(null,".redditv-playlist-rightpane-compressed",".redditv-playlist-rightpane-compressed",-223416774)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(show_playlist)?"arrow_drop_down":"arrow_drop_up"),new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604)], null),cljs.core.not);
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core.not.call(null,fullscreen))?"fullscreen":"fullscreen_exit"),new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054)], null),cljs.core.not);
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null))], null)),(cljs.core.truth_(show_playlist)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-playlist-container",".redditv-playlist-container",-1255314327),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,show_playlist))?"compressed":null)], null),(function (){var iter__30879__auto__ = ((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function redditv$components$playlist$iter__37570(s__37571){
return (new cljs.core.LazySeq(null,((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
var s__37571__$1 = s__37571;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37571__$1);
if(temp__4657__auto__){
var s__37571__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37571__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__37571__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__37573 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__37572 = (0);
while(true){
if((i__37572 < size__30878__auto__)){
var vec__37580 = cljs.core._nth.call(null,c__30877__auto__,i__37572);
var index = cljs.core.nth.call(null,vec__37580,(0),null);
var item = cljs.core.nth.call(null,vec__37580,(1),null);
cljs.core.chunk_append.call(null,b__37573,redditv.components.playlist.c_playlist_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item], null),select_chan,cljs.core._EQ_.call(null,index,playlist_selected_index)));

var G__37586 = (i__37572 + (1));
i__37572 = G__37586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37573),redditv$components$playlist$iter__37570.call(null,cljs.core.chunk_rest.call(null,s__37571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37573),null);
}
} else {
var vec__37583 = cljs.core.first.call(null,s__37571__$2);
var index = cljs.core.nth.call(null,vec__37583,(0),null);
var item = cljs.core.nth.call(null,vec__37583,(1),null);
return cljs.core.cons.call(null,redditv.components.playlist.c_playlist_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item], null),select_chan,cljs.core._EQ_.call(null,index,playlist_selected_index)),redditv$components$playlist$iter__37570.call(null,cljs.core.rest.call(null,s__37571__$2)));
}
} else {
return null;
}
break;
}
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
,null,null));
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
;
return iter__30879__auto__.call(null,playlist_items);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-playlist-container-compressed",".redditv-playlist-container-compressed",-621175670),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-leftpane-compressed",".redditv-leftpane-compressed",-2079951596),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"skip_previous",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return redditv.playlist.select_prev.call(null,app_state);
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null)),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"skip_next",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan){
return (function (){
return redditv.playlist.select_next.call(null,app_state);
});})(map__37568,map__37568__$1,playlist,playlist_selected_index,fullscreen,show_playlist,playlist_items,select_chan))
], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.redditv-playlist-count","span.redditv-playlist-count",462568137),[cljs.core.str((playlist_selected_index + (1))),cljs.core.str(" of "),cljs.core.str(cljs.core.count.call(null,playlist_items))].join('')], null),redditv.components.mdl.progress_bar.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-playlist-progress",new cljs.core.Keyword(null,"progress","progress",244323547),(((playlist_selected_index + (1)) / cljs.core.count.call(null,playlist_items)) * (100))], null))], null))], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,redditv.components.playlist.mixin_select_item_handler.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),redditv.components.playlist.mixin_fix_playlist_compressed], null)], null),"c-playlist");
