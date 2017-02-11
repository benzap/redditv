// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args35724 = [];
var len__31204__auto___35744 = arguments.length;
var i__31205__auto___35745 = (0);
while(true){
if((i__31205__auto___35745 < len__31204__auto___35744)){
args35724.push((arguments[i__31205__auto___35745]));

var G__35746 = (i__31205__auto___35745 + (1));
i__31205__auto___35745 = G__35746;
continue;
} else {
}
break;
}

var G__35726 = args35724.length;
switch (G__35726) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35724.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__35727 = opts;
var map__35727__$1 = ((((!((map__35727 == null)))?((((map__35727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35727):map__35727);
var ref = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35729 = cljs.core.count.call(null,refs);
switch (G__35729) {
case (1):
var vec__35730 = refs;
var a = cljs.core.nth.call(null,vec__35730,(0),null);
return ((function (vec__35730,a,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35730,a,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35733 = refs;
var a = cljs.core.nth.call(null,vec__35733,(0),null);
var b = cljs.core.nth.call(null,vec__35733,(1),null);
return ((function (vec__35733,a,b,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35733,a,b,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35736 = refs;
var a = cljs.core.nth.call(null,vec__35736,(0),null);
var b = cljs.core.nth.call(null,vec__35736,(1),null);
var c = cljs.core.nth.call(null,vec__35736,(2),null);
return ((function (vec__35736,a,b,c,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35736,a,b,c,G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35729,map__35727,map__35727__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35739 = ref;
cljs.core.reset_BANG_.call(null,G__35739,recalc.call(null));

return G__35739;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35727,map__35727__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35727,map__35727__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35727,map__35727__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35727,map__35727__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35740_35749 = cljs.core.seq.call(null,refs);
var chunk__35741_35750 = null;
var count__35742_35751 = (0);
var i__35743_35752 = (0);
while(true){
if((i__35743_35752 < count__35742_35751)){
var ref_35753__$1 = cljs.core._nth.call(null,chunk__35741_35750,i__35743_35752);
cljs.core.add_watch.call(null,ref_35753__$1,key,watch);

var G__35754 = seq__35740_35749;
var G__35755 = chunk__35741_35750;
var G__35756 = count__35742_35751;
var G__35757 = (i__35743_35752 + (1));
seq__35740_35749 = G__35754;
chunk__35741_35750 = G__35755;
count__35742_35751 = G__35756;
i__35743_35752 = G__35757;
continue;
} else {
var temp__4657__auto___35758 = cljs.core.seq.call(null,seq__35740_35749);
if(temp__4657__auto___35758){
var seq__35740_35759__$1 = temp__4657__auto___35758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35740_35759__$1)){
var c__30910__auto___35760 = cljs.core.chunk_first.call(null,seq__35740_35759__$1);
var G__35761 = cljs.core.chunk_rest.call(null,seq__35740_35759__$1);
var G__35762 = c__30910__auto___35760;
var G__35763 = cljs.core.count.call(null,c__30910__auto___35760);
var G__35764 = (0);
seq__35740_35749 = G__35761;
chunk__35741_35750 = G__35762;
count__35742_35751 = G__35763;
i__35743_35752 = G__35764;
continue;
} else {
var ref_35765__$1 = cljs.core.first.call(null,seq__35740_35759__$1);
cljs.core.add_watch.call(null,ref_35765__$1,key,watch);

var G__35766 = cljs.core.next.call(null,seq__35740_35759__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__35740_35749 = G__35766;
chunk__35741_35750 = G__35767;
count__35742_35751 = G__35768;
i__35743_35752 = G__35769;
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

