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
if(typeof redditv.core.t_redditv$core28684 !== 'undefined'){
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
redditv.core.t_redditv$core28684 = (function (player_component,entry,owner,meta28685){
this.player_component = player_component;
this.entry = entry;
this.owner = owner;
this.meta28685 = meta28685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28686,meta28685__$1){
var self__ = this;
var _28686__$1 = this;
return (new redditv.core.t_redditv$core28684(self__.player_component,self__.entry,self__.owner,meta28685__$1));
});

redditv.core.t_redditv$core28684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28686){
var self__ = this;
var _28686__$1 = this;
return self__.meta28685;
});

redditv.core.t_redditv$core28684.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28684.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core28684.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core28684.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__25920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto__,event_channel,player_channel,this$__$1){
return (function (state_28729){
var state_val_28730 = (state_28729[(1)]);
if((state_val_28730 === (7))){
var inst_28705 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
if(cljs.core.truth_(inst_28705)){
var statearr_28731_28766 = state_28729__$1;
(statearr_28731_28766[(1)] = (11));

} else {
var statearr_28732_28767 = state_28729__$1;
(statearr_28732_28767[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (1))){
var state_28729__$1 = state_28729;
var statearr_28733_28768 = state_28729__$1;
(statearr_28733_28768[(2)] = null);

(statearr_28733_28768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (4))){
var inst_28690 = (state_28729[(7)]);
var inst_28690__$1 = (state_28729[(2)]);
var inst_28692 = (inst_28690__$1 == null);
var inst_28693 = cljs.core.not.call(null,inst_28692);
var state_28729__$1 = (function (){var statearr_28734 = state_28729;
(statearr_28734[(7)] = inst_28690__$1);

return statearr_28734;
})();
if(inst_28693){
var statearr_28735_28769 = state_28729__$1;
(statearr_28735_28769[(1)] = (5));

} else {
var statearr_28736_28770 = state_28729__$1;
(statearr_28736_28770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (15))){
var inst_28712 = cljs.core.println.call(null,"Video Playing");
var state_28729__$1 = state_28729;
var statearr_28737_28771 = state_28729__$1;
(statearr_28737_28771[(2)] = inst_28712);

(statearr_28737_28771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (13))){
var inst_28710 = (state_28729[(8)]);
var inst_28710__$1 = (state_28729[(2)]);
var inst_28711 = cljs.core.get.call(null,inst_28710__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_28729__$1 = (function (){var statearr_28738 = state_28729;
(statearr_28738[(8)] = inst_28710__$1);

return statearr_28738;
})();
var G__28739_28772 = (((inst_28711 instanceof cljs.core.Keyword))?inst_28711.fqn:null);
switch (G__28739_28772) {
case "video-playing":
var statearr_28740_28774 = state_28729__$1;
(statearr_28740_28774[(1)] = (15));


break;
case "video-paused":
var statearr_28741_28775 = state_28729__$1;
(statearr_28741_28775[(1)] = (16));


break;
case "video-buffering":
var statearr_28742_28776 = state_28729__$1;
(statearr_28742_28776[(1)] = (17));


break;
case "video-ended":
var statearr_28743_28777 = state_28729__$1;
(statearr_28743_28777[(1)] = (18));


break;
case "video-not-started":
var statearr_28744_28778 = state_28729__$1;
(statearr_28744_28778[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_28711)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (6))){
var state_28729__$1 = state_28729;
var statearr_28745_28779 = state_28729__$1;
(statearr_28745_28779[(2)] = false);

(statearr_28745_28779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (17))){
var inst_28716 = cljs.core.println.call(null,"Video Buffering");
var state_28729__$1 = state_28729;
var statearr_28746_28780 = state_28729__$1;
(statearr_28746_28780[(2)] = inst_28716);

(statearr_28746_28780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (3))){
var inst_28727 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28729__$1,inst_28727);
} else {
if((state_val_28730 === (12))){
var inst_28690 = (state_28729[(7)]);
var state_28729__$1 = state_28729;
var statearr_28747_28781 = state_28729__$1;
(statearr_28747_28781[(2)] = inst_28690);

(statearr_28747_28781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (2))){
var state_28729__$1 = state_28729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28729__$1,(4),event_channel);
} else {
if((state_val_28730 === (19))){
var inst_28720 = cljs.core.println.call(null,"Video Not Started");
var state_28729__$1 = state_28729;
var statearr_28748_28782 = state_28729__$1;
(statearr_28748_28782[(2)] = inst_28720);

(statearr_28748_28782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (11))){
var inst_28690 = (state_28729[(7)]);
var inst_28707 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28690);
var state_28729__$1 = state_28729;
var statearr_28749_28783 = state_28729__$1;
(statearr_28749_28783[(2)] = inst_28707);

(statearr_28749_28783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (9))){
var state_28729__$1 = state_28729;
var statearr_28750_28784 = state_28729__$1;
(statearr_28750_28784[(2)] = false);

(statearr_28750_28784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (5))){
var inst_28690 = (state_28729[(7)]);
var inst_28695 = inst_28690.cljs$lang$protocol_mask$partition0$;
var inst_28696 = (inst_28695 & (64));
var inst_28697 = inst_28690.cljs$core$ISeq$;
var inst_28698 = (inst_28696) || (inst_28697);
var state_28729__$1 = state_28729;
if(cljs.core.truth_(inst_28698)){
var statearr_28751_28785 = state_28729__$1;
(statearr_28751_28785[(1)] = (8));

} else {
var statearr_28752_28786 = state_28729__$1;
(statearr_28752_28786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (14))){
var inst_28710 = (state_28729[(8)]);
var inst_28723 = (state_28729[(2)]);
var inst_28724 = cljs.core.async.put_BANG_.call(null,player_channel,inst_28710);
var state_28729__$1 = (function (){var statearr_28753 = state_28729;
(statearr_28753[(9)] = inst_28723);

(statearr_28753[(10)] = inst_28724);

return statearr_28753;
})();
var statearr_28754_28787 = state_28729__$1;
(statearr_28754_28787[(2)] = null);

(statearr_28754_28787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (16))){
var inst_28714 = cljs.core.println.call(null,"Video Paused");
var state_28729__$1 = state_28729;
var statearr_28755_28788 = state_28729__$1;
(statearr_28755_28788[(2)] = inst_28714);

(statearr_28755_28788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (10))){
var inst_28702 = (state_28729[(2)]);
var state_28729__$1 = state_28729;
var statearr_28756_28789 = state_28729__$1;
(statearr_28756_28789[(2)] = inst_28702);

(statearr_28756_28789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (18))){
var inst_28718 = cljs.core.println.call(null,"Video Ended");
var state_28729__$1 = state_28729;
var statearr_28757_28790 = state_28729__$1;
(statearr_28757_28790[(2)] = inst_28718);

(statearr_28757_28790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28730 === (8))){
var state_28729__$1 = state_28729;
var statearr_28758_28791 = state_28729__$1;
(statearr_28758_28791[(2)] = true);

(statearr_28758_28791[(1)] = (10));


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
var statearr_28762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28762[(0)] = redditv$core$player_component_$_state_machine__25856__auto__);

(statearr_28762[(1)] = (1));

return statearr_28762;
});
var redditv$core$player_component_$_state_machine__25856__auto____1 = (function (state_28729){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_28729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e28763){if((e28763 instanceof Object)){
var ex__25859__auto__ = e28763;
var statearr_28764_28792 = state_28729;
(statearr_28764_28792[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28793 = state_28729;
state_28729 = G__28793;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__25856__auto__ = function(state_28729){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__25856__auto____1.call(this,state_28729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__25856__auto____0;
redditv$core$player_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__25856__auto____1;
return redditv$core$player_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto__,event_channel,player_channel,this$__$1))
})();
var state__25922__auto__ = (function (){var statearr_28765 = f__25921__auto__.call(null);
(statearr_28765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto__);

return statearr_28765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto__,event_channel,player_channel,this$__$1))
);

return c__25920__auto__;
});

redditv.core.t_redditv$core28684.prototype.om$core$IWillReceiveProps$ = true;

redditv.core.t_redditv$core28684.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
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

redditv.core.t_redditv$core28684.prototype.om$core$IRender$ = true;

redditv.core.t_redditv$core28684.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "redditv-player-container"},om.util.force_children.call(null,React.DOM.div({"id": "redditv-player"})));
});

redditv.core.t_redditv$core28684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"player-component","player-component",62883179,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28685","meta28685",912919955,null)], null);
});

