// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args39415 = [];
var len__31204__auto___39435 = arguments.length;
var i__31205__auto___39436 = (0);
while(true){
if((i__31205__auto___39436 < len__31204__auto___39435)){
args39415.push((arguments[i__31205__auto___39436]));

var G__39437 = (i__31205__auto___39436 + (1));
i__31205__auto___39436 = G__39437;
continue;
} else {
}
break;
}

var G__39417 = args39415.length;
switch (G__39417) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39415.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__39418 = opts;
var map__39418__$1 = ((((!((map__39418 == null)))?((((map__39418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39418):map__39418);
var ref = cljs.core.get.call(null,map__39418__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__39418__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__39420 = cljs.core.count.call(null,refs);
switch (G__39420) {
case (1):
var vec__39421 = refs;
var a = cljs.core.nth.call(null,vec__39421,(0),null);
return ((function (vec__39421,a,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__39421,a,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__39424 = refs;
var a = cljs.core.nth.call(null,vec__39424,(0),null);
var b = cljs.core.nth.call(null,vec__39424,(1),null);
return ((function (vec__39424,a,b,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__39424,a,b,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__39427 = refs;
var a = cljs.core.nth.call(null,vec__39427,(0),null);
var b = cljs.core.nth.call(null,vec__39427,(1),null);
var c = cljs.core.nth.call(null,vec__39427,(2),null);
return ((function (vec__39427,a,b,c,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__39427,a,b,c,G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__39420,map__39418,map__39418__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__39430 = ref;
cljs.core.reset_BANG_.call(null,G__39430,recalc.call(null));

return G__39430;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__39418,map__39418__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__39418,map__39418__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__39418,map__39418__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__39418,map__39418__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__39431_39440 = cljs.core.seq.call(null,refs);
var chunk__39432_39441 = null;
var count__39433_39442 = (0);
var i__39434_39443 = (0);
while(true){
if((i__39434_39443 < count__39433_39442)){
var ref_39444__$1 = cljs.core._nth.call(null,chunk__39432_39441,i__39434_39443);
cljs.core.add_watch.call(null,ref_39444__$1,key,watch);

var G__39445 = seq__39431_39440;
var G__39446 = chunk__39432_39441;
var G__39447 = count__39433_39442;
var G__39448 = (i__39434_39443 + (1));
seq__39431_39440 = G__39445;
chunk__39432_39441 = G__39446;
count__39433_39442 = G__39447;
i__39434_39443 = G__39448;
continue;
} else {
var temp__4657__auto___39449 = cljs.core.seq.call(null,seq__39431_39440);
if(temp__4657__auto___39449){
var seq__39431_39450__$1 = temp__4657__auto___39449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39431_39450__$1)){
var c__30910__auto___39451 = cljs.core.chunk_first.call(null,seq__39431_39450__$1);
var G__39452 = cljs.core.chunk_rest.call(null,seq__39431_39450__$1);
var G__39453 = c__30910__auto___39451;
var G__39454 = cljs.core.count.call(null,c__30910__auto___39451);
var G__39455 = (0);
seq__39431_39440 = G__39452;
chunk__39432_39441 = G__39453;
count__39433_39442 = G__39454;
i__39434_39443 = G__39455;
continue;
} else {
var ref_39456__$1 = cljs.core.first.call(null,seq__39431_39450__$1);
cljs.core.add_watch.call(null,ref_39456__$1,key,watch);

var G__39457 = cljs.core.next.call(null,seq__39431_39450__$1);
var G__39458 = null;
var G__39459 = (0);
var G__39460 = (0);
seq__39431_39440 = G__39457;
chunk__39432_39441 = G__39458;
count__39433_39442 = G__39459;
i__39434_39443 = G__39460;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

