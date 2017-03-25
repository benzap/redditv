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
return (function (p1__35698_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__35698_SHARP_);
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
return (function (p1__35699_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__35699_SHARP_);
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
