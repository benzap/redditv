// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.components.player');
goog.require('cljs.core');
goog.require('redditv.vimeo');
goog.require('redditv.youtube');
goog.require('rum.core');
goog.require('cljs.core.async');
goog.require('redditv.playlist');
goog.require('redditv.events');
goog.require('redditv.player');
redditv.components.player.player_instance = cljs.core.atom.call(null,null);
redditv.components.player.generate_video_player = (function redditv$components$player$generate_video_player(app_state,item,event_channel){
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item);
if((url == null)){
return redditv.player.create_nullplayer.call(null);
} else {
if(cljs.core.truth_(redditv.youtube.is_youtube_url_QMARK_.call(null,url))){
return redditv.youtube.create_youtubeplayer.call(null,"redditv-player",url,event_channel);
} else {
if(cljs.core.truth_(redditv.vimeo.is_vimeo_url_QMARK_.call(null,url))){
return redditv.vimeo.create_vimeo_player.call(null,"redditv-player",url,event_channel);
} else {
return null;
}
}
}
});
redditv.components.player.mixin_player_handler = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var event_channel = cljs.core.async.chan.call(null);
var app_state = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var fullscreen = cljs.core.deref.call(null,cljs.core.nth.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state),(2)));
var c__33308__auto___37440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto___37440,event_channel,app_state,fullscreen){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto___37440,event_channel,app_state,fullscreen){
return (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (7))){
var inst_37381 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37381)){
var statearr_37408_37441 = state_37406__$1;
(statearr_37408_37441[(1)] = (8));

} else {
var statearr_37409_37442 = state_37406__$1;
(statearr_37409_37442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (1))){
var state_37406__$1 = state_37406;
var statearr_37410_37443 = state_37406__$1;
(statearr_37410_37443[(2)] = null);

(statearr_37410_37443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (4))){
var inst_37376 = (state_37406[(7)]);
var inst_37375 = (state_37406[(8)]);
var inst_37375__$1 = (state_37406[(2)]);
var inst_37376__$1 = redditv.events.is_player_not_started_QMARK_.call(null,inst_37375__$1);
var state_37406__$1 = (function (){var statearr_37411 = state_37406;
(statearr_37411[(7)] = inst_37376__$1);

(statearr_37411[(8)] = inst_37375__$1);

return statearr_37411;
})();
if(cljs.core.truth_(inst_37376__$1)){
var statearr_37412_37444 = state_37406__$1;
(statearr_37412_37444[(1)] = (5));

} else {
var statearr_37413_37445 = state_37406__$1;
(statearr_37413_37445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (15))){
var state_37406__$1 = state_37406;
var statearr_37414_37446 = state_37406__$1;
(statearr_37414_37446[(2)] = null);

(statearr_37414_37446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (13))){
var inst_37399 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37415_37447 = state_37406__$1;
(statearr_37415_37447[(2)] = inst_37399);

(statearr_37415_37447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (6))){
var inst_37375 = (state_37406[(8)]);
var inst_37379 = redditv.events.is_player_ended_QMARK_.call(null,inst_37375);
var state_37406__$1 = state_37406;
var statearr_37416_37448 = state_37406__$1;
(statearr_37416_37448[(2)] = inst_37379);

(statearr_37416_37448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (17))){
var inst_37388 = (state_37406[(9)]);
var inst_37390 = redditv.player.fullscreen.call(null,inst_37388);
var state_37406__$1 = state_37406;
var statearr_37417_37449 = state_37406__$1;
(statearr_37417_37449[(2)] = inst_37390);

(statearr_37417_37449[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (3))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
if((state_val_37407 === (12))){
var state_37406__$1 = state_37406;
var statearr_37418_37450 = state_37406__$1;
(statearr_37418_37450[(2)] = null);

(statearr_37418_37450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (2))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(4),event_channel);
} else {
if((state_val_37407 === (19))){
var inst_37393 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37419_37451 = state_37406__$1;
(statearr_37419_37451[(2)] = inst_37393);

(statearr_37419_37451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (11))){
var state_37406__$1 = state_37406;
if(cljs.core.truth_(fullscreen)){
var statearr_37420_37452 = state_37406__$1;
(statearr_37420_37452[(1)] = (14));

} else {
var statearr_37421_37453 = state_37406__$1;
(statearr_37421_37453[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (9))){
var inst_37375 = (state_37406[(8)]);
var inst_37385 = redditv.events.is_player_playing_QMARK_.call(null,inst_37375);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37385)){
var statearr_37422_37454 = state_37406__$1;
(statearr_37422_37454[(1)] = (11));

} else {
var statearr_37423_37455 = state_37406__$1;
(statearr_37423_37455[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (5))){
var inst_37376 = (state_37406[(7)]);
var state_37406__$1 = state_37406;
var statearr_37424_37456 = state_37406__$1;
(statearr_37424_37456[(2)] = inst_37376);

(statearr_37424_37456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (14))){
var inst_37388 = (state_37406[(9)]);
var inst_37388__$1 = cljs.core.deref.call(null,redditv.components.player.player_instance);
var state_37406__$1 = (function (){var statearr_37425 = state_37406;
(statearr_37425[(9)] = inst_37388__$1);

return statearr_37425;
})();
if(cljs.core.truth_(inst_37388__$1)){
var statearr_37426_37457 = state_37406__$1;
(statearr_37426_37457[(1)] = (17));

} else {
var statearr_37427_37458 = state_37406__$1;
(statearr_37427_37458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (16))){
var inst_37396 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37428_37459 = state_37406__$1;
(statearr_37428_37459[(2)] = inst_37396);

(statearr_37428_37459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (10))){
var inst_37401 = (state_37406[(2)]);
var state_37406__$1 = (function (){var statearr_37429 = state_37406;
(statearr_37429[(10)] = inst_37401);

return statearr_37429;
})();
var statearr_37430_37460 = state_37406__$1;
(statearr_37430_37460[(2)] = null);

(statearr_37430_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (18))){
var state_37406__$1 = state_37406;
var statearr_37431_37461 = state_37406__$1;
(statearr_37431_37461[(2)] = null);

(statearr_37431_37461[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (8))){
var inst_37383 = redditv.playlist.select_next.call(null,app_state);
var state_37406__$1 = state_37406;
var statearr_37432_37462 = state_37406__$1;
(statearr_37432_37462[(2)] = inst_37383);

(statearr_37432_37462[(1)] = (10));


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
}
}
}
}
}
});})(c__33308__auto___37440,event_channel,app_state,fullscreen))
;
return ((function (switch__33243__auto__,c__33308__auto___37440,event_channel,app_state,fullscreen){
return (function() {
var redditv$components$player$state_machine__33244__auto__ = null;
var redditv$components$player$state_machine__33244__auto____0 = (function (){
var statearr_37436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37436[(0)] = redditv$components$player$state_machine__33244__auto__);

(statearr_37436[(1)] = (1));

return statearr_37436;
});
var redditv$components$player$state_machine__33244__auto____1 = (function (state_37406){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e37437){if((e37437 instanceof Object)){
var ex__33247__auto__ = e37437;
var statearr_37438_37463 = state_37406;
(statearr_37438_37463[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37464 = state_37406;
state_37406 = G__37464;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$components$player$state_machine__33244__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return redditv$components$player$state_machine__33244__auto____0.call(this);
case 1:
return redditv$components$player$state_machine__33244__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$components$player$state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$components$player$state_machine__33244__auto____0;
redditv$components$player$state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$components$player$state_machine__33244__auto____1;
return redditv$components$player$state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto___37440,event_channel,app_state,fullscreen))
})();
var state__33310__auto__ = (function (){var statearr_37439 = f__33309__auto__.call(null);
(statearr_37439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto___37440);

return statearr_37439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto___37440,event_channel,app_state,fullscreen))
);


return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("redditv.components.player","event-channel","redditv.components.player/event-channel",-2083706849),event_channel),new cljs.core.Keyword("redditv.components.player","player-instance","redditv.components.player/player-instance",1377113206),redditv.player.create_nullplayer.call(null)),new cljs.core.Keyword("redditv.components.player","current-item","redditv.components.player/current-item",1398232857),redditv.playlist.get_selected.call(null,app_state));
}),new cljs.core.Keyword(null,"will-update","will-update",328062998),(function (state){
var app_state = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var event_channel = new cljs.core.Keyword("redditv.components.player","event-channel","redditv.components.player/event-channel",-2083706849).cljs$core$IFn$_invoke$arity$1(state);
var current_item = redditv.playlist.get_selected.call(null,app_state);
var old_item = new cljs.core.Keyword("redditv.components.player","current-item","redditv.components.player/current-item",1398232857).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.not_EQ_.call(null,current_item,old_item)){
var _ = (cljs.core.truth_(new cljs.core.Keyword("redditv.components.player","player-instance","redditv.components.player/player-instance",1377113206).cljs$core$IFn$_invoke$arity$1(state))?redditv.player.dispose.call(null,new cljs.core.Keyword("redditv.components.player","player-instance","redditv.components.player/player-instance",1377113206).cljs$core$IFn$_invoke$arity$1(state)):null);
var instance = redditv.components.player.generate_video_player.call(null,app_state,current_item,event_channel);
cljs.core.reset_BANG_.call(null,redditv.components.player.player_instance,instance);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword("redditv.components.player","player-instance","redditv.components.player/player-instance",1377113206),instance),new cljs.core.Keyword("redditv.components.player","current-item","redditv.components.player/current-item",1398232857),current_item);
} else {
return state;
}
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
cljs.core.reset_BANG_.call(null,redditv.components.player.player_instance,null);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword("redditv.components.player","event-channel","redditv.components.player/event-channel",-2083706849)),new cljs.core.Keyword("redditv.components.player","player-instance","redditv.components.player/player-instance",1377113206)),new cljs.core.Keyword("redditv.components.player","current-item","redditv.components.player/current-item",1398232857));
})], null);
redditv.components.player.c_player = rum.core.build_defcs.call(null,(function (state,app_state,initial_load_QMARK_,playlist_index,show_playlist,fullscreen){
var initial_load_QMARK___$1 = rum.core.react.call(null,initial_load_QMARK_);
var index = rum.core.react.call(null,playlist_index);
var show_playlist__$1 = rum.core.react.call(null,show_playlist);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show_playlist__$1)?new cljs.core.Keyword(null,"#redditv-player-container","#redditv-player-container",-146250158):new cljs.core.Keyword(null,"#redditv-player-container-compressed","#redditv-player-container-compressed",157072018)),React.createElement("div",({"id": "redditv-player"}))], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,redditv.components.player.mixin_player_handler], null),"c-player");
