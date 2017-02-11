// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.cursor');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {rum.cursor.Object}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.cursor.Cursor = (function (ref,path,meta){
this.ref = ref;
this.path = path;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
rum.cursor.Cursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.cursor.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [rum.cursor.Cursor ");

cljs.core.pr_writer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),cljs.core._deref.call(null,this$__$1)], null),writer,opts);

return cljs.core._write.call(null,writer,"]");
});

rum.cursor.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

rum.cursor.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.cursor.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.cursor.Cursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,newv){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.ref,cljs.core.assoc_in,self__.path,newv);

return newv;
});

rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.cursor.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,rest){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,rest));
});

rum.cursor.Cursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.ref,(function (){var x__30933__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__30933__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30933__auto____$1);
})(),x__30933__auto__);
})(),((function (this$__$1){
return (function (_,___$1,oldv,newv){
var old = cljs.core.get_in.call(null,oldv,self__.path);
var new$ = cljs.core.get_in.call(null,newv,self__.path);
if(cljs.core.not_EQ_.call(null,old,new$)){
return callback.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.cursor.Cursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.ref,(function (){var x__30933__auto__ = this$__$1;
return cljs.core._conj.call(null,(function (){var x__30933__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__30933__auto____$1);
})(),x__30933__auto__);
})());

return this$__$1;
});

rum.cursor.Cursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core._deref.call(null,self__.ref),self__.path);
});

rum.cursor.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ref","ref",-1364538802,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

rum.cursor.Cursor.cljs$lang$type = true;

rum.cursor.Cursor.cljs$lang$ctorStr = "rum.cursor/Cursor";

rum.cursor.Cursor.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"rum.cursor/Cursor");
});

rum.cursor.__GT_Cursor = (function rum$cursor$__GT_Cursor(ref,path,meta){
return (new rum.cursor.Cursor(ref,path,meta));
});

