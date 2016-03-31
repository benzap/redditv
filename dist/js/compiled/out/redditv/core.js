// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.core');
goog.require('cljs.core');
goog.require('redditv.youtube');
goog.require('redditv.player');
goog.require('om.dom');
goog.require('redditv.reddit');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('redditv.utils');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof redditv.core.app_state !== 'undefined'){
} else {
redditv.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),"videos",new cljs.core.Keyword(null,"playlist","playlist",1952276871),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),null], null));
}
redditv.core.player_component = (function redditv$core$player_component(entry,owner){
if(typeof redditv.core.t_redditv$core32887 !== 'undefined'){
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
redditv.core.t_redditv$core32887 = (function (player_component,entry,owner,meta32888){
this.player_component = player_component;
this.entry = entry;
this.owner = owner;
this.meta32888 = meta32888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core32887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32889,meta32888__$1){
var self__ = this;
var _32889__$1 = this;
return (new redditv.core.t_redditv$core32887(self__.player_component,self__.entry,self__.owner,meta32888__$1));
});

redditv.core.t_redditv$core32887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32889){
var self__ = this;
var _32889__$1 = this;
return self__.meta32888;
});

redditv.core.t_redditv$core32887.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core32887.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),redditv.player.create_nullplayer.call(null),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core32887.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core32887.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__,event_channel,player_channel,this$__$1){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__,event_channel,player_channel,this$__$1){
return (function (state_32932){
var state_val_32933 = (state_32932[(1)]);
if((state_val_32933 === (7))){
var inst_32908 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
if(cljs.core.truth_(inst_32908)){
var statearr_32934_32969 = state_32932__$1;
(statearr_32934_32969[(1)] = (11));

} else {
var statearr_32935_32970 = state_32932__$1;
(statearr_32935_32970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (1))){
var state_32932__$1 = state_32932;
var statearr_32936_32971 = state_32932__$1;
(statearr_32936_32971[(2)] = null);

(statearr_32936_32971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (4))){
var inst_32893 = (state_32932[(7)]);
var inst_32893__$1 = (state_32932[(2)]);
var inst_32895 = (inst_32893__$1 == null);
var inst_32896 = cljs.core.not.call(null,inst_32895);
var state_32932__$1 = (function (){var statearr_32937 = state_32932;
(statearr_32937[(7)] = inst_32893__$1);

return statearr_32937;
})();
if(inst_32896){
var statearr_32938_32972 = state_32932__$1;
(statearr_32938_32972[(1)] = (5));

} else {
var statearr_32939_32973 = state_32932__$1;
(statearr_32939_32973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (15))){
var inst_32915 = cljs.core.println.call(null,"Video Playing");
var state_32932__$1 = state_32932;
var statearr_32940_32974 = state_32932__$1;
(statearr_32940_32974[(2)] = inst_32915);

(statearr_32940_32974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (13))){
var inst_32913 = (state_32932[(8)]);
var inst_32913__$1 = (state_32932[(2)]);
var inst_32914 = cljs.core.get.call(null,inst_32913__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_32932__$1 = (function (){var statearr_32941 = state_32932;
(statearr_32941[(8)] = inst_32913__$1);

return statearr_32941;
})();
var G__32942_32975 = (((inst_32914 instanceof cljs.core.Keyword))?inst_32914.fqn:null);
switch (G__32942_32975) {
case "video-playing":
var statearr_32943_32977 = state_32932__$1;
(statearr_32943_32977[(1)] = (15));


break;
case "video-paused":
var statearr_32944_32978 = state_32932__$1;
(statearr_32944_32978[(1)] = (16));


break;
case "video-buffering":
var statearr_32945_32979 = state_32932__$1;
(statearr_32945_32979[(1)] = (17));


break;
case "video-ended":
var statearr_32946_32980 = state_32932__$1;
(statearr_32946_32980[(1)] = (18));


break;
case "video-not-started":
var statearr_32947_32981 = state_32932__$1;
(statearr_32947_32981[(1)] = (19));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_32914)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (6))){
var state_32932__$1 = state_32932;
var statearr_32948_32982 = state_32932__$1;
(statearr_32948_32982[(2)] = false);

(statearr_32948_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (17))){
var inst_32919 = cljs.core.println.call(null,"Video Buffering");
var state_32932__$1 = state_32932;
var statearr_32949_32983 = state_32932__$1;
(statearr_32949_32983[(2)] = inst_32919);

(statearr_32949_32983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (3))){
var inst_32930 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32932__$1,inst_32930);
} else {
if((state_val_32933 === (12))){
var inst_32893 = (state_32932[(7)]);
var state_32932__$1 = state_32932;
var statearr_32950_32984 = state_32932__$1;
(statearr_32950_32984[(2)] = inst_32893);

(statearr_32950_32984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (2))){
var state_32932__$1 = state_32932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32932__$1,(4),event_channel);
} else {
if((state_val_32933 === (19))){
var inst_32923 = cljs.core.println.call(null,"Video Not Started");
var state_32932__$1 = state_32932;
var statearr_32951_32985 = state_32932__$1;
(statearr_32951_32985[(2)] = inst_32923);

(statearr_32951_32985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (11))){
var inst_32893 = (state_32932[(7)]);
var inst_32910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32893);
var state_32932__$1 = state_32932;
var statearr_32952_32986 = state_32932__$1;
(statearr_32952_32986[(2)] = inst_32910);

(statearr_32952_32986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (9))){
var state_32932__$1 = state_32932;
var statearr_32953_32987 = state_32932__$1;
(statearr_32953_32987[(2)] = false);

(statearr_32953_32987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (5))){
var inst_32893 = (state_32932[(7)]);
var inst_32898 = inst_32893.cljs$lang$protocol_mask$partition0$;
var inst_32899 = (inst_32898 & (64));
var inst_32900 = inst_32893.cljs$core$ISeq$;
var inst_32901 = (inst_32899) || (inst_32900);
var state_32932__$1 = state_32932;
if(cljs.core.truth_(inst_32901)){
var statearr_32954_32988 = state_32932__$1;
(statearr_32954_32988[(1)] = (8));

} else {
var statearr_32955_32989 = state_32932__$1;
(statearr_32955_32989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (14))){
var inst_32913 = (state_32932[(8)]);
var inst_32926 = (state_32932[(2)]);
var inst_32927 = cljs.core.async.put_BANG_.call(null,player_channel,inst_32913);
var state_32932__$1 = (function (){var statearr_32956 = state_32932;
(statearr_32956[(9)] = inst_32926);

(statearr_32956[(10)] = inst_32927);

return statearr_32956;
})();
var statearr_32957_32990 = state_32932__$1;
(statearr_32957_32990[(2)] = null);

(statearr_32957_32990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (16))){
var inst_32917 = cljs.core.println.call(null,"Video Paused");
var state_32932__$1 = state_32932;
var statearr_32958_32991 = state_32932__$1;
(statearr_32958_32991[(2)] = inst_32917);

(statearr_32958_32991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (10))){
var inst_32905 = (state_32932[(2)]);
var state_32932__$1 = state_32932;
var statearr_32959_32992 = state_32932__$1;
(statearr_32959_32992[(2)] = inst_32905);

(statearr_32959_32992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (18))){
var inst_32921 = cljs.core.println.call(null,"Video Ended");
var state_32932__$1 = state_32932;
var statearr_32960_32993 = state_32932__$1;
(statearr_32960_32993[(2)] = inst_32921);

(statearr_32960_32993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32933 === (8))){
var state_32932__$1 = state_32932;
var statearr_32961_32994 = state_32932__$1;
(statearr_32961_32994[(2)] = true);

(statearr_32961_32994[(1)] = (10));


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
});})(c__27738__auto__,event_channel,player_channel,this$__$1))
;
return ((function (switch__27626__auto__,c__27738__auto__,event_channel,player_channel,this$__$1){
return (function() {
var redditv$core$player_component_$_state_machine__27627__auto__ = null;
var redditv$core$player_component_$_state_machine__27627__auto____0 = (function (){
var statearr_32965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32965[(0)] = redditv$core$player_component_$_state_machine__27627__auto__);

(statearr_32965[(1)] = (1));

return statearr_32965;
});
var redditv$core$player_component_$_state_machine__27627__auto____1 = (function (state_32932){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_32932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e32966){if((e32966 instanceof Object)){
var ex__27630__auto__ = e32966;
var statearr_32967_32995 = state_32932;
(statearr_32967_32995[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32996 = state_32932;
state_32932 = G__32996;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
redditv$core$player_component_$_state_machine__27627__auto__ = function(state_32932){
switch(arguments.length){
case 0:
return redditv$core$player_component_$_state_machine__27627__auto____0.call(this);
case 1:
return redditv$core$player_component_$_state_machine__27627__auto____1.call(this,state_32932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$player_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$player_component_$_state_machine__27627__auto____0;
redditv$core$player_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$player_component_$_state_machine__27627__auto____1;
return redditv$core$player_component_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__,event_channel,player_channel,this$__$1))
})();
var state__27740__auto__ = (function (){var statearr_32968 = f__27739__auto__.call(null);
(statearr_32968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_32968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__,event_channel,player_channel,this$__$1))
);

return c__27738__auto__;
});

redditv.core.t_redditv$core32887.prototype.om$core$IWillReceiveProps$ = true;

redditv.core.t_redditv$core32887.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (this$,entry__$1){
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

redditv.core.t_redditv$core32887.prototype.om$core$IRender$ = true;

redditv.core.t_redditv$core32887.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "redditv-player-container"},om.util.force_children.call(null,React.DOM.div({"id": "redditv-player"})));
});

redditv.core.t_redditv$core32887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"player-component","player-component",62883179,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32888","meta32888",1413964740,null)], null);
});

redditv.core.t_redditv$core32887.cljs$lang$type = true;

redditv.core.t_redditv$core32887.cljs$lang$ctorStr = "redditv.core/t_redditv$core32887";

redditv.core.t_redditv$core32887.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core32887");
});

