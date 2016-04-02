// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.core');
goog.require('cljs.core');
goog.require('redditv.youtube');
goog.require('redditv.player');
goog.require('om.dom');
goog.require('redditv.reddit');
goog.require('cljs.core.async');
goog.require('redditv.icons');
goog.require('om.core');
goog.require('redditv.utils');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof redditv.core.app_state !== 'undefined'){
} else {
redditv.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos",new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null,new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-leftpane","toggle-leftpane",-1058266704),true,new cljs.core.Keyword(null,"toggle-rightpane","toggle-rightpane",-1778219183),true,new cljs.core.Keyword(null,"toggle-playlist","toggle-playlist",1644818800),true], null)], null));
}
redditv.core.player_component = (function redditv$core$player_component(entry,owner){
if(typeof redditv.core.t_redditv$core29980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core29980 = (function (player_component,entry,owner,meta29981){
this.player_component = player_component;
this.entry = entry;
this.owner = owner;
this.meta29981 = meta29981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29982,meta29981__$1){
var self__ = this;
var _29982__$1 = this;
return (new redditv.core.t_redditv$core29980(self__.player_component,self__.entry,self__.owner,meta29981__$1));
});

redditv.core.t_redditv$core29980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29982){
var self__ = this;
var _29982__$1 = this;
return self__.meta29981;
});

redditv.core.t_redditv$core29980.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29980.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core29980.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core29980.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__,event_channel,player_channel,this$__$1){
return (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_30001 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_30001)){
var statearr_30027_30062 = state_30025__$1;
(statearr_30027_30062[(1)] = (11));

} else {
var statearr_30028_30063 = state_30025__$1;
(statearr_30028_30063[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var state_30025__$1 = state_30025;
var statearr_30029_30064 = state_30025__$1;
(statearr_30029_30064[(2)] = null);

(statearr_30029_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29986 = (state_30025[(7)]);
var inst_29986__$1 = (state_30025[(2)]);
var inst_29988 = (inst_29986__$1 == null);
var inst_29989 = cljs.core.not.call(null,inst_29988);
var state_30025__$1 = (function (){var statearr_30030 = state_30025;
(statearr_30030[(7)] = inst_29986__$1);

return statearr_30030;
})();
if(inst_29989){
var statearr_30031_30065 = state_30025__$1;
(statearr_30031_30065[(1)] = (5));

} else {
var statearr_30032_30066 = state_30025__$1;
(statearr_30032_30066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (15))){
var inst_30008 = cljs.core.println.call(null,"Video Playing");
var state_30025__$1 = state_30025;
var statearr_30033_30067 = state_30025__$1;
(statearr_30033_30067[(2)] = inst_30008);

(statearr_30033_30067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (13))){
var inst_30006 = (state_30025[(8)]);
var inst_30006__$1 = (state_30025[(2)]);
var inst_30007 = cljs.core.get.call(null,inst_30006__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_30025__$1 = (function (){var statearr_30034 = state_30025;
(statearr_30034[(8)] = inst_30006__$1);

return statearr_30034;
})();
var G__30035_30068 = (((inst_30007 instanceof cljs.core.Keyword))?inst_30007.fqn:null);
switch (G__30035_30068) {
case "video-playing":
var statearr_30036_30070 = state_30025__$1;
(statearr_30036_30070[(1)] = (15));


break;
case "video-paused":
var statearr_30037_30071 = state_30025__$1;
(statearr_30037_30071[(1)] = (16));


break;
case "video-buffering":
var statearr_30038_30072 = state_30025__$1;
(statearr_30038_30072[(1)] = (17));


break;
case "video-ended":
var statearr_30039_30073 = state_30025__$1;
(statearr_30039_30073[(1)] = (18));


break;
case "video-not-started":
var statearr_30040_30074 = state_30025__$1;
(statearr_30040_30074[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_30007)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var state_30025__$1 = state_30025;
var statearr_30041_30075 = state_30025__$1;
(statearr_30041_30075[(2)] = false);

(statearr_30041_30075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (17))){
var inst_30012 = cljs.core.println.call(null,"Video Buffering");
var state_30025__$1 = state_30025;
var statearr_30042_30076 = state_30025__$1;
(statearr_30042_30076[(2)] = inst_30012);

(statearr_30042_30076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (12))){
var inst_29986 = (state_30025[(7)]);
var state_30025__$1 = state_30025;
var statearr_30043_30077 = state_30025__$1;
(statearr_30043_30077[(2)] = inst_29986);

(statearr_30043_30077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(4),event_channel);
} else {
if((state_val_30026 === (19))){
var inst_30016 = cljs.core.println.call(null,"Video Not Started");
var state_30025__$1 = state_30025;
var statearr_30044_30078 = state_30025__$1;
(statearr_30044_30078[(2)] = inst_30016);

(statearr_30044_30078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (11))){
var inst_29986 = (state_30025[(7)]);
var inst_30003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29986);
var state_30025__$1 = state_30025;
var statearr_30045_30079 = state_30025__$1;
(statearr_30045_30079[(2)] = inst_30003);

(statearr_30045_30079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var state_30025__$1 = state_30025;
var statearr_30046_30080 = state_30025__$1;
(statearr_30046_30080[(2)] = false);

(statearr_30046_30080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_29986 = (state_30025[(7)]);
var inst_29991 = inst_29986.cljs$lang$protocol_mask$partition0$;
var inst_29992 = (inst_29991 & (64));
var inst_29993 = inst_29986.cljs$core$ISeq$;
var inst_29994 = (inst_29992) || (inst_29993);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29994)){
var statearr_30047_30081 = state_30025__$1;
(statearr_30047_30081[(1)] = (8));

} else {
var statearr_30048_30082 = state_30025__$1;
(statearr_30048_30082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (14))){
var inst_30006 = (state_30025[(8)]);
var inst_30019 = (state_30025[(2)]);
var inst_30020 = cljs.core.async.put_BANG_.call(null,player_channel,inst_30006);
var state_30025__$1 = (function (){var statearr_30049 = state_30025;
(statearr_30049[(9)] = inst_30020);

(statearr_30049[(10)] = inst_30019);

return statearr_30049;
})();
var statearr_30050_30083 = state_30025__$1;
(statearr_30050_30083[(2)] = null);

(statearr_30050_30083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (16))){
var inst_30010 = cljs.core.println.call(null,"Video Paused");
var state_30025__$1 = state_30025;
var statearr_30051_30084 = state_30025__$1;
(statearr_30051_30084[(2)] = inst_30010);

(statearr_30051_30084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_29998 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30052_30085 = state_30025__$1;
(statearr_30052_30085[(2)] = inst_29998);

(statearr_30052_30085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (18))){
var inst_30014 = cljs.core.println.call(null,"Video Ended");
var state_30025__$1 = state_30025;
var statearr_30053_30086 = state_30025__$1;
(statearr_30053_30086[(2)] = inst_30014);

(statearr_30053_30086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var state_30025__$1 = state_30025;
var statearr_30054_30087 = state_30025__$1;
(statearr_30054_30087[(2)] = true);

(statearr_30054_30087[(1)] = (10));


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
});})(c__27014__auto__,event_channel,player_channel,this$__$1))
;
return ((function (switch__26902__auto__,c__27014__auto__,event_channel,player_channel,this$__$1){
return (function() {
var redditv$core$player_component_$_state_machine__26903__auto__ = null;
var redditv$core$player_component_$_state_machine__26903__auto____0 = (function (){
var statearr_30058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30058[(0)] = redditv$core$player_component_$_state_machine__26903__auto__);

(statearr_30058[(1)] = (1));

return statearr_30058;
});
var redditv$core$player_component_$_state_machine__26903__auto____1 = (function (state_30025){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e30059){if((e30059 instanceof Object)){
var ex__26906__auto__ = e30059;
var statearr_30060_30088 = state_30025;
(statearr_30060_30088[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30089 = state_30025;
state_30025 = G__30089;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__26903__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__26903__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__26903__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__26903__auto____0;
redditv$core$player_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__26903__auto____1;
return redditv$core$player_component_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__,event_channel,player_channel,this$__$1))
})();
var state__27016__auto__ = (function (){var statearr_30061 = f__27015__auto__.call(null);
(statearr_30061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__,event_channel,player_channel,this$__$1))
);

return c__27014__auto__;
});

redditv.core.t_redditv$core29980.prototype.om$core$IWillReceiveProps$ = true;

redditv.core.t_redditv$core29980.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
var self__ = this;
var this$__$1 = this;
redditv.player.dispose.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400)));

if((entry__$1 == null)){
return null;
} else {
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var new_player = redditv.youtube.create_youtubeplayer.call(null,"redditv-player",new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(entry__$1),event_channel);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"player","player",-97687400),new_player);
}
});

redditv.core.t_redditv$core29980.prototype.om$core$IRender$ = true;

redditv.core.t_redditv$core29980.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "redditv-player-container"},om.util.force_children.call(null,React.DOM.div({"id": "redditv-player"})));
});

