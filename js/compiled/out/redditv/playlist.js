// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.playlist');
goog.require('cljs.core');
goog.require('redditv.utils');
goog.require('redditv.reddit');
redditv.playlist.reload = (function redditv$playlist$reload(var_args){
var args__31211__auto__ = [];
var len__31204__auto___41279 = arguments.length;
var i__31205__auto___41280 = (0);
while(true){
if((i__31205__auto___41280 < len__31204__auto___41279)){
args__31211__auto__.push((arguments[i__31205__auto___41280]));

var G__41281 = (i__31205__auto___41280 + (1));
i__31205__auto___41280 = G__41281;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,p__41178){
var map__41179 = p__41178;
var map__41179__$1 = ((((!((map__41179 == null)))?((((map__41179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41179):map__41179);
var search = cljs.core.get.call(null,map__41179__$1,new cljs.core.Keyword(null,"search","search",1564939822),null);
var reload_QMARK_ = cljs.core.get.call(null,map__41179__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),false);
var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_){
return (function (state_41241){
var state_val_41242 = (state_41241[(1)]);
if((state_val_41242 === (7))){
var inst_41198 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41243_41282 = state_41241__$1;
(statearr_41243_41282[(2)] = inst_41198);

(statearr_41243_41282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (20))){
var inst_41236 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
var statearr_41244_41283 = state_41241__$1;
(statearr_41244_41283[(2)] = inst_41236);

(statearr_41244_41283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (1))){
var inst_41185 = (state_41241[(7)]);
var inst_41185__$1 = cljs.core.deref.call(null,app_state);
var inst_41187 = (inst_41185__$1 == null);
var inst_41188 = cljs.core.not.call(null,inst_41187);
var state_41241__$1 = (function (){var statearr_41245 = state_41241;
(statearr_41245[(7)] = inst_41185__$1);

return statearr_41245;
})();
if(inst_41188){
var statearr_41246_41284 = state_41241__$1;
(statearr_41246_41284[(1)] = (2));

} else {
var statearr_41247_41285 = state_41241__$1;
(statearr_41247_41285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (4))){
var inst_41201 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41201)){
var statearr_41248_41286 = state_41241__$1;
(statearr_41248_41286[(1)] = (8));

} else {
var statearr_41249_41287 = state_41241__$1;
(statearr_41249_41287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (15))){
var state_41241__$1 = state_41241;
var statearr_41250_41288 = state_41241__$1;
(statearr_41250_41288[(2)] = (0));

(statearr_41250_41288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (13))){
var state_41241__$1 = state_41241;
var statearr_41251_41289 = state_41241__$1;
(statearr_41251_41289[(2)] = null);

(statearr_41251_41289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (6))){
var state_41241__$1 = state_41241;
var statearr_41252_41290 = state_41241__$1;
(statearr_41252_41290[(2)] = false);

(statearr_41252_41290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (17))){
var inst_41219 = (state_41241[(8)]);
var inst_41221 = (state_41241[(9)]);
var inst_41226 = (state_41241[(2)]);
var inst_41227 = [inst_41219,inst_41226];
var inst_41228 = cljs.core.PersistentHashMap.fromArrays(inst_41221,inst_41227);
var inst_41229 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.merge,inst_41228);
var inst_41230 = redditv.utils.app_hash.call(null,app_state);
var inst_41231 = redditv.utils.set_hash_BANG_.call(null,inst_41230);
var state_41241__$1 = (function (){var statearr_41253 = state_41241;
(statearr_41253[(10)] = inst_41231);

(statearr_41253[(11)] = inst_41229);

return statearr_41253;
})();
if(cljs.core.truth_(reload_QMARK_)){
var statearr_41254_41291 = state_41241__$1;
(statearr_41254_41291[(1)] = (18));

} else {
var statearr_41255_41292 = state_41241__$1;
(statearr_41255_41292[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (3))){
var state_41241__$1 = state_41241;
var statearr_41256_41293 = state_41241__$1;
(statearr_41256_41293[(2)] = false);

(statearr_41256_41293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (12))){
var inst_41211 = (state_41241[(12)]);
var inst_41221 = [new cljs.core.Keyword(null,"playlist","playlist",1952276871),new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961)];
var inst_41222 = (inst_41211 < (0));
var state_41241__$1 = (function (){var statearr_41257 = state_41241;
(statearr_41257[(9)] = inst_41221);

return statearr_41257;
})();
if(cljs.core.truth_(inst_41222)){
var statearr_41258_41294 = state_41241__$1;
(statearr_41258_41294[(1)] = (15));

} else {
var statearr_41259_41295 = state_41241__$1;
(statearr_41259_41295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (2))){
var inst_41185 = (state_41241[(7)]);
var inst_41190 = inst_41185.cljs$lang$protocol_mask$partition0$;
var inst_41191 = (inst_41190 & (64));
var inst_41192 = inst_41185.cljs$core$ISeq$;
var inst_41193 = (cljs.core.PROTOCOL_SENTINEL === inst_41192);
var inst_41194 = (inst_41191) || (inst_41193);
var state_41241__$1 = state_41241;
if(cljs.core.truth_(inst_41194)){
var statearr_41260_41296 = state_41241__$1;
(statearr_41260_41296[(1)] = (5));

} else {
var statearr_41261_41297 = state_41241__$1;
(statearr_41261_41297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (19))){
var state_41241__$1 = state_41241;
var statearr_41262_41298 = state_41241__$1;
(statearr_41262_41298[(2)] = null);

(statearr_41262_41298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (11))){
var inst_41219 = (state_41241[(8)]);
var inst_41219__$1 = (state_41241[(2)]);
var state_41241__$1 = (function (){var statearr_41263 = state_41241;
(statearr_41263[(8)] = inst_41219__$1);

return statearr_41263;
})();
if(cljs.core.truth_(inst_41219__$1)){
var statearr_41264_41299 = state_41241__$1;
(statearr_41264_41299[(1)] = (12));

} else {
var statearr_41265_41300 = state_41241__$1;
(statearr_41265_41300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (9))){
var inst_41185 = (state_41241[(7)]);
var state_41241__$1 = state_41241;
var statearr_41266_41301 = state_41241__$1;
(statearr_41266_41301[(2)] = inst_41185);

(statearr_41266_41301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (5))){
var state_41241__$1 = state_41241;
var statearr_41267_41302 = state_41241__$1;
(statearr_41267_41302[(2)] = true);

(statearr_41267_41302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (14))){
var inst_41239 = (state_41241[(2)]);
var state_41241__$1 = state_41241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41241__$1,inst_41239);
} else {
if((state_val_41242 === (16))){
var inst_41211 = (state_41241[(12)]);
var state_41241__$1 = state_41241;
var statearr_41268_41303 = state_41241__$1;
(statearr_41268_41303[(2)] = inst_41211);

(statearr_41268_41303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (10))){
var inst_41206 = (state_41241[(2)]);
var inst_41207 = cljs.core.get.call(null,inst_41206,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var inst_41208 = cljs.core.get.call(null,inst_41206,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
var inst_41209 = cljs.core.get.call(null,inst_41206,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var inst_41210 = cljs.core.get.call(null,inst_41206,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var inst_41211 = cljs.core.get.call(null,inst_41206,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var inst_41212 = [new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"category","category",-593092832)];
var inst_41213 = [inst_41208,inst_41209,inst_41210];
var inst_41214 = cljs.core.PersistentHashMap.fromArrays(inst_41212,inst_41213);
var inst_41215 = redditv.reddit.get_subreddit_videos.call(null,inst_41207,inst_41214);
var inst_41216 = cljs.core.nth.call(null,inst_41215,(0),null);
var inst_41217 = cljs.core.nth.call(null,inst_41215,(1),null);
var state_41241__$1 = (function (){var statearr_41269 = state_41241;
(statearr_41269[(12)] = inst_41211);

(statearr_41269[(13)] = inst_41217);

return statearr_41269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41241__$1,(11),inst_41216);
} else {
if((state_val_41242 === (18))){
var inst_41233 = redditv.utils.force_app_reload_BANG_.call(null,app_state);
var state_41241__$1 = state_41241;
var statearr_41270_41304 = state_41241__$1;
(statearr_41270_41304[(2)] = inst_41233);

(statearr_41270_41304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41242 === (8))){
var inst_41185 = (state_41241[(7)]);
var inst_41203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41185);
var state_41241__$1 = state_41241;
var statearr_41271_41305 = state_41241__$1;
(statearr_41271_41305[(2)] = inst_41203);

(statearr_41271_41305[(1)] = (10));


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
});})(c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_))
;
return ((function (switch__36401__auto__,c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_){
return (function() {
var redditv$playlist$state_machine__36402__auto__ = null;
var redditv$playlist$state_machine__36402__auto____0 = (function (){
var statearr_41275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41275[(0)] = redditv$playlist$state_machine__36402__auto__);

(statearr_41275[(1)] = (1));

return statearr_41275;
});
var redditv$playlist$state_machine__36402__auto____1 = (function (state_41241){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_41241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e41276){if((e41276 instanceof Object)){
var ex__36405__auto__ = e41276;
var statearr_41277_41306 = state_41241;
(statearr_41277_41306[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41307 = state_41241;
state_41241 = G__41307;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
redditv$playlist$state_machine__36402__auto__ = function(state_41241){
switch(arguments.length){
case 0:
return redditv$playlist$state_machine__36402__auto____0.call(this);
case 1:
return redditv$playlist$state_machine__36402__auto____1.call(this,state_41241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$playlist$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$playlist$state_machine__36402__auto____0;
redditv$playlist$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$playlist$state_machine__36402__auto____1;
return redditv$playlist$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_))
})();
var state__36515__auto__ = (function (){var statearr_41278 = f__36514__auto__.call(null);
(statearr_41278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_41278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__,map__41179,map__41179__$1,search,reload_QMARK_))
);

return c__36513__auto__;
});

redditv.playlist.reload.cljs$lang$maxFixedArity = (1);

redditv.playlist.reload.cljs$lang$applyTo = (function (seq41176){
var G__41177 = cljs.core.first.call(null,seq41176);
var seq41176__$1 = cljs.core.next.call(null,seq41176);
return redditv.playlist.reload.cljs$core$IFn$_invoke$arity$variadic(G__41177,seq41176__$1);
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
var map__41310 = cljs.core.deref.call(null,app_state);
var map__41310__$1 = ((((!((map__41310 == null)))?((((map__41310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41310):map__41310);
var playlist_selected_index = cljs.core.get.call(null,map__41310__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__41310__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__41310__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = cljs.core.mod.call(null,(playlist_selected_index + (1)),size);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index;
});
redditv.playlist.select_prev = (function redditv$playlist$select_prev(app_state){
var map__41314 = cljs.core.deref.call(null,app_state);
var map__41314__$1 = ((((!((map__41314 == null)))?((((map__41314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41314):map__41314);
var playlist_selected_index = cljs.core.get.call(null,map__41314__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__41314__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var subreddit = cljs.core.get.call(null,map__41314__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var size = cljs.core.count.call(null,playlist);
var index = (playlist_selected_index - (1));
var index__$1 = (((index < (0)))?(size - (1)):index);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),index__$1);

redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));

return index__$1;
});