redditv.core.__GT_t_redditv$core32887 = (function redditv$core$player_component_$___GT_t_redditv$core32887(player_component__$1,entry__$1,owner__$1,meta32888){
return (new redditv.core.t_redditv$core32887(player_component__$1,entry__$1,owner__$1,meta32888));
});

}

return (new redditv.core.t_redditv$core32887(redditv$core$player_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_entry_component = (function redditv$core$playlist_entry_component(entry,owner){
if(typeof redditv.core.t_redditv$core33003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core33003 = (function (playlist_entry_component,entry,owner,meta33004){
this.playlist_entry_component = playlist_entry_component;
this.entry = entry;
this.owner = owner;
this.meta33004 = meta33004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core33003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33005,meta33004__$1){
var self__ = this;
var _33005__$1 = this;
return (new redditv.core.t_redditv$core33003(self__.playlist_entry_component,self__.entry,self__.owner,meta33004__$1));
});

redditv.core.t_redditv$core33003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33005){
var self__ = this;
var _33005__$1 = this;
return self__.meta33004;
});

redditv.core.t_redditv$core33003.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core33003.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__33006){
var self__ = this;
var map__33007 = p__33006;
var map__33007__$1 = ((((!((map__33007 == null)))?((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33007):map__33007);
var selected = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selection_channel = cljs.core.get.call(null,map__33007__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var ___$1 = this;
var classes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1((function (){var and__21664__auto__ = self__.entry;
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.deref.call(null,self__.entry);
} else {
return and__21664__auto__;
}
})())))?"redditv-playlist-entry selected":"redditv-playlist-entry");
return React.DOM.div({"className": classes, "title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry), "onClick": ((function (classes,___$1,map__33007,map__33007__$1,selected,selection_channel){
return (function (e){
return cljs.core.async.put_BANG_.call(null,selection_channel,cljs.core.deref.call(null,self__.entry));
});})(classes,___$1,map__33007,map__33007__$1,selected,selection_channel))
},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "entry-title noselect"},om.util.force_children.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.entry))),React.DOM.img({"className": "entry-thumbnail", "src": new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(self__.entry)})], null)));
});

