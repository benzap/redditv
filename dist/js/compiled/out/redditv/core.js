// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('redditv.youtube');
goog.require('redditv.player');
goog.require('om.dom');
goog.require('redditv.reddit');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('redditv.icons');
goog.require('om.core');
goog.require('redditv.utils');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof redditv.core.app_state !== 'undefined'){
} else {
redditv.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos",new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-playlist","toggle-playlist",1644818800),true], null)], null));
}
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
/**
 * Set the location hash of a js/window object.
 */
redditv.core.set_hash_BANG_ = (function redditv$core$set_hash_BANG_(var_args){
var args28726 = [];
var len__22734__auto___28729 = arguments.length;
var i__22735__auto___28730 = (0);
while(true){
if((i__22735__auto___28730 < len__22734__auto___28729)){
args28726.push((arguments[i__22735__auto___28730]));

var G__28731 = (i__22735__auto___28730 + (1));
i__22735__auto___28730 = G__28731;
continue;
} else {
}
break;
}

var G__28728 = args28726.length;
switch (G__28728) {
case 1:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28726.length)].join('')));

}
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return redditv.core.set_hash_BANG_.call(null,window.location);
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (loc,v){
return (loc["hash"] = v);
});

redditv.core.set_hash_BANG_.cljs$lang$maxFixedArity = 2;
var action__28564__auto___28737 = (function (params__28565__auto__){
if(cljs.core.map_QMARK_.call(null,params__28565__auto__)){
var map__28733 = params__28565__auto__;
var map__28733__$1 = ((((!((map__28733 == null)))?((((map__28733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28733):map__28733);
var subreddit = cljs.core.get.call(null,map__28733__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
if(cljs.core.vector_QMARK_.call(null,params__28565__auto__)){
var vec__28735 = params__28565__auto__;
var subreddit = cljs.core.nth.call(null,vec__28735,(0),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__28564__auto___28737);

redditv.core.subreddit_path = ((function (action__28564__auto___28737){
return (function redditv$core$subreddit_path(var_args){
var args__22741__auto__ = [];
var len__22734__auto___28738 = arguments.length;
var i__22735__auto___28739 = (0);
while(true){
if((i__22735__auto___28739 < len__22734__auto___28738)){
args__22741__auto__.push((arguments[i__22735__auto___28739]));

var G__28740 = (i__22735__auto___28739 + (1));
i__22735__auto___28739 = G__28740;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((0) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((0)),(0))):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22742__auto__);
});})(action__28564__auto___28737))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__28564__auto___28737){
return (function (args__28563__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__28563__auto__);
});})(action__28564__auto___28737))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__28564__auto___28737){
return (function (seq28736){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28736));
});})(action__28564__auto___28737))
;
var h_28743 = (new goog.History());
goog.events.listen(h_28743,goog.history.EventType.NAVIGATE,((function (h_28743){
return (function (p1__28741_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__28741_SHARP_.token);
});})(h_28743))
);

var G__28742_28744 = h_28743;
G__28742_28744.setEnabled(true);

redditv.core.player_component = (function redditv$core$player_component(entry,owner){
if(typeof redditv.core.t_redditv$core28830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28830 = (function (player_component,entry,owner,meta28831){
this.player_component = player_component;
this.entry = entry;
this.owner = owner;
this.meta28831 = meta28831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28832,meta28831__$1){
var self__ = this;
var _28832__$1 = this;
return (new redditv.core.t_redditv$core28830(self__.player_component,self__.entry,self__.owner,meta28831__$1));
});

redditv.core.t_redditv$core28830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28832){
var self__ = this;
var _28832__$1 = this;
return self__.meta28831;
});

redditv.core.t_redditv$core28830.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28830.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toggle-leftpane","toggle-leftpane",-1058266704),false,new cljs.core.Keyword(null,"toggle-rightpane","toggle-rightpane",-1778219183),false], null)], null);
});

