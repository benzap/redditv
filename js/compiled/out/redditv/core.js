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
var args28776 = [];
var len__22734__auto___28779 = arguments.length;
var i__22735__auto___28780 = (0);
while(true){
if((i__22735__auto___28780 < len__22734__auto___28779)){
args28776.push((arguments[i__22735__auto___28780]));

var G__28781 = (i__22735__auto___28780 + (1));
i__22735__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var G__28778 = args28776.length;
switch (G__28778) {
case 1:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28776.length)].join('')));

}
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return redditv.core.set_hash_BANG_.call(null,window.location);
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (loc,v){
return (loc["hash"] = v);
});

redditv.core.set_hash_BANG_.cljs$lang$maxFixedArity = 2;
var action__23853__auto___28787 = (function (params__23854__auto__){
if(cljs.core.map_QMARK_.call(null,params__23854__auto__)){
var map__28783 = params__23854__auto__;
var map__28783__$1 = ((((!((map__28783 == null)))?((((map__28783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28783):map__28783);
var subreddit = cljs.core.get.call(null,map__28783__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
if(cljs.core.vector_QMARK_.call(null,params__23854__auto__)){
var vec__28785 = params__23854__auto__;
var subreddit = cljs.core.nth.call(null,vec__28785,(0),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__23853__auto___28787);

redditv.core.subreddit_path = ((function (action__23853__auto___28787){
return (function redditv$core$subreddit_path(var_args){
var args__22741__auto__ = [];
var len__22734__auto___28788 = arguments.length;
var i__22735__auto___28789 = (0);
while(true){
if((i__22735__auto___28789 < len__22734__auto___28788)){
args__22741__auto__.push((arguments[i__22735__auto___28789]));

var G__28790 = (i__22735__auto___28789 + (1));
i__22735__auto___28789 = G__28790;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((0) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((0)),(0))):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22742__auto__);
});})(action__23853__auto___28787))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__23853__auto___28787){
return (function (args__23852__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__23852__auto__);
});})(action__23853__auto___28787))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__23853__auto___28787){
return (function (seq28786){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28786));
});})(action__23853__auto___28787))
;
var h_28793 = (new goog.History());
goog.events.listen(h_28793,goog.history.EventType.NAVIGATE,((function (h_28793){
return (function (p1__28791_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__28791_SHARP_.token);
});})(h_28793))
);

var G__28792_28794 = h_28793;
G__28792_28794.setEnabled(true);

redditv.core.player_component = (function redditv$core$player_component(entry,owner){
if(typeof redditv.core.t_redditv$core28880 !== 'undefined'){
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
redditv.core.t_redditv$core28880 = (function (player_component,entry,owner,meta28881){
this.player_component = player_component;
this.entry = entry;
this.owner = owner;
this.meta28881 = meta28881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28882,meta28881__$1){
var self__ = this;
var _28882__$1 = this;
return (new redditv.core.t_redditv$core28880(self__.player_component,self__.entry,self__.owner,meta28881__$1));
});

redditv.core.t_redditv$core28880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28882){
var self__ = this;
var _28882__$1 = this;
return self__.meta28881;
});

redditv.core.t_redditv$core28880.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28880.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toggle-leftpane","toggle-leftpane",-1058266704),false,new cljs.core.Keyword(null,"toggle-rightpane","toggle-rightpane",-1778219183),false], null)], null);
});

