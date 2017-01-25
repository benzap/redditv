// Compiled by ClojureScript 1.9.293 {}
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
goog.require('redditv.events');
goog.require('redditv.icons');
goog.require('om.core');
goog.require('redditv.utils');
goog.require('goog.events');
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
var args42268 = [];
var len__31335__auto___42271 = arguments.length;
var i__31336__auto___42272 = (0);
while(true){
if((i__31336__auto___42272 < len__31335__auto___42271)){
args42268.push((arguments[i__31336__auto___42272]));

var G__42273 = (i__31336__auto___42272 + (1));
i__31336__auto___42272 = G__42273;
continue;
} else {
}
break;
}

var G__42270 = args42268.length;
switch (G__42270) {
case 1:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42268.length)].join('')));

}
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (v){
return redditv.core.set_hash_BANG_.call(null,window.location);
});

redditv.core.set_hash_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (loc,v){
return (loc["hash"] = v);
});

redditv.core.set_hash_BANG_.cljs$lang$maxFixedArity = 2;

var action__41993__auto___42281 = (function (params__41994__auto__){
if(cljs.core.map_QMARK_.call(null,params__41994__auto__)){
var map__42275 = params__41994__auto__;
var map__42275__$1 = ((((!((map__42275 == null)))?((((map__42275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42275):map__42275);
var subreddit = cljs.core.get.call(null,map__42275__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
if(cljs.core.vector_QMARK_.call(null,params__41994__auto__)){
var vec__42277 = params__41994__auto__;
var subreddit = cljs.core.nth.call(null,vec__42277,(0),null);
return cljs.core.swap_BANG_.call(null,redditv.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/r/:subreddit",action__41993__auto___42281);

redditv.core.subreddit_path = ((function (action__41993__auto___42281){
return (function redditv$core$subreddit_path(var_args){
var args__31342__auto__ = [];
var len__31335__auto___42282 = arguments.length;
var i__31336__auto___42283 = (0);
while(true){
if((i__31336__auto___42283 < len__31335__auto___42282)){
args__31342__auto__.push((arguments[i__31336__auto___42283]));

var G__42284 = (i__31336__auto___42283 + (1));
i__31336__auto___42283 = G__42284;
continue;
} else {
}
break;
}

var argseq__31343__auto__ = ((((0) < args__31342__auto__.length))?(new cljs.core.IndexedSeq(args__31342__auto__.slice((0)),(0),null)):null);
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(argseq__31343__auto__);
});})(action__41993__auto___42281))
;

redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__41993__auto___42281){
return (function (args__41992__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/r/:subreddit",args__41992__auto__);
});})(action__41993__auto___42281))
;

redditv.core.subreddit_path.cljs$lang$maxFixedArity = (0);

redditv.core.subreddit_path.cljs$lang$applyTo = ((function (action__41993__auto___42281){
return (function (seq42280){
return redditv.core.subreddit_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42280));
});})(action__41993__auto___42281))
;

var h_42287 = (new goog.History());
goog.events.listen(h_42287,goog.history.EventType.NAVIGATE,((function (h_42287){
return (function (p1__42285_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__42285_SHARP_.token);
});})(h_42287))
);

var G__42286_42288 = h_42287;
G__42286_42288.setEnabled(true);

redditv.core.player_component = (function redditv$core$player_component(entry,owner){
if(typeof redditv.core.t_redditv$core42372 !== 'undefined'){
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
redditv.core.t_redditv$core42372 = (function (entry,owner,meta42373){
this.entry = entry;
this.owner = owner;
this.meta42373 = meta42373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42374,meta42373__$1){
var self__ = this;
var _42374__$1 = this;
return (new redditv.core.t_redditv$core42372(self__.entry,self__.owner,meta42373__$1));
});

redditv.core.t_redditv$core42372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42374){
var self__ = this;
var _42374__$1 = this;
return self__.meta42373;
});

redditv.core.t_redditv$core42372.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42372.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core42372.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42372.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__,event_channel,player_channel,this$__$1){
return (function (state_42418){
var state_val_42419 = (state_42418[(1)]);
if((state_val_42419 === (7))){
var inst_42394 = (state_42418[(2)]);
var state_42418__$1 = state_42418;
if(cljs.core.truth_(inst_42394)){
var statearr_42420_42455 = state_42418__$1;
(statearr_42420_42455[(1)] = (11));

} else {
var statearr_42421_42456 = state_42418__$1;
(statearr_42421_42456[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (1))){
var state_42418__$1 = state_42418;
var statearr_42422_42457 = state_42418__$1;
(statearr_42422_42457[(2)] = null);

(statearr_42422_42457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (4))){
var inst_42378 = (state_42418[(7)]);
var inst_42378__$1 = (state_42418[(2)]);
var inst_42380 = (inst_42378__$1 == null);
var inst_42381 = cljs.core.not.call(null,inst_42380);
var state_42418__$1 = (function (){var statearr_42423 = state_42418;
(statearr_42423[(7)] = inst_42378__$1);

return statearr_42423;
})();
if(inst_42381){
var statearr_42424_42458 = state_42418__$1;
(statearr_42424_42458[(1)] = (5));

} else {
var statearr_42425_42459 = state_42418__$1;
(statearr_42425_42459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (15))){
var inst_42401 = cljs.core.println.call(null,"Video Playing");
var state_42418__$1 = state_42418;
var statearr_42426_42460 = state_42418__$1;
(statearr_42426_42460[(2)] = inst_42401);

(statearr_42426_42460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (13))){
var inst_42399 = (state_42418[(8)]);
var inst_42399__$1 = (state_42418[(2)]);
var inst_42400 = cljs.core.get.call(null,inst_42399__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_42418__$1 = (function (){var statearr_42427 = state_42418;
(statearr_42427[(8)] = inst_42399__$1);

return statearr_42427;
})();
var G__42428_42461 = (((inst_42400 instanceof cljs.core.Keyword))?inst_42400.fqn:null);
switch (G__42428_42461) {
case "video-playing":
var statearr_42429_42463 = state_42418__$1;
(statearr_42429_42463[(1)] = (15));


break;
case "video-paused":
var statearr_42430_42464 = state_42418__$1;
(statearr_42430_42464[(1)] = (16));


break;
case "video-buffering":
var statearr_42431_42465 = state_42418__$1;
(statearr_42431_42465[(1)] = (17));


break;
case "video-ended":
var statearr_42432_42466 = state_42418__$1;
(statearr_42432_42466[(1)] = (18));


break;
case "video-not-started":
var statearr_42433_42467 = state_42418__$1;
(statearr_42433_42467[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_42400)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (6))){
var state_42418__$1 = state_42418;
var statearr_42434_42468 = state_42418__$1;
(statearr_42434_42468[(2)] = false);

(statearr_42434_42468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (17))){
var inst_42405 = cljs.core.println.call(null,"Video Buffering");
var state_42418__$1 = state_42418;
var statearr_42435_42469 = state_42418__$1;
(statearr_42435_42469[(2)] = inst_42405);

(statearr_42435_42469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (3))){
var inst_42416 = (state_42418[(2)]);
var state_42418__$1 = state_42418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42418__$1,inst_42416);
} else {
if((state_val_42419 === (12))){
var inst_42378 = (state_42418[(7)]);
var state_42418__$1 = state_42418;
var statearr_42436_42470 = state_42418__$1;
(statearr_42436_42470[(2)] = inst_42378);

(statearr_42436_42470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (2))){
var state_42418__$1 = state_42418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42418__$1,(4),event_channel);
} else {
if((state_val_42419 === (19))){
var inst_42409 = cljs.core.println.call(null,"Video Not Started");
var state_42418__$1 = state_42418;
var statearr_42437_42471 = state_42418__$1;
(statearr_42437_42471[(2)] = inst_42409);

(statearr_42437_42471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (11))){
var inst_42378 = (state_42418[(7)]);
var inst_42396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42378);
var state_42418__$1 = state_42418;
var statearr_42438_42472 = state_42418__$1;
(statearr_42438_42472[(2)] = inst_42396);

(statearr_42438_42472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (9))){
var state_42418__$1 = state_42418;
var statearr_42439_42473 = state_42418__$1;
(statearr_42439_42473[(2)] = false);

(statearr_42439_42473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (5))){
var inst_42378 = (state_42418[(7)]);
var inst_42383 = inst_42378.cljs$lang$protocol_mask$partition0$;
var inst_42384 = (inst_42383 & (64));
var inst_42385 = inst_42378.cljs$core$ISeq$;
var inst_42386 = (cljs.core.PROTOCOL_SENTINEL === inst_42385);
var inst_42387 = (inst_42384) || (inst_42386);
var state_42418__$1 = state_42418;
if(cljs.core.truth_(inst_42387)){
var statearr_42440_42474 = state_42418__$1;
(statearr_42440_42474[(1)] = (8));

} else {
var statearr_42441_42475 = state_42418__$1;
(statearr_42441_42475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (14))){
var inst_42399 = (state_42418[(8)]);
var inst_42412 = (state_42418[(2)]);
var inst_42413 = cljs.core.async.put_BANG_.call(null,player_channel,inst_42399);
var state_42418__$1 = (function (){var statearr_42442 = state_42418;
(statearr_42442[(9)] = inst_42412);

(statearr_42442[(10)] = inst_42413);

return statearr_42442;
})();
var statearr_42443_42476 = state_42418__$1;
(statearr_42443_42476[(2)] = null);

(statearr_42443_42476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (16))){
var inst_42403 = cljs.core.println.call(null,"Video Paused");
var state_42418__$1 = state_42418;
var statearr_42444_42477 = state_42418__$1;
(statearr_42444_42477[(2)] = inst_42403);

(statearr_42444_42477[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (10))){
var inst_42391 = (state_42418[(2)]);
var state_42418__$1 = state_42418;
var statearr_42445_42478 = state_42418__$1;
(statearr_42445_42478[(2)] = inst_42391);

(statearr_42445_42478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (18))){
var inst_42407 = cljs.core.println.call(null,"Video Ended");
var state_42418__$1 = state_42418;
var statearr_42446_42479 = state_42418__$1;
(statearr_42446_42479[(2)] = inst_42407);

(statearr_42446_42479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42419 === (8))){
var state_42418__$1 = state_42418;
var statearr_42447_42480 = state_42418__$1;
(statearr_42447_42480[(2)] = true);

(statearr_42447_42480[(1)] = (10));


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
});})(c__38336__auto__,event_channel,player_channel,this$__$1))
;
return ((function (switch__38224__auto__,c__38336__auto__,event_channel,player_channel,this$__$1){
return (function() {
var redditv$core$player_component_$_state_machine__38225__auto__ = null;
var redditv$core$player_component_$_state_machine__38225__auto____0 = (function (){
var statearr_42451 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42451[(0)] = redditv$core$player_component_$_state_machine__38225__auto__);

(statearr_42451[(1)] = (1));

return statearr_42451;
});
var redditv$core$player_component_$_state_machine__38225__auto____1 = (function (state_42418){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_42418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e42452){if((e42452 instanceof Object)){
var ex__38228__auto__ = e42452;
var statearr_42453_42481 = state_42418;
(statearr_42453_42481[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42482 = state_42418;
state_42418 = G__42482;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__38225__auto__ = function(state_42418){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__38225__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__38225__auto____1.call(this,state_42418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__38225__auto____0;
redditv$core$player_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__38225__auto____1;
return redditv$core$player_component_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__,event_channel,player_channel,this$__$1))
})();
var state__38338__auto__ = (function (){var statearr_42454 = f__38337__auto__.call(null);
(statearr_42454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_42454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__,event_channel,player_channel,this$__$1))
);

return c__38336__auto__;
});

redditv.core.t_redditv$core42372.prototype.om$core$IWillReceiveProps$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42372.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
var self__ = this;
var this$__$1 = this;
redditv.player.dispose.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400)));

if((entry__$1 == null)){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null));
} else {
if(cljs.core.not_EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848)),entry__$1)){
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var new_player = redditv.youtube.create_youtubeplayer.call(null,"redditv-player",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(entry__$1),event_channel);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400),new_player);
} else {
return null;
}
}
});

redditv.core.t_redditv$core42372.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42372.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return om.dom.div.call(null,({"id": "redditv-player-container"}),om.dom.div.call(null,({"id": "redditv-player"})));
});

redditv.core.t_redditv$core42372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42373","meta42373",-1044113588,null)], null);
});

