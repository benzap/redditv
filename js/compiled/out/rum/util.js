// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__31211__auto__ = [];
var len__31204__auto___40447 = arguments.length;
var i__31205__auto___40448 = (0);
while(true){
if((i__31205__auto___40448 < len__31204__auto___40447)){
args__31211__auto__.push((arguments[i__31205__auto___40448]));

var G__40449 = (i__31205__auto___40448 + (1));
i__31205__auto___40448 = G__40449;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq40444){
var G__40445 = cljs.core.first.call(null,seq40444);
var seq40444__$1 = cljs.core.next.call(null,seq40444);
var G__40446 = cljs.core.first.call(null,seq40444__$1);
var seq40444__$2 = cljs.core.next.call(null,seq40444__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__40445,G__40446,seq40444__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