redditv.core.t_redditv$core28880.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core28880.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__26094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26094__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__26095__auto__ = (function (){var switch__26029__auto__ = ((function (c__26094__auto__,event_channel,player_channel,this$__$1){
return (function (state_28925){
var state_val_28926 = (state_28925[(1)]);
if((state_val_28926 === (7))){
var inst_28901 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28901)){
var statearr_28927_28965 = state_28925__$1;
(statearr_28927_28965[(1)] = (11));

} else {
var statearr_28928_28966 = state_28925__$1;
(statearr_28928_28966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (1))){
var state_28925__$1 = state_28925;
var statearr_28929_28967 = state_28925__$1;
(statearr_28929_28967[(2)] = null);

(statearr_28929_28967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (4))){
var inst_28886 = (state_28925[(7)]);
var inst_28886__$1 = (state_28925[(2)]);
var inst_28888 = (inst_28886__$1 == null);
var inst_28889 = cljs.core.not.call(null,inst_28888);
var state_28925__$1 = (function (){var statearr_28930 = state_28925;
(statearr_28930[(7)] = inst_28886__$1);

return statearr_28930;
})();
if(inst_28889){
var statearr_28931_28968 = state_28925__$1;
(statearr_28931_28968[(1)] = (5));

} else {
var statearr_28932_28969 = state_28925__$1;
(statearr_28932_28969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (15))){
var inst_28908 = cljs.core.println.call(null,"Video Playing");
var state_28925__$1 = state_28925;
var statearr_28933_28970 = state_28925__$1;
(statearr_28933_28970[(2)] = inst_28908);

(statearr_28933_28970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (13))){
var inst_28906 = (state_28925[(8)]);
var inst_28906__$1 = (state_28925[(2)]);
var inst_28907 = cljs.core.get.call(null,inst_28906__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_28925__$1 = (function (){var statearr_28934 = state_28925;
(statearr_28934[(8)] = inst_28906__$1);

return statearr_28934;
})();
var G__28935_28971 = (((inst_28907 instanceof cljs.core.Keyword))?inst_28907.fqn:null);
switch (G__28935_28971) {
case "video-playing":
var statearr_28936_28973 = state_28925__$1;
(statearr_28936_28973[(1)] = (15));


break;
case "video-paused":
var statearr_28937_28974 = state_28925__$1;
(statearr_28937_28974[(1)] = (16));


break;
case "video-buffering":
var statearr_28938_28975 = state_28925__$1;
(statearr_28938_28975[(1)] = (17));


break;
case "video-ended":
var statearr_28939_28976 = state_28925__$1;
(statearr_28939_28976[(1)] = (18));


break;
case "video-not-started":
var statearr_28940_28977 = state_28925__$1;
(statearr_28940_28977[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_28907)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (6))){
var state_28925__$1 = state_28925;
var statearr_28941_28978 = state_28925__$1;
(statearr_28941_28978[(2)] = false);

(statearr_28941_28978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (17))){
var inst_28912 = cljs.core.println.call(null,"Video Buffering");
var state_28925__$1 = state_28925;
var statearr_28942_28979 = state_28925__$1;
(statearr_28942_28979[(2)] = inst_28912);

(statearr_28942_28979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (3))){
var inst_28923 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28925__$1,inst_28923);
} else {
if((state_val_28926 === (12))){
var inst_28886 = (state_28925[(7)]);
var state_28925__$1 = state_28925;
var statearr_28943_28980 = state_28925__$1;
(statearr_28943_28980[(2)] = inst_28886);

(statearr_28943_28980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (2))){
var state_28925__$1 = state_28925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28925__$1,(4),event_channel);
} else {
if((state_val_28926 === (19))){
var inst_28916 = cljs.core.println.call(null,"Video Not Started");
var state_28925__$1 = state_28925;
var statearr_28944_28981 = state_28925__$1;
(statearr_28944_28981[(2)] = inst_28916);

(statearr_28944_28981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (11))){
var inst_28886 = (state_28925[(7)]);
var inst_28903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28886);
var state_28925__$1 = state_28925;
var statearr_28945_28982 = state_28925__$1;
(statearr_28945_28982[(2)] = inst_28903);

(statearr_28945_28982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (9))){
var state_28925__$1 = state_28925;
var statearr_28946_28983 = state_28925__$1;
(statearr_28946_28983[(2)] = false);

(statearr_28946_28983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (5))){
var inst_28886 = (state_28925[(7)]);
var inst_28891 = inst_28886.cljs$lang$protocol_mask$partition0$;
var inst_28892 = (inst_28891 & (64));
var inst_28893 = inst_28886.cljs$core$ISeq$;
var inst_28894 = (inst_28892) || (inst_28893);
var state_28925__$1 = state_28925;
if(cljs.core.truth_(inst_28894)){
var statearr_28947_28984 = state_28925__$1;
(statearr_28947_28984[(1)] = (8));

} else {
var statearr_28948_28985 = state_28925__$1;
(statearr_28948_28985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (14))){
var inst_28906 = (state_28925[(8)]);
var inst_28919 = (state_28925[(2)]);
var inst_28920 = cljs.core.async.put_BANG_.call(null,player_channel,inst_28906);
var state_28925__$1 = (function (){var statearr_28949 = state_28925;
(statearr_28949[(9)] = inst_28920);

(statearr_28949[(10)] = inst_28919);

return statearr_28949;
})();
var statearr_28950_28986 = state_28925__$1;
(statearr_28950_28986[(2)] = null);

(statearr_28950_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (16))){
var inst_28910 = cljs.core.println.call(null,"Video Paused");
var state_28925__$1 = state_28925;
var statearr_28951_28987 = state_28925__$1;
(statearr_28951_28987[(2)] = inst_28910);

(statearr_28951_28987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (10))){
var inst_28898 = (state_28925[(2)]);
var state_28925__$1 = state_28925;
var statearr_28952_28988 = state_28925__$1;
(statearr_28952_28988[(2)] = inst_28898);

(statearr_28952_28988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (18))){
var inst_28914 = cljs.core.println.call(null,"Video Ended");
var state_28925__$1 = state_28925;
var statearr_28953_28989 = state_28925__$1;
(statearr_28953_28989[(2)] = inst_28914);

(statearr_28953_28989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28926 === (8))){
var state_28925__$1 = state_28925;
var statearr_28954_28990 = state_28925__$1;
(statearr_28954_28990[(2)] = true);

(statearr_28954_28990[(1)] = (10));


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
});})(c__26094__auto__,event_channel,player_channel,this$__$1))
;
return ((function (switch__26029__auto__,c__26094__auto__,event_channel,player_channel,this$__$1){
return (function() {
var redditv$core$player_component_$_state_machine__26030__auto__ = null;
var redditv$core$player_component_$_state_machine__26030__auto____0 = (function (){
var statearr_28958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28958[(0)] = redditv$core$player_component_$_state_machine__26030__auto__);

(statearr_28958[(1)] = (1));

return statearr_28958;
});
var redditv$core$player_component_$_state_machine__26030__auto____1 = (function (state_28925){
while(true){
var ret_value__26031__auto__ = (function (){try{while(true){
var result__26032__auto__ = switch__26029__auto__.call(null,state_28925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26032__auto__;
}
break;
}
}catch (e28959){if((e28959 instanceof Object)){
var ex__26033__auto__ = e28959;
var statearr_28960_28991 = state_28925;
(statearr_28960_28991[(5)] = ex__26033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28992 = state_28925;
state_28925 = G__28992;
continue;
} else {
return ret_value__26031__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__26030__auto__ = function(state_28925){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__26030__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__26030__auto____1.call(this,state_28925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__26030__auto____0;
redditv$core$player_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__26030__auto____1;
return redditv$core$player_component_$_state_machine__26030__auto__;
})()
;})(switch__26029__auto__,c__26094__auto__,event_channel,player_channel,this$__$1))
})();
var state__26096__auto__ = (function (){var statearr_28961 = f__26095__auto__.call(null);
(statearr_28961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26094__auto__);

return statearr_28961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26096__auto__);
});})(c__26094__auto__,event_channel,player_channel,this$__$1))
);

return c__26094__auto__;
});

redditv.core.t_redditv$core28880.prototype.om$core$IWillReceiveProps$ = true;

redditv.core.t_redditv$core28880.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
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

redditv.core.t_redditv$core28880.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28880.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28962){
var self__ = this;
var map__28963 = p__28962;
var map__28963__$1 = ((((!((map__28963 == null)))?((((map__28963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28963):map__28963);
var layout = cljs.core.get.call(null,map__28963__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var ___$1 = this;
return React.DOM.div({"id": "redditv-player-container"},om.util.force_children.call(null,React.DOM.div({"id": "redditv-player"})));
});

redditv.core.t_redditv$core28880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"player-component","player-component",62883179,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28881","meta28881",-267305059,null)], null);
});

redditv.core.t_redditv$core28880.cljs$lang$type = true;

redditv.core.t_redditv$core28880.cljs$lang$ctorStr = "redditv.core/t_redditv$core28880";

redditv.core.t_redditv$core28880.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28880");
});

redditv.core.__GT_t_redditv$core28880 = (function redditv$core$player_component_$___GT_t_redditv$core28880(player_component__$1,entry__$1,owner__$1,meta28881){
return (new redditv.core.t_redditv$core28880(player_component__$1,entry__$1,owner__$1,meta28881));
});

}

return (new redditv.core.t_redditv$core28880(redditv$core$player_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core28999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28999 = (function (playlist_entry_component,entry,owner,meta29000){
this.playlist_entry_component = playlist_entry_component;
this.entry = entry;
this.owner = owner;
this.meta29000 = meta29000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29001,meta29000__$1){
var self__ = this;
var _29001__$1 = this;
return (new redditv.core.t_redditv$core28999(self__.playlist_entry_component,self__.entry,self__.owner,meta29000__$1));
});

redditv.core.t_redditv$core28999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29001){
var self__ = this;
var _29001__$1 = this;
return self__.meta29000;
});

redditv.core.t_redditv$core28999.prototype.om$core$IDidUpdate$ = true;

redditv.core.t_redditv$core28999.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,_,___$1){
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

redditv.core.t_redditv$core28999.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28999.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__29002){
var self__ = this;
var map__29003 = p__29002;
var map__29003__$1 = ((((!((map__29003 == null)))?((((map__29003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29003):map__29003);
var selected = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return React.DOM.div({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__29003,map__29003__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-select","video-select",775569479),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.deref.call(null,self__.entry)], null));
});})(classes,___$1,map__29003,map__29003__$1,selected,selection_channel))
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

redditv.core.t_redditv$core28999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-entry-component","playlist-entry-component",-254938373,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29000","meta29000",-1120096468,null)], null);
});

redditv.core.t_redditv$core28999.cljs$lang$type = true;

redditv.core.t_redditv$core28999.cljs$lang$ctorStr = "redditv.core/t_redditv$core28999";

redditv.core.t_redditv$core28999.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28999");
});

