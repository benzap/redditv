// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
redditv.reddit.reddit_url = "http://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit){
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str(".json?limit=100")].join('');
var vec__32744 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__32744,(0),null);
var error_channel = cljs.core.nth.call(null,vec__32744,(1),null);
var c__29924__auto___32764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel){
return (function (state_32755){
var state_val_32756 = (state_32755[(1)]);
if((state_val_32756 === (1))){
var state_32755__$1 = state_32755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32755__$1,(2),success_channel);
} else {
if((state_val_32756 === (2))){
var inst_32746 = (state_32755[(2)]);
var inst_32747 = cljs.core.js__GT_clj.call(null,inst_32746,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_32748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_32747);
var inst_32749 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_32748);
var inst_32750 = cljs.core.vec.call(null,inst_32749);
var inst_32751 = (function (){var result = inst_32747;
var data = inst_32750;
return ((function (result,data,inst_32746,inst_32747,inst_32748,inst_32749,inst_32750,state_val_32756,c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel){
return (function (p1__32723_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__32723_SHARP_);
});
;})(result,data,inst_32746,inst_32747,inst_32748,inst_32749,inst_32750,state_val_32756,c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel))
})();
var inst_32752 = cljs.core.map.call(null,inst_32751,inst_32750);
var inst_32753 = cljs.core.async.put_BANG_.call(null,output_channel,inst_32752);
var state_32755__$1 = state_32755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32755__$1,inst_32753);
} else {
return null;
}
}
});})(c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel))
;
return ((function (switch__29812__auto__,c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____0 = (function (){
var statearr_32760 = [null,null,null,null,null,null,null];
(statearr_32760[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__);

(statearr_32760[(1)] = (1));

return statearr_32760;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____1 = (function (state_32755){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32761){if((e32761 instanceof Object)){
var ex__29816__auto__ = e32761;
var statearr_32762_32765 = state_32755;
(statearr_32762_32765[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32766 = state_32755;
state_32755 = G__32766;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__ = function(state_32755){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____1.call(this,state_32755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel))
})();
var state__29926__auto__ = (function (){var statearr_32763 = f__29925__auto__.call(null);
(statearr_32763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32764);

return statearr_32763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32764,output_channel,url,vec__32744,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.post_is_video_QMARK_ = (function redditv$reddit$post_is_video_QMARK_(post){
return redditv.youtube.is_youtube_url_QMARK_.call(null,post.call(null,new cljs.core.Keyword(null,"url","url",276297046)));
});
redditv.reddit.get_subreddit_videos = (function redditv$reddit$get_subreddit_videos(subreddit){
var output_channel = cljs.core.async.chan.call(null);
var vec__32782 = redditv.reddit.get_subreddit_posts.call(null,subreddit);
var success_channel = cljs.core.nth.call(null,vec__32782,(0),null);
var error_channel = cljs.core.nth.call(null,vec__32782,(1),null);
var c__29924__auto___32797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel){
return (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (1))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32788__$1,(2),success_channel);
} else {
if((state_val_32789 === (2))){
var inst_32784 = (state_32788[(2)]);
var inst_32785 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_32784);
var inst_32786 = cljs.core.async.put_BANG_.call(null,output_channel,inst_32785);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32788__$1,inst_32786);
} else {
return null;
}
}
});})(c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel))
;
return ((function (switch__29812__auto__,c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null];
(statearr_32793[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____1 = (function (state_32788){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__29816__auto__ = e32794;
var statearr_32795_32798 = state_32788;
(statearr_32795_32798[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32799 = state_32788;
state_32788 = G__32799;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel))
})();
var state__29926__auto__ = (function (){var statearr_32796 = f__29925__auto__.call(null);
(statearr_32796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32797);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32797,output_channel,vec__32782,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