redditv.core.t_redditv$core29980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"player-component","player-component",62883179,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29981","meta29981",1055724073,null)], null);
});

redditv.core.t_redditv$core29980.cljs$lang$type = true;

redditv.core.t_redditv$core29980.cljs$lang$ctorStr = "redditv.core/t_redditv$core29980";

redditv.core.t_redditv$core29980.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29980");
});

redditv.core.__GT_t_redditv$core29980 = (function redditv$core$player_component_$___GT_t_redditv$core29980(player_component__$1,entry__$1,owner__$1,meta29981){
return (new redditv.core.t_redditv$core29980(player_component__$1,entry__$1,owner__$1,meta29981));
});

}

return (new redditv.core.t_redditv$core29980(redditv$core$player_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core30096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core30096 = (function (playlist_entry_component,entry,owner,meta30097){
this.playlist_entry_component = playlist_entry_component;
this.entry = entry;
this.owner = owner;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30098,meta30097__$1){
var self__ = this;
var _30098__$1 = this;
return (new redditv.core.t_redditv$core30096(self__.playlist_entry_component,self__.entry,self__.owner,meta30097__$1));
});

redditv.core.t_redditv$core30096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30098){
var self__ = this;
var _30098__$1 = this;
return self__.meta30097;
});

redditv.core.t_redditv$core30096.prototype.om$core$IDidUpdate$ = true;