redditv.core.t_redditv$core42372.cljs$lang$type = true;

redditv.core.t_redditv$core42372.cljs$lang$ctorStr = "redditv.core/t_redditv$core42372";

redditv.core.t_redditv$core42372.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42372");
});

redditv.core.__GT_t_redditv$core42372 = (function redditv$core$player_component_$___GT_t_redditv$core42372(entry__$1,owner__$1,meta42373){
return (new redditv.core.t_redditv$core42372(entry__$1,owner__$1,meta42373));
});

}

return (new redditv.core.t_redditv$core42372(entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core42489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core42489 = (function (entry,owner,meta42490){
this.entry = entry;
this.owner = owner;
this.meta42490 = meta42490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42491,meta42490__$1){
var self__ = this;
var _42491__$1 = this;
return (new redditv.core.t_redditv$core42489(self__.entry,self__.owner,meta42490__$1));
});

redditv.core.t_redditv$core42489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42491){
var self__ = this;
var _42491__$1 = this;
return self__.meta42490;
});

redditv.core.t_redditv$core42489.prototype.om$core$IDidUpdate$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42489.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,_,___$1){
var self__ = this;
var this$__$1 = this;
var selected_entry = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764));
var is_selected_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected_entry),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__30215__auto__ = self__.entry;
if(cljs.core.truth_(and__30215__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__30215__auto__;
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

redditv.core.t_redditv$core42489.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42489.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__42492){
var self__ = this;
var map__42493 = p__42492;
var map__42493__$1 = ((((!((map__42493 == null)))?((((map__42493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42493):map__42493);
var selected = cljs.core.get.call(null,map__42493__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__42493__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__30215__auto__ = self__.entry;
if(cljs.core.truth_(and__30215__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__30215__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return om.dom.div.call(null,({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__42493,map__42493__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,redditv.events.video_select.call(null,cljs.core.deref.call(null,self__.entry)));
});})(classes,___$1,map__42493,map__42493__$1,selected,selection_channel))
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.div.call(null,({"className": "entry-title noselect"}),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry)),om.dom.img.call(null,({"className": "entry-thumbnail", "src": (function (){var thumbnail = new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(self__.entry);
if(cljs.core._EQ_.call(null,thumbnail,"nsfw")){
return "http://i.imgur.com/KZOsckv.jpg";
} else {
if(cljs.core._EQ_.call(null,thumbnail,"default")){
return "http://i.imgur.com/9wEJlnk.gif";
} else {
return thumbnail;

}
}
})()}))], null));
});

redditv.core.t_redditv$core42489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42490","meta42490",-1300793774,null)], null);
});

