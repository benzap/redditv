// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.components.header');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('redditv.playlist');
goog.require('redditv.utils');
goog.require('redditv.components.mdl');
redditv.components.header.c_header = rum.core.build_defc.call(null,(function (app_state){
var map__37646 = rum.core.react.call(null,app_state);
var map__37646__$1 = ((((!((map__37646 == null)))?((((map__37646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37646):map__37646);
var subreddit = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var loading_QMARK_ = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var selected = redditv.playlist.get_selected.call(null,app_state);
var title = redditv.utils.decode_html_string.call(null,[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(selected))].join(''));
return sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-header",".redditv-header",-2088515554),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-header-flex",".redditv-header-flex",402624970),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-logo",".header-logo",-1712277668),"redditv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-subreddit",".header-subreddit",-1217276775),[cljs.core.str("/r/"),cljs.core.str(subreddit)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-title",".header-title",719021241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null),(cljs.core.truth_(loading_QMARK_)?redditv.components.mdl.spinner.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"spinner-loading"], null)):null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-header-fullscreen",".redditv-header-fullscreen",10611479),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".redditv-header-flex-fullscreen",".redditv-header-flex-fullscreen",-1264400196),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".header-title-fullscreen",".header-title-fullscreen",-1297030137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),title], null)], null)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-header");