redditv.core.t_redditv$core30096.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,_,___$1){
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

redditv.core.t_redditv$core30096.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core30096.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30099){
var self__ = this;
var map__30100 = p__30099;
var map__30100__$1 = ((((!((map__30100 == null)))?((((map__30100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30100):map__30100);
var selected = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__30100__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return React.DOM.div({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__30100,map__30100__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-select","video-select",775569479),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.deref.call(null,self__.entry)], null));
});})(classes,___$1,map__30100,map__30100__$1,selected,selection_channel))
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

redditv.core.t_redditv$core30096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-entry-component","playlist-entry-component",-254938373,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30097","meta30097",-276448642,null)], null);
});

redditv.core.t_redditv$core30096.cljs$lang$type = true;

redditv.core.t_redditv$core30096.cljs$lang$ctorStr = "redditv.core/t_redditv$core30096";

redditv.core.t_redditv$core30096.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core30096");
});

redditv.core.__GT_t_redditv$core30096 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core30096(playlist_entry_component__$1,entry__$1,owner__$1,meta30097){
return (new redditv.core.t_redditv$core30096(playlist_entry_component__$1,entry__$1,owner__$1,meta30097));
});

}

return (new redditv.core.t_redditv$core30096(redditv$core$playlist_entry_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core30108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core30108 = (function (playlist_component,app,owner,meta30109){
this.playlist_component = playlist_component;
this.app = app;
this.owner = owner;
this.meta30109 = meta30109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core30108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30110,meta30109__$1){
var self__ = this;
var _30110__$1 = this;
return (new redditv.core.t_redditv$core30108(self__.playlist_component,self__.app,self__.owner,meta30109__$1));
});

redditv.core.t_redditv$core30108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30110){
var self__ = this;
var _30110__$1 = this;
return self__.meta30109;
});

redditv.core.t_redditv$core30108.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core30108.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__30111){
var self__ = this;
var map__30112 = p__30111;
var map__30112__$1 = ((((!((map__30112 == null)))?((((map__30112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30112):map__30112);
var selection_channel = cljs.core.get.call(null,map__30112__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return React.DOM.div({"id": "redditv-playlist-root"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"id": "redditv-playlist-leftpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Panes (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"zoom_out_map"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Previous Video", "onClick": ((function (this$__$1,map__30112,map__30112__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null));
});})(this$__$1,map__30112,map__30112__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_back")))], null))),React.DOM.div({"id": "redditv-playlist-container", "ref": "playlist-scroll-container"},om.util.force_children.call(null,om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.div({"id": "redditv-playlist-rightpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Playlist (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"expand_more"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Next Video", "onClick": ((function (this$__$1,map__30112,map__30112__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null));
});})(this$__$1,map__30112,map__30112__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_forward")))], null)))], null)));
});

redditv.core.t_redditv$core30108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-component","playlist-component",362561540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30109","meta30109",866476337,null)], null);
});

redditv.core.t_redditv$core30108.cljs$lang$type = true;

