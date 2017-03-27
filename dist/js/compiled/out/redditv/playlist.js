// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.utils');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(var_args){
var args__31211__auto__ = [];
var len__31204__auto___35941 = arguments.length;
var i__31205__auto___35942 = (0);
while(true){
if((i__31205__auto___35942 < len__31204__auto___35941)){
args__31211__auto__.push((arguments[i__31205__auto___35942]));

var G__35943 = (i__31205__auto___35942 + (1));
i__31205__auto___35942 = G__35943;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,p__35840){
var map__35841 = p__35840;
var map__35841__$1 = ((((!((map__35841 == null)))?((((map__35841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35841):map__35841);
var search = cljs.core.get.call(null,map__35841__$1,new cljs.core.Keyword(null,"search","search",1564939822),null);
var reload_QMARK_ = cljs.core.get.call(null,map__35841__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false);
var c__33316__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_){
return (function (){
var f__33317__auto__ = (function (){var switch__33251__auto__ = ((function (c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_){
return (function (state_35903){
var state_val_35904 = (state_35903[(1)]);
if((state_val_35904 === (7))){
var inst_35860 = (state_35903[(2)]);
var state_35903__$1 = state_35903;
var statearr_35905_35944 = state_35903__$1;
(statearr_35905_35944[(2)] = inst_35860);

(statearr_35905_35944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (20))){
var inst_35898 = (state_35903[(2)]);
var state_35903__$1 = state_35903;
var statearr_35906_35945 = state_35903__$1;
(statearr_35906_35945[(2)] = inst_35898);

(statearr_35906_35945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (1))){
var inst_35847 = (state_35903[(7)]);
var inst_35847__$1 = cljs.core.deref.call(null,app_state);
var inst_35849 = (inst_35847__$1 == null);
var inst_35850 = cljs.core.not.call(null,inst_35849);
var state_35903__$1 = (function (){var statearr_35907 = state_35903;
(statearr_35907[(7)] = inst_35847__$1);

return statearr_35907;
})();
if(inst_35850){
var statearr_35908_35946 = state_35903__$1;
(statearr_35908_35946[(1)] = (2));

} else {
var statearr_35909_35947 = state_35903__$1;
(statearr_35909_35947[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (4))){
var inst_35863 = (state_35903[(2)]);
var state_35903__$1 = state_35903;
if(cljs.core.truth_(inst_35863)){
var statearr_35910_35948 = state_35903__$1;
(statearr_35910_35948[(1)] = (8));

} else {
var statearr_35911_35949 = state_35903__$1;
(statearr_35911_35949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (15))){
var state_35903__$1 = state_35903;
var statearr_35912_35950 = state_35903__$1;
(statearr_35912_35950[(2)] = (0));

(statearr_35912_35950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (13))){
var state_35903__$1 = state_35903;
var statearr_35913_35951 = state_35903__$1;
(statearr_35913_35951[(2)] = null);

(statearr_35913_35951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (6))){
var state_35903__$1 = state_35903;
var statearr_35914_35952 = state_35903__$1;
(statearr_35914_35952[(2)] = false);

(statearr_35914_35952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (17))){
var inst_35881 = (state_35903[(8)]);
var inst_35883 = (state_35903[(9)]);
var inst_35888 = (state_35903[(2)]);
var inst_35889 = [inst_35881,inst_35888];
var inst_35890 = cljs.core.PersistentHashMap.fromArrays(inst_35883,inst_35889);
var inst_35891 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_35890);
var inst_35892 = redditv.utils.app_hash.call(null,app_state);
var inst_35893 = redditv.utils.set_hash_BANG_.call(null,inst_35892);
var state_35903__$1 = (function (){var statearr_35915 = state_35903;
(statearr_35915[(10)] = inst_35891);

(statearr_35915[(11)] = inst_35893);

return statearr_35915;
})();
if(cljs.core.truth_(reload_QMARK_)){
var statearr_35916_35953 = state_35903__$1;
(statearr_35916_35953[(1)] = (18));

} else {
var statearr_35917_35954 = state_35903__$1;
(statearr_35917_35954[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (3))){
var state_35903__$1 = state_35903;
var statearr_35918_35955 = state_35903__$1;
(statearr_35918_35955[(2)] = false);

(statearr_35918_35955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (12))){
var inst_35873 = (state_35903[(12)]);
var inst_35883 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_35884 = (inst_35873 < (0));
var state_35903__$1 = (function (){var statearr_35919 = state_35903;
(statearr_35919[(9)] = inst_35883);

return statearr_35919;
})();
if(cljs.core.truth_(inst_35884)){
var statearr_35920_35956 = state_35903__$1;
(statearr_35920_35956[(1)] = (15));

} else {
var statearr_35921_35957 = state_35903__$1;
(statearr_35921_35957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (2))){
var inst_35847 = (state_35903[(7)]);
var inst_35852 = inst_35847.cljs$lang$protocol_mask$partition0$;
var inst_35853 = (inst_35852 & (64));
var inst_35854 = inst_35847.cljs$core$ISeq$;
var inst_35855 = (cljs.core.PROTOCOL_SENTINEL === inst_35854);
var inst_35856 = (inst_35853) || (inst_35855);
var state_35903__$1 = state_35903;
if(cljs.core.truth_(inst_35856)){
var statearr_35922_35958 = state_35903__$1;
(statearr_35922_35958[(1)] = (5));

} else {
var statearr_35923_35959 = state_35903__$1;
(statearr_35923_35959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (19))){
var state_35903__$1 = state_35903;
var statearr_35924_35960 = state_35903__$1;
(statearr_35924_35960[(2)] = null);

(statearr_35924_35960[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (11))){
var inst_35881 = (state_35903[(8)]);
var inst_35881__$1 = (state_35903[(2)]);
var state_35903__$1 = (function (){var statearr_35925 = state_35903;
(statearr_35925[(8)] = inst_35881__$1);

return statearr_35925;
})();
if(cljs.core.truth_(inst_35881__$1)){
var statearr_35926_35961 = state_35903__$1;
(statearr_35926_35961[(1)] = (12));

} else {
var statearr_35927_35962 = state_35903__$1;
(statearr_35927_35962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (9))){
var inst_35847 = (state_35903[(7)]);
var state_35903__$1 = state_35903;
var statearr_35928_35963 = state_35903__$1;
(statearr_35928_35963[(2)] = inst_35847);

(statearr_35928_35963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (5))){
var state_35903__$1 = state_35903;
var statearr_35929_35964 = state_35903__$1;
(statearr_35929_35964[(2)] = true);

(statearr_35929_35964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (14))){
var inst_35901 = (state_35903[(2)]);
var state_35903__$1 = state_35903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35903__$1,inst_35901);
} else {
if((state_val_35904 === (16))){
var inst_35873 = (state_35903[(12)]);
var state_35903__$1 = state_35903;
var statearr_35930_35965 = state_35903__$1;
(statearr_35930_35965[(2)] = inst_35873);

(statearr_35930_35965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (10))){
var inst_35868 = (state_35903[(2)]);
var inst_35869 = cljs.core.get.call(null,inst_35868,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var inst_35870 = cljs.core.get.call(null,inst_35868,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
var inst_35871 = cljs.core.get.call(null,inst_35868,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var inst_35872 = cljs.core.get.call(null,inst_35868,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var inst_35873 = cljs.core.get.call(null,inst_35868,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var inst_35874 = [new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"category","category",-593092832)];
var inst_35875 = [inst_35870,inst_35871,inst_35872];
var inst_35876 = cljs.core.PersistentHashMap.fromArrays(inst_35874,inst_35875);
var inst_35877 = redditv.reddit.get_subreddit_videos.call(null,inst_35869,inst_35876);
var inst_35878 = cljs.core.nth.call(null,inst_35877,(0),null);
var inst_35879 = cljs.core.nth.call(null,inst_35877,(1),null);
var state_35903__$1 = (function (){var statearr_35931 = state_35903;
(statearr_35931[(13)] = inst_35879);

(statearr_35931[(12)] = inst_35873);

return statearr_35931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35903__$1,(11),inst_35878);
} else {
if((state_val_35904 === (18))){
var inst_35895 = redditv.utils.force_app_reload_BANG_.call(null,app_state);
var state_35903__$1 = state_35903;
var statearr_35932_35966 = state_35903__$1;
(statearr_35932_35966[(2)] = inst_35895);

(statearr_35932_35966[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35904 === (8))){
var inst_35847 = (state_35903[(7)]);
var inst_35865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35847);
var state_35903__$1 = state_35903;
var statearr_35933_35967 = state_35903__$1;
(statearr_35933_35967[(2)] = inst_35865);

(statearr_35933_35967[(1)] = (10));


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
});})(c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_))
;
return ((function (switch__33251__auto__,c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_){
return (function() {
var redditv$playlist$state_machine__33252__auto__ = null;
var redditv$playlist$state_machine__33252__auto____0 = (function (){
var statearr_35937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35937[(0)] = redditv$playlist$state_machine__33252__auto__);

(statearr_35937[(1)] = (1));

return statearr_35937;
});
var redditv$playlist$state_machine__33252__auto____1 = (function (state_35903){
while(true){
var ret_value__33253__auto__ = (function (){try{while(true){
var result__33254__auto__ = switch__33251__auto__.call(null,state_35903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33254__auto__;
}
break;
}
}catch (e35938){if((e35938 instanceof Object)){
var ex__33255__auto__ = e35938;
var statearr_35939_35968 = state_35903;
(statearr_35939_35968[(5)] = ex__33255__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35969 = state_35903;
state_35903 = G__35969;
continue;
} else {
return ret_value__33253__auto__;
}
break;
}
});
redditv$playlist$state_machine__33252__auto__ = function(state_35903){
switch(arguments.length){
case 0:
return redditv$playlist$state_machine__33252__auto____0.call(this);
case 1:
return redditv$playlist$state_machine__33252__auto____1.call(this,state_35903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$state_machine__33252__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$state_machine__33252__auto____0;
redditv$playlist$state_machine__33252__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$state_machine__33252__auto____1;
return redditv$playlist$state_machine__33252__auto__;
})()
;})(switch__33251__auto__,c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_))
})();
var state__33318__auto__ = (function (){var statearr_35940 = f__33317__auto__.call(null);
(statearr_35940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33316__auto__);

return statearr_35940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33318__auto__);
});})(c__33316__auto__,map__35841,map__35841__$1,search,reload_QMARK_))
);

return c__33316__auto__;
});

redditv.playlist.reload.cljs$lang$maxFixedArity = (1);

redditv.playlist.reload.cljs$lang$applyTo = (function (seq35838){
var G__35839 = cljs.core.first.call(null,seq35838);
var seq35838__$1 = cljs.core.next.call(null,seq35838);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic(G__35839,seq35838__$1);
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
var map__35972 = cljs.core.deref.call(null,app_state);
var map__35972__$1 = ((((!((map__35972 == null)))?((((map__35972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35972):map__35972);
var playlist_selected_index = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35972__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__35976 = cljs.core.deref.call(null,app_state);
var map__35976__$1 = ((((!((map__35976 == null)))?((((map__35976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35976):map__35976);
var playlist_selected_index = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = (playlist_selected_index - (1));
var index__$1 = (((index < (0)))?(size - (1)):index);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index__$1);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index__$1;
});
