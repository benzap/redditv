// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
goog.require('redditv.vimeo');
goog.require('redditv.utils');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.generate_url = (function redditv$reddit$generate_url(subreddit,p__35801){
var map__35807 = p__35801;
var map__35807__$1 = ((((!((map__35807 == null)))?((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var limit = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var category = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"category","category",-593092832),"hot");
var base_url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit)].join('');
var link_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["hot",null,"new",null,"rising",null], null), null);
var vec__35809 = clojure.string.split.call(null,category,/_/);
var sort = cljs.core.nth.call(null,vec__35809,(0),null);
var time = cljs.core.nth.call(null,vec__35809,(1),null);
if(cljs.core.truth_(link_categories.call(null,category))){
return [cljs.core.str(base_url),cljs.core.str("/"),cljs.core.str(sort),cljs.core.str("/.json"),cljs.core.str(redditv.utils.gen_query_params.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null)))].join('');
} else {
return [cljs.core.str(base_url),cljs.core.str("/"),cljs.core.str(sort),cljs.core.str("/.json"),cljs.core.str(redditv.utils.gen_query_params.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"limit","limit",-1355822363),limit,new cljs.core.Keyword(null,"sort","sort",953465918),sort,new cljs.core.Keyword(null,"t","t",-1397832519),time], null)))].join('');
}
});
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit,opts){
var output_channel = cljs.core.async.chan.call(null);
var url = redditv.reddit.generate_url.call(null,subreddit,opts);
var vec__35835 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__35835,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35835,(1),null);
var c__33335__auto___35857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel){
return (function (state_35848){
var state_val_35849 = (state_35848[(1)]);
if((state_val_35849 === (1))){
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35848__$1,(2),success_channel);
} else {
if((state_val_35849 === (2))){
var inst_35839 = (state_35848[(2)]);
var inst_35840 = cljs.core.js__GT_clj.call(null,inst_35839,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_35841 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35840);
var inst_35842 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_35841);
var inst_35843 = cljs.core.vec.call(null,inst_35842);
var inst_35844 = (function (){var result = inst_35840;
var data = inst_35843;
return ((function (result,data,inst_35839,inst_35840,inst_35841,inst_35842,inst_35843,state_val_35849,c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel){
return (function (p1__35812_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__35812_SHARP_);
});
;})(result,data,inst_35839,inst_35840,inst_35841,inst_35842,inst_35843,state_val_35849,c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel))
})();
var inst_35845 = cljs.core.map.call(null,inst_35844,inst_35843);
var inst_35846 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35845);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35848__$1,inst_35846);
} else {
return null;
}
}
});})(c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel))
;
return ((function (switch__33270__auto__,c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____0 = (function (){
var statearr_35853 = [null,null,null,null,null,null,null];
(statearr_35853[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__);

(statearr_35853[(1)] = (1));

return statearr_35853;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____1 = (function (state_35848){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35854){if((e35854 instanceof Object)){
var ex__33274__auto__ = e35854;
var statearr_35855_35858 = state_35848;
(statearr_35855_35858[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35859 = state_35848;
state_35848 = G__35859;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__ = function(state_35848){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____1.call(this,state_35848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel))
})();
var state__33337__auto__ = (function (){var statearr_35856 = f__33336__auto__.call(null);
(statearr_35856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___35857);

return statearr_35856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___35857,output_channel,url,vec__35835,success_channel,error_channel))
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
var map__35891 = opts;
var map__35891__$1 = ((((!((map__35891 == null)))?((((map__35891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35891):map__35891);
var allow_nsfw_QMARK_ = cljs.core.get.call(null,map__35891__$1,new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186));
var output_channel = cljs.core.async.chan.call(null);
var vec__35892 = redditv.reddit.get_subreddit_posts.call(null,subreddit,opts);
var success_channel = cljs.core.nth.call(null,vec__35892,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35892,(1),null);
var c__33335__auto___35922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel){
return (function (state_35908){
var state_val_35909 = (state_35908[(1)]);
if((state_val_35909 === (1))){
var state_35908__$1 = state_35908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35908__$1,(2),success_channel);
} else {
if((state_val_35909 === (2))){
var inst_35897 = (state_35908[(2)]);
var inst_35898 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_35897);
var inst_35899 = cljs.core.not.call(null,allow_nsfw_QMARK_);
var state_35908__$1 = (function (){var statearr_35910 = state_35908;
(statearr_35910[(7)] = inst_35898);

return statearr_35910;
})();
if(inst_35899){
var statearr_35911_35923 = state_35908__$1;
(statearr_35911_35923[(1)] = (3));

} else {
var statearr_35912_35924 = state_35908__$1;
(statearr_35912_35924[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (3))){
var inst_35898 = (state_35908[(7)]);
var inst_35901 = cljs.core.complement.call(null,redditv.reddit.post_is_nsfw_QMARK_);
var inst_35902 = cljs.core.filterv.call(null,inst_35901,inst_35898);
var state_35908__$1 = state_35908;
var statearr_35913_35925 = state_35908__$1;
(statearr_35913_35925[(2)] = inst_35902);

(statearr_35913_35925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (4))){
var inst_35898 = (state_35908[(7)]);
var state_35908__$1 = state_35908;
var statearr_35914_35926 = state_35908__$1;
(statearr_35914_35926[(2)] = inst_35898);

(statearr_35914_35926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35909 === (5))){
var inst_35905 = (state_35908[(2)]);
var inst_35906 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35905);
var state_35908__$1 = state_35908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35908__$1,inst_35906);
} else {
return null;
}
}
}
}
}
});})(c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel))
;
return ((function (switch__33270__auto__,c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____0 = (function (){
var statearr_35918 = [null,null,null,null,null,null,null,null];
(statearr_35918[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__);

(statearr_35918[(1)] = (1));

return statearr_35918;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____1 = (function (state_35908){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35919){if((e35919 instanceof Object)){
var ex__33274__auto__ = e35919;
var statearr_35920_35927 = state_35908;
(statearr_35920_35927[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35928 = state_35908;
state_35908 = G__35928;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__ = function(state_35908){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____1.call(this,state_35908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel))
})();
var state__33337__auto__ = (function (){var statearr_35921 = f__33336__auto__.call(null);
(statearr_35921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___35922);

return statearr_35921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___35922,map__35891,map__35891__$1,allow_nsfw_QMARK_,output_channel,vec__35892,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.get_subreddit_post_by_id = (function redditv$reddit$get_subreddit_post_by_id(id){
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/comments/"),cljs.core.str(id),cljs.core.str("/.json")].join('');
var vec__35961 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__35961,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35961,(1),null);
var c__33335__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel){
return (function (state_35979){
var state_val_35980 = (state_35979[(1)]);
if((state_val_35980 === (1))){
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35979__$1,(2),success_channel);
} else {
if((state_val_35980 === (2))){
var inst_35971 = (state_35979[(7)]);
var inst_35965 = (state_35979[(2)]);
var inst_35966 = cljs.core.js__GT_clj.call(null,inst_35965,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_35967 = cljs.core.first.call(null,inst_35966);
var inst_35968 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35967);
var inst_35969 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_35968);
var inst_35970 = cljs.core.first.call(null,inst_35969);
var inst_35971__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35970);
var state_35979__$1 = (function (){var statearr_35981 = state_35979;
(statearr_35981[(7)] = inst_35971__$1);

return statearr_35981;
})();
if(cljs.core.truth_(inst_35971__$1)){
var statearr_35982_35994 = state_35979__$1;
(statearr_35982_35994[(1)] = (3));

} else {
var statearr_35983_35995 = state_35979__$1;
(statearr_35983_35995[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (3))){
var inst_35971 = (state_35979[(7)]);
var inst_35973 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35971);
var state_35979__$1 = state_35979;
var statearr_35984_35996 = state_35979__$1;
(statearr_35984_35996[(2)] = inst_35973);

(statearr_35984_35996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (4))){
var inst_35975 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_35979__$1 = state_35979;
var statearr_35985_35997 = state_35979__$1;
(statearr_35985_35997[(2)] = inst_35975);

(statearr_35985_35997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35980 === (5))){
var inst_35977 = (state_35979[(2)]);
var state_35979__$1 = state_35979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35979__$1,inst_35977);
} else {
return null;
}
}
}
}
}
});})(c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel))
;
return ((function (switch__33270__auto__,c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__ = null;
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____1 = (function (state_35979){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__33274__auto__ = e35990;
var statearr_35991_35998 = state_35979;
(statearr_35991_35998[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_35979;
state_35979 = G__35999;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__ = function(state_35979){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____1.call(this,state_35979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____0;
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto____1;
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel))
})();
var state__33337__auto__ = (function (){var statearr_35992 = f__33336__auto__.call(null);
(statearr_35992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___35993);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___35993,output_channel,url,vec__35961,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.get_subreddit_video_by_id = (function redditv$reddit$get_subreddit_video_by_id(id){
var output_channel = cljs.core.async.chan.call(null);
var vec__36036 = redditv.reddit.get_subreddit_post_by_id.call(null,id);
var success_channel = cljs.core.nth.call(null,vec__36036,(0),null);
var error_channel = cljs.core.nth.call(null,vec__36036,(1),null);
var c__33335__auto___36072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel){
return (function (){
var f__33336__auto__ = (function (){var switch__33270__auto__ = ((function (c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel){
return (function (state_36054){
var state_val_36055 = (state_36054[(1)]);
if((state_val_36055 === (1))){
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(2),success_channel);
} else {
if((state_val_36055 === (2))){
var inst_36040 = (state_36054[(7)]);
var inst_36040__$1 = (state_36054[(2)]);
var state_36054__$1 = (function (){var statearr_36056 = state_36054;
(statearr_36056[(7)] = inst_36040__$1);

return statearr_36056;
})();
if(cljs.core.truth_(inst_36040__$1)){
var statearr_36057_36073 = state_36054__$1;
(statearr_36057_36073[(1)] = (3));

} else {
var statearr_36058_36074 = state_36054__$1;
(statearr_36058_36074[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (3))){
var inst_36040 = (state_36054[(7)]);
var inst_36042 = redditv.reddit.post_is_video_QMARK_.call(null,inst_36040);
var state_36054__$1 = state_36054;
if(cljs.core.truth_(inst_36042)){
var statearr_36059_36075 = state_36054__$1;
(statearr_36059_36075[(1)] = (6));

} else {
var statearr_36060_36076 = state_36054__$1;
(statearr_36060_36076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (4))){
var inst_36050 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_36054__$1 = state_36054;
var statearr_36061_36077 = state_36054__$1;
(statearr_36061_36077[(2)] = inst_36050);

(statearr_36061_36077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (5))){
var inst_36052 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36054__$1,inst_36052);
} else {
if((state_val_36055 === (6))){
var inst_36040 = (state_36054[(7)]);
var inst_36044 = cljs.core.async.put_BANG_.call(null,output_channel,inst_36040);
var state_36054__$1 = state_36054;
var statearr_36062_36078 = state_36054__$1;
(statearr_36062_36078[(2)] = inst_36044);

(statearr_36062_36078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (7))){
var inst_36046 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_36054__$1 = state_36054;
var statearr_36063_36079 = state_36054__$1;
(statearr_36063_36079[(2)] = inst_36046);

(statearr_36063_36079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36055 === (8))){
var inst_36048 = (state_36054[(2)]);
var state_36054__$1 = state_36054;
var statearr_36064_36080 = state_36054__$1;
(statearr_36064_36080[(2)] = inst_36048);

(statearr_36064_36080[(1)] = (5));


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
});})(c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel))
;
return ((function (switch__33270__auto__,c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__ = null;
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____0 = (function (){
var statearr_36068 = [null,null,null,null,null,null,null,null];
(statearr_36068[(0)] = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__);

(statearr_36068[(1)] = (1));

return statearr_36068;
});
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____1 = (function (state_36054){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_36054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e36069){if((e36069 instanceof Object)){
var ex__33274__auto__ = e36069;
var statearr_36070_36081 = state_36054;
(statearr_36070_36081[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36082 = state_36054;
state_36054 = G__36082;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__ = function(state_36054){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____1.call(this,state_36054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____0;
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto____1;
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel))
})();
var state__33337__auto__ = (function (){var statearr_36071 = f__33336__auto__.call(null);
(statearr_36071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33335__auto___36072);

return statearr_36071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33337__auto__);
});})(c__33335__auto___36072,output_channel,vec__36036,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
