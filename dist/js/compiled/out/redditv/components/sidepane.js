// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.components.sidepane');
goog.require('cljs.core');
goog.require('redditv.components.mdl');
goog.require('rum.core');
goog.require('redditv.components.settings');
goog.require('redditv.playlist');
goog.require('redditv.icons');
goog.require('redditv.utils');
redditv.components.sidepane.search_subreddit = (function redditv$components$sidepane$search_subreddit(app_state,subreddit){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754),subreddit,new cljs.core.Keyword(null,"playlist-selected-index","playlist-selected-index",-1037896961),(0));

redditv.playlist.reload.call(null,app_state,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true);

return redditv.utils.set_hash_BANG_.call(null,redditv.utils.app_hash.call(null,app_state));
});
redditv.components.sidepane.mixin_focus_search_bar = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
var comp_37636 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node_37637 = ReactDOM.findDOMNode(comp_37636);
var temp__4657__auto___37638 = dom_node_37637.querySelector("#input-search-bar");
if(cljs.core.truth_(temp__4657__auto___37638)){
var search_element_37639 = temp__4657__auto___37638;
(search_element_37639["value"] = "");

search_element_37639.focus();
} else {
}

return state;
})], null);
redditv.components.sidepane.c_sidepane = rum.core.build_defcs.call(null,(function (state,app_state){
var map__37640 = rum.core.react.call(null,app_state);
var map__37640__$1 = ((((!((map__37640 == null)))?((((map__37640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37640):map__37640);
var show_search = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"show-search","show-search",266138187));
var show_settings = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"show-settings","show-settings",680287246));
var subreddit = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var show_playlist = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"show-playlist","show-playlist",-1969029604));
var search_value = new cljs.core.Keyword("redditv.components.sidepane","search-value","redditv.components.sidepane/search-value",-1896460617).cljs$core$IFn$_invoke$arity$1(state);
return sablono.interpreter.interpret.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.utils.app_css_class_layout.call(null,app_state,new cljs.core.Keyword(null,".redditv-sidepane",".redditv-sidepane",1283099265)),redditv.components.mdl.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Search Subreddits",new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("redditv-button noselect "),cljs.core.str((cljs.core.truth_(show_search)?"button-active-toggle":""))].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-search","show-search",266138187)], null),cljs.core.not);
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
], null))),(cljs.core.truth_(show_search)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-search-dialog.right-border-radius.anim-slideInLeft",".redditv-search-dialog.right-border-radius.anim-slideInLeft",-986581297),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#input-search-bar","input#input-search-bar",-193137605),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"SubReddit Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (e){
var text = e.target.value;
return cljs.core.reset_BANG_.call(null,search_value,text);
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"Enter")){
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-search","show-search",266138187),false);

redditv.components.sidepane.search_subreddit.call(null,app_state,cljs.core.deref.call(null,search_value));
} else {
}

if(cljs.core._EQ_.call(null,key,"Escape")){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"show-search","show-search",266138187),false);
} else {
return null;
}
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
], null)], null)], null):null),redditv.components.mdl.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"settings",new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("redditv-button noselect "),cljs.core.str((cljs.core.truth_(show_settings)?"button-active-toggle":""))].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings","show-settings",680287246)], null),cljs.core.not);
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
], null))),(cljs.core.truth_(show_settings)?redditv.components.settings.c_settings.call(null,app_state):null),redditv.components.mdl.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"View Reddit Comments",new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"comment",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (){
return redditv.playlist.open_current_video_comments.call(null,app_state);
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
], null))),redditv.components.mdl.tooltip.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"View Github Source",new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),redditv.components.mdl.icon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"help",new cljs.core.Keyword(null,"className","className",-1983287057),"redditv-button noselect",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value){
return (function (){
return window.open([cljs.core.str("http://github.com/benzap/redditv")].join(''));
});})(map__37640,map__37640__$1,show_search,show_settings,subreddit,show_playlist,search_value))
], null)))], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [redditv.components.sidepane.mixin_focus_search_bar,rum.core.reactive,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
var search_value = new cljs.core.Keyword("redditv.components.sidepane","search-value","redditv.components.sidepane/search-value",-1896460617).cljs$core$IFn$_invoke$arity$1(state);
var app_state = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var map__37642 = app_state;
var map__37642__$1 = ((((!((map__37642 == null)))?((((map__37642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37642):map__37642);
var subreddit = cljs.core.get.call(null,map__37642__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("redditv.components.sidepane","search-value","redditv.components.sidepane/search-value",-1896460617),cljs.core.atom.call(null,subreddit));
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("redditv.components.sidepane","search-value","redditv.components.sidepane/search-value",-1896460617));
})], null)], null),"c-sidepane");
