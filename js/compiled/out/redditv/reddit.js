// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
goog.require('redditv.vimeo');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit,opts){
var map__41078 = opts;
var map__41078__$1 = ((((!((map__41078 == null)))?((((map__41078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41078):map__41078);
var limit = cljs.core.get.call(null,map__41078__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var category = cljs.core.get.call(null,map__41078__$1,new cljs.core.Keyword(null,"category","category",-593092832),"hot");
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(category),cljs.core.str("/.json?limit="),cljs.core.str(limit)].join('');
var vec__41079 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__41079,(0),null);
var error_channel = cljs.core.nth.call(null,vec__41079,(1),null);
var c__36513__auto___41102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel){
return (function (state_41093){
var state_val_41094 = (state_41093[(1)]);
if((state_val_41094 === (1))){
var state_41093__$1 = state_41093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41093__$1,(2),success_channel);
} else {
if((state_val_41094 === (2))){
var inst_41084 = (state_41093[(2)]);
var inst_41085 = cljs.core.js__GT_clj.call(null,inst_41084,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_41086 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_41085);
var inst_41087 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_41086);
var inst_41088 = cljs.core.vec.call(null,inst_41087);
var inst_41089 = (function (){var result = inst_41085;
var data = inst_41088;
return ((function (result,data,inst_41084,inst_41085,inst_41086,inst_41087,inst_41088,state_val_41094,c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel){
return (function (p1__41053_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__41053_SHARP_);
});
;})(result,data,inst_41084,inst_41085,inst_41086,inst_41087,inst_41088,state_val_41094,c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel))
})();
var inst_41090 = cljs.core.map.call(null,inst_41089,inst_41088);
var inst_41091 = cljs.core.async.put_BANG_.call(null,output_channel,inst_41090);
var state_41093__$1 = state_41093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41093__$1,inst_41091);
} else {
return null;
}
}
});})(c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel))
;
return ((function (switch__36401__auto__,c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____0 = (function (){
var statearr_41098 = [null,null,null,null,null,null,null];
(statearr_41098[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__);

(statearr_41098[(1)] = (1));

return statearr_41098;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____1 = (function (state_41093){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_41093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e41099){if((e41099 instanceof Object)){
var ex__36405__auto__ = e41099;
var statearr_41100_41103 = state_41093;
(statearr_41100_41103[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41104 = state_41093;
state_41093 = G__41104;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__ = function(state_41093){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____1.call(this,state_41093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel))
})();
var state__36515__auto__ = (function (){var statearr_41101 = f__36514__auto__.call(null);
(statearr_41101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___41102);

return statearr_41101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___41102,map__41078,map__41078__$1,limit,category,output_channel,url,vec__41079,success_channel,error_channel))
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
var map__41136 = opts;
var map__41136__$1 = ((((!((map__41136 == null)))?((((map__41136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41136):map__41136);
var allow_nsfw_QMARK_ = cljs.core.get.call(null,map__41136__$1,new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186));
var output_channel = cljs.core.async.chan.call(null);
var vec__41137 = redditv.reddit.get_subreddit_posts.call(null,subreddit,opts);
var success_channel = cljs.core.nth.call(null,vec__41137,(0),null);
var error_channel = cljs.core.nth.call(null,vec__41137,(1),null);
var c__36513__auto___41167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel){
return (function (state_41153){
var state_val_41154 = (state_41153[(1)]);
if((state_val_41154 === (1))){
var state_41153__$1 = state_41153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41153__$1,(2),success_channel);
} else {
if((state_val_41154 === (2))){
var inst_41142 = (state_41153[(2)]);
var inst_41143 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_41142);
var inst_41144 = cljs.core.not.call(null,allow_nsfw_QMARK_);
var state_41153__$1 = (function (){var statearr_41155 = state_41153;
(statearr_41155[(7)] = inst_41143);

return statearr_41155;
})();
if(inst_41144){
var statearr_41156_41168 = state_41153__$1;
(statearr_41156_41168[(1)] = (3));

} else {
var statearr_41157_41169 = state_41153__$1;
(statearr_41157_41169[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41154 === (3))){
var inst_41143 = (state_41153[(7)]);
var inst_41146 = cljs.core.complement.call(null,redditv.reddit.post_is_nsfw_QMARK_);
var inst_41147 = cljs.core.filterv.call(null,inst_41146,inst_41143);
var state_41153__$1 = state_41153;
var statearr_41158_41170 = state_41153__$1;
(statearr_41158_41170[(2)] = inst_41147);

(statearr_41158_41170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41154 === (4))){
var inst_41143 = (state_41153[(7)]);
var state_41153__$1 = state_41153;
var statearr_41159_41171 = state_41153__$1;
(statearr_41159_41171[(2)] = inst_41143);

(statearr_41159_41171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41154 === (5))){
var inst_41150 = (state_41153[(2)]);
var inst_41151 = cljs.core.async.put_BANG_.call(null,output_channel,inst_41150);
var state_41153__$1 = state_41153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41153__$1,inst_41151);
} else {
return null;
}
}
}
}
}
});})(c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel))
;
return ((function (switch__36401__auto__,c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____0 = (function (){
var statearr_41163 = [null,null,null,null,null,null,null,null];
(statearr_41163[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__);

(statearr_41163[(1)] = (1));

return statearr_41163;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____1 = (function (state_41153){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_41153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e41164){if((e41164 instanceof Object)){
var ex__36405__auto__ = e41164;
var statearr_41165_41172 = state_41153;
(statearr_41165_41172[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41173 = state_41153;
state_41153 = G__41173;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__ = function(state_41153){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____1.call(this,state_41153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel))
})();
var state__36515__auto__ = (function (){var statearr_41166 = f__36514__auto__.call(null);
(statearr_41166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___41167);

return statearr_41166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___41167,map__41136,map__41136__$1,allow_nsfw_QMARK_,output_channel,vec__41137,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
