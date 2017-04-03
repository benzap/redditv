// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.utils');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36103 = arguments.length;
var i__31205__auto___36104 = (0);
while(true){
if((i__31205__auto___36104 < len__31204__auto___36103)){
args__31211__auto__.push((arguments[i__31205__auto___36104]));

var G__36105 = (i__31205__auto___36104 + (1));
i__31205__auto___36104 = G__36105;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,p__35999){
var map__36000 = p__35999;
var map__36000__$1 = ((((!((map__36000 == null)))?((((map__36000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36000):map__36000);
var search = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"search","search",1564939822),null);
var reload_QMARK_ = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false);
redditv.utils.set_loading_animation_BANG_.call(null,app_state,true);

var c__33321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_){
return (function (){
var f__33322__auto__ = (function (){var switch__33256__auto__ = ((function (c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_){
return (function (state_36064){
var state_val_36065 = (state_36064[(1)]);
if((state_val_36065 === (7))){
var inst_36019 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
var statearr_36066_36106 = state_36064__$1;
(statearr_36066_36106[(2)] = inst_36019);

(statearr_36066_36106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (20))){
var inst_36058 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
var statearr_36067_36107 = state_36064__$1;
(statearr_36067_36107[(2)] = inst_36058);

(statearr_36067_36107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (1))){
var inst_36006 = (state_36064[(7)]);
var inst_36006__$1 = cljs.core.deref.call(null,app_state);
var inst_36008 = (inst_36006__$1 == null);
var inst_36009 = cljs.core.not.call(null,inst_36008);
var state_36064__$1 = (function (){var statearr_36068 = state_36064;
(statearr_36068[(7)] = inst_36006__$1);

return statearr_36068;
})();
if(inst_36009){
var statearr_36069_36108 = state_36064__$1;
(statearr_36069_36108[(1)] = (2));

} else {
var statearr_36070_36109 = state_36064__$1;
(statearr_36070_36109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (4))){
var inst_36022 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
if(cljs.core.truth_(inst_36022)){
var statearr_36071_36110 = state_36064__$1;
(statearr_36071_36110[(1)] = (8));

} else {
var statearr_36072_36111 = state_36064__$1;
(statearr_36072_36111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (15))){
var state_36064__$1 = state_36064;
var statearr_36073_36112 = state_36064__$1;
(statearr_36073_36112[(2)] = (0));

(statearr_36073_36112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (13))){
var state_36064__$1 = state_36064;
var statearr_36074_36113 = state_36064__$1;
(statearr_36074_36113[(2)] = null);

(statearr_36074_36113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (6))){
var state_36064__$1 = state_36064;
var statearr_36075_36114 = state_36064__$1;
(statearr_36075_36114[(2)] = false);

(statearr_36075_36114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (17))){
var inst_36041 = (state_36064[(8)]);
var inst_36043 = (state_36064[(9)]);
var inst_36048 = (state_36064[(2)]);
var inst_36049 = [inst_36041,inst_36048];
var inst_36050 = cljs.core.PersistentHashMap.fromArrays(inst_36043,inst_36049);
var inst_36051 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_36050);
var inst_36052 = redditv.utils.app_hash.call(null,app_state);
var inst_36053 = redditv.utils.set_hash_BANG_.call(null,inst_36052);
var state_36064__$1 = (function (){var statearr_36076 = state_36064;
(statearr_36076[(10)] = inst_36051);

(statearr_36076[(11)] = inst_36053);

return statearr_36076;
})();
if(cljs.core.truth_(reload_QMARK_)){
var statearr_36077_36115 = state_36064__$1;
(statearr_36077_36115[(1)] = (18));

} else {
var statearr_36078_36116 = state_36064__$1;
(statearr_36078_36116[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (3))){
var state_36064__$1 = state_36064;
var statearr_36079_36117 = state_36064__$1;
(statearr_36079_36117[(2)] = false);

(statearr_36079_36117[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (12))){
var inst_36032 = (state_36064[(12)]);
var inst_36043 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_36044 = (inst_36032 < (0));
var state_36064__$1 = (function (){var statearr_36080 = state_36064;
(statearr_36080[(9)] = inst_36043);

return statearr_36080;
})();
if(cljs.core.truth_(inst_36044)){
var statearr_36081_36118 = state_36064__$1;
(statearr_36081_36118[(1)] = (15));

} else {
var statearr_36082_36119 = state_36064__$1;
(statearr_36082_36119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (2))){
var inst_36006 = (state_36064[(7)]);
var inst_36011 = inst_36006.cljs$lang$protocol_mask$partition0$;
var inst_36012 = (inst_36011 & (64));
var inst_36013 = inst_36006.cljs$core$ISeq$;
var inst_36014 = (cljs.core.PROTOCOL_SENTINEL === inst_36013);
var inst_36015 = (inst_36012) || (inst_36014);
var state_36064__$1 = state_36064;
if(cljs.core.truth_(inst_36015)){
var statearr_36083_36120 = state_36064__$1;
(statearr_36083_36120[(1)] = (5));

} else {
var statearr_36084_36121 = state_36064__$1;
(statearr_36084_36121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (19))){
var state_36064__$1 = state_36064;
var statearr_36085_36122 = state_36064__$1;
(statearr_36085_36122[(2)] = null);

(statearr_36085_36122[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (11))){
var inst_36041 = (state_36064[(8)]);
var inst_36041__$1 = (state_36064[(2)]);
var state_36064__$1 = (function (){var statearr_36086 = state_36064;
(statearr_36086[(8)] = inst_36041__$1);

return statearr_36086;
})();
if(cljs.core.truth_(inst_36041__$1)){
var statearr_36087_36123 = state_36064__$1;
(statearr_36087_36123[(1)] = (12));

} else {
var statearr_36088_36124 = state_36064__$1;
(statearr_36088_36124[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (9))){
var inst_36006 = (state_36064[(7)]);
var state_36064__$1 = state_36064;
var statearr_36089_36125 = state_36064__$1;
(statearr_36089_36125[(2)] = inst_36006);

(statearr_36089_36125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (5))){
var state_36064__$1 = state_36064;
var statearr_36090_36126 = state_36064__$1;
(statearr_36090_36126[(2)] = true);

(statearr_36090_36126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (14))){
var inst_36061 = (state_36064[(2)]);
var inst_36062 = redditv.utils.set_loading_animation_BANG_.call(null,app_state,false);
var state_36064__$1 = (function (){var statearr_36091 = state_36064;
(statearr_36091[(13)] = inst_36061);

return statearr_36091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36064__$1,inst_36062);
} else {
if((state_val_36065 === (16))){
var inst_36032 = (state_36064[(12)]);
var state_36064__$1 = state_36064;
var statearr_36092_36127 = state_36064__$1;
(statearr_36092_36127[(2)] = inst_36032);

(statearr_36092_36127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (10))){
var inst_36027 = (state_36064[(2)]);
var inst_36028 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var inst_36029 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
var inst_36030 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var inst_36031 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var inst_36032 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var inst_36033 = cljs.core.get.call(null,inst_36027,new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694));
var inst_36034 = [new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"category","category",-593092832)];
var inst_36035 = [inst_36029,inst_36030,inst_36031];
var inst_36036 = cljs.core.PersistentHashMap.fromArrays(inst_36034,inst_36035);
var inst_36037 = redditv.reddit.get_subreddit_videos.call(null,inst_36028,inst_36036);
var inst_36038 = cljs.core.nth.call(null,inst_36037,(0),null);
var inst_36039 = cljs.core.nth.call(null,inst_36037,(1),null);
var state_36064__$1 = (function (){var statearr_36093 = state_36064;
(statearr_36093[(14)] = inst_36039);

(statearr_36093[(15)] = inst_36033);

(statearr_36093[(12)] = inst_36032);

return statearr_36093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36064__$1,(11),inst_36038);
} else {
if((state_val_36065 === (18))){
var inst_36055 = redditv.utils.force_app_reload_BANG_.call(null,app_state);
var state_36064__$1 = state_36064;
var statearr_36094_36128 = state_36064__$1;
(statearr_36094_36128[(2)] = inst_36055);

(statearr_36094_36128[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (8))){
var inst_36006 = (state_36064[(7)]);
var inst_36024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36006);
var state_36064__$1 = state_36064;
var statearr_36095_36129 = state_36064__$1;
(statearr_36095_36129[(2)] = inst_36024);

(statearr_36095_36129[(1)] = (10));


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
});})(c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_))
;
return ((function (switch__33256__auto__,c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_){
return (function() {
var redditv$playlist$state_machine__33257__auto__ = null;
var redditv$playlist$state_machine__33257__auto____0 = (function (){
var statearr_36099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36099[(0)] = redditv$playlist$state_machine__33257__auto__);

(statearr_36099[(1)] = (1));

return statearr_36099;
});
var redditv$playlist$state_machine__33257__auto____1 = (function (state_36064){
while(true){
var ret_value__33258__auto__ = (function (){try{while(true){
var result__33259__auto__ = switch__33256__auto__.call(null,state_36064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33259__auto__;
}
break;
}
}catch (e36100){if((e36100 instanceof Object)){
var ex__33260__auto__ = e36100;
var statearr_36101_36130 = state_36064;
(statearr_36101_36130[(5)] = ex__33260__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33258__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36131 = state_36064;
state_36064 = G__36131;
continue;
} else {
return ret_value__33258__auto__;
}
break;
}
});
redditv$playlist$state_machine__33257__auto__ = function(state_36064){
switch(arguments.length){
case 0:
return redditv$playlist$state_machine__33257__auto____0.call(this);
case 1:
return redditv$playlist$state_machine__33257__auto____1.call(this,state_36064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$state_machine__33257__auto____0;
redditv$playlist$state_machine__33257__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$state_machine__33257__auto____1;
return redditv$playlist$state_machine__33257__auto__;
})()
;})(switch__33256__auto__,c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_))
})();
var state__33323__auto__ = (function (){var statearr_36102 = f__33322__auto__.call(null);
(statearr_36102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33321__auto__);

return statearr_36102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33323__auto__);
});})(c__33321__auto__,map__36000,map__36000__$1,search,reload_QMARK_))
);

return c__33321__auto__;
});

redditv.playlist.reload.cljs$lang$maxFixedArity = (1);

redditv.playlist.reload.cljs$lang$applyTo = (function (seq35997){
var G__35998 = cljs.core.first.call(null,seq35997);
var seq35997__$1 = cljs.core.next.call(null,seq35997);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic(G__35998,seq35997__$1);
});

redditv.playlist.has_video_with_id_QMARK_ = (function redditv$playlist$has_video_with_id_QMARK_(app_state,id){
var playlist = new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
return cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (playlist){
return (function (p1__36132_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36132_SHARP_),id);
});})(playlist))
,playlist)));
});
redditv.playlist.get_index_of_id = (function redditv$playlist$get_index_of_id(app_state,id){
var i = (0);
while(true){
var video_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),i));
if(cljs.core._EQ_.call(null,video_id,id)){
return i;
} else {
if((i >= (cljs.core.count.call(null,new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))) - (1)))){
return null;
} else {
var G__36133 = (i + (1));
i = G__36133;
continue;

}
}
break;
}
});
redditv.playlist.get_selected = (function redditv$playlist$get_selected(app_state){
var playlist = new cljs.core.Keyword(null,"playlist","playlist",1952276871).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var index = cljs.core.mod.call(null,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),cljs.core.count.call(null,playlist));
var id = new cljs.core.Keyword(null,"playlist-selected-id","playlist-selected-id",-1342487694).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
if((cljs.core.count.call(null,playlist) > (0))){
return cljs.core.nth.call(null,playlist,index);
} else {
return null;
}
});
redditv.playlist.select_next = (function redditv$playlist$select_next(app_state){
var map__36136 = cljs.core.deref.call(null,app_state);
var map__36136__$1 = ((((!((map__36136 == null)))?((((map__36136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36136):map__36136);
var playlist_selected_index = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__36140 = cljs.core.deref.call(null,app_state);
var map__36140__$1 = ((((!((map__36140 == null)))?((((map__36140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36140):map__36140);
var playlist_selected_index = cljs.core.get.call(null,map__36140__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__36140__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__36140__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
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