redditv.core.t_redditv$core28830.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core28830.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__25920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto__,event_channel,player_channel,this$__$1){
return (function (state_28875){
var state_val_28876 = (state_28875[(1)]);
if((state_val_28876 === (7))){
var inst_28851 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28851)){
var statearr_28877_28915 = state_28875__$1;
(statearr_28877_28915[(1)] = (11));

} else {
var statearr_28878_28916 = state_28875__$1;
(statearr_28878_28916[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (1))){
var state_28875__$1 = state_28875;
var statearr_28879_28917 = state_28875__$1;
(statearr_28879_28917[(2)] = null);

(statearr_28879_28917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (4))){
var inst_28836 = (state_28875[(7)]);
var inst_28836__$1 = (state_28875[(2)]);
var inst_28838 = (inst_28836__$1 == null);
var inst_28839 = cljs.core.not.call(null,inst_28838);
var state_28875__$1 = (function (){var statearr_28880 = state_28875;
(statearr_28880[(7)] = inst_28836__$1);

return statearr_28880;
})();
if(inst_28839){
var statearr_28881_28918 = state_28875__$1;
(statearr_28881_28918[(1)] = (5));

} else {
var statearr_28882_28919 = state_28875__$1;
(statearr_28882_28919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (15))){
var inst_28858 = cljs.core.println.call(null,"Video Playing");
var state_28875__$1 = state_28875;
var statearr_28883_28920 = state_28875__$1;
(statearr_28883_28920[(2)] = inst_28858);

(statearr_28883_28920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (13))){
var inst_28856 = (state_28875[(8)]);
var inst_28856__$1 = (state_28875[(2)]);
var inst_28857 = cljs.core.get.call(null,inst_28856__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_28875__$1 = (function (){var statearr_28884 = state_28875;
(statearr_28884[(8)] = inst_28856__$1);

return statearr_28884;
})();
var G__28885_28921 = (((inst_28857 instanceof cljs.core.Keyword))?inst_28857.fqn:null);
switch (G__28885_28921) {
case "video-playing":
var statearr_28886_28923 = state_28875__$1;
(statearr_28886_28923[(1)] = (15));


break;
case "video-paused":
var statearr_28887_28924 = state_28875__$1;
(statearr_28887_28924[(1)] = (16));


break;
case "video-buffering":
var statearr_28888_28925 = state_28875__$1;
(statearr_28888_28925[(1)] = (17));


break;
case "video-ended":
var statearr_28889_28926 = state_28875__$1;
(statearr_28889_28926[(1)] = (18));


break;
case "video-not-started":
var statearr_28890_28927 = state_28875__$1;
(statearr_28890_28927[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_28857)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (6))){
var state_28875__$1 = state_28875;
var statearr_28891_28928 = state_28875__$1;
(statearr_28891_28928[(2)] = false);

(statearr_28891_28928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (17))){
var inst_28862 = cljs.core.println.call(null,"Video Buffering");
var state_28875__$1 = state_28875;
var statearr_28892_28929 = state_28875__$1;
(statearr_28892_28929[(2)] = inst_28862);

(statearr_28892_28929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (3))){
var inst_28873 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28875__$1,inst_28873);
} else {
if((state_val_28876 === (12))){
var inst_28836 = (state_28875[(7)]);
var state_28875__$1 = state_28875;
var statearr_28893_28930 = state_28875__$1;
(statearr_28893_28930[(2)] = inst_28836);

(statearr_28893_28930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (2))){
var state_28875__$1 = state_28875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28875__$1,(4),event_channel);
} else {
if((state_val_28876 === (19))){
var inst_28866 = cljs.core.println.call(null,"Video Not Started");
var state_28875__$1 = state_28875;
var statearr_28894_28931 = state_28875__$1;
(statearr_28894_28931[(2)] = inst_28866);

(statearr_28894_28931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (11))){
var inst_28836 = (state_28875[(7)]);
var inst_28853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28836);
var state_28875__$1 = state_28875;
var statearr_28895_28932 = state_28875__$1;
(statearr_28895_28932[(2)] = inst_28853);

(statearr_28895_28932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (9))){
var state_28875__$1 = state_28875;
var statearr_28896_28933 = state_28875__$1;
(statearr_28896_28933[(2)] = false);

(statearr_28896_28933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (5))){
var inst_28836 = (state_28875[(7)]);
var inst_28841 = inst_28836.cljs$lang$protocol_mask$partition0$;
var inst_28842 = (inst_28841 & (64));
var inst_28843 = inst_28836.cljs$core$ISeq$;
var inst_28844 = (inst_28842) || (inst_28843);
var state_28875__$1 = state_28875;
if(cljs.core.truth_(inst_28844)){
var statearr_28897_28934 = state_28875__$1;
(statearr_28897_28934[(1)] = (8));

} else {
var statearr_28898_28935 = state_28875__$1;
(statearr_28898_28935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (14))){
var inst_28856 = (state_28875[(8)]);
var inst_28869 = (state_28875[(2)]);
var inst_28870 = cljs.core.async.put_BANG_.call(null,player_channel,inst_28856);
var state_28875__$1 = (function (){var statearr_28899 = state_28875;
(statearr_28899[(9)] = inst_28869);

(statearr_28899[(10)] = inst_28870);

return statearr_28899;
})();
var statearr_28900_28936 = state_28875__$1;
(statearr_28900_28936[(2)] = null);

(statearr_28900_28936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (16))){
var inst_28860 = cljs.core.println.call(null,"Video Paused");
var state_28875__$1 = state_28875;
var statearr_28901_28937 = state_28875__$1;
(statearr_28901_28937[(2)] = inst_28860);

(statearr_28901_28937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (10))){
var inst_28848 = (state_28875[(2)]);
var state_28875__$1 = state_28875;
var statearr_28902_28938 = state_28875__$1;
(statearr_28902_28938[(2)] = inst_28848);

(statearr_28902_28938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (18))){
var inst_28864 = cljs.core.println.call(null,"Video Ended");
var state_28875__$1 = state_28875;
var statearr_28903_28939 = state_28875__$1;
(statearr_28903_28939[(2)] = inst_28864);

(statearr_28903_28939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28876 === (8))){
var state_28875__$1 = state_28875;
var statearr_28904_28940 = state_28875__$1;
(statearr_28904_28940[(2)] = true);

(statearr_28904_28940[(1)] = (10));


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
});})(c__25920__auto__,event_channel,player_channel,this$__$1))
;
return ((function (switch__25855__auto__,c__25920__auto__,event_channel,player_channel,this$__$1){
return (function() {
var redditv$core$player_component_$_state_machine__25856__auto__ = null;
var redditv$core$player_component_$_state_machine__25856__auto____0 = (function (){
var statearr_28908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28908[(0)] = redditv$core$player_component_$_state_machine__25856__auto__);

(statearr_28908[(1)] = (1));

return statearr_28908;
});
var redditv$core$player_component_$_state_machine__25856__auto____1 = (function (state_28875){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_28875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e28909){if((e28909 instanceof Object)){
var ex__25859__auto__ = e28909;
var statearr_28910_28941 = state_28875;
(statearr_28910_28941[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28942 = state_28875;
state_28875 = G__28942;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__25856__auto__ = function(state_28875){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__25856__auto____1.call(this,state_28875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__25856__auto____0;
redditv$core$player_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__25856__auto____1;
return redditv$core$player_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto__,event_channel,player_channel,this$__$1))
})();
var state__25922__auto__ = (function (){var statearr_28911 = f__25921__auto__.call(null);
(statearr_28911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto__);

return statearr_28911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto__,event_channel,player_channel,this$__$1))
);

return c__25920__auto__;
});

redditv.core.t_redditv$core28830.prototype.om$core$IWillReceiveProps$ = true;

redditv.core.t_redditv$core28830.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
var self__ = this;
var this$__$1 = this;
redditv.player.dispose.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400)));

if(!((entry__$1 == null))){
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var new_player = redditv.youtube.create_youtubeplayer.call(null,"redditv-player",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(entry__$1),event_channel);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400),new_player);
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null));
}
});