redditv.core.t_redditv$core33003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-entry-component","playlist-entry-component",-254938373,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"entry","entry",2145700350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta33004","meta33004",-1099627234,null)], null);
});

redditv.core.t_redditv$core33003.cljs$lang$type = true;

redditv.core.t_redditv$core33003.cljs$lang$ctorStr = "redditv.core/t_redditv$core33003";

redditv.core.t_redditv$core33003.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core33003");
});

redditv.core.__GT_t_redditv$core33003 = (function redditv$core$playlist_entry_component_$___GT_t_redditv$core33003(playlist_entry_component__$1,entry__$1,owner__$1,meta33004){
return (new redditv.core.t_redditv$core33003(playlist_entry_component__$1,entry__$1,owner__$1,meta33004));
});

}

return (new redditv.core.t_redditv$core33003(redditv$core$playlist_entry_component,entry,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.playlist_component = (function redditv$core$playlist_component(app,owner){
if(typeof redditv.core.t_redditv$core33015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core33015 = (function (playlist_component,app,owner,meta33016){
this.playlist_component = playlist_component;
this.app = app;
this.owner = owner;
this.meta33016 = meta33016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core33015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33017,meta33016__$1){
var self__ = this;
var _33017__$1 = this;
return (new redditv.core.t_redditv$core33015(self__.playlist_component,self__.app,self__.owner,meta33016__$1));
});

redditv.core.t_redditv$core33015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33017){
var self__ = this;
var _33017__$1 = this;
return self__.meta33016;
});

redditv.core.t_redditv$core33015.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core33015.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33018){
var self__ = this;
var map__33019 = p__33018;
var map__33019__$1 = ((((!((map__33019 == null)))?((((map__33019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33019):map__33019);
var selection_channel = cljs.core.get.call(null,map__33019__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var this$__$1 = this;
return React.DOM.div({"id": "redditv-playlist"},om.util.force_children.call(null,om.core.build_all.call(null,redditv.core.playlist_entry_component,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))));
});

redditv.core.t_redditv$core33015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"playlist-component","playlist-component",362561540,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta33016","meta33016",1821063713,null)], null);
});

redditv.core.t_redditv$core33015.cljs$lang$type = true;

redditv.core.t_redditv$core33015.cljs$lang$ctorStr = "redditv.core/t_redditv$core33015";

redditv.core.t_redditv$core33015.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core33015");
});

redditv.core.__GT_t_redditv$core33015 = (function redditv$core$playlist_component_$___GT_t_redditv$core33015(playlist_component__$1,app__$1,owner__$1,meta33016){
return (new redditv.core.t_redditv$core33015(playlist_component__$1,app__$1,owner__$1,meta33016));
});

}

return (new redditv.core.t_redditv$core33015(redditv$core$playlist_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.navigation_component = (function redditv$core$navigation_component(app,owner){
if(typeof redditv.core.t_redditv$core33024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core33024 = (function (navigation_component,app,owner,meta33025){
this.navigation_component = navigation_component;
this.app = app;
this.owner = owner;
this.meta33025 = meta33025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core33024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33026,meta33025__$1){
var self__ = this;
var _33026__$1 = this;
return (new redditv.core.t_redditv$core33024(self__.navigation_component,self__.app,self__.owner,meta33025__$1));
});

redditv.core.t_redditv$core33024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33026){
var self__ = this;
var _33026__$1 = this;
return self__.meta33025;
});

redditv.core.t_redditv$core33024.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core33024.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),true], null);
});