redditv.core.t_redditv$core30108.cljs$lang$ctorStr = "redditv.core/t_redditv$core30108";

redditv.core.t_redditv$core30108.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core30108");
});

redditv.core.__GT_t_redditv$core30108 = (function redditv$core$playlist_component_$___GT_t_redditv$core30108(playlist_component__$1,app__$1,owner__$1,meta30109){
return (new redditv.core.t_redditv$core30108(playlist_component__$1,app__$1,owner__$1,meta30109));
});

}

return (new redditv.core.t_redditv$core30108(redditv$core$playlist_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.navigation_component = (function redditv$core$navigation_component(app,owner){
if(typeof redditv.core.t_redditv$core30117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core30117 = (function (navigation_component,app,owner,meta30118){
this.navigation_component = navigation_component;
this.app = app;
this.owner = owner;
this.meta30118 = meta30118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core30117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30119,meta30118__$1){
var self__ = this;
var _30119__$1 = this;
return (new redditv.core.t_redditv$core30117(self__.navigation_component,self__.app,self__.owner,meta30118__$1));
});

redditv.core.t_redditv$core30117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30119){
var self__ = this;
var _30119__$1 = this;
return self__.meta30118;
});

redditv.core.t_redditv$core30117.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core30117.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core30117.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core30117.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.core.t_redditv$core30117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"navigation-component","navigation-component",2008619679,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30118","meta30118",597482900,null)], null);
});

redditv.core.t_redditv$core30117.cljs$lang$type = true;

redditv.core.t_redditv$core30117.cljs$lang$ctorStr = "redditv.core/t_redditv$core30117";

redditv.core.t_redditv$core30117.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core30117");
});

redditv.core.__GT_t_redditv$core30117 = (function redditv$core$navigation_component_$___GT_t_redditv$core30117(navigation_component__$1,app__$1,owner__$1,meta30118){
return (new redditv.core.t_redditv$core30117(navigation_component__$1,app__$1,owner__$1,meta30118));
});

}