redditv.core.t_redditv$core28684.cljs$lang$type = true;

redditv.core.t_redditv$core28684.cljs$lang$ctorStr = "redditv.core/t_redditv$core28684";

redditv.core.t_redditv$core28684.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28684");
});

redditv.core.__GT_t_redditv$core28684 = (function redditv$core$player_component_$___GT_t_redditv$core28684(player_component__$1,entry__$1,owner__$1,meta28685){
return (new redditv.core.t_redditv$core28684(player_component__$1,entry__$1,owner__$1,meta28685));
});

}

return (new redditv.core.t_redditv$core28684(redditv$core$player_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core28800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28800 = (function (playlist_entry_component,entry,owner,meta28801){
this.playlist_entry_component = playlist_entry_component;
this.entry = entry;
this.owner = owner;
this.meta28801 = meta28801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28802,meta28801__$1){
var self__ = this;
var _28802__$1 = this;
return (new redditv.core.t_redditv$core28800(self__.playlist_entry_component,self__.entry,self__.owner,meta28801__$1));
});

redditv.core.t_redditv$core28800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28802){
var self__ = this;
var _28802__$1 = this;
return self__.meta28801;
});

redditv.core.t_redditv$core28800.prototype.om$core$IDidUpdate$ = true;

redditv.core.t_redditv$core28800.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,_,___$1){
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

redditv.core.t_redditv$core28800.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28800.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28803){
var self__ = this;
var map__28804 = p__28803;
var map__28804__$1 = ((((!((map__28804 == null)))?((((map__28804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28804):map__28804);
var selected = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__28804__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return React.DOM.div({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__28804,map__28804__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-select","video-select",775569479),new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.deref.call(null,self__.entry)], null));
});})(classes,___$1,map__28804,map__28804__$1,selected,selection_channel))
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

redditv.core.t_redditv$core28800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-entry-component","playlist-entry-component",-254938373,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28801","meta28801",492464002,null)], null);
});