redditv.core.t_redditv$core33024.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core33024.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.core.t_redditv$core33024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"navigation-component","navigation-component",2008619679,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta33025","meta33025",-92926705,null)], null);
});

redditv.core.t_redditv$core33024.cljs$lang$type = true;

redditv.core.t_redditv$core33024.cljs$lang$ctorStr = "redditv.core/t_redditv$core33024";

redditv.core.t_redditv$core33024.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core33024");
});

redditv.core.__GT_t_redditv$core33024 = (function redditv$core$navigation_component_$___GT_t_redditv$core33024(navigation_component__$1,app__$1,owner__$1,meta33025){
return (new redditv.core.t_redditv$core33024(navigation_component__$1,app__$1,owner__$1,meta33025));
});

}

return (new redditv.core.t_redditv$core33024(redditv$core$navigation_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
redditv.core.update_playlist_BANG_ = (function redditv$core$update_playlist_BANG_(app,owner){
var subreddit = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var vec__33054 = redditv.reddit.get_subreddit_videos.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__33054,(0),null);
var error_channel = cljs.core.nth.call(null,vec__33054,(1),null);
var c__27738__auto___33081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel){
return (function (state_33066){
var state_val_33067 = (state_33066[(1)]);
if((state_val_33067 === (1))){
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33066__$1,(2),success_channel);
} else {
if((state_val_33067 === (2))){
var inst_33056 = (state_33066[(2)]);
var inst_33057 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var state_33066__$1 = (function (){var statearr_33068 = state_33066;
(statearr_33068[(7)] = inst_33056);

return statearr_33068;
})();
if(cljs.core.truth_(inst_33057)){
var statearr_33069_33082 = state_33066__$1;
(statearr_33069_33082[(1)] = (3));

} else {
var statearr_33070_33083 = state_33066__$1;
(statearr_33070_33083[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (3))){
var state_33066__$1 = state_33066;
var statearr_33071_33084 = state_33066__$1;
(statearr_33071_33084[(2)] = null);

(statearr_33071_33084[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (4))){
var inst_33056 = (state_33066[(7)]);
var inst_33060 = cljs.core.first.call(null,inst_33056);
var inst_33061 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_33060);
var state_33066__$1 = state_33066;
var statearr_33072_33085 = state_33066__$1;
(statearr_33072_33085[(2)] = inst_33061);

(statearr_33072_33085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (5))){
var inst_33056 = (state_33066[(7)]);
var inst_33063 = (state_33066[(2)]);
var inst_33064 = om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist","playlist",1952276871),inst_33056);
var state_33066__$1 = (function (){var statearr_33073 = state_33066;
(statearr_33073[(8)] = inst_33063);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33066__$1,inst_33064);
} else {
return null;
}
}
}
}
}
});})(c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel))
;
return ((function (switch__27626__auto__,c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel){
return (function() {
var redditv$core$update_playlist_BANG__$_state_machine__27627__auto__ = null;
var redditv$core$update_playlist_BANG__$_state_machine__27627__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null,null,null];
(statearr_33077[(0)] = redditv$core$update_playlist_BANG__$_state_machine__27627__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var redditv$core$update_playlist_BANG__$_state_machine__27627__auto____1 = (function (state_33066){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_33066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e33078){if((e33078 instanceof Object)){
var ex__27630__auto__ = e33078;
var statearr_33079_33086 = state_33066;
(statearr_33079_33086[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33087 = state_33066;
state_33066 = G__33087;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
redditv$core$update_playlist_BANG__$_state_machine__27627__auto__ = function(state_33066){
switch(arguments.length){
case 0:
return redditv$core$update_playlist_BANG__$_state_machine__27627__auto____0.call(this);
case 1:
return redditv$core$update_playlist_BANG__$_state_machine__27627__auto____1.call(this,state_33066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$update_playlist_BANG__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$update_playlist_BANG__$_state_machine__27627__auto____0;
redditv$core$update_playlist_BANG__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$update_playlist_BANG__$_state_machine__27627__auto____1;
return redditv$core$update_playlist_BANG__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel))
})();
var state__27740__auto__ = (function (){var statearr_33080 = f__27739__auto__.call(null);
(statearr_33080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___33081);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___33081,subreddit,vec__33054,success_channel,error_channel))
);


return error_channel;
});
redditv.core.next_video_BANG_ = (function redditv$core$next_video_BANG_(app,owner){
var playlist = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var current_selection = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848));
var next_selection = redditv.utils.next_element.call(null,playlist,current_selection);
cljs.core.println.call(null,"Videos:",cljs.core.map.call(null,((function (playlist,current_selection,next_selection){
return (function (p1__33088_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__33088_SHARP_);
});})(playlist,current_selection,next_selection))
,playlist));

cljs.core.println.call(null,"Current Selection: ",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(current_selection));

cljs.core.println.call(null,"Playing Next: ",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(next_selection));

return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),next_selection);
});
redditv.core.root_component = (function redditv$core$root_component(app,owner){
if(typeof redditv.core.t_redditv$core33183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
redditv.core.t_redditv$core33183 = (function (root_component,app,owner,meta33184){
this.root_component = root_component;
this.app = app;
this.owner = owner;
this.meta33184 = meta33184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redditv.core.t_redditv$core33183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33185,meta33184__$1){
var self__ = this;
var _33185__$1 = this;
return (new redditv.core.t_redditv$core33183(self__.root_component,self__.app,self__.owner,meta33184__$1));
});

redditv.core.t_redditv$core33183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33185){
var self__ = this;
var _33185__$1 = this;
return self__.meta33184;
});

redditv.core.t_redditv$core33183.prototype.om$core$IInitState$ = true;

redditv.core.t_redditv$core33183.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
redditv.core.update_playlist_BANG_.call(null,self__.app,self__.owner);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),cljs.core.async.chan.call(null)], null);
});

