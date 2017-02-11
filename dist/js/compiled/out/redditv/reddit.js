// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
goog.require('redditv.vimeo');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit,opts){
var map__37331 = opts;
var map__37331__$1 = ((((!((map__37331 == null)))?((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37331):map__37331);
var limit = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var category = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"category","category",-593092832),"hot");
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(category),cljs.core.str("/.json?limit="),cljs.core.str(limit)].join('');
var vec__37332 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__37332,(0),null);
var error_channel = cljs.core.nth.call(null,vec__37332,(1),null);
var c__33327__auto___37355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel){
return (function (){
var f__33328__auto__ = (function (){var switch__33262__auto__ = ((function (c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel){
return (function (state_37346){
var state_val_37347 = (state_37346[(1)]);
if((state_val_37347 === (1))){
var state_37346__$1 = state_37346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37346__$1,(2),success_channel);
} else {
if((state_val_37347 === (2))){
var inst_37337 = (state_37346[(2)]);
var inst_37338 = cljs.core.js__GT_clj.call(null,inst_37337,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_37339 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_37338);
var inst_37340 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_37339);
var inst_37341 = cljs.core.vec.call(null,inst_37340);
var inst_37342 = (function (){var result = inst_37338;
var data = inst_37341;
return ((function (result,data,inst_37337,inst_37338,inst_37339,inst_37340,inst_37341,state_val_37347,c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel){
return (function (p1__37306_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__37306_SHARP_);
});
;})(result,data,inst_37337,inst_37338,inst_37339,inst_37340,inst_37341,state_val_37347,c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel))
})();
var inst_37343 = cljs.core.map.call(null,inst_37342,inst_37341);
var inst_37344 = cljs.core.async.put_BANG_.call(null,output_channel,inst_37343);
var state_37346__$1 = state_37346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37346__$1,inst_37344);
} else {
return null;
}
}
});})(c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel))
;
return ((function (switch__33262__auto__,c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____0 = (function (){
var statearr_37351 = [null,null,null,null,null,null,null];
(statearr_37351[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__);

(statearr_37351[(1)] = (1));

return statearr_37351;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____1 = (function (state_37346){
while(true){
var ret_value__33264__auto__ = (function (){try{while(true){
var result__33265__auto__ = switch__33262__auto__.call(null,state_37346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33265__auto__;
}
break;
}
}catch (e37352){if((e37352 instanceof Object)){
var ex__33266__auto__ = e37352;
var statearr_37353_37356 = state_37346;
(statearr_37353_37356[(5)] = ex__33266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37346;
state_37346 = G__37357;
continue;
} else {
return ret_value__33264__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__ = function(state_37346){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____1.call(this,state_37346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__33263__auto__;
})()
;})(switch__33262__auto__,c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel))
})();
var state__33329__auto__ = (function (){var statearr_37354 = f__33328__auto__.call(null);
(statearr_37354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33327__auto___37355);

return statearr_37354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33329__auto__);
});})(c__33327__auto___37355,map__37331,map__37331__$1,limit,category,output_channel,url,vec__37332,success_channel,error_channel))
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
var map__37389 = opts;
var map__37389__$1 = ((((!((map__37389 == null)))?((((map__37389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37389):map__37389);
var allow_nsfw_QMARK_ = cljs.core.get.call(null,map__37389__$1,new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186));
var output_channel = cljs.core.async.chan.call(null);
var vec__37390 = redditv.reddit.get_subreddit_posts.call(null,subreddit,opts);
var success_channel = cljs.core.nth.call(null,vec__37390,(0),null);
var error_channel = cljs.core.nth.call(null,vec__37390,(1),null);
var c__33327__auto___37420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel){
return (function (){
var f__33328__auto__ = (function (){var switch__33262__auto__ = ((function (c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel){
return (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (1))){
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(2),success_channel);
} else {
if((state_val_37407 === (2))){
var inst_37395 = (state_37406[(2)]);
var inst_37396 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_37395);
var inst_37397 = cljs.core.not.call(null,allow_nsfw_QMARK_);
var state_37406__$1 = (function (){var statearr_37408 = state_37406;
(statearr_37408[(7)] = inst_37396);

return statearr_37408;
})();
if(inst_37397){
var statearr_37409_37421 = state_37406__$1;
(statearr_37409_37421[(1)] = (3));

} else {
var statearr_37410_37422 = state_37406__$1;
(statearr_37410_37422[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (3))){
var inst_37396 = (state_37406[(7)]);
var inst_37399 = cljs.core.complement.call(null,redditv.reddit.post_is_nsfw_QMARK_);
var inst_37400 = cljs.core.filterv.call(null,inst_37399,inst_37396);
var state_37406__$1 = state_37406;
var statearr_37411_37423 = state_37406__$1;
(statearr_37411_37423[(2)] = inst_37400);

(statearr_37411_37423[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (4))){
var inst_37396 = (state_37406[(7)]);
var state_37406__$1 = state_37406;
var statearr_37412_37424 = state_37406__$1;
(statearr_37412_37424[(2)] = inst_37396);

(statearr_37412_37424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (5))){
var inst_37403 = (state_37406[(2)]);
var inst_37404 = cljs.core.async.put_BANG_.call(null,output_channel,inst_37403);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
return null;
}
}
}
}
}
});})(c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel))
;
return ((function (switch__33262__auto__,c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____0 = (function (){
var statearr_37416 = [null,null,null,null,null,null,null,null];
(statearr_37416[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__);

(statearr_37416[(1)] = (1));

return statearr_37416;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____1 = (function (state_37406){
while(true){
var ret_value__33264__auto__ = (function (){try{while(true){
var result__33265__auto__ = switch__33262__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33265__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33265__auto__;
}
break;
}
}catch (e37417){if((e37417 instanceof Object)){
var ex__33266__auto__ = e37417;
var statearr_37418_37425 = state_37406;
(statearr_37418_37425[(5)] = ex__33266__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37426 = state_37406;
state_37406 = G__37426;
continue;
} else {
return ret_value__33264__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__33263__auto__;
})()
;})(switch__33262__auto__,c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel))
})();
var state__33329__auto__ = (function (){var statearr_37419 = f__33328__auto__.call(null);
(statearr_37419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33327__auto___37420);

return statearr_37419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33329__auto__);
});})(c__33327__auto___37420,map__37389,map__37389__$1,allow_nsfw_QMARK_,output_channel,vec__37390,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
