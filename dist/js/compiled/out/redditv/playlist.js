// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(app_state){
var c__33327__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33327__auto__){
return (function (){
var f__33328__auto__ = (function (){var switch__33262__auto__ = ((function (c__33327__auto__){
return (function (state_37551){
var state_val_37552 = (state_37551[(1)]);
if((state_val_37552 === (7))){
var inst_37521 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
var statearr_37553_37579 = state_37551__$1;
(statearr_37553_37579[(2)] = inst_37521);

(statearr_37553_37579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (1))){
var inst_37508 = (state_37551[(7)]);
var inst_37508__$1 = cljs.core.deref.call(null,app_state);
var inst_37510 = (inst_37508__$1 == null);
var inst_37511 = cljs.core.not.call(null,inst_37510);
var state_37551__$1 = (function (){var statearr_37554 = state_37551;
(statearr_37554[(7)] = inst_37508__$1);

return statearr_37554;
})();
if(inst_37511){
var statearr_37555_37580 = state_37551__$1;
(statearr_37555_37580[(1)] = (2));

} else {
var statearr_37556_37581 = state_37551__$1;
(statearr_37556_37581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (4))){
var inst_37524 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
if(cljs.core.truth_(inst_37524)){
var statearr_37557_37582 = state_37551__$1;
(statearr_37557_37582[(1)] = (8));

} else {
var statearr_37558_37583 = state_37551__$1;
(statearr_37558_37583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (13))){
var state_37551__$1 = state_37551;
var statearr_37559_37584 = state_37551__$1;
(statearr_37559_37584[(2)] = null);

(statearr_37559_37584[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (6))){
var state_37551__$1 = state_37551;
var statearr_37560_37585 = state_37551__$1;
(statearr_37560_37585[(2)] = false);

(statearr_37560_37585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (3))){
var state_37551__$1 = state_37551;
var statearr_37561_37586 = state_37551__$1;
(statearr_37561_37586[(2)] = false);

(statearr_37561_37586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (12))){
var inst_37541 = (state_37551[(8)]);
var inst_37543 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_37544 = [inst_37541,(0)];
var inst_37545 = cljs.core.PersistentHashMap.fromArrays(inst_37543,inst_37544);
var inst_37546 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_37545);
var state_37551__$1 = state_37551;
var statearr_37562_37587 = state_37551__$1;
(statearr_37562_37587[(2)] = inst_37546);

(statearr_37562_37587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (2))){
var inst_37508 = (state_37551[(7)]);
var inst_37513 = inst_37508.cljs$lang$protocol_mask$partition0$;
var inst_37514 = (inst_37513 & (64));
var inst_37515 = inst_37508.cljs$core$ISeq$;
var inst_37516 = (cljs.core.PROTOCOL_SENTINEL === inst_37515);
var inst_37517 = (inst_37514) || (inst_37516);
var state_37551__$1 = state_37551;
if(cljs.core.truth_(inst_37517)){
var statearr_37563_37588 = state_37551__$1;
(statearr_37563_37588[(1)] = (5));

} else {
var statearr_37564_37589 = state_37551__$1;
(statearr_37564_37589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (11))){
var inst_37541 = (state_37551[(8)]);
var inst_37541__$1 = (state_37551[(2)]);
var state_37551__$1 = (function (){var statearr_37565 = state_37551;
(statearr_37565[(8)] = inst_37541__$1);

return statearr_37565;
})();
if(cljs.core.truth_(inst_37541__$1)){
var statearr_37566_37590 = state_37551__$1;
(statearr_37566_37590[(1)] = (12));

} else {
var statearr_37567_37591 = state_37551__$1;
(statearr_37567_37591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (9))){
var inst_37508 = (state_37551[(7)]);
var state_37551__$1 = state_37551;
var statearr_37568_37592 = state_37551__$1;
(statearr_37568_37592[(2)] = inst_37508);

(statearr_37568_37592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (5))){
var state_37551__$1 = state_37551;
var statearr_37569_37593 = state_37551__$1;
(statearr_37569_37593[(2)] = true);

(statearr_37569_37593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37552 === (14))){
var inst_37549 = (state_37551[(2)]);
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37551__$1,inst_37549);
} else {
if((state_val_37552 === (10))){
var inst_37529 = (state_37551[(2)]);
var inst_37530 = cljs.core.get.call(null,inst_37529,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var inst_37531 = cljs.core.get.call(null,inst_37529,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
var inst_37532 = cljs.core.get.call(null,inst_37529,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var inst_37533 = cljs.core.get.call(null,inst_37529,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var inst_37534 = [new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"category","category",-593092832)];
var inst_37535 = [inst_37531,inst_37532,inst_37533];
var inst_37536 = cljs.core.PersistentHashMap.fromArrays(inst_37534,inst_37535);
var inst_37537 = redditv.reddit.get_subreddit_videos.call(null,inst_37530,inst_37536);
var inst_37538 = cljs.core.nth.call(null,inst_37537,(0),null);
var inst_37539 = cljs.core.nth.call(null,inst_37537,(1),null);
var state_37551__$1 = (function (){var statearr_37570 = state_37551;
(statearr_37570[(9)] = inst_37539);

return statearr_37570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37551__$1,(11),inst_37538);
} else {
if((state_val_37552 === (8))){
var inst_37508 = (state_37551[(7)]);
var inst_37526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37508);
var state_37551__$1 = state_37551;
var statearr_37571_37594 = state_37551__$1;
(statearr_37571_37594[(2)] = inst_37526);

(statearr_37571_37594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33327__auto__))
;
return ((function (switch__33262__auto__,c__33327__auto__){
return (function() {
var redditv$playlist$reload_$_state_machine__33263__auto__ = null;
var redditv$playlist$reload_$_state_machine__33263__auto____0 = (function (){
var statearr_37575 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37575[(0)] = redditv$playlist$reload_$_state_machine__33263__auto__);

(statearr_37575[(1)] = (1));

return statearr_37575;
});
var redditv$playlist$reload_$_state_machine__33263__auto____1 = (function (state_37551){
while(true){
var ret_value__33264__auto__ = (function (){try{while(true){
var result__33265__auto__ = switch__33262__auto__.call(null,state_37551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33265__auto__;
}
break;
}
}catch (e37576){if((e37576 instanceof Object)){
var ex__33266__auto__ = e37576;
var statearr_37577_37595 = state_37551;
(statearr_37577_37595[(5)] = ex__33266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37596 = state_37551;
state_37551 = G__37596;
continue;
} else {
return ret_value__33264__auto__;
}
break;
}
});
redditv$playlist$reload_$_state_machine__33263__auto__ = function(state_37551){
switch(arguments.length){
case 0:
return redditv$playlist$reload_$_state_machine__33263__auto____0.call(this);
case 1:
return redditv$playlist$reload_$_state_machine__33263__auto____1.call(this,state_37551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$reload_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$reload_$_state_machine__33263__auto____0;
redditv$playlist$reload_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$reload_$_state_machine__33263__auto____1;
return redditv$playlist$reload_$_state_machine__33263__auto__;
})()
;})(switch__33262__auto__,c__33327__auto__))
})();
var state__33329__auto__ = (function (){var statearr_37578 = f__33328__auto__.call(null);
(statearr_37578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33327__auto__);

return statearr_37578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33329__auto__);
});})(c__33327__auto__))
);

return c__33327__auto__;
});
redditv.playlist.get_selected = (function redditv$playlist$get_selected(app_state){
var index = new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var playlist = new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if((cljs.core.count.call(null,playlist) > (0))){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),index);
} else {
return null;
}
});
redditv.playlist.select_next = (function redditv$playlist$select_next(app_state){
var map__37599 = cljs.core.deref.call(null,app_state);
var map__37599__$1 = ((((!((map__37599 == null)))?((((map__37599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37599):map__37599);
var playlist_selected_index = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__37599__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__37603 = cljs.core.deref.call(null,app_state);
var map__37603__$1 = ((((!((map__37603 == null)))?((((map__37603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37603):map__37603);
var playlist_selected_index = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__37603__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var size = cljs.core.count.call(null,playlist);
var index = (playlist_selected_index - (1));
var index__$1 = (((index < (0)))?(size - (1)):index);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index__$1);

return index__$1;
});