redditv.core.t_redditv$core33183.prototype.om$core$IWillMount$ = true;

redditv.core.t_redditv$core33183.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var selection_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var c__27738__auto___33277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___33277,selection_channel,player_channel,___$1){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___33277,selection_channel,player_channel,___$1){
return (function (state_33194){
var state_val_33195 = (state_33194[(1)]);
if((state_val_33195 === (1))){
var state_33194__$1 = state_33194;
var statearr_33196_33278 = state_33194__$1;
(statearr_33196_33278[(2)] = null);

(statearr_33196_33278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (2))){
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33194__$1,(4),selection_channel);
} else {
if((state_val_33195 === (3))){
var inst_33192 = (state_33194[(2)]);
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33194__$1,inst_33192);
} else {
if((state_val_33195 === (4))){
var inst_33188 = (state_33194[(2)]);
var inst_33189 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848),inst_33188);
var state_33194__$1 = (function (){var statearr_33197 = state_33194;
(statearr_33197[(7)] = inst_33189);

return statearr_33197;
})();
var statearr_33198_33279 = state_33194__$1;
(statearr_33198_33279[(2)] = null);

(statearr_33198_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__27738__auto___33277,selection_channel,player_channel,___$1))
;
return ((function (switch__27626__auto__,c__27738__auto___33277,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__27627__auto__ = null;
var redditv$core$root_component_$_state_machine__27627__auto____0 = (function (){
var statearr_33202 = [null,null,null,null,null,null,null,null];
(statearr_33202[(0)] = redditv$core$root_component_$_state_machine__27627__auto__);

(statearr_33202[(1)] = (1));

return statearr_33202;
});
var redditv$core$root_component_$_state_machine__27627__auto____1 = (function (state_33194){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_33194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e33203){if((e33203 instanceof Object)){
var ex__27630__auto__ = e33203;
var statearr_33204_33280 = state_33194;
(statearr_33204_33280[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33281 = state_33194;
state_33194 = G__33281;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__27627__auto__ = function(state_33194){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__27627__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__27627__auto____1.call(this,state_33194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__27627__auto____0;
redditv$core$root_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__27627__auto____1;
return redditv$core$root_component_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___33277,selection_channel,player_channel,___$1))
})();
var state__27740__auto__ = (function (){var statearr_33205 = f__27739__auto__.call(null);
(statearr_33205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___33277);

return statearr_33205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___33277,selection_channel,player_channel,___$1))
);


var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__,selection_channel,player_channel,___$1){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__,selection_channel,player_channel,___$1){
return (function (state_33242){
var state_val_33243 = (state_33242[(1)]);
if((state_val_33243 === (7))){
var inst_33224 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
if(cljs.core.truth_(inst_33224)){
var statearr_33244_33282 = state_33242__$1;
(statearr_33244_33282[(1)] = (11));

} else {
var statearr_33245_33283 = state_33242__$1;
(statearr_33245_33283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (1))){
var state_33242__$1 = state_33242;
var statearr_33246_33284 = state_33242__$1;
(statearr_33246_33284[(2)] = null);

(statearr_33246_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (4))){
var inst_33209 = (state_33242[(7)]);
var inst_33209__$1 = (state_33242[(2)]);
var inst_33211 = (inst_33209__$1 == null);
var inst_33212 = cljs.core.not.call(null,inst_33211);
var state_33242__$1 = (function (){var statearr_33247 = state_33242;
(statearr_33247[(7)] = inst_33209__$1);

return statearr_33247;
})();
if(inst_33212){
var statearr_33248_33285 = state_33242__$1;
(statearr_33248_33285[(1)] = (5));

} else {
var statearr_33249_33286 = state_33242__$1;
(statearr_33249_33286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (15))){
var inst_33231 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_33242__$1 = state_33242;
var statearr_33250_33287 = state_33242__$1;
(statearr_33250_33287[(2)] = inst_33231);

(statearr_33250_33287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (13))){
var inst_33229 = (state_33242[(2)]);
var inst_33230 = cljs.core.get.call(null,inst_33229,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var state_33242__$1 = state_33242;
var G__33251_33288 = (((inst_33230 instanceof cljs.core.Keyword))?inst_33230.fqn:null);
switch (G__33251_33288) {
case "video-ended":
var statearr_33252_33290 = state_33242__$1;
(statearr_33252_33290[(1)] = (15));


break;
case "video-not-started":
var statearr_33253_33291 = state_33242__$1;
(statearr_33253_33291[(1)] = (16));


break;
default:
var statearr_33254_33292 = state_33242__$1;
(statearr_33254_33292[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (6))){
var state_33242__$1 = state_33242;
var statearr_33255_33293 = state_33242__$1;
(statearr_33255_33293[(2)] = false);

(statearr_33255_33293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (17))){
var state_33242__$1 = state_33242;
var statearr_33256_33294 = state_33242__$1;
(statearr_33256_33294[(2)] = null);

(statearr_33256_33294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (3))){
var inst_33240 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33242__$1,inst_33240);
} else {
if((state_val_33243 === (12))){
var inst_33209 = (state_33242[(7)]);
var state_33242__$1 = state_33242;
var statearr_33257_33295 = state_33242__$1;
(statearr_33257_33295[(2)] = inst_33209);

(statearr_33257_33295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (2))){
var state_33242__$1 = state_33242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33242__$1,(4),player_channel);
} else {
if((state_val_33243 === (11))){
var inst_33209 = (state_33242[(7)]);
var inst_33226 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33209);
var state_33242__$1 = state_33242;
var statearr_33258_33296 = state_33242__$1;
(statearr_33258_33296[(2)] = inst_33226);

(statearr_33258_33296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (9))){
var state_33242__$1 = state_33242;
var statearr_33259_33297 = state_33242__$1;
(statearr_33259_33297[(2)] = false);

(statearr_33259_33297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (5))){
var inst_33209 = (state_33242[(7)]);
var inst_33214 = inst_33209.cljs$lang$protocol_mask$partition0$;
var inst_33215 = (inst_33214 & (64));
var inst_33216 = inst_33209.cljs$core$ISeq$;
var inst_33217 = (inst_33215) || (inst_33216);
var state_33242__$1 = state_33242;
if(cljs.core.truth_(inst_33217)){
var statearr_33260_33298 = state_33242__$1;
(statearr_33260_33298[(1)] = (8));

} else {
var statearr_33261_33299 = state_33242__$1;
(statearr_33261_33299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (14))){
var inst_33237 = (state_33242[(2)]);
var state_33242__$1 = (function (){var statearr_33262 = state_33242;
(statearr_33262[(8)] = inst_33237);

return statearr_33262;
})();
var statearr_33263_33300 = state_33242__$1;
(statearr_33263_33300[(2)] = null);

(statearr_33263_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (16))){
var inst_33233 = redditv.core.next_video_BANG_.call(null,self__.app,self__.owner);
var state_33242__$1 = state_33242;
var statearr_33264_33301 = state_33242__$1;
(statearr_33264_33301[(2)] = inst_33233);

(statearr_33264_33301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (10))){
var inst_33221 = (state_33242[(2)]);
var state_33242__$1 = state_33242;
var statearr_33265_33302 = state_33242__$1;
(statearr_33265_33302[(2)] = inst_33221);

(statearr_33265_33302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33243 === (8))){
var state_33242__$1 = state_33242;
var statearr_33266_33303 = state_33242__$1;
(statearr_33266_33303[(2)] = true);

(statearr_33266_33303[(1)] = (10));


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
});})(c__27738__auto__,selection_channel,player_channel,___$1))
;
return ((function (switch__27626__auto__,c__27738__auto__,selection_channel,player_channel,___$1){
return (function() {
var redditv$core$root_component_$_state_machine__27627__auto__ = null;
var redditv$core$root_component_$_state_machine__27627__auto____0 = (function (){
var statearr_33270 = [null,null,null,null,null,null,null,null,null];
(statearr_33270[(0)] = redditv$core$root_component_$_state_machine__27627__auto__);

(statearr_33270[(1)] = (1));

return statearr_33270;
});
var redditv$core$root_component_$_state_machine__27627__auto____1 = (function (state_33242){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_33242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e33271){if((e33271 instanceof Object)){
var ex__27630__auto__ = e33271;
var statearr_33272_33304 = state_33242;
(statearr_33272_33304[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33305 = state_33242;
state_33242 = G__33305;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
redditv$core$root_component_$_state_machine__27627__auto__ = function(state_33242){
switch(arguments.length){
case 0:
return redditv$core$root_component_$_state_machine__27627__auto____0.call(this);
case 1:
return redditv$core$root_component_$_state_machine__27627__auto____1.call(this,state_33242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$core$root_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$core$root_component_$_state_machine__27627__auto____0;
redditv$core$root_component_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$core$root_component_$_state_machine__27627__auto____1;
return redditv$core$root_component_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__,selection_channel,player_channel,___$1))
})();
var state__27740__auto__ = (function (){var statearr_33273 = f__27739__auto__.call(null);
(statearr_33273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_33273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__,selection_channel,player_channel,___$1))
);

return c__27738__auto__;
});

redditv.core.t_redditv$core33183.prototype.om$core$IRenderState$ = true;

redditv.core.t_redditv$core33183.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__33274){
var self__ = this;
var map__33275 = p__33274;
var map__33275__$1 = ((((!((map__33275 == null)))?((((map__33275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33275):map__33275);
var selection_channel = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948));
var player_channel = cljs.core.get.call(null,map__33275__$1,new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427));
var ___$1 = this;
return React.DOM.div({"className": ""},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.core.build.call(null,redditv.core.player_component,new cljs.core.Keyword(null,"playlist-selected","playlist-selected",1216369848).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player-channel","player-channel",-1477653427),player_channel], null)], null)),om.core.build.call(null,redditv.core.playlist_component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection-channel","selection-channel",1143587948),selection_channel], null)], null))], null)));
});

redditv.core.t_redditv$core33183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root-component","root-component",-166494948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta33184","meta33184",-476384697,null)], null);
});

redditv.core.t_redditv$core33183.cljs$lang$type = true;

redditv.core.t_redditv$core33183.cljs$lang$ctorStr = "redditv.core/t_redditv$core33183";

redditv.core.t_redditv$core33183.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"redditv.core/t_redditv$core33183");
});

redditv.core.__GT_t_redditv$core33183 = (function redditv$core$root_component_$___GT_t_redditv$core33183(root_component__$1,app__$1,owner__$1,meta33184){
return (new redditv.core.t_redditv$core33183(root_component__$1,app__$1,owner__$1,meta33184));
});

}

return (new redditv.core.t_redditv$core33183(redditv$core$root_component,app,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,redditv.core.root_component,redditv.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
