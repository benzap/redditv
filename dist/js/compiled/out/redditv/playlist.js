// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.utils');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(var_args){
var args__31211__auto__ = [];
var len__31204__auto___35950 = arguments.length;
var i__31205__auto___35951 = (0);
while(true){
if((i__31205__auto___35951 < len__31204__auto___35950)){
args__31211__auto__.push((arguments[i__31205__auto___35951]));

var G__35952 = (i__31205__auto___35951 + (1));
i__31205__auto___35951 = G__35952;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,p__35845){
var map__35846 = p__35845;
var map__35846__$1 = ((((!((map__35846 == null)))?((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35846):map__35846);
var search = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"search","search",1564939822),null);
var reload_QMARK_ = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false);
var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_){
return (function (){
var f__33322__auto__ = (function (){var switch__33256__auto__ = ((function (c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_){
return (function (state_35911){
var state_val_35912 = (state_35911[(1)]);
if((state_val_35912 === (7))){
var inst_35865 = (state_35911[(2)]);
var state_35911__$1 = state_35911;
var statearr_35913_35953 = state_35911__$1;
(statearr_35913_35953[(2)] = inst_35865);

(statearr_35913_35953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (20))){
var inst_35886 = (state_35911[(7)]);
var inst_35903 = (state_35911[(2)]);
var inst_35904 = cljs.core.first.call(null,inst_35886);
var inst_35905 = cljs.core.clj__GT_js.call(null,inst_35904);
var inst_35906 = console.log(inst_35905);
var state_35911__$1 = (function (){var statearr_35914 = state_35911;
(statearr_35914[(8)] = inst_35903);

return statearr_35914;
})();
var statearr_35915_35954 = state_35911__$1;
(statearr_35915_35954[(2)] = inst_35906);

(statearr_35915_35954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (1))){
var inst_35852 = (state_35911[(9)]);
var inst_35852__$1 = cljs.core.deref.call(null,app_state);
var inst_35854 = (inst_35852__$1 == null);
var inst_35855 = cljs.core.not.call(null,inst_35854);
var state_35911__$1 = (function (){var statearr_35916 = state_35911;
(statearr_35916[(9)] = inst_35852__$1);

return statearr_35916;
})();
if(inst_35855){
var statearr_35917_35955 = state_35911__$1;
(statearr_35917_35955[(1)] = (2));

} else {
var statearr_35918_35956 = state_35911__$1;
(statearr_35918_35956[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (4))){
var inst_35868 = (state_35911[(2)]);
var state_35911__$1 = state_35911;
if(cljs.core.truth_(inst_35868)){
var statearr_35919_35957 = state_35911__$1;
(statearr_35919_35957[(1)] = (8));

} else {
var statearr_35920_35958 = state_35911__$1;
(statearr_35920_35958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (15))){
var state_35911__$1 = state_35911;
var statearr_35921_35959 = state_35911__$1;
(statearr_35921_35959[(2)] = (0));

(statearr_35921_35959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (13))){
var state_35911__$1 = state_35911;
var statearr_35922_35960 = state_35911__$1;
(statearr_35922_35960[(2)] = null);

(statearr_35922_35960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (6))){
var state_35911__$1 = state_35911;
var statearr_35923_35961 = state_35911__$1;
(statearr_35923_35961[(2)] = false);

(statearr_35923_35961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (17))){
var inst_35888 = (state_35911[(10)]);
var inst_35886 = (state_35911[(7)]);
var inst_35893 = (state_35911[(2)]);
var inst_35894 = [inst_35886,inst_35893];
var inst_35895 = cljs.core.PersistentHashMap.fromArrays(inst_35888,inst_35894);
var inst_35896 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_35895);
var inst_35897 = redditv.utils.app_hash.call(null,app_state);
var inst_35898 = redditv.utils.set_hash_BANG_.call(null,inst_35897);
var state_35911__$1 = (function (){var statearr_35924 = state_35911;
(statearr_35924[(11)] = inst_35898);

(statearr_35924[(12)] = inst_35896);

return statearr_35924;
})();
if(cljs.core.truth_(reload_QMARK_)){
var statearr_35925_35962 = state_35911__$1;
(statearr_35925_35962[(1)] = (18));

} else {
var statearr_35926_35963 = state_35911__$1;
(statearr_35926_35963[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (3))){
var state_35911__$1 = state_35911;
var statearr_35927_35964 = state_35911__$1;
(statearr_35927_35964[(2)] = false);

(statearr_35927_35964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (12))){
var inst_35878 = (state_35911[(13)]);
var inst_35888 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_35889 = (inst_35878 < (0));
var state_35911__$1 = (function (){var statearr_35928 = state_35911;
(statearr_35928[(10)] = inst_35888);

return statearr_35928;
})();
if(cljs.core.truth_(inst_35889)){
var statearr_35929_35965 = state_35911__$1;
(statearr_35929_35965[(1)] = (15));

} else {
var statearr_35930_35966 = state_35911__$1;
(statearr_35930_35966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (2))){
var inst_35852 = (state_35911[(9)]);
var inst_35857 = inst_35852.cljs$lang$protocol_mask$partition0$;
var inst_35858 = (inst_35857 & (64));
var inst_35859 = inst_35852.cljs$core$ISeq$;
var inst_35860 = (cljs.core.PROTOCOL_SENTINEL === inst_35859);
var inst_35861 = (inst_35858) || (inst_35860);
var state_35911__$1 = state_35911;
if(cljs.core.truth_(inst_35861)){
var statearr_35931_35967 = state_35911__$1;
(statearr_35931_35967[(1)] = (5));

} else {
var statearr_35932_35968 = state_35911__$1;
(statearr_35932_35968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (19))){
var state_35911__$1 = state_35911;
var statearr_35933_35969 = state_35911__$1;
(statearr_35933_35969[(2)] = null);

(statearr_35933_35969[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (11))){
var inst_35886 = (state_35911[(7)]);
var inst_35886__$1 = (state_35911[(2)]);
var state_35911__$1 = (function (){var statearr_35934 = state_35911;
(statearr_35934[(7)] = inst_35886__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35886__$1)){
var statearr_35935_35970 = state_35911__$1;
(statearr_35935_35970[(1)] = (12));

} else {
var statearr_35936_35971 = state_35911__$1;
(statearr_35936_35971[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (9))){
var inst_35852 = (state_35911[(9)]);
var state_35911__$1 = state_35911;
var statearr_35937_35972 = state_35911__$1;
(statearr_35937_35972[(2)] = inst_35852);

(statearr_35937_35972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (5))){
var state_35911__$1 = state_35911;
var statearr_35938_35973 = state_35911__$1;
(statearr_35938_35973[(2)] = true);

(statearr_35938_35973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (14))){
var inst_35909 = (state_35911[(2)]);
var state_35911__$1 = state_35911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35911__$1,inst_35909);
} else {
if((state_val_35912 === (16))){
var inst_35878 = (state_35911[(13)]);
var state_35911__$1 = state_35911;
var statearr_35939_35974 = state_35911__$1;
(statearr_35939_35974[(2)] = inst_35878);

(statearr_35939_35974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (10))){
var inst_35873 = (state_35911[(2)]);
var inst_35874 = cljs.core.get.call(null,inst_35873,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var inst_35875 = cljs.core.get.call(null,inst_35873,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
var inst_35876 = cljs.core.get.call(null,inst_35873,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var inst_35877 = cljs.core.get.call(null,inst_35873,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var inst_35878 = cljs.core.get.call(null,inst_35873,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var inst_35879 = [new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"category","category",-593092832)];
var inst_35880 = [inst_35875,inst_35876,inst_35877];
var inst_35881 = cljs.core.PersistentHashMap.fromArrays(inst_35879,inst_35880);
var inst_35882 = redditv.reddit.get_subreddit_videos.call(null,inst_35874,inst_35881);
var inst_35883 = cljs.core.nth.call(null,inst_35882,(0),null);
var inst_35884 = cljs.core.nth.call(null,inst_35882,(1),null);
var state_35911__$1 = (function (){var statearr_35940 = state_35911;
(statearr_35940[(14)] = inst_35884);

(statearr_35940[(13)] = inst_35878);

return statearr_35940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35911__$1,(11),inst_35883);
} else {
if((state_val_35912 === (18))){
var inst_35900 = redditv.utils.force_app_reload_BANG_.call(null,app_state);
var state_35911__$1 = state_35911;
var statearr_35941_35975 = state_35911__$1;
(statearr_35941_35975[(2)] = inst_35900);

(statearr_35941_35975[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35912 === (8))){
var inst_35852 = (state_35911[(9)]);
var inst_35870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35852);
var state_35911__$1 = state_35911;
var statearr_35942_35976 = state_35911__$1;
(statearr_35942_35976[(2)] = inst_35870);

(statearr_35942_35976[(1)] = (10));


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
});})(c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_))
;
return ((function (switch__33256__auto__,c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_){
return (function() {
var redditv$playlist$state_machine__33257__auto__ = null;
var redditv$playlist$state_machine__33257__auto____0 = (function (){
var statearr_35946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35946[(0)] = redditv$playlist$state_machine__33257__auto__);

(statearr_35946[(1)] = (1));

return statearr_35946;
});
var redditv$playlist$state_machine__33257__auto____1 = (function (state_35911){
while(true){
var ret_value__33258__auto__ = (function (){try{while(true){
var result__33259__auto__ = switch__33256__auto__.call(null,state_35911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33259__auto__;
}
break;
}
}catch (e35947){if((e35947 instanceof Object)){
var ex__33260__auto__ = e35947;
var statearr_35948_35977 = state_35911;
(statearr_35948_35977[(5)] = ex__33260__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35978 = state_35911;
state_35911 = G__35978;
continue;
} else {
return ret_value__33258__auto__;
}
break;
}
});
redditv$playlist$state_machine__33257__auto__ = function(state_35911){
switch(arguments.length){
case 0:
return redditv$playlist$state_machine__33257__auto____0.call(this);
case 1:
return redditv$playlist$state_machine__33257__auto____1.call(this,state_35911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$state_machine__33257__auto____0;
redditv$playlist$state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$state_machine__33257__auto____1;
return redditv$playlist$state_machine__33257__auto__;
})()
;})(switch__33256__auto__,c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_))
})();
var state__33323__auto__ = (function (){var statearr_35949 = f__33322__auto__.call(null);
(statearr_35949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33321__auto__);

return statearr_35949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,map__35846,map__35846__$1,search,reload_QMARK_))
);

return c__33321__auto__;
});

redditv.playlist.reload.cljs$lang$maxFixedArity = (1);

redditv.playlist.reload.cljs$lang$applyTo = (function (seq35843){
var G__35844 = cljs.core.first.call(null,seq35843);
var seq35843__$1 = cljs.core.next.call(null,seq35843);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic(G__35844,seq35843__$1);
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
var map__35981 = cljs.core.deref.call(null,app_state);
var map__35981__$1 = ((((!((map__35981 == null)))?((((map__35981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35981):map__35981);
var playlist_selected_index = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__35985 = cljs.core.deref.call(null,app_state);
var map__35985__$1 = ((((!((map__35985 == null)))?((((map__35985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35985):map__35985);
var playlist_selected_index = cljs.core.get.call(null,map__35985__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35985__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__35985__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = (playlist_selected_index - (1));
var index__$1 = (((index < (0)))?(size - (1)):index);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index__$1);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index__$1;
});
redditv.playlist.open_current_video_comments = (function redditv$playlist$open_current_video_comments(app_state){
var video = redditv.playlist.get_selected.call(null,app_state);
return redditv.utils.open_reddit_comment.call(null,video);
});
