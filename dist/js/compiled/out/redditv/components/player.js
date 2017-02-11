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
var c__33327__auto___37801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33327__auto___37801,event_channel,app_state,fullscreen){
return (function (){
var f__33328__auto__ = (function (){var switch__33262__auto__ = ((function (c__33327__auto___37801,event_channel,app_state,fullscreen){
return (function (state_37767){
var state_val_37768 = (state_37767[(1)]);
if((state_val_37768 === (7))){
var inst_37742 = (state_37767[(2)]);
var state_37767__$1 = state_37767;
if(cljs.core.truth_(inst_37742)){
var statearr_37769_37802 = state_37767__$1;
(statearr_37769_37802[(1)] = (8));

} else {
var statearr_37770_37803 = state_37767__$1;
(statearr_37770_37803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (1))){
var state_37767__$1 = state_37767;
var statearr_37771_37804 = state_37767__$1;
(statearr_37771_37804[(2)] = null);

(statearr_37771_37804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (4))){
var inst_37736 = (state_37767[(7)]);
var inst_37737 = (state_37767[(8)]);
var inst_37736__$1 = (state_37767[(2)]);
var inst_37737__$1 = redditv.events.is_player_not_started_QMARK_.call(null,inst_37736__$1);
var state_37767__$1 = (function (){var statearr_37772 = state_37767;
(statearr_37772[(7)] = inst_37736__$1);

(statearr_37772[(8)] = inst_37737__$1);

return statearr_37772;
})();
if(cljs.core.truth_(inst_37737__$1)){
var statearr_37773_37805 = state_37767__$1;
(statearr_37773_37805[(1)] = (5));

} else {
var statearr_37774_37806 = state_37767__$1;
(statearr_37774_37806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (15))){
var state_37767__$1 = state_37767;
var statearr_37775_37807 = state_37767__$1;
(statearr_37775_37807[(2)] = null);

(statearr_37775_37807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (13))){
var inst_37760 = (state_37767[(2)]);
var state_37767__$1 = state_37767;
var statearr_37776_37808 = state_37767__$1;
(statearr_37776_37808[(2)] = inst_37760);

(statearr_37776_37808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (6))){
var inst_37736 = (state_37767[(7)]);
var inst_37740 = redditv.events.is_player_ended_QMARK_.call(null,inst_37736);
var state_37767__$1 = state_37767;
var statearr_37777_37809 = state_37767__$1;
(statearr_37777_37809[(2)] = inst_37740);

(statearr_37777_37809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (17))){
var inst_37749 = (state_37767[(9)]);
var inst_37751 = redditv.player.fullscreen.call(null,inst_37749);
var state_37767__$1 = state_37767;
var statearr_37778_37810 = state_37767__$1;
(statearr_37778_37810[(2)] = inst_37751);

(statearr_37778_37810[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (3))){
var inst_37765 = (state_37767[(2)]);
var state_37767__$1 = state_37767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37767__$1,inst_37765);
} else {
if((state_val_37768 === (12))){
var state_37767__$1 = state_37767;
var statearr_37779_37811 = state_37767__$1;
(statearr_37779_37811[(2)] = null);

(statearr_37779_37811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (2))){
var state_37767__$1 = state_37767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37767__$1,(4),event_channel);
} else {
if((state_val_37768 === (19))){
var inst_37754 = (state_37767[(2)]);
var state_37767__$1 = state_37767;
var statearr_37780_37812 = state_37767__$1;
(statearr_37780_37812[(2)] = inst_37754);

(statearr_37780_37812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (11))){
var state_37767__$1 = state_37767;
if(cljs.core.truth_(fullscreen)){
var statearr_37781_37813 = state_37767__$1;
(statearr_37781_37813[(1)] = (14));

} else {
var statearr_37782_37814 = state_37767__$1;
(statearr_37782_37814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (9))){
var inst_37736 = (state_37767[(7)]);
var inst_37746 = redditv.events.is_player_playing_QMARK_.call(null,inst_37736);
var state_37767__$1 = state_37767;
if(cljs.core.truth_(inst_37746)){
var statearr_37783_37815 = state_37767__$1;
(statearr_37783_37815[(1)] = (11));

} else {
var statearr_37784_37816 = state_37767__$1;
(statearr_37784_37816[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (5))){
var inst_37737 = (state_37767[(8)]);
var state_37767__$1 = state_37767;
var statearr_37785_37817 = state_37767__$1;
(statearr_37785_37817[(2)] = inst_37737);

(statearr_37785_37817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (14))){
var inst_37749 = (state_37767[(9)]);
var inst_37749__$1 = cljs.core.deref.call(null,redditv.components.player.player_instance);
var state_37767__$1 = (function (){var statearr_37786 = state_37767;
(statearr_37786[(9)] = inst_37749__$1);

return statearr_37786;
})();
if(cljs.core.truth_(inst_37749__$1)){
var statearr_37787_37818 = state_37767__$1;
(statearr_37787_37818[(1)] = (17));

} else {
var statearr_37788_37819 = state_37767__$1;
(statearr_37788_37819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (16))){
var inst_37757 = (state_37767[(2)]);
var state_37767__$1 = state_37767;
var statearr_37789_37820 = state_37767__$1;
(statearr_37789_37820[(2)] = inst_37757);

(statearr_37789_37820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (10))){
var inst_37762 = (state_37767[(2)]);
var state_37767__$1 = (function (){var statearr_37790 = state_37767;
(statearr_37790[(10)] = inst_37762);

return statearr_37790;
})();
var statearr_37791_37821 = state_37767__$1;
(statearr_37791_37821[(2)] = null);

(statearr_37791_37821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (18))){
var state_37767__$1 = state_37767;
var statearr_37792_37822 = state_37767__$1;
(statearr_37792_37822[(2)] = null);

(statearr_37792_37822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37768 === (8))){
var inst_37744 = redditv.playlist.select_next.call(null,app_state);
var state_37767__$1 = state_37767;
var statearr_37793_37823 = state_37767__$1;
(statearr_37793_37823[(2)] = inst_37744);

(statearr_37793_37823[(1)] = (10));


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
});})(c__33327__auto___37801,event_channel,app_state,fullscreen))
;
return ((function (switch__33262__auto__,c__33327__auto___37801,event_channel,app_state,fullscreen){
return (function() {
var redditv$components$player$state_machine__33263__auto__ = null;
var redditv$components$player$state_machine__33263__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = redditv$components$player$state_machine__33263__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var redditv$components$player$state_machine__33263__auto____1 = (function (state_37767){
while(true){
var ret_value__33264__auto__ = (function (){try{while(true){
var result__33265__auto__ = switch__33262__auto__.call(null,state_37767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33265__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__33266__auto__ = e37798;
var statearr_37799_37824 = state_37767;
(statearr_37799_37824[(5)] = ex__33266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37825 = state_37767;
state_37767 = G__37825;
continue;
} else {
return ret_value__33264__auto__;
}
break;
}
});
redditv$components$player$state_machine__33263__auto__ = function(state_37767){
switch(arguments.length){
case 0:
return redditv$components$player$state_machine__33263__auto____0.call(this);
case 1:
return redditv$components$player$state_machine__33263__auto____1.call(this,state_37767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$components$player$state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$components$player$state_machine__33263__auto____0;
redditv$components$player$state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$components$player$state_machine__33263__auto____1;
return redditv$components$player$state_machine__33263__auto__;
})()
;})(switch__33262__auto__,c__33327__auto___37801,event_channel,app_state,fullscreen))
})();
var state__33329__auto__ = (function (){var statearr_37800 = f__33328__auto__.call(null);
(statearr_37800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33327__auto___37801);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33329__auto__);
});})(c__33327__auto___37801,event_channel,app_state,fullscreen))
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
redditv.components.player.c_player = rum.core.build_defcs.call(null,(function (state,app_state,playlist_index,show_playlist,fullscreen){
var index = rum.core.react.call(null,playlist_index);
var show_playlist__$1 = rum.core.react.call(null,show_playlist);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show_playlist__$1)?new cljs.core.Keyword(null,"#redditv-player-container","#redditv-player-container",-146250158):new cljs.core.Keyword(null,"#redditv-player-container-compressed","#redditv-player-container-compressed",157072018)),React.createElement("div",({"id": "redditv-player"}))], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,redditv.components.player.mixin_player_handler], null),"c-player");