redditv.core.__GT_t_redditv$core28999 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core28999(playlist_entry_component__$1,entry__$1,owner__$1,meta29000){
return (new redditv.core.t_redditv$core28999(playlist_entry_component__$1,entry__$1,owner__$1,meta29000));
});

}

return (new redditv.core.t_redditv$core28999(redditv$core$playlist_entry_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core29011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29011 = (function (playlist_component,app,owner,meta29012){
this.playlist_component = playlist_component;
this.app = app;
this.owner = owner;
this.meta29012 = meta29012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29013,meta29012__$1){
var self__ = this;
var _29013__$1 = this;
return (new redditv.core.t_redditv$core29011(self__.playlist_component,self__.app,self__.owner,meta29012__$1));
});

redditv.core.t_redditv$core29011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29013){
var self__ = this;
var _29013__$1 = this;
return self__.meta29012;
});

redditv.core.t_redditv$core29011.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29011.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__29014){
var self__ = this;
var map__29015 = p__29014;
var map__29015__$1 = ((((!((map__29015 == null)))?((((map__29015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);
var selection_channel = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return React.DOM.div({"id": "redditv-playlist-root"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"id": "redditv-playlist-leftpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Panes (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"zoom_out_map"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Previous Video", "onClick": ((function (this$__$1,map__29015,map__29015__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null));
});})(this$__$1,map__29015,map__29015__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_back")))], null))),React.DOM.div({"id": "redditv-playlist-container", "ref": "playlist-scroll-container"},om.util.force_children.call(null,om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.div({"id": "redditv-playlist-rightpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Playlist (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"expand_more"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Next Video", "onClick": ((function (this$__$1,map__29015,map__29015__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null));
});})(this$__$1,map__29015,map__29015__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_forward")))], null)))], null)));
});

redditv.core.t_redditv$core29011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-component","playlist-component",362561540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29012","meta29012",942022589,null)], null);
});

redditv.core.t_redditv$core29011.cljs$lang$type = true;

redditv.core.t_redditv$core29011.cljs$lang$ctorStr = "redditv.core/t_redditv$core29011";

redditv.core.t_redditv$core29011.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29011");
});

redditv.core.__GT_t_redditv$core29011 = (function redditv$core$playlist_component_$___GT_t_redditv$core29011(playlist_component__$1,app__$1,owner__$1,meta29012){
return (new redditv.core.t_redditv$core29011(playlist_component__$1,app__$1,owner__$1,meta29012));
});

}

