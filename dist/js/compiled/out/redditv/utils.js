// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.utils');
goog.require('cljs.core');
goog.require('clojure.string');
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
return (function (p1__35750_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__35750_SHARP_);
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
return (function (p1__35751_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__35751_SHARP_);
});})(title))
,xs);
var i = cljs.core.first.call(null,redditv.utils.positions.call(null,cljs.core.PersistentHashSet.fromArray([title], true),playlist_titles));
if(((i == null)) || (cljs.core._EQ_.call(null,i,(0)))){
return cljs.core.first.call(null,xs);
} else {
return cljs.core.nth.call(null,cljs.core.cycle.call(null,xs),(i - (1)));
}
});
redditv.utils.remove_empty_values = (function redditv$utils$remove_empty_values(xs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__35756){
var vec__35757 = p__35756;
var _ = cljs.core.nth.call(null,vec__35757,(0),null);
var v = cljs.core.nth.call(null,vec__35757,(1),null);
return !((v == null));
}),xs));
});
redditv.utils.gen_query_params = (function redditv$utils$gen_query_params(params){
var query_string = cljs.core.apply.call(null,cljs.core.str,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__35764){
var vec__35765 = p__35764;
var k = cljs.core.nth.call(null,vec__35765,(0),null);
var v = cljs.core.nth.call(null,vec__35765,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(v)].join('');
}),redditv.utils.remove_empty_values.call(null,params))));
if(!(cljs.core._EQ_.call(null,query_string,"?"))){
return query_string;
} else {
return "";
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
redditv.utils.parse_bool = (function redditv$utils$parse_bool(s){
var s__$1 = clojure.string.lower_case.call(null,s);
if(cljs.core._EQ_.call(null,s__$1,"true")){
return true;
} else {
if(cljs.core._EQ_.call(null,s__$1,"false")){
return false;
} else {
return false;

}
}
});
redditv.utils.set_hash_BANG_ = (function redditv$utils$set_hash_BANG_(v){

return (window["location"]["hash"] = v);
});
redditv.utils.force_app_reload_BANG_ = (function redditv$utils$force_app_reload_BANG_(app_state){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-load?","initial-load?",2130265181)], null),cljs.core.inc);
});
redditv.utils.app_hash = (function redditv$utils$app_hash(app_state){
var map__35770 = cljs.core.deref.call(null,app_state);
var map__35770__$1 = ((((!((map__35770 == null)))?((((map__35770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35770):map__35770);
var subreddit = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var playlist_selected_index = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961));
var playlist = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"playlist","playlist",1952276871));
var settings_video_category = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"settings-video-category","settings-video-category",-1875669518));
var settings_video_count = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"settings-video-count","settings-video-count",1798809692));
var fullscreen = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054));
var settings_show_nsfw = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"settings-show-nsfw","settings-show-nsfw",-1673123951));
return [cljs.core.str("/r/"),cljs.core.str(subreddit),cljs.core.str("/"),cljs.core.str(playlist_selected_index),cljs.core.str(redditv.utils.gen_query_params.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sort","sort",953465918),((cljs.core.not_EQ_.call(null,settings_video_category,"hot"))?settings_video_category:null),new cljs.core.Keyword(null,"count","count",2139924085),((cljs.core.not_EQ_.call(null,settings_video_count,(100)))?settings_video_count:null),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),((cljs.core.not_EQ_.call(null,fullscreen,false))?fullscreen:null),new cljs.core.Keyword(null,"nsfw","nsfw",-1730579216),((cljs.core.not_EQ_.call(null,settings_show_nsfw,true))?settings_show_nsfw:null)], null)))].join('');
});
redditv.utils.open_link_external_window = (function redditv$utils$open_link_external_window(link){
return window.open(link,"_blank");
});
redditv.utils.open_reddit_comment = (function redditv$utils$open_reddit_comment(p__35772){
var map__35775 = p__35772;
var map__35775__$1 = ((((!((map__35775 == null)))?((((map__35775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35775):map__35775);
var video = map__35775__$1;
var permalink = cljs.core.get.call(null,map__35775__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
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
redditv.utils.decode_html_string = (function redditv$utils$decode_html_string(s){
var parser = (new DOMParser());
var html_string = [cljs.core.str("<!doctype html><body>"),cljs.core.str(s)].join('');
var decoded_string = parser.parseFromString(html_string,"text/html");
return (decoded_string["body"]["textContent"]);
});
redditv.utils.set_loading_animation_BANG_ = (function redditv$utils$set_loading_animation_BANG_(app_state,x){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null),x);
});
redditv.utils.app_css_class_layout = (function redditv$utils$app_css_class_layout(var_args){
var args__31211__auto__ = [];
var len__31204__auto___35783 = arguments.length;
var i__31205__auto___35784 = (0);
while(true){
if((i__31205__auto___35784 < len__31204__auto___35783)){
args__31211__auto__.push((arguments[i__31205__auto___35784]));

var G__35785 = (i__31205__auto___35784 + (1));
i__31205__auto___35784 = G__35785;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return redditv.utils.app_css_class_layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

redditv.utils.app_css_class_layout.cljs$core$IFn$_invoke$arity$variadic = (function (app_state,class_name,p__35780){
var map__35781 = p__35780;
var map__35781__$1 = ((((!((map__35781 == null)))?((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35781):map__35781);
var compressed_QMARK_ = cljs.core.get.call(null,map__35781__$1,new cljs.core.Keyword(null,"compressed?","compressed?",140944391),true);
var fullscreen_QMARK_ = cljs.core.get.call(null,map__35781__$1,new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820),true);
var class_name__$1 = (((class_name instanceof cljs.core.Keyword))?cljs.core.name.call(null,class_name):((typeof class_name === 'string')?[cljs.core.str(class_name)].join(''):null));
if(cljs.core.truth_((function (){var and__30084__auto__ = fullscreen_QMARK_;
if(cljs.core.truth_(and__30084__auto__)){
return new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.keyword.call(null,[cljs.core.str(class_name__$1),cljs.core.str("-fullscreen")].join(''));
} else {
if(cljs.core.truth_((function (){var and__30084__auto__ = compressed_QMARK_;
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.keyword.call(null,[cljs.core.str(class_name__$1),cljs.core.str("-compressed")].join(''));
} else {
return cljs.core.keyword.call(null,class_name__$1);

}
}
});

redditv.utils.app_css_class_layout.cljs$lang$maxFixedArity = (2);

redditv.utils.app_css_class_layout.cljs$lang$applyTo = (function (seq35777){
var G__35778 = cljs.core.first.call(null,seq35777);
var seq35777__$1 = cljs.core.next.call(null,seq35777);
var G__35779 = cljs.core.first.call(null,seq35777__$1);
var seq35777__$2 = cljs.core.next.call(null,seq35777__$1);
return redditv.utils.app_css_class_layout.cljs$core$IFn$_invoke$arity$variadic(G__35778,G__35779,seq35777__$2);
});