redditv.core.t_redditv$core28800.cljs$lang$type = true;

redditv.core.t_redditv$core28800.cljs$lang$ctorStr = "redditv.core/t_redditv$core28800";

redditv.core.t_redditv$core28800.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28800");
});

redditv.core.__GT_t_redditv$core28800 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core28800(playlist_entry_component__$1,entry__$1,owner__$1,meta28801){
return (new redditv.core.t_redditv$core28800(playlist_entry_component__$1,entry__$1,owner__$1,meta28801));
});

}

return (new redditv.core.t_redditv$core28800(redditv$core$playlist_entry_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core28812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28812 = (function (playlist_component,app,owner,meta28813){
this.playlist_component = playlist_component;
this.app = app;
this.owner = owner;
this.meta28813 = meta28813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28814,meta28813__$1){
var self__ = this;
var _28814__$1 = this;
return (new redditv.core.t_redditv$core28812(self__.playlist_component,self__.app,self__.owner,meta28813__$1));
});

redditv.core.t_redditv$core28812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28814){
var self__ = this;
var _28814__$1 = this;
return self__.meta28813;
});

redditv.core.t_redditv$core28812.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28812.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__28815){
var self__ = this;
var map__28816 = p__28815;
var map__28816__$1 = ((((!((map__28816 == null)))?((((map__28816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);
var selection_channel = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return React.DOM.div({"id": "redditv-playlist-root"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"id": "redditv-playlist-leftpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Panes (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"zoom_out_map"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Previous Video", "onClick": ((function (this$__$1,map__28816,map__28816__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null));
});})(this$__$1,map__28816,map__28816__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_back")))], null))),React.DOM.div({"id": "redditv-playlist-container", "ref": "playlist-scroll-container"},om.util.force_children.call(null,om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null)))),React.DOM.div({"id": "redditv-playlist-rightpane"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "button-pane", "title": "Hide Playlist (not implemented)"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"expand_more"))),React.DOM.div({"className": "button-pane button-pane-tall", "title": "Next Video", "onClick": ((function (this$__$1,map__28816,map__28816__$1,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null));
});})(this$__$1,map__28816,map__28816__$1,selection_channel))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"arrow_forward")))], null)))], null)));
});

redditv.core.t_redditv$core28812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-component","playlist-component",362561540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28813","meta28813",-1407783321,null)], null);
});

redditv.core.t_redditv$core28812.cljs$lang$type = true;

redditv.core.t_redditv$core28812.cljs$lang$ctorStr = "redditv.core/t_redditv$core28812";

redditv.core.t_redditv$core28812.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28812");
});

redditv.core.__GT_t_redditv$core28812 = (function redditv$core$playlist_component_$___GT_t_redditv$core28812(playlist_component__$1,app__$1,owner__$1,meta28813){
return (new redditv.core.t_redditv$core28812(playlist_component__$1,app__$1,owner__$1,meta28813));
});

}

return (new redditv.core.t_redditv$core28812(redditv$core$playlist_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.leftpane_component = (function redditv$core$leftpane_component(app,owner){
if(typeof redditv.core.t_redditv$core28823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28823 = (function (leftpane_component,app,owner,meta28824){
this.leftpane_component = leftpane_component;
this.app = app;
this.owner = owner;
this.meta28824 = meta28824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28825,meta28824__$1){
var self__ = this;
var _28825__$1 = this;
return (new redditv.core.t_redditv$core28823(self__.leftpane_component,self__.app,self__.owner,meta28824__$1));
});

redditv.core.t_redditv$core28823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28825){
var self__ = this;
var _28825__$1 = this;
return self__.meta28824;
});

redditv.core.t_redditv$core28823.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28823.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core28823.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28823.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane redditv-leftpane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "Expand Left Pane"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"keyboard_arrow_right")))),om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "Change Subreddit"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"search")))),om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "View Reddit Comments", "onClick": ((function (this$__$1){
return (function (e){
var map__28826 = om.core.get_props.call(null,self__.owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var map__28826__$1 = ((((!((map__28826 == null)))?((((map__28826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28826):map__28826);
var entry = map__28826__$1;
var permalink = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return window.open([cljs.core.str("http://www.reddit.com"),cljs.core.str(permalink)].join(''),"_blank");
});})(this$__$1))
},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"comment")))));
});