return (new redditv.core.t_redditv$core29011(redditv$core$playlist_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.leftpane_component = (function redditv$core$leftpane_component(app,owner){
if(typeof redditv.core.t_redditv$core29025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29025 = (function (leftpane_component,app,owner,meta29026){
this.leftpane_component = leftpane_component;
this.app = app;
this.owner = owner;
this.meta29026 = meta29026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29027,meta29026__$1){
var self__ = this;
var _29027__$1 = this;
return (new redditv.core.t_redditv$core29025(self__.leftpane_component,self__.app,self__.owner,meta29026__$1));
});

redditv.core.t_redditv$core29025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29027){
var self__ = this;
var _29027__$1 = this;
return self__.meta29026;
});

redditv.core.t_redditv$core29025.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29025.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__29028){
var self__ = this;
var map__29029 = p__29028;
var map__29029__$1 = ((((!((map__29029 == null)))?((((map__29029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);
var layout_channel = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "View Reddit Comments", "onClick": ((function (this$__$1,map__29029,map__29029__$1,layout_channel){
return (function (e){
var map__29031 = om.core.get_props.call(null,self__.owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var map__29031__$1 = ((((!((map__29031 == null)))?((((map__29031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29031):map__29031);
var entry = map__29031__$1;
var permalink = cljs.core.get.call(null,map__29031__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return window.open([cljs.core.str("http://www.reddit.com"),cljs.core.str(permalink)].join(''),"_blank");
});})(this$__$1,map__29029,map__29029__$1,layout_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"comment")))));
});

redditv.core.t_redditv$core29025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"leftpane-component","leftpane-component",1663892517,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29026","meta29026",-281919398,null)], null);
});

redditv.core.t_redditv$core29025.cljs$lang$type = true;

redditv.core.t_redditv$core29025.cljs$lang$ctorStr = "redditv.core/t_redditv$core29025";

redditv.core.t_redditv$core29025.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29025");
});

redditv.core.__GT_t_redditv$core29025 = (function redditv$core$leftpane_component_$___GT_t_redditv$core29025(leftpane_component__$1,app__$1,owner__$1,meta29026){
return (new redditv.core.t_redditv$core29025(leftpane_component__$1,app__$1,owner__$1,meta29026));
});

}

return (new redditv.core.t_redditv$core29025(redditv$core$leftpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.rightpane_component = (function redditv$core$rightpane_component(app,owner){
if(typeof redditv.core.t_redditv$core29039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29039 = (function (rightpane_component,app,owner,meta29040){
this.rightpane_component = rightpane_component;
this.app = app;
this.owner = owner;
this.meta29040 = meta29040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29041,meta29040__$1){
var self__ = this;
var _29041__$1 = this;
return (new redditv.core.t_redditv$core29039(self__.rightpane_component,self__.app,self__.owner,meta29040__$1));
});

redditv.core.t_redditv$core29039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29041){
var self__ = this;
var _29041__$1 = this;
return self__.meta29040;
});

redditv.core.t_redditv$core29039.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29039.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core29039.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29039.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__29042){
var self__ = this;
var map__29043 = p__29042;
var map__29043__$1 = ((((!((map__29043 == null)))?((((map__29043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29043):map__29043);
var layout_channel = cljs.core.get.call(null,map__29043__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane redditv-rightpane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "About Redditv"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"help")))));
});

redditv.core.t_redditv$core29039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"rightpane-component","rightpane-component",198155804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29040","meta29040",699276984,null)], null);
});

redditv.core.t_redditv$core29039.cljs$lang$type = true;

redditv.core.t_redditv$core29039.cljs$lang$ctorStr = "redditv.core/t_redditv$core29039";

redditv.core.t_redditv$core29039.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29039");
});

redditv.core.__GT_t_redditv$core29039 = (function redditv$core$rightpane_component_$___GT_t_redditv$core29039(rightpane_component__$1,app__$1,owner__$1,meta29040){
return (new redditv.core.t_redditv$core29039(rightpane_component__$1,app__$1,owner__$1,meta29040));
});

}

return (new redditv.core.t_redditv$core29039(redditv$core$rightpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.handle_search_change = (function redditv$core$handle_search_change(e,owner,p__29045){
var map__29048 = p__29045;
var map__29048__$1 = ((((!((map__29048 == null)))?((((map__29048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var subreddit = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),e.target.value);
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(var_args){
var args__22741__auto__ = [];
var len__22734__auto___29073 = arguments.length;
var i__22735__auto___29074 = (0);
while(true){
if((i__22735__auto___29074 < len__22734__auto___29073)){
args__22741__auto__.push((arguments[i__22735__auto___29074]));

var G__29075 = (i__22735__auto___29074 + (1));
i__22735__auto___29074 = G__29075;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((2) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((2)),(0))):null);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22742__auto__);
});

redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,owner,p__29055){
var map__29056 = p__29055;
var map__29056__$1 = ((((!((map__29056 == null)))?((((map__29056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29056):map__29056);
var subreddit = cljs.core.get.call(null,map__29056__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(app));
var vec__29058 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__29058,(0),null);
var error_channel = cljs.core.nth.call(null,vec__29058,(1),null);
cljs.core.println.call(null,"Searching on subreddit: ",subreddit);

om.core.transact_BANG_.call(null,app,((function (vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit){
return (function (p1__29050_SHARP_){
return cljs.core.merge.call(null,p1__29050_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null], null));
});})(vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit))
);

var c__26094__auto___29076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit){
return (function (){
var f__26095__auto__ = (function (){var switch__26029__auto__ = ((function (c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit){
return (function (state_29064){
var state_val_29065 = (state_29064[(1)]);
if((state_val_29065 === (1))){
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29064__$1,(2),success_channel);
} else {
if((state_val_29065 === (2))){
var inst_29060 = (state_29064[(2)]);
var inst_29061 = (function (){var new_playlist = inst_29060;
return ((function (new_playlist,inst_29060,state_val_29065,c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit){
return (function (p1__29051_SHARP_){
return cljs.core.merge.call(null,p1__29051_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new_playlist,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),cljs.core.first.call(null,new_playlist)], null));
});
;})(new_playlist,inst_29060,state_val_29065,c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit))
})();
var inst_29062 = om.core.transact_BANG_.call(null,app,inst_29061);
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29064__$1,inst_29062);
} else {
return null;
}
}
});})(c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit))
;
return ((function (switch__26029__auto__,c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit){
return (function() {
var redditv$core$state_machine__26030__auto__ = null;
var redditv$core$state_machine__26030__auto____0 = (function (){
var statearr_29069 = [null,null,null,null,null,null,null];
(statearr_29069[(0)] = redditv$core$state_machine__26030__auto__);

(statearr_29069[(1)] = (1));

return statearr_29069;
});
var redditv$core$state_machine__26030__auto____1 = (function (state_29064){
while(true){
var ret_value__26031__auto__ = (function (){try{while(true){
var result__26032__auto__ = switch__26029__auto__.call(null,state_29064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26032__auto__;
}
break;
}
}catch (e29070){if((e29070 instanceof Object)){
var ex__26033__auto__ = e29070;
var statearr_29071_29077 = state_29064;
(statearr_29071_29077[(5)] = ex__26033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_29064;
state_29064 = G__29078;
continue;
} else {
return ret_value__26031__auto__;
}
break;
}
});
redditv$core$state_machine__26030__auto__ = function(state_29064){
switch(arguments.length){
case 0:
return redditv$core$state_machine__26030__auto____0.call(this);
case 1:
return redditv$core$state_machine__26030__auto____1.call(this,state_29064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$state_machine__26030__auto____0;
redditv$core$state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$state_machine__26030__auto____1;
return redditv$core$state_machine__26030__auto__;
})()
;})(switch__26029__auto__,c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit))
})();
var state__26096__auto__ = (function (){var statearr_29072 = f__26095__auto__.call(null);
(statearr_29072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26094__auto___29076);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26096__auto__);
});})(c__26094__auto___29076,vec__29058,success_channel,error_channel,map__29056,map__29056__$1,subreddit))
);


return error_channel;
});

redditv.core.update_playlist_BANG_.cljs$lang$maxFixedArity = (2);

redditv.core.update_playlist_BANG_.cljs$lang$applyTo = (function (seq29052){
var G__29053 = cljs.core.first.call(null,seq29052);
var seq29052__$1 = cljs.core.next.call(null,seq29052);
var G__29054 = cljs.core.first.call(null,seq29052__$1);
var seq29052__$2 = cljs.core.next.call(null,seq29052__$1);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29053,G__29054,seq29052__$2);
});
redditv.core.header_component = (function redditv$core$header_component(app,owner){
if(typeof redditv.core.t_redditv$core29087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29087 = (function (header_component,app,owner,meta29088){
this.header_component = header_component;
this.app = app;
this.owner = owner;
this.meta29088 = meta29088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29089,meta29088__$1){
var self__ = this;
var _29089__$1 = this;
return (new redditv.core.t_redditv$core29087(self__.header_component,self__.app,self__.owner,meta29088__$1));
});

redditv.core.t_redditv$core29087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29089){
var self__ = this;
var _29089__$1 = this;
return self__.meta29088;
});

redditv.core.t_redditv$core29087.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29087.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos"], null);
});

redditv.core.t_redditv$core29087.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29087.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__29090){
var self__ = this;
var map__29091 = p__29090;
var map__29091__$1 = ((((!((map__29091 == null)))?((((map__29091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var state = map__29091__$1;
var subreddit = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var this$__$1 = this;
return React.DOM.div({"className": "redditv-header"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Search Subreddit", "style": {"display": "inline-block"}, "onClick": ((function (this$__$1,map__29091,map__29091__$1,state,subreddit){
return (function (e){
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
});})(this$__$1,map__29091,map__29091__$1,state,subreddit))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"search"))),React.DOM.span(null,om.util.force_children.call(null,"/r/")),om.dom.input.call(null,{"type": "text", "value": subreddit, "onChange": ((function (this$__$1,map__29091,map__29091__$1,state,subreddit){
return (function (p1__29079_SHARP_){
return redditv.core.handle_search_change.call(null,p1__29079_SHARP_,self__.owner,state);
});})(this$__$1,map__29091,map__29091__$1,state,subreddit))
, "onKeyDown": ((function (this$__$1,map__29091,map__29091__$1,state,subreddit){
return (function (e){
var key = e.key;
var G__29093 = key;
switch (G__29093) {
case "Enter":
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

break;
default:
return null;

}
});})(this$__$1,map__29091,map__29091__$1,state,subreddit))
})], null)));
});

redditv.core.t_redditv$core29087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"header-component","header-component",1488776773,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29088","meta29088",-378474465,null)], null);
});

redditv.core.t_redditv$core29087.cljs$lang$type = true;

redditv.core.t_redditv$core29087.cljs$lang$ctorStr = "redditv.core/t_redditv$core29087";

redditv.core.t_redditv$core29087.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29087");
});