redditv.core.t_redditv$core42489.cljs$lang$type = true;

redditv.core.t_redditv$core42489.cljs$lang$ctorStr = "redditv.core/t_redditv$core42489";

redditv.core.t_redditv$core42489.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42489");
});

redditv.core.__GT_t_redditv$core42489 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core42489(entry__$1,owner__$1,meta42490){
return (new redditv.core.t_redditv$core42489(entry__$1,owner__$1,meta42490));
});

}

return (new redditv.core.t_redditv$core42489(entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core42501 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core42501 = (function (app,owner,meta42502){
this.app = app;
this.owner = owner;
this.meta42502 = meta42502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42503,meta42502__$1){
var self__ = this;
var _42503__$1 = this;
return (new redditv.core.t_redditv$core42501(self__.app,self__.owner,meta42502__$1));
});

redditv.core.t_redditv$core42501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42503){
var self__ = this;
var _42503__$1 = this;
return self__.meta42502;
});

redditv.core.t_redditv$core42501.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42501.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__42504){
var self__ = this;
var map__42505 = p__42504;
var map__42505__$1 = ((((!((map__42505 == null)))?((((map__42505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42505):map__42505);
var selection_channel = cljs.core.get.call(null,map__42505__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return om.dom.div.call(null,({"id": "redditv-playlist-root"}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.div.call(null,({"id": "redditv-playlist-leftpane"}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.div.call(null,({"className": "button-pane", "title": "Hide Panes (not implemented)"}),redditv.icons.google_icon.call(null,"zoom_out_map")),om.dom.div.call(null,({"className": "button-pane button-pane-tall", "title": "Previous Video", "onClick": ((function (this$__$1,map__42505,map__42505__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,redditv.events.video_previous.call(null));
});})(this$__$1,map__42505,map__42505__$1,selection_channel))
}),redditv.icons.google_icon.call(null,"arrow_back"))], null)),om.dom.div.call(null,({"id": "redditv-playlist-container", "ref": "playlist-scroll-container"}),om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),om.dom.div.call(null,({"id": "redditv-playlist-rightpane"}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.div.call(null,({"className": "button-pane", "title": "Hide Playlist (not implemented)"}),redditv.icons.google_icon.call(null,"expand_more")),om.dom.div.call(null,({"className": "button-pane button-pane-tall", "title": "Next Video", "onClick": ((function (this$__$1,map__42505,map__42505__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,redditv.events.video_next.call(null));
});})(this$__$1,map__42505,map__42505__$1,selection_channel))
}),redditv.icons.google_icon.call(null,"arrow_forward"))], null))], null));
});

