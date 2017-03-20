// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.components.header');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('redditv.playlist');
redditv.components.header.c_header = rum.core.build_defc.call(null,(function (app_state){
var map__37398 = rum.core.react.call(null,app_state);
var map__37398__$1 = ((((!((map__37398 == null)))?((((map__37398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37398):map__37398);
var subreddit = cljs.core.get.call(null,map__37398__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var selected = redditv.playlist.get_selected.call(null,app_state);
return React.createElement("div",({"className": "redditv-header"}),React.createElement("div",({"className": "redditv-header-flex"}),React.createElement("div",({"className": "header-logo"}),"redditv"),(function (){var attrs37402 = [cljs.core.str("/r/"),cljs.core.str(subreddit)].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37402))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header-subreddit"], null)], null),attrs37402)):({"className": "header-subreddit"})),((cljs.core.map_QMARK_.call(null,attrs37402))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37402)], null)));
})(),React.createElement("div",({"title": new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected), "className": "header-title"}),sablono.interpreter.interpret.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected))].join('')))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-header");
