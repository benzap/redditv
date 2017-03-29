// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.utils');
goog.require('cljs.core');
redditv.utils.dom_clear_children = (function redditv$utils$dom_clear_children(div_id){
var dom = document.getElementById(div_id);
return (dom["innerHTML"] = "");
});
redditv.utils.positions = (function redditv$utils$positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
redditv.utils.next_element = (function redditv$utils$next_element(xs,x){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(x);
var playlist_titles = cljs.core.map.call(null,((function (title){
return (function (p1__32349_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__32349_SHARP_);
});})(title))
,xs);
var i = cljs.core.first.call(null,redditv.utils.positions.call(null,cljs.core.PersistentHashSet.fromArray([title], true),playlist_titles));
if((i == null)){
cljs.core.println.call(null,"Failed to find element, grabbing first");

return cljs.core.first.call(null,xs);
} else {
return cljs.core.nth.call(null,cljs.core.cycle.call(null,xs),(i + (1)));
}
});
redditv.utils.prev_element = (function redditv$utils$prev_element(xs,x){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(x);
var playlist_titles = cljs.core.map.call(null,((function (title){
return (function (p1__32350_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__32350_SHARP_);
});})(title))
,xs);
var i = cljs.core.first.call(null,redditv.utils.positions.call(null,cljs.core.PersistentHashSet.fromArray([title], true),playlist_titles));
if(((i == null)) || (cljs.core._EQ_.call(null,i,(0)))){
return cljs.core.first.call(null,xs);
} else {
return cljs.core.nth.call(null,cljs.core.cycle.call(null,xs),(i - (1)));
}
});
/**
 * scrolls the child element to align the scroll to the left margin of
 *   the root element
 */
redditv.utils.align_to_root_left = (function redditv$utils$align_to_root_left(root,child){
var child_offset_left = child.offsetLeft;
return (root["scrollLeft"] = child_offset_left);
});
redditv.utils.clear_scroll = (function redditv$utils$clear_scroll(root){
return (root["scrollLeft"] = (0));
});
redditv.utils.regex_number_QMARK_ = /[0-9]+/;
redditv.utils.numstring_QMARK_ = (function redditv$utils$numstring_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,redditv.utils.regex_number_QMARK_,s));
} else {
return false;
}
});
redditv.utils.parse_int = (function redditv$utils$parse_int(s){
if(typeof s === 'string'){
return window.parseInt(s);
} else {
return (0);
}
});
redditv.utils.set_hash_BANG_ = (function redditv$utils$set_hash_BANG_(v){

return (window["location"]["hash"] = v);
});
redditv.utils.force_app_reload_BANG_ = (function redditv$utils$force_app_reload_BANG_(app_state){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181)], null),cljs.core.inc);
});
redditv.utils.app_hash = (function redditv$utils$app_hash(app_state){
var map__32353 = cljs.core.deref.call(null,app_state);
var map__32353__$1 = ((((!((map__32353 == null)))?((((map__32353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32353):map__32353);
var subreddit = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var playlist_selected_index = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var settings_video_category = cljs.core.get.call(null,map__32353__$1,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
if(cljs.core._EQ_.call(null,settings_video_category,"hot")){
return [cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(playlist_selected_index)].join('');
} else {
return [cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(playlist_selected_index),cljs.core.str("?sort="),cljs.core.str(settings_video_category)].join('');
}
});
redditv.utils.open_link_external_window = (function redditv$utils$open_link_external_window(link){
return window.open(link,"_blank");
});
redditv.utils.open_reddit_comment = (function redditv$utils$open_reddit_comment(p__32355){
var map__32358 = p__32355;
var map__32358__$1 = ((((!((map__32358 == null)))?((((map__32358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32358):map__32358);
var video = map__32358__$1;
var permalink = cljs.core.get.call(null,map__32358__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
return redditv.utils.open_link_external_window.call(null,[cljs.core.str("http://www.reddit.com"),cljs.core.str(permalink)].join(''));
});
redditv.utils.query_in_focus_QMARK_ = (function redditv$utils$query_in_focus_QMARK_(selector){
var temp__4655__auto__ = document.querySelector(selector);
if(cljs.core.truth_(temp__4655__auto__)){
var elem = temp__4655__auto__;
return cljs.core._EQ_.call(null,document.activeElement,elem);
} else {
return false;
}
});