return (new redditv.core.t_redditv$core30117(redditv$core$navigation_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(app,owner){
var subreddit = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var vec__30147 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__30147,(0),null);
var error_channel = cljs.core.nth.call(null,vec__30147,(1),null);
var c__27014__auto___30174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel){
return (function (state_30159){
var state_val_30160 = (state_30159[(1)]);
if((state_val_30160 === (1))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30159__$1,(2),success_channel);
} else {
if((state_val_30160 === (2))){
var inst_30149 = (state_30159[(2)]);
var inst_30150 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var state_30159__$1 = (function (){var statearr_30161 = state_30159;
(statearr_30161[(7)] = inst_30149);

return statearr_30161;
})();
if(cljs.core.truth_(inst_30150)){
var statearr_30162_30175 = state_30159__$1;
(statearr_30162_30175[(1)] = (3));

} else {
var statearr_30163_30176 = state_30159__$1;
(statearr_30163_30176[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (3))){
var state_30159__$1 = state_30159;
var statearr_30164_30177 = state_30159__$1;
(statearr_30164_30177[(2)] = null);

(statearr_30164_30177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (4))){
var inst_30149 = (state_30159[(7)]);
var inst_30153 = cljs.core.first.call(null,inst_30149);
var inst_30154 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_30153);
var state_30159__$1 = state_30159;
var statearr_30165_30178 = state_30159__$1;
(statearr_30165_30178[(2)] = inst_30154);

(statearr_30165_30178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30160 === (5))){
var inst_30149 = (state_30159[(7)]);
var inst_30156 = (state_30159[(2)]);
var inst_30157 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist","playlist",1952276871),inst_30149);
var state_30159__$1 = (function (){var statearr_30166 = state_30159;
(statearr_30166[(8)] = inst_30156);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30159__$1,inst_30157);
} else {
return null;
}
}
}
}
}
});})(c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel))
;
return ((function (switch__26902__auto__,c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel){
return (function() {
var redditv$core$update_playlist_BANG__$_state_machine__26903__auto__ = null;
var redditv$core$update_playlist_BANG__$_state_machine__26903__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null,null,null];
(statearr_30170[(0)] = redditv$core$update_playlist_BANG__$_state_machine__26903__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var redditv$core$update_playlist_BANG__$_state_machine__26903__auto____1 = (function (state_30159){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_30159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e30171){if((e30171 instanceof Object)){
var ex__26906__auto__ = e30171;
var statearr_30172_30179 = state_30159;
(statearr_30172_30179[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30180 = state_30159;
state_30159 = G__30180;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
redditv$core$update_playlist_BANG__$_state_machine__26903__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return redditv$core$update_playlist_BANG__$_state_machine__26903__auto____0.call(this);
case 1:
return redditv$core$update_playlist_BANG__$_state_machine__26903__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$update_playlist_BANG__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$update_playlist_BANG__$_state_machine__26903__auto____0;
redditv$core$update_playlist_BANG__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$update_playlist_BANG__$_state_machine__26903__auto____1;
return redditv$core$update_playlist_BANG__$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel))
})();
var state__27016__auto__ = (function (){var statearr_30173 = f__27015__auto__.call(null);
(statearr_30173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___30174);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___30174,subreddit,vec__30147,success_channel,error_channel))
);


return error_channel;
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
if(typeof redditv.core.t_redditv$core30362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core30362 = (function (root_component,app,owner,meta30363){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta30363 = meta30363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core30362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30364,meta30363__$1){
var self__ = this;
var _30364__$1 = this;
return (new redditv.core.t_redditv$core30362(self__.root_component,self__.app,self__.owner,meta30363__$1));
});

redditv.core.t_redditv$core30362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30364){
var self__ = this;
var _30364__$1 = this;
return self__.meta30363;
});

redditv.core.t_redditv$core30362.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core30362.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core30362.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core30362.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__27014__auto___30543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___30543,selection_channel,player_channel,___$1){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___30543,selection_channel,player_channel,___$1){
return (function (state_30425){
var state_val_30426 = (state_30425[(1)]);
if((state_val_30426 === (7))){
var inst_30383 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30383)){
var statearr_30427_30544 = state_30425__$1;
(statearr_30427_30544[(1)] = (11));

} else {
var statearr_30428_30545 = state_30425__$1;
(statearr_30428_30545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (20))){
var state_30425__$1 = state_30425;
var statearr_30429_30546 = state_30425__$1;
(statearr_30429_30546[(2)] = false);

(statearr_30429_30546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (27))){
var state_30425__$1 = state_30425;
var statearr_30430_30547 = state_30425__$1;
(statearr_30430_30547[(2)] = null);

(statearr_30430_30547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (1))){
var state_30425__$1 = state_30425;
var statearr_30431_30548 = state_30425__$1;
(statearr_30431_30548[(2)] = null);

(statearr_30431_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (24))){
var inst_30410 = (state_30425[(2)]);
var inst_30411 = cljs.core.get.call(null,inst_30410,new cljs.core.Keyword(null,"entry","entry",505168823));
var inst_30412 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_30411);
var state_30425__$1 = state_30425;
var statearr_30432_30549 = state_30425__$1;
(statearr_30432_30549[(2)] = inst_30412);

(statearr_30432_30549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (4))){
var inst_30368 = (state_30425[(7)]);
var inst_30368__$1 = (state_30425[(2)]);
var inst_30370 = (inst_30368__$1 == null);
var inst_30371 = cljs.core.not.call(null,inst_30370);
var state_30425__$1 = (function (){var statearr_30433 = state_30425;
(statearr_30433[(7)] = inst_30368__$1);

return statearr_30433;
})();
if(inst_30371){
var statearr_30434_30550 = state_30425__$1;
(statearr_30434_30550[(1)] = (5));

} else {
var statearr_30435_30551 = state_30425__$1;
(statearr_30435_30551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (15))){
var inst_30388 = (state_30425[(8)]);
var inst_30392 = (inst_30388 == null);
var inst_30393 = cljs.core.not.call(null,inst_30392);
var state_30425__$1 = state_30425;
if(inst_30393){
var statearr_30436_30552 = state_30425__$1;
(statearr_30436_30552[(1)] = (16));

} else {
var statearr_30437_30553 = state_30425__$1;
(statearr_30437_30553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (21))){
var inst_30402 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30438_30554 = state_30425__$1;
(statearr_30438_30554[(2)] = inst_30402);

(statearr_30438_30554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (13))){
var inst_30388 = (state_30425[(8)]);
var inst_30388__$1 = (state_30425[(2)]);
var inst_30389 = cljs.core.get.call(null,inst_30388__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_30425__$1 = (function (){var statearr_30439 = state_30425;
(statearr_30439[(8)] = inst_30388__$1);

return statearr_30439;
})();
var G__30440_30555 = (((inst_30389 instanceof cljs.core.Keyword))?inst_30389.fqn:null);
switch (G__30440_30555) {
case "video-select":
var statearr_30441_30557 = state_30425__$1;
(statearr_30441_30557[(1)] = (15));


break;
case "video-next":
var statearr_30442_30558 = state_30425__$1;
(statearr_30442_30558[(1)] = (25));


break;
case "video-previous":
var statearr_30443_30559 = state_30425__$1;
(statearr_30443_30559[(1)] = (26));


break;
default:
var statearr_30444_30560 = state_30425__$1;
(statearr_30444_30560[(1)] = (27));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (22))){
var inst_30388 = (state_30425[(8)]);
var inst_30407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30388);
var state_30425__$1 = state_30425;
var statearr_30445_30561 = state_30425__$1;
(statearr_30445_30561[(2)] = inst_30407);

(statearr_30445_30561[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (6))){
var state_30425__$1 = state_30425;
var statearr_30446_30562 = state_30425__$1;
(statearr_30446_30562[(2)] = false);

(statearr_30446_30562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (25))){
var inst_30414 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_30425__$1 = state_30425;
var statearr_30447_30563 = state_30425__$1;
(statearr_30447_30563[(2)] = inst_30414);

(statearr_30447_30563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (17))){
var state_30425__$1 = state_30425;
var statearr_30448_30564 = state_30425__$1;
(statearr_30448_30564[(2)] = false);

(statearr_30448_30564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (3))){
var inst_30423 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30425__$1,inst_30423);
} else {
if((state_val_30426 === (12))){
var inst_30368 = (state_30425[(7)]);
var state_30425__$1 = state_30425;
var statearr_30449_30565 = state_30425__$1;
(statearr_30449_30565[(2)] = inst_30368);

(statearr_30449_30565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (2))){
var state_30425__$1 = state_30425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30425__$1,(4),selection_channel);
} else {
if((state_val_30426 === (23))){
var inst_30388 = (state_30425[(8)]);
var state_30425__$1 = state_30425;
var statearr_30450_30566 = state_30425__$1;
(statearr_30450_30566[(2)] = inst_30388);

(statearr_30450_30566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (19))){
var state_30425__$1 = state_30425;
var statearr_30451_30567 = state_30425__$1;
(statearr_30451_30567[(2)] = true);

(statearr_30451_30567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (11))){
var inst_30368 = (state_30425[(7)]);
var inst_30385 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30368);
var state_30425__$1 = state_30425;
var statearr_30452_30568 = state_30425__$1;
(statearr_30452_30568[(2)] = inst_30385);

(statearr_30452_30568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (9))){
var state_30425__$1 = state_30425;
var statearr_30453_30569 = state_30425__$1;
(statearr_30453_30569[(2)] = false);

(statearr_30453_30569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (5))){
var inst_30368 = (state_30425[(7)]);
var inst_30373 = inst_30368.cljs$lang$protocol_mask$partition0$;
var inst_30374 = (inst_30373 & (64));
var inst_30375 = inst_30368.cljs$core$ISeq$;
var inst_30376 = (inst_30374) || (inst_30375);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30376)){
var statearr_30454_30570 = state_30425__$1;
(statearr_30454_30570[(1)] = (8));

} else {
var statearr_30455_30571 = state_30425__$1;
(statearr_30455_30571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (14))){
var inst_30420 = (state_30425[(2)]);
var state_30425__$1 = (function (){var statearr_30456 = state_30425;
(statearr_30456[(9)] = inst_30420);

return statearr_30456;
})();
var statearr_30457_30572 = state_30425__$1;
(statearr_30457_30572[(2)] = null);

(statearr_30457_30572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (26))){
var inst_30416 = redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);
var state_30425__$1 = state_30425;
var statearr_30458_30573 = state_30425__$1;
(statearr_30458_30573[(2)] = inst_30416);

(statearr_30458_30573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (16))){
var inst_30388 = (state_30425[(8)]);
var inst_30395 = inst_30388.cljs$lang$protocol_mask$partition0$;
var inst_30396 = (inst_30395 & (64));
var inst_30397 = inst_30388.cljs$core$ISeq$;
var inst_30398 = (inst_30396) || (inst_30397);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30398)){
var statearr_30459_30574 = state_30425__$1;
(statearr_30459_30574[(1)] = (19));

} else {
var statearr_30460_30575 = state_30425__$1;
(statearr_30460_30575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (10))){
var inst_30380 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
var statearr_30461_30576 = state_30425__$1;
(statearr_30461_30576[(2)] = inst_30380);

(statearr_30461_30576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (18))){
var inst_30405 = (state_30425[(2)]);
var state_30425__$1 = state_30425;
if(cljs.core.truth_(inst_30405)){
var statearr_30462_30577 = state_30425__$1;
(statearr_30462_30577[(1)] = (22));

} else {
var statearr_30463_30578 = state_30425__$1;
(statearr_30463_30578[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30426 === (8))){
var state_30425__$1 = state_30425;
var statearr_30464_30579 = state_30425__$1;
(statearr_30464_30579[(2)] = true);

(statearr_30464_30579[(1)] = (10));


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
});})(c__27014__auto___30543,selection_channel,player_channel,___$1))
;
return ((function (switch__26902__auto__,c__27014__auto___30543,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__26903__auto__ = null;
var redditv$core$root_component_$_state_machine__26903__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = redditv$core$root_component_$_state_machine__26903__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var redditv$core$root_component_$_state_machine__26903__auto____1 = (function (state_30425){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_30425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e30469){if((e30469 instanceof Object)){
var ex__26906__auto__ = e30469;
var statearr_30470_30580 = state_30425;
(statearr_30470_30580[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30581 = state_30425;
state_30425 = G__30581;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__26903__auto__ = function(state_30425){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__26903__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__26903__auto____1.call(this,state_30425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__26903__auto____0;
redditv$core$root_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__26903__auto____1;
return redditv$core$root_component_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___30543,selection_channel,player_channel,___$1))
})();
var state__27016__auto__ = (function (){var statearr_30471 = f__27015__auto__.call(null);
(statearr_30471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___30543);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___30543,selection_channel,player_channel,___$1))
);


var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__,selection_channel,player_channel,___$1){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__,selection_channel,player_channel,___$1){
return (function (state_30508){
var state_val_30509 = (state_30508[(1)]);
if((state_val_30509 === (7))){
var inst_30490 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
if(cljs.core.truth_(inst_30490)){
var statearr_30510_30582 = state_30508__$1;
(statearr_30510_30582[(1)] = (11));

} else {
var statearr_30511_30583 = state_30508__$1;
(statearr_30511_30583[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (1))){
var state_30508__$1 = state_30508;
var statearr_30512_30584 = state_30508__$1;
(statearr_30512_30584[(2)] = null);

(statearr_30512_30584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (4))){
var inst_30475 = (state_30508[(7)]);
var inst_30475__$1 = (state_30508[(2)]);
var inst_30477 = (inst_30475__$1 == null);
var inst_30478 = cljs.core.not.call(null,inst_30477);
var state_30508__$1 = (function (){var statearr_30513 = state_30508;
(statearr_30513[(7)] = inst_30475__$1);

return statearr_30513;
})();
if(inst_30478){
var statearr_30514_30585 = state_30508__$1;
(statearr_30514_30585[(1)] = (5));

} else {
var statearr_30515_30586 = state_30508__$1;
(statearr_30515_30586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (15))){
var inst_30497 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_30508__$1 = state_30508;
var statearr_30516_30587 = state_30508__$1;
(statearr_30516_30587[(2)] = inst_30497);

(statearr_30516_30587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (13))){
var inst_30495 = (state_30508[(2)]);
var inst_30496 = cljs.core.get.call(null,inst_30495,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_30508__$1 = state_30508;
var G__30517_30588 = (((inst_30496 instanceof cljs.core.Keyword))?inst_30496.fqn:null);
switch (G__30517_30588) {
case "video-ended":
var statearr_30518_30590 = state_30508__$1;
(statearr_30518_30590[(1)] = (15));


break;
case "video-not-started":
var statearr_30519_30591 = state_30508__$1;
(statearr_30519_30591[(1)] = (16));


break;
default:
var statearr_30520_30592 = state_30508__$1;
(statearr_30520_30592[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (6))){
var state_30508__$1 = state_30508;
var statearr_30521_30593 = state_30508__$1;
(statearr_30521_30593[(2)] = false);

(statearr_30521_30593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (17))){
var state_30508__$1 = state_30508;
var statearr_30522_30594 = state_30508__$1;
(statearr_30522_30594[(2)] = null);

(statearr_30522_30594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (3))){
var inst_30506 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30508__$1,inst_30506);
} else {
if((state_val_30509 === (12))){
var inst_30475 = (state_30508[(7)]);
var state_30508__$1 = state_30508;
var statearr_30523_30595 = state_30508__$1;
(statearr_30523_30595[(2)] = inst_30475);

(statearr_30523_30595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (2))){
var state_30508__$1 = state_30508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30508__$1,(4),player_channel);
} else {
if((state_val_30509 === (11))){
var inst_30475 = (state_30508[(7)]);
var inst_30492 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30475);
var state_30508__$1 = state_30508;
var statearr_30524_30596 = state_30508__$1;
(statearr_30524_30596[(2)] = inst_30492);

(statearr_30524_30596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (9))){
var state_30508__$1 = state_30508;
var statearr_30525_30597 = state_30508__$1;
(statearr_30525_30597[(2)] = false);

(statearr_30525_30597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (5))){
var inst_30475 = (state_30508[(7)]);
var inst_30480 = inst_30475.cljs$lang$protocol_mask$partition0$;
var inst_30481 = (inst_30480 & (64));
var inst_30482 = inst_30475.cljs$core$ISeq$;
var inst_30483 = (inst_30481) || (inst_30482);
var state_30508__$1 = state_30508;
if(cljs.core.truth_(inst_30483)){
var statearr_30526_30598 = state_30508__$1;
(statearr_30526_30598[(1)] = (8));

} else {
var statearr_30527_30599 = state_30508__$1;
(statearr_30527_30599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (14))){
var inst_30503 = (state_30508[(2)]);
var state_30508__$1 = (function (){var statearr_30528 = state_30508;
(statearr_30528[(8)] = inst_30503);

return statearr_30528;
})();
var statearr_30529_30600 = state_30508__$1;
(statearr_30529_30600[(2)] = null);

(statearr_30529_30600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (16))){
var inst_30499 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_30508__$1 = state_30508;
var statearr_30530_30601 = state_30508__$1;
(statearr_30530_30601[(2)] = inst_30499);

(statearr_30530_30601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (10))){
var inst_30487 = (state_30508[(2)]);
var state_30508__$1 = state_30508;
var statearr_30531_30602 = state_30508__$1;
(statearr_30531_30602[(2)] = inst_30487);

(statearr_30531_30602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30509 === (8))){
var state_30508__$1 = state_30508;
var statearr_30532_30603 = state_30508__$1;
(statearr_30532_30603[(2)] = true);

(statearr_30532_30603[(1)] = (10));


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
});})(c__27014__auto__,selection_channel,player_channel,___$1))
;
return ((function (switch__26902__auto__,c__27014__auto__,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__26903__auto__ = null;
var redditv$core$root_component_$_state_machine__26903__auto____0 = (function (){
var statearr_30536 = [null,null,null,null,null,null,null,null,null];
(statearr_30536[(0)] = redditv$core$root_component_$_state_machine__26903__auto__);

(statearr_30536[(1)] = (1));

return statearr_30536;
});
var redditv$core$root_component_$_state_machine__26903__auto____1 = (function (state_30508){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_30508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e30537){if((e30537 instanceof Object)){
var ex__26906__auto__ = e30537;
var statearr_30538_30604 = state_30508;
(statearr_30538_30604[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30605 = state_30508;
state_30508 = G__30605;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__26903__auto__ = function(state_30508){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__26903__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__26903__auto____1.call(this,state_30508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__26903__auto____0;
redditv$core$root_component_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__26903__auto____1;
return redditv$core$root_component_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__,selection_channel,player_channel,___$1))
})();
var state__27016__auto__ = (function (){var statearr_30539 = f__27015__auto__.call(null);
(statearr_30539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_30539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__,selection_channel,player_channel,___$1))
);

return c__27014__auto__;
});

redditv.core.t_redditv$core30362.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core30362.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30540){
var self__ = this;
var map__30541 = p__30540;
var map__30541__$1 = ((((!((map__30541 == null)))?((((map__30541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30541):map__30541);
var selection_channel = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var ___$1 = this;
return React.DOM.div({"className": ""},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null)], null)),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null)], null))], null)));
});

redditv.core.t_redditv$core30362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30363","meta30363",1457652003,null)], null);
});

redditv.core.t_redditv$core30362.cljs$lang$type = true;

redditv.core.t_redditv$core30362.cljs$lang$ctorStr = "redditv.core/t_redditv$core30362";

redditv.core.t_redditv$core30362.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core30362");
});

redditv.core.__GT_t_redditv$core30362 = (function redditv$core$root_component_$___GT_t_redditv$core30362(root_component__$1,app__$1,owner__$1,meta30363){
return (new redditv.core.t_redditv$core30362(root_component__$1,app__$1,owner__$1,meta30363));
});

}

return (new redditv.core.t_redditv$core30362(redditv$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