redditv.core.t_redditv$core28830.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28830.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28912){
var self__ = this;
var map__28913 = p__28912;
var map__28913__$1 = ((((!((map__28913 == null)))?((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var layout = cljs.core.get.call(null,map__28913__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var ___$1 = this;
return React.DOM.div({"id": "redditv-player-container"},om.util.force_children.call(null,React.DOM.div({"id": "redditv-player"})));
});

redditv.core.t_redditv$core28830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"player-component","player-component",62883179,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28831","meta28831",33988361,null)], null);
});

redditv.core.t_redditv$core28830.cljs$lang$type = true;

redditv.core.t_redditv$core28830.cljs$lang$ctorStr = "redditv.core/t_redditv$core28830";

redditv.core.t_redditv$core28830.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28830");
});

redditv.core.__GT_t_redditv$core28830 = (function redditv$core$player_component_$___GT_t_redditv$core28830(player_component__$1,entry__$1,owner__$1,meta28831){
return (new redditv.core.t_redditv$core28830(player_component__$1,entry__$1,owner__$1,meta28831));
});

}

return (new redditv.core.t_redditv$core28830(redditv$core$player_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core28949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28949 = (function (playlist_entry_component,entry,owner,meta28950){
this.playlist_entry_component = playlist_entry_component;
this.entry = entry;
this.owner = owner;
this.meta28950 = meta28950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28951,meta28950__$1){
var self__ = this;
var _28951__$1 = this;
return (new redditv.core.t_redditv$core28949(self__.playlist_entry_component,self__.entry,self__.owner,meta28950__$1));
});

redditv.core.t_redditv$core28949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28951){
var self__ = this;
var _28951__$1 = this;
return self__.meta28950;
});

redditv.core.t_redditv$core28949.prototype.om$core$IDidUpdate$ = true;

redditv.core.t_redditv$core28949.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
var selected_entry = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var is_selected_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected_entry),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})()));
if(is_selected_QMARK_){
var dom_child = om.core.get_node.call(null,self__.owner);
var dom_root = document.getElementById("redditv-playlist-container");
return redditv.utils.align_to_root_left.call(null,dom_root,dom_child);
} else {
return null;
}
});

redditv.core.t_redditv$core28949.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28949.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28952){
var self__ = this;
var map__28953 = p__28952;
var map__28953__$1 = ((((!((map__28953 == null)))?((((map__28953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953):map__28953);
var selected = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return React.DOM.div({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__28953,map__28953__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-select","video-select",775569479),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.deref.call(null,self__.entry)], null));
});})(classes,___$1,map__28953,map__28953__$1,selected,selection_channel))
},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "entry-title noselect"},om.util.force_children.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry))),React.DOM.img({"className": "entry-thumbnail", "src": (function (){var thumbnail = new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(self__.entry);
if(cljs.core._EQ_.call(null,thumbnail,"nsfw")){
return "http://i.imgur.com/KZOsckv.jpg";
} else {
if(cljs.core._EQ_.call(null,thumbnail,"default")){
return "http://i.imgur.com/9wEJlnk.gif";
} else {
return thumbnail;

}
}
})()})], null)));
});

redditv.core.t_redditv$core28949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-entry-component","playlist-entry-component",-254938373,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28950","meta28950",1844040286,null)], null);
});

redditv.core.t_redditv$core28949.cljs$lang$type = true;

redditv.core.t_redditv$core28949.cljs$lang$ctorStr = "redditv.core/t_redditv$core28949";

redditv.core.t_redditv$core28949.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28949");
});

redditv.core.__GT_t_redditv$core28949 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core28949(playlist_entry_component__$1,entry__$1,owner__$1,meta28950){
return (new redditv.core.t_redditv$core28949(playlist_entry_component__$1,entry__$1,owner__$1,meta28950));
});

}

return (new redditv.core.t_redditv$core28949(redditv$core$playlist_entry_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core28961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28961 = (function (playlist_component,app,owner,meta28962){
this.playlist_component = playlist_component;
this.app = app;
this.owner = owner;
this.meta28962 = meta28962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28963,meta28962__$1){
var self__ = this;
var _28963__$1 = this;
return (new redditv.core.t_redditv$core28961(self__.playlist_component,self__.app,self__.owner,meta28962__$1));
});

redditv.core.t_redditv$core28961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28963){
var self__ = this;
var _28963__$1 = this;
return self__.meta28962;
});

redditv.core.t_redditv$core28961.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28961.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__28964){
var self__ = this;
var map__28965 = p__28964;
var map__28965__$1 = ((((!((map__28965 == null)))?((((map__28965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28965):map__28965);
var selection_channel = cljs.core.get.call(null,map__28965__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return React.DOM.div({"id": "redditv-playlist-root"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"id": "redditv-playlist-leftpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Panes (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"zoom_out_map"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Previous Video", "onClick": ((function (this$__$1,map__28965,map__28965__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null));
});})(this$__$1,map__28965,map__28965__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_back")))], null))),React.DOM.div({"id": "redditv-playlist-container", "ref": "playlist-scroll-container"},om.util.force_children.call(null,om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.div({"id": "redditv-playlist-rightpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Playlist (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"expand_more"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Next Video", "onClick": ((function (this$__$1,map__28965,map__28965__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null));
});})(this$__$1,map__28965,map__28965__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_forward")))], null)))], null)));
});

redditv.core.t_redditv$core28961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-component","playlist-component",362561540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28962","meta28962",-832489085,null)], null);
});

