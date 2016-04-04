// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit){
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str(".json?limit=100")].join('');
var vec__27052 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__27052,(0),null);
var error_channel = cljs.core.nth.call(null,vec__27052,(1),null);
var c__24744__auto___27072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel){
return (function (){
var f__24745__auto__ = (function (){var switch__24679__auto__ = ((function (c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel){
return (function (state_27063){
var state_val_27064 = (state_27063[(1)]);
if((state_val_27064 === (1))){
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27063__$1,(2),success_channel);
} else {
if((state_val_27064 === (2))){
var inst_27054 = (state_27063[(2)]);
var inst_27055 = cljs.core.js__GT_clj.call(null,inst_27054,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_27056 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_27055);
var inst_27057 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_27056);
var inst_27058 = cljs.core.vec.call(null,inst_27057);
var inst_27059 = (function (){var result = inst_27055;
var data = inst_27058;
return ((function (result,data,inst_27054,inst_27055,inst_27056,inst_27057,inst_27058,state_val_27064,c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel){
return (function (p1__27031_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__27031_SHARP_);
});
;})(result,data,inst_27054,inst_27055,inst_27056,inst_27057,inst_27058,state_val_27064,c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel))
})();
var inst_27060 = cljs.core.map.call(null,inst_27059,inst_27058);
var inst_27061 = cljs.core.async.put_BANG_.call(null,output_channel,inst_27060);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27063__$1,inst_27061);
} else {
return null;
}
}
});})(c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel))
;
return ((function (switch__24679__auto__,c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____0 = (function (){
var statearr_27068 = [null,null,null,null,null,null,null];
(statearr_27068[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__);

(statearr_27068[(1)] = (1));

return statearr_27068;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____1 = (function (state_27063){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27069){if((e27069 instanceof Object)){
var ex__24683__auto__ = e27069;
var statearr_27070_27073 = state_27063;
(statearr_27070_27073[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27074 = state_27063;
state_27063 = G__27074;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__ = function(state_27063){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____1.call(this,state_27063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel))
})();
var state__24746__auto__ = (function (){var statearr_27071 = f__24745__auto__.call(null);
(statearr_27071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24744__auto___27072);

return statearr_27071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24746__auto__);
});})(c__24744__auto___27072,output_channel,url,vec__27052,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.post_is_video_QMARK_ = (function redditv$reddit$post_is_video_QMARK_(post){
return redditv.youtube.is_youtube_url_QMARK_.call(null,post.call(null,new cljs.core.Keyword(null,"url","url",276297046)));
});
redditv.reddit.get_subreddit_videos = (function redditv$reddit$get_subreddit_videos(subreddit){
var output_channel = cljs.core.async.chan.call(null);
var vec__27090 = redditv.reddit.get_subreddit_posts.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__27090,(0),null);
var error_channel = cljs.core.nth.call(null,vec__27090,(1),null);
var c__24744__auto___27105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel){
return (function (){
var f__24745__auto__ = (function (){var switch__24679__auto__ = ((function (c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel){
return (function (state_27096){
var state_val_27097 = (state_27096[(1)]);
if((state_val_27097 === (1))){
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27096__$1,(2),success_channel);
} else {
if((state_val_27097 === (2))){
var inst_27092 = (state_27096[(2)]);
var inst_27093 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_27092);
var inst_27094 = cljs.core.async.put_BANG_.call(null,output_channel,inst_27093);
var state_27096__$1 = state_27096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27096__$1,inst_27094);
} else {
return null;
}
}
});})(c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel))
;
return ((function (switch__24679__auto__,c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____0 = (function (){
var statearr_27101 = [null,null,null,null,null,null,null];
(statearr_27101[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__);

(statearr_27101[(1)] = (1));

return statearr_27101;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____1 = (function (state_27096){
while(true){
var ret_value__24681__auto__ = (function (){try{while(true){
var result__24682__auto__ = switch__24679__auto__.call(null,state_27096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24682__auto__;
}
break;
}
}catch (e27102){if((e27102 instanceof Object)){
var ex__24683__auto__ = e27102;
var statearr_27103_27106 = state_27096;
(statearr_27103_27106[(5)] = ex__24683__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27107 = state_27096;
state_27096 = G__27107;
continue;
} else {
return ret_value__24681__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__ = function(state_27096){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____1.call(this,state_27096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__24680__auto__;
})()
;})(switch__24679__auto__,c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel))
})();
var state__24746__auto__ = (function (){var statearr_27104 = f__24745__auto__.call(null);
(statearr_27104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24744__auto___27105);

return statearr_27104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24746__auto__);
});})(c__24744__auto___27105,output_channel,vec__27090,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