redditv.core.__GT_t_redditv$core29087 = (function redditv$core$header_component_$___GT_t_redditv$core29087(header_component__$1,app__$1,owner__$1,meta29088){
return (new redditv.core.t_redditv$core29087(header_component__$1,app__$1,owner__$1,meta29088));
});

}

return (new redditv.core.t_redditv$core29087(redditv$core$header_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof redditv.core.t_redditv$core29277 !== 'undefined'){
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
redditv.core.t_redditv$core29277 = (function (root_component,app,owner,meta29278){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta29278 = meta29278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29279,meta29278__$1){
var self__ = this;
var _29279__$1 = this;
return (new redditv.core.t_redditv$core29277(self__.root_component,self__.app,self__.owner,meta29278__$1));
});

redditv.core.t_redditv$core29277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29279){
var self__ = this;
var _29279__$1 = this;
return self__.meta29278;
});

redditv.core.t_redditv$core29277.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29277.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core29277.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core29277.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var c__26094__auto___29459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__26095__auto__ = (function (){var switch__26029__auto__ = ((function (c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1){
return (function (state_29340){
var state_val_29341 = (state_29340[(1)]);
if((state_val_29341 === (7))){
var inst_29298 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29298)){
var statearr_29342_29460 = state_29340__$1;
(statearr_29342_29460[(1)] = (11));

} else {
var statearr_29343_29461 = state_29340__$1;
(statearr_29343_29461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (20))){
var state_29340__$1 = state_29340;
var statearr_29344_29462 = state_29340__$1;
(statearr_29344_29462[(2)] = false);

(statearr_29344_29462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (27))){
var state_29340__$1 = state_29340;
var statearr_29345_29463 = state_29340__$1;
(statearr_29345_29463[(2)] = null);

(statearr_29345_29463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (1))){
var state_29340__$1 = state_29340;
var statearr_29346_29464 = state_29340__$1;
(statearr_29346_29464[(2)] = null);

(statearr_29346_29464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (24))){
var inst_29325 = (state_29340[(2)]);
var inst_29326 = cljs.core.get.call(null,inst_29325,new cljs.core.Keyword(null,"entry","entry",505168823));
var inst_29327 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_29326);
var state_29340__$1 = state_29340;
var statearr_29347_29465 = state_29340__$1;
(statearr_29347_29465[(2)] = inst_29327);

(statearr_29347_29465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (4))){
var inst_29283 = (state_29340[(7)]);
var inst_29283__$1 = (state_29340[(2)]);
var inst_29285 = (inst_29283__$1 == null);
var inst_29286 = cljs.core.not.call(null,inst_29285);
var state_29340__$1 = (function (){var statearr_29348 = state_29340;
(statearr_29348[(7)] = inst_29283__$1);

return statearr_29348;
})();
if(inst_29286){
var statearr_29349_29466 = state_29340__$1;
(statearr_29349_29466[(1)] = (5));

} else {
var statearr_29350_29467 = state_29340__$1;
(statearr_29350_29467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (15))){
var inst_29303 = (state_29340[(8)]);
var inst_29307 = (inst_29303 == null);
var inst_29308 = cljs.core.not.call(null,inst_29307);
var state_29340__$1 = state_29340;
if(inst_29308){
var statearr_29351_29468 = state_29340__$1;
(statearr_29351_29468[(1)] = (16));

} else {
var statearr_29352_29469 = state_29340__$1;
(statearr_29352_29469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (21))){
var inst_29317 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29353_29470 = state_29340__$1;
(statearr_29353_29470[(2)] = inst_29317);

(statearr_29353_29470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (13))){
var inst_29303 = (state_29340[(8)]);
var inst_29303__$1 = (state_29340[(2)]);
var inst_29304 = cljs.core.get.call(null,inst_29303__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29340__$1 = (function (){var statearr_29354 = state_29340;
(statearr_29354[(8)] = inst_29303__$1);

return statearr_29354;
})();
var G__29355_29471 = (((inst_29304 instanceof cljs.core.Keyword))?inst_29304.fqn:null);
switch (G__29355_29471) {
case "video-select":
var statearr_29356_29473 = state_29340__$1;
(statearr_29356_29473[(1)] = (15));


break;
case "video-next":
var statearr_29357_29474 = state_29340__$1;
(statearr_29357_29474[(1)] = (25));


break;
case "video-previous":
var statearr_29358_29475 = state_29340__$1;
(statearr_29358_29475[(1)] = (26));


break;
default:
var statearr_29359_29476 = state_29340__$1;
(statearr_29359_29476[(1)] = (27));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (22))){
var inst_29303 = (state_29340[(8)]);
var inst_29322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29303);
var state_29340__$1 = state_29340;
var statearr_29360_29477 = state_29340__$1;
(statearr_29360_29477[(2)] = inst_29322);

(statearr_29360_29477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (6))){
var state_29340__$1 = state_29340;
var statearr_29361_29478 = state_29340__$1;
(statearr_29361_29478[(2)] = false);

(statearr_29361_29478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (25))){
var inst_29329 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29340__$1 = state_29340;
var statearr_29362_29479 = state_29340__$1;
(statearr_29362_29479[(2)] = inst_29329);

(statearr_29362_29479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (17))){
var state_29340__$1 = state_29340;
var statearr_29363_29480 = state_29340__$1;
(statearr_29363_29480[(2)] = false);

(statearr_29363_29480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (3))){
var inst_29338 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29340__$1,inst_29338);
} else {
if((state_val_29341 === (12))){
var inst_29283 = (state_29340[(7)]);
var state_29340__$1 = state_29340;
var statearr_29364_29481 = state_29340__$1;
(statearr_29364_29481[(2)] = inst_29283);

(statearr_29364_29481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (2))){
var state_29340__$1 = state_29340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29340__$1,(4),selection_channel);
} else {
if((state_val_29341 === (23))){
var inst_29303 = (state_29340[(8)]);
var state_29340__$1 = state_29340;
var statearr_29365_29482 = state_29340__$1;
(statearr_29365_29482[(2)] = inst_29303);

(statearr_29365_29482[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (19))){
var state_29340__$1 = state_29340;
var statearr_29366_29483 = state_29340__$1;
(statearr_29366_29483[(2)] = true);

(statearr_29366_29483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (11))){
var inst_29283 = (state_29340[(7)]);
var inst_29300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29283);
var state_29340__$1 = state_29340;
var statearr_29367_29484 = state_29340__$1;
(statearr_29367_29484[(2)] = inst_29300);

(statearr_29367_29484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (9))){
var state_29340__$1 = state_29340;
var statearr_29368_29485 = state_29340__$1;
(statearr_29368_29485[(2)] = false);

(statearr_29368_29485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (5))){
var inst_29283 = (state_29340[(7)]);
var inst_29288 = inst_29283.cljs$lang$protocol_mask$partition0$;
var inst_29289 = (inst_29288 & (64));
var inst_29290 = inst_29283.cljs$core$ISeq$;
var inst_29291 = (inst_29289) || (inst_29290);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29291)){
var statearr_29369_29486 = state_29340__$1;
(statearr_29369_29486[(1)] = (8));

} else {
var statearr_29370_29487 = state_29340__$1;
(statearr_29370_29487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (14))){
var inst_29335 = (state_29340[(2)]);
var state_29340__$1 = (function (){var statearr_29371 = state_29340;
(statearr_29371[(9)] = inst_29335);

return statearr_29371;
})();
var statearr_29372_29488 = state_29340__$1;
(statearr_29372_29488[(2)] = null);

(statearr_29372_29488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (26))){
var inst_29331 = redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);
var state_29340__$1 = state_29340;
var statearr_29373_29489 = state_29340__$1;
(statearr_29373_29489[(2)] = inst_29331);

(statearr_29373_29489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (16))){
var inst_29303 = (state_29340[(8)]);
var inst_29310 = inst_29303.cljs$lang$protocol_mask$partition0$;
var inst_29311 = (inst_29310 & (64));
var inst_29312 = inst_29303.cljs$core$ISeq$;
var inst_29313 = (inst_29311) || (inst_29312);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29313)){
var statearr_29374_29490 = state_29340__$1;
(statearr_29374_29490[(1)] = (19));

} else {
var statearr_29375_29491 = state_29340__$1;
(statearr_29375_29491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (10))){
var inst_29295 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
var statearr_29376_29492 = state_29340__$1;
(statearr_29376_29492[(2)] = inst_29295);

(statearr_29376_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (18))){
var inst_29320 = (state_29340[(2)]);
var state_29340__$1 = state_29340;
if(cljs.core.truth_(inst_29320)){
var statearr_29377_29493 = state_29340__$1;
(statearr_29377_29493[(1)] = (22));

} else {
var statearr_29378_29494 = state_29340__$1;
(statearr_29378_29494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29341 === (8))){
var state_29340__$1 = state_29340;
var statearr_29379_29495 = state_29340__$1;
(statearr_29379_29495[(2)] = true);

(statearr_29379_29495[(1)] = (10));


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
});})(c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__26029__auto__,c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__26030__auto__ = null;
var redditv$core$root_component_$_state_machine__26030__auto____0 = (function (){
var statearr_29383 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29383[(0)] = redditv$core$root_component_$_state_machine__26030__auto__);

(statearr_29383[(1)] = (1));

return statearr_29383;
});
var redditv$core$root_component_$_state_machine__26030__auto____1 = (function (state_29340){
while(true){
var ret_value__26031__auto__ = (function (){try{while(true){
var result__26032__auto__ = switch__26029__auto__.call(null,state_29340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26032__auto__;
}
break;
}
}catch (e29384){if((e29384 instanceof Object)){
var ex__26033__auto__ = e29384;
var statearr_29385_29496 = state_29340;
(statearr_29385_29496[(5)] = ex__26033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29497 = state_29340;
state_29340 = G__29497;
continue;
} else {
return ret_value__26031__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__26030__auto__ = function(state_29340){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__26030__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__26030__auto____1.call(this,state_29340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__26030__auto____0;
redditv$core$root_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__26030__auto____1;
return redditv$core$root_component_$_state_machine__26030__auto__;
})()
;})(switch__26029__auto__,c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1))
})();
var state__26096__auto__ = (function (){var statearr_29386 = f__26095__auto__.call(null);
(statearr_29386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26094__auto___29459);

return statearr_29386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26096__auto__);
});})(c__26094__auto___29459,selection_channel,player_channel,layout_channel,___$1))
);


