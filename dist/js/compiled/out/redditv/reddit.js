// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
goog.require('redditv.vimeo');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit,opts){
var map__41072 = opts;
var map__41072__$1 = ((((!((map__41072 == null)))?((((map__41072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41072):map__41072);
var limit = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var category = cljs.core.get.call(null,map__41072__$1,new cljs.core.Keyword(null,"category","category",-593092832),"hot");
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(category),cljs.core.str("/.json?limit="),cljs.core.str(limit)].join('');
var vec__41073 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__41073,(0),null);
var error_channel = cljs.core.nth.call(null,vec__41073,(1),null);
var c__38085__auto___41096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel){
return (function (state_41087){
var state_val_41088 = (state_41087[(1)]);
if((state_val_41088 === (1))){
var state_41087__$1 = state_41087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41087__$1,(2),success_channel);
} else {
if((state_val_41088 === (2))){
var inst_41078 = (state_41087[(2)]);
var inst_41079 = cljs.core.js__GT_clj.call(null,inst_41078,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_41080 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_41079);
var inst_41081 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_41080);
var inst_41082 = cljs.core.vec.call(null,inst_41081);
var inst_41083 = (function (){var result = inst_41079;
var data = inst_41082;
return ((function (result,data,inst_41078,inst_41079,inst_41080,inst_41081,inst_41082,state_val_41088,c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel){
return (function (p1__41047_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__41047_SHARP_);
});
;})(result,data,inst_41078,inst_41079,inst_41080,inst_41081,inst_41082,state_val_41088,c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel))
})();
var inst_41084 = cljs.core.map.call(null,inst_41083,inst_41082);
var inst_41085 = cljs.core.async.put_BANG_.call(null,output_channel,inst_41084);
var state_41087__$1 = state_41087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41087__$1,inst_41085);
} else {
return null;
}
}
});})(c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel))
;
return ((function (switch__37973__auto__,c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____0 = (function (){
var statearr_41092 = [null,null,null,null,null,null,null];
(statearr_41092[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__);

(statearr_41092[(1)] = (1));

return statearr_41092;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____1 = (function (state_41087){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_41087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e41093){if((e41093 instanceof Object)){
var ex__37977__auto__ = e41093;
var statearr_41094_41097 = state_41087;
(statearr_41094_41097[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41098 = state_41087;
state_41087 = G__41098;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__ = function(state_41087){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____1.call(this,state_41087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel))
})();
var state__38087__auto__ = (function (){var statearr_41095 = f__38086__auto__.call(null);
(statearr_41095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___41096);

return statearr_41095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___41096,map__41072,map__41072__$1,limit,category,output_channel,url,vec__41073,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.post_is_video_QMARK_ = (function redditv$reddit$post_is_video_QMARK_(post){
var or__30096__auto__ = redditv.youtube.is_youtube_url_QMARK_.call(null,post.call(null,new cljs.core.Keyword(null,"url","url",276297046)));
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return redditv.vimeo.is_vimeo_url_QMARK_.call(null,post.call(null,new cljs.core.Keyword(null,"url","url",276297046)));
}
});
redditv.reddit.post_is_nsfw_QMARK_ = (function redditv$reddit$post_is_nsfw_QMARK_(post){
return new cljs.core.Keyword(null,"over_18","over_18",-543032440).cljs$core$IFn$_invoke$arity$1(post);
});
redditv.reddit.get_subreddit_videos = (function redditv$reddit$get_subreddit_videos(subreddit,opts){
var map__41130 = opts;
var map__41130__$1 = ((((!((map__41130 == null)))?((((map__41130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41130):map__41130);
var allow_nsfw_QMARK_ = cljs.core.get.call(null,map__41130__$1,new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186));
var output_channel = cljs.core.async.chan.call(null);
var vec__41131 = redditv.reddit.get_subreddit_posts.call(null,subreddit,opts);
var success_channel = cljs.core.nth.call(null,vec__41131,(0),null);
var error_channel = cljs.core.nth.call(null,vec__41131,(1),null);
var c__38085__auto___41161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel){
return (function (state_41147){
var state_val_41148 = (state_41147[(1)]);
if((state_val_41148 === (1))){
var state_41147__$1 = state_41147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41147__$1,(2),success_channel);
} else {
if((state_val_41148 === (2))){
var inst_41136 = (state_41147[(2)]);
var inst_41137 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_41136);
var inst_41138 = cljs.core.not.call(null,allow_nsfw_QMARK_);
var state_41147__$1 = (function (){var statearr_41149 = state_41147;
(statearr_41149[(7)] = inst_41137);

return statearr_41149;
})();
if(inst_41138){
var statearr_41150_41162 = state_41147__$1;
(statearr_41150_41162[(1)] = (3));

} else {
var statearr_41151_41163 = state_41147__$1;
(statearr_41151_41163[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41148 === (3))){
var inst_41137 = (state_41147[(7)]);
var inst_41140 = cljs.core.complement.call(null,redditv.reddit.post_is_nsfw_QMARK_);
var inst_41141 = cljs.core.filterv.call(null,inst_41140,inst_41137);
var state_41147__$1 = state_41147;
var statearr_41152_41164 = state_41147__$1;
(statearr_41152_41164[(2)] = inst_41141);

(statearr_41152_41164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41148 === (4))){
var inst_41137 = (state_41147[(7)]);
var state_41147__$1 = state_41147;
var statearr_41153_41165 = state_41147__$1;
(statearr_41153_41165[(2)] = inst_41137);

(statearr_41153_41165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41148 === (5))){
var inst_41144 = (state_41147[(2)]);
var inst_41145 = cljs.core.async.put_BANG_.call(null,output_channel,inst_41144);
var state_41147__$1 = state_41147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41147__$1,inst_41145);
} else {
return null;
}
}
}
}
}
});})(c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel))
;
return ((function (switch__37973__auto__,c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____0 = (function (){
var statearr_41157 = [null,null,null,null,null,null,null,null];
(statearr_41157[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__);

(statearr_41157[(1)] = (1));

return statearr_41157;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____1 = (function (state_41147){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_41147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e41158){if((e41158 instanceof Object)){
var ex__37977__auto__ = e41158;
var statearr_41159_41166 = state_41147;
(statearr_41159_41166[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41167 = state_41147;
state_41147 = G__41167;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__ = function(state_41147){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____1.call(this,state_41147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel))
})();
var state__38087__auto__ = (function (){var statearr_41160 = f__38086__auto__.call(null);
(statearr_41160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___41161);

return statearr_41160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___41161,map__41130,map__41130__$1,allow_nsfw_QMARK_,output_channel,vec__41131,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