redditv.core.t_redditv$core28961.cljs$lang$type = true;

redditv.core.t_redditv$core28961.cljs$lang$ctorStr = "redditv.core/t_redditv$core28961";

redditv.core.t_redditv$core28961.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28961");
});

redditv.core.__GT_t_redditv$core28961 = (function redditv$core$playlist_component_$___GT_t_redditv$core28961(playlist_component__$1,app__$1,owner__$1,meta28962){
return (new redditv.core.t_redditv$core28961(playlist_component__$1,app__$1,owner__$1,meta28962));
});

}

return (new redditv.core.t_redditv$core28961(redditv$core$playlist_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.leftpane_component = (function redditv$core$leftpane_component(app,owner){
if(typeof redditv.core.t_redditv$core28975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28975 = (function (leftpane_component,app,owner,meta28976){
this.leftpane_component = leftpane_component;
this.app = app;
this.owner = owner;
this.meta28976 = meta28976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28977,meta28976__$1){
var self__ = this;
var _28977__$1 = this;
return (new redditv.core.t_redditv$core28975(self__.leftpane_component,self__.app,self__.owner,meta28976__$1));
});

redditv.core.t_redditv$core28975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28977){
var self__ = this;
var _28977__$1 = this;
return self__.meta28976;
});

redditv.core.t_redditv$core28975.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28975.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__28978){
var self__ = this;
var map__28979 = p__28978;
var map__28979__$1 = ((((!((map__28979 == null)))?((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var layout_channel = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "View Reddit Comments", "onClick": ((function (this$__$1,map__28979,map__28979__$1,layout_channel){
return (function (e){
var map__28981 = om.core.get_props.call(null,self__.owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var map__28981__$1 = ((((!((map__28981 == null)))?((((map__28981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var entry = map__28981__$1;
var permalink = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return window.open([cljs.core.str("http://www.reddit.com"),cljs.core.str(permalink)].join(''),"_blank");
});})(this$__$1,map__28979,map__28979__$1,layout_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"comment")))));
});

redditv.core.t_redditv$core28975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"leftpane-component","leftpane-component",1663892517,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28976","meta28976",1034629782,null)], null);
});

redditv.core.t_redditv$core28975.cljs$lang$type = true;

redditv.core.t_redditv$core28975.cljs$lang$ctorStr = "redditv.core/t_redditv$core28975";

redditv.core.t_redditv$core28975.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28975");
});

redditv.core.__GT_t_redditv$core28975 = (function redditv$core$leftpane_component_$___GT_t_redditv$core28975(leftpane_component__$1,app__$1,owner__$1,meta28976){
return (new redditv.core.t_redditv$core28975(leftpane_component__$1,app__$1,owner__$1,meta28976));
});

}

return (new redditv.core.t_redditv$core28975(redditv$core$leftpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.rightpane_component = (function redditv$core$rightpane_component(app,owner){
if(typeof redditv.core.t_redditv$core28989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28989 = (function (rightpane_component,app,owner,meta28990){
this.rightpane_component = rightpane_component;
this.app = app;
this.owner = owner;
this.meta28990 = meta28990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28991,meta28990__$1){
var self__ = this;
var _28991__$1 = this;
return (new redditv.core.t_redditv$core28989(self__.rightpane_component,self__.app,self__.owner,meta28990__$1));
});

redditv.core.t_redditv$core28989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28991){
var self__ = this;
var _28991__$1 = this;
return self__.meta28990;
});

redditv.core.t_redditv$core28989.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28989.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core28989.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28989.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__28992){
var self__ = this;
var map__28993 = p__28992;
var map__28993__$1 = ((((!((map__28993 == null)))?((((map__28993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28993):map__28993);
var layout_channel = cljs.core.get.call(null,map__28993__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane redditv-rightpane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "About Redditv", "onClick": ((function (this$__$1,map__28993,map__28993__$1,layout_channel){
return (function (e){
return window.open([cljs.core.str("http://github.com/benzap/redditv")].join(''));
});})(this$__$1,map__28993,map__28993__$1,layout_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"help")))));
});

redditv.core.t_redditv$core28989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"rightpane-component","rightpane-component",198155804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28990","meta28990",241684860,null)], null);
});

redditv.core.t_redditv$core28989.cljs$lang$type = true;

redditv.core.t_redditv$core28989.cljs$lang$ctorStr = "redditv.core/t_redditv$core28989";

redditv.core.t_redditv$core28989.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28989");
});

redditv.core.__GT_t_redditv$core28989 = (function redditv$core$rightpane_component_$___GT_t_redditv$core28989(rightpane_component__$1,app__$1,owner__$1,meta28990){
return (new redditv.core.t_redditv$core28989(rightpane_component__$1,app__$1,owner__$1,meta28990));
});

}

return (new redditv.core.t_redditv$core28989(redditv$core$rightpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.handle_search_change = (function redditv$core$handle_search_change(e,owner,p__28995){
var map__28998 = p__28995;
var map__28998__$1 = ((((!((map__28998 == null)))?((((map__28998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28998):map__28998);
var subreddit = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),e.target.value);
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(var_args){
var args__22741__auto__ = [];
var len__22734__auto___29023 = arguments.length;
var i__22735__auto___29024 = (0);
while(true){
if((i__22735__auto___29024 < len__22734__auto___29023)){
args__22741__auto__.push((arguments[i__22735__auto___29024]));

var G__29025 = (i__22735__auto___29024 + (1));
i__22735__auto___29024 = G__29025;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((2) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((2)),(0))):null);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22742__auto__);
});

redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,owner,p__29005){
var map__29006 = p__29005;
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var subreddit = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(app));
var vec__29008 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__29008,(0),null);
var error_channel = cljs.core.nth.call(null,vec__29008,(1),null);
cljs.core.println.call(null,"Searching on subreddit: ",subreddit);

om.core.transact_BANG_.call(null,app,((function (vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit){
return (function (p1__29000_SHARP_){
return cljs.core.merge.call(null,p1__29000_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null], null));
});})(vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit))
);

var c__25920__auto___29026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit){
return (function (state_29014){
var state_val_29015 = (state_29014[(1)]);
if((state_val_29015 === (1))){
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29014__$1,(2),success_channel);
} else {
if((state_val_29015 === (2))){
var inst_29010 = (state_29014[(2)]);
var inst_29011 = (function (){var new_playlist = inst_29010;
return ((function (new_playlist,inst_29010,state_val_29015,c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit){
return (function (p1__29001_SHARP_){
return cljs.core.merge.call(null,p1__29001_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new_playlist,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),cljs.core.first.call(null,new_playlist)], null));
});
;})(new_playlist,inst_29010,state_val_29015,c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit))
})();
var inst_29012 = om.core.transact_BANG_.call(null,app,inst_29011);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29014__$1,inst_29012);
} else {
return null;
}
}
});})(c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit))
;
return ((function (switch__25855__auto__,c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit){
return (function() {
var redditv$core$state_machine__25856__auto__ = null;
var redditv$core$state_machine__25856__auto____0 = (function (){
var statearr_29019 = [null,null,null,null,null,null,null];
(statearr_29019[(0)] = redditv$core$state_machine__25856__auto__);

(statearr_29019[(1)] = (1));

return statearr_29019;
});
var redditv$core$state_machine__25856__auto____1 = (function (state_29014){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_29014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e29020){if((e29020 instanceof Object)){
var ex__25859__auto__ = e29020;
var statearr_29021_29027 = state_29014;
(statearr_29021_29027[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29028 = state_29014;
state_29014 = G__29028;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$state_machine__25856__auto__ = function(state_29014){
switch(arguments.length){
case 0:
return redditv$core$state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$state_machine__25856__auto____1.call(this,state_29014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$state_machine__25856__auto____0;
redditv$core$state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$state_machine__25856__auto____1;
return redditv$core$state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit))
})();
var state__25922__auto__ = (function (){var statearr_29022 = f__25921__auto__.call(null);
(statearr_29022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto___29026);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto___29026,vec__29008,success_channel,error_channel,map__29006,map__29006__$1,subreddit))
);


return error_channel;
});

redditv.core.update_playlist_BANG_.cljs$lang$maxFixedArity = (2);

redditv.core.update_playlist_BANG_.cljs$lang$applyTo = (function (seq29002){
var G__29003 = cljs.core.first.call(null,seq29002);
var seq29002__$1 = cljs.core.next.call(null,seq29002);
var G__29004 = cljs.core.first.call(null,seq29002__$1);
var seq29002__$2 = cljs.core.next.call(null,seq29002__$1);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29003,G__29004,seq29002__$2);
});
redditv.core.header_component = (function redditv$core$header_component(app,owner){
if(typeof redditv.core.t_redditv$core29037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29037 = (function (header_component,app,owner,meta29038){
this.header_component = header_component;
this.app = app;
this.owner = owner;
this.meta29038 = meta29038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29039,meta29038__$1){
var self__ = this;
var _29039__$1 = this;
return (new redditv.core.t_redditv$core29037(self__.header_component,self__.app,self__.owner,meta29038__$1));
});

redditv.core.t_redditv$core29037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29039){
var self__ = this;
var _29039__$1 = this;
return self__.meta29038;
});

redditv.core.t_redditv$core29037.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29037.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos"], null);
});

redditv.core.t_redditv$core29037.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29037.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__29040){
var self__ = this;
var map__29041 = p__29040;
var map__29041__$1 = ((((!((map__29041 == null)))?((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29041):map__29041);
var state = map__29041__$1;
var subreddit = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-header"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Search Subreddit", "style": {"display": "inline-block"}, "onClick": ((function (this$__$1,map__29041,map__29041__$1,state,subreddit){
return (function (e){
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
});})(this$__$1,map__29041,map__29041__$1,state,subreddit))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"search"))),React.DOM.span(null,om.util.force_children.call(null,"/r/")),om.dom.input.call(null,{"type": "text", "value": subreddit, "onChange": ((function (this$__$1,map__29041,map__29041__$1,state,subreddit){
return (function (p1__29029_SHARP_){
return redditv.core.handle_search_change.call(null,p1__29029_SHARP_,self__.owner,state);
});})(this$__$1,map__29041,map__29041__$1,state,subreddit))
, "onKeyDown": ((function (this$__$1,map__29041,map__29041__$1,state,subreddit){
return (function (e){
var key = e.key;
var G__29043 = key;
switch (G__29043) {
case "Enter":
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

break;
default:
return null;

}
});})(this$__$1,map__29041,map__29041__$1,state,subreddit))
})], null)));
});