redditv.core.t_redditv$core28823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"leftpane-component","leftpane-component",1663892517,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28824","meta28824",-1036576435,null)], null);
});

redditv.core.t_redditv$core28823.cljs$lang$type = true;

redditv.core.t_redditv$core28823.cljs$lang$ctorStr = "redditv.core/t_redditv$core28823";

redditv.core.t_redditv$core28823.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28823");
});

redditv.core.__GT_t_redditv$core28823 = (function redditv$core$leftpane_component_$___GT_t_redditv$core28823(leftpane_component__$1,app__$1,owner__$1,meta28824){
return (new redditv.core.t_redditv$core28823(leftpane_component__$1,app__$1,owner__$1,meta28824));
});

}

return (new redditv.core.t_redditv$core28823(redditv$core$leftpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.rightpane_component = (function redditv$core$rightpane_component(app,owner){
if(typeof redditv.core.t_redditv$core28831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core28831 = (function (rightpane_component,app,owner,meta28832){
this.rightpane_component = rightpane_component;
this.app = app;
this.owner = owner;
this.meta28832 = meta28832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core28831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28833,meta28832__$1){
var self__ = this;
var _28833__$1 = this;
return (new redditv.core.t_redditv$core28831(self__.rightpane_component,self__.app,self__.owner,meta28832__$1));
});

redditv.core.t_redditv$core28831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28833){
var self__ = this;
var _28833__$1 = this;
return self__.meta28832;
});

redditv.core.t_redditv$core28831.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core28831.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

redditv.core.t_redditv$core28831.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core28831.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "redditv-pane redditv-rightpane"},om.util.force_children.call(null,React.DOM.div({"className": "button-pane", "title": "Expand Right Pane"},om.util.force_children.call(null,redditv.icons.google_icon.call(null,"keyboard_arrow_left")))));
});

redditv.core.t_redditv$core28831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"rightpane-component","rightpane-component",198155804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28832","meta28832",-578216034,null)], null);
});

redditv.core.t_redditv$core28831.cljs$lang$type = true;

redditv.core.t_redditv$core28831.cljs$lang$ctorStr = "redditv.core/t_redditv$core28831";

redditv.core.t_redditv$core28831.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core28831");
});

redditv.core.__GT_t_redditv$core28831 = (function redditv$core$rightpane_component_$___GT_t_redditv$core28831(rightpane_component__$1,app__$1,owner__$1,meta28832){
return (new redditv.core.t_redditv$core28831(rightpane_component__$1,app__$1,owner__$1,meta28832));
});

}

