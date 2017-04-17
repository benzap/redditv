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
goog.require('redditv.utils');
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
var c__33335__auto___37717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___37717,event_channel,app_state,fullscreen){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___37717,event_channel,app_state,fullscreen){
return (function (state_37683){
var state_val_37684 = (state_37683[(1)]);
if((state_val_37684 === (7))){
var inst_37658 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
if(cljs.core.truth_(inst_37658)){
var statearr_37685_37718 = state_37683__$1;
(statearr_37685_37718[(1)] = (8));

} else {
var statearr_37686_37719 = state_37683__$1;
(statearr_37686_37719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (1))){
var state_37683__$1 = state_37683;
var statearr_37687_37720 = state_37683__$1;
(statearr_37687_37720[(2)] = null);

(statearr_37687_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (4))){
var inst_37653 = (state_37683[(7)]);
var inst_37652 = (state_37683[(8)]);
var inst_37652__$1 = (state_37683[(2)]);
var inst_37653__$1 = redditv.events.is_player_not_started_QMARK_.call(null,inst_37652__$1);
var state_37683__$1 = (function (){var statearr_37688 = state_37683;
(statearr_37688[(7)] = inst_37653__$1);

(statearr_37688[(8)] = inst_37652__$1);

return statearr_37688;
})();
if(cljs.core.truth_(inst_37653__$1)){
var statearr_37689_37721 = state_37683__$1;
(statearr_37689_37721[(1)] = (5));

} else {
var statearr_37690_37722 = state_37683__$1;
(statearr_37690_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (15))){
var state_37683__$1 = state_37683;
var statearr_37691_37723 = state_37683__$1;
(statearr_37691_37723[(2)] = null);

(statearr_37691_37723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (13))){
var inst_37676 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37692_37724 = state_37683__$1;
(statearr_37692_37724[(2)] = inst_37676);

(statearr_37692_37724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (6))){
var inst_37652 = (state_37683[(8)]);
var inst_37656 = redditv.events.is_player_ended_QMARK_.call(null,inst_37652);
var state_37683__$1 = state_37683;
var statearr_37693_37725 = state_37683__$1;
(statearr_37693_37725[(2)] = inst_37656);

(statearr_37693_37725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (17))){
var inst_37665 = (state_37683[(9)]);
var inst_37667 = redditv.player.fullscreen.call(null,inst_37665);
var state_37683__$1 = state_37683;
var statearr_37694_37726 = state_37683__$1;
(statearr_37694_37726[(2)] = inst_37667);

(statearr_37694_37726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (3))){
var inst_37681 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37683__$1,inst_37681);
} else {
if((state_val_37684 === (12))){
var state_37683__$1 = state_37683;
var statearr_37695_37727 = state_37683__$1;
(statearr_37695_37727[(2)] = null);

(statearr_37695_37727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (2))){
var state_37683__$1 = state_37683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37683__$1,(4),event_channel);
} else {
if((state_val_37684 === (19))){
var inst_37670 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37696_37728 = state_37683__$1;
(statearr_37696_37728[(2)] = inst_37670);

(statearr_37696_37728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (11))){
var state_37683__$1 = state_37683;
if(cljs.core.truth_(fullscreen)){
var statearr_37697_37729 = state_37683__$1;
(statearr_37697_37729[(1)] = (14));

} else {
var statearr_37698_37730 = state_37683__$1;
(statearr_37698_37730[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (9))){
var inst_37652 = (state_37683[(8)]);
var inst_37662 = redditv.events.is_player_playing_QMARK_.call(null,inst_37652);
var state_37683__$1 = state_37683;
if(cljs.core.truth_(inst_37662)){
var statearr_37699_37731 = state_37683__$1;
(statearr_37699_37731[(1)] = (11));

} else {
var statearr_37700_37732 = state_37683__$1;
(statearr_37700_37732[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (5))){
var inst_37653 = (state_37683[(7)]);
var state_37683__$1 = state_37683;
var statearr_37701_37733 = state_37683__$1;
(statearr_37701_37733[(2)] = inst_37653);

(statearr_37701_37733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (14))){
var inst_37665 = (state_37683[(9)]);
var inst_37665__$1 = cljs.core.deref.call(null,redditv.components.player.player_instance);
var state_37683__$1 = (function (){var statearr_37702 = state_37683;
(statearr_37702[(9)] = inst_37665__$1);

return statearr_37702;
})();
if(cljs.core.truth_(inst_37665__$1)){
var statearr_37703_37734 = state_37683__$1;
(statearr_37703_37734[(1)] = (17));

} else {
var statearr_37704_37735 = state_37683__$1;
(statearr_37704_37735[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (16))){
var inst_37673 = (state_37683[(2)]);
var state_37683__$1 = state_37683;
var statearr_37705_37736 = state_37683__$1;
(statearr_37705_37736[(2)] = inst_37673);

(statearr_37705_37736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (10))){
var inst_37678 = (state_37683[(2)]);
var state_37683__$1 = (function (){var statearr_37706 = state_37683;
(statearr_37706[(10)] = inst_37678);

return statearr_37706;
})();
var statearr_37707_37737 = state_37683__$1;
(statearr_37707_37737[(2)] = null);

(statearr_37707_37737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (18))){
var state_37683__$1 = state_37683;
var statearr_37708_37738 = state_37683__$1;
(statearr_37708_37738[(2)] = null);

(statearr_37708_37738[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37684 === (8))){
var inst_37660 = redditv.playlist.select_next.call(null,app_state);
var state_37683__$1 = state_37683;
var statearr_37709_37739 = state_37683__$1;
(statearr_37709_37739[(2)] = inst_37660);

(statearr_37709_37739[(1)] = (10));


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
});})(c__33335__auto___37717,event_channel,app_state,fullscreen))
;
return ((function (switch__33270__auto__,c__33335__auto___37717,event_channel,app_state,fullscreen){
return (function() {
var redditv$components$player$state_machine__33271__auto__ = null;
var redditv$components$player$state_machine__33271__auto____0 = (function (){
var statearr_37713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37713[(0)] = redditv$components$player$state_machine__33271__auto__);

(statearr_37713[(1)] = (1));

return statearr_37713;
});
var redditv$components$player$state_machine__33271__auto____1 = (function (state_37683){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_37683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e37714){if((e37714 instanceof Object)){
var ex__33274__auto__ = e37714;
var statearr_37715_37740 = state_37683;
(statearr_37715_37740[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37741 = state_37683;
state_37683 = G__37741;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$components$player$state_machine__33271__auto__ = function(state_37683){
switch(arguments.length){
case 0:
return redditv$components$player$state_machine__33271__auto____0.call(this);
case 1:
return redditv$components$player$state_machine__33271__auto____1.call(this,state_37683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$components$player$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$components$player$state_machine__33271__auto____0;
redditv$components$player$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$components$player$state_machine__33271__auto____1;
return redditv$components$player$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___37717,event_channel,app_state,fullscreen))
})();
var state__33337__auto__ = (function (){var statearr_37716 = f__33336__auto__.call(null);
(statearr_37716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___37717);

return statearr_37716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___37717,event_channel,app_state,fullscreen))
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
var fullscreen__$1 = rum.core.react.call(null,fullscreen);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.utils.app_css_class_layout.call(null,app_state,new cljs.core.Keyword(null,"#redditv-player-container","#redditv-player-container",-146250158)),React.createElement("div",({"id": "redditv-player"}))], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,redditv.components.player.mixin_player_handler], null),"c-player");
