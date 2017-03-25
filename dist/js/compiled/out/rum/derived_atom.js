// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args35470 = [];
var len__31204__auto___35490 = arguments.length;
var i__31205__auto___35491 = (0);
while(true){
if((i__31205__auto___35491 < len__31204__auto___35490)){
args35470.push((arguments[i__31205__auto___35491]));

var G__35492 = (i__31205__auto___35491 + (1));
i__31205__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var G__35472 = args35470.length;
switch (G__35472) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35470.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__35473 = opts;
var map__35473__$1 = ((((!((map__35473 == null)))?((((map__35473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35473):map__35473);
var ref = cljs.core.get.call(null,map__35473__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35473__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35475 = cljs.core.count.call(null,refs);
switch (G__35475) {
case (1):
var vec__35476 = refs;
var a = cljs.core.nth.call(null,vec__35476,(0),null);
return ((function (vec__35476,a,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35476,a,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35479 = refs;
var a = cljs.core.nth.call(null,vec__35479,(0),null);
var b = cljs.core.nth.call(null,vec__35479,(1),null);
return ((function (vec__35479,a,b,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35479,a,b,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35482 = refs;
var a = cljs.core.nth.call(null,vec__35482,(0),null);
var b = cljs.core.nth.call(null,vec__35482,(1),null);
var c = cljs.core.nth.call(null,vec__35482,(2),null);
return ((function (vec__35482,a,b,c,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35482,a,b,c,G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35475,map__35473,map__35473__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35485 = ref;
cljs.core.reset_BANG_.call(null,G__35485,recalc.call(null));

return G__35485;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35473,map__35473__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35473,map__35473__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35473,map__35473__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35473,map__35473__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35486_35495 = cljs.core.seq.call(null,refs);
var chunk__35487_35496 = null;
var count__35488_35497 = (0);
var i__35489_35498 = (0);
while(true){
if((i__35489_35498 < count__35488_35497)){
var ref_35499__$1 = cljs.core._nth.call(null,chunk__35487_35496,i__35489_35498);
cljs.core.add_watch.call(null,ref_35499__$1,key,watch);

var G__35500 = seq__35486_35495;
var G__35501 = chunk__35487_35496;
var G__35502 = count__35488_35497;
var G__35503 = (i__35489_35498 + (1));
seq__35486_35495 = G__35500;
chunk__35487_35496 = G__35501;
count__35488_35497 = G__35502;
i__35489_35498 = G__35503;
continue;
} else {
var temp__4657__auto___35504 = cljs.core.seq.call(null,seq__35486_35495);
if(temp__4657__auto___35504){
var seq__35486_35505__$1 = temp__4657__auto___35504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35486_35505__$1)){
var c__30910__auto___35506 = cljs.core.chunk_first.call(null,seq__35486_35505__$1);
var G__35507 = cljs.core.chunk_rest.call(null,seq__35486_35505__$1);
var G__35508 = c__30910__auto___35506;
var G__35509 = cljs.core.count.call(null,c__30910__auto___35506);
var G__35510 = (0);
seq__35486_35495 = G__35507;
chunk__35487_35496 = G__35508;
count__35488_35497 = G__35509;
i__35489_35498 = G__35510;
continue;
} else {
var ref_35511__$1 = cljs.core.first.call(null,seq__35486_35505__$1);
cljs.core.add_watch.call(null,ref_35511__$1,key,watch);

var G__35512 = cljs.core.next.call(null,seq__35486_35505__$1);
var G__35513 = null;
var G__35514 = (0);
var G__35515 = (0);
seq__35486_35495 = G__35512;
chunk__35487_35496 = G__35513;
count__35488_35497 = G__35514;
i__35489_35498 = G__35515;
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