redditv.core.t_redditv$core42501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42502","meta42502",-386359874,null)], null);
});

redditv.core.t_redditv$core42501.cljs$lang$type = true;

redditv.core.t_redditv$core42501.cljs$lang$ctorStr = "redditv.core/t_redditv$core42501";

redditv.core.t_redditv$core42501.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42501");
});

redditv.core.__GT_t_redditv$core42501 = (function redditv$core$playlist_component_$___GT_t_redditv$core42501(app__$1,owner__$1,meta42502){
return (new redditv.core.t_redditv$core42501(app__$1,owner__$1,meta42502));
});

}

return (new redditv.core.t_redditv$core42501(app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.leftpane_component = (function redditv$core$leftpane_component(app,owner){
if(typeof redditv.core.t_redditv$core42515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core42515 = (function (app,owner,meta42516){
this.app = app;
this.owner = owner;
this.meta42516 = meta42516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42517,meta42516__$1){
var self__ = this;
var _42517__$1 = this;
return (new redditv.core.t_redditv$core42515(self__.app,self__.owner,meta42516__$1));
});

redditv.core.t_redditv$core42515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42517){
var self__ = this;
var _42517__$1 = this;
return self__.meta42516;
});

redditv.core.t_redditv$core42515.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42515.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__42518){
var self__ = this;
var map__42519 = p__42518;
var map__42519__$1 = ((((!((map__42519 == null)))?((((map__42519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42519):map__42519);
var layout_channel = cljs.core.get.call(null,map__42519__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return om.dom.div.call(null,({"className": "redditv-pane"}),om.dom.div.call(null,({"className": "button-pane", "title": "View Reddit Comments", "onClick": ((function (this$__$1,map__42519,map__42519__$1,layout_channel){
return (function (e){
var map__42521 = om.core.get_props.call(null,self__.owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var map__42521__$1 = ((((!((map__42521 == null)))?((((map__42521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42521):map__42521);
var entry = map__42521__$1;
var permalink = cljs.core.get.call(null,map__42521__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return window.open([cljs.core.str("http://www.reddit.com"),cljs.core.str(permalink)].join(''),"_blank");
});})(this$__$1,map__42519,map__42519__$1,layout_channel))
}),redditv.icons.google_icon.call(null,"comment")));
});

redditv.core.t_redditv$core42515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42516","meta42516",1630913702,null)], null);
});

redditv.core.t_redditv$core42515.cljs$lang$type = true;

redditv.core.t_redditv$core42515.cljs$lang$ctorStr = "redditv.core/t_redditv$core42515";

redditv.core.t_redditv$core42515.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42515");
});

redditv.core.__GT_t_redditv$core42515 = (function redditv$core$leftpane_component_$___GT_t_redditv$core42515(app__$1,owner__$1,meta42516){
return (new redditv.core.t_redditv$core42515(app__$1,owner__$1,meta42516));
});

}

return (new redditv.core.t_redditv$core42515(app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.rightpane_component = (function redditv$core$rightpane_component(app,owner){
if(typeof redditv.core.t_redditv$core42529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core42529 = (function (app,owner,meta42530){
this.app = app;
this.owner = owner;
this.meta42530 = meta42530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42531,meta42530__$1){
var self__ = this;
var _42531__$1 = this;
return (new redditv.core.t_redditv$core42529(self__.app,self__.owner,meta42530__$1));
});

redditv.core.t_redditv$core42529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42531){
var self__ = this;
var _42531__$1 = this;
return self__.meta42530;
});

redditv.core.t_redditv$core42529.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42529.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core42529.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42529.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__42532){
var self__ = this;
var map__42533 = p__42532;
var map__42533__$1 = ((((!((map__42533 == null)))?((((map__42533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42533):map__42533);
var layout_channel = cljs.core.get.call(null,map__42533__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var this$__$1 = this;
return om.dom.div.call(null,({"className": "redditv-pane redditv-rightpane"}),om.dom.div.call(null,({"className": "button-pane", "title": "About Redditv", "onClick": ((function (this$__$1,map__42533,map__42533__$1,layout_channel){
return (function (e){
return window.open([cljs.core.str("http://github.com/benzap/redditv")].join(''));
});})(this$__$1,map__42533,map__42533__$1,layout_channel))
}),redditv.icons.google_icon.call(null,"help")));
});

redditv.core.t_redditv$core42529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42530","meta42530",2104488312,null)], null);
});

redditv.core.t_redditv$core42529.cljs$lang$type = true;

redditv.core.t_redditv$core42529.cljs$lang$ctorStr = "redditv.core/t_redditv$core42529";

redditv.core.t_redditv$core42529.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42529");
});

redditv.core.__GT_t_redditv$core42529 = (function redditv$core$rightpane_component_$___GT_t_redditv$core42529(app__$1,owner__$1,meta42530){
return (new redditv.core.t_redditv$core42529(app__$1,owner__$1,meta42530));
});

}

return (new redditv.core.t_redditv$core42529(app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.handle_search_change = (function redditv$core$handle_search_change(e,owner,p__42535){
var map__42538 = p__42535;
var map__42538__$1 = ((((!((map__42538 == null)))?((((map__42538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42538):map__42538);
var subreddit = cljs.core.get.call(null,map__42538__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),e.target.value);
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(var_args){
var args__31342__auto__ = [];
var len__31335__auto___42565 = arguments.length;
var i__31336__auto___42566 = (0);
while(true){
if((i__31336__auto___42566 < len__31335__auto___42565)){
args__31342__auto__.push((arguments[i__31336__auto___42566]));

var G__42567 = (i__31336__auto___42566 + (1));
i__31336__auto___42566 = G__42567;
continue;
} else {
}
break;
}

var argseq__31343__auto__ = ((((2) < args__31342__auto__.length))?(new cljs.core.IndexedSeq(args__31342__auto__.slice((2)),(0),null)):null);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31343__auto__);
});

redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app,owner,p__42545){
var map__42546 = p__42545;
var map__42546__$1 = ((((!((map__42546 == null)))?((((map__42546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42546):map__42546);
var subreddit = cljs.core.get.call(null,map__42546__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(app));
var vec__42548 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__42548,(0),null);
var error_channel = cljs.core.nth.call(null,vec__42548,(1),null);
cljs.core.println.call(null,"Searching on subreddit: ",subreddit);

om.core.transact_BANG_.call(null,app,((function (vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit){
return (function (p1__42540_SHARP_){
return cljs.core.merge.call(null,p1__42540_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null], null));
});})(vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit))
);

var c__38336__auto___42568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit){
return (function (state_42556){
var state_val_42557 = (state_42556[(1)]);
if((state_val_42557 === (1))){
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42556__$1,(2),success_channel);
} else {
if((state_val_42557 === (2))){
var inst_42552 = (state_42556[(2)]);
var inst_42553 = (function (){var new_playlist = inst_42552;
return ((function (new_playlist,inst_42552,state_val_42557,c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit){
return (function (p1__42541_SHARP_){
return cljs.core.merge.call(null,p1__42541_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new_playlist,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),cljs.core.first.call(null,new_playlist)], null));
});
;})(new_playlist,inst_42552,state_val_42557,c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit))
})();
var inst_42554 = om.core.transact_BANG_.call(null,app,inst_42553);
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42556__$1,inst_42554);
} else {
return null;
}
}
});})(c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit))
;
return ((function (switch__38224__auto__,c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit){
return (function() {
var redditv$core$state_machine__38225__auto__ = null;
var redditv$core$state_machine__38225__auto____0 = (function (){
var statearr_42561 = [null,null,null,null,null,null,null];
(statearr_42561[(0)] = redditv$core$state_machine__38225__auto__);

(statearr_42561[(1)] = (1));

return statearr_42561;
});
var redditv$core$state_machine__38225__auto____1 = (function (state_42556){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_42556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e42562){if((e42562 instanceof Object)){
var ex__38228__auto__ = e42562;
var statearr_42563_42569 = state_42556;
(statearr_42563_42569[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42570 = state_42556;
state_42556 = G__42570;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
redditv$core$state_machine__38225__auto__ = function(state_42556){
switch(arguments.length){
case 0:
return redditv$core$state_machine__38225__auto____0.call(this);
case 1:
return redditv$core$state_machine__38225__auto____1.call(this,state_42556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$state_machine__38225__auto____0;
redditv$core$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$state_machine__38225__auto____1;
return redditv$core$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit))
})();
var state__38338__auto__ = (function (){var statearr_42564 = f__38337__auto__.call(null);
(statearr_42564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___42568);

return statearr_42564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___42568,vec__42548,success_channel,error_channel,map__42546,map__42546__$1,subreddit))
);


return error_channel;
});

redditv.core.update_playlist_BANG_.cljs$lang$maxFixedArity = (2);

redditv.core.update_playlist_BANG_.cljs$lang$applyTo = (function (seq42542){
var G__42543 = cljs.core.first.call(null,seq42542);
var seq42542__$1 = cljs.core.next.call(null,seq42542);
var G__42544 = cljs.core.first.call(null,seq42542__$1);
var seq42542__$2 = cljs.core.next.call(null,seq42542__$1);
return redditv.core.update_playlist_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42543,G__42544,seq42542__$2);
});

redditv.core.header_component = (function redditv$core$header_component(app,owner){
if(typeof redditv.core.t_redditv$core42581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core42581 = (function (app,owner,meta42582){
this.app = app;
this.owner = owner;
this.meta42582 = meta42582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42583,meta42582__$1){
var self__ = this;
var _42583__$1 = this;
return (new redditv.core.t_redditv$core42581(self__.app,self__.owner,meta42582__$1));
});

redditv.core.t_redditv$core42581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42583){
var self__ = this;
var _42583__$1 = this;
return self__.meta42582;
});

redditv.core.t_redditv$core42581.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42581.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos"], null);
});

redditv.core.t_redditv$core42581.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42581.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__42584){
var self__ = this;
var map__42585 = p__42584;
var map__42585__$1 = ((((!((map__42585 == null)))?((((map__42585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42585):map__42585);
var state = map__42585__$1;
var subreddit = cljs.core.get.call(null,map__42585__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var this$__$1 = this;
var map__42587 = self__.app.call(null,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var map__42587__$1 = ((((!((map__42587 == null)))?((((map__42587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42587):map__42587);
var selected = map__42587__$1;
var title = cljs.core.get.call(null,map__42587__$1,new cljs.core.Keyword(null,"title","title",636505583));
return om.dom.div.call(null,({"className": "redditv-header"}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.div.call(null,({"className": "button-pane", "title": "Search Subreddit", "style": ({"display": "inline-block"}), "onClick": ((function (map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit){
return (function (e){
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);
});})(map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit))
}),redditv.icons.google_icon.call(null,"search")),om.dom.span.call(null,null,"/r/"),om.dom.input.call(null,({"type": "text", "value": subreddit, "onChange": ((function (map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit){
return (function (p1__42571_SHARP_){
return redditv.core.handle_search_change.call(null,p1__42571_SHARP_,self__.owner,state);
});})(map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit))
, "onKeyDown": ((function (map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit){
return (function (e){
var key = e.key;
var G__42589 = key;
switch (G__42589) {
case "Enter":
om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

return redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit);

break;
default:
return null;

}
});})(map__42587,map__42587__$1,selected,title,this$__$1,map__42585,map__42585__$1,state,subreddit))
})),om.dom.span.call(null,({"id": "header-entry-title"}),title)], null));
});

redditv.core.t_redditv$core42581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42582","meta42582",-2143370276,null)], null);
});

redditv.core.t_redditv$core42581.cljs$lang$type = true;

redditv.core.t_redditv$core42581.cljs$lang$ctorStr = "redditv.core/t_redditv$core42581";

redditv.core.t_redditv$core42581.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42581");
});

redditv.core.__GT_t_redditv$core42581 = (function redditv$core$header_component_$___GT_t_redditv$core42581(app__$1,owner__$1,meta42582){
return (new redditv.core.t_redditv$core42581(app__$1,owner__$1,meta42582));
});

}

return (new redditv.core.t_redditv$core42581(app,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof redditv.core.t_redditv$core42723 !== 'undefined'){
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
redditv.core.t_redditv$core42723 = (function (app,owner,meta42724){
this.app = app;
this.owner = owner;
this.meta42724 = meta42724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core42723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42725,meta42724__$1){
var self__ = this;
var _42725__$1 = this;
return (new redditv.core.t_redditv$core42723(self__.app,self__.owner,meta42724__$1));
});

redditv.core.t_redditv$core42723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42725){
var self__ = this;
var _42725__$1 = this;
return self__.meta42724;
});

redditv.core.t_redditv$core42723.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42723.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

var event_channel = cljs.core.async.chan.call(null);
var event_bus = cljs.core.async.mult.call(null,event_channel);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),event_channel,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),event_bus,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core42723.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42723.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var event_bus = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251));
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var c__38336__auto___42855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function (state_42774){
var state_val_42775 = (state_42774[(1)]);
if((state_val_42775 === (7))){
var inst_42769 = (state_42774[(2)]);
var state_42774__$1 = (function (){var statearr_42776 = state_42774;
(statearr_42776[(7)] = inst_42769);

return statearr_42776;
})();
var statearr_42777_42856 = state_42774__$1;
(statearr_42777_42856[(2)] = null);

(statearr_42777_42856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (20))){
var inst_42762 = redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);
var state_42774__$1 = state_42774;
var statearr_42778_42857 = state_42774__$1;
(statearr_42778_42857[(2)] = inst_42762);

(statearr_42778_42857[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (1))){
var state_42774__$1 = state_42774;
var statearr_42779_42858 = state_42774__$1;
(statearr_42779_42858[(2)] = null);

(statearr_42779_42858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (4))){
var inst_42728 = (state_42774[(8)]);
var inst_42728__$1 = (state_42774[(2)]);
var inst_42729 = redditv.events.is_video_select_QMARK_.call(null,inst_42728__$1);
var state_42774__$1 = (function (){var statearr_42780 = state_42774;
(statearr_42780[(8)] = inst_42728__$1);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42729)){
var statearr_42781_42859 = state_42774__$1;
(statearr_42781_42859[(1)] = (5));

} else {
var statearr_42782_42860 = state_42774__$1;
(statearr_42782_42860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (15))){
var inst_42728 = (state_42774[(8)]);
var state_42774__$1 = state_42774;
var statearr_42783_42861 = state_42774__$1;
(statearr_42783_42861[(2)] = inst_42728);

(statearr_42783_42861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (21))){
var state_42774__$1 = state_42774;
var statearr_42784_42862 = state_42774__$1;
(statearr_42784_42862[(2)] = null);

(statearr_42784_42862[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (13))){
var inst_42744 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
var statearr_42785_42863 = state_42774__$1;
(statearr_42785_42863[(2)] = inst_42744);

(statearr_42785_42863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (22))){
var inst_42765 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
var statearr_42786_42864 = state_42774__$1;
(statearr_42786_42864[(2)] = inst_42765);

(statearr_42786_42864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (6))){
var inst_42728 = (state_42774[(8)]);
var inst_42756 = redditv.events.is_video_next_QMARK_.call(null,inst_42728);
var state_42774__$1 = state_42774;
if(cljs.core.truth_(inst_42756)){
var statearr_42787_42865 = state_42774__$1;
(statearr_42787_42865[(1)] = (17));

} else {
var statearr_42788_42866 = state_42774__$1;
(statearr_42788_42866[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (17))){
var inst_42758 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_42774__$1 = state_42774;
var statearr_42789_42867 = state_42774__$1;
(statearr_42789_42867[(2)] = inst_42758);

(statearr_42789_42867[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (3))){
var inst_42772 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42774__$1,inst_42772);
} else {
if((state_val_42775 === (12))){
var state_42774__$1 = state_42774;
var statearr_42790_42868 = state_42774__$1;
(statearr_42790_42868[(2)] = false);

(statearr_42790_42868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (2))){
var state_42774__$1 = state_42774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42774__$1,(4),selection_channel);
} else {
if((state_val_42775 === (19))){
var inst_42767 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
var statearr_42791_42869 = state_42774__$1;
(statearr_42791_42869[(2)] = inst_42767);

(statearr_42791_42869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (11))){
var state_42774__$1 = state_42774;
var statearr_42792_42870 = state_42774__$1;
(statearr_42792_42870[(2)] = true);

(statearr_42792_42870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (9))){
var state_42774__$1 = state_42774;
var statearr_42793_42871 = state_42774__$1;
(statearr_42793_42871[(2)] = false);

(statearr_42793_42871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (5))){
var inst_42728 = (state_42774[(8)]);
var inst_42733 = (inst_42728 == null);
var inst_42734 = cljs.core.not.call(null,inst_42733);
var state_42774__$1 = state_42774;
if(inst_42734){
var statearr_42794_42872 = state_42774__$1;
(statearr_42794_42872[(1)] = (8));

} else {
var statearr_42795_42873 = state_42774__$1;
(statearr_42795_42873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (14))){
var inst_42728 = (state_42774[(8)]);
var inst_42749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42728);
var state_42774__$1 = state_42774;
var statearr_42796_42874 = state_42774__$1;
(statearr_42796_42874[(2)] = inst_42749);

(statearr_42796_42874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (16))){
var inst_42752 = (state_42774[(2)]);
var inst_42753 = cljs.core.get.call(null,inst_42752,new cljs.core.Keyword(null,"entry","entry",505168823));
var inst_42754 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_42753);
var state_42774__$1 = state_42774;
var statearr_42797_42875 = state_42774__$1;
(statearr_42797_42875[(2)] = inst_42754);

(statearr_42797_42875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (10))){
var inst_42747 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
if(cljs.core.truth_(inst_42747)){
var statearr_42798_42876 = state_42774__$1;
(statearr_42798_42876[(1)] = (14));

} else {
var statearr_42799_42877 = state_42774__$1;
(statearr_42799_42877[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (18))){
var inst_42728 = (state_42774[(8)]);
var inst_42760 = redditv.events.is_video_previous_QMARK_.call(null,inst_42728);
var state_42774__$1 = state_42774;
if(cljs.core.truth_(inst_42760)){
var statearr_42800_42878 = state_42774__$1;
(statearr_42800_42878[(1)] = (20));

} else {
var statearr_42801_42879 = state_42774__$1;
(statearr_42801_42879[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (8))){
var inst_42728 = (state_42774[(8)]);
var inst_42736 = inst_42728.cljs$lang$protocol_mask$partition0$;
var inst_42737 = (inst_42736 & (64));
var inst_42738 = inst_42728.cljs$core$ISeq$;
var inst_42739 = (cljs.core.PROTOCOL_SENTINEL === inst_42738);
var inst_42740 = (inst_42737) || (inst_42739);
var state_42774__$1 = state_42774;
if(cljs.core.truth_(inst_42740)){
var statearr_42802_42880 = state_42774__$1;
(statearr_42802_42880[(1)] = (11));

} else {
var statearr_42803_42881 = state_42774__$1;
(statearr_42803_42881[(1)] = (12));

}

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
});})(c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__38224__auto__,c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__38225__auto__ = null;
var redditv$core$root_component_$_state_machine__38225__auto____0 = (function (){
var statearr_42807 = [null,null,null,null,null,null,null,null,null];
(statearr_42807[(0)] = redditv$core$root_component_$_state_machine__38225__auto__);

(statearr_42807[(1)] = (1));

return statearr_42807;
});
var redditv$core$root_component_$_state_machine__38225__auto____1 = (function (state_42774){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_42774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e42808){if((e42808 instanceof Object)){
var ex__38228__auto__ = e42808;
var statearr_42809_42882 = state_42774;
(statearr_42809_42882[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42883 = state_42774;
state_42774 = G__42883;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__38225__auto__ = function(state_42774){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__38225__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__38225__auto____1.call(this,state_42774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__38225__auto____0;
redditv$core$root_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__38225__auto____1;
return redditv$core$root_component_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
})();
var state__38338__auto__ = (function (){var statearr_42810 = f__38337__auto__.call(null);
(statearr_42810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___42855);

return statearr_42810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___42855,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
);


var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function (state_42830){
var state_val_42831 = (state_42830[(1)]);
if((state_val_42831 === (7))){
var inst_42825 = (state_42830[(2)]);
var state_42830__$1 = (function (){var statearr_42832 = state_42830;
(statearr_42832[(7)] = inst_42825);

return statearr_42832;
})();
var statearr_42833_42884 = state_42830__$1;
(statearr_42833_42884[(2)] = null);

(statearr_42833_42884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (1))){
var state_42830__$1 = state_42830;
var statearr_42834_42885 = state_42830__$1;
(statearr_42834_42885[(2)] = null);

(statearr_42834_42885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (4))){
var inst_42813 = (state_42830[(8)]);
var inst_42813__$1 = (state_42830[(2)]);
var inst_42814 = redditv.events.is_player_ended_QMARK_.call(null,inst_42813__$1);
var state_42830__$1 = (function (){var statearr_42835 = state_42830;
(statearr_42835[(8)] = inst_42813__$1);

return statearr_42835;
})();
if(cljs.core.truth_(inst_42814)){
var statearr_42836_42886 = state_42830__$1;
(statearr_42836_42886[(1)] = (5));

} else {
var statearr_42837_42887 = state_42830__$1;
(statearr_42837_42887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (6))){
var inst_42813 = (state_42830[(8)]);
var inst_42818 = redditv.events.is_player_not_started_QMARK_.call(null,inst_42813);
var state_42830__$1 = state_42830;
if(cljs.core.truth_(inst_42818)){
var statearr_42838_42888 = state_42830__$1;
(statearr_42838_42888[(1)] = (8));

} else {
var statearr_42839_42889 = state_42830__$1;
(statearr_42839_42889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (3))){
var inst_42828 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42830__$1,inst_42828);
} else {
if((state_val_42831 === (2))){
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42830__$1,(4),player_channel);
} else {
if((state_val_42831 === (9))){
var state_42830__$1 = state_42830;
var statearr_42840_42890 = state_42830__$1;
(statearr_42840_42890[(2)] = null);

(statearr_42840_42890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (5))){
var inst_42816 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_42830__$1 = state_42830;
var statearr_42841_42891 = state_42830__$1;
(statearr_42841_42891[(2)] = inst_42816);

(statearr_42841_42891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (10))){
var inst_42823 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
var statearr_42842_42892 = state_42830__$1;
(statearr_42842_42892[(2)] = inst_42823);

(statearr_42842_42892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (8))){
var inst_42820 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_42830__$1 = state_42830;
var statearr_42843_42893 = state_42830__$1;
(statearr_42843_42893[(2)] = inst_42820);

(statearr_42843_42893[(1)] = (10));


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
});})(c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
;
return ((function (switch__38224__auto__,c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__38225__auto__ = null;
var redditv$core$root_component_$_state_machine__38225__auto____0 = (function (){
var statearr_42847 = [null,null,null,null,null,null,null,null,null];
(statearr_42847[(0)] = redditv$core$root_component_$_state_machine__38225__auto__);

(statearr_42847[(1)] = (1));

return statearr_42847;
});
var redditv$core$root_component_$_state_machine__38225__auto____1 = (function (state_42830){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_42830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e42848){if((e42848 instanceof Object)){
var ex__38228__auto__ = e42848;
var statearr_42849_42894 = state_42830;
(statearr_42849_42894[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42895 = state_42830;
state_42830 = G__42895;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__38225__auto__ = function(state_42830){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__38225__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__38225__auto____1.call(this,state_42830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__38225__auto____0;
redditv$core$root_component_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__38225__auto____1;
return redditv$core$root_component_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
})();
var state__38338__auto__ = (function (){var statearr_42850 = f__38337__auto__.call(null);
(statearr_42850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_42850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__,event_channel,event_bus,selection_channel,player_channel,layout_channel,___$1))
);

return c__38336__auto__;
});

redditv.core.t_redditv$core42723.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42723.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__42851){
var self__ = this;
var map__42852 = p__42851;
var map__42852__$1 = ((((!((map__42852 == null)))?((((map__42852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42852):map__42852);
var selection_channel = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var layout_channel = cljs.core.get.call(null,map__42852__$1,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581));
var ___$1 = this;
return om.dom.div.call(null,({"className": ""}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.header_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),new cljs.core.Keyword(null,"subreddit","subreddit",-670654754).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.leftpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.rightpane_component,self__.app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel,new cljs.core.Keyword(null,"layout-channel","layout-channel",-478700581),layout_channel], null)], null))], null));
});

redditv.core.t_redditv$core42723.prototype.om$core$IDidMount$ = cljs.core.PROTOCOL_SENTINEL;

redditv.core.t_redditv$core42723.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return window.addEventListener("keydown",((function (___$1){
return (function (e){
var keycode = e.keyCode;
var G__42854 = keycode;
switch (G__42854) {
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

redditv.core.t_redditv$core42723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42724","meta42724",1950897120,null)], null);
});

redditv.core.t_redditv$core42723.cljs$lang$type = true;

redditv.core.t_redditv$core42723.cljs$lang$ctorStr = "redditv.core/t_redditv$core42723";

redditv.core.t_redditv$core42723.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"redditv.core/t_redditv$core42723");
});

redditv.core.__GT_t_redditv$core42723 = (function redditv$core$root_component_$___GT_t_redditv$core42723(app__$1,owner__$1,meta42724){
return (new redditv.core.t_redditv$core42723(app__$1,owner__$1,meta42724));
});

}

return (new redditv.core.t_redditv$core42723(app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
