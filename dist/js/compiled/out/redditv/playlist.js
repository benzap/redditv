// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.utils');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(var_args){
var args__31211__auto__ = [];
var len__31204__auto___35931 = arguments.length;
var i__31205__auto___35932 = (0);
while(true){
if((i__31205__auto___35932 < len__31204__auto___35931)){
args__31211__auto__.push((arguments[i__31205__auto___35932]));

var G__35933 = (i__31205__auto___35932 + (1));
i__31205__auto___35932 = G__35933;
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
var c__33308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto__,map__35841,map__35841__$1,search){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto__,map__35841,map__35841__$1,search){
return (function (state_35897){
var state_val_35898 = (state_35897[(1)]);
if((state_val_35898 === (7))){
var inst_35860 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
var statearr_35899_35934 = state_35897__$1;
(statearr_35899_35934[(2)] = inst_35860);

(statearr_35899_35934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (1))){
var inst_35847 = (state_35897[(7)]);
var inst_35847__$1 = cljs.core.deref.call(null,app_state);
var inst_35849 = (inst_35847__$1 == null);
var inst_35850 = cljs.core.not.call(null,inst_35849);
var state_35897__$1 = (function (){var statearr_35900 = state_35897;
(statearr_35900[(7)] = inst_35847__$1);

return statearr_35900;
})();
if(inst_35850){
var statearr_35901_35935 = state_35897__$1;
(statearr_35901_35935[(1)] = (2));

} else {
var statearr_35902_35936 = state_35897__$1;
(statearr_35902_35936[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (4))){
var inst_35863 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
if(cljs.core.truth_(inst_35863)){
var statearr_35903_35937 = state_35897__$1;
(statearr_35903_35937[(1)] = (8));

} else {
var statearr_35904_35938 = state_35897__$1;
(statearr_35904_35938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (15))){
var state_35897__$1 = state_35897;
var statearr_35905_35939 = state_35897__$1;
(statearr_35905_35939[(2)] = (0));

(statearr_35905_35939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (13))){
var state_35897__$1 = state_35897;
var statearr_35906_35940 = state_35897__$1;
(statearr_35906_35940[(2)] = null);

(statearr_35906_35940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (6))){
var state_35897__$1 = state_35897;
var statearr_35907_35941 = state_35897__$1;
(statearr_35907_35941[(2)] = false);

(statearr_35907_35941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (17))){
var inst_35881 = (state_35897[(8)]);
var inst_35883 = (state_35897[(9)]);
var inst_35888 = (state_35897[(2)]);
var inst_35889 = [inst_35881,inst_35888];
var inst_35890 = cljs.core.PersistentHashMap.fromArrays(inst_35883,inst_35889);
var inst_35891 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_35890);
var inst_35892 = redditv.utils.force_app_reload_BANG_.call(null,app_state);
var state_35897__$1 = (function (){var statearr_35908 = state_35897;
(statearr_35908[(10)] = inst_35891);

return statearr_35908;
})();
var statearr_35909_35942 = state_35897__$1;
(statearr_35909_35942[(2)] = inst_35892);

(statearr_35909_35942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (3))){
var state_35897__$1 = state_35897;
var statearr_35910_35943 = state_35897__$1;
(statearr_35910_35943[(2)] = false);

(statearr_35910_35943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (12))){
var inst_35873 = (state_35897[(11)]);
var inst_35883 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_35884 = (inst_35873 < (0));
var state_35897__$1 = (function (){var statearr_35911 = state_35897;
(statearr_35911[(9)] = inst_35883);

return statearr_35911;
})();
if(cljs.core.truth_(inst_35884)){
var statearr_35912_35944 = state_35897__$1;
(statearr_35912_35944[(1)] = (15));

} else {
var statearr_35913_35945 = state_35897__$1;
(statearr_35913_35945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (2))){
var inst_35847 = (state_35897[(7)]);
var inst_35852 = inst_35847.cljs$lang$protocol_mask$partition0$;
var inst_35853 = (inst_35852 & (64));
var inst_35854 = inst_35847.cljs$core$ISeq$;
var inst_35855 = (cljs.core.PROTOCOL_SENTINEL === inst_35854);
var inst_35856 = (inst_35853) || (inst_35855);
var state_35897__$1 = state_35897;
if(cljs.core.truth_(inst_35856)){
var statearr_35914_35946 = state_35897__$1;
(statearr_35914_35946[(1)] = (5));

} else {
var statearr_35915_35947 = state_35897__$1;
(statearr_35915_35947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (11))){
var inst_35881 = (state_35897[(8)]);
var inst_35881__$1 = (state_35897[(2)]);
var state_35897__$1 = (function (){var statearr_35916 = state_35897;
(statearr_35916[(8)] = inst_35881__$1);

return statearr_35916;
})();
if(cljs.core.truth_(inst_35881__$1)){
var statearr_35917_35948 = state_35897__$1;
(statearr_35917_35948[(1)] = (12));

} else {
var statearr_35918_35949 = state_35897__$1;
(statearr_35918_35949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (9))){
var inst_35847 = (state_35897[(7)]);
var state_35897__$1 = state_35897;
var statearr_35919_35950 = state_35897__$1;
(statearr_35919_35950[(2)] = inst_35847);

(statearr_35919_35950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (5))){
var state_35897__$1 = state_35897;
var statearr_35920_35951 = state_35897__$1;
(statearr_35920_35951[(2)] = true);

(statearr_35920_35951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (14))){
var inst_35895 = (state_35897[(2)]);
var state_35897__$1 = state_35897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35897__$1,inst_35895);
} else {
if((state_val_35898 === (16))){
var inst_35873 = (state_35897[(11)]);
var state_35897__$1 = state_35897;
var statearr_35921_35952 = state_35897__$1;
(statearr_35921_35952[(2)] = inst_35873);

(statearr_35921_35952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35898 === (10))){
var inst_35868 = (state_35897[(2)]);
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
var state_35897__$1 = (function (){var statearr_35922 = state_35897;
(statearr_35922[(12)] = inst_35879);

(statearr_35922[(11)] = inst_35873);

return statearr_35922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35897__$1,(11),inst_35878);
} else {
if((state_val_35898 === (8))){
var inst_35847 = (state_35897[(7)]);
var inst_35865 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35847);
var state_35897__$1 = state_35897;
var statearr_35923_35953 = state_35897__$1;
(statearr_35923_35953[(2)] = inst_35865);

(statearr_35923_35953[(1)] = (10));


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
});})(c__33308__auto__,map__35841,map__35841__$1,search))
;
return ((function (switch__33243__auto__,c__33308__auto__,map__35841,map__35841__$1,search){
return (function() {
var redditv$playlist$state_machine__33244__auto__ = null;
var redditv$playlist$state_machine__33244__auto____0 = (function (){
var statearr_35927 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35927[(0)] = redditv$playlist$state_machine__33244__auto__);

(statearr_35927[(1)] = (1));

return statearr_35927;
});
var redditv$playlist$state_machine__33244__auto____1 = (function (state_35897){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_35897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e35928){if((e35928 instanceof Object)){
var ex__33247__auto__ = e35928;
var statearr_35929_35954 = state_35897;
(statearr_35929_35954[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35955 = state_35897;
state_35897 = G__35955;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$playlist$state_machine__33244__auto__ = function(state_35897){
switch(arguments.length){
case 0:
return redditv$playlist$state_machine__33244__auto____0.call(this);
case 1:
return redditv$playlist$state_machine__33244__auto____1.call(this,state_35897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$state_machine__33244__auto____0;
redditv$playlist$state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$state_machine__33244__auto____1;
return redditv$playlist$state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto__,map__35841,map__35841__$1,search))
})();
var state__33310__auto__ = (function (){var statearr_35930 = f__33309__auto__.call(null);
(statearr_35930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto__);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto__,map__35841,map__35841__$1,search))
);

return c__33308__auto__;
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
var map__35958 = cljs.core.deref.call(null,app_state);
var map__35958__$1 = ((((!((map__35958 == null)))?((((map__35958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35958):map__35958);
var playlist_selected_index = cljs.core.get.call(null,map__35958__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35958__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35958__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

redditv.utils.set_hash_BANG_.call(null,[cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(index)].join(''));

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__35962 = cljs.core.deref.call(null,app_state);
var map__35962__$1 = ((((!((map__35962 == null)))?((((map__35962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35962):map__35962);
var playlist_selected_index = cljs.core.get.call(null,map__35962__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35962__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35962__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = (playlist_selected_index - (1));
var index__$1 = (((index < (0)))?(size - (1)):index);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index__$1);

redditv.utils.set_hash_BANG_.call(null,[cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(index__$1)].join(''));

return index__$1;
});