redditv.core.t_redditv$core29037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"header-component","header-component",1488776773,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29038","meta29038",1756750456,null)], null);
});

redditv.core.t_redditv$core29037.cljs$lang$type = true;

redditv.core.t_redditv$core29037.cljs$lang$ctorStr = "redditv.core/t_redditv$core29037";

redditv.core.t_redditv$core29037.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29037");
});

redditv.core.__GT_t_redditv$core29037 = (function redditv$core$header_component_$___GT_t_redditv$core29037(header_component__$1,app__$1,owner__$1,meta29038){
return (new redditv.core.t_redditv$core29037(header_component__$1,app__$1,owner__$1,meta29038));
});

}

return (new redditv.core.t_redditv$core29037(redditv$core$header_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.next_video_BANG_ = (function redditv$core$next_video_BANG_(app,owner){
var playlist = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var current_selection = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var next_selection = redditv.utils.next_element.call(null,playlist,current_selection);
return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),next_selection);
});
redditv.core.previous_video_BANG_ = (function redditv$core$previous_video_BANG_(app,owner){
var playlist = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var current_selection = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var prev_selection = redditv.utils.prev_element.call(null,playlist,current_selection);
return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),prev_selection);
});
redditv.core.root_component = (function redditv$core$root_component(app,owner){
if(typeof redditv.core.t_redditv$core29227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29227 = (function (root_component,app,owner,meta29228){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta29228 = meta29228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29229,meta29228__$1){
var self__ = this;
var _29229__$1 = this;
return (new redditv.core.t_redditv$core29227(self__.root_component,self__.app,self__.owner,meta29228__$1));
});

redditv.core.t_redditv$core29227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29229){
var self__ = this;
var _29229__$1 = this;
return self__.meta29228;
});

redditv.core.t_redditv$core29227.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29227.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core29227.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core29227.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var c__25920__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1){
return (function (state_29290){
var state_val_29291 = (state_29290[(1)]);
if((state_val_29291 === (7))){
var inst_29248 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29248)){
var statearr_29292_29410 = state_29290__$1;
(statearr_29292_29410[(1)] = (11));

} else {
var statearr_29293_29411 = state_29290__$1;
(statearr_29293_29411[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (20))){
var state_29290__$1 = state_29290;
var statearr_29294_29412 = state_29290__$1;
(statearr_29294_29412[(2)] = false);

(statearr_29294_29412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (27))){
var state_29290__$1 = state_29290;
var statearr_29295_29413 = state_29290__$1;
(statearr_29295_29413[(2)] = null);

(statearr_29295_29413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (1))){
var state_29290__$1 = state_29290;
var statearr_29296_29414 = state_29290__$1;
(statearr_29296_29414[(2)] = null);

(statearr_29296_29414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (24))){
var inst_29275 = (state_29290[(2)]);
var inst_29276 = cljs.core.get.call(null,inst_29275,new cljs.core.Keyword(null,"entry","entry",505168823));
var inst_29277 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_29276);
var state_29290__$1 = state_29290;
var statearr_29297_29415 = state_29290__$1;
(statearr_29297_29415[(2)] = inst_29277);

(statearr_29297_29415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (4))){
var inst_29233 = (state_29290[(7)]);
var inst_29233__$1 = (state_29290[(2)]);
var inst_29235 = (inst_29233__$1 == null);
var inst_29236 = cljs.core.not.call(null,inst_29235);
var state_29290__$1 = (function (){var statearr_29298 = state_29290;
(statearr_29298[(7)] = inst_29233__$1);

return statearr_29298;
})();
if(inst_29236){
var statearr_29299_29416 = state_29290__$1;
(statearr_29299_29416[(1)] = (5));

} else {
var statearr_29300_29417 = state_29290__$1;
(statearr_29300_29417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (15))){
var inst_29253 = (state_29290[(8)]);
var inst_29257 = (inst_29253 == null);
var inst_29258 = cljs.core.not.call(null,inst_29257);
var state_29290__$1 = state_29290;
if(inst_29258){
var statearr_29301_29418 = state_29290__$1;
(statearr_29301_29418[(1)] = (16));

} else {
var statearr_29302_29419 = state_29290__$1;
(statearr_29302_29419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (21))){
var inst_29267 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
var statearr_29303_29420 = state_29290__$1;
(statearr_29303_29420[(2)] = inst_29267);

(statearr_29303_29420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (13))){
var inst_29253 = (state_29290[(8)]);
var inst_29253__$1 = (state_29290[(2)]);
var inst_29254 = cljs.core.get.call(null,inst_29253__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29290__$1 = (function (){var statearr_29304 = state_29290;
(statearr_29304[(8)] = inst_29253__$1);

return statearr_29304;
})();
var G__29305_29421 = (((inst_29254 instanceof cljs.core.Keyword))?inst_29254.fqn:null);
switch (G__29305_29421) {
case "video-select":
var statearr_29306_29423 = state_29290__$1;
(statearr_29306_29423[(1)] = (15));


break;
case "video-next":
var statearr_29307_29424 = state_29290__$1;
(statearr_29307_29424[(1)] = (25));


break;
case "video-previous":
var statearr_29308_29425 = state_29290__$1;
(statearr_29308_29425[(1)] = (26));


break;
default:
var statearr_29309_29426 = state_29290__$1;
(statearr_29309_29426[(1)] = (27));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (22))){
var inst_29253 = (state_29290[(8)]);
var inst_29272 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29253);
var state_29290__$1 = state_29290;
var statearr_29310_29427 = state_29290__$1;
(statearr_29310_29427[(2)] = inst_29272);

(statearr_29310_29427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (6))){
var state_29290__$1 = state_29290;
var statearr_29311_29428 = state_29290__$1;
(statearr_29311_29428[(2)] = false);

(statearr_29311_29428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (25))){
var inst_29279 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29290__$1 = state_29290;
var statearr_29312_29429 = state_29290__$1;
(statearr_29312_29429[(2)] = inst_29279);

(statearr_29312_29429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (17))){
var state_29290__$1 = state_29290;
var statearr_29313_29430 = state_29290__$1;
(statearr_29313_29430[(2)] = false);

(statearr_29313_29430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (3))){
var inst_29288 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29290__$1,inst_29288);
} else {
if((state_val_29291 === (12))){
var inst_29233 = (state_29290[(7)]);
var state_29290__$1 = state_29290;
var statearr_29314_29431 = state_29290__$1;
(statearr_29314_29431[(2)] = inst_29233);

(statearr_29314_29431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (2))){
var state_29290__$1 = state_29290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29290__$1,(4),selection_channel);
} else {
if((state_val_29291 === (23))){
var inst_29253 = (state_29290[(8)]);
var state_29290__$1 = state_29290;
var statearr_29315_29432 = state_29290__$1;
(statearr_29315_29432[(2)] = inst_29253);

(statearr_29315_29432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (19))){
var state_29290__$1 = state_29290;
var statearr_29316_29433 = state_29290__$1;
(statearr_29316_29433[(2)] = true);

(statearr_29316_29433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (11))){
var inst_29233 = (state_29290[(7)]);
var inst_29250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29233);
var state_29290__$1 = state_29290;
var statearr_29317_29434 = state_29290__$1;
(statearr_29317_29434[(2)] = inst_29250);

(statearr_29317_29434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (9))){
var state_29290__$1 = state_29290;
var statearr_29318_29435 = state_29290__$1;
(statearr_29318_29435[(2)] = false);

(statearr_29318_29435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (5))){
var inst_29233 = (state_29290[(7)]);
var inst_29238 = inst_29233.cljs$lang$protocol_mask$partition0$;
var inst_29239 = (inst_29238 & (64));
var inst_29240 = inst_29233.cljs$core$ISeq$;
var inst_29241 = (inst_29239) || (inst_29240);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29241)){
var statearr_29319_29436 = state_29290__$1;
(statearr_29319_29436[(1)] = (8));

} else {
var statearr_29320_29437 = state_29290__$1;
(statearr_29320_29437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (14))){
var inst_29285 = (state_29290[(2)]);
var state_29290__$1 = (function (){var statearr_29321 = state_29290;
(statearr_29321[(9)] = inst_29285);

return statearr_29321;
})();
var statearr_29322_29438 = state_29290__$1;
(statearr_29322_29438[(2)] = null);

(statearr_29322_29438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (26))){
var inst_29281 = redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);
var state_29290__$1 = state_29290;
var statearr_29323_29439 = state_29290__$1;
(statearr_29323_29439[(2)] = inst_29281);

(statearr_29323_29439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (16))){
var inst_29253 = (state_29290[(8)]);
var inst_29260 = inst_29253.cljs$lang$protocol_mask$partition0$;
var inst_29261 = (inst_29260 & (64));
var inst_29262 = inst_29253.cljs$core$ISeq$;
var inst_29263 = (inst_29261) || (inst_29262);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29263)){
var statearr_29324_29440 = state_29290__$1;
(statearr_29324_29440[(1)] = (19));

} else {
var statearr_29325_29441 = state_29290__$1;
(statearr_29325_29441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (10))){
var inst_29245 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
var statearr_29326_29442 = state_29290__$1;
(statearr_29326_29442[(2)] = inst_29245);

(statearr_29326_29442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (18))){
var inst_29270 = (state_29290[(2)]);
var state_29290__$1 = state_29290;
if(cljs.core.truth_(inst_29270)){
var statearr_29327_29443 = state_29290__$1;
(statearr_29327_29443[(1)] = (22));

} else {
var statearr_29328_29444 = state_29290__$1;
(statearr_29328_29444[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29291 === (8))){
var state_29290__$1 = state_29290;
var statearr_29329_29445 = state_29290__$1;
(statearr_29329_29445[(2)] = true);

(statearr_29329_29445[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__25855__auto__,c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__25856__auto__ = null;
var redditv$core$root_component_$_state_machine__25856__auto____0 = (function (){
var statearr_29333 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29333[(0)] = redditv$core$root_component_$_state_machine__25856__auto__);

(statearr_29333[(1)] = (1));

return statearr_29333;
});
var redditv$core$root_component_$_state_machine__25856__auto____1 = (function (state_29290){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_29290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e29334){if((e29334 instanceof Object)){
var ex__25859__auto__ = e29334;
var statearr_29335_29446 = state_29290;
(statearr_29335_29446[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_29290;
state_29290 = G__29447;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__25856__auto__ = function(state_29290){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__25856__auto____1.call(this,state_29290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__25856__auto____0;
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__25856__auto____1;
return redditv$core$root_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1))
})();
var state__25922__auto__ = (function (){var statearr_29336 = f__25921__auto__.call(null);
(statearr_29336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto___29409);

return statearr_29336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto___29409,selection_channel,player_channel,layout_channel,___$1))
);


var c__25920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (7))){
var inst_29355 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29355)){
var statearr_29375_29448 = state_29373__$1;
(statearr_29375_29448[(1)] = (11));

} else {
var statearr_29376_29449 = state_29373__$1;
(statearr_29376_29449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (1))){
var state_29373__$1 = state_29373;
var statearr_29377_29450 = state_29373__$1;
(statearr_29377_29450[(2)] = null);

(statearr_29377_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (4))){
var inst_29340 = (state_29373[(7)]);
var inst_29340__$1 = (state_29373[(2)]);
var inst_29342 = (inst_29340__$1 == null);
var inst_29343 = cljs.core.not.call(null,inst_29342);
var state_29373__$1 = (function (){var statearr_29378 = state_29373;
(statearr_29378[(7)] = inst_29340__$1);

return statearr_29378;
})();
if(inst_29343){
var statearr_29379_29451 = state_29373__$1;
(statearr_29379_29451[(1)] = (5));

} else {
var statearr_29380_29452 = state_29373__$1;
(statearr_29380_29452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (15))){
var inst_29362 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29373__$1 = state_29373;
var statearr_29381_29453 = state_29373__$1;
(statearr_29381_29453[(2)] = inst_29362);

(statearr_29381_29453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (13))){
var inst_29360 = (state_29373[(2)]);
var inst_29361 = cljs.core.get.call(null,inst_29360,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29373__$1 = state_29373;
var G__29382_29454 = (((inst_29361 instanceof cljs.core.Keyword))?inst_29361.fqn:null);
switch (G__29382_29454) {
case "video-ended":
var statearr_29383_29456 = state_29373__$1;
(statearr_29383_29456[(1)] = (15));


break;
case "video-not-started":
var statearr_29384_29457 = state_29373__$1;
(statearr_29384_29457[(1)] = (16));


break;
default:
var statearr_29385_29458 = state_29373__$1;
(statearr_29385_29458[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (6))){
var state_29373__$1 = state_29373;
var statearr_29386_29459 = state_29373__$1;
(statearr_29386_29459[(2)] = false);

(statearr_29386_29459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (17))){
var state_29373__$1 = state_29373;
var statearr_29387_29460 = state_29373__$1;
(statearr_29387_29460[(2)] = null);

(statearr_29387_29460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (12))){
var inst_29340 = (state_29373[(7)]);
var state_29373__$1 = state_29373;
var statearr_29388_29461 = state_29373__$1;
(statearr_29388_29461[(2)] = inst_29340);

(statearr_29388_29461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (2))){
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29373__$1,(4),player_channel);
} else {
if((state_val_29374 === (11))){
var inst_29340 = (state_29373[(7)]);
var inst_29357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29340);
var state_29373__$1 = state_29373;
var statearr_29389_29462 = state_29373__$1;
(statearr_29389_29462[(2)] = inst_29357);

(statearr_29389_29462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (9))){
var state_29373__$1 = state_29373;
var statearr_29390_29463 = state_29373__$1;
(statearr_29390_29463[(2)] = false);

(statearr_29390_29463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (5))){
var inst_29340 = (state_29373[(7)]);
var inst_29345 = inst_29340.cljs$lang$protocol_mask$partition0$;
var inst_29346 = (inst_29345 & (64));
var inst_29347 = inst_29340.cljs$core$ISeq$;
var inst_29348 = (inst_29346) || (inst_29347);
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29348)){
var statearr_29391_29464 = state_29373__$1;
(statearr_29391_29464[(1)] = (8));

} else {
var statearr_29392_29465 = state_29373__$1;
(statearr_29392_29465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (14))){
var inst_29368 = (state_29373[(2)]);
var state_29373__$1 = (function (){var statearr_29393 = state_29373;
(statearr_29393[(8)] = inst_29368);

return statearr_29393;
})();
var statearr_29394_29466 = state_29373__$1;
(statearr_29394_29466[(2)] = null);

(statearr_29394_29466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (16))){
var inst_29364 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29373__$1 = state_29373;
var statearr_29395_29467 = state_29373__$1;
(statearr_29395_29467[(2)] = inst_29364);

(statearr_29395_29467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (10))){
var inst_29352 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29396_29468 = state_29373__$1;
(statearr_29396_29468[(2)] = inst_29352);

(statearr_29396_29468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (8))){
var state_29373__$1 = state_29373;
var statearr_29397_29469 = state_29373__$1;
(statearr_29397_29469[(2)] = true);

(statearr_29397_29469[(1)] = (10));


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
});})(c__25920__auto__,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__25855__auto__,c__25920__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__25856__auto__ = null;
var redditv$core$root_component_$_state_machine__25856__auto____0 = (function (){
var statearr_29401 = [null,null,null,null,null,null,null,null,null];
(statearr_29401[(0)] = redditv$core$root_component_$_state_machine__25856__auto__);

(statearr_29401[(1)] = (1));

return statearr_29401;
});
var redditv$core$root_component_$_state_machine__25856__auto____1 = (function (state_29373){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_29373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e29402){if((e29402 instanceof Object)){
var ex__25859__auto__ = e29402;
var statearr_29403_29470 = state_29373;
(statearr_29403_29470[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29471 = state_29373;
state_29373 = G__29471;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__25856__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__25856__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__25856__auto____0;
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__25856__auto____1;
return redditv$core$root_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto__,selection_channel,player_channel,layout_channel,___$1))
})();
var state__25922__auto__ = (function (){var statearr_29404 = f__25921__auto__.call(null);
(statearr_29404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto__);

return statearr_29404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto__,selection_channel,player_channel,layout_channel,___$1))
);

return c__25920__auto__;
});

redditv.core.t_redditv$core29227.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29227.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__29405){
var self__ = this;
var map__29406 = p__29405;
var map__29406__$1 = ((((!((map__29406 == null)))?((((map__29406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29406):map__29406);
var selection_channel = cljs.core.get.call(null,map__29406__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__29406__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = cljs.core.get.call(null,map__29406__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var ___$1 = this;
return React.DOM.div({"className": ""},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.header_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.leftpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.rightpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null)], null))], null)));
});

redditv.core.t_redditv$core29227.prototype.om$core$IDidMount$ = true;

redditv.core.t_redditv$core29227.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return window.addEventListener("keydown",((function (___$1){
return (function (e){
var keycode = e.keyCode;
var G__29408 = keycode;
switch (G__29408) {
case (37):
return redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);

break;
case (39):
return redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);

break;
default:
return null;

}
});})(___$1))
);
});

redditv.core.t_redditv$core29227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29228","meta29228",2103174614,null)], null);
});

redditv.core.t_redditv$core29227.cljs$lang$type = true;

redditv.core.t_redditv$core29227.cljs$lang$ctorStr = "redditv.core/t_redditv$core29227";

redditv.core.t_redditv$core29227.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29227");
});

redditv.core.__GT_t_redditv$core29227 = (function redditv$core$root_component_$___GT_t_redditv$core29227(root_component__$1,app__$1,owner__$1,meta29228){
return (new redditv.core.t_redditv$core29227(root_component__$1,app__$1,owner__$1,meta29228));
});

}

return (new redditv.core.t_redditv$core29227(redditv$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
