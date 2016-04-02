// Compiled by ClojureScript 1.7.228 {}
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
return (function (p1__29894_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__29894_SHARP_);
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
return (function (p1__29895_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__29895_SHARP_);
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
