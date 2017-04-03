// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.reddit');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.jsonp');
goog.require('redditv.youtube');
goog.require('redditv.vimeo');
redditv.reddit.reddit_url = "https://www.reddit.com";
redditv.reddit.get_subreddit_posts = (function redditv$reddit$get_subreddit_posts(subreddit,opts){
var map__35747 = opts;
var map__35747__$1 = ((((!((map__35747 == null)))?((((map__35747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35747):map__35747);
var limit = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var category = cljs.core.get.call(null,map__35747__$1,new cljs.core.Keyword(null,"category","category",-593092832),"hot");
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(category),cljs.core.str("/.json?limit="),cljs.core.str(limit)].join('');
var vec__35748 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__35748,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35748,(1),null);
var c__33308__auto___35771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel){
return (function (state_35762){
var state_val_35763 = (state_35762[(1)]);
if((state_val_35763 === (1))){
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35762__$1,(2),success_channel);
} else {
if((state_val_35763 === (2))){
var inst_35753 = (state_35762[(2)]);
var inst_35754 = cljs.core.js__GT_clj.call(null,inst_35753,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_35755 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35754);
var inst_35756 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_35755);
var inst_35757 = cljs.core.vec.call(null,inst_35756);
var inst_35758 = (function (){var result = inst_35754;
var data = inst_35757;
return ((function (result,data,inst_35753,inst_35754,inst_35755,inst_35756,inst_35757,state_val_35763,c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel){
return (function (p1__35722_SHARP_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__35722_SHARP_);
});
;})(result,data,inst_35753,inst_35754,inst_35755,inst_35756,inst_35757,state_val_35763,c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel))
})();
var inst_35759 = cljs.core.map.call(null,inst_35758,inst_35757);
var inst_35760 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35759);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35762__$1,inst_35760);
} else {
return null;
}
}
});})(c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel))
;
return ((function (switch__33243__auto__,c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__ = null;
var redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____0 = (function (){
var statearr_35767 = [null,null,null,null,null,null,null];
(statearr_35767[(0)] = redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__);

(statearr_35767[(1)] = (1));

return statearr_35767;
});
var redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____1 = (function (state_35762){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_35762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e35768){if((e35768 instanceof Object)){
var ex__33247__auto__ = e35768;
var statearr_35769_35772 = state_35762;
(statearr_35769_35772[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35773 = state_35762;
state_35762 = G__35773;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__ = function(state_35762){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____1.call(this,state_35762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____0;
redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto____1;
return redditv$reddit$get_subreddit_posts_$_state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel))
})();
var state__33310__auto__ = (function (){var statearr_35770 = f__33309__auto__.call(null);
(statearr_35770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto___35771);

return statearr_35770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto___35771,map__35747,map__35747__$1,limit,category,output_channel,url,vec__35748,success_channel,error_channel))
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
var map__35805 = opts;
var map__35805__$1 = ((((!((map__35805 == null)))?((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35805):map__35805);
var allow_nsfw_QMARK_ = cljs.core.get.call(null,map__35805__$1,new cljs.core.Keyword(null,"allow-nsfw?","allow-nsfw?",-265554186));
var output_channel = cljs.core.async.chan.call(null);
var vec__35806 = redditv.reddit.get_subreddit_posts.call(null,subreddit,opts);
var success_channel = cljs.core.nth.call(null,vec__35806,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35806,(1),null);
var c__33308__auto___35836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel){
return (function (state_35822){
var state_val_35823 = (state_35822[(1)]);
if((state_val_35823 === (1))){
var state_35822__$1 = state_35822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35822__$1,(2),success_channel);
} else {
if((state_val_35823 === (2))){
var inst_35811 = (state_35822[(2)]);
var inst_35812 = cljs.core.filterv.call(null,redditv.reddit.post_is_video_QMARK_,inst_35811);
var inst_35813 = cljs.core.not.call(null,allow_nsfw_QMARK_);
var state_35822__$1 = (function (){var statearr_35824 = state_35822;
(statearr_35824[(7)] = inst_35812);

return statearr_35824;
})();
if(inst_35813){
var statearr_35825_35837 = state_35822__$1;
(statearr_35825_35837[(1)] = (3));

} else {
var statearr_35826_35838 = state_35822__$1;
(statearr_35826_35838[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (3))){
var inst_35812 = (state_35822[(7)]);
var inst_35815 = cljs.core.complement.call(null,redditv.reddit.post_is_nsfw_QMARK_);
var inst_35816 = cljs.core.filterv.call(null,inst_35815,inst_35812);
var state_35822__$1 = state_35822;
var statearr_35827_35839 = state_35822__$1;
(statearr_35827_35839[(2)] = inst_35816);

(statearr_35827_35839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (4))){
var inst_35812 = (state_35822[(7)]);
var state_35822__$1 = state_35822;
var statearr_35828_35840 = state_35822__$1;
(statearr_35828_35840[(2)] = inst_35812);

(statearr_35828_35840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35823 === (5))){
var inst_35819 = (state_35822[(2)]);
var inst_35820 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35819);
var state_35822__$1 = state_35822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35822__$1,inst_35820);
} else {
return null;
}
}
}
}
}
});})(c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel))
;
return ((function (switch__33243__auto__,c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__ = null;
var redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____0 = (function (){
var statearr_35832 = [null,null,null,null,null,null,null,null];
(statearr_35832[(0)] = redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__);

(statearr_35832[(1)] = (1));

return statearr_35832;
});
var redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____1 = (function (state_35822){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_35822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e35833){if((e35833 instanceof Object)){
var ex__33247__auto__ = e35833;
var statearr_35834_35841 = state_35822;
(statearr_35834_35841[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35842 = state_35822;
state_35822 = G__35842;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__ = function(state_35822){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____1.call(this,state_35822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____0;
redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto____1;
return redditv$reddit$get_subreddit_videos_$_state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel))
})();
var state__33310__auto__ = (function (){var statearr_35835 = f__33309__auto__.call(null);
(statearr_35835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto___35836);

return statearr_35835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto___35836,map__35805,map__35805__$1,allow_nsfw_QMARK_,output_channel,vec__35806,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.get_subreddit_post_by_id = (function redditv$reddit$get_subreddit_post_by_id(id){
var output_channel = cljs.core.async.chan.call(null);
var url = [cljs.core.str(redditv.reddit.reddit_url),cljs.core.str("/comments/"),cljs.core.str(id),cljs.core.str("/.json")].join('');
var vec__35875 = redditv.jsonp.send_jsonp.call(null,url);
var success_channel = cljs.core.nth.call(null,vec__35875,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35875,(1),null);
var c__33308__auto___35907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel){
return (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (1))){
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35893__$1,(2),success_channel);
} else {
if((state_val_35894 === (2))){
var inst_35885 = (state_35893[(7)]);
var inst_35879 = (state_35893[(2)]);
var inst_35880 = cljs.core.js__GT_clj.call(null,inst_35879,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_35881 = cljs.core.first.call(null,inst_35880);
var inst_35882 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35881);
var inst_35883 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_35882);
var inst_35884 = cljs.core.first.call(null,inst_35883);
var inst_35885__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_35884);
var state_35893__$1 = (function (){var statearr_35895 = state_35893;
(statearr_35895[(7)] = inst_35885__$1);

return statearr_35895;
})();
if(cljs.core.truth_(inst_35885__$1)){
var statearr_35896_35908 = state_35893__$1;
(statearr_35896_35908[(1)] = (3));

} else {
var statearr_35897_35909 = state_35893__$1;
(statearr_35897_35909[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (3))){
var inst_35885 = (state_35893[(7)]);
var inst_35887 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35885);
var state_35893__$1 = state_35893;
var statearr_35898_35910 = state_35893__$1;
(statearr_35898_35910[(2)] = inst_35887);

(statearr_35898_35910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (4))){
var inst_35889 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_35893__$1 = state_35893;
var statearr_35899_35911 = state_35893__$1;
(statearr_35899_35911[(2)] = inst_35889);

(statearr_35899_35911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (5))){
var inst_35891 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35893__$1,inst_35891);
} else {
return null;
}
}
}
}
}
});})(c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel))
;
return ((function (switch__33243__auto__,c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__ = null;
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____0 = (function (){
var statearr_35903 = [null,null,null,null,null,null,null,null];
(statearr_35903[(0)] = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__);

(statearr_35903[(1)] = (1));

return statearr_35903;
});
var redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____1 = (function (state_35893){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_35893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e35904){if((e35904 instanceof Object)){
var ex__33247__auto__ = e35904;
var statearr_35905_35912 = state_35893;
(statearr_35905_35912[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35913 = state_35893;
state_35893 = G__35913;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__ = function(state_35893){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____1.call(this,state_35893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____0;
redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto____1;
return redditv$reddit$get_subreddit_post_by_id_$_state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel))
})();
var state__33310__auto__ = (function (){var statearr_35906 = f__33309__auto__.call(null);
(statearr_35906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto___35907);

return statearr_35906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto___35907,output_channel,url,vec__35875,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
redditv.reddit.get_subreddit_video_by_id = (function redditv$reddit$get_subreddit_video_by_id(id){
var output_channel = cljs.core.async.chan.call(null);
var vec__35950 = redditv.reddit.get_subreddit_post_by_id.call(null,id);
var success_channel = cljs.core.nth.call(null,vec__35950,(0),null);
var error_channel = cljs.core.nth.call(null,vec__35950,(1),null);
var c__33308__auto___35986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel){
return (function (){
var f__33309__auto__ = (function (){var switch__33243__auto__ = ((function (c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel){
return (function (state_35968){
var state_val_35969 = (state_35968[(1)]);
if((state_val_35969 === (1))){
var state_35968__$1 = state_35968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35968__$1,(2),success_channel);
} else {
if((state_val_35969 === (2))){
var inst_35954 = (state_35968[(7)]);
var inst_35954__$1 = (state_35968[(2)]);
var state_35968__$1 = (function (){var statearr_35970 = state_35968;
(statearr_35970[(7)] = inst_35954__$1);

return statearr_35970;
})();
if(cljs.core.truth_(inst_35954__$1)){
var statearr_35971_35987 = state_35968__$1;
(statearr_35971_35987[(1)] = (3));

} else {
var statearr_35972_35988 = state_35968__$1;
(statearr_35972_35988[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (3))){
var inst_35954 = (state_35968[(7)]);
var inst_35956 = redditv.reddit.post_is_video_QMARK_.call(null,inst_35954);
var state_35968__$1 = state_35968;
if(cljs.core.truth_(inst_35956)){
var statearr_35973_35989 = state_35968__$1;
(statearr_35973_35989[(1)] = (6));

} else {
var statearr_35974_35990 = state_35968__$1;
(statearr_35974_35990[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (4))){
var inst_35964 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_35968__$1 = state_35968;
var statearr_35975_35991 = state_35968__$1;
(statearr_35975_35991[(2)] = inst_35964);

(statearr_35975_35991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (5))){
var inst_35966 = (state_35968[(2)]);
var state_35968__$1 = state_35968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35968__$1,inst_35966);
} else {
if((state_val_35969 === (6))){
var inst_35954 = (state_35968[(7)]);
var inst_35958 = cljs.core.async.put_BANG_.call(null,output_channel,inst_35954);
var state_35968__$1 = state_35968;
var statearr_35976_35992 = state_35968__$1;
(statearr_35976_35992[(2)] = inst_35958);

(statearr_35976_35992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (7))){
var inst_35960 = cljs.core.async.close_BANG_.call(null,output_channel);
var state_35968__$1 = state_35968;
var statearr_35977_35993 = state_35968__$1;
(statearr_35977_35993[(2)] = inst_35960);

(statearr_35977_35993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35969 === (8))){
var inst_35962 = (state_35968[(2)]);
var state_35968__$1 = state_35968;
var statearr_35978_35994 = state_35968__$1;
(statearr_35978_35994[(2)] = inst_35962);

(statearr_35978_35994[(1)] = (5));


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
});})(c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel))
;
return ((function (switch__33243__auto__,c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel){
return (function() {
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__ = null;
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____0 = (function (){
var statearr_35982 = [null,null,null,null,null,null,null,null];
(statearr_35982[(0)] = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__);

(statearr_35982[(1)] = (1));

return statearr_35982;
});
var redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____1 = (function (state_35968){
while(true){
var ret_value__33245__auto__ = (function (){try{while(true){
var result__33246__auto__ = switch__33243__auto__.call(null,state_35968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33246__auto__;
}
break;
}
}catch (e35983){if((e35983 instanceof Object)){
var ex__33247__auto__ = e35983;
var statearr_35984_35995 = state_35968;
(statearr_35984_35995[(5)] = ex__33247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_35968;
state_35968 = G__35996;
continue;
} else {
return ret_value__33245__auto__;
}
break;
}
});
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__ = function(state_35968){
switch(arguments.length){
case 0:
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____0.call(this);
case 1:
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____1.call(this,state_35968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$0 = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____0;
redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__.cljs$core$IFn$_invoke$arity$1 = redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto____1;
return redditv$reddit$get_subreddit_video_by_id_$_state_machine__33244__auto__;
})()
;})(switch__33243__auto__,c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel))
})();
var state__33310__auto__ = (function (){var statearr_35985 = f__33309__auto__.call(null);
(statearr_35985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33308__auto___35986);

return statearr_35985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33310__auto__);
});})(c__33308__auto___35986,output_channel,vec__35950,success_channel,error_channel))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_channel,error_channel], null);
});