var c__26094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26094__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__26095__auto__ = (function (){var switch__26029__auto__ = ((function (c__26094__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function (state_29423){
var state_val_29424 = (state_29423[(1)]);
if((state_val_29424 === (7))){
var inst_29405 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
if(cljs.core.truth_(inst_29405)){
var statearr_29425_29498 = state_29423__$1;
(statearr_29425_29498[(1)] = (11));

} else {
var statearr_29426_29499 = state_29423__$1;
(statearr_29426_29499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (1))){
var state_29423__$1 = state_29423;
var statearr_29427_29500 = state_29423__$1;
(statearr_29427_29500[(2)] = null);

(statearr_29427_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (4))){
var inst_29390 = (state_29423[(7)]);
var inst_29390__$1 = (state_29423[(2)]);
var inst_29392 = (inst_29390__$1 == null);
var inst_29393 = cljs.core.not.call(null,inst_29392);
var state_29423__$1 = (function (){var statearr_29428 = state_29423;
(statearr_29428[(7)] = inst_29390__$1);

return statearr_29428;
})();
if(inst_29393){
var statearr_29429_29501 = state_29423__$1;
(statearr_29429_29501[(1)] = (5));

} else {
var statearr_29430_29502 = state_29423__$1;
(statearr_29430_29502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (15))){
var inst_29412 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29423__$1 = state_29423;
var statearr_29431_29503 = state_29423__$1;
(statearr_29431_29503[(2)] = inst_29412);

(statearr_29431_29503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (13))){
var inst_29410 = (state_29423[(2)]);
var inst_29411 = cljs.core.get.call(null,inst_29410,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29423__$1 = state_29423;
var G__29432_29504 = (((inst_29411 instanceof cljs.core.Keyword))?inst_29411.fqn:null);
switch (G__29432_29504) {
case "video-ended":
var statearr_29433_29506 = state_29423__$1;
(statearr_29433_29506[(1)] = (15));


break;
case "video-not-started":
var statearr_29434_29507 = state_29423__$1;
(statearr_29434_29507[(1)] = (16));


break;
default:
var statearr_29435_29508 = state_29423__$1;
(statearr_29435_29508[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (6))){
var state_29423__$1 = state_29423;
var statearr_29436_29509 = state_29423__$1;
(statearr_29436_29509[(2)] = false);

(statearr_29436_29509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (17))){
var state_29423__$1 = state_29423;
var statearr_29437_29510 = state_29423__$1;
(statearr_29437_29510[(2)] = null);

(statearr_29437_29510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (3))){
var inst_29421 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29423__$1,inst_29421);
} else {
if((state_val_29424 === (12))){
var inst_29390 = (state_29423[(7)]);
var state_29423__$1 = state_29423;
var statearr_29438_29511 = state_29423__$1;
(statearr_29438_29511[(2)] = inst_29390);

(statearr_29438_29511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (2))){
var state_29423__$1 = state_29423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29423__$1,(4),player_channel);
} else {
if((state_val_29424 === (11))){
var inst_29390 = (state_29423[(7)]);
var inst_29407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29390);
var state_29423__$1 = state_29423;
var statearr_29439_29512 = state_29423__$1;
(statearr_29439_29512[(2)] = inst_29407);

(statearr_29439_29512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (9))){
var state_29423__$1 = state_29423;
var statearr_29440_29513 = state_29423__$1;
(statearr_29440_29513[(2)] = false);

(statearr_29440_29513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (5))){
var inst_29390 = (state_29423[(7)]);
var inst_29395 = inst_29390.cljs$lang$protocol_mask$partition0$;
var inst_29396 = (inst_29395 & (64));
var inst_29397 = inst_29390.cljs$core$ISeq$;
var inst_29398 = (inst_29396) || (inst_29397);
var state_29423__$1 = state_29423;
if(cljs.core.truth_(inst_29398)){
var statearr_29441_29514 = state_29423__$1;
(statearr_29441_29514[(1)] = (8));

} else {
var statearr_29442_29515 = state_29423__$1;
(statearr_29442_29515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (14))){
var inst_29418 = (state_29423[(2)]);
var state_29423__$1 = (function (){var statearr_29443 = state_29423;
(statearr_29443[(8)] = inst_29418);

return statearr_29443;
})();
var statearr_29444_29516 = state_29423__$1;
(statearr_29444_29516[(2)] = null);

(statearr_29444_29516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (16))){
var inst_29414 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29423__$1 = state_29423;
var statearr_29445_29517 = state_29423__$1;
(statearr_29445_29517[(2)] = inst_29414);

(statearr_29445_29517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (10))){
var inst_29402 = (state_29423[(2)]);
var state_29423__$1 = state_29423;
var statearr_29446_29518 = state_29423__$1;
(statearr_29446_29518[(2)] = inst_29402);

(statearr_29446_29518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29424 === (8))){
var state_29423__$1 = state_29423;
var statearr_29447_29519 = state_29423__$1;
(statearr_29447_29519[(2)] = true);

(statearr_29447_29519[(1)] = (10));


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
});})(c__26094__auto__,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__26029__auto__,c__26094__auto__,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__26030__auto__ = null;
var redditv$core$root_component_$_state_machine__26030__auto____0 = (function (){
var statearr_29451 = [null,null,null,null,null,null,null,null,null];
(statearr_29451[(0)] = redditv$core$root_component_$_state_machine__26030__auto__);

(statearr_29451[(1)] = (1));

return statearr_29451;
});
var redditv$core$root_component_$_state_machine__26030__auto____1 = (function (state_29423){
while(true){
var ret_value__26031__auto__ = (function (){try{while(true){
var result__26032__auto__ = switch__26029__auto__.call(null,state_29423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26032__auto__;
}
break;
}
}catch (e29452){if((e29452 instanceof Object)){
var ex__26033__auto__ = e29452;
var statearr_29453_29520 = state_29423;
(statearr_29453_29520[(5)] = ex__26033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29521 = state_29423;
state_29423 = G__29521;
continue;
} else {
return ret_value__26031__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__26030__auto__ = function(state_29423){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__26030__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__26030__auto____1.call(this,state_29423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__26030__auto____0;
redditv$core$root_component_$_state_machine__26030__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__26030__auto____1;
return redditv$core$root_component_$_state_machine__26030__auto__;
})()
;})(switch__26029__auto__,c__26094__auto__,selection_channel,player_channel,layout_channel,___$1))
})();
var state__26096__auto__ = (function (){var statearr_29454 = f__26095__auto__.call(null);
(statearr_29454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26094__auto__);

return statearr_29454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26096__auto__);
});})(c__26094__auto__,selection_channel,player_channel,layout_channel,___$1))
);

return c__26094__auto__;
});

redditv.core.t_redditv$core29277.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29277.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__29455){
var self__ = this;
var map__29456 = p__29455;
var map__29456__$1 = ((((!((map__29456 == null)))?((((map__29456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29456):map__29456);
var selection_channel = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var ___$1 = this;
return React.DOM.div({"className": ""},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.header_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.leftpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.rightpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null)], null))], null)));
});

redditv.core.t_redditv$core29277.prototype.om$core$IDidMount$ = true;

redditv.core.t_redditv$core29277.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return window.addEventListener("keydown",((function (___$1){
return (function (e){
var keycode = e.keyCode;
var G__29458 = keycode;
switch (G__29458) {
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

redditv.core.t_redditv$core29277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29278","meta29278",-1045891578,null)], null);
});

redditv.core.t_redditv$core29277.cljs$lang$type = true;

redditv.core.t_redditv$core29277.cljs$lang$ctorStr = "redditv.core/t_redditv$core29277";

redditv.core.t_redditv$core29277.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29277");
});

redditv.core.__GT_t_redditv$core29277 = (function redditv$core$root_component_$___GT_t_redditv$core29277(root_component__$1,app__$1,owner__$1,meta29278){
return (new redditv.core.t_redditv$core29277(root_component__$1,app__$1,owner__$1,meta29278));
});

}

return (new redditv.core.t_redditv$core29277(redditv$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