return (new redditv.core.t_redditv$core28831(redditv$core$rightpane_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(app,owner){
var subreddit = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var vec__28861 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__28861,(0),null);
var error_channel = cljs.core.nth.call(null,vec__28861,(1),null);
var c__25920__auto___28888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel){
return (function (state_28873){
var state_val_28874 = (state_28873[(1)]);
if((state_val_28874 === (1))){
var state_28873__$1 = state_28873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28873__$1,(2),success_channel);
} else {
if((state_val_28874 === (2))){
var inst_28863 = (state_28873[(2)]);
var inst_28864 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var state_28873__$1 = (function (){var statearr_28875 = state_28873;
(statearr_28875[(7)] = inst_28863);

return statearr_28875;
})();
if(cljs.core.truth_(inst_28864)){
var statearr_28876_28889 = state_28873__$1;
(statearr_28876_28889[(1)] = (3));

} else {
var statearr_28877_28890 = state_28873__$1;
(statearr_28877_28890[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (3))){
var state_28873__$1 = state_28873;
var statearr_28878_28891 = state_28873__$1;
(statearr_28878_28891[(2)] = null);

(statearr_28878_28891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (4))){
var inst_28863 = (state_28873[(7)]);
var inst_28867 = cljs.core.first.call(null,inst_28863);
var inst_28868 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_28867);
var state_28873__$1 = state_28873;
var statearr_28879_28892 = state_28873__$1;
(statearr_28879_28892[(2)] = inst_28868);

(statearr_28879_28892[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28874 === (5))){
var inst_28863 = (state_28873[(7)]);
var inst_28870 = (state_28873[(2)]);
var inst_28871 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist","playlist",1952276871),inst_28863);
var state_28873__$1 = (function (){var statearr_28880 = state_28873;
(statearr_28880[(8)] = inst_28870);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28873__$1,inst_28871);
} else {
return null;
}
}
}
}
}
});})(c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel))
;
return ((function (switch__25855__auto__,c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel){
return (function() {
var redditv$core$update_playlist_BANG__$_state_machine__25856__auto__ = null;
var redditv$core$update_playlist_BANG__$_state_machine__25856__auto____0 = (function (){
var statearr_28884 = [null,null,null,null,null,null,null,null,null];
(statearr_28884[(0)] = redditv$core$update_playlist_BANG__$_state_machine__25856__auto__);

(statearr_28884[(1)] = (1));

return statearr_28884;
});
var redditv$core$update_playlist_BANG__$_state_machine__25856__auto____1 = (function (state_28873){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_28873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e28885){if((e28885 instanceof Object)){
var ex__25859__auto__ = e28885;
var statearr_28886_28893 = state_28873;
(statearr_28886_28893[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28894 = state_28873;
state_28873 = G__28894;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$update_playlist_BANG__$_state_machine__25856__auto__ = function(state_28873){
switch(arguments.length){
case 0:
return redditv$core$update_playlist_BANG__$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$update_playlist_BANG__$_state_machine__25856__auto____1.call(this,state_28873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$update_playlist_BANG__$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$update_playlist_BANG__$_state_machine__25856__auto____0;
redditv$core$update_playlist_BANG__$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$update_playlist_BANG__$_state_machine__25856__auto____1;
return redditv$core$update_playlist_BANG__$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel))
})();
var state__25922__auto__ = (function (){var statearr_28887 = f__25921__auto__.call(null);
(statearr_28887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto___28888);

return statearr_28887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto___28888,subreddit,vec__28861,success_channel,error_channel))
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
if(typeof redditv.core.t_redditv$core29077 !== 'undefined'){
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
redditv.core.t_redditv$core29077 = (function (root_component,app,owner,meta29078){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta29078 = meta29078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core29077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29079,meta29078__$1){
var self__ = this;
var _29079__$1 = this;
return (new redditv.core.t_redditv$core29077(self__.root_component,self__.app,self__.owner,meta29078__$1));
});

redditv.core.t_redditv$core29077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29079){
var self__ = this;
var _29079__$1 = this;
return self__.meta29078;
});

redditv.core.t_redditv$core29077.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core29077.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core29077.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core29077.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__25920__auto___29259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto___29259,selection_channel,player_channel,___$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto___29259,selection_channel,player_channel,___$1){
return (function (state_29140){
var state_val_29141 = (state_29140[(1)]);
if((state_val_29141 === (7))){
var inst_29098 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29098)){
var statearr_29142_29260 = state_29140__$1;
(statearr_29142_29260[(1)] = (11));

} else {
var statearr_29143_29261 = state_29140__$1;
(statearr_29143_29261[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (20))){
var state_29140__$1 = state_29140;
var statearr_29144_29262 = state_29140__$1;
(statearr_29144_29262[(2)] = false);

(statearr_29144_29262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (27))){
var state_29140__$1 = state_29140;
var statearr_29145_29263 = state_29140__$1;
(statearr_29145_29263[(2)] = null);

(statearr_29145_29263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (1))){
var state_29140__$1 = state_29140;
var statearr_29146_29264 = state_29140__$1;
(statearr_29146_29264[(2)] = null);

(statearr_29146_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (24))){
var inst_29125 = (state_29140[(2)]);
var inst_29126 = cljs.core.get.call(null,inst_29125,new cljs.core.Keyword(null,"entry","entry",505168823));
var inst_29127 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_29126);
var state_29140__$1 = state_29140;
var statearr_29147_29265 = state_29140__$1;
(statearr_29147_29265[(2)] = inst_29127);

(statearr_29147_29265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (4))){
var inst_29083 = (state_29140[(7)]);
var inst_29083__$1 = (state_29140[(2)]);
var inst_29085 = (inst_29083__$1 == null);
var inst_29086 = cljs.core.not.call(null,inst_29085);
var state_29140__$1 = (function (){var statearr_29148 = state_29140;
(statearr_29148[(7)] = inst_29083__$1);

return statearr_29148;
})();
if(inst_29086){
var statearr_29149_29266 = state_29140__$1;
(statearr_29149_29266[(1)] = (5));

} else {
var statearr_29150_29267 = state_29140__$1;
(statearr_29150_29267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (15))){
var inst_29103 = (state_29140[(8)]);
var inst_29107 = (inst_29103 == null);
var inst_29108 = cljs.core.not.call(null,inst_29107);
var state_29140__$1 = state_29140;
if(inst_29108){
var statearr_29151_29268 = state_29140__$1;
(statearr_29151_29268[(1)] = (16));

} else {
var statearr_29152_29269 = state_29140__$1;
(statearr_29152_29269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (21))){
var inst_29117 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29153_29270 = state_29140__$1;
(statearr_29153_29270[(2)] = inst_29117);

(statearr_29153_29270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (13))){
var inst_29103 = (state_29140[(8)]);
var inst_29103__$1 = (state_29140[(2)]);
var inst_29104 = cljs.core.get.call(null,inst_29103__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29140__$1 = (function (){var statearr_29154 = state_29140;
(statearr_29154[(8)] = inst_29103__$1);

return statearr_29154;
})();
var G__29155_29271 = (((inst_29104 instanceof cljs.core.Keyword))?inst_29104.fqn:null);
switch (G__29155_29271) {
case "video-select":
var statearr_29156_29273 = state_29140__$1;
(statearr_29156_29273[(1)] = (15));


break;
case "video-next":
var statearr_29157_29274 = state_29140__$1;
(statearr_29157_29274[(1)] = (25));


break;
case "video-previous":
var statearr_29158_29275 = state_29140__$1;
(statearr_29158_29275[(1)] = (26));


break;
default:
var statearr_29159_29276 = state_29140__$1;
(statearr_29159_29276[(1)] = (27));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (22))){
var inst_29103 = (state_29140[(8)]);
var inst_29122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29103);
var state_29140__$1 = state_29140;
var statearr_29160_29277 = state_29140__$1;
(statearr_29160_29277[(2)] = inst_29122);

(statearr_29160_29277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (6))){
var state_29140__$1 = state_29140;
var statearr_29161_29278 = state_29140__$1;
(statearr_29161_29278[(2)] = false);

(statearr_29161_29278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (25))){
var inst_29129 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29140__$1 = state_29140;
var statearr_29162_29279 = state_29140__$1;
(statearr_29162_29279[(2)] = inst_29129);

(statearr_29162_29279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (17))){
var state_29140__$1 = state_29140;
var statearr_29163_29280 = state_29140__$1;
(statearr_29163_29280[(2)] = false);

(statearr_29163_29280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (3))){
var inst_29138 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29140__$1,inst_29138);
} else {
if((state_val_29141 === (12))){
var inst_29083 = (state_29140[(7)]);
var state_29140__$1 = state_29140;
var statearr_29164_29281 = state_29140__$1;
(statearr_29164_29281[(2)] = inst_29083);

(statearr_29164_29281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (2))){
var state_29140__$1 = state_29140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29140__$1,(4),selection_channel);
} else {
if((state_val_29141 === (23))){
var inst_29103 = (state_29140[(8)]);
var state_29140__$1 = state_29140;
var statearr_29165_29282 = state_29140__$1;
(statearr_29165_29282[(2)] = inst_29103);

(statearr_29165_29282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (19))){
var state_29140__$1 = state_29140;
var statearr_29166_29283 = state_29140__$1;
(statearr_29166_29283[(2)] = true);

(statearr_29166_29283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (11))){
var inst_29083 = (state_29140[(7)]);
var inst_29100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29083);
var state_29140__$1 = state_29140;
var statearr_29167_29284 = state_29140__$1;
(statearr_29167_29284[(2)] = inst_29100);

(statearr_29167_29284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (9))){
var state_29140__$1 = state_29140;
var statearr_29168_29285 = state_29140__$1;
(statearr_29168_29285[(2)] = false);

(statearr_29168_29285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (5))){
var inst_29083 = (state_29140[(7)]);
var inst_29088 = inst_29083.cljs$lang$protocol_mask$partition0$;
var inst_29089 = (inst_29088 & (64));
var inst_29090 = inst_29083.cljs$core$ISeq$;
var inst_29091 = (inst_29089) || (inst_29090);
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29091)){
var statearr_29169_29286 = state_29140__$1;
(statearr_29169_29286[(1)] = (8));

} else {
var statearr_29170_29287 = state_29140__$1;
(statearr_29170_29287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (14))){
var inst_29135 = (state_29140[(2)]);
var state_29140__$1 = (function (){var statearr_29171 = state_29140;
(statearr_29171[(9)] = inst_29135);

return statearr_29171;
})();
var statearr_29172_29288 = state_29140__$1;
(statearr_29172_29288[(2)] = null);

(statearr_29172_29288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (26))){
var inst_29131 = redditv.core.previous_video_BANG_.call(null,self__.app,self__.owner);
var state_29140__$1 = state_29140;
var statearr_29173_29289 = state_29140__$1;
(statearr_29173_29289[(2)] = inst_29131);

(statearr_29173_29289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (16))){
var inst_29103 = (state_29140[(8)]);
var inst_29110 = inst_29103.cljs$lang$protocol_mask$partition0$;
var inst_29111 = (inst_29110 & (64));
var inst_29112 = inst_29103.cljs$core$ISeq$;
var inst_29113 = (inst_29111) || (inst_29112);
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29113)){
var statearr_29174_29290 = state_29140__$1;
(statearr_29174_29290[(1)] = (19));

} else {
var statearr_29175_29291 = state_29140__$1;
(statearr_29175_29291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (10))){
var inst_29095 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
var statearr_29176_29292 = state_29140__$1;
(statearr_29176_29292[(2)] = inst_29095);

(statearr_29176_29292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (18))){
var inst_29120 = (state_29140[(2)]);
var state_29140__$1 = state_29140;
if(cljs.core.truth_(inst_29120)){
var statearr_29177_29293 = state_29140__$1;
(statearr_29177_29293[(1)] = (22));

} else {
var statearr_29178_29294 = state_29140__$1;
(statearr_29178_29294[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29141 === (8))){
var state_29140__$1 = state_29140;
var statearr_29179_29295 = state_29140__$1;
(statearr_29179_29295[(2)] = true);

(statearr_29179_29295[(1)] = (10));


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
});})(c__25920__auto___29259,selection_channel,player_channel,___$1))
;
return ((function (switch__25855__auto__,c__25920__auto___29259,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__25856__auto__ = null;
var redditv$core$root_component_$_state_machine__25856__auto____0 = (function (){
var statearr_29183 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29183[(0)] = redditv$core$root_component_$_state_machine__25856__auto__);

(statearr_29183[(1)] = (1));

return statearr_29183;
});
var redditv$core$root_component_$_state_machine__25856__auto____1 = (function (state_29140){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_29140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e29184){if((e29184 instanceof Object)){
var ex__25859__auto__ = e29184;
var statearr_29185_29296 = state_29140;
(statearr_29185_29296[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29297 = state_29140;
state_29140 = G__29297;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__25856__auto__ = function(state_29140){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__25856__auto____1.call(this,state_29140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__25856__auto____0;
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__25856__auto____1;
return redditv$core$root_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto___29259,selection_channel,player_channel,___$1))
})();
var state__25922__auto__ = (function (){var statearr_29186 = f__25921__auto__.call(null);
(statearr_29186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto___29259);

return statearr_29186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto___29259,selection_channel,player_channel,___$1))
);


var c__25920__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25920__auto__,selection_channel,player_channel,___$1){
return (function (){
var f__25921__auto__ = (function (){var switch__25855__auto__ = ((function (c__25920__auto__,selection_channel,player_channel,___$1){
return (function (state_29223){
var state_val_29224 = (state_29223[(1)]);
if((state_val_29224 === (7))){
var inst_29205 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
if(cljs.core.truth_(inst_29205)){
var statearr_29225_29298 = state_29223__$1;
(statearr_29225_29298[(1)] = (11));

} else {
var statearr_29226_29299 = state_29223__$1;
(statearr_29226_29299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (1))){
var state_29223__$1 = state_29223;
var statearr_29227_29300 = state_29223__$1;
(statearr_29227_29300[(2)] = null);

(statearr_29227_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (4))){
var inst_29190 = (state_29223[(7)]);
var inst_29190__$1 = (state_29223[(2)]);
var inst_29192 = (inst_29190__$1 == null);
var inst_29193 = cljs.core.not.call(null,inst_29192);
var state_29223__$1 = (function (){var statearr_29228 = state_29223;
(statearr_29228[(7)] = inst_29190__$1);

return statearr_29228;
})();
if(inst_29193){
var statearr_29229_29301 = state_29223__$1;
(statearr_29229_29301[(1)] = (5));

} else {
var statearr_29230_29302 = state_29223__$1;
(statearr_29230_29302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (15))){
var inst_29212 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29223__$1 = state_29223;
var statearr_29231_29303 = state_29223__$1;
(statearr_29231_29303[(2)] = inst_29212);

(statearr_29231_29303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (13))){
var inst_29210 = (state_29223[(2)]);
var inst_29211 = cljs.core.get.call(null,inst_29210,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_29223__$1 = state_29223;
var G__29232_29304 = (((inst_29211 instanceof cljs.core.Keyword))?inst_29211.fqn:null);
switch (G__29232_29304) {
case "video-ended":
var statearr_29233_29306 = state_29223__$1;
(statearr_29233_29306[(1)] = (15));


break;
case "video-not-started":
var statearr_29234_29307 = state_29223__$1;
(statearr_29234_29307[(1)] = (16));


break;
default:
var statearr_29235_29308 = state_29223__$1;
(statearr_29235_29308[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (6))){
var state_29223__$1 = state_29223;
var statearr_29236_29309 = state_29223__$1;
(statearr_29236_29309[(2)] = false);

(statearr_29236_29309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (17))){
var state_29223__$1 = state_29223;
var statearr_29237_29310 = state_29223__$1;
(statearr_29237_29310[(2)] = null);

(statearr_29237_29310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (3))){
var inst_29221 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29223__$1,inst_29221);
} else {
if((state_val_29224 === (12))){
var inst_29190 = (state_29223[(7)]);
var state_29223__$1 = state_29223;
var statearr_29238_29311 = state_29223__$1;
(statearr_29238_29311[(2)] = inst_29190);

(statearr_29238_29311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (2))){
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29223__$1,(4),player_channel);
} else {
if((state_val_29224 === (11))){
var inst_29190 = (state_29223[(7)]);
var inst_29207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29190);
var state_29223__$1 = state_29223;
var statearr_29239_29312 = state_29223__$1;
(statearr_29239_29312[(2)] = inst_29207);

(statearr_29239_29312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (9))){
var state_29223__$1 = state_29223;
var statearr_29240_29313 = state_29223__$1;
(statearr_29240_29313[(2)] = false);

(statearr_29240_29313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (5))){
var inst_29190 = (state_29223[(7)]);
var inst_29195 = inst_29190.cljs$lang$protocol_mask$partition0$;
var inst_29196 = (inst_29195 & (64));
var inst_29197 = inst_29190.cljs$core$ISeq$;
var inst_29198 = (inst_29196) || (inst_29197);
var state_29223__$1 = state_29223;
if(cljs.core.truth_(inst_29198)){
var statearr_29241_29314 = state_29223__$1;
(statearr_29241_29314[(1)] = (8));

} else {
var statearr_29242_29315 = state_29223__$1;
(statearr_29242_29315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (14))){
var inst_29218 = (state_29223[(2)]);
var state_29223__$1 = (function (){var statearr_29243 = state_29223;
(statearr_29243[(8)] = inst_29218);

return statearr_29243;
})();
var statearr_29244_29316 = state_29223__$1;
(statearr_29244_29316[(2)] = null);

(statearr_29244_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (16))){
var inst_29214 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_29223__$1 = state_29223;
var statearr_29245_29317 = state_29223__$1;
(statearr_29245_29317[(2)] = inst_29214);

(statearr_29245_29317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (10))){
var inst_29202 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29246_29318 = state_29223__$1;
(statearr_29246_29318[(2)] = inst_29202);

(statearr_29246_29318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (8))){
var state_29223__$1 = state_29223;
var statearr_29247_29319 = state_29223__$1;
(statearr_29247_29319[(2)] = true);

(statearr_29247_29319[(1)] = (10));


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
});})(c__25920__auto__,selection_channel,player_channel,___$1))
;
return ((function (switch__25855__auto__,c__25920__auto__,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__25856__auto__ = null;
var redditv$core$root_component_$_state_machine__25856__auto____0 = (function (){
var statearr_29251 = [null,null,null,null,null,null,null,null,null];
(statearr_29251[(0)] = redditv$core$root_component_$_state_machine__25856__auto__);

(statearr_29251[(1)] = (1));

return statearr_29251;
});
var redditv$core$root_component_$_state_machine__25856__auto____1 = (function (state_29223){
while(true){
var ret_value__25857__auto__ = (function (){try{while(true){
var result__25858__auto__ = switch__25855__auto__.call(null,state_29223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25858__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object)){
var ex__25859__auto__ = e29252;
var statearr_29253_29320 = state_29223;
(statearr_29253_29320[(5)] = ex__25859__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29321 = state_29223;
state_29223 = G__29321;
continue;
} else {
return ret_value__25857__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__25856__auto__ = function(state_29223){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__25856__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__25856__auto____1.call(this,state_29223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__25856__auto____0;
redditv$core$root_component_$_state_machine__25856__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__25856__auto____1;
return redditv$core$root_component_$_state_machine__25856__auto__;
})()
;})(switch__25855__auto__,c__25920__auto__,selection_channel,player_channel,___$1))
})();
var state__25922__auto__ = (function (){var statearr_29254 = f__25921__auto__.call(null);
(statearr_29254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25920__auto__);

return statearr_29254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25922__auto__);
});})(c__25920__auto__,selection_channel,player_channel,___$1))
);

return c__25920__auto__;
});

redditv.core.t_redditv$core29077.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core29077.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__29255){
var self__ = this;
var map__29256 = p__29255;
var map__29256__$1 = ((((!((map__29256 == null)))?((((map__29256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29256):map__29256);
var selection_channel = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__29256__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var ___$1 = this;
return React.DOM.div({"className": ""},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.leftpane_component,self__.app),om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null)], null)),om.core.build.call(null,redditv.core.rightpane_component,self__.app),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null)], null))], null)));
});

redditv.core.t_redditv$core29077.prototype.om$core$IDidMount$ = true;

redditv.core.t_redditv$core29077.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return window.addEventListener("keydown",((function (___$1){
return (function (e){
var keycode = e.keyCode;
var G__29258 = keycode;
switch (G__29258) {
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

redditv.core.t_redditv$core29077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29078","meta29078",242576089,null)], null);
});

redditv.core.t_redditv$core29077.cljs$lang$type = true;

redditv.core.t_redditv$core29077.cljs$lang$ctorStr = "redditv.core/t_redditv$core29077";

redditv.core.t_redditv$core29077.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core29077");
});

redditv.core.__GT_t_redditv$core29077 = (function redditv$core$root_component_$___GT_t_redditv$core29077(root_component__$1,app__$1,owner__$1,meta29078){
return (new redditv.core.t_redditv$core29077(root_component__$1,app__$1,owner__$1,meta29078));
});

}

return (new redditv.core.t_redditv$core29077(redditv$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
