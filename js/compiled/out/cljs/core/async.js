// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29969 = [];
var len__22734__auto___29975 = arguments.length;
var i__22735__auto___29976 = (0);
while(true){
if((i__22735__auto___29976 < len__22734__auto___29975)){
args29969.push((arguments[i__22735__auto___29976]));

var G__29977 = (i__22735__auto___29976 + (1));
i__22735__auto___29976 = G__29977;
continue;
} else {
}
break;
}

var G__29971 = args29969.length;
switch (G__29971) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29969.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (f,blockable,meta29973){
this.f = f;
this.blockable = blockable;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.f,self__.blockable,meta29973__$1));
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
});

cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972";

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29972");
});

cljs.core.async.__GT_t_cljs$core$async29972 = (function cljs$core$async$__GT_t_cljs$core$async29972(f__$1,blockable__$1,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(f__$1,blockable__$1,meta29973));
});

}

return (new cljs.core.async.t_cljs$core$async29972(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29981 = [];
var len__22734__auto___29984 = arguments.length;
var i__22735__auto___29985 = (0);
while(true){
if((i__22735__auto___29985 < len__22734__auto___29984)){
args29981.push((arguments[i__22735__auto___29985]));

var G__29986 = (i__22735__auto___29985 + (1));
i__22735__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var G__29983 = args29981.length;
switch (G__29983) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29981.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29988 = [];
var len__22734__auto___29991 = arguments.length;
var i__22735__auto___29992 = (0);
while(true){
if((i__22735__auto___29992 < len__22734__auto___29991)){
args29988.push((arguments[i__22735__auto___29992]));

var G__29993 = (i__22735__auto___29992 + (1));
i__22735__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29995 = [];
var len__22734__auto___29998 = arguments.length;
var i__22735__auto___29999 = (0);
while(true){
if((i__22735__auto___29999 < len__22734__auto___29998)){
args29995.push((arguments[i__22735__auto___29999]));

var G__30000 = (i__22735__auto___29999 + (1));
i__22735__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var G__29997 = args29995.length;
switch (G__29997) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29995.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30002 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30002);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30002,ret){
return (function (){
return fn1.call(null,val_30002);
});})(val_30002,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30003 = [];
var len__22734__auto___30006 = arguments.length;
var i__22735__auto___30007 = (0);
while(true){
if((i__22735__auto___30007 < len__22734__auto___30006)){
args30003.push((arguments[i__22735__auto___30007]));

var G__30008 = (i__22735__auto___30007 + (1));
i__22735__auto___30007 = G__30008;
continue;
} else {
}
break;
}

var G__30005 = args30003.length;
switch (G__30005) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30003.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22579__auto___30010 = n;
var x_30011 = (0);
while(true){
if((x_30011 < n__22579__auto___30010)){
(a[x_30011] = (0));

var G__30012 = (x_30011 + (1));
x_30011 = G__30012;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30013 = (i + (1));
i = G__30013;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30017 = (function (alt_flag,flag,meta30018){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30018 = meta30018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30019,meta30018__$1){
var self__ = this;
var _30019__$1 = this;
return (new cljs.core.async.t_cljs$core$async30017(self__.alt_flag,self__.flag,meta30018__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30019){
var self__ = this;
var _30019__$1 = this;
return self__.meta30018;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30018","meta30018",738575934,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30017";

cljs.core.async.t_cljs$core$async30017.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async30017");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30017 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30017(alt_flag__$1,flag__$1,meta30018){
return (new cljs.core.async.t_cljs$core$async30017(alt_flag__$1,flag__$1,meta30018));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30017(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30023 = (function (alt_handler,flag,cb,meta30024){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cljs.core.async.t_cljs$core$async30023(self__.alt_handler,self__.flag,self__.cb,meta30024__$1));
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
});

cljs.core.async.t_cljs$core$async30023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30023";

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async30023");
});

cljs.core.async.__GT_t_cljs$core$async30023 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30023(alt_handler__$1,flag__$1,cb__$1,meta30024){
return (new cljs.core.async.t_cljs$core$async30023(alt_handler__$1,flag__$1,cb__$1,meta30024));
});

}

return (new cljs.core.async.t_cljs$core$async30023(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30026_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30027_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30027_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21676__auto__ = wport;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30028 = (i + (1));
i = G__30028;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21676__auto__ = ret;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21664__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21664__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21664__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22741__auto__ = [];
var len__22734__auto___30034 = arguments.length;
var i__22735__auto___30035 = (0);
while(true){
if((i__22735__auto___30035 < len__22734__auto___30034)){
args__22741__auto__.push((arguments[i__22735__auto___30035]));

var G__30036 = (i__22735__auto___30035 + (1));
i__22735__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((1) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22742__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30031){
var map__30032 = p__30031;
var map__30032__$1 = ((((!((map__30032 == null)))?((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var opts = map__30032__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30029){
var G__30030 = cljs.core.first.call(null,seq30029);
var seq30029__$1 = cljs.core.next.call(null,seq30029);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30030,seq30029__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30037 = [];
var len__22734__auto___30087 = arguments.length;
var i__22735__auto___30088 = (0);
while(true){
if((i__22735__auto___30088 < len__22734__auto___30087)){
args30037.push((arguments[i__22735__auto___30088]));

var G__30089 = (i__22735__auto___30088 + (1));
i__22735__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var G__30039 = args30037.length;
switch (G__30039) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30037.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29924__auto___30091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30091){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___30091){
return (function (state_30063){
var state_val_30064 = (state_30063[(1)]);
if((state_val_30064 === (7))){
var inst_30059 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30065_30092 = state_30063__$1;
(statearr_30065_30092[(2)] = inst_30059);

(statearr_30065_30092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (1))){
var state_30063__$1 = state_30063;
var statearr_30066_30093 = state_30063__$1;
(statearr_30066_30093[(2)] = null);

(statearr_30066_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (4))){
var inst_30042 = (state_30063[(7)]);
var inst_30042__$1 = (state_30063[(2)]);
var inst_30043 = (inst_30042__$1 == null);
var state_30063__$1 = (function (){var statearr_30067 = state_30063;
(statearr_30067[(7)] = inst_30042__$1);

return statearr_30067;
})();
if(cljs.core.truth_(inst_30043)){
var statearr_30068_30094 = state_30063__$1;
(statearr_30068_30094[(1)] = (5));

} else {
var statearr_30069_30095 = state_30063__$1;
(statearr_30069_30095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (13))){
var state_30063__$1 = state_30063;
var statearr_30070_30096 = state_30063__$1;
(statearr_30070_30096[(2)] = null);

(statearr_30070_30096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (6))){
var inst_30042 = (state_30063[(7)]);
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30063__$1,(11),to,inst_30042);
} else {
if((state_val_30064 === (3))){
var inst_30061 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30063__$1,inst_30061);
} else {
if((state_val_30064 === (12))){
var state_30063__$1 = state_30063;
var statearr_30071_30097 = state_30063__$1;
(statearr_30071_30097[(2)] = null);

(statearr_30071_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (2))){
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30063__$1,(4),from);
} else {
if((state_val_30064 === (11))){
var inst_30052 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
if(cljs.core.truth_(inst_30052)){
var statearr_30072_30098 = state_30063__$1;
(statearr_30072_30098[(1)] = (12));

} else {
var statearr_30073_30099 = state_30063__$1;
(statearr_30073_30099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (9))){
var state_30063__$1 = state_30063;
var statearr_30074_30100 = state_30063__$1;
(statearr_30074_30100[(2)] = null);

(statearr_30074_30100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (5))){
var state_30063__$1 = state_30063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30075_30101 = state_30063__$1;
(statearr_30075_30101[(1)] = (8));

} else {
var statearr_30076_30102 = state_30063__$1;
(statearr_30076_30102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (14))){
var inst_30057 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30077_30103 = state_30063__$1;
(statearr_30077_30103[(2)] = inst_30057);

(statearr_30077_30103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (10))){
var inst_30049 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30078_30104 = state_30063__$1;
(statearr_30078_30104[(2)] = inst_30049);

(statearr_30078_30104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (8))){
var inst_30046 = cljs.core.async.close_BANG_.call(null,to);
var state_30063__$1 = state_30063;
var statearr_30079_30105 = state_30063__$1;
(statearr_30079_30105[(2)] = inst_30046);

(statearr_30079_30105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___30091))
;
return ((function (switch__29812__auto__,c__29924__auto___30091){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_30063){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30084){if((e30084 instanceof Object)){
var ex__29816__auto__ = e30084;
var statearr_30085_30106 = state_30063;
(statearr_30085_30106[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30107 = state_30063;
state_30063 = G__30107;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_30063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_30063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___30091))
})();
var state__29926__auto__ = (function (){var statearr_30086 = f__29925__auto__.call(null);
(statearr_30086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30091);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30091))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30291){
var vec__30292 = p__30291;
var v = cljs.core.nth.call(null,vec__30292,(0),null);
var p = cljs.core.nth.call(null,vec__30292,(1),null);
var job = vec__30292;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29924__auto___30474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results){
return (function (state_30297){
var state_val_30298 = (state_30297[(1)]);
if((state_val_30298 === (1))){
var state_30297__$1 = state_30297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30297__$1,(2),res,v);
} else {
if((state_val_30298 === (2))){
var inst_30294 = (state_30297[(2)]);
var inst_30295 = cljs.core.async.close_BANG_.call(null,res);
var state_30297__$1 = (function (){var statearr_30299 = state_30297;
(statearr_30299[(7)] = inst_30294);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30297__$1,inst_30295);
} else {
return null;
}
}
});})(c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results))
;
return ((function (switch__29812__auto__,c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_30303 = [null,null,null,null,null,null,null,null];
(statearr_30303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__);

(statearr_30303[(1)] = (1));

return statearr_30303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1 = (function (state_30297){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30304){if((e30304 instanceof Object)){
var ex__29816__auto__ = e30304;
var statearr_30305_30475 = state_30297;
(statearr_30305_30475[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30476 = state_30297;
state_30297 = G__30476;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = function(state_30297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1.call(this,state_30297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results))
})();
var state__29926__auto__ = (function (){var statearr_30306 = f__29925__auto__.call(null);
(statearr_30306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30474);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30474,res,vec__30292,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30307){
var vec__30308 = p__30307;
var v = cljs.core.nth.call(null,vec__30308,(0),null);
var p = cljs.core.nth.call(null,vec__30308,(1),null);
var job = vec__30308;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22579__auto___30477 = n;
var __30478 = (0);
while(true){
if((__30478 < n__22579__auto___30477)){
var G__30309_30479 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30309_30479) {
case "compute":
var c__29924__auto___30481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30478,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (__30478,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function (state_30322){
var state_val_30323 = (state_30322[(1)]);
if((state_val_30323 === (1))){
var state_30322__$1 = state_30322;
var statearr_30324_30482 = state_30322__$1;
(statearr_30324_30482[(2)] = null);

(statearr_30324_30482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (2))){
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30322__$1,(4),jobs);
} else {
if((state_val_30323 === (3))){
var inst_30320 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30322__$1,inst_30320);
} else {
if((state_val_30323 === (4))){
var inst_30312 = (state_30322[(2)]);
var inst_30313 = process.call(null,inst_30312);
var state_30322__$1 = state_30322;
if(cljs.core.truth_(inst_30313)){
var statearr_30325_30483 = state_30322__$1;
(statearr_30325_30483[(1)] = (5));

} else {
var statearr_30326_30484 = state_30322__$1;
(statearr_30326_30484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (5))){
var state_30322__$1 = state_30322;
var statearr_30327_30485 = state_30322__$1;
(statearr_30327_30485[(2)] = null);

(statearr_30327_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (6))){
var state_30322__$1 = state_30322;
var statearr_30328_30486 = state_30322__$1;
(statearr_30328_30486[(2)] = null);

(statearr_30328_30486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30323 === (7))){
var inst_30318 = (state_30322[(2)]);
var state_30322__$1 = state_30322;
var statearr_30329_30487 = state_30322__$1;
(statearr_30329_30487[(2)] = inst_30318);

(statearr_30329_30487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30478,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
;
return ((function (__30478,switch__29812__auto__,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_30333 = [null,null,null,null,null,null,null];
(statearr_30333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__);

(statearr_30333[(1)] = (1));

return statearr_30333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1 = (function (state_30322){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30334){if((e30334 instanceof Object)){
var ex__29816__auto__ = e30334;
var statearr_30335_30488 = state_30322;
(statearr_30335_30488[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30322;
state_30322 = G__30489;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = function(state_30322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1.call(this,state_30322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__;
})()
;})(__30478,switch__29812__auto__,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30336 = f__29925__auto__.call(null);
(statearr_30336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30481);

return statearr_30336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(__30478,c__29924__auto___30481,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
);


break;
case "async":
var c__29924__auto___30490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30478,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (__30478,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function (state_30349){
var state_val_30350 = (state_30349[(1)]);
if((state_val_30350 === (1))){
var state_30349__$1 = state_30349;
var statearr_30351_30491 = state_30349__$1;
(statearr_30351_30491[(2)] = null);

(statearr_30351_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (2))){
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30349__$1,(4),jobs);
} else {
if((state_val_30350 === (3))){
var inst_30347 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30349__$1,inst_30347);
} else {
if((state_val_30350 === (4))){
var inst_30339 = (state_30349[(2)]);
var inst_30340 = async.call(null,inst_30339);
var state_30349__$1 = state_30349;
if(cljs.core.truth_(inst_30340)){
var statearr_30352_30492 = state_30349__$1;
(statearr_30352_30492[(1)] = (5));

} else {
var statearr_30353_30493 = state_30349__$1;
(statearr_30353_30493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (5))){
var state_30349__$1 = state_30349;
var statearr_30354_30494 = state_30349__$1;
(statearr_30354_30494[(2)] = null);

(statearr_30354_30494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (6))){
var state_30349__$1 = state_30349;
var statearr_30355_30495 = state_30349__$1;
(statearr_30355_30495[(2)] = null);

(statearr_30355_30495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30350 === (7))){
var inst_30345 = (state_30349[(2)]);
var state_30349__$1 = state_30349;
var statearr_30356_30496 = state_30349__$1;
(statearr_30356_30496[(2)] = inst_30345);

(statearr_30356_30496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30478,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
;
return ((function (__30478,switch__29812__auto__,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_30360 = [null,null,null,null,null,null,null];
(statearr_30360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__);

(statearr_30360[(1)] = (1));

return statearr_30360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1 = (function (state_30349){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30361){if((e30361 instanceof Object)){
var ex__29816__auto__ = e30361;
var statearr_30362_30497 = state_30349;
(statearr_30362_30497[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30498 = state_30349;
state_30349 = G__30498;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = function(state_30349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1.call(this,state_30349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__;
})()
;})(__30478,switch__29812__auto__,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30363 = f__29925__auto__.call(null);
(statearr_30363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30490);

return statearr_30363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(__30478,c__29924__auto___30490,G__30309_30479,n__22579__auto___30477,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30499 = (__30478 + (1));
__30478 = G__30499;
continue;
} else {
}
break;
}

var c__29924__auto___30500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30500,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___30500,jobs,results,process,async){
return (function (state_30385){
var state_val_30386 = (state_30385[(1)]);
if((state_val_30386 === (1))){
var state_30385__$1 = state_30385;
var statearr_30387_30501 = state_30385__$1;
(statearr_30387_30501[(2)] = null);

(statearr_30387_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (2))){
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30385__$1,(4),from);
} else {
if((state_val_30386 === (3))){
var inst_30383 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30385__$1,inst_30383);
} else {
if((state_val_30386 === (4))){
var inst_30366 = (state_30385[(7)]);
var inst_30366__$1 = (state_30385[(2)]);
var inst_30367 = (inst_30366__$1 == null);
var state_30385__$1 = (function (){var statearr_30388 = state_30385;
(statearr_30388[(7)] = inst_30366__$1);

return statearr_30388;
})();
if(cljs.core.truth_(inst_30367)){
var statearr_30389_30502 = state_30385__$1;
(statearr_30389_30502[(1)] = (5));

} else {
var statearr_30390_30503 = state_30385__$1;
(statearr_30390_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (5))){
var inst_30369 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30385__$1 = state_30385;
var statearr_30391_30504 = state_30385__$1;
(statearr_30391_30504[(2)] = inst_30369);

(statearr_30391_30504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (6))){
var inst_30371 = (state_30385[(8)]);
var inst_30366 = (state_30385[(7)]);
var inst_30371__$1 = cljs.core.async.chan.call(null,(1));
var inst_30372 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30373 = [inst_30366,inst_30371__$1];
var inst_30374 = (new cljs.core.PersistentVector(null,2,(5),inst_30372,inst_30373,null));
var state_30385__$1 = (function (){var statearr_30392 = state_30385;
(statearr_30392[(8)] = inst_30371__$1);

return statearr_30392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30385__$1,(8),jobs,inst_30374);
} else {
if((state_val_30386 === (7))){
var inst_30381 = (state_30385[(2)]);
var state_30385__$1 = state_30385;
var statearr_30393_30505 = state_30385__$1;
(statearr_30393_30505[(2)] = inst_30381);

(statearr_30393_30505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30386 === (8))){
var inst_30371 = (state_30385[(8)]);
var inst_30376 = (state_30385[(2)]);
var state_30385__$1 = (function (){var statearr_30394 = state_30385;
(statearr_30394[(9)] = inst_30376);

return statearr_30394;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30385__$1,(9),results,inst_30371);
} else {
if((state_val_30386 === (9))){
var inst_30378 = (state_30385[(2)]);
var state_30385__$1 = (function (){var statearr_30395 = state_30385;
(statearr_30395[(10)] = inst_30378);

return statearr_30395;
})();
var statearr_30396_30506 = state_30385__$1;
(statearr_30396_30506[(2)] = null);

(statearr_30396_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___30500,jobs,results,process,async))
;
return ((function (switch__29812__auto__,c__29924__auto___30500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_30400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30400[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__);

(statearr_30400[(1)] = (1));

return statearr_30400;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1 = (function (state_30385){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30401){if((e30401 instanceof Object)){
var ex__29816__auto__ = e30401;
var statearr_30402_30507 = state_30385;
(statearr_30402_30507[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30508 = state_30385;
state_30385 = G__30508;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = function(state_30385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1.call(this,state_30385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___30500,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30403 = f__29925__auto__.call(null);
(statearr_30403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30500);

return statearr_30403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30500,jobs,results,process,async))
);


var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto__,jobs,results,process,async){
return (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (7))){
var inst_30437 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30443_30509 = state_30441__$1;
(statearr_30443_30509[(2)] = inst_30437);

(statearr_30443_30509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (20))){
var state_30441__$1 = state_30441;
var statearr_30444_30510 = state_30441__$1;
(statearr_30444_30510[(2)] = null);

(statearr_30444_30510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (1))){
var state_30441__$1 = state_30441;
var statearr_30445_30511 = state_30441__$1;
(statearr_30445_30511[(2)] = null);

(statearr_30445_30511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (4))){
var inst_30406 = (state_30441[(7)]);
var inst_30406__$1 = (state_30441[(2)]);
var inst_30407 = (inst_30406__$1 == null);
var state_30441__$1 = (function (){var statearr_30446 = state_30441;
(statearr_30446[(7)] = inst_30406__$1);

return statearr_30446;
})();
if(cljs.core.truth_(inst_30407)){
var statearr_30447_30512 = state_30441__$1;
(statearr_30447_30512[(1)] = (5));

} else {
var statearr_30448_30513 = state_30441__$1;
(statearr_30448_30513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (15))){
var inst_30419 = (state_30441[(8)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30441__$1,(18),to,inst_30419);
} else {
if((state_val_30442 === (21))){
var inst_30432 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30449_30514 = state_30441__$1;
(statearr_30449_30514[(2)] = inst_30432);

(statearr_30449_30514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (13))){
var inst_30434 = (state_30441[(2)]);
var state_30441__$1 = (function (){var statearr_30450 = state_30441;
(statearr_30450[(9)] = inst_30434);

return statearr_30450;
})();
var statearr_30451_30515 = state_30441__$1;
(statearr_30451_30515[(2)] = null);

(statearr_30451_30515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (6))){
var inst_30406 = (state_30441[(7)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,(11),inst_30406);
} else {
if((state_val_30442 === (17))){
var inst_30427 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30427)){
var statearr_30452_30516 = state_30441__$1;
(statearr_30452_30516[(1)] = (19));

} else {
var statearr_30453_30517 = state_30441__$1;
(statearr_30453_30517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (3))){
var inst_30439 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30441__$1,inst_30439);
} else {
if((state_val_30442 === (12))){
var inst_30416 = (state_30441[(10)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,(14),inst_30416);
} else {
if((state_val_30442 === (2))){
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,(4),results);
} else {
if((state_val_30442 === (19))){
var state_30441__$1 = state_30441;
var statearr_30454_30518 = state_30441__$1;
(statearr_30454_30518[(2)] = null);

(statearr_30454_30518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (11))){
var inst_30416 = (state_30441[(2)]);
var state_30441__$1 = (function (){var statearr_30455 = state_30441;
(statearr_30455[(10)] = inst_30416);

return statearr_30455;
})();
var statearr_30456_30519 = state_30441__$1;
(statearr_30456_30519[(2)] = null);

(statearr_30456_30519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (9))){
var state_30441__$1 = state_30441;
var statearr_30457_30520 = state_30441__$1;
(statearr_30457_30520[(2)] = null);

(statearr_30457_30520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (5))){
var state_30441__$1 = state_30441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30458_30521 = state_30441__$1;
(statearr_30458_30521[(1)] = (8));

} else {
var statearr_30459_30522 = state_30441__$1;
(statearr_30459_30522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (14))){
var inst_30419 = (state_30441[(8)]);
var inst_30421 = (state_30441[(11)]);
var inst_30419__$1 = (state_30441[(2)]);
var inst_30420 = (inst_30419__$1 == null);
var inst_30421__$1 = cljs.core.not.call(null,inst_30420);
var state_30441__$1 = (function (){var statearr_30460 = state_30441;
(statearr_30460[(8)] = inst_30419__$1);

(statearr_30460[(11)] = inst_30421__$1);

return statearr_30460;
})();
if(inst_30421__$1){
var statearr_30461_30523 = state_30441__$1;
(statearr_30461_30523[(1)] = (15));

} else {
var statearr_30462_30524 = state_30441__$1;
(statearr_30462_30524[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (16))){
var inst_30421 = (state_30441[(11)]);
var state_30441__$1 = state_30441;
var statearr_30463_30525 = state_30441__$1;
(statearr_30463_30525[(2)] = inst_30421);

(statearr_30463_30525[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (10))){
var inst_30413 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30464_30526 = state_30441__$1;
(statearr_30464_30526[(2)] = inst_30413);

(statearr_30464_30526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (18))){
var inst_30424 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30465_30527 = state_30441__$1;
(statearr_30465_30527[(2)] = inst_30424);

(statearr_30465_30527[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (8))){
var inst_30410 = cljs.core.async.close_BANG_.call(null,to);
var state_30441__$1 = state_30441;
var statearr_30466_30528 = state_30441__$1;
(statearr_30466_30528[(2)] = inst_30410);

(statearr_30466_30528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto__,jobs,results,process,async))
;
return ((function (switch__29812__auto__,c__29924__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_30470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__);

(statearr_30470[(1)] = (1));

return statearr_30470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1 = (function (state_30441){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30471){if((e30471 instanceof Object)){
var ex__29816__auto__ = e30471;
var statearr_30472_30529 = state_30441;
(statearr_30472_30529[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30530 = state_30441;
state_30441 = G__30530;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto__,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30473 = f__29925__auto__.call(null);
(statearr_30473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__,jobs,results,process,async))
);

return c__29924__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30531 = [];
var len__22734__auto___30534 = arguments.length;
var i__22735__auto___30535 = (0);
while(true){
if((i__22735__auto___30535 < len__22734__auto___30534)){
args30531.push((arguments[i__22735__auto___30535]));

var G__30536 = (i__22735__auto___30535 + (1));
i__22735__auto___30535 = G__30536;
continue;
} else {
}
break;
}

var G__30533 = args30531.length;
switch (G__30533) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30531.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30538 = [];
var len__22734__auto___30541 = arguments.length;
var i__22735__auto___30542 = (0);
while(true){
if((i__22735__auto___30542 < len__22734__auto___30541)){
args30538.push((arguments[i__22735__auto___30542]));

var G__30543 = (i__22735__auto___30542 + (1));
i__22735__auto___30542 = G__30543;
continue;
} else {
}
break;
}

var G__30540 = args30538.length;
switch (G__30540) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30538.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30545 = [];
var len__22734__auto___30598 = arguments.length;
var i__22735__auto___30599 = (0);
while(true){
if((i__22735__auto___30599 < len__22734__auto___30598)){
args30545.push((arguments[i__22735__auto___30599]));

var G__30600 = (i__22735__auto___30599 + (1));
i__22735__auto___30599 = G__30600;
continue;
} else {
}
break;
}

var G__30547 = args30545.length;
switch (G__30547) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30545.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29924__auto___30602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30602,tc,fc){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___30602,tc,fc){
return (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (7))){
var inst_30569 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30575_30603 = state_30573__$1;
(statearr_30575_30603[(2)] = inst_30569);

(statearr_30575_30603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (1))){
var state_30573__$1 = state_30573;
var statearr_30576_30604 = state_30573__$1;
(statearr_30576_30604[(2)] = null);

(statearr_30576_30604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (4))){
var inst_30550 = (state_30573[(7)]);
var inst_30550__$1 = (state_30573[(2)]);
var inst_30551 = (inst_30550__$1 == null);
var state_30573__$1 = (function (){var statearr_30577 = state_30573;
(statearr_30577[(7)] = inst_30550__$1);

return statearr_30577;
})();
if(cljs.core.truth_(inst_30551)){
var statearr_30578_30605 = state_30573__$1;
(statearr_30578_30605[(1)] = (5));

} else {
var statearr_30579_30606 = state_30573__$1;
(statearr_30579_30606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (13))){
var state_30573__$1 = state_30573;
var statearr_30580_30607 = state_30573__$1;
(statearr_30580_30607[(2)] = null);

(statearr_30580_30607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var inst_30550 = (state_30573[(7)]);
var inst_30556 = p.call(null,inst_30550);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30556)){
var statearr_30581_30608 = state_30573__$1;
(statearr_30581_30608[(1)] = (9));

} else {
var statearr_30582_30609 = state_30573__$1;
(statearr_30582_30609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (3))){
var inst_30571 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
if((state_val_30574 === (12))){
var state_30573__$1 = state_30573;
var statearr_30583_30610 = state_30573__$1;
(statearr_30583_30610[(2)] = null);

(statearr_30583_30610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (2))){
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(4),ch);
} else {
if((state_val_30574 === (11))){
var inst_30550 = (state_30573[(7)]);
var inst_30560 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30573__$1,(8),inst_30560,inst_30550);
} else {
if((state_val_30574 === (9))){
var state_30573__$1 = state_30573;
var statearr_30584_30611 = state_30573__$1;
(statearr_30584_30611[(2)] = tc);

(statearr_30584_30611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var inst_30553 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30554 = cljs.core.async.close_BANG_.call(null,fc);
var state_30573__$1 = (function (){var statearr_30585 = state_30573;
(statearr_30585[(8)] = inst_30553);

return statearr_30585;
})();
var statearr_30586_30612 = state_30573__$1;
(statearr_30586_30612[(2)] = inst_30554);

(statearr_30586_30612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (14))){
var inst_30567 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30587_30613 = state_30573__$1;
(statearr_30587_30613[(2)] = inst_30567);

(statearr_30587_30613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (10))){
var state_30573__$1 = state_30573;
var statearr_30588_30614 = state_30573__$1;
(statearr_30588_30614[(2)] = fc);

(statearr_30588_30614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (8))){
var inst_30562 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30562)){
var statearr_30589_30615 = state_30573__$1;
(statearr_30589_30615[(1)] = (12));

} else {
var statearr_30590_30616 = state_30573__$1;
(statearr_30590_30616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___30602,tc,fc))
;
return ((function (switch__29812__auto__,c__29924__auto___30602,tc,fc){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_30594 = [null,null,null,null,null,null,null,null,null];
(statearr_30594[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_30594[(1)] = (1));

return statearr_30594;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_30573){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30595){if((e30595 instanceof Object)){
var ex__29816__auto__ = e30595;
var statearr_30596_30617 = state_30573;
(statearr_30596_30617[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30618 = state_30573;
state_30573 = G__30618;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___30602,tc,fc))
})();
var state__29926__auto__ = (function (){var statearr_30597 = f__29925__auto__.call(null);
(statearr_30597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30602);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30602,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto__){
return (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (7))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30684_30705 = state_30682__$1;
(statearr_30684_30705[(2)] = inst_30678);

(statearr_30684_30705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (1))){
var inst_30662 = init;
var state_30682__$1 = (function (){var statearr_30685 = state_30682;
(statearr_30685[(7)] = inst_30662);

return statearr_30685;
})();
var statearr_30686_30706 = state_30682__$1;
(statearr_30686_30706[(2)] = null);

(statearr_30686_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (4))){
var inst_30665 = (state_30682[(8)]);
var inst_30665__$1 = (state_30682[(2)]);
var inst_30666 = (inst_30665__$1 == null);
var state_30682__$1 = (function (){var statearr_30687 = state_30682;
(statearr_30687[(8)] = inst_30665__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30666)){
var statearr_30688_30707 = state_30682__$1;
(statearr_30688_30707[(1)] = (5));

} else {
var statearr_30689_30708 = state_30682__$1;
(statearr_30689_30708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var inst_30662 = (state_30682[(7)]);
var inst_30669 = (state_30682[(9)]);
var inst_30665 = (state_30682[(8)]);
var inst_30669__$1 = f.call(null,inst_30662,inst_30665);
var inst_30670 = cljs.core.reduced_QMARK_.call(null,inst_30669__$1);
var state_30682__$1 = (function (){var statearr_30690 = state_30682;
(statearr_30690[(9)] = inst_30669__$1);

return statearr_30690;
})();
if(inst_30670){
var statearr_30691_30709 = state_30682__$1;
(statearr_30691_30709[(1)] = (8));

} else {
var statearr_30692_30710 = state_30682__$1;
(statearr_30692_30710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (2))){
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(4),ch);
} else {
if((state_val_30683 === (9))){
var inst_30669 = (state_30682[(9)]);
var inst_30662 = inst_30669;
var state_30682__$1 = (function (){var statearr_30693 = state_30682;
(statearr_30693[(7)] = inst_30662);

return statearr_30693;
})();
var statearr_30694_30711 = state_30682__$1;
(statearr_30694_30711[(2)] = null);

(statearr_30694_30711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var inst_30662 = (state_30682[(7)]);
var state_30682__$1 = state_30682;
var statearr_30695_30712 = state_30682__$1;
(statearr_30695_30712[(2)] = inst_30662);

(statearr_30695_30712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (10))){
var inst_30676 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30696_30713 = state_30682__$1;
(statearr_30696_30713[(2)] = inst_30676);

(statearr_30696_30713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (8))){
var inst_30669 = (state_30682[(9)]);
var inst_30672 = cljs.core.deref.call(null,inst_30669);
var state_30682__$1 = state_30682;
var statearr_30697_30714 = state_30682__$1;
(statearr_30697_30714[(2)] = inst_30672);

(statearr_30697_30714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto__))
;
return ((function (switch__29812__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29813__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29813__auto____0 = (function (){
var statearr_30701 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30701[(0)] = cljs$core$async$reduce_$_state_machine__29813__auto__);

(statearr_30701[(1)] = (1));

return statearr_30701;
});
var cljs$core$async$reduce_$_state_machine__29813__auto____1 = (function (state_30682){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30702){if((e30702 instanceof Object)){
var ex__29816__auto__ = e30702;
var statearr_30703_30715 = state_30682;
(statearr_30703_30715[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30716 = state_30682;
state_30682 = G__30716;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29813__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29813__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29813__auto____0;
cljs$core$async$reduce_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29813__auto____1;
return cljs$core$async$reduce_$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_30704 = f__29925__auto__.call(null);
(statearr_30704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30717 = [];
var len__22734__auto___30769 = arguments.length;
var i__22735__auto___30770 = (0);
while(true){
if((i__22735__auto___30770 < len__22734__auto___30769)){
args30717.push((arguments[i__22735__auto___30770]));

var G__30771 = (i__22735__auto___30770 + (1));
i__22735__auto___30770 = G__30771;
continue;
} else {
}
break;
}

var G__30719 = args30717.length;
switch (G__30719) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30717.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto__){
return (function (state_30744){
var state_val_30745 = (state_30744[(1)]);
if((state_val_30745 === (7))){
var inst_30726 = (state_30744[(2)]);
var state_30744__$1 = state_30744;
var statearr_30746_30773 = state_30744__$1;
(statearr_30746_30773[(2)] = inst_30726);

(statearr_30746_30773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (1))){
var inst_30720 = cljs.core.seq.call(null,coll);
var inst_30721 = inst_30720;
var state_30744__$1 = (function (){var statearr_30747 = state_30744;
(statearr_30747[(7)] = inst_30721);

return statearr_30747;
})();
var statearr_30748_30774 = state_30744__$1;
(statearr_30748_30774[(2)] = null);

(statearr_30748_30774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (4))){
var inst_30721 = (state_30744[(7)]);
var inst_30724 = cljs.core.first.call(null,inst_30721);
var state_30744__$1 = state_30744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30744__$1,(7),ch,inst_30724);
} else {
if((state_val_30745 === (13))){
var inst_30738 = (state_30744[(2)]);
var state_30744__$1 = state_30744;
var statearr_30749_30775 = state_30744__$1;
(statearr_30749_30775[(2)] = inst_30738);

(statearr_30749_30775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (6))){
var inst_30729 = (state_30744[(2)]);
var state_30744__$1 = state_30744;
if(cljs.core.truth_(inst_30729)){
var statearr_30750_30776 = state_30744__$1;
(statearr_30750_30776[(1)] = (8));

} else {
var statearr_30751_30777 = state_30744__$1;
(statearr_30751_30777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (3))){
var inst_30742 = (state_30744[(2)]);
var state_30744__$1 = state_30744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30744__$1,inst_30742);
} else {
if((state_val_30745 === (12))){
var state_30744__$1 = state_30744;
var statearr_30752_30778 = state_30744__$1;
(statearr_30752_30778[(2)] = null);

(statearr_30752_30778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (2))){
var inst_30721 = (state_30744[(7)]);
var state_30744__$1 = state_30744;
if(cljs.core.truth_(inst_30721)){
var statearr_30753_30779 = state_30744__$1;
(statearr_30753_30779[(1)] = (4));

} else {
var statearr_30754_30780 = state_30744__$1;
(statearr_30754_30780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (11))){
var inst_30735 = cljs.core.async.close_BANG_.call(null,ch);
var state_30744__$1 = state_30744;
var statearr_30755_30781 = state_30744__$1;
(statearr_30755_30781[(2)] = inst_30735);

(statearr_30755_30781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (9))){
var state_30744__$1 = state_30744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30756_30782 = state_30744__$1;
(statearr_30756_30782[(1)] = (11));

} else {
var statearr_30757_30783 = state_30744__$1;
(statearr_30757_30783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (5))){
var inst_30721 = (state_30744[(7)]);
var state_30744__$1 = state_30744;
var statearr_30758_30784 = state_30744__$1;
(statearr_30758_30784[(2)] = inst_30721);

(statearr_30758_30784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (10))){
var inst_30740 = (state_30744[(2)]);
var state_30744__$1 = state_30744;
var statearr_30759_30785 = state_30744__$1;
(statearr_30759_30785[(2)] = inst_30740);

(statearr_30759_30785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30745 === (8))){
var inst_30721 = (state_30744[(7)]);
var inst_30731 = cljs.core.next.call(null,inst_30721);
var inst_30721__$1 = inst_30731;
var state_30744__$1 = (function (){var statearr_30760 = state_30744;
(statearr_30760[(7)] = inst_30721__$1);

return statearr_30760;
})();
var statearr_30761_30786 = state_30744__$1;
(statearr_30761_30786[(2)] = null);

(statearr_30761_30786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto__))
;
return ((function (switch__29812__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_30765 = [null,null,null,null,null,null,null,null];
(statearr_30765[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_30765[(1)] = (1));

return statearr_30765;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_30744){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_30744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e30766){if((e30766 instanceof Object)){
var ex__29816__auto__ = e30766;
var statearr_30767_30787 = state_30744;
(statearr_30767_30787[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30788 = state_30744;
state_30744 = G__30788;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_30744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_30744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_30768 = f__29925__auto__.call(null);
(statearr_30768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22331__auto__ = (((_ == null))?null:_);
var m__22332__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,_);
} else {
var m__22332__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22332__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,ch);
} else {
var m__22332__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m);
} else {
var m__22332__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31010 = (function (mult,ch,cs,meta31011){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31011 = meta31011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31012,meta31011__$1){
var self__ = this;
var _31012__$1 = this;
return (new cljs.core.async.t_cljs$core$async31010(self__.mult,self__.ch,self__.cs,meta31011__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31012){
var self__ = this;
var _31012__$1 = this;
return self__.meta31011;
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31011","meta31011",2132920617,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31010.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31010";

cljs.core.async.t_cljs$core$async31010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async31010");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31010 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31010(mult__$1,ch__$1,cs__$1,meta31011){
return (new cljs.core.async.t_cljs$core$async31010(mult__$1,ch__$1,cs__$1,meta31011));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31010(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29924__auto___31231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31231,cs,m,dchan,dctr,done){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___31231,cs,m,dchan,dctr,done){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31139 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31145_31232 = state_31143__$1;
(statearr_31145_31232[(2)] = inst_31139);

(statearr_31145_31232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (20))){
var inst_31044 = (state_31143[(7)]);
var inst_31054 = cljs.core.first.call(null,inst_31044);
var inst_31055 = cljs.core.nth.call(null,inst_31054,(0),null);
var inst_31056 = cljs.core.nth.call(null,inst_31054,(1),null);
var state_31143__$1 = (function (){var statearr_31146 = state_31143;
(statearr_31146[(8)] = inst_31055);

return statearr_31146;
})();
if(cljs.core.truth_(inst_31056)){
var statearr_31147_31233 = state_31143__$1;
(statearr_31147_31233[(1)] = (22));

} else {
var statearr_31148_31234 = state_31143__$1;
(statearr_31148_31234[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (27))){
var inst_31091 = (state_31143[(9)]);
var inst_31086 = (state_31143[(10)]);
var inst_31084 = (state_31143[(11)]);
var inst_31015 = (state_31143[(12)]);
var inst_31091__$1 = cljs.core._nth.call(null,inst_31084,inst_31086);
var inst_31092 = cljs.core.async.put_BANG_.call(null,inst_31091__$1,inst_31015,done);
var state_31143__$1 = (function (){var statearr_31149 = state_31143;
(statearr_31149[(9)] = inst_31091__$1);

return statearr_31149;
})();
if(cljs.core.truth_(inst_31092)){
var statearr_31150_31235 = state_31143__$1;
(statearr_31150_31235[(1)] = (30));

} else {
var statearr_31151_31236 = state_31143__$1;
(statearr_31151_31236[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var state_31143__$1 = state_31143;
var statearr_31152_31237 = state_31143__$1;
(statearr_31152_31237[(2)] = null);

(statearr_31152_31237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (24))){
var inst_31044 = (state_31143[(7)]);
var inst_31061 = (state_31143[(2)]);
var inst_31062 = cljs.core.next.call(null,inst_31044);
var inst_31024 = inst_31062;
var inst_31025 = null;
var inst_31026 = (0);
var inst_31027 = (0);
var state_31143__$1 = (function (){var statearr_31153 = state_31143;
(statearr_31153[(13)] = inst_31061);

(statearr_31153[(14)] = inst_31024);

(statearr_31153[(15)] = inst_31026);

(statearr_31153[(16)] = inst_31025);

(statearr_31153[(17)] = inst_31027);

return statearr_31153;
})();
var statearr_31154_31238 = state_31143__$1;
(statearr_31154_31238[(2)] = null);

(statearr_31154_31238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (39))){
var state_31143__$1 = state_31143;
var statearr_31158_31239 = state_31143__$1;
(statearr_31158_31239[(2)] = null);

(statearr_31158_31239[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31015 = (state_31143[(12)]);
var inst_31015__$1 = (state_31143[(2)]);
var inst_31016 = (inst_31015__$1 == null);
var state_31143__$1 = (function (){var statearr_31159 = state_31143;
(statearr_31159[(12)] = inst_31015__$1);

return statearr_31159;
})();
if(cljs.core.truth_(inst_31016)){
var statearr_31160_31240 = state_31143__$1;
(statearr_31160_31240[(1)] = (5));

} else {
var statearr_31161_31241 = state_31143__$1;
(statearr_31161_31241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (15))){
var inst_31024 = (state_31143[(14)]);
var inst_31026 = (state_31143[(15)]);
var inst_31025 = (state_31143[(16)]);
var inst_31027 = (state_31143[(17)]);
var inst_31040 = (state_31143[(2)]);
var inst_31041 = (inst_31027 + (1));
var tmp31155 = inst_31024;
var tmp31156 = inst_31026;
var tmp31157 = inst_31025;
var inst_31024__$1 = tmp31155;
var inst_31025__$1 = tmp31157;
var inst_31026__$1 = tmp31156;
var inst_31027__$1 = inst_31041;
var state_31143__$1 = (function (){var statearr_31162 = state_31143;
(statearr_31162[(14)] = inst_31024__$1);

(statearr_31162[(15)] = inst_31026__$1);

(statearr_31162[(18)] = inst_31040);

(statearr_31162[(16)] = inst_31025__$1);

(statearr_31162[(17)] = inst_31027__$1);

return statearr_31162;
})();
var statearr_31163_31242 = state_31143__$1;
(statearr_31163_31242[(2)] = null);

(statearr_31163_31242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (21))){
var inst_31065 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31167_31243 = state_31143__$1;
(statearr_31167_31243[(2)] = inst_31065);

(statearr_31167_31243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (31))){
var inst_31091 = (state_31143[(9)]);
var inst_31095 = done.call(null,null);
var inst_31096 = cljs.core.async.untap_STAR_.call(null,m,inst_31091);
var state_31143__$1 = (function (){var statearr_31168 = state_31143;
(statearr_31168[(19)] = inst_31095);

return statearr_31168;
})();
var statearr_31169_31244 = state_31143__$1;
(statearr_31169_31244[(2)] = inst_31096);

(statearr_31169_31244[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (32))){
var inst_31083 = (state_31143[(20)]);
var inst_31086 = (state_31143[(10)]);
var inst_31084 = (state_31143[(11)]);
var inst_31085 = (state_31143[(21)]);
var inst_31098 = (state_31143[(2)]);
var inst_31099 = (inst_31086 + (1));
var tmp31164 = inst_31083;
var tmp31165 = inst_31084;
var tmp31166 = inst_31085;
var inst_31083__$1 = tmp31164;
var inst_31084__$1 = tmp31165;
var inst_31085__$1 = tmp31166;
var inst_31086__$1 = inst_31099;
var state_31143__$1 = (function (){var statearr_31170 = state_31143;
(statearr_31170[(20)] = inst_31083__$1);

(statearr_31170[(10)] = inst_31086__$1);

(statearr_31170[(11)] = inst_31084__$1);

(statearr_31170[(22)] = inst_31098);

(statearr_31170[(21)] = inst_31085__$1);

return statearr_31170;
})();
var statearr_31171_31245 = state_31143__$1;
(statearr_31171_31245[(2)] = null);

(statearr_31171_31245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (40))){
var inst_31111 = (state_31143[(23)]);
var inst_31115 = done.call(null,null);
var inst_31116 = cljs.core.async.untap_STAR_.call(null,m,inst_31111);
var state_31143__$1 = (function (){var statearr_31172 = state_31143;
(statearr_31172[(24)] = inst_31115);

return statearr_31172;
})();
var statearr_31173_31246 = state_31143__$1;
(statearr_31173_31246[(2)] = inst_31116);

(statearr_31173_31246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (33))){
var inst_31102 = (state_31143[(25)]);
var inst_31104 = cljs.core.chunked_seq_QMARK_.call(null,inst_31102);
var state_31143__$1 = state_31143;
if(inst_31104){
var statearr_31174_31247 = state_31143__$1;
(statearr_31174_31247[(1)] = (36));

} else {
var statearr_31175_31248 = state_31143__$1;
(statearr_31175_31248[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var inst_31034 = (state_31143[(26)]);
var inst_31037 = cljs.core.async.close_BANG_.call(null,inst_31034);
var state_31143__$1 = state_31143;
var statearr_31176_31249 = state_31143__$1;
(statearr_31176_31249[(2)] = inst_31037);

(statearr_31176_31249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (22))){
var inst_31055 = (state_31143[(8)]);
var inst_31058 = cljs.core.async.close_BANG_.call(null,inst_31055);
var state_31143__$1 = state_31143;
var statearr_31177_31250 = state_31143__$1;
(statearr_31177_31250[(2)] = inst_31058);

(statearr_31177_31250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (36))){
var inst_31102 = (state_31143[(25)]);
var inst_31106 = cljs.core.chunk_first.call(null,inst_31102);
var inst_31107 = cljs.core.chunk_rest.call(null,inst_31102);
var inst_31108 = cljs.core.count.call(null,inst_31106);
var inst_31083 = inst_31107;
var inst_31084 = inst_31106;
var inst_31085 = inst_31108;
var inst_31086 = (0);
var state_31143__$1 = (function (){var statearr_31178 = state_31143;
(statearr_31178[(20)] = inst_31083);

(statearr_31178[(10)] = inst_31086);

(statearr_31178[(11)] = inst_31084);

(statearr_31178[(21)] = inst_31085);

return statearr_31178;
})();
var statearr_31179_31251 = state_31143__$1;
(statearr_31179_31251[(2)] = null);

(statearr_31179_31251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (41))){
var inst_31102 = (state_31143[(25)]);
var inst_31118 = (state_31143[(2)]);
var inst_31119 = cljs.core.next.call(null,inst_31102);
var inst_31083 = inst_31119;
var inst_31084 = null;
var inst_31085 = (0);
var inst_31086 = (0);
var state_31143__$1 = (function (){var statearr_31180 = state_31143;
(statearr_31180[(27)] = inst_31118);

(statearr_31180[(20)] = inst_31083);

(statearr_31180[(10)] = inst_31086);

(statearr_31180[(11)] = inst_31084);

(statearr_31180[(21)] = inst_31085);

return statearr_31180;
})();
var statearr_31181_31252 = state_31143__$1;
(statearr_31181_31252[(2)] = null);

(statearr_31181_31252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (43))){
var state_31143__$1 = state_31143;
var statearr_31182_31253 = state_31143__$1;
(statearr_31182_31253[(2)] = null);

(statearr_31182_31253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (29))){
var inst_31127 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31183_31254 = state_31143__$1;
(statearr_31183_31254[(2)] = inst_31127);

(statearr_31183_31254[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (44))){
var inst_31136 = (state_31143[(2)]);
var state_31143__$1 = (function (){var statearr_31184 = state_31143;
(statearr_31184[(28)] = inst_31136);

return statearr_31184;
})();
var statearr_31185_31255 = state_31143__$1;
(statearr_31185_31255[(2)] = null);

(statearr_31185_31255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31075 = (state_31143[(29)]);
var inst_31074 = cljs.core.deref.call(null,cs);
var inst_31075__$1 = cljs.core.keys.call(null,inst_31074);
var inst_31076 = cljs.core.count.call(null,inst_31075__$1);
var inst_31077 = cljs.core.reset_BANG_.call(null,dctr,inst_31076);
var inst_31082 = cljs.core.seq.call(null,inst_31075__$1);
var inst_31083 = inst_31082;
var inst_31084 = null;
var inst_31085 = (0);
var inst_31086 = (0);
var state_31143__$1 = (function (){var statearr_31186 = state_31143;
(statearr_31186[(20)] = inst_31083);

(statearr_31186[(10)] = inst_31086);

(statearr_31186[(11)] = inst_31084);

(statearr_31186[(30)] = inst_31077);

(statearr_31186[(21)] = inst_31085);

(statearr_31186[(29)] = inst_31075__$1);

return statearr_31186;
})();
var statearr_31187_31256 = state_31143__$1;
(statearr_31187_31256[(2)] = null);

(statearr_31187_31256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (28))){
var inst_31083 = (state_31143[(20)]);
var inst_31102 = (state_31143[(25)]);
var inst_31102__$1 = cljs.core.seq.call(null,inst_31083);
var state_31143__$1 = (function (){var statearr_31188 = state_31143;
(statearr_31188[(25)] = inst_31102__$1);

return statearr_31188;
})();
if(inst_31102__$1){
var statearr_31189_31257 = state_31143__$1;
(statearr_31189_31257[(1)] = (33));

} else {
var statearr_31190_31258 = state_31143__$1;
(statearr_31190_31258[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (25))){
var inst_31086 = (state_31143[(10)]);
var inst_31085 = (state_31143[(21)]);
var inst_31088 = (inst_31086 < inst_31085);
var inst_31089 = inst_31088;
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31089)){
var statearr_31191_31259 = state_31143__$1;
(statearr_31191_31259[(1)] = (27));

} else {
var statearr_31192_31260 = state_31143__$1;
(statearr_31192_31260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (34))){
var state_31143__$1 = state_31143;
var statearr_31193_31261 = state_31143__$1;
(statearr_31193_31261[(2)] = null);

(statearr_31193_31261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (17))){
var state_31143__$1 = state_31143;
var statearr_31194_31262 = state_31143__$1;
(statearr_31194_31262[(2)] = null);

(statearr_31194_31262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (3))){
var inst_31141 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (12))){
var inst_31070 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31195_31263 = state_31143__$1;
(statearr_31195_31263[(2)] = inst_31070);

(statearr_31195_31263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(4),ch);
} else {
if((state_val_31144 === (23))){
var state_31143__$1 = state_31143;
var statearr_31196_31264 = state_31143__$1;
(statearr_31196_31264[(2)] = null);

(statearr_31196_31264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (35))){
var inst_31125 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31197_31265 = state_31143__$1;
(statearr_31197_31265[(2)] = inst_31125);

(statearr_31197_31265[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (19))){
var inst_31044 = (state_31143[(7)]);
var inst_31048 = cljs.core.chunk_first.call(null,inst_31044);
var inst_31049 = cljs.core.chunk_rest.call(null,inst_31044);
var inst_31050 = cljs.core.count.call(null,inst_31048);
var inst_31024 = inst_31049;
var inst_31025 = inst_31048;
var inst_31026 = inst_31050;
var inst_31027 = (0);
var state_31143__$1 = (function (){var statearr_31198 = state_31143;
(statearr_31198[(14)] = inst_31024);

(statearr_31198[(15)] = inst_31026);

(statearr_31198[(16)] = inst_31025);

(statearr_31198[(17)] = inst_31027);

return statearr_31198;
})();
var statearr_31199_31266 = state_31143__$1;
(statearr_31199_31266[(2)] = null);

(statearr_31199_31266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (11))){
var inst_31044 = (state_31143[(7)]);
var inst_31024 = (state_31143[(14)]);
var inst_31044__$1 = cljs.core.seq.call(null,inst_31024);
var state_31143__$1 = (function (){var statearr_31200 = state_31143;
(statearr_31200[(7)] = inst_31044__$1);

return statearr_31200;
})();
if(inst_31044__$1){
var statearr_31201_31267 = state_31143__$1;
(statearr_31201_31267[(1)] = (16));

} else {
var statearr_31202_31268 = state_31143__$1;
(statearr_31202_31268[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var inst_31072 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31203_31269 = state_31143__$1;
(statearr_31203_31269[(2)] = inst_31072);

(statearr_31203_31269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var inst_31022 = cljs.core.deref.call(null,cs);
var inst_31023 = cljs.core.seq.call(null,inst_31022);
var inst_31024 = inst_31023;
var inst_31025 = null;
var inst_31026 = (0);
var inst_31027 = (0);
var state_31143__$1 = (function (){var statearr_31204 = state_31143;
(statearr_31204[(14)] = inst_31024);

(statearr_31204[(15)] = inst_31026);

(statearr_31204[(16)] = inst_31025);

(statearr_31204[(17)] = inst_31027);

return statearr_31204;
})();
var statearr_31205_31270 = state_31143__$1;
(statearr_31205_31270[(2)] = null);

(statearr_31205_31270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var state_31143__$1 = state_31143;
var statearr_31206_31271 = state_31143__$1;
(statearr_31206_31271[(2)] = null);

(statearr_31206_31271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (45))){
var inst_31133 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31207_31272 = state_31143__$1;
(statearr_31207_31272[(2)] = inst_31133);

(statearr_31207_31272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (26))){
var inst_31075 = (state_31143[(29)]);
var inst_31129 = (state_31143[(2)]);
var inst_31130 = cljs.core.seq.call(null,inst_31075);
var state_31143__$1 = (function (){var statearr_31208 = state_31143;
(statearr_31208[(31)] = inst_31129);

return statearr_31208;
})();
if(inst_31130){
var statearr_31209_31273 = state_31143__$1;
(statearr_31209_31273[(1)] = (42));

} else {
var statearr_31210_31274 = state_31143__$1;
(statearr_31210_31274[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (16))){
var inst_31044 = (state_31143[(7)]);
var inst_31046 = cljs.core.chunked_seq_QMARK_.call(null,inst_31044);
var state_31143__$1 = state_31143;
if(inst_31046){
var statearr_31211_31275 = state_31143__$1;
(statearr_31211_31275[(1)] = (19));

} else {
var statearr_31212_31276 = state_31143__$1;
(statearr_31212_31276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (38))){
var inst_31122 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31213_31277 = state_31143__$1;
(statearr_31213_31277[(2)] = inst_31122);

(statearr_31213_31277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (30))){
var state_31143__$1 = state_31143;
var statearr_31214_31278 = state_31143__$1;
(statearr_31214_31278[(2)] = null);

(statearr_31214_31278[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31025 = (state_31143[(16)]);
var inst_31027 = (state_31143[(17)]);
var inst_31033 = cljs.core._nth.call(null,inst_31025,inst_31027);
var inst_31034 = cljs.core.nth.call(null,inst_31033,(0),null);
var inst_31035 = cljs.core.nth.call(null,inst_31033,(1),null);
var state_31143__$1 = (function (){var statearr_31215 = state_31143;
(statearr_31215[(26)] = inst_31034);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31216_31279 = state_31143__$1;
(statearr_31216_31279[(1)] = (13));

} else {
var statearr_31217_31280 = state_31143__$1;
(statearr_31217_31280[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (18))){
var inst_31068 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31218_31281 = state_31143__$1;
(statearr_31218_31281[(2)] = inst_31068);

(statearr_31218_31281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (42))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(45),dchan);
} else {
if((state_val_31144 === (37))){
var inst_31102 = (state_31143[(25)]);
var inst_31111 = (state_31143[(23)]);
var inst_31015 = (state_31143[(12)]);
var inst_31111__$1 = cljs.core.first.call(null,inst_31102);
var inst_31112 = cljs.core.async.put_BANG_.call(null,inst_31111__$1,inst_31015,done);
var state_31143__$1 = (function (){var statearr_31219 = state_31143;
(statearr_31219[(23)] = inst_31111__$1);

return statearr_31219;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31220_31282 = state_31143__$1;
(statearr_31220_31282[(1)] = (39));

} else {
var statearr_31221_31283 = state_31143__$1;
(statearr_31221_31283[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31026 = (state_31143[(15)]);
var inst_31027 = (state_31143[(17)]);
var inst_31029 = (inst_31027 < inst_31026);
var inst_31030 = inst_31029;
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31030)){
var statearr_31222_31284 = state_31143__$1;
(statearr_31222_31284[(1)] = (10));

} else {
var statearr_31223_31285 = state_31143__$1;
(statearr_31223_31285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___31231,cs,m,dchan,dctr,done))
;
return ((function (switch__29812__auto__,c__29924__auto___31231,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29813__auto__ = null;
var cljs$core$async$mult_$_state_machine__29813__auto____0 = (function (){
var statearr_31227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31227[(0)] = cljs$core$async$mult_$_state_machine__29813__auto__);

(statearr_31227[(1)] = (1));

return statearr_31227;
});
var cljs$core$async$mult_$_state_machine__29813__auto____1 = (function (state_31143){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e31228){if((e31228 instanceof Object)){
var ex__29816__auto__ = e31228;
var statearr_31229_31286 = state_31143;
(statearr_31229_31286[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31287 = state_31143;
state_31143 = G__31287;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29813__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29813__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29813__auto____0;
cljs$core$async$mult_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29813__auto____1;
return cljs$core$async$mult_$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___31231,cs,m,dchan,dctr,done))
})();
var state__29926__auto__ = (function (){var statearr_31230 = f__29925__auto__.call(null);
(statearr_31230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31231);

return statearr_31230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31231,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31288 = [];
var len__22734__auto___31291 = arguments.length;
var i__22735__auto___31292 = (0);
while(true){
if((i__22735__auto___31292 < len__22734__auto___31291)){
args31288.push((arguments[i__22735__auto___31292]));

var G__31293 = (i__22735__auto___31292 + (1));
i__22735__auto___31292 = G__31293;
continue;
} else {
}
break;
}

var G__31290 = args31288.length;
switch (G__31290) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31288.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,ch);
} else {
var m__22332__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,ch);
} else {
var m__22332__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m);
} else {
var m__22332__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,state_map);
} else {
var m__22332__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22331__auto__ = (((m == null))?null:m);
var m__22332__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,m,mode);
} else {
var m__22332__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22741__auto__ = [];
var len__22734__auto___31305 = arguments.length;
var i__22735__auto___31306 = (0);
while(true){
if((i__22735__auto___31306 < len__22734__auto___31305)){
args__22741__auto__.push((arguments[i__22735__auto___31306]));

var G__31307 = (i__22735__auto___31306 + (1));
i__22735__auto___31306 = G__31307;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((3) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22742__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31299){
var map__31300 = p__31299;
var map__31300__$1 = ((((!((map__31300 == null)))?((((map__31300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31300):map__31300);
var opts = map__31300__$1;
var statearr_31302_31308 = state;
(statearr_31302_31308[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31300,map__31300__$1,opts){
return (function (val){
var statearr_31303_31309 = state;
(statearr_31303_31309[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31300,map__31300__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31304_31310 = state;
(statearr_31304_31310[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31295){
var G__31296 = cljs.core.first.call(null,seq31295);
var seq31295__$1 = cljs.core.next.call(null,seq31295);
var G__31297 = cljs.core.first.call(null,seq31295__$1);
var seq31295__$2 = cljs.core.next.call(null,seq31295__$1);
var G__31298 = cljs.core.first.call(null,seq31295__$2);
var seq31295__$3 = cljs.core.next.call(null,seq31295__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31296,G__31297,G__31298,seq31295__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31474 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31475){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31475 = meta31475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31476,meta31475__$1){
var self__ = this;
var _31476__$1 = this;
return (new cljs.core.async.t_cljs$core$async31474(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31475__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31476){
var self__ = this;
var _31476__$1 = this;
return self__.meta31475;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31475","meta31475",923129970,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31474";

cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async31474");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31474 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31475){
return (new cljs.core.async.t_cljs$core$async31474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31475));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31474(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29924__auto___31637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31574){
var state_val_31575 = (state_31574[(1)]);
if((state_val_31575 === (7))){
var inst_31492 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31576_31638 = state_31574__$1;
(statearr_31576_31638[(2)] = inst_31492);

(statearr_31576_31638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (20))){
var inst_31504 = (state_31574[(7)]);
var state_31574__$1 = state_31574;
var statearr_31577_31639 = state_31574__$1;
(statearr_31577_31639[(2)] = inst_31504);

(statearr_31577_31639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (27))){
var state_31574__$1 = state_31574;
var statearr_31578_31640 = state_31574__$1;
(statearr_31578_31640[(2)] = null);

(statearr_31578_31640[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (1))){
var inst_31480 = (state_31574[(8)]);
var inst_31480__$1 = calc_state.call(null);
var inst_31482 = (inst_31480__$1 == null);
var inst_31483 = cljs.core.not.call(null,inst_31482);
var state_31574__$1 = (function (){var statearr_31579 = state_31574;
(statearr_31579[(8)] = inst_31480__$1);

return statearr_31579;
})();
if(inst_31483){
var statearr_31580_31641 = state_31574__$1;
(statearr_31580_31641[(1)] = (2));

} else {
var statearr_31581_31642 = state_31574__$1;
(statearr_31581_31642[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (24))){
var inst_31548 = (state_31574[(9)]);
var inst_31527 = (state_31574[(10)]);
var inst_31534 = (state_31574[(11)]);
var inst_31548__$1 = inst_31527.call(null,inst_31534);
var state_31574__$1 = (function (){var statearr_31582 = state_31574;
(statearr_31582[(9)] = inst_31548__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31548__$1)){
var statearr_31583_31643 = state_31574__$1;
(statearr_31583_31643[(1)] = (29));

} else {
var statearr_31584_31644 = state_31574__$1;
(statearr_31584_31644[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (4))){
var inst_31495 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31495)){
var statearr_31585_31645 = state_31574__$1;
(statearr_31585_31645[(1)] = (8));

} else {
var statearr_31586_31646 = state_31574__$1;
(statearr_31586_31646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (15))){
var inst_31521 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31521)){
var statearr_31587_31647 = state_31574__$1;
(statearr_31587_31647[(1)] = (19));

} else {
var statearr_31588_31648 = state_31574__$1;
(statearr_31588_31648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (21))){
var inst_31526 = (state_31574[(12)]);
var inst_31526__$1 = (state_31574[(2)]);
var inst_31527 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31528 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31529 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31574__$1 = (function (){var statearr_31589 = state_31574;
(statearr_31589[(13)] = inst_31528);

(statearr_31589[(10)] = inst_31527);

(statearr_31589[(12)] = inst_31526__$1);

return statearr_31589;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31574__$1,(22),inst_31529);
} else {
if((state_val_31575 === (31))){
var inst_31556 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31556)){
var statearr_31590_31649 = state_31574__$1;
(statearr_31590_31649[(1)] = (32));

} else {
var statearr_31591_31650 = state_31574__$1;
(statearr_31591_31650[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (32))){
var inst_31533 = (state_31574[(14)]);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31574__$1,(35),out,inst_31533);
} else {
if((state_val_31575 === (33))){
var inst_31526 = (state_31574[(12)]);
var inst_31504 = inst_31526;
var state_31574__$1 = (function (){var statearr_31592 = state_31574;
(statearr_31592[(7)] = inst_31504);

return statearr_31592;
})();
var statearr_31593_31651 = state_31574__$1;
(statearr_31593_31651[(2)] = null);

(statearr_31593_31651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (13))){
var inst_31504 = (state_31574[(7)]);
var inst_31511 = inst_31504.cljs$lang$protocol_mask$partition0$;
var inst_31512 = (inst_31511 & (64));
var inst_31513 = inst_31504.cljs$core$ISeq$;
var inst_31514 = (inst_31512) || (inst_31513);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31514)){
var statearr_31594_31652 = state_31574__$1;
(statearr_31594_31652[(1)] = (16));

} else {
var statearr_31595_31653 = state_31574__$1;
(statearr_31595_31653[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (22))){
var inst_31533 = (state_31574[(14)]);
var inst_31534 = (state_31574[(11)]);
var inst_31532 = (state_31574[(2)]);
var inst_31533__$1 = cljs.core.nth.call(null,inst_31532,(0),null);
var inst_31534__$1 = cljs.core.nth.call(null,inst_31532,(1),null);
var inst_31535 = (inst_31533__$1 == null);
var inst_31536 = cljs.core._EQ_.call(null,inst_31534__$1,change);
var inst_31537 = (inst_31535) || (inst_31536);
var state_31574__$1 = (function (){var statearr_31596 = state_31574;
(statearr_31596[(14)] = inst_31533__$1);

(statearr_31596[(11)] = inst_31534__$1);

return statearr_31596;
})();
if(cljs.core.truth_(inst_31537)){
var statearr_31597_31654 = state_31574__$1;
(statearr_31597_31654[(1)] = (23));

} else {
var statearr_31598_31655 = state_31574__$1;
(statearr_31598_31655[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (36))){
var inst_31526 = (state_31574[(12)]);
var inst_31504 = inst_31526;
var state_31574__$1 = (function (){var statearr_31599 = state_31574;
(statearr_31599[(7)] = inst_31504);

return statearr_31599;
})();
var statearr_31600_31656 = state_31574__$1;
(statearr_31600_31656[(2)] = null);

(statearr_31600_31656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (29))){
var inst_31548 = (state_31574[(9)]);
var state_31574__$1 = state_31574;
var statearr_31601_31657 = state_31574__$1;
(statearr_31601_31657[(2)] = inst_31548);

(statearr_31601_31657[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (6))){
var state_31574__$1 = state_31574;
var statearr_31602_31658 = state_31574__$1;
(statearr_31602_31658[(2)] = false);

(statearr_31602_31658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (28))){
var inst_31544 = (state_31574[(2)]);
var inst_31545 = calc_state.call(null);
var inst_31504 = inst_31545;
var state_31574__$1 = (function (){var statearr_31603 = state_31574;
(statearr_31603[(7)] = inst_31504);

(statearr_31603[(15)] = inst_31544);

return statearr_31603;
})();
var statearr_31604_31659 = state_31574__$1;
(statearr_31604_31659[(2)] = null);

(statearr_31604_31659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (25))){
var inst_31570 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31605_31660 = state_31574__$1;
(statearr_31605_31660[(2)] = inst_31570);

(statearr_31605_31660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (34))){
var inst_31568 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31606_31661 = state_31574__$1;
(statearr_31606_31661[(2)] = inst_31568);

(statearr_31606_31661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (17))){
var state_31574__$1 = state_31574;
var statearr_31607_31662 = state_31574__$1;
(statearr_31607_31662[(2)] = false);

(statearr_31607_31662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (3))){
var state_31574__$1 = state_31574;
var statearr_31608_31663 = state_31574__$1;
(statearr_31608_31663[(2)] = false);

(statearr_31608_31663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (12))){
var inst_31572 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31574__$1,inst_31572);
} else {
if((state_val_31575 === (2))){
var inst_31480 = (state_31574[(8)]);
var inst_31485 = inst_31480.cljs$lang$protocol_mask$partition0$;
var inst_31486 = (inst_31485 & (64));
var inst_31487 = inst_31480.cljs$core$ISeq$;
var inst_31488 = (inst_31486) || (inst_31487);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31488)){
var statearr_31609_31664 = state_31574__$1;
(statearr_31609_31664[(1)] = (5));

} else {
var statearr_31610_31665 = state_31574__$1;
(statearr_31610_31665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (23))){
var inst_31533 = (state_31574[(14)]);
var inst_31539 = (inst_31533 == null);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31539)){
var statearr_31611_31666 = state_31574__$1;
(statearr_31611_31666[(1)] = (26));

} else {
var statearr_31612_31667 = state_31574__$1;
(statearr_31612_31667[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (35))){
var inst_31559 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
if(cljs.core.truth_(inst_31559)){
var statearr_31613_31668 = state_31574__$1;
(statearr_31613_31668[(1)] = (36));

} else {
var statearr_31614_31669 = state_31574__$1;
(statearr_31614_31669[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (19))){
var inst_31504 = (state_31574[(7)]);
var inst_31523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31504);
var state_31574__$1 = state_31574;
var statearr_31615_31670 = state_31574__$1;
(statearr_31615_31670[(2)] = inst_31523);

(statearr_31615_31670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (11))){
var inst_31504 = (state_31574[(7)]);
var inst_31508 = (inst_31504 == null);
var inst_31509 = cljs.core.not.call(null,inst_31508);
var state_31574__$1 = state_31574;
if(inst_31509){
var statearr_31616_31671 = state_31574__$1;
(statearr_31616_31671[(1)] = (13));

} else {
var statearr_31617_31672 = state_31574__$1;
(statearr_31617_31672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (9))){
var inst_31480 = (state_31574[(8)]);
var state_31574__$1 = state_31574;
var statearr_31618_31673 = state_31574__$1;
(statearr_31618_31673[(2)] = inst_31480);

(statearr_31618_31673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (5))){
var state_31574__$1 = state_31574;
var statearr_31619_31674 = state_31574__$1;
(statearr_31619_31674[(2)] = true);

(statearr_31619_31674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (14))){
var state_31574__$1 = state_31574;
var statearr_31620_31675 = state_31574__$1;
(statearr_31620_31675[(2)] = false);

(statearr_31620_31675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (26))){
var inst_31534 = (state_31574[(11)]);
var inst_31541 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31534);
var state_31574__$1 = state_31574;
var statearr_31621_31676 = state_31574__$1;
(statearr_31621_31676[(2)] = inst_31541);

(statearr_31621_31676[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (16))){
var state_31574__$1 = state_31574;
var statearr_31622_31677 = state_31574__$1;
(statearr_31622_31677[(2)] = true);

(statearr_31622_31677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (38))){
var inst_31564 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31623_31678 = state_31574__$1;
(statearr_31623_31678[(2)] = inst_31564);

(statearr_31623_31678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (30))){
var inst_31528 = (state_31574[(13)]);
var inst_31527 = (state_31574[(10)]);
var inst_31534 = (state_31574[(11)]);
var inst_31551 = cljs.core.empty_QMARK_.call(null,inst_31527);
var inst_31552 = inst_31528.call(null,inst_31534);
var inst_31553 = cljs.core.not.call(null,inst_31552);
var inst_31554 = (inst_31551) && (inst_31553);
var state_31574__$1 = state_31574;
var statearr_31624_31679 = state_31574__$1;
(statearr_31624_31679[(2)] = inst_31554);

(statearr_31624_31679[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (10))){
var inst_31480 = (state_31574[(8)]);
var inst_31500 = (state_31574[(2)]);
var inst_31501 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31502 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31503 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31504 = inst_31480;
var state_31574__$1 = (function (){var statearr_31625 = state_31574;
(statearr_31625[(16)] = inst_31502);

(statearr_31625[(17)] = inst_31501);

(statearr_31625[(7)] = inst_31504);

(statearr_31625[(18)] = inst_31503);

return statearr_31625;
})();
var statearr_31626_31680 = state_31574__$1;
(statearr_31626_31680[(2)] = null);

(statearr_31626_31680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (18))){
var inst_31518 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31627_31681 = state_31574__$1;
(statearr_31627_31681[(2)] = inst_31518);

(statearr_31627_31681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (37))){
var state_31574__$1 = state_31574;
var statearr_31628_31682 = state_31574__$1;
(statearr_31628_31682[(2)] = null);

(statearr_31628_31682[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (8))){
var inst_31480 = (state_31574[(8)]);
var inst_31497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31480);
var state_31574__$1 = state_31574;
var statearr_31629_31683 = state_31574__$1;
(statearr_31629_31683[(2)] = inst_31497);

(statearr_31629_31683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29812__auto__,c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29813__auto__ = null;
var cljs$core$async$mix_$_state_machine__29813__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$mix_$_state_machine__29813__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$mix_$_state_machine__29813__auto____1 = (function (state_31574){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_31574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e31634){if((e31634 instanceof Object)){
var ex__29816__auto__ = e31634;
var statearr_31635_31684 = state_31574;
(statearr_31635_31684[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31685 = state_31574;
state_31574 = G__31685;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29813__auto__ = function(state_31574){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29813__auto____1.call(this,state_31574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29813__auto____0;
cljs$core$async$mix_$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29813__auto____1;
return cljs$core$async$mix_$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29926__auto__ = (function (){var statearr_31636 = f__29925__auto__.call(null);
(statearr_31636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31637);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31637,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22331__auto__ = (((p == null))?null:p);
var m__22332__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22332__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22331__auto__ = (((p == null))?null:p);
var m__22332__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,p,v,ch);
} else {
var m__22332__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31686 = [];
var len__22734__auto___31689 = arguments.length;
var i__22735__auto___31690 = (0);
while(true){
if((i__22735__auto___31690 < len__22734__auto___31689)){
args31686.push((arguments[i__22735__auto___31690]));

var G__31691 = (i__22735__auto___31690 + (1));
i__22735__auto___31690 = G__31691;
continue;
} else {
}
break;
}

var G__31688 = args31686.length;
switch (G__31688) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31686.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22331__auto__ = (((p == null))?null:p);
var m__22332__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,p);
} else {
var m__22332__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22331__auto__ = (((p == null))?null:p);
var m__22332__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,p,v);
} else {
var m__22332__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31694 = [];
var len__22734__auto___31819 = arguments.length;
var i__22735__auto___31820 = (0);
while(true){
if((i__22735__auto___31820 < len__22734__auto___31819)){
args31694.push((arguments[i__22735__auto___31820]));

var G__31821 = (i__22735__auto___31820 + (1));
i__22735__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var G__31696 = args31694.length;
switch (G__31696) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31694.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21676__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21676__auto__,mults){
return (function (p1__31693_SHARP_){
if(cljs.core.truth_(p1__31693_SHARP_.call(null,topic))){
return p1__31693_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31693_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21676__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31697 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31698){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31698 = meta31698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31699,meta31698__$1){
var self__ = this;
var _31699__$1 = this;
return (new cljs.core.async.t_cljs$core$async31697(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31698__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31699){
var self__ = this;
var _31699__$1 = this;
return self__.meta31698;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31698","meta31698",1102564018,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31697";

cljs.core.async.t_cljs$core$async31697.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async31697");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31697 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31697(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31698){
return (new cljs.core.async.t_cljs$core$async31697(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31698));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31697(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29924__auto___31823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31823,mults,ensure_mult,p){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___31823,mults,ensure_mult,p){
return (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (7))){
var inst_31767 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31773_31824 = state_31771__$1;
(statearr_31773_31824[(2)] = inst_31767);

(statearr_31773_31824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (20))){
var state_31771__$1 = state_31771;
var statearr_31774_31825 = state_31771__$1;
(statearr_31774_31825[(2)] = null);

(statearr_31774_31825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (1))){
var state_31771__$1 = state_31771;
var statearr_31775_31826 = state_31771__$1;
(statearr_31775_31826[(2)] = null);

(statearr_31775_31826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (24))){
var inst_31750 = (state_31771[(7)]);
var inst_31759 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31750);
var state_31771__$1 = state_31771;
var statearr_31776_31827 = state_31771__$1;
(statearr_31776_31827[(2)] = inst_31759);

(statearr_31776_31827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (4))){
var inst_31702 = (state_31771[(8)]);
var inst_31702__$1 = (state_31771[(2)]);
var inst_31703 = (inst_31702__$1 == null);
var state_31771__$1 = (function (){var statearr_31777 = state_31771;
(statearr_31777[(8)] = inst_31702__$1);

return statearr_31777;
})();
if(cljs.core.truth_(inst_31703)){
var statearr_31778_31828 = state_31771__$1;
(statearr_31778_31828[(1)] = (5));

} else {
var statearr_31779_31829 = state_31771__$1;
(statearr_31779_31829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (15))){
var inst_31744 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31780_31830 = state_31771__$1;
(statearr_31780_31830[(2)] = inst_31744);

(statearr_31780_31830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (21))){
var inst_31764 = (state_31771[(2)]);
var state_31771__$1 = (function (){var statearr_31781 = state_31771;
(statearr_31781[(9)] = inst_31764);

return statearr_31781;
})();
var statearr_31782_31831 = state_31771__$1;
(statearr_31782_31831[(2)] = null);

(statearr_31782_31831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (13))){
var inst_31726 = (state_31771[(10)]);
var inst_31728 = cljs.core.chunked_seq_QMARK_.call(null,inst_31726);
var state_31771__$1 = state_31771;
if(inst_31728){
var statearr_31783_31832 = state_31771__$1;
(statearr_31783_31832[(1)] = (16));

} else {
var statearr_31784_31833 = state_31771__$1;
(statearr_31784_31833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (22))){
var inst_31756 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
if(cljs.core.truth_(inst_31756)){
var statearr_31785_31834 = state_31771__$1;
(statearr_31785_31834[(1)] = (23));

} else {
var statearr_31786_31835 = state_31771__$1;
(statearr_31786_31835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (6))){
var inst_31702 = (state_31771[(8)]);
var inst_31752 = (state_31771[(11)]);
var inst_31750 = (state_31771[(7)]);
var inst_31750__$1 = topic_fn.call(null,inst_31702);
var inst_31751 = cljs.core.deref.call(null,mults);
var inst_31752__$1 = cljs.core.get.call(null,inst_31751,inst_31750__$1);
var state_31771__$1 = (function (){var statearr_31787 = state_31771;
(statearr_31787[(11)] = inst_31752__$1);

(statearr_31787[(7)] = inst_31750__$1);

return statearr_31787;
})();
if(cljs.core.truth_(inst_31752__$1)){
var statearr_31788_31836 = state_31771__$1;
(statearr_31788_31836[(1)] = (19));

} else {
var statearr_31789_31837 = state_31771__$1;
(statearr_31789_31837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (25))){
var inst_31761 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31790_31838 = state_31771__$1;
(statearr_31790_31838[(2)] = inst_31761);

(statearr_31790_31838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (17))){
var inst_31726 = (state_31771[(10)]);
var inst_31735 = cljs.core.first.call(null,inst_31726);
var inst_31736 = cljs.core.async.muxch_STAR_.call(null,inst_31735);
var inst_31737 = cljs.core.async.close_BANG_.call(null,inst_31736);
var inst_31738 = cljs.core.next.call(null,inst_31726);
var inst_31712 = inst_31738;
var inst_31713 = null;
var inst_31714 = (0);
var inst_31715 = (0);
var state_31771__$1 = (function (){var statearr_31791 = state_31771;
(statearr_31791[(12)] = inst_31714);

(statearr_31791[(13)] = inst_31737);

(statearr_31791[(14)] = inst_31715);

(statearr_31791[(15)] = inst_31713);

(statearr_31791[(16)] = inst_31712);

return statearr_31791;
})();
var statearr_31792_31839 = state_31771__$1;
(statearr_31792_31839[(2)] = null);

(statearr_31792_31839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (3))){
var inst_31769 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31771__$1,inst_31769);
} else {
if((state_val_31772 === (12))){
var inst_31746 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31793_31840 = state_31771__$1;
(statearr_31793_31840[(2)] = inst_31746);

(statearr_31793_31840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (2))){
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(4),ch);
} else {
if((state_val_31772 === (23))){
var state_31771__$1 = state_31771;
var statearr_31794_31841 = state_31771__$1;
(statearr_31794_31841[(2)] = null);

(statearr_31794_31841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (19))){
var inst_31702 = (state_31771[(8)]);
var inst_31752 = (state_31771[(11)]);
var inst_31754 = cljs.core.async.muxch_STAR_.call(null,inst_31752);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31771__$1,(22),inst_31754,inst_31702);
} else {
if((state_val_31772 === (11))){
var inst_31712 = (state_31771[(16)]);
var inst_31726 = (state_31771[(10)]);
var inst_31726__$1 = cljs.core.seq.call(null,inst_31712);
var state_31771__$1 = (function (){var statearr_31795 = state_31771;
(statearr_31795[(10)] = inst_31726__$1);

return statearr_31795;
})();
if(inst_31726__$1){
var statearr_31796_31842 = state_31771__$1;
(statearr_31796_31842[(1)] = (13));

} else {
var statearr_31797_31843 = state_31771__$1;
(statearr_31797_31843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (9))){
var inst_31748 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31798_31844 = state_31771__$1;
(statearr_31798_31844[(2)] = inst_31748);

(statearr_31798_31844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (5))){
var inst_31709 = cljs.core.deref.call(null,mults);
var inst_31710 = cljs.core.vals.call(null,inst_31709);
var inst_31711 = cljs.core.seq.call(null,inst_31710);
var inst_31712 = inst_31711;
var inst_31713 = null;
var inst_31714 = (0);
var inst_31715 = (0);
var state_31771__$1 = (function (){var statearr_31799 = state_31771;
(statearr_31799[(12)] = inst_31714);

(statearr_31799[(14)] = inst_31715);

(statearr_31799[(15)] = inst_31713);

(statearr_31799[(16)] = inst_31712);

return statearr_31799;
})();
var statearr_31800_31845 = state_31771__$1;
(statearr_31800_31845[(2)] = null);

(statearr_31800_31845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (14))){
var state_31771__$1 = state_31771;
var statearr_31804_31846 = state_31771__$1;
(statearr_31804_31846[(2)] = null);

(statearr_31804_31846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (16))){
var inst_31726 = (state_31771[(10)]);
var inst_31730 = cljs.core.chunk_first.call(null,inst_31726);
var inst_31731 = cljs.core.chunk_rest.call(null,inst_31726);
var inst_31732 = cljs.core.count.call(null,inst_31730);
var inst_31712 = inst_31731;
var inst_31713 = inst_31730;
var inst_31714 = inst_31732;
var inst_31715 = (0);
var state_31771__$1 = (function (){var statearr_31805 = state_31771;
(statearr_31805[(12)] = inst_31714);

(statearr_31805[(14)] = inst_31715);

(statearr_31805[(15)] = inst_31713);

(statearr_31805[(16)] = inst_31712);

return statearr_31805;
})();
var statearr_31806_31847 = state_31771__$1;
(statearr_31806_31847[(2)] = null);

(statearr_31806_31847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (10))){
var inst_31714 = (state_31771[(12)]);
var inst_31715 = (state_31771[(14)]);
var inst_31713 = (state_31771[(15)]);
var inst_31712 = (state_31771[(16)]);
var inst_31720 = cljs.core._nth.call(null,inst_31713,inst_31715);
var inst_31721 = cljs.core.async.muxch_STAR_.call(null,inst_31720);
var inst_31722 = cljs.core.async.close_BANG_.call(null,inst_31721);
var inst_31723 = (inst_31715 + (1));
var tmp31801 = inst_31714;
var tmp31802 = inst_31713;
var tmp31803 = inst_31712;
var inst_31712__$1 = tmp31803;
var inst_31713__$1 = tmp31802;
var inst_31714__$1 = tmp31801;
var inst_31715__$1 = inst_31723;
var state_31771__$1 = (function (){var statearr_31807 = state_31771;
(statearr_31807[(12)] = inst_31714__$1);

(statearr_31807[(17)] = inst_31722);

(statearr_31807[(14)] = inst_31715__$1);

(statearr_31807[(15)] = inst_31713__$1);

(statearr_31807[(16)] = inst_31712__$1);

return statearr_31807;
})();
var statearr_31808_31848 = state_31771__$1;
(statearr_31808_31848[(2)] = null);

(statearr_31808_31848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (18))){
var inst_31741 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
var statearr_31809_31849 = state_31771__$1;
(statearr_31809_31849[(2)] = inst_31741);

(statearr_31809_31849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (8))){
var inst_31714 = (state_31771[(12)]);
var inst_31715 = (state_31771[(14)]);
var inst_31717 = (inst_31715 < inst_31714);
var inst_31718 = inst_31717;
var state_31771__$1 = state_31771;
if(cljs.core.truth_(inst_31718)){
var statearr_31810_31850 = state_31771__$1;
(statearr_31810_31850[(1)] = (10));

} else {
var statearr_31811_31851 = state_31771__$1;
(statearr_31811_31851[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___31823,mults,ensure_mult,p))
;
return ((function (switch__29812__auto__,c__29924__auto___31823,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_31815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31815[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_31815[(1)] = (1));

return statearr_31815;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_31771){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_31771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e31816){if((e31816 instanceof Object)){
var ex__29816__auto__ = e31816;
var statearr_31817_31852 = state_31771;
(statearr_31817_31852[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31853 = state_31771;
state_31771 = G__31853;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___31823,mults,ensure_mult,p))
})();
var state__29926__auto__ = (function (){var statearr_31818 = f__29925__auto__.call(null);
(statearr_31818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31823);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31823,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31854 = [];
var len__22734__auto___31857 = arguments.length;
var i__22735__auto___31858 = (0);
while(true){
if((i__22735__auto___31858 < len__22734__auto___31857)){
args31854.push((arguments[i__22735__auto___31858]));

var G__31859 = (i__22735__auto___31858 + (1));
i__22735__auto___31858 = G__31859;
continue;
} else {
}
break;
}

var G__31856 = args31854.length;
switch (G__31856) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31854.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31861 = [];
var len__22734__auto___31864 = arguments.length;
var i__22735__auto___31865 = (0);
while(true){
if((i__22735__auto___31865 < len__22734__auto___31864)){
args31861.push((arguments[i__22735__auto___31865]));

var G__31866 = (i__22735__auto___31865 + (1));
i__22735__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var G__31863 = args31861.length;
switch (G__31863) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31861.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31868 = [];
var len__22734__auto___31939 = arguments.length;
var i__22735__auto___31940 = (0);
while(true){
if((i__22735__auto___31940 < len__22734__auto___31939)){
args31868.push((arguments[i__22735__auto___31940]));

var G__31941 = (i__22735__auto___31940 + (1));
i__22735__auto___31940 = G__31941;
continue;
} else {
}
break;
}

var G__31870 = args31868.length;
switch (G__31870) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31868.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29924__auto___31943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31909){
var state_val_31910 = (state_31909[(1)]);
if((state_val_31910 === (7))){
var state_31909__$1 = state_31909;
var statearr_31911_31944 = state_31909__$1;
(statearr_31911_31944[(2)] = null);

(statearr_31911_31944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (1))){
var state_31909__$1 = state_31909;
var statearr_31912_31945 = state_31909__$1;
(statearr_31912_31945[(2)] = null);

(statearr_31912_31945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (4))){
var inst_31873 = (state_31909[(7)]);
var inst_31875 = (inst_31873 < cnt);
var state_31909__$1 = state_31909;
if(cljs.core.truth_(inst_31875)){
var statearr_31913_31946 = state_31909__$1;
(statearr_31913_31946[(1)] = (6));

} else {
var statearr_31914_31947 = state_31909__$1;
(statearr_31914_31947[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (15))){
var inst_31905 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31915_31948 = state_31909__$1;
(statearr_31915_31948[(2)] = inst_31905);

(statearr_31915_31948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (13))){
var inst_31898 = cljs.core.async.close_BANG_.call(null,out);
var state_31909__$1 = state_31909;
var statearr_31916_31949 = state_31909__$1;
(statearr_31916_31949[(2)] = inst_31898);

(statearr_31916_31949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (6))){
var state_31909__$1 = state_31909;
var statearr_31917_31950 = state_31909__$1;
(statearr_31917_31950[(2)] = null);

(statearr_31917_31950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (3))){
var inst_31907 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31909__$1,inst_31907);
} else {
if((state_val_31910 === (12))){
var inst_31895 = (state_31909[(8)]);
var inst_31895__$1 = (state_31909[(2)]);
var inst_31896 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31895__$1);
var state_31909__$1 = (function (){var statearr_31918 = state_31909;
(statearr_31918[(8)] = inst_31895__$1);

return statearr_31918;
})();
if(cljs.core.truth_(inst_31896)){
var statearr_31919_31951 = state_31909__$1;
(statearr_31919_31951[(1)] = (13));

} else {
var statearr_31920_31952 = state_31909__$1;
(statearr_31920_31952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (2))){
var inst_31872 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31873 = (0);
var state_31909__$1 = (function (){var statearr_31921 = state_31909;
(statearr_31921[(7)] = inst_31873);

(statearr_31921[(9)] = inst_31872);

return statearr_31921;
})();
var statearr_31922_31953 = state_31909__$1;
(statearr_31922_31953[(2)] = null);

(statearr_31922_31953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (11))){
var inst_31873 = (state_31909[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31909,(10),Object,null,(9));
var inst_31882 = chs__$1.call(null,inst_31873);
var inst_31883 = done.call(null,inst_31873);
var inst_31884 = cljs.core.async.take_BANG_.call(null,inst_31882,inst_31883);
var state_31909__$1 = state_31909;
var statearr_31923_31954 = state_31909__$1;
(statearr_31923_31954[(2)] = inst_31884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (9))){
var inst_31873 = (state_31909[(7)]);
var inst_31886 = (state_31909[(2)]);
var inst_31887 = (inst_31873 + (1));
var inst_31873__$1 = inst_31887;
var state_31909__$1 = (function (){var statearr_31924 = state_31909;
(statearr_31924[(10)] = inst_31886);

(statearr_31924[(7)] = inst_31873__$1);

return statearr_31924;
})();
var statearr_31925_31955 = state_31909__$1;
(statearr_31925_31955[(2)] = null);

(statearr_31925_31955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (5))){
var inst_31893 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31926 = state_31909;
(statearr_31926[(11)] = inst_31893);

return statearr_31926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(12),dchan);
} else {
if((state_val_31910 === (14))){
var inst_31895 = (state_31909[(8)]);
var inst_31900 = cljs.core.apply.call(null,f,inst_31895);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(16),out,inst_31900);
} else {
if((state_val_31910 === (16))){
var inst_31902 = (state_31909[(2)]);
var state_31909__$1 = (function (){var statearr_31927 = state_31909;
(statearr_31927[(12)] = inst_31902);

return statearr_31927;
})();
var statearr_31928_31956 = state_31909__$1;
(statearr_31928_31956[(2)] = null);

(statearr_31928_31956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (10))){
var inst_31877 = (state_31909[(2)]);
var inst_31878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31909__$1 = (function (){var statearr_31929 = state_31909;
(statearr_31929[(13)] = inst_31877);

return statearr_31929;
})();
var statearr_31930_31957 = state_31909__$1;
(statearr_31930_31957[(2)] = inst_31878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (8))){
var inst_31891 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31931_31958 = state_31909__$1;
(statearr_31931_31958[(2)] = inst_31891);

(statearr_31931_31958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29812__auto__,c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_31935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31935[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_31935[(1)] = (1));

return statearr_31935;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_31909){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_31909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e31936){if((e31936 instanceof Object)){
var ex__29816__auto__ = e31936;
var statearr_31937_31959 = state_31909;
(statearr_31937_31959[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31960 = state_31909;
state_31909 = G__31960;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_31909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_31909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29926__auto__ = (function (){var statearr_31938 = f__29925__auto__.call(null);
(statearr_31938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31943);

return statearr_31938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31943,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31962 = [];
var len__22734__auto___32018 = arguments.length;
var i__22735__auto___32019 = (0);
while(true){
if((i__22735__auto___32019 < len__22734__auto___32018)){
args31962.push((arguments[i__22735__auto___32019]));

var G__32020 = (i__22735__auto___32019 + (1));
i__22735__auto___32019 = G__32020;
continue;
} else {
}
break;
}

var G__31964 = args31962.length;
switch (G__31964) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31962.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32022,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32022,out){
return (function (state_31994){
var state_val_31995 = (state_31994[(1)]);
if((state_val_31995 === (7))){
var inst_31974 = (state_31994[(7)]);
var inst_31973 = (state_31994[(8)]);
var inst_31973__$1 = (state_31994[(2)]);
var inst_31974__$1 = cljs.core.nth.call(null,inst_31973__$1,(0),null);
var inst_31975 = cljs.core.nth.call(null,inst_31973__$1,(1),null);
var inst_31976 = (inst_31974__$1 == null);
var state_31994__$1 = (function (){var statearr_31996 = state_31994;
(statearr_31996[(9)] = inst_31975);

(statearr_31996[(7)] = inst_31974__$1);

(statearr_31996[(8)] = inst_31973__$1);

return statearr_31996;
})();
if(cljs.core.truth_(inst_31976)){
var statearr_31997_32023 = state_31994__$1;
(statearr_31997_32023[(1)] = (8));

} else {
var statearr_31998_32024 = state_31994__$1;
(statearr_31998_32024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (1))){
var inst_31965 = cljs.core.vec.call(null,chs);
var inst_31966 = inst_31965;
var state_31994__$1 = (function (){var statearr_31999 = state_31994;
(statearr_31999[(10)] = inst_31966);

return statearr_31999;
})();
var statearr_32000_32025 = state_31994__$1;
(statearr_32000_32025[(2)] = null);

(statearr_32000_32025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (4))){
var inst_31966 = (state_31994[(10)]);
var state_31994__$1 = state_31994;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31994__$1,(7),inst_31966);
} else {
if((state_val_31995 === (6))){
var inst_31990 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32001_32026 = state_31994__$1;
(statearr_32001_32026[(2)] = inst_31990);

(statearr_32001_32026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (3))){
var inst_31992 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31994__$1,inst_31992);
} else {
if((state_val_31995 === (2))){
var inst_31966 = (state_31994[(10)]);
var inst_31968 = cljs.core.count.call(null,inst_31966);
var inst_31969 = (inst_31968 > (0));
var state_31994__$1 = state_31994;
if(cljs.core.truth_(inst_31969)){
var statearr_32003_32027 = state_31994__$1;
(statearr_32003_32027[(1)] = (4));

} else {
var statearr_32004_32028 = state_31994__$1;
(statearr_32004_32028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (11))){
var inst_31966 = (state_31994[(10)]);
var inst_31983 = (state_31994[(2)]);
var tmp32002 = inst_31966;
var inst_31966__$1 = tmp32002;
var state_31994__$1 = (function (){var statearr_32005 = state_31994;
(statearr_32005[(10)] = inst_31966__$1);

(statearr_32005[(11)] = inst_31983);

return statearr_32005;
})();
var statearr_32006_32029 = state_31994__$1;
(statearr_32006_32029[(2)] = null);

(statearr_32006_32029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (9))){
var inst_31974 = (state_31994[(7)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31994__$1,(11),out,inst_31974);
} else {
if((state_val_31995 === (5))){
var inst_31988 = cljs.core.async.close_BANG_.call(null,out);
var state_31994__$1 = state_31994;
var statearr_32007_32030 = state_31994__$1;
(statearr_32007_32030[(2)] = inst_31988);

(statearr_32007_32030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (10))){
var inst_31986 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32008_32031 = state_31994__$1;
(statearr_32008_32031[(2)] = inst_31986);

(statearr_32008_32031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (8))){
var inst_31975 = (state_31994[(9)]);
var inst_31966 = (state_31994[(10)]);
var inst_31974 = (state_31994[(7)]);
var inst_31973 = (state_31994[(8)]);
var inst_31978 = (function (){var cs = inst_31966;
var vec__31971 = inst_31973;
var v = inst_31974;
var c = inst_31975;
return ((function (cs,vec__31971,v,c,inst_31975,inst_31966,inst_31974,inst_31973,state_val_31995,c__29924__auto___32022,out){
return (function (p1__31961_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31961_SHARP_);
});
;})(cs,vec__31971,v,c,inst_31975,inst_31966,inst_31974,inst_31973,state_val_31995,c__29924__auto___32022,out))
})();
var inst_31979 = cljs.core.filterv.call(null,inst_31978,inst_31966);
var inst_31966__$1 = inst_31979;
var state_31994__$1 = (function (){var statearr_32009 = state_31994;
(statearr_32009[(10)] = inst_31966__$1);

return statearr_32009;
})();
var statearr_32010_32032 = state_31994__$1;
(statearr_32010_32032[(2)] = null);

(statearr_32010_32032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32022,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32022,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32014[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32014[(1)] = (1));

return statearr_32014;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_31994){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_31994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32015){if((e32015 instanceof Object)){
var ex__29816__auto__ = e32015;
var statearr_32016_32033 = state_31994;
(statearr_32016_32033[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32034 = state_31994;
state_31994 = G__32034;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_31994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_31994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32022,out))
})();
var state__29926__auto__ = (function (){var statearr_32017 = f__29925__auto__.call(null);
(statearr_32017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32022);

return statearr_32017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32022,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32035 = [];
var len__22734__auto___32084 = arguments.length;
var i__22735__auto___32085 = (0);
while(true){
if((i__22735__auto___32085 < len__22734__auto___32084)){
args32035.push((arguments[i__22735__auto___32085]));

var G__32086 = (i__22735__auto___32085 + (1));
i__22735__auto___32085 = G__32086;
continue;
} else {
}
break;
}

var G__32037 = args32035.length;
switch (G__32037) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32035.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32088,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32088,out){
return (function (state_32061){
var state_val_32062 = (state_32061[(1)]);
if((state_val_32062 === (7))){
var inst_32043 = (state_32061[(7)]);
var inst_32043__$1 = (state_32061[(2)]);
var inst_32044 = (inst_32043__$1 == null);
var inst_32045 = cljs.core.not.call(null,inst_32044);
var state_32061__$1 = (function (){var statearr_32063 = state_32061;
(statearr_32063[(7)] = inst_32043__$1);

return statearr_32063;
})();
if(inst_32045){
var statearr_32064_32089 = state_32061__$1;
(statearr_32064_32089[(1)] = (8));

} else {
var statearr_32065_32090 = state_32061__$1;
(statearr_32065_32090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (1))){
var inst_32038 = (0);
var state_32061__$1 = (function (){var statearr_32066 = state_32061;
(statearr_32066[(8)] = inst_32038);

return statearr_32066;
})();
var statearr_32067_32091 = state_32061__$1;
(statearr_32067_32091[(2)] = null);

(statearr_32067_32091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (4))){
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32061__$1,(7),ch);
} else {
if((state_val_32062 === (6))){
var inst_32056 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32068_32092 = state_32061__$1;
(statearr_32068_32092[(2)] = inst_32056);

(statearr_32068_32092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (3))){
var inst_32058 = (state_32061[(2)]);
var inst_32059 = cljs.core.async.close_BANG_.call(null,out);
var state_32061__$1 = (function (){var statearr_32069 = state_32061;
(statearr_32069[(9)] = inst_32058);

return statearr_32069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32061__$1,inst_32059);
} else {
if((state_val_32062 === (2))){
var inst_32038 = (state_32061[(8)]);
var inst_32040 = (inst_32038 < n);
var state_32061__$1 = state_32061;
if(cljs.core.truth_(inst_32040)){
var statearr_32070_32093 = state_32061__$1;
(statearr_32070_32093[(1)] = (4));

} else {
var statearr_32071_32094 = state_32061__$1;
(statearr_32071_32094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (11))){
var inst_32038 = (state_32061[(8)]);
var inst_32048 = (state_32061[(2)]);
var inst_32049 = (inst_32038 + (1));
var inst_32038__$1 = inst_32049;
var state_32061__$1 = (function (){var statearr_32072 = state_32061;
(statearr_32072[(8)] = inst_32038__$1);

(statearr_32072[(10)] = inst_32048);

return statearr_32072;
})();
var statearr_32073_32095 = state_32061__$1;
(statearr_32073_32095[(2)] = null);

(statearr_32073_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (9))){
var state_32061__$1 = state_32061;
var statearr_32074_32096 = state_32061__$1;
(statearr_32074_32096[(2)] = null);

(statearr_32074_32096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (5))){
var state_32061__$1 = state_32061;
var statearr_32075_32097 = state_32061__$1;
(statearr_32075_32097[(2)] = null);

(statearr_32075_32097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (10))){
var inst_32053 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32076_32098 = state_32061__$1;
(statearr_32076_32098[(2)] = inst_32053);

(statearr_32076_32098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (8))){
var inst_32043 = (state_32061[(7)]);
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32061__$1,(11),out,inst_32043);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32088,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32088,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32080[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32080[(1)] = (1));

return statearr_32080;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_32061){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32081){if((e32081 instanceof Object)){
var ex__29816__auto__ = e32081;
var statearr_32082_32099 = state_32061;
(statearr_32082_32099[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32100 = state_32061;
state_32061 = G__32100;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_32061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_32061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32088,out))
})();
var state__29926__auto__ = (function (){var statearr_32083 = f__29925__auto__.call(null);
(statearr_32083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32088);

return statearr_32083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32088,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32108 = (function (map_LT_,f,ch,meta32109){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32109 = meta32109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32110,meta32109__$1){
var self__ = this;
var _32110__$1 = this;
return (new cljs.core.async.t_cljs$core$async32108(self__.map_LT_,self__.f,self__.ch,meta32109__$1));
});

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32110){
var self__ = this;
var _32110__$1 = this;
return self__.meta32109;
});

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32111 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32111 = (function (map_LT_,f,ch,meta32109,_,fn1,meta32112){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32109 = meta32109;
this._ = _;
this.fn1 = fn1;
this.meta32112 = meta32112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32113,meta32112__$1){
var self__ = this;
var _32113__$1 = this;
return (new cljs.core.async.t_cljs$core$async32111(self__.map_LT_,self__.f,self__.ch,self__.meta32109,self__._,self__.fn1,meta32112__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32113){
var self__ = this;
var _32113__$1 = this;
return self__.meta32112;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32101_SHARP_){
return f1.call(null,(((p1__32101_SHARP_ == null))?null:self__.f.call(null,p1__32101_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32109","meta32109",-2050790094,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32108","cljs.core.async/t_cljs$core$async32108",-2082011406,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32112","meta32112",-525999717,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32111";

cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async32111");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32111 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32111(map_LT___$1,f__$1,ch__$1,meta32109__$1,___$2,fn1__$1,meta32112){
return (new cljs.core.async.t_cljs$core$async32111(map_LT___$1,f__$1,ch__$1,meta32109__$1,___$2,fn1__$1,meta32112));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32111(self__.map_LT_,self__.f,self__.ch,self__.meta32109,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21664__auto__ = ret;
if(cljs.core.truth_(and__21664__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21664__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32109","meta32109",-2050790094,null)], null);
});

cljs.core.async.t_cljs$core$async32108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32108";

cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async32108");
});

cljs.core.async.__GT_t_cljs$core$async32108 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32108(map_LT___$1,f__$1,ch__$1,meta32109){
return (new cljs.core.async.t_cljs$core$async32108(map_LT___$1,f__$1,ch__$1,meta32109));
});

}

return (new cljs.core.async.t_cljs$core$async32108(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32117 = (function (map_GT_,f,ch,meta32118){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32118 = meta32118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32119,meta32118__$1){
var self__ = this;
var _32119__$1 = this;
return (new cljs.core.async.t_cljs$core$async32117(self__.map_GT_,self__.f,self__.ch,meta32118__$1));
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32119){
var self__ = this;
var _32119__$1 = this;
return self__.meta32118;
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32118","meta32118",-1102918049,null)], null);
});

cljs.core.async.t_cljs$core$async32117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32117";

cljs.core.async.t_cljs$core$async32117.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async32117");
});

cljs.core.async.__GT_t_cljs$core$async32117 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32117(map_GT___$1,f__$1,ch__$1,meta32118){
return (new cljs.core.async.t_cljs$core$async32117(map_GT___$1,f__$1,ch__$1,meta32118));
});

}

return (new cljs.core.async.t_cljs$core$async32117(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32123 = (function (filter_GT_,p,ch,meta32124){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32124 = meta32124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32125,meta32124__$1){
var self__ = this;
var _32125__$1 = this;
return (new cljs.core.async.t_cljs$core$async32123(self__.filter_GT_,self__.p,self__.ch,meta32124__$1));
});

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32125){
var self__ = this;
var _32125__$1 = this;
return self__.meta32124;
});

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32124","meta32124",1407039137,null)], null);
});

cljs.core.async.t_cljs$core$async32123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32123";

cljs.core.async.t_cljs$core$async32123.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async32123");
});

cljs.core.async.__GT_t_cljs$core$async32123 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32123(filter_GT___$1,p__$1,ch__$1,meta32124){
return (new cljs.core.async.t_cljs$core$async32123(filter_GT___$1,p__$1,ch__$1,meta32124));
});

}

return (new cljs.core.async.t_cljs$core$async32123(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32126 = [];
var len__22734__auto___32170 = arguments.length;
var i__22735__auto___32171 = (0);
while(true){
if((i__22735__auto___32171 < len__22734__auto___32170)){
args32126.push((arguments[i__22735__auto___32171]));

var G__32172 = (i__22735__auto___32171 + (1));
i__22735__auto___32171 = G__32172;
continue;
} else {
}
break;
}

var G__32128 = args32126.length;
switch (G__32128) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32126.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32174,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32174,out){
return (function (state_32149){
var state_val_32150 = (state_32149[(1)]);
if((state_val_32150 === (7))){
var inst_32145 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
var statearr_32151_32175 = state_32149__$1;
(statearr_32151_32175[(2)] = inst_32145);

(statearr_32151_32175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (1))){
var state_32149__$1 = state_32149;
var statearr_32152_32176 = state_32149__$1;
(statearr_32152_32176[(2)] = null);

(statearr_32152_32176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (4))){
var inst_32131 = (state_32149[(7)]);
var inst_32131__$1 = (state_32149[(2)]);
var inst_32132 = (inst_32131__$1 == null);
var state_32149__$1 = (function (){var statearr_32153 = state_32149;
(statearr_32153[(7)] = inst_32131__$1);

return statearr_32153;
})();
if(cljs.core.truth_(inst_32132)){
var statearr_32154_32177 = state_32149__$1;
(statearr_32154_32177[(1)] = (5));

} else {
var statearr_32155_32178 = state_32149__$1;
(statearr_32155_32178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (6))){
var inst_32131 = (state_32149[(7)]);
var inst_32136 = p.call(null,inst_32131);
var state_32149__$1 = state_32149;
if(cljs.core.truth_(inst_32136)){
var statearr_32156_32179 = state_32149__$1;
(statearr_32156_32179[(1)] = (8));

} else {
var statearr_32157_32180 = state_32149__$1;
(statearr_32157_32180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (3))){
var inst_32147 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32149__$1,inst_32147);
} else {
if((state_val_32150 === (2))){
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32149__$1,(4),ch);
} else {
if((state_val_32150 === (11))){
var inst_32139 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
var statearr_32158_32181 = state_32149__$1;
(statearr_32158_32181[(2)] = inst_32139);

(statearr_32158_32181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (9))){
var state_32149__$1 = state_32149;
var statearr_32159_32182 = state_32149__$1;
(statearr_32159_32182[(2)] = null);

(statearr_32159_32182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (5))){
var inst_32134 = cljs.core.async.close_BANG_.call(null,out);
var state_32149__$1 = state_32149;
var statearr_32160_32183 = state_32149__$1;
(statearr_32160_32183[(2)] = inst_32134);

(statearr_32160_32183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (10))){
var inst_32142 = (state_32149[(2)]);
var state_32149__$1 = (function (){var statearr_32161 = state_32149;
(statearr_32161[(8)] = inst_32142);

return statearr_32161;
})();
var statearr_32162_32184 = state_32149__$1;
(statearr_32162_32184[(2)] = null);

(statearr_32162_32184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (8))){
var inst_32131 = (state_32149[(7)]);
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32149__$1,(11),out,inst_32131);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32174,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32174,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32166 = [null,null,null,null,null,null,null,null,null];
(statearr_32166[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32166[(1)] = (1));

return statearr_32166;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_32149){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32167){if((e32167 instanceof Object)){
var ex__29816__auto__ = e32167;
var statearr_32168_32185 = state_32149;
(statearr_32168_32185[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32186 = state_32149;
state_32149 = G__32186;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_32149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_32149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32174,out))
})();
var state__29926__auto__ = (function (){var statearr_32169 = f__29925__auto__.call(null);
(statearr_32169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32174);

return statearr_32169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32174,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32187 = [];
var len__22734__auto___32190 = arguments.length;
var i__22735__auto___32191 = (0);
while(true){
if((i__22735__auto___32191 < len__22734__auto___32190)){
args32187.push((arguments[i__22735__auto___32191]));

var G__32192 = (i__22735__auto___32191 + (1));
i__22735__auto___32191 = G__32192;
continue;
} else {
}
break;
}

var G__32189 = args32187.length;
switch (G__32189) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32187.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto__){
return (function (state_32359){
var state_val_32360 = (state_32359[(1)]);
if((state_val_32360 === (7))){
var inst_32355 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
var statearr_32361_32402 = state_32359__$1;
(statearr_32361_32402[(2)] = inst_32355);

(statearr_32361_32402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (20))){
var inst_32325 = (state_32359[(7)]);
var inst_32336 = (state_32359[(2)]);
var inst_32337 = cljs.core.next.call(null,inst_32325);
var inst_32311 = inst_32337;
var inst_32312 = null;
var inst_32313 = (0);
var inst_32314 = (0);
var state_32359__$1 = (function (){var statearr_32362 = state_32359;
(statearr_32362[(8)] = inst_32311);

(statearr_32362[(9)] = inst_32313);

(statearr_32362[(10)] = inst_32336);

(statearr_32362[(11)] = inst_32314);

(statearr_32362[(12)] = inst_32312);

return statearr_32362;
})();
var statearr_32363_32403 = state_32359__$1;
(statearr_32363_32403[(2)] = null);

(statearr_32363_32403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (1))){
var state_32359__$1 = state_32359;
var statearr_32364_32404 = state_32359__$1;
(statearr_32364_32404[(2)] = null);

(statearr_32364_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (4))){
var inst_32300 = (state_32359[(13)]);
var inst_32300__$1 = (state_32359[(2)]);
var inst_32301 = (inst_32300__$1 == null);
var state_32359__$1 = (function (){var statearr_32365 = state_32359;
(statearr_32365[(13)] = inst_32300__$1);

return statearr_32365;
})();
if(cljs.core.truth_(inst_32301)){
var statearr_32366_32405 = state_32359__$1;
(statearr_32366_32405[(1)] = (5));

} else {
var statearr_32367_32406 = state_32359__$1;
(statearr_32367_32406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (15))){
var state_32359__$1 = state_32359;
var statearr_32371_32407 = state_32359__$1;
(statearr_32371_32407[(2)] = null);

(statearr_32371_32407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (21))){
var state_32359__$1 = state_32359;
var statearr_32372_32408 = state_32359__$1;
(statearr_32372_32408[(2)] = null);

(statearr_32372_32408[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (13))){
var inst_32311 = (state_32359[(8)]);
var inst_32313 = (state_32359[(9)]);
var inst_32314 = (state_32359[(11)]);
var inst_32312 = (state_32359[(12)]);
var inst_32321 = (state_32359[(2)]);
var inst_32322 = (inst_32314 + (1));
var tmp32368 = inst_32311;
var tmp32369 = inst_32313;
var tmp32370 = inst_32312;
var inst_32311__$1 = tmp32368;
var inst_32312__$1 = tmp32370;
var inst_32313__$1 = tmp32369;
var inst_32314__$1 = inst_32322;
var state_32359__$1 = (function (){var statearr_32373 = state_32359;
(statearr_32373[(8)] = inst_32311__$1);

(statearr_32373[(9)] = inst_32313__$1);

(statearr_32373[(11)] = inst_32314__$1);

(statearr_32373[(14)] = inst_32321);

(statearr_32373[(12)] = inst_32312__$1);

return statearr_32373;
})();
var statearr_32374_32409 = state_32359__$1;
(statearr_32374_32409[(2)] = null);

(statearr_32374_32409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (22))){
var state_32359__$1 = state_32359;
var statearr_32375_32410 = state_32359__$1;
(statearr_32375_32410[(2)] = null);

(statearr_32375_32410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (6))){
var inst_32300 = (state_32359[(13)]);
var inst_32309 = f.call(null,inst_32300);
var inst_32310 = cljs.core.seq.call(null,inst_32309);
var inst_32311 = inst_32310;
var inst_32312 = null;
var inst_32313 = (0);
var inst_32314 = (0);
var state_32359__$1 = (function (){var statearr_32376 = state_32359;
(statearr_32376[(8)] = inst_32311);

(statearr_32376[(9)] = inst_32313);

(statearr_32376[(11)] = inst_32314);

(statearr_32376[(12)] = inst_32312);

return statearr_32376;
})();
var statearr_32377_32411 = state_32359__$1;
(statearr_32377_32411[(2)] = null);

(statearr_32377_32411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (17))){
var inst_32325 = (state_32359[(7)]);
var inst_32329 = cljs.core.chunk_first.call(null,inst_32325);
var inst_32330 = cljs.core.chunk_rest.call(null,inst_32325);
var inst_32331 = cljs.core.count.call(null,inst_32329);
var inst_32311 = inst_32330;
var inst_32312 = inst_32329;
var inst_32313 = inst_32331;
var inst_32314 = (0);
var state_32359__$1 = (function (){var statearr_32378 = state_32359;
(statearr_32378[(8)] = inst_32311);

(statearr_32378[(9)] = inst_32313);

(statearr_32378[(11)] = inst_32314);

(statearr_32378[(12)] = inst_32312);

return statearr_32378;
})();
var statearr_32379_32412 = state_32359__$1;
(statearr_32379_32412[(2)] = null);

(statearr_32379_32412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (3))){
var inst_32357 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32359__$1,inst_32357);
} else {
if((state_val_32360 === (12))){
var inst_32345 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
var statearr_32380_32413 = state_32359__$1;
(statearr_32380_32413[(2)] = inst_32345);

(statearr_32380_32413[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (2))){
var state_32359__$1 = state_32359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32359__$1,(4),in$);
} else {
if((state_val_32360 === (23))){
var inst_32353 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
var statearr_32381_32414 = state_32359__$1;
(statearr_32381_32414[(2)] = inst_32353);

(statearr_32381_32414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (19))){
var inst_32340 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
var statearr_32382_32415 = state_32359__$1;
(statearr_32382_32415[(2)] = inst_32340);

(statearr_32382_32415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (11))){
var inst_32311 = (state_32359[(8)]);
var inst_32325 = (state_32359[(7)]);
var inst_32325__$1 = cljs.core.seq.call(null,inst_32311);
var state_32359__$1 = (function (){var statearr_32383 = state_32359;
(statearr_32383[(7)] = inst_32325__$1);

return statearr_32383;
})();
if(inst_32325__$1){
var statearr_32384_32416 = state_32359__$1;
(statearr_32384_32416[(1)] = (14));

} else {
var statearr_32385_32417 = state_32359__$1;
(statearr_32385_32417[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (9))){
var inst_32347 = (state_32359[(2)]);
var inst_32348 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32359__$1 = (function (){var statearr_32386 = state_32359;
(statearr_32386[(15)] = inst_32347);

return statearr_32386;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32387_32418 = state_32359__$1;
(statearr_32387_32418[(1)] = (21));

} else {
var statearr_32388_32419 = state_32359__$1;
(statearr_32388_32419[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (5))){
var inst_32303 = cljs.core.async.close_BANG_.call(null,out);
var state_32359__$1 = state_32359;
var statearr_32389_32420 = state_32359__$1;
(statearr_32389_32420[(2)] = inst_32303);

(statearr_32389_32420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (14))){
var inst_32325 = (state_32359[(7)]);
var inst_32327 = cljs.core.chunked_seq_QMARK_.call(null,inst_32325);
var state_32359__$1 = state_32359;
if(inst_32327){
var statearr_32390_32421 = state_32359__$1;
(statearr_32390_32421[(1)] = (17));

} else {
var statearr_32391_32422 = state_32359__$1;
(statearr_32391_32422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (16))){
var inst_32343 = (state_32359[(2)]);
var state_32359__$1 = state_32359;
var statearr_32392_32423 = state_32359__$1;
(statearr_32392_32423[(2)] = inst_32343);

(statearr_32392_32423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32360 === (10))){
var inst_32314 = (state_32359[(11)]);
var inst_32312 = (state_32359[(12)]);
var inst_32319 = cljs.core._nth.call(null,inst_32312,inst_32314);
var state_32359__$1 = state_32359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32359__$1,(13),out,inst_32319);
} else {
if((state_val_32360 === (18))){
var inst_32325 = (state_32359[(7)]);
var inst_32334 = cljs.core.first.call(null,inst_32325);
var state_32359__$1 = state_32359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32359__$1,(20),out,inst_32334);
} else {
if((state_val_32360 === (8))){
var inst_32313 = (state_32359[(9)]);
var inst_32314 = (state_32359[(11)]);
var inst_32316 = (inst_32314 < inst_32313);
var inst_32317 = inst_32316;
var state_32359__$1 = state_32359;
if(cljs.core.truth_(inst_32317)){
var statearr_32393_32424 = state_32359__$1;
(statearr_32393_32424[(1)] = (10));

} else {
var statearr_32394_32425 = state_32359__$1;
(statearr_32394_32425[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto__))
;
return ((function (switch__29812__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____0 = (function (){
var statearr_32398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32398[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__);

(statearr_32398[(1)] = (1));

return statearr_32398;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____1 = (function (state_32359){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32399){if((e32399 instanceof Object)){
var ex__29816__auto__ = e32399;
var statearr_32400_32426 = state_32359;
(statearr_32400_32426[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32427 = state_32359;
state_32359 = G__32427;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__ = function(state_32359){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____1.call(this,state_32359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29813__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_32401 = f__29925__auto__.call(null);
(statearr_32401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_32401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32428 = [];
var len__22734__auto___32431 = arguments.length;
var i__22735__auto___32432 = (0);
while(true){
if((i__22735__auto___32432 < len__22734__auto___32431)){
args32428.push((arguments[i__22735__auto___32432]));

var G__32433 = (i__22735__auto___32432 + (1));
i__22735__auto___32432 = G__32433;
continue;
} else {
}
break;
}

var G__32430 = args32428.length;
switch (G__32430) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32428.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32435 = [];
var len__22734__auto___32438 = arguments.length;
var i__22735__auto___32439 = (0);
while(true){
if((i__22735__auto___32439 < len__22734__auto___32438)){
args32435.push((arguments[i__22735__auto___32439]));

var G__32440 = (i__22735__auto___32439 + (1));
i__22735__auto___32439 = G__32440;
continue;
} else {
}
break;
}

var G__32437 = args32435.length;
switch (G__32437) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32435.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32442 = [];
var len__22734__auto___32493 = arguments.length;
var i__22735__auto___32494 = (0);
while(true){
if((i__22735__auto___32494 < len__22734__auto___32493)){
args32442.push((arguments[i__22735__auto___32494]));

var G__32495 = (i__22735__auto___32494 + (1));
i__22735__auto___32494 = G__32495;
continue;
} else {
}
break;
}

var G__32444 = args32442.length;
switch (G__32444) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32442.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32497,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32497,out){
return (function (state_32468){
var state_val_32469 = (state_32468[(1)]);
if((state_val_32469 === (7))){
var inst_32463 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32470_32498 = state_32468__$1;
(statearr_32470_32498[(2)] = inst_32463);

(statearr_32470_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (1))){
var inst_32445 = null;
var state_32468__$1 = (function (){var statearr_32471 = state_32468;
(statearr_32471[(7)] = inst_32445);

return statearr_32471;
})();
var statearr_32472_32499 = state_32468__$1;
(statearr_32472_32499[(2)] = null);

(statearr_32472_32499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (4))){
var inst_32448 = (state_32468[(8)]);
var inst_32448__$1 = (state_32468[(2)]);
var inst_32449 = (inst_32448__$1 == null);
var inst_32450 = cljs.core.not.call(null,inst_32449);
var state_32468__$1 = (function (){var statearr_32473 = state_32468;
(statearr_32473[(8)] = inst_32448__$1);

return statearr_32473;
})();
if(inst_32450){
var statearr_32474_32500 = state_32468__$1;
(statearr_32474_32500[(1)] = (5));

} else {
var statearr_32475_32501 = state_32468__$1;
(statearr_32475_32501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (6))){
var state_32468__$1 = state_32468;
var statearr_32476_32502 = state_32468__$1;
(statearr_32476_32502[(2)] = null);

(statearr_32476_32502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (3))){
var inst_32465 = (state_32468[(2)]);
var inst_32466 = cljs.core.async.close_BANG_.call(null,out);
var state_32468__$1 = (function (){var statearr_32477 = state_32468;
(statearr_32477[(9)] = inst_32465);

return statearr_32477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32468__$1,inst_32466);
} else {
if((state_val_32469 === (2))){
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32468__$1,(4),ch);
} else {
if((state_val_32469 === (11))){
var inst_32448 = (state_32468[(8)]);
var inst_32457 = (state_32468[(2)]);
var inst_32445 = inst_32448;
var state_32468__$1 = (function (){var statearr_32478 = state_32468;
(statearr_32478[(10)] = inst_32457);

(statearr_32478[(7)] = inst_32445);

return statearr_32478;
})();
var statearr_32479_32503 = state_32468__$1;
(statearr_32479_32503[(2)] = null);

(statearr_32479_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (9))){
var inst_32448 = (state_32468[(8)]);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32468__$1,(11),out,inst_32448);
} else {
if((state_val_32469 === (5))){
var inst_32448 = (state_32468[(8)]);
var inst_32445 = (state_32468[(7)]);
var inst_32452 = cljs.core._EQ_.call(null,inst_32448,inst_32445);
var state_32468__$1 = state_32468;
if(inst_32452){
var statearr_32481_32504 = state_32468__$1;
(statearr_32481_32504[(1)] = (8));

} else {
var statearr_32482_32505 = state_32468__$1;
(statearr_32482_32505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (10))){
var inst_32460 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32483_32506 = state_32468__$1;
(statearr_32483_32506[(2)] = inst_32460);

(statearr_32483_32506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (8))){
var inst_32445 = (state_32468[(7)]);
var tmp32480 = inst_32445;
var inst_32445__$1 = tmp32480;
var state_32468__$1 = (function (){var statearr_32484 = state_32468;
(statearr_32484[(7)] = inst_32445__$1);

return statearr_32484;
})();
var statearr_32485_32507 = state_32468__$1;
(statearr_32485_32507[(2)] = null);

(statearr_32485_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32497,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32497,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32489[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32489[(1)] = (1));

return statearr_32489;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_32468){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32490){if((e32490 instanceof Object)){
var ex__29816__auto__ = e32490;
var statearr_32491_32508 = state_32468;
(statearr_32491_32508[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_32468;
state_32468 = G__32509;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_32468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_32468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32497,out))
})();
var state__29926__auto__ = (function (){var statearr_32492 = f__29925__auto__.call(null);
(statearr_32492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32497);

return statearr_32492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32497,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32510 = [];
var len__22734__auto___32580 = arguments.length;
var i__22735__auto___32581 = (0);
while(true){
if((i__22735__auto___32581 < len__22734__auto___32580)){
args32510.push((arguments[i__22735__auto___32581]));

var G__32582 = (i__22735__auto___32581 + (1));
i__22735__auto___32581 = G__32582;
continue;
} else {
}
break;
}

var G__32512 = args32510.length;
switch (G__32512) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32510.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32584,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32584,out){
return (function (state_32550){
var state_val_32551 = (state_32550[(1)]);
if((state_val_32551 === (7))){
var inst_32546 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
var statearr_32552_32585 = state_32550__$1;
(statearr_32552_32585[(2)] = inst_32546);

(statearr_32552_32585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (1))){
var inst_32513 = (new Array(n));
var inst_32514 = inst_32513;
var inst_32515 = (0);
var state_32550__$1 = (function (){var statearr_32553 = state_32550;
(statearr_32553[(7)] = inst_32515);

(statearr_32553[(8)] = inst_32514);

return statearr_32553;
})();
var statearr_32554_32586 = state_32550__$1;
(statearr_32554_32586[(2)] = null);

(statearr_32554_32586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (4))){
var inst_32518 = (state_32550[(9)]);
var inst_32518__$1 = (state_32550[(2)]);
var inst_32519 = (inst_32518__$1 == null);
var inst_32520 = cljs.core.not.call(null,inst_32519);
var state_32550__$1 = (function (){var statearr_32555 = state_32550;
(statearr_32555[(9)] = inst_32518__$1);

return statearr_32555;
})();
if(inst_32520){
var statearr_32556_32587 = state_32550__$1;
(statearr_32556_32587[(1)] = (5));

} else {
var statearr_32557_32588 = state_32550__$1;
(statearr_32557_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (15))){
var inst_32540 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
var statearr_32558_32589 = state_32550__$1;
(statearr_32558_32589[(2)] = inst_32540);

(statearr_32558_32589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (13))){
var state_32550__$1 = state_32550;
var statearr_32559_32590 = state_32550__$1;
(statearr_32559_32590[(2)] = null);

(statearr_32559_32590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (6))){
var inst_32515 = (state_32550[(7)]);
var inst_32536 = (inst_32515 > (0));
var state_32550__$1 = state_32550;
if(cljs.core.truth_(inst_32536)){
var statearr_32560_32591 = state_32550__$1;
(statearr_32560_32591[(1)] = (12));

} else {
var statearr_32561_32592 = state_32550__$1;
(statearr_32561_32592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (3))){
var inst_32548 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32550__$1,inst_32548);
} else {
if((state_val_32551 === (12))){
var inst_32514 = (state_32550[(8)]);
var inst_32538 = cljs.core.vec.call(null,inst_32514);
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32550__$1,(15),out,inst_32538);
} else {
if((state_val_32551 === (2))){
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32550__$1,(4),ch);
} else {
if((state_val_32551 === (11))){
var inst_32530 = (state_32550[(2)]);
var inst_32531 = (new Array(n));
var inst_32514 = inst_32531;
var inst_32515 = (0);
var state_32550__$1 = (function (){var statearr_32562 = state_32550;
(statearr_32562[(7)] = inst_32515);

(statearr_32562[(8)] = inst_32514);

(statearr_32562[(10)] = inst_32530);

return statearr_32562;
})();
var statearr_32563_32593 = state_32550__$1;
(statearr_32563_32593[(2)] = null);

(statearr_32563_32593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (9))){
var inst_32514 = (state_32550[(8)]);
var inst_32528 = cljs.core.vec.call(null,inst_32514);
var state_32550__$1 = state_32550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32550__$1,(11),out,inst_32528);
} else {
if((state_val_32551 === (5))){
var inst_32515 = (state_32550[(7)]);
var inst_32518 = (state_32550[(9)]);
var inst_32514 = (state_32550[(8)]);
var inst_32523 = (state_32550[(11)]);
var inst_32522 = (inst_32514[inst_32515] = inst_32518);
var inst_32523__$1 = (inst_32515 + (1));
var inst_32524 = (inst_32523__$1 < n);
var state_32550__$1 = (function (){var statearr_32564 = state_32550;
(statearr_32564[(12)] = inst_32522);

(statearr_32564[(11)] = inst_32523__$1);

return statearr_32564;
})();
if(cljs.core.truth_(inst_32524)){
var statearr_32565_32594 = state_32550__$1;
(statearr_32565_32594[(1)] = (8));

} else {
var statearr_32566_32595 = state_32550__$1;
(statearr_32566_32595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (14))){
var inst_32543 = (state_32550[(2)]);
var inst_32544 = cljs.core.async.close_BANG_.call(null,out);
var state_32550__$1 = (function (){var statearr_32568 = state_32550;
(statearr_32568[(13)] = inst_32543);

return statearr_32568;
})();
var statearr_32569_32596 = state_32550__$1;
(statearr_32569_32596[(2)] = inst_32544);

(statearr_32569_32596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (10))){
var inst_32534 = (state_32550[(2)]);
var state_32550__$1 = state_32550;
var statearr_32570_32597 = state_32550__$1;
(statearr_32570_32597[(2)] = inst_32534);

(statearr_32570_32597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32551 === (8))){
var inst_32514 = (state_32550[(8)]);
var inst_32523 = (state_32550[(11)]);
var tmp32567 = inst_32514;
var inst_32514__$1 = tmp32567;
var inst_32515 = inst_32523;
var state_32550__$1 = (function (){var statearr_32571 = state_32550;
(statearr_32571[(7)] = inst_32515);

(statearr_32571[(8)] = inst_32514__$1);

return statearr_32571;
})();
var statearr_32572_32598 = state_32550__$1;
(statearr_32572_32598[(2)] = null);

(statearr_32572_32598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32584,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32584,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_32550){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__29816__auto__ = e32577;
var statearr_32578_32599 = state_32550;
(statearr_32578_32599[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32600 = state_32550;
state_32550 = G__32600;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_32550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_32550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32584,out))
})();
var state__29926__auto__ = (function (){var statearr_32579 = f__29925__auto__.call(null);
(statearr_32579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32584);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32584,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32601 = [];
var len__22734__auto___32675 = arguments.length;
var i__22735__auto___32676 = (0);
while(true){
if((i__22735__auto___32676 < len__22734__auto___32675)){
args32601.push((arguments[i__22735__auto___32676]));

var G__32677 = (i__22735__auto___32676 + (1));
i__22735__auto___32676 = G__32677;
continue;
} else {
}
break;
}

var G__32603 = args32601.length;
switch (G__32603) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32601.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32679,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29812__auto__ = ((function (c__29924__auto___32679,out){
return (function (state_32645){
var state_val_32646 = (state_32645[(1)]);
if((state_val_32646 === (7))){
var inst_32641 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32647_32680 = state_32645__$1;
(statearr_32647_32680[(2)] = inst_32641);

(statearr_32647_32680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (1))){
var inst_32604 = [];
var inst_32605 = inst_32604;
var inst_32606 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32645__$1 = (function (){var statearr_32648 = state_32645;
(statearr_32648[(7)] = inst_32605);

(statearr_32648[(8)] = inst_32606);

return statearr_32648;
})();
var statearr_32649_32681 = state_32645__$1;
(statearr_32649_32681[(2)] = null);

(statearr_32649_32681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (4))){
var inst_32609 = (state_32645[(9)]);
var inst_32609__$1 = (state_32645[(2)]);
var inst_32610 = (inst_32609__$1 == null);
var inst_32611 = cljs.core.not.call(null,inst_32610);
var state_32645__$1 = (function (){var statearr_32650 = state_32645;
(statearr_32650[(9)] = inst_32609__$1);

return statearr_32650;
})();
if(inst_32611){
var statearr_32651_32682 = state_32645__$1;
(statearr_32651_32682[(1)] = (5));

} else {
var statearr_32652_32683 = state_32645__$1;
(statearr_32652_32683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (15))){
var inst_32635 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32653_32684 = state_32645__$1;
(statearr_32653_32684[(2)] = inst_32635);

(statearr_32653_32684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (13))){
var state_32645__$1 = state_32645;
var statearr_32654_32685 = state_32645__$1;
(statearr_32654_32685[(2)] = null);

(statearr_32654_32685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (6))){
var inst_32605 = (state_32645[(7)]);
var inst_32630 = inst_32605.length;
var inst_32631 = (inst_32630 > (0));
var state_32645__$1 = state_32645;
if(cljs.core.truth_(inst_32631)){
var statearr_32655_32686 = state_32645__$1;
(statearr_32655_32686[(1)] = (12));

} else {
var statearr_32656_32687 = state_32645__$1;
(statearr_32656_32687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (3))){
var inst_32643 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32645__$1,inst_32643);
} else {
if((state_val_32646 === (12))){
var inst_32605 = (state_32645[(7)]);
var inst_32633 = cljs.core.vec.call(null,inst_32605);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32645__$1,(15),out,inst_32633);
} else {
if((state_val_32646 === (2))){
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32645__$1,(4),ch);
} else {
if((state_val_32646 === (11))){
var inst_32613 = (state_32645[(10)]);
var inst_32609 = (state_32645[(9)]);
var inst_32623 = (state_32645[(2)]);
var inst_32624 = [];
var inst_32625 = inst_32624.push(inst_32609);
var inst_32605 = inst_32624;
var inst_32606 = inst_32613;
var state_32645__$1 = (function (){var statearr_32657 = state_32645;
(statearr_32657[(7)] = inst_32605);

(statearr_32657[(11)] = inst_32625);

(statearr_32657[(8)] = inst_32606);

(statearr_32657[(12)] = inst_32623);

return statearr_32657;
})();
var statearr_32658_32688 = state_32645__$1;
(statearr_32658_32688[(2)] = null);

(statearr_32658_32688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (9))){
var inst_32605 = (state_32645[(7)]);
var inst_32621 = cljs.core.vec.call(null,inst_32605);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32645__$1,(11),out,inst_32621);
} else {
if((state_val_32646 === (5))){
var inst_32613 = (state_32645[(10)]);
var inst_32609 = (state_32645[(9)]);
var inst_32606 = (state_32645[(8)]);
var inst_32613__$1 = f.call(null,inst_32609);
var inst_32614 = cljs.core._EQ_.call(null,inst_32613__$1,inst_32606);
var inst_32615 = cljs.core.keyword_identical_QMARK_.call(null,inst_32606,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32616 = (inst_32614) || (inst_32615);
var state_32645__$1 = (function (){var statearr_32659 = state_32645;
(statearr_32659[(10)] = inst_32613__$1);

return statearr_32659;
})();
if(cljs.core.truth_(inst_32616)){
var statearr_32660_32689 = state_32645__$1;
(statearr_32660_32689[(1)] = (8));

} else {
var statearr_32661_32690 = state_32645__$1;
(statearr_32661_32690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (14))){
var inst_32638 = (state_32645[(2)]);
var inst_32639 = cljs.core.async.close_BANG_.call(null,out);
var state_32645__$1 = (function (){var statearr_32663 = state_32645;
(statearr_32663[(13)] = inst_32638);

return statearr_32663;
})();
var statearr_32664_32691 = state_32645__$1;
(statearr_32664_32691[(2)] = inst_32639);

(statearr_32664_32691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (10))){
var inst_32628 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32665_32692 = state_32645__$1;
(statearr_32665_32692[(2)] = inst_32628);

(statearr_32665_32692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (8))){
var inst_32613 = (state_32645[(10)]);
var inst_32609 = (state_32645[(9)]);
var inst_32605 = (state_32645[(7)]);
var inst_32618 = inst_32605.push(inst_32609);
var tmp32662 = inst_32605;
var inst_32605__$1 = tmp32662;
var inst_32606 = inst_32613;
var state_32645__$1 = (function (){var statearr_32666 = state_32645;
(statearr_32666[(7)] = inst_32605__$1);

(statearr_32666[(14)] = inst_32618);

(statearr_32666[(8)] = inst_32606);

return statearr_32666;
})();
var statearr_32667_32693 = state_32645__$1;
(statearr_32667_32693[(2)] = null);

(statearr_32667_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29924__auto___32679,out))
;
return ((function (switch__29812__auto__,c__29924__auto___32679,out){
return (function() {
var cljs$core$async$state_machine__29813__auto__ = null;
var cljs$core$async$state_machine__29813__auto____0 = (function (){
var statearr_32671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32671[(0)] = cljs$core$async$state_machine__29813__auto__);

(statearr_32671[(1)] = (1));

return statearr_32671;
});
var cljs$core$async$state_machine__29813__auto____1 = (function (state_32645){
while(true){
var ret_value__29814__auto__ = (function (){try{while(true){
var result__29815__auto__ = switch__29812__auto__.call(null,state_32645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29815__auto__;
}
break;
}
}catch (e32672){if((e32672 instanceof Object)){
var ex__29816__auto__ = e32672;
var statearr_32673_32694 = state_32645;
(statearr_32673_32694[(5)] = ex__29816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32695 = state_32645;
state_32645 = G__32695;
continue;
} else {
return ret_value__29814__auto__;
}
break;
}
});
cljs$core$async$state_machine__29813__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29813__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29813__auto____0;
cljs$core$async$state_machine__29813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29813__auto____1;
return cljs$core$async$state_machine__29813__auto__;
})()
;})(switch__29812__auto__,c__29924__auto___32679,out))
})();
var state__29926__auto__ = (function (){var statearr_32674 = f__29925__auto__.call(null);
(statearr_32674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32679);

return statearr_32674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32679,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
