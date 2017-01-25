// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38381 = [];
var len__31335__auto___38387 = arguments.length;
var i__31336__auto___38388 = (0);
while(true){
if((i__31336__auto___38388 < len__31335__auto___38387)){
args38381.push((arguments[i__31336__auto___38388]));

var G__38389 = (i__31336__auto___38388 + (1));
i__31336__auto___38388 = G__38389;
continue;
} else {
}
break;
}

var G__38383 = args38381.length;
switch (G__38383) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38381.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38384 = (function (f,blockable,meta38385){
this.f = f;
this.blockable = blockable;
this.meta38385 = meta38385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38386,meta38385__$1){
var self__ = this;
var _38386__$1 = this;
return (new cljs.core.async.t_cljs$core$async38384(self__.f,self__.blockable,meta38385__$1));
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38386){
var self__ = this;
var _38386__$1 = this;
return self__.meta38385;
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38385","meta38385",-2011934345,null)], null);
});

cljs.core.async.t_cljs$core$async38384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38384";

cljs.core.async.t_cljs$core$async38384.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async38384");
});

cljs.core.async.__GT_t_cljs$core$async38384 = (function cljs$core$async$__GT_t_cljs$core$async38384(f__$1,blockable__$1,meta38385){
return (new cljs.core.async.t_cljs$core$async38384(f__$1,blockable__$1,meta38385));
});

}

return (new cljs.core.async.t_cljs$core$async38384(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args38393 = [];
var len__31335__auto___38396 = arguments.length;
var i__31336__auto___38397 = (0);
while(true){
if((i__31336__auto___38397 < len__31335__auto___38396)){
args38393.push((arguments[i__31336__auto___38397]));

var G__38398 = (i__31336__auto___38397 + (1));
i__31336__auto___38397 = G__38398;
continue;
} else {
}
break;
}

var G__38395 = args38393.length;
switch (G__38395) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38393.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args38400 = [];
var len__31335__auto___38403 = arguments.length;
var i__31336__auto___38404 = (0);
while(true){
if((i__31336__auto___38404 < len__31335__auto___38403)){
args38400.push((arguments[i__31336__auto___38404]));

var G__38405 = (i__31336__auto___38404 + (1));
i__31336__auto___38404 = G__38405;
continue;
} else {
}
break;
}

var G__38402 = args38400.length;
switch (G__38402) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38400.length)].join('')));

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
var args38407 = [];
var len__31335__auto___38410 = arguments.length;
var i__31336__auto___38411 = (0);
while(true){
if((i__31336__auto___38411 < len__31335__auto___38410)){
args38407.push((arguments[i__31336__auto___38411]));

var G__38412 = (i__31336__auto___38411 + (1));
i__31336__auto___38411 = G__38412;
continue;
} else {
}
break;
}

var G__38409 = args38407.length;
switch (G__38409) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38407.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38414 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38414);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38414,ret){
return (function (){
return fn1.call(null,val_38414);
});})(val_38414,ret))
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
var args38415 = [];
var len__31335__auto___38418 = arguments.length;
var i__31336__auto___38419 = (0);
while(true){
if((i__31336__auto___38419 < len__31335__auto___38418)){
args38415.push((arguments[i__31336__auto___38419]));

var G__38420 = (i__31336__auto___38419 + (1));
i__31336__auto___38419 = G__38420;
continue;
} else {
}
break;
}

var G__38417 = args38415.length;
switch (G__38417) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38415.length)].join('')));

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
var n__31145__auto___38422 = n;
var x_38423 = (0);
while(true){
if((x_38423 < n__31145__auto___38422)){
(a[x_38423] = (0));

var G__38424 = (x_38423 + (1));
x_38423 = G__38424;
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

var G__38425 = (i + (1));
i = G__38425;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38429 = (function (flag,meta38430){
this.flag = flag;
this.meta38430 = meta38430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38431,meta38430__$1){
var self__ = this;
var _38431__$1 = this;
return (new cljs.core.async.t_cljs$core$async38429(self__.flag,meta38430__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38431){
var self__ = this;
var _38431__$1 = this;
return self__.meta38430;
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38430","meta38430",178120049,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38429";

cljs.core.async.t_cljs$core$async38429.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async38429");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38429 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38429(flag__$1,meta38430){
return (new cljs.core.async.t_cljs$core$async38429(flag__$1,meta38430));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38429(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38435 = (function (flag,cb,meta38436){
this.flag = flag;
this.cb = cb;
this.meta38436 = meta38436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38437,meta38436__$1){
var self__ = this;
var _38437__$1 = this;
return (new cljs.core.async.t_cljs$core$async38435(self__.flag,self__.cb,meta38436__$1));
});

cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38437){
var self__ = this;
var _38437__$1 = this;
return self__.meta38436;
});

cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38436","meta38436",-1635397699,null)], null);
});

cljs.core.async.t_cljs$core$async38435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38435";

cljs.core.async.t_cljs$core$async38435.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async38435");
});

cljs.core.async.__GT_t_cljs$core$async38435 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38435(flag__$1,cb__$1,meta38436){
return (new cljs.core.async.t_cljs$core$async38435(flag__$1,cb__$1,meta38436));
});

}

return (new cljs.core.async.t_cljs$core$async38435(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38438_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38438_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38439_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38439_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30227__auto__ = wport;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38440 = (i + (1));
i = G__38440;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30227__auto__ = ret;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30215__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30215__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30215__auto__;
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
var args__31342__auto__ = [];
var len__31335__auto___38446 = arguments.length;
var i__31336__auto___38447 = (0);
while(true){
if((i__31336__auto___38447 < len__31335__auto___38446)){
args__31342__auto__.push((arguments[i__31336__auto___38447]));

var G__38448 = (i__31336__auto___38447 + (1));
i__31336__auto___38447 = G__38448;
continue;
} else {
}
break;
}

var argseq__31343__auto__ = ((((1) < args__31342__auto__.length))?(new cljs.core.IndexedSeq(args__31342__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31343__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38443){
var map__38444 = p__38443;
var map__38444__$1 = ((((!((map__38444 == null)))?((((map__38444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38444):map__38444);
var opts = map__38444__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38441){
var G__38442 = cljs.core.first.call(null,seq38441);
var seq38441__$1 = cljs.core.next.call(null,seq38441);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38442,seq38441__$1);
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
var args38449 = [];
var len__31335__auto___38499 = arguments.length;
var i__31336__auto___38500 = (0);
while(true){
if((i__31336__auto___38500 < len__31335__auto___38499)){
args38449.push((arguments[i__31336__auto___38500]));

var G__38501 = (i__31336__auto___38500 + (1));
i__31336__auto___38500 = G__38501;
continue;
} else {
}
break;
}

var G__38451 = args38449.length;
switch (G__38451) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38449.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38336__auto___38503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___38503){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___38503){
return (function (state_38475){
var state_val_38476 = (state_38475[(1)]);
if((state_val_38476 === (7))){
var inst_38471 = (state_38475[(2)]);
var state_38475__$1 = state_38475;
var statearr_38477_38504 = state_38475__$1;
(statearr_38477_38504[(2)] = inst_38471);

(statearr_38477_38504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (1))){
var state_38475__$1 = state_38475;
var statearr_38478_38505 = state_38475__$1;
(statearr_38478_38505[(2)] = null);

(statearr_38478_38505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (4))){
var inst_38454 = (state_38475[(7)]);
var inst_38454__$1 = (state_38475[(2)]);
var inst_38455 = (inst_38454__$1 == null);
var state_38475__$1 = (function (){var statearr_38479 = state_38475;
(statearr_38479[(7)] = inst_38454__$1);

return statearr_38479;
})();
if(cljs.core.truth_(inst_38455)){
var statearr_38480_38506 = state_38475__$1;
(statearr_38480_38506[(1)] = (5));

} else {
var statearr_38481_38507 = state_38475__$1;
(statearr_38481_38507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (13))){
var state_38475__$1 = state_38475;
var statearr_38482_38508 = state_38475__$1;
(statearr_38482_38508[(2)] = null);

(statearr_38482_38508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (6))){
var inst_38454 = (state_38475[(7)]);
var state_38475__$1 = state_38475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38475__$1,(11),to,inst_38454);
} else {
if((state_val_38476 === (3))){
var inst_38473 = (state_38475[(2)]);
var state_38475__$1 = state_38475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38475__$1,inst_38473);
} else {
if((state_val_38476 === (12))){
var state_38475__$1 = state_38475;
var statearr_38483_38509 = state_38475__$1;
(statearr_38483_38509[(2)] = null);

(statearr_38483_38509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (2))){
var state_38475__$1 = state_38475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38475__$1,(4),from);
} else {
if((state_val_38476 === (11))){
var inst_38464 = (state_38475[(2)]);
var state_38475__$1 = state_38475;
if(cljs.core.truth_(inst_38464)){
var statearr_38484_38510 = state_38475__$1;
(statearr_38484_38510[(1)] = (12));

} else {
var statearr_38485_38511 = state_38475__$1;
(statearr_38485_38511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (9))){
var state_38475__$1 = state_38475;
var statearr_38486_38512 = state_38475__$1;
(statearr_38486_38512[(2)] = null);

(statearr_38486_38512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (5))){
var state_38475__$1 = state_38475;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38487_38513 = state_38475__$1;
(statearr_38487_38513[(1)] = (8));

} else {
var statearr_38488_38514 = state_38475__$1;
(statearr_38488_38514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (14))){
var inst_38469 = (state_38475[(2)]);
var state_38475__$1 = state_38475;
var statearr_38489_38515 = state_38475__$1;
(statearr_38489_38515[(2)] = inst_38469);

(statearr_38489_38515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (10))){
var inst_38461 = (state_38475[(2)]);
var state_38475__$1 = state_38475;
var statearr_38490_38516 = state_38475__$1;
(statearr_38490_38516[(2)] = inst_38461);

(statearr_38490_38516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38476 === (8))){
var inst_38458 = cljs.core.async.close_BANG_.call(null,to);
var state_38475__$1 = state_38475;
var statearr_38491_38517 = state_38475__$1;
(statearr_38491_38517[(2)] = inst_38458);

(statearr_38491_38517[(1)] = (10));


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
});})(c__38336__auto___38503))
;
return ((function (switch__38224__auto__,c__38336__auto___38503){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_38495 = [null,null,null,null,null,null,null,null];
(statearr_38495[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_38495[(1)] = (1));

return statearr_38495;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_38475){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38496){if((e38496 instanceof Object)){
var ex__38228__auto__ = e38496;
var statearr_38497_38518 = state_38475;
(statearr_38497_38518[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38519 = state_38475;
state_38475 = G__38519;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_38475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_38475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___38503))
})();
var state__38338__auto__ = (function (){var statearr_38498 = f__38337__auto__.call(null);
(statearr_38498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___38503);

return statearr_38498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___38503))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38707){
var vec__38708 = p__38707;
var v = cljs.core.nth.call(null,vec__38708,(0),null);
var p = cljs.core.nth.call(null,vec__38708,(1),null);
var job = vec__38708;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38336__auto___38894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results){
return (function (state_38715){
var state_val_38716 = (state_38715[(1)]);
if((state_val_38716 === (1))){
var state_38715__$1 = state_38715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38715__$1,(2),res,v);
} else {
if((state_val_38716 === (2))){
var inst_38712 = (state_38715[(2)]);
var inst_38713 = cljs.core.async.close_BANG_.call(null,res);
var state_38715__$1 = (function (){var statearr_38717 = state_38715;
(statearr_38717[(7)] = inst_38712);

return statearr_38717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38715__$1,inst_38713);
} else {
return null;
}
}
});})(c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results))
;
return ((function (switch__38224__auto__,c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_38721 = [null,null,null,null,null,null,null,null];
(statearr_38721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__);

(statearr_38721[(1)] = (1));

return statearr_38721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1 = (function (state_38715){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38722){if((e38722 instanceof Object)){
var ex__38228__auto__ = e38722;
var statearr_38723_38895 = state_38715;
(statearr_38723_38895[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38896 = state_38715;
state_38715 = G__38896;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = function(state_38715){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1.call(this,state_38715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results))
})();
var state__38338__auto__ = (function (){var statearr_38724 = f__38337__auto__.call(null);
(statearr_38724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___38894);

return statearr_38724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___38894,res,vec__38708,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38725){
var vec__38726 = p__38725;
var v = cljs.core.nth.call(null,vec__38726,(0),null);
var p = cljs.core.nth.call(null,vec__38726,(1),null);
var job = vec__38726;
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
var n__31145__auto___38897 = n;
var __38898 = (0);
while(true){
if((__38898 < n__31145__auto___38897)){
var G__38729_38899 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38729_38899) {
case "compute":
var c__38336__auto___38901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38898,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (__38898,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function (state_38742){
var state_val_38743 = (state_38742[(1)]);
if((state_val_38743 === (1))){
var state_38742__$1 = state_38742;
var statearr_38744_38902 = state_38742__$1;
(statearr_38744_38902[(2)] = null);

(statearr_38744_38902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (2))){
var state_38742__$1 = state_38742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38742__$1,(4),jobs);
} else {
if((state_val_38743 === (3))){
var inst_38740 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38742__$1,inst_38740);
} else {
if((state_val_38743 === (4))){
var inst_38732 = (state_38742[(2)]);
var inst_38733 = process.call(null,inst_38732);
var state_38742__$1 = state_38742;
if(cljs.core.truth_(inst_38733)){
var statearr_38745_38903 = state_38742__$1;
(statearr_38745_38903[(1)] = (5));

} else {
var statearr_38746_38904 = state_38742__$1;
(statearr_38746_38904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (5))){
var state_38742__$1 = state_38742;
var statearr_38747_38905 = state_38742__$1;
(statearr_38747_38905[(2)] = null);

(statearr_38747_38905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (6))){
var state_38742__$1 = state_38742;
var statearr_38748_38906 = state_38742__$1;
(statearr_38748_38906[(2)] = null);

(statearr_38748_38906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (7))){
var inst_38738 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
var statearr_38749_38907 = state_38742__$1;
(statearr_38749_38907[(2)] = inst_38738);

(statearr_38749_38907[(1)] = (3));


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
});})(__38898,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
;
return ((function (__38898,switch__38224__auto__,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_38753 = [null,null,null,null,null,null,null];
(statearr_38753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__);

(statearr_38753[(1)] = (1));

return statearr_38753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1 = (function (state_38742){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38754){if((e38754 instanceof Object)){
var ex__38228__auto__ = e38754;
var statearr_38755_38908 = state_38742;
(statearr_38755_38908[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38909 = state_38742;
state_38742 = G__38909;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = function(state_38742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1.call(this,state_38742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__;
})()
;})(__38898,switch__38224__auto__,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
})();
var state__38338__auto__ = (function (){var statearr_38756 = f__38337__auto__.call(null);
(statearr_38756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___38901);

return statearr_38756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(__38898,c__38336__auto___38901,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
);


break;
case "async":
var c__38336__auto___38910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38898,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (__38898,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function (state_38769){
var state_val_38770 = (state_38769[(1)]);
if((state_val_38770 === (1))){
var state_38769__$1 = state_38769;
var statearr_38771_38911 = state_38769__$1;
(statearr_38771_38911[(2)] = null);

(statearr_38771_38911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (2))){
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38769__$1,(4),jobs);
} else {
if((state_val_38770 === (3))){
var inst_38767 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38769__$1,inst_38767);
} else {
if((state_val_38770 === (4))){
var inst_38759 = (state_38769[(2)]);
var inst_38760 = async.call(null,inst_38759);
var state_38769__$1 = state_38769;
if(cljs.core.truth_(inst_38760)){
var statearr_38772_38912 = state_38769__$1;
(statearr_38772_38912[(1)] = (5));

} else {
var statearr_38773_38913 = state_38769__$1;
(statearr_38773_38913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (5))){
var state_38769__$1 = state_38769;
var statearr_38774_38914 = state_38769__$1;
(statearr_38774_38914[(2)] = null);

(statearr_38774_38914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (6))){
var state_38769__$1 = state_38769;
var statearr_38775_38915 = state_38769__$1;
(statearr_38775_38915[(2)] = null);

(statearr_38775_38915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (7))){
var inst_38765 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
var statearr_38776_38916 = state_38769__$1;
(statearr_38776_38916[(2)] = inst_38765);

(statearr_38776_38916[(1)] = (3));


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
});})(__38898,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
;
return ((function (__38898,switch__38224__auto__,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_38780 = [null,null,null,null,null,null,null];
(statearr_38780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__);

(statearr_38780[(1)] = (1));

return statearr_38780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1 = (function (state_38769){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38781){if((e38781 instanceof Object)){
var ex__38228__auto__ = e38781;
var statearr_38782_38917 = state_38769;
(statearr_38782_38917[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38918 = state_38769;
state_38769 = G__38918;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = function(state_38769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1.call(this,state_38769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__;
})()
;})(__38898,switch__38224__auto__,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
})();
var state__38338__auto__ = (function (){var statearr_38783 = f__38337__auto__.call(null);
(statearr_38783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___38910);

return statearr_38783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(__38898,c__38336__auto___38910,G__38729_38899,n__31145__auto___38897,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38919 = (__38898 + (1));
__38898 = G__38919;
continue;
} else {
}
break;
}

var c__38336__auto___38920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___38920,jobs,results,process,async){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___38920,jobs,results,process,async){
return (function (state_38805){
var state_val_38806 = (state_38805[(1)]);
if((state_val_38806 === (1))){
var state_38805__$1 = state_38805;
var statearr_38807_38921 = state_38805__$1;
(statearr_38807_38921[(2)] = null);

(statearr_38807_38921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38806 === (2))){
var state_38805__$1 = state_38805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38805__$1,(4),from);
} else {
if((state_val_38806 === (3))){
var inst_38803 = (state_38805[(2)]);
var state_38805__$1 = state_38805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38805__$1,inst_38803);
} else {
if((state_val_38806 === (4))){
var inst_38786 = (state_38805[(7)]);
var inst_38786__$1 = (state_38805[(2)]);
var inst_38787 = (inst_38786__$1 == null);
var state_38805__$1 = (function (){var statearr_38808 = state_38805;
(statearr_38808[(7)] = inst_38786__$1);

return statearr_38808;
})();
if(cljs.core.truth_(inst_38787)){
var statearr_38809_38922 = state_38805__$1;
(statearr_38809_38922[(1)] = (5));

} else {
var statearr_38810_38923 = state_38805__$1;
(statearr_38810_38923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38806 === (5))){
var inst_38789 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38805__$1 = state_38805;
var statearr_38811_38924 = state_38805__$1;
(statearr_38811_38924[(2)] = inst_38789);

(statearr_38811_38924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38806 === (6))){
var inst_38791 = (state_38805[(8)]);
var inst_38786 = (state_38805[(7)]);
var inst_38791__$1 = cljs.core.async.chan.call(null,(1));
var inst_38792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38793 = [inst_38786,inst_38791__$1];
var inst_38794 = (new cljs.core.PersistentVector(null,2,(5),inst_38792,inst_38793,null));
var state_38805__$1 = (function (){var statearr_38812 = state_38805;
(statearr_38812[(8)] = inst_38791__$1);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38805__$1,(8),jobs,inst_38794);
} else {
if((state_val_38806 === (7))){
var inst_38801 = (state_38805[(2)]);
var state_38805__$1 = state_38805;
var statearr_38813_38925 = state_38805__$1;
(statearr_38813_38925[(2)] = inst_38801);

(statearr_38813_38925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38806 === (8))){
var inst_38791 = (state_38805[(8)]);
var inst_38796 = (state_38805[(2)]);
var state_38805__$1 = (function (){var statearr_38814 = state_38805;
(statearr_38814[(9)] = inst_38796);

return statearr_38814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38805__$1,(9),results,inst_38791);
} else {
if((state_val_38806 === (9))){
var inst_38798 = (state_38805[(2)]);
var state_38805__$1 = (function (){var statearr_38815 = state_38805;
(statearr_38815[(10)] = inst_38798);

return statearr_38815;
})();
var statearr_38816_38926 = state_38805__$1;
(statearr_38816_38926[(2)] = null);

(statearr_38816_38926[(1)] = (2));


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
});})(c__38336__auto___38920,jobs,results,process,async))
;
return ((function (switch__38224__auto__,c__38336__auto___38920,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_38820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__);

(statearr_38820[(1)] = (1));

return statearr_38820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1 = (function (state_38805){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38821){if((e38821 instanceof Object)){
var ex__38228__auto__ = e38821;
var statearr_38822_38927 = state_38805;
(statearr_38822_38927[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38928 = state_38805;
state_38805 = G__38928;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = function(state_38805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1.call(this,state_38805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___38920,jobs,results,process,async))
})();
var state__38338__auto__ = (function (){var statearr_38823 = f__38337__auto__.call(null);
(statearr_38823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___38920);

return statearr_38823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___38920,jobs,results,process,async))
);


var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__,jobs,results,process,async){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__,jobs,results,process,async){
return (function (state_38861){
var state_val_38862 = (state_38861[(1)]);
if((state_val_38862 === (7))){
var inst_38857 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38863_38929 = state_38861__$1;
(statearr_38863_38929[(2)] = inst_38857);

(statearr_38863_38929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (20))){
var state_38861__$1 = state_38861;
var statearr_38864_38930 = state_38861__$1;
(statearr_38864_38930[(2)] = null);

(statearr_38864_38930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (1))){
var state_38861__$1 = state_38861;
var statearr_38865_38931 = state_38861__$1;
(statearr_38865_38931[(2)] = null);

(statearr_38865_38931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (4))){
var inst_38826 = (state_38861[(7)]);
var inst_38826__$1 = (state_38861[(2)]);
var inst_38827 = (inst_38826__$1 == null);
var state_38861__$1 = (function (){var statearr_38866 = state_38861;
(statearr_38866[(7)] = inst_38826__$1);

return statearr_38866;
})();
if(cljs.core.truth_(inst_38827)){
var statearr_38867_38932 = state_38861__$1;
(statearr_38867_38932[(1)] = (5));

} else {
var statearr_38868_38933 = state_38861__$1;
(statearr_38868_38933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (15))){
var inst_38839 = (state_38861[(8)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38861__$1,(18),to,inst_38839);
} else {
if((state_val_38862 === (21))){
var inst_38852 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38869_38934 = state_38861__$1;
(statearr_38869_38934[(2)] = inst_38852);

(statearr_38869_38934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (13))){
var inst_38854 = (state_38861[(2)]);
var state_38861__$1 = (function (){var statearr_38870 = state_38861;
(statearr_38870[(9)] = inst_38854);

return statearr_38870;
})();
var statearr_38871_38935 = state_38861__$1;
(statearr_38871_38935[(2)] = null);

(statearr_38871_38935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (6))){
var inst_38826 = (state_38861[(7)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(11),inst_38826);
} else {
if((state_val_38862 === (17))){
var inst_38847 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
if(cljs.core.truth_(inst_38847)){
var statearr_38872_38936 = state_38861__$1;
(statearr_38872_38936[(1)] = (19));

} else {
var statearr_38873_38937 = state_38861__$1;
(statearr_38873_38937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (3))){
var inst_38859 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38861__$1,inst_38859);
} else {
if((state_val_38862 === (12))){
var inst_38836 = (state_38861[(10)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(14),inst_38836);
} else {
if((state_val_38862 === (2))){
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(4),results);
} else {
if((state_val_38862 === (19))){
var state_38861__$1 = state_38861;
var statearr_38874_38938 = state_38861__$1;
(statearr_38874_38938[(2)] = null);

(statearr_38874_38938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (11))){
var inst_38836 = (state_38861[(2)]);
var state_38861__$1 = (function (){var statearr_38875 = state_38861;
(statearr_38875[(10)] = inst_38836);

return statearr_38875;
})();
var statearr_38876_38939 = state_38861__$1;
(statearr_38876_38939[(2)] = null);

(statearr_38876_38939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (9))){
var state_38861__$1 = state_38861;
var statearr_38877_38940 = state_38861__$1;
(statearr_38877_38940[(2)] = null);

(statearr_38877_38940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (5))){
var state_38861__$1 = state_38861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38878_38941 = state_38861__$1;
(statearr_38878_38941[(1)] = (8));

} else {
var statearr_38879_38942 = state_38861__$1;
(statearr_38879_38942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (14))){
var inst_38839 = (state_38861[(8)]);
var inst_38841 = (state_38861[(11)]);
var inst_38839__$1 = (state_38861[(2)]);
var inst_38840 = (inst_38839__$1 == null);
var inst_38841__$1 = cljs.core.not.call(null,inst_38840);
var state_38861__$1 = (function (){var statearr_38880 = state_38861;
(statearr_38880[(8)] = inst_38839__$1);

(statearr_38880[(11)] = inst_38841__$1);

return statearr_38880;
})();
if(inst_38841__$1){
var statearr_38881_38943 = state_38861__$1;
(statearr_38881_38943[(1)] = (15));

} else {
var statearr_38882_38944 = state_38861__$1;
(statearr_38882_38944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (16))){
var inst_38841 = (state_38861[(11)]);
var state_38861__$1 = state_38861;
var statearr_38883_38945 = state_38861__$1;
(statearr_38883_38945[(2)] = inst_38841);

(statearr_38883_38945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (10))){
var inst_38833 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38884_38946 = state_38861__$1;
(statearr_38884_38946[(2)] = inst_38833);

(statearr_38884_38946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (18))){
var inst_38844 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38885_38947 = state_38861__$1;
(statearr_38885_38947[(2)] = inst_38844);

(statearr_38885_38947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (8))){
var inst_38830 = cljs.core.async.close_BANG_.call(null,to);
var state_38861__$1 = state_38861;
var statearr_38886_38948 = state_38861__$1;
(statearr_38886_38948[(2)] = inst_38830);

(statearr_38886_38948[(1)] = (10));


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
});})(c__38336__auto__,jobs,results,process,async))
;
return ((function (switch__38224__auto__,c__38336__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_38890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__);

(statearr_38890[(1)] = (1));

return statearr_38890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1 = (function (state_38861){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e38891){if((e38891 instanceof Object)){
var ex__38228__auto__ = e38891;
var statearr_38892_38949 = state_38861;
(statearr_38892_38949[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38950 = state_38861;
state_38861 = G__38950;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__ = function(state_38861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1.call(this,state_38861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__,jobs,results,process,async))
})();
var state__38338__auto__ = (function (){var statearr_38893 = f__38337__auto__.call(null);
(statearr_38893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_38893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__,jobs,results,process,async))
);

return c__38336__auto__;
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
var args38951 = [];
var len__31335__auto___38954 = arguments.length;
var i__31336__auto___38955 = (0);
while(true){
if((i__31336__auto___38955 < len__31335__auto___38954)){
args38951.push((arguments[i__31336__auto___38955]));

var G__38956 = (i__31336__auto___38955 + (1));
i__31336__auto___38955 = G__38956;
continue;
} else {
}
break;
}

var G__38953 = args38951.length;
switch (G__38953) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38951.length)].join('')));

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
var args38958 = [];
var len__31335__auto___38961 = arguments.length;
var i__31336__auto___38962 = (0);
while(true){
if((i__31336__auto___38962 < len__31335__auto___38961)){
args38958.push((arguments[i__31336__auto___38962]));

var G__38963 = (i__31336__auto___38962 + (1));
i__31336__auto___38962 = G__38963;
continue;
} else {
}
break;
}

var G__38960 = args38958.length;
switch (G__38960) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38958.length)].join('')));

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
var args38965 = [];
var len__31335__auto___39018 = arguments.length;
var i__31336__auto___39019 = (0);
while(true){
if((i__31336__auto___39019 < len__31335__auto___39018)){
args38965.push((arguments[i__31336__auto___39019]));

var G__39020 = (i__31336__auto___39019 + (1));
i__31336__auto___39019 = G__39020;
continue;
} else {
}
break;
}

var G__38967 = args38965.length;
switch (G__38967) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38965.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38336__auto___39022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___39022,tc,fc){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___39022,tc,fc){
return (function (state_38993){
var state_val_38994 = (state_38993[(1)]);
if((state_val_38994 === (7))){
var inst_38989 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_38995_39023 = state_38993__$1;
(statearr_38995_39023[(2)] = inst_38989);

(statearr_38995_39023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (1))){
var state_38993__$1 = state_38993;
var statearr_38996_39024 = state_38993__$1;
(statearr_38996_39024[(2)] = null);

(statearr_38996_39024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (4))){
var inst_38970 = (state_38993[(7)]);
var inst_38970__$1 = (state_38993[(2)]);
var inst_38971 = (inst_38970__$1 == null);
var state_38993__$1 = (function (){var statearr_38997 = state_38993;
(statearr_38997[(7)] = inst_38970__$1);

return statearr_38997;
})();
if(cljs.core.truth_(inst_38971)){
var statearr_38998_39025 = state_38993__$1;
(statearr_38998_39025[(1)] = (5));

} else {
var statearr_38999_39026 = state_38993__$1;
(statearr_38999_39026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (13))){
var state_38993__$1 = state_38993;
var statearr_39000_39027 = state_38993__$1;
(statearr_39000_39027[(2)] = null);

(statearr_39000_39027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (6))){
var inst_38970 = (state_38993[(7)]);
var inst_38976 = p.call(null,inst_38970);
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38976)){
var statearr_39001_39028 = state_38993__$1;
(statearr_39001_39028[(1)] = (9));

} else {
var statearr_39002_39029 = state_38993__$1;
(statearr_39002_39029[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (3))){
var inst_38991 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38993__$1,inst_38991);
} else {
if((state_val_38994 === (12))){
var state_38993__$1 = state_38993;
var statearr_39003_39030 = state_38993__$1;
(statearr_39003_39030[(2)] = null);

(statearr_39003_39030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (2))){
var state_38993__$1 = state_38993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38993__$1,(4),ch);
} else {
if((state_val_38994 === (11))){
var inst_38970 = (state_38993[(7)]);
var inst_38980 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38993__$1,(8),inst_38980,inst_38970);
} else {
if((state_val_38994 === (9))){
var state_38993__$1 = state_38993;
var statearr_39004_39031 = state_38993__$1;
(statearr_39004_39031[(2)] = tc);

(statearr_39004_39031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (5))){
var inst_38973 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38974 = cljs.core.async.close_BANG_.call(null,fc);
var state_38993__$1 = (function (){var statearr_39005 = state_38993;
(statearr_39005[(8)] = inst_38973);

return statearr_39005;
})();
var statearr_39006_39032 = state_38993__$1;
(statearr_39006_39032[(2)] = inst_38974);

(statearr_39006_39032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (14))){
var inst_38987 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39007_39033 = state_38993__$1;
(statearr_39007_39033[(2)] = inst_38987);

(statearr_39007_39033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (10))){
var state_38993__$1 = state_38993;
var statearr_39008_39034 = state_38993__$1;
(statearr_39008_39034[(2)] = fc);

(statearr_39008_39034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (8))){
var inst_38982 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38982)){
var statearr_39009_39035 = state_38993__$1;
(statearr_39009_39035[(1)] = (12));

} else {
var statearr_39010_39036 = state_38993__$1;
(statearr_39010_39036[(1)] = (13));

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
});})(c__38336__auto___39022,tc,fc))
;
return ((function (switch__38224__auto__,c__38336__auto___39022,tc,fc){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_39014 = [null,null,null,null,null,null,null,null,null];
(statearr_39014[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_39014[(1)] = (1));

return statearr_39014;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_38993){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_38993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e39015){if((e39015 instanceof Object)){
var ex__38228__auto__ = e39015;
var statearr_39016_39037 = state_38993;
(statearr_39016_39037[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39038 = state_38993;
state_38993 = G__39038;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_38993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_38993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___39022,tc,fc))
})();
var state__38338__auto__ = (function (){var statearr_39017 = f__38337__auto__.call(null);
(statearr_39017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___39022);

return statearr_39017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___39022,tc,fc))
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
var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__){
return (function (state_39102){
var state_val_39103 = (state_39102[(1)]);
if((state_val_39103 === (7))){
var inst_39098 = (state_39102[(2)]);
var state_39102__$1 = state_39102;
var statearr_39104_39125 = state_39102__$1;
(statearr_39104_39125[(2)] = inst_39098);

(statearr_39104_39125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (1))){
var inst_39082 = init;
var state_39102__$1 = (function (){var statearr_39105 = state_39102;
(statearr_39105[(7)] = inst_39082);

return statearr_39105;
})();
var statearr_39106_39126 = state_39102__$1;
(statearr_39106_39126[(2)] = null);

(statearr_39106_39126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (4))){
var inst_39085 = (state_39102[(8)]);
var inst_39085__$1 = (state_39102[(2)]);
var inst_39086 = (inst_39085__$1 == null);
var state_39102__$1 = (function (){var statearr_39107 = state_39102;
(statearr_39107[(8)] = inst_39085__$1);

return statearr_39107;
})();
if(cljs.core.truth_(inst_39086)){
var statearr_39108_39127 = state_39102__$1;
(statearr_39108_39127[(1)] = (5));

} else {
var statearr_39109_39128 = state_39102__$1;
(statearr_39109_39128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (6))){
var inst_39085 = (state_39102[(8)]);
var inst_39082 = (state_39102[(7)]);
var inst_39089 = (state_39102[(9)]);
var inst_39089__$1 = f.call(null,inst_39082,inst_39085);
var inst_39090 = cljs.core.reduced_QMARK_.call(null,inst_39089__$1);
var state_39102__$1 = (function (){var statearr_39110 = state_39102;
(statearr_39110[(9)] = inst_39089__$1);

return statearr_39110;
})();
if(inst_39090){
var statearr_39111_39129 = state_39102__$1;
(statearr_39111_39129[(1)] = (8));

} else {
var statearr_39112_39130 = state_39102__$1;
(statearr_39112_39130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (3))){
var inst_39100 = (state_39102[(2)]);
var state_39102__$1 = state_39102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39102__$1,inst_39100);
} else {
if((state_val_39103 === (2))){
var state_39102__$1 = state_39102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39102__$1,(4),ch);
} else {
if((state_val_39103 === (9))){
var inst_39089 = (state_39102[(9)]);
var inst_39082 = inst_39089;
var state_39102__$1 = (function (){var statearr_39113 = state_39102;
(statearr_39113[(7)] = inst_39082);

return statearr_39113;
})();
var statearr_39114_39131 = state_39102__$1;
(statearr_39114_39131[(2)] = null);

(statearr_39114_39131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (5))){
var inst_39082 = (state_39102[(7)]);
var state_39102__$1 = state_39102;
var statearr_39115_39132 = state_39102__$1;
(statearr_39115_39132[(2)] = inst_39082);

(statearr_39115_39132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (10))){
var inst_39096 = (state_39102[(2)]);
var state_39102__$1 = state_39102;
var statearr_39116_39133 = state_39102__$1;
(statearr_39116_39133[(2)] = inst_39096);

(statearr_39116_39133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39103 === (8))){
var inst_39089 = (state_39102[(9)]);
var inst_39092 = cljs.core.deref.call(null,inst_39089);
var state_39102__$1 = state_39102;
var statearr_39117_39134 = state_39102__$1;
(statearr_39117_39134[(2)] = inst_39092);

(statearr_39117_39134[(1)] = (10));


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
});})(c__38336__auto__))
;
return ((function (switch__38224__auto__,c__38336__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38225__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38225__auto____0 = (function (){
var statearr_39121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39121[(0)] = cljs$core$async$reduce_$_state_machine__38225__auto__);

(statearr_39121[(1)] = (1));

return statearr_39121;
});
var cljs$core$async$reduce_$_state_machine__38225__auto____1 = (function (state_39102){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_39102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e39122){if((e39122 instanceof Object)){
var ex__38228__auto__ = e39122;
var statearr_39123_39135 = state_39102;
(statearr_39123_39135[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39136 = state_39102;
state_39102 = G__39136;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38225__auto__ = function(state_39102){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38225__auto____1.call(this,state_39102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38225__auto____0;
cljs$core$async$reduce_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38225__auto____1;
return cljs$core$async$reduce_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__))
})();
var state__38338__auto__ = (function (){var statearr_39124 = f__38337__auto__.call(null);
(statearr_39124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_39124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__))
);

return c__38336__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__,f__$1){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__,f__$1){
return (function (state_39156){
var state_val_39157 = (state_39156[(1)]);
if((state_val_39157 === (1))){
var inst_39151 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39156__$1 = state_39156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39156__$1,(2),inst_39151);
} else {
if((state_val_39157 === (2))){
var inst_39153 = (state_39156[(2)]);
var inst_39154 = f__$1.call(null,inst_39153);
var state_39156__$1 = state_39156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39156__$1,inst_39154);
} else {
return null;
}
}
});})(c__38336__auto__,f__$1))
;
return ((function (switch__38224__auto__,c__38336__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38225__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38225__auto____0 = (function (){
var statearr_39161 = [null,null,null,null,null,null,null];
(statearr_39161[(0)] = cljs$core$async$transduce_$_state_machine__38225__auto__);

(statearr_39161[(1)] = (1));

return statearr_39161;
});
var cljs$core$async$transduce_$_state_machine__38225__auto____1 = (function (state_39156){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_39156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e39162){if((e39162 instanceof Object)){
var ex__38228__auto__ = e39162;
var statearr_39163_39165 = state_39156;
(statearr_39163_39165[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39166 = state_39156;
state_39156 = G__39166;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38225__auto__ = function(state_39156){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38225__auto____1.call(this,state_39156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38225__auto____0;
cljs$core$async$transduce_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38225__auto____1;
return cljs$core$async$transduce_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__,f__$1))
})();
var state__38338__auto__ = (function (){var statearr_39164 = f__38337__auto__.call(null);
(statearr_39164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_39164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__,f__$1))
);

return c__38336__auto__;
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
var args39167 = [];
var len__31335__auto___39219 = arguments.length;
var i__31336__auto___39220 = (0);
while(true){
if((i__31336__auto___39220 < len__31335__auto___39219)){
args39167.push((arguments[i__31336__auto___39220]));

var G__39221 = (i__31336__auto___39220 + (1));
i__31336__auto___39220 = G__39221;
continue;
} else {
}
break;
}

var G__39169 = args39167.length;
switch (G__39169) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39167.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__){
return (function (state_39194){
var state_val_39195 = (state_39194[(1)]);
if((state_val_39195 === (7))){
var inst_39176 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
var statearr_39196_39223 = state_39194__$1;
(statearr_39196_39223[(2)] = inst_39176);

(statearr_39196_39223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (1))){
var inst_39170 = cljs.core.seq.call(null,coll);
var inst_39171 = inst_39170;
var state_39194__$1 = (function (){var statearr_39197 = state_39194;
(statearr_39197[(7)] = inst_39171);

return statearr_39197;
})();
var statearr_39198_39224 = state_39194__$1;
(statearr_39198_39224[(2)] = null);

(statearr_39198_39224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (4))){
var inst_39171 = (state_39194[(7)]);
var inst_39174 = cljs.core.first.call(null,inst_39171);
var state_39194__$1 = state_39194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39194__$1,(7),ch,inst_39174);
} else {
if((state_val_39195 === (13))){
var inst_39188 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
var statearr_39199_39225 = state_39194__$1;
(statearr_39199_39225[(2)] = inst_39188);

(statearr_39199_39225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (6))){
var inst_39179 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
if(cljs.core.truth_(inst_39179)){
var statearr_39200_39226 = state_39194__$1;
(statearr_39200_39226[(1)] = (8));

} else {
var statearr_39201_39227 = state_39194__$1;
(statearr_39201_39227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (3))){
var inst_39192 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39194__$1,inst_39192);
} else {
if((state_val_39195 === (12))){
var state_39194__$1 = state_39194;
var statearr_39202_39228 = state_39194__$1;
(statearr_39202_39228[(2)] = null);

(statearr_39202_39228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (2))){
var inst_39171 = (state_39194[(7)]);
var state_39194__$1 = state_39194;
if(cljs.core.truth_(inst_39171)){
var statearr_39203_39229 = state_39194__$1;
(statearr_39203_39229[(1)] = (4));

} else {
var statearr_39204_39230 = state_39194__$1;
(statearr_39204_39230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (11))){
var inst_39185 = cljs.core.async.close_BANG_.call(null,ch);
var state_39194__$1 = state_39194;
var statearr_39205_39231 = state_39194__$1;
(statearr_39205_39231[(2)] = inst_39185);

(statearr_39205_39231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (9))){
var state_39194__$1 = state_39194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39206_39232 = state_39194__$1;
(statearr_39206_39232[(1)] = (11));

} else {
var statearr_39207_39233 = state_39194__$1;
(statearr_39207_39233[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (5))){
var inst_39171 = (state_39194[(7)]);
var state_39194__$1 = state_39194;
var statearr_39208_39234 = state_39194__$1;
(statearr_39208_39234[(2)] = inst_39171);

(statearr_39208_39234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (10))){
var inst_39190 = (state_39194[(2)]);
var state_39194__$1 = state_39194;
var statearr_39209_39235 = state_39194__$1;
(statearr_39209_39235[(2)] = inst_39190);

(statearr_39209_39235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39195 === (8))){
var inst_39171 = (state_39194[(7)]);
var inst_39181 = cljs.core.next.call(null,inst_39171);
var inst_39171__$1 = inst_39181;
var state_39194__$1 = (function (){var statearr_39210 = state_39194;
(statearr_39210[(7)] = inst_39171__$1);

return statearr_39210;
})();
var statearr_39211_39236 = state_39194__$1;
(statearr_39211_39236[(2)] = null);

(statearr_39211_39236[(1)] = (2));


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
});})(c__38336__auto__))
;
return ((function (switch__38224__auto__,c__38336__auto__){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_39215 = [null,null,null,null,null,null,null,null];
(statearr_39215[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_39215[(1)] = (1));

return statearr_39215;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_39194){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_39194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e39216){if((e39216 instanceof Object)){
var ex__38228__auto__ = e39216;
var statearr_39217_39237 = state_39194;
(statearr_39217_39237[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39238 = state_39194;
state_39194 = G__39238;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_39194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_39194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__))
})();
var state__38338__auto__ = (function (){var statearr_39218 = f__38337__auto__.call(null);
(statearr_39218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_39218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__))
);

return c__38336__auto__;
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
var x__30890__auto__ = (((_ == null))?null:_);
var m__30891__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,_);
} else {
var m__30891__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,_);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30891__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,ch);
} else {
var m__30891__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,ch);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m);
} else {
var m__30891__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async39464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39464 = (function (ch,cs,meta39465){
this.ch = ch;
this.cs = cs;
this.meta39465 = meta39465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39466,meta39465__$1){
var self__ = this;
var _39466__$1 = this;
return (new cljs.core.async.t_cljs$core$async39464(self__.ch,self__.cs,meta39465__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39466){
var self__ = this;
var _39466__$1 = this;
return self__.meta39465;
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39465","meta39465",-92852093,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39464";

cljs.core.async.t_cljs$core$async39464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async39464");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39464 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39464(ch__$1,cs__$1,meta39465){
return (new cljs.core.async.t_cljs$core$async39464(ch__$1,cs__$1,meta39465));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39464(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38336__auto___39689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___39689,cs,m,dchan,dctr,done){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___39689,cs,m,dchan,dctr,done){
return (function (state_39601){
var state_val_39602 = (state_39601[(1)]);
if((state_val_39602 === (7))){
var inst_39597 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39603_39690 = state_39601__$1;
(statearr_39603_39690[(2)] = inst_39597);

(statearr_39603_39690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (20))){
var inst_39500 = (state_39601[(7)]);
var inst_39512 = cljs.core.first.call(null,inst_39500);
var inst_39513 = cljs.core.nth.call(null,inst_39512,(0),null);
var inst_39514 = cljs.core.nth.call(null,inst_39512,(1),null);
var state_39601__$1 = (function (){var statearr_39604 = state_39601;
(statearr_39604[(8)] = inst_39513);

return statearr_39604;
})();
if(cljs.core.truth_(inst_39514)){
var statearr_39605_39691 = state_39601__$1;
(statearr_39605_39691[(1)] = (22));

} else {
var statearr_39606_39692 = state_39601__$1;
(statearr_39606_39692[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (27))){
var inst_39544 = (state_39601[(9)]);
var inst_39469 = (state_39601[(10)]);
var inst_39542 = (state_39601[(11)]);
var inst_39549 = (state_39601[(12)]);
var inst_39549__$1 = cljs.core._nth.call(null,inst_39542,inst_39544);
var inst_39550 = cljs.core.async.put_BANG_.call(null,inst_39549__$1,inst_39469,done);
var state_39601__$1 = (function (){var statearr_39607 = state_39601;
(statearr_39607[(12)] = inst_39549__$1);

return statearr_39607;
})();
if(cljs.core.truth_(inst_39550)){
var statearr_39608_39693 = state_39601__$1;
(statearr_39608_39693[(1)] = (30));

} else {
var statearr_39609_39694 = state_39601__$1;
(statearr_39609_39694[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (1))){
var state_39601__$1 = state_39601;
var statearr_39610_39695 = state_39601__$1;
(statearr_39610_39695[(2)] = null);

(statearr_39610_39695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (24))){
var inst_39500 = (state_39601[(7)]);
var inst_39519 = (state_39601[(2)]);
var inst_39520 = cljs.core.next.call(null,inst_39500);
var inst_39478 = inst_39520;
var inst_39479 = null;
var inst_39480 = (0);
var inst_39481 = (0);
var state_39601__$1 = (function (){var statearr_39611 = state_39601;
(statearr_39611[(13)] = inst_39479);

(statearr_39611[(14)] = inst_39480);

(statearr_39611[(15)] = inst_39519);

(statearr_39611[(16)] = inst_39478);

(statearr_39611[(17)] = inst_39481);

return statearr_39611;
})();
var statearr_39612_39696 = state_39601__$1;
(statearr_39612_39696[(2)] = null);

(statearr_39612_39696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (39))){
var state_39601__$1 = state_39601;
var statearr_39616_39697 = state_39601__$1;
(statearr_39616_39697[(2)] = null);

(statearr_39616_39697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (4))){
var inst_39469 = (state_39601[(10)]);
var inst_39469__$1 = (state_39601[(2)]);
var inst_39470 = (inst_39469__$1 == null);
var state_39601__$1 = (function (){var statearr_39617 = state_39601;
(statearr_39617[(10)] = inst_39469__$1);

return statearr_39617;
})();
if(cljs.core.truth_(inst_39470)){
var statearr_39618_39698 = state_39601__$1;
(statearr_39618_39698[(1)] = (5));

} else {
var statearr_39619_39699 = state_39601__$1;
(statearr_39619_39699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (15))){
var inst_39479 = (state_39601[(13)]);
var inst_39480 = (state_39601[(14)]);
var inst_39478 = (state_39601[(16)]);
var inst_39481 = (state_39601[(17)]);
var inst_39496 = (state_39601[(2)]);
var inst_39497 = (inst_39481 + (1));
var tmp39613 = inst_39479;
var tmp39614 = inst_39480;
var tmp39615 = inst_39478;
var inst_39478__$1 = tmp39615;
var inst_39479__$1 = tmp39613;
var inst_39480__$1 = tmp39614;
var inst_39481__$1 = inst_39497;
var state_39601__$1 = (function (){var statearr_39620 = state_39601;
(statearr_39620[(13)] = inst_39479__$1);

(statearr_39620[(14)] = inst_39480__$1);

(statearr_39620[(18)] = inst_39496);

(statearr_39620[(16)] = inst_39478__$1);

(statearr_39620[(17)] = inst_39481__$1);

return statearr_39620;
})();
var statearr_39621_39700 = state_39601__$1;
(statearr_39621_39700[(2)] = null);

(statearr_39621_39700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (21))){
var inst_39523 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39625_39701 = state_39601__$1;
(statearr_39625_39701[(2)] = inst_39523);

(statearr_39625_39701[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (31))){
var inst_39549 = (state_39601[(12)]);
var inst_39553 = done.call(null,null);
var inst_39554 = cljs.core.async.untap_STAR_.call(null,m,inst_39549);
var state_39601__$1 = (function (){var statearr_39626 = state_39601;
(statearr_39626[(19)] = inst_39553);

return statearr_39626;
})();
var statearr_39627_39702 = state_39601__$1;
(statearr_39627_39702[(2)] = inst_39554);

(statearr_39627_39702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (32))){
var inst_39543 = (state_39601[(20)]);
var inst_39541 = (state_39601[(21)]);
var inst_39544 = (state_39601[(9)]);
var inst_39542 = (state_39601[(11)]);
var inst_39556 = (state_39601[(2)]);
var inst_39557 = (inst_39544 + (1));
var tmp39622 = inst_39543;
var tmp39623 = inst_39541;
var tmp39624 = inst_39542;
var inst_39541__$1 = tmp39623;
var inst_39542__$1 = tmp39624;
var inst_39543__$1 = tmp39622;
var inst_39544__$1 = inst_39557;
var state_39601__$1 = (function (){var statearr_39628 = state_39601;
(statearr_39628[(20)] = inst_39543__$1);

(statearr_39628[(22)] = inst_39556);

(statearr_39628[(21)] = inst_39541__$1);

(statearr_39628[(9)] = inst_39544__$1);

(statearr_39628[(11)] = inst_39542__$1);

return statearr_39628;
})();
var statearr_39629_39703 = state_39601__$1;
(statearr_39629_39703[(2)] = null);

(statearr_39629_39703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (40))){
var inst_39569 = (state_39601[(23)]);
var inst_39573 = done.call(null,null);
var inst_39574 = cljs.core.async.untap_STAR_.call(null,m,inst_39569);
var state_39601__$1 = (function (){var statearr_39630 = state_39601;
(statearr_39630[(24)] = inst_39573);

return statearr_39630;
})();
var statearr_39631_39704 = state_39601__$1;
(statearr_39631_39704[(2)] = inst_39574);

(statearr_39631_39704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (33))){
var inst_39560 = (state_39601[(25)]);
var inst_39562 = cljs.core.chunked_seq_QMARK_.call(null,inst_39560);
var state_39601__$1 = state_39601;
if(inst_39562){
var statearr_39632_39705 = state_39601__$1;
(statearr_39632_39705[(1)] = (36));

} else {
var statearr_39633_39706 = state_39601__$1;
(statearr_39633_39706[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (13))){
var inst_39490 = (state_39601[(26)]);
var inst_39493 = cljs.core.async.close_BANG_.call(null,inst_39490);
var state_39601__$1 = state_39601;
var statearr_39634_39707 = state_39601__$1;
(statearr_39634_39707[(2)] = inst_39493);

(statearr_39634_39707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (22))){
var inst_39513 = (state_39601[(8)]);
var inst_39516 = cljs.core.async.close_BANG_.call(null,inst_39513);
var state_39601__$1 = state_39601;
var statearr_39635_39708 = state_39601__$1;
(statearr_39635_39708[(2)] = inst_39516);

(statearr_39635_39708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (36))){
var inst_39560 = (state_39601[(25)]);
var inst_39564 = cljs.core.chunk_first.call(null,inst_39560);
var inst_39565 = cljs.core.chunk_rest.call(null,inst_39560);
var inst_39566 = cljs.core.count.call(null,inst_39564);
var inst_39541 = inst_39565;
var inst_39542 = inst_39564;
var inst_39543 = inst_39566;
var inst_39544 = (0);
var state_39601__$1 = (function (){var statearr_39636 = state_39601;
(statearr_39636[(20)] = inst_39543);

(statearr_39636[(21)] = inst_39541);

(statearr_39636[(9)] = inst_39544);

(statearr_39636[(11)] = inst_39542);

return statearr_39636;
})();
var statearr_39637_39709 = state_39601__$1;
(statearr_39637_39709[(2)] = null);

(statearr_39637_39709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (41))){
var inst_39560 = (state_39601[(25)]);
var inst_39576 = (state_39601[(2)]);
var inst_39577 = cljs.core.next.call(null,inst_39560);
var inst_39541 = inst_39577;
var inst_39542 = null;
var inst_39543 = (0);
var inst_39544 = (0);
var state_39601__$1 = (function (){var statearr_39638 = state_39601;
(statearr_39638[(27)] = inst_39576);

(statearr_39638[(20)] = inst_39543);

(statearr_39638[(21)] = inst_39541);

(statearr_39638[(9)] = inst_39544);

(statearr_39638[(11)] = inst_39542);

return statearr_39638;
})();
var statearr_39639_39710 = state_39601__$1;
(statearr_39639_39710[(2)] = null);

(statearr_39639_39710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (43))){
var state_39601__$1 = state_39601;
var statearr_39640_39711 = state_39601__$1;
(statearr_39640_39711[(2)] = null);

(statearr_39640_39711[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (29))){
var inst_39585 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39641_39712 = state_39601__$1;
(statearr_39641_39712[(2)] = inst_39585);

(statearr_39641_39712[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (44))){
var inst_39594 = (state_39601[(2)]);
var state_39601__$1 = (function (){var statearr_39642 = state_39601;
(statearr_39642[(28)] = inst_39594);

return statearr_39642;
})();
var statearr_39643_39713 = state_39601__$1;
(statearr_39643_39713[(2)] = null);

(statearr_39643_39713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (6))){
var inst_39533 = (state_39601[(29)]);
var inst_39532 = cljs.core.deref.call(null,cs);
var inst_39533__$1 = cljs.core.keys.call(null,inst_39532);
var inst_39534 = cljs.core.count.call(null,inst_39533__$1);
var inst_39535 = cljs.core.reset_BANG_.call(null,dctr,inst_39534);
var inst_39540 = cljs.core.seq.call(null,inst_39533__$1);
var inst_39541 = inst_39540;
var inst_39542 = null;
var inst_39543 = (0);
var inst_39544 = (0);
var state_39601__$1 = (function (){var statearr_39644 = state_39601;
(statearr_39644[(20)] = inst_39543);

(statearr_39644[(21)] = inst_39541);

(statearr_39644[(29)] = inst_39533__$1);

(statearr_39644[(30)] = inst_39535);

(statearr_39644[(9)] = inst_39544);

(statearr_39644[(11)] = inst_39542);

return statearr_39644;
})();
var statearr_39645_39714 = state_39601__$1;
(statearr_39645_39714[(2)] = null);

(statearr_39645_39714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (28))){
var inst_39541 = (state_39601[(21)]);
var inst_39560 = (state_39601[(25)]);
var inst_39560__$1 = cljs.core.seq.call(null,inst_39541);
var state_39601__$1 = (function (){var statearr_39646 = state_39601;
(statearr_39646[(25)] = inst_39560__$1);

return statearr_39646;
})();
if(inst_39560__$1){
var statearr_39647_39715 = state_39601__$1;
(statearr_39647_39715[(1)] = (33));

} else {
var statearr_39648_39716 = state_39601__$1;
(statearr_39648_39716[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (25))){
var inst_39543 = (state_39601[(20)]);
var inst_39544 = (state_39601[(9)]);
var inst_39546 = (inst_39544 < inst_39543);
var inst_39547 = inst_39546;
var state_39601__$1 = state_39601;
if(cljs.core.truth_(inst_39547)){
var statearr_39649_39717 = state_39601__$1;
(statearr_39649_39717[(1)] = (27));

} else {
var statearr_39650_39718 = state_39601__$1;
(statearr_39650_39718[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (34))){
var state_39601__$1 = state_39601;
var statearr_39651_39719 = state_39601__$1;
(statearr_39651_39719[(2)] = null);

(statearr_39651_39719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (17))){
var state_39601__$1 = state_39601;
var statearr_39652_39720 = state_39601__$1;
(statearr_39652_39720[(2)] = null);

(statearr_39652_39720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (3))){
var inst_39599 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39601__$1,inst_39599);
} else {
if((state_val_39602 === (12))){
var inst_39528 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39653_39721 = state_39601__$1;
(statearr_39653_39721[(2)] = inst_39528);

(statearr_39653_39721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (2))){
var state_39601__$1 = state_39601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39601__$1,(4),ch);
} else {
if((state_val_39602 === (23))){
var state_39601__$1 = state_39601;
var statearr_39654_39722 = state_39601__$1;
(statearr_39654_39722[(2)] = null);

(statearr_39654_39722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (35))){
var inst_39583 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39655_39723 = state_39601__$1;
(statearr_39655_39723[(2)] = inst_39583);

(statearr_39655_39723[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (19))){
var inst_39500 = (state_39601[(7)]);
var inst_39504 = cljs.core.chunk_first.call(null,inst_39500);
var inst_39505 = cljs.core.chunk_rest.call(null,inst_39500);
var inst_39506 = cljs.core.count.call(null,inst_39504);
var inst_39478 = inst_39505;
var inst_39479 = inst_39504;
var inst_39480 = inst_39506;
var inst_39481 = (0);
var state_39601__$1 = (function (){var statearr_39656 = state_39601;
(statearr_39656[(13)] = inst_39479);

(statearr_39656[(14)] = inst_39480);

(statearr_39656[(16)] = inst_39478);

(statearr_39656[(17)] = inst_39481);

return statearr_39656;
})();
var statearr_39657_39724 = state_39601__$1;
(statearr_39657_39724[(2)] = null);

(statearr_39657_39724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (11))){
var inst_39478 = (state_39601[(16)]);
var inst_39500 = (state_39601[(7)]);
var inst_39500__$1 = cljs.core.seq.call(null,inst_39478);
var state_39601__$1 = (function (){var statearr_39658 = state_39601;
(statearr_39658[(7)] = inst_39500__$1);

return statearr_39658;
})();
if(inst_39500__$1){
var statearr_39659_39725 = state_39601__$1;
(statearr_39659_39725[(1)] = (16));

} else {
var statearr_39660_39726 = state_39601__$1;
(statearr_39660_39726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (9))){
var inst_39530 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39661_39727 = state_39601__$1;
(statearr_39661_39727[(2)] = inst_39530);

(statearr_39661_39727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (5))){
var inst_39476 = cljs.core.deref.call(null,cs);
var inst_39477 = cljs.core.seq.call(null,inst_39476);
var inst_39478 = inst_39477;
var inst_39479 = null;
var inst_39480 = (0);
var inst_39481 = (0);
var state_39601__$1 = (function (){var statearr_39662 = state_39601;
(statearr_39662[(13)] = inst_39479);

(statearr_39662[(14)] = inst_39480);

(statearr_39662[(16)] = inst_39478);

(statearr_39662[(17)] = inst_39481);

return statearr_39662;
})();
var statearr_39663_39728 = state_39601__$1;
(statearr_39663_39728[(2)] = null);

(statearr_39663_39728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (14))){
var state_39601__$1 = state_39601;
var statearr_39664_39729 = state_39601__$1;
(statearr_39664_39729[(2)] = null);

(statearr_39664_39729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (45))){
var inst_39591 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39665_39730 = state_39601__$1;
(statearr_39665_39730[(2)] = inst_39591);

(statearr_39665_39730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (26))){
var inst_39533 = (state_39601[(29)]);
var inst_39587 = (state_39601[(2)]);
var inst_39588 = cljs.core.seq.call(null,inst_39533);
var state_39601__$1 = (function (){var statearr_39666 = state_39601;
(statearr_39666[(31)] = inst_39587);

return statearr_39666;
})();
if(inst_39588){
var statearr_39667_39731 = state_39601__$1;
(statearr_39667_39731[(1)] = (42));

} else {
var statearr_39668_39732 = state_39601__$1;
(statearr_39668_39732[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (16))){
var inst_39500 = (state_39601[(7)]);
var inst_39502 = cljs.core.chunked_seq_QMARK_.call(null,inst_39500);
var state_39601__$1 = state_39601;
if(inst_39502){
var statearr_39669_39733 = state_39601__$1;
(statearr_39669_39733[(1)] = (19));

} else {
var statearr_39670_39734 = state_39601__$1;
(statearr_39670_39734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (38))){
var inst_39580 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39671_39735 = state_39601__$1;
(statearr_39671_39735[(2)] = inst_39580);

(statearr_39671_39735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (30))){
var state_39601__$1 = state_39601;
var statearr_39672_39736 = state_39601__$1;
(statearr_39672_39736[(2)] = null);

(statearr_39672_39736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (10))){
var inst_39479 = (state_39601[(13)]);
var inst_39481 = (state_39601[(17)]);
var inst_39489 = cljs.core._nth.call(null,inst_39479,inst_39481);
var inst_39490 = cljs.core.nth.call(null,inst_39489,(0),null);
var inst_39491 = cljs.core.nth.call(null,inst_39489,(1),null);
var state_39601__$1 = (function (){var statearr_39673 = state_39601;
(statearr_39673[(26)] = inst_39490);

return statearr_39673;
})();
if(cljs.core.truth_(inst_39491)){
var statearr_39674_39737 = state_39601__$1;
(statearr_39674_39737[(1)] = (13));

} else {
var statearr_39675_39738 = state_39601__$1;
(statearr_39675_39738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (18))){
var inst_39526 = (state_39601[(2)]);
var state_39601__$1 = state_39601;
var statearr_39676_39739 = state_39601__$1;
(statearr_39676_39739[(2)] = inst_39526);

(statearr_39676_39739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (42))){
var state_39601__$1 = state_39601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39601__$1,(45),dchan);
} else {
if((state_val_39602 === (37))){
var inst_39560 = (state_39601[(25)]);
var inst_39469 = (state_39601[(10)]);
var inst_39569 = (state_39601[(23)]);
var inst_39569__$1 = cljs.core.first.call(null,inst_39560);
var inst_39570 = cljs.core.async.put_BANG_.call(null,inst_39569__$1,inst_39469,done);
var state_39601__$1 = (function (){var statearr_39677 = state_39601;
(statearr_39677[(23)] = inst_39569__$1);

return statearr_39677;
})();
if(cljs.core.truth_(inst_39570)){
var statearr_39678_39740 = state_39601__$1;
(statearr_39678_39740[(1)] = (39));

} else {
var statearr_39679_39741 = state_39601__$1;
(statearr_39679_39741[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39602 === (8))){
var inst_39480 = (state_39601[(14)]);
var inst_39481 = (state_39601[(17)]);
var inst_39483 = (inst_39481 < inst_39480);
var inst_39484 = inst_39483;
var state_39601__$1 = state_39601;
if(cljs.core.truth_(inst_39484)){
var statearr_39680_39742 = state_39601__$1;
(statearr_39680_39742[(1)] = (10));

} else {
var statearr_39681_39743 = state_39601__$1;
(statearr_39681_39743[(1)] = (11));

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
});})(c__38336__auto___39689,cs,m,dchan,dctr,done))
;
return ((function (switch__38224__auto__,c__38336__auto___39689,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38225__auto__ = null;
var cljs$core$async$mult_$_state_machine__38225__auto____0 = (function (){
var statearr_39685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39685[(0)] = cljs$core$async$mult_$_state_machine__38225__auto__);

(statearr_39685[(1)] = (1));

return statearr_39685;
});
var cljs$core$async$mult_$_state_machine__38225__auto____1 = (function (state_39601){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_39601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e39686){if((e39686 instanceof Object)){
var ex__38228__auto__ = e39686;
var statearr_39687_39744 = state_39601;
(statearr_39687_39744[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39745 = state_39601;
state_39601 = G__39745;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38225__auto__ = function(state_39601){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38225__auto____1.call(this,state_39601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38225__auto____0;
cljs$core$async$mult_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38225__auto____1;
return cljs$core$async$mult_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___39689,cs,m,dchan,dctr,done))
})();
var state__38338__auto__ = (function (){var statearr_39688 = f__38337__auto__.call(null);
(statearr_39688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___39689);

return statearr_39688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___39689,cs,m,dchan,dctr,done))
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
var args39746 = [];
var len__31335__auto___39749 = arguments.length;
var i__31336__auto___39750 = (0);
while(true){
if((i__31336__auto___39750 < len__31335__auto___39749)){
args39746.push((arguments[i__31336__auto___39750]));

var G__39751 = (i__31336__auto___39750 + (1));
i__31336__auto___39750 = G__39751;
continue;
} else {
}
break;
}

var G__39748 = args39746.length;
switch (G__39748) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39746.length)].join('')));

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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,ch);
} else {
var m__30891__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,ch);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,ch);
} else {
var m__30891__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,ch);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m);
} else {
var m__30891__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,state_map);
} else {
var m__30891__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,state_map);
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
var x__30890__auto__ = (((m == null))?null:m);
var m__30891__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,m,mode);
} else {
var m__30891__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31342__auto__ = [];
var len__31335__auto___39763 = arguments.length;
var i__31336__auto___39764 = (0);
while(true){
if((i__31336__auto___39764 < len__31335__auto___39763)){
args__31342__auto__.push((arguments[i__31336__auto___39764]));

var G__39765 = (i__31336__auto___39764 + (1));
i__31336__auto___39764 = G__39765;
continue;
} else {
}
break;
}

var argseq__31343__auto__ = ((((3) < args__31342__auto__.length))?(new cljs.core.IndexedSeq(args__31342__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31343__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39757){
var map__39758 = p__39757;
var map__39758__$1 = ((((!((map__39758 == null)))?((((map__39758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39758):map__39758);
var opts = map__39758__$1;
var statearr_39760_39766 = state;
(statearr_39760_39766[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39758,map__39758__$1,opts){
return (function (val){
var statearr_39761_39767 = state;
(statearr_39761_39767[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39758,map__39758__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39762_39768 = state;
(statearr_39762_39768[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39753){
var G__39754 = cljs.core.first.call(null,seq39753);
var seq39753__$1 = cljs.core.next.call(null,seq39753);
var G__39755 = cljs.core.first.call(null,seq39753__$1);
var seq39753__$2 = cljs.core.next.call(null,seq39753__$1);
var G__39756 = cljs.core.first.call(null,seq39753__$2);
var seq39753__$3 = cljs.core.next.call(null,seq39753__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39754,G__39755,G__39756,seq39753__$3);
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
if(typeof cljs.core.async.t_cljs$core$async39936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39936 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39937){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39937 = meta39937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39938,meta39937__$1){
var self__ = this;
var _39938__$1 = this;
return (new cljs.core.async.t_cljs$core$async39936(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39937__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39938){
var self__ = this;
var _39938__$1 = this;
return self__.meta39937;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39937","meta39937",-1213837901,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39936.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39936";

cljs.core.async.t_cljs$core$async39936.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async39936");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39936 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39936(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39937){
return (new cljs.core.async.t_cljs$core$async39936(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39937));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39936(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38336__auto___40103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40040){
var state_val_40041 = (state_40040[(1)]);
if((state_val_40041 === (7))){
var inst_39955 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
var statearr_40042_40104 = state_40040__$1;
(statearr_40042_40104[(2)] = inst_39955);

(statearr_40042_40104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (20))){
var inst_39967 = (state_40040[(7)]);
var state_40040__$1 = state_40040;
var statearr_40043_40105 = state_40040__$1;
(statearr_40043_40105[(2)] = inst_39967);

(statearr_40043_40105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (27))){
var state_40040__$1 = state_40040;
var statearr_40044_40106 = state_40040__$1;
(statearr_40044_40106[(2)] = null);

(statearr_40044_40106[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (1))){
var inst_39942 = (state_40040[(8)]);
var inst_39942__$1 = calc_state.call(null);
var inst_39944 = (inst_39942__$1 == null);
var inst_39945 = cljs.core.not.call(null,inst_39944);
var state_40040__$1 = (function (){var statearr_40045 = state_40040;
(statearr_40045[(8)] = inst_39942__$1);

return statearr_40045;
})();
if(inst_39945){
var statearr_40046_40107 = state_40040__$1;
(statearr_40046_40107[(1)] = (2));

} else {
var statearr_40047_40108 = state_40040__$1;
(statearr_40047_40108[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (24))){
var inst_40014 = (state_40040[(9)]);
var inst_40000 = (state_40040[(10)]);
var inst_39991 = (state_40040[(11)]);
var inst_40014__$1 = inst_39991.call(null,inst_40000);
var state_40040__$1 = (function (){var statearr_40048 = state_40040;
(statearr_40048[(9)] = inst_40014__$1);

return statearr_40048;
})();
if(cljs.core.truth_(inst_40014__$1)){
var statearr_40049_40109 = state_40040__$1;
(statearr_40049_40109[(1)] = (29));

} else {
var statearr_40050_40110 = state_40040__$1;
(statearr_40050_40110[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (4))){
var inst_39958 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_39958)){
var statearr_40051_40111 = state_40040__$1;
(statearr_40051_40111[(1)] = (8));

} else {
var statearr_40052_40112 = state_40040__$1;
(statearr_40052_40112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (15))){
var inst_39985 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_39985)){
var statearr_40053_40113 = state_40040__$1;
(statearr_40053_40113[(1)] = (19));

} else {
var statearr_40054_40114 = state_40040__$1;
(statearr_40054_40114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (21))){
var inst_39990 = (state_40040[(12)]);
var inst_39990__$1 = (state_40040[(2)]);
var inst_39991 = cljs.core.get.call(null,inst_39990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39992 = cljs.core.get.call(null,inst_39990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39993 = cljs.core.get.call(null,inst_39990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40040__$1 = (function (){var statearr_40055 = state_40040;
(statearr_40055[(13)] = inst_39992);

(statearr_40055[(12)] = inst_39990__$1);

(statearr_40055[(11)] = inst_39991);

return statearr_40055;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40040__$1,(22),inst_39993);
} else {
if((state_val_40041 === (31))){
var inst_40022 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_40022)){
var statearr_40056_40115 = state_40040__$1;
(statearr_40056_40115[(1)] = (32));

} else {
var statearr_40057_40116 = state_40040__$1;
(statearr_40057_40116[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (32))){
var inst_39999 = (state_40040[(14)]);
var state_40040__$1 = state_40040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40040__$1,(35),out,inst_39999);
} else {
if((state_val_40041 === (33))){
var inst_39990 = (state_40040[(12)]);
var inst_39967 = inst_39990;
var state_40040__$1 = (function (){var statearr_40058 = state_40040;
(statearr_40058[(7)] = inst_39967);

return statearr_40058;
})();
var statearr_40059_40117 = state_40040__$1;
(statearr_40059_40117[(2)] = null);

(statearr_40059_40117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (13))){
var inst_39967 = (state_40040[(7)]);
var inst_39974 = inst_39967.cljs$lang$protocol_mask$partition0$;
var inst_39975 = (inst_39974 & (64));
var inst_39976 = inst_39967.cljs$core$ISeq$;
var inst_39977 = (cljs.core.PROTOCOL_SENTINEL === inst_39976);
var inst_39978 = (inst_39975) || (inst_39977);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_39978)){
var statearr_40060_40118 = state_40040__$1;
(statearr_40060_40118[(1)] = (16));

} else {
var statearr_40061_40119 = state_40040__$1;
(statearr_40061_40119[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (22))){
var inst_39999 = (state_40040[(14)]);
var inst_40000 = (state_40040[(10)]);
var inst_39998 = (state_40040[(2)]);
var inst_39999__$1 = cljs.core.nth.call(null,inst_39998,(0),null);
var inst_40000__$1 = cljs.core.nth.call(null,inst_39998,(1),null);
var inst_40001 = (inst_39999__$1 == null);
var inst_40002 = cljs.core._EQ_.call(null,inst_40000__$1,change);
var inst_40003 = (inst_40001) || (inst_40002);
var state_40040__$1 = (function (){var statearr_40062 = state_40040;
(statearr_40062[(14)] = inst_39999__$1);

(statearr_40062[(10)] = inst_40000__$1);

return statearr_40062;
})();
if(cljs.core.truth_(inst_40003)){
var statearr_40063_40120 = state_40040__$1;
(statearr_40063_40120[(1)] = (23));

} else {
var statearr_40064_40121 = state_40040__$1;
(statearr_40064_40121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (36))){
var inst_39990 = (state_40040[(12)]);
var inst_39967 = inst_39990;
var state_40040__$1 = (function (){var statearr_40065 = state_40040;
(statearr_40065[(7)] = inst_39967);

return statearr_40065;
})();
var statearr_40066_40122 = state_40040__$1;
(statearr_40066_40122[(2)] = null);

(statearr_40066_40122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (29))){
var inst_40014 = (state_40040[(9)]);
var state_40040__$1 = state_40040;
var statearr_40067_40123 = state_40040__$1;
(statearr_40067_40123[(2)] = inst_40014);

(statearr_40067_40123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (6))){
var state_40040__$1 = state_40040;
var statearr_40068_40124 = state_40040__$1;
(statearr_40068_40124[(2)] = false);

(statearr_40068_40124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (28))){
var inst_40010 = (state_40040[(2)]);
var inst_40011 = calc_state.call(null);
var inst_39967 = inst_40011;
var state_40040__$1 = (function (){var statearr_40069 = state_40040;
(statearr_40069[(15)] = inst_40010);

(statearr_40069[(7)] = inst_39967);

return statearr_40069;
})();
var statearr_40070_40125 = state_40040__$1;
(statearr_40070_40125[(2)] = null);

(statearr_40070_40125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (25))){
var inst_40036 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
var statearr_40071_40126 = state_40040__$1;
(statearr_40071_40126[(2)] = inst_40036);

(statearr_40071_40126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (34))){
var inst_40034 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
var statearr_40072_40127 = state_40040__$1;
(statearr_40072_40127[(2)] = inst_40034);

(statearr_40072_40127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (17))){
var state_40040__$1 = state_40040;
var statearr_40073_40128 = state_40040__$1;
(statearr_40073_40128[(2)] = false);

(statearr_40073_40128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (3))){
var state_40040__$1 = state_40040;
var statearr_40074_40129 = state_40040__$1;
(statearr_40074_40129[(2)] = false);

(statearr_40074_40129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (12))){
var inst_40038 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40040__$1,inst_40038);
} else {
if((state_val_40041 === (2))){
var inst_39942 = (state_40040[(8)]);
var inst_39947 = inst_39942.cljs$lang$protocol_mask$partition0$;
var inst_39948 = (inst_39947 & (64));
var inst_39949 = inst_39942.cljs$core$ISeq$;
var inst_39950 = (cljs.core.PROTOCOL_SENTINEL === inst_39949);
var inst_39951 = (inst_39948) || (inst_39950);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_39951)){
var statearr_40075_40130 = state_40040__$1;
(statearr_40075_40130[(1)] = (5));

} else {
var statearr_40076_40131 = state_40040__$1;
(statearr_40076_40131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (23))){
var inst_39999 = (state_40040[(14)]);
var inst_40005 = (inst_39999 == null);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_40005)){
var statearr_40077_40132 = state_40040__$1;
(statearr_40077_40132[(1)] = (26));

} else {
var statearr_40078_40133 = state_40040__$1;
(statearr_40078_40133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (35))){
var inst_40025 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
if(cljs.core.truth_(inst_40025)){
var statearr_40079_40134 = state_40040__$1;
(statearr_40079_40134[(1)] = (36));

} else {
var statearr_40080_40135 = state_40040__$1;
(statearr_40080_40135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (19))){
var inst_39967 = (state_40040[(7)]);
var inst_39987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39967);
var state_40040__$1 = state_40040;
var statearr_40081_40136 = state_40040__$1;
(statearr_40081_40136[(2)] = inst_39987);

(statearr_40081_40136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (11))){
var inst_39967 = (state_40040[(7)]);
var inst_39971 = (inst_39967 == null);
var inst_39972 = cljs.core.not.call(null,inst_39971);
var state_40040__$1 = state_40040;
if(inst_39972){
var statearr_40082_40137 = state_40040__$1;
(statearr_40082_40137[(1)] = (13));

} else {
var statearr_40083_40138 = state_40040__$1;
(statearr_40083_40138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (9))){
var inst_39942 = (state_40040[(8)]);
var state_40040__$1 = state_40040;
var statearr_40084_40139 = state_40040__$1;
(statearr_40084_40139[(2)] = inst_39942);

(statearr_40084_40139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (5))){
var state_40040__$1 = state_40040;
var statearr_40085_40140 = state_40040__$1;
(statearr_40085_40140[(2)] = true);

(statearr_40085_40140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (14))){
var state_40040__$1 = state_40040;
var statearr_40086_40141 = state_40040__$1;
(statearr_40086_40141[(2)] = false);

(statearr_40086_40141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (26))){
var inst_40000 = (state_40040[(10)]);
var inst_40007 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40000);
var state_40040__$1 = state_40040;
var statearr_40087_40142 = state_40040__$1;
(statearr_40087_40142[(2)] = inst_40007);

(statearr_40087_40142[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (16))){
var state_40040__$1 = state_40040;
var statearr_40088_40143 = state_40040__$1;
(statearr_40088_40143[(2)] = true);

(statearr_40088_40143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (38))){
var inst_40030 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
var statearr_40089_40144 = state_40040__$1;
(statearr_40089_40144[(2)] = inst_40030);

(statearr_40089_40144[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (30))){
var inst_39992 = (state_40040[(13)]);
var inst_40000 = (state_40040[(10)]);
var inst_39991 = (state_40040[(11)]);
var inst_40017 = cljs.core.empty_QMARK_.call(null,inst_39991);
var inst_40018 = inst_39992.call(null,inst_40000);
var inst_40019 = cljs.core.not.call(null,inst_40018);
var inst_40020 = (inst_40017) && (inst_40019);
var state_40040__$1 = state_40040;
var statearr_40090_40145 = state_40040__$1;
(statearr_40090_40145[(2)] = inst_40020);

(statearr_40090_40145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (10))){
var inst_39942 = (state_40040[(8)]);
var inst_39963 = (state_40040[(2)]);
var inst_39964 = cljs.core.get.call(null,inst_39963,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39965 = cljs.core.get.call(null,inst_39963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39966 = cljs.core.get.call(null,inst_39963,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39967 = inst_39942;
var state_40040__$1 = (function (){var statearr_40091 = state_40040;
(statearr_40091[(16)] = inst_39966);

(statearr_40091[(17)] = inst_39965);

(statearr_40091[(18)] = inst_39964);

(statearr_40091[(7)] = inst_39967);

return statearr_40091;
})();
var statearr_40092_40146 = state_40040__$1;
(statearr_40092_40146[(2)] = null);

(statearr_40092_40146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (18))){
var inst_39982 = (state_40040[(2)]);
var state_40040__$1 = state_40040;
var statearr_40093_40147 = state_40040__$1;
(statearr_40093_40147[(2)] = inst_39982);

(statearr_40093_40147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (37))){
var state_40040__$1 = state_40040;
var statearr_40094_40148 = state_40040__$1;
(statearr_40094_40148[(2)] = null);

(statearr_40094_40148[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40041 === (8))){
var inst_39942 = (state_40040[(8)]);
var inst_39960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39942);
var state_40040__$1 = state_40040;
var statearr_40095_40149 = state_40040__$1;
(statearr_40095_40149[(2)] = inst_39960);

(statearr_40095_40149[(1)] = (10));


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
});})(c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38224__auto__,c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38225__auto__ = null;
var cljs$core$async$mix_$_state_machine__38225__auto____0 = (function (){
var statearr_40099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40099[(0)] = cljs$core$async$mix_$_state_machine__38225__auto__);

(statearr_40099[(1)] = (1));

return statearr_40099;
});
var cljs$core$async$mix_$_state_machine__38225__auto____1 = (function (state_40040){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40100){if((e40100 instanceof Object)){
var ex__38228__auto__ = e40100;
var statearr_40101_40150 = state_40040;
(statearr_40101_40150[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40151 = state_40040;
state_40040 = G__40151;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38225__auto__ = function(state_40040){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38225__auto____1.call(this,state_40040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38225__auto____0;
cljs$core$async$mix_$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38225__auto____1;
return cljs$core$async$mix_$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38338__auto__ = (function (){var statearr_40102 = f__38337__auto__.call(null);
(statearr_40102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40103);

return statearr_40102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40103,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30890__auto__ = (((p == null))?null:p);
var m__30891__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30891__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30890__auto__ = (((p == null))?null:p);
var m__30891__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,p,v,ch);
} else {
var m__30891__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40152 = [];
var len__31335__auto___40155 = arguments.length;
var i__31336__auto___40156 = (0);
while(true){
if((i__31336__auto___40156 < len__31335__auto___40155)){
args40152.push((arguments[i__31336__auto___40156]));

var G__40157 = (i__31336__auto___40156 + (1));
i__31336__auto___40156 = G__40157;
continue;
} else {
}
break;
}

var G__40154 = args40152.length;
switch (G__40154) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40152.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30890__auto__ = (((p == null))?null:p);
var m__30891__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,p);
} else {
var m__30891__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,p);
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
var x__30890__auto__ = (((p == null))?null:p);
var m__30891__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,p,v);
} else {
var m__30891__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,p,v);
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
var args40160 = [];
var len__31335__auto___40285 = arguments.length;
var i__31336__auto___40286 = (0);
while(true){
if((i__31336__auto___40286 < len__31335__auto___40285)){
args40160.push((arguments[i__31336__auto___40286]));

var G__40287 = (i__31336__auto___40286 + (1));
i__31336__auto___40286 = G__40287;
continue;
} else {
}
break;
}

var G__40162 = args40160.length;
switch (G__40162) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40160.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30227__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30227__auto__,mults){
return (function (p1__40159_SHARP_){
if(cljs.core.truth_(p1__40159_SHARP_.call(null,topic))){
return p1__40159_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40159_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30227__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40163 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40164){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40164 = meta40164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40165,meta40164__$1){
var self__ = this;
var _40165__$1 = this;
return (new cljs.core.async.t_cljs$core$async40163(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40164__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40165){
var self__ = this;
var _40165__$1 = this;
return self__.meta40164;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40164","meta40164",-1413164704,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40163";

cljs.core.async.t_cljs$core$async40163.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async40163");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40163 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40164){
return (new cljs.core.async.t_cljs$core$async40163(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40164));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40163(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38336__auto___40289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40289,mults,ensure_mult,p){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40289,mults,ensure_mult,p){
return (function (state_40237){
var state_val_40238 = (state_40237[(1)]);
if((state_val_40238 === (7))){
var inst_40233 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40239_40290 = state_40237__$1;
(statearr_40239_40290[(2)] = inst_40233);

(statearr_40239_40290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (20))){
var state_40237__$1 = state_40237;
var statearr_40240_40291 = state_40237__$1;
(statearr_40240_40291[(2)] = null);

(statearr_40240_40291[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (1))){
var state_40237__$1 = state_40237;
var statearr_40241_40292 = state_40237__$1;
(statearr_40241_40292[(2)] = null);

(statearr_40241_40292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (24))){
var inst_40216 = (state_40237[(7)]);
var inst_40225 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40216);
var state_40237__$1 = state_40237;
var statearr_40242_40293 = state_40237__$1;
(statearr_40242_40293[(2)] = inst_40225);

(statearr_40242_40293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (4))){
var inst_40168 = (state_40237[(8)]);
var inst_40168__$1 = (state_40237[(2)]);
var inst_40169 = (inst_40168__$1 == null);
var state_40237__$1 = (function (){var statearr_40243 = state_40237;
(statearr_40243[(8)] = inst_40168__$1);

return statearr_40243;
})();
if(cljs.core.truth_(inst_40169)){
var statearr_40244_40294 = state_40237__$1;
(statearr_40244_40294[(1)] = (5));

} else {
var statearr_40245_40295 = state_40237__$1;
(statearr_40245_40295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (15))){
var inst_40210 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40246_40296 = state_40237__$1;
(statearr_40246_40296[(2)] = inst_40210);

(statearr_40246_40296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (21))){
var inst_40230 = (state_40237[(2)]);
var state_40237__$1 = (function (){var statearr_40247 = state_40237;
(statearr_40247[(9)] = inst_40230);

return statearr_40247;
})();
var statearr_40248_40297 = state_40237__$1;
(statearr_40248_40297[(2)] = null);

(statearr_40248_40297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (13))){
var inst_40192 = (state_40237[(10)]);
var inst_40194 = cljs.core.chunked_seq_QMARK_.call(null,inst_40192);
var state_40237__$1 = state_40237;
if(inst_40194){
var statearr_40249_40298 = state_40237__$1;
(statearr_40249_40298[(1)] = (16));

} else {
var statearr_40250_40299 = state_40237__$1;
(statearr_40250_40299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (22))){
var inst_40222 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
if(cljs.core.truth_(inst_40222)){
var statearr_40251_40300 = state_40237__$1;
(statearr_40251_40300[(1)] = (23));

} else {
var statearr_40252_40301 = state_40237__$1;
(statearr_40252_40301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (6))){
var inst_40216 = (state_40237[(7)]);
var inst_40218 = (state_40237[(11)]);
var inst_40168 = (state_40237[(8)]);
var inst_40216__$1 = topic_fn.call(null,inst_40168);
var inst_40217 = cljs.core.deref.call(null,mults);
var inst_40218__$1 = cljs.core.get.call(null,inst_40217,inst_40216__$1);
var state_40237__$1 = (function (){var statearr_40253 = state_40237;
(statearr_40253[(7)] = inst_40216__$1);

(statearr_40253[(11)] = inst_40218__$1);

return statearr_40253;
})();
if(cljs.core.truth_(inst_40218__$1)){
var statearr_40254_40302 = state_40237__$1;
(statearr_40254_40302[(1)] = (19));

} else {
var statearr_40255_40303 = state_40237__$1;
(statearr_40255_40303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (25))){
var inst_40227 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40256_40304 = state_40237__$1;
(statearr_40256_40304[(2)] = inst_40227);

(statearr_40256_40304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (17))){
var inst_40192 = (state_40237[(10)]);
var inst_40201 = cljs.core.first.call(null,inst_40192);
var inst_40202 = cljs.core.async.muxch_STAR_.call(null,inst_40201);
var inst_40203 = cljs.core.async.close_BANG_.call(null,inst_40202);
var inst_40204 = cljs.core.next.call(null,inst_40192);
var inst_40178 = inst_40204;
var inst_40179 = null;
var inst_40180 = (0);
var inst_40181 = (0);
var state_40237__$1 = (function (){var statearr_40257 = state_40237;
(statearr_40257[(12)] = inst_40181);

(statearr_40257[(13)] = inst_40203);

(statearr_40257[(14)] = inst_40179);

(statearr_40257[(15)] = inst_40180);

(statearr_40257[(16)] = inst_40178);

return statearr_40257;
})();
var statearr_40258_40305 = state_40237__$1;
(statearr_40258_40305[(2)] = null);

(statearr_40258_40305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (3))){
var inst_40235 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40237__$1,inst_40235);
} else {
if((state_val_40238 === (12))){
var inst_40212 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40259_40306 = state_40237__$1;
(statearr_40259_40306[(2)] = inst_40212);

(statearr_40259_40306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (2))){
var state_40237__$1 = state_40237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40237__$1,(4),ch);
} else {
if((state_val_40238 === (23))){
var state_40237__$1 = state_40237;
var statearr_40260_40307 = state_40237__$1;
(statearr_40260_40307[(2)] = null);

(statearr_40260_40307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (19))){
var inst_40218 = (state_40237[(11)]);
var inst_40168 = (state_40237[(8)]);
var inst_40220 = cljs.core.async.muxch_STAR_.call(null,inst_40218);
var state_40237__$1 = state_40237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40237__$1,(22),inst_40220,inst_40168);
} else {
if((state_val_40238 === (11))){
var inst_40192 = (state_40237[(10)]);
var inst_40178 = (state_40237[(16)]);
var inst_40192__$1 = cljs.core.seq.call(null,inst_40178);
var state_40237__$1 = (function (){var statearr_40261 = state_40237;
(statearr_40261[(10)] = inst_40192__$1);

return statearr_40261;
})();
if(inst_40192__$1){
var statearr_40262_40308 = state_40237__$1;
(statearr_40262_40308[(1)] = (13));

} else {
var statearr_40263_40309 = state_40237__$1;
(statearr_40263_40309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (9))){
var inst_40214 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40264_40310 = state_40237__$1;
(statearr_40264_40310[(2)] = inst_40214);

(statearr_40264_40310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (5))){
var inst_40175 = cljs.core.deref.call(null,mults);
var inst_40176 = cljs.core.vals.call(null,inst_40175);
var inst_40177 = cljs.core.seq.call(null,inst_40176);
var inst_40178 = inst_40177;
var inst_40179 = null;
var inst_40180 = (0);
var inst_40181 = (0);
var state_40237__$1 = (function (){var statearr_40265 = state_40237;
(statearr_40265[(12)] = inst_40181);

(statearr_40265[(14)] = inst_40179);

(statearr_40265[(15)] = inst_40180);

(statearr_40265[(16)] = inst_40178);

return statearr_40265;
})();
var statearr_40266_40311 = state_40237__$1;
(statearr_40266_40311[(2)] = null);

(statearr_40266_40311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (14))){
var state_40237__$1 = state_40237;
var statearr_40270_40312 = state_40237__$1;
(statearr_40270_40312[(2)] = null);

(statearr_40270_40312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (16))){
var inst_40192 = (state_40237[(10)]);
var inst_40196 = cljs.core.chunk_first.call(null,inst_40192);
var inst_40197 = cljs.core.chunk_rest.call(null,inst_40192);
var inst_40198 = cljs.core.count.call(null,inst_40196);
var inst_40178 = inst_40197;
var inst_40179 = inst_40196;
var inst_40180 = inst_40198;
var inst_40181 = (0);
var state_40237__$1 = (function (){var statearr_40271 = state_40237;
(statearr_40271[(12)] = inst_40181);

(statearr_40271[(14)] = inst_40179);

(statearr_40271[(15)] = inst_40180);

(statearr_40271[(16)] = inst_40178);

return statearr_40271;
})();
var statearr_40272_40313 = state_40237__$1;
(statearr_40272_40313[(2)] = null);

(statearr_40272_40313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (10))){
var inst_40181 = (state_40237[(12)]);
var inst_40179 = (state_40237[(14)]);
var inst_40180 = (state_40237[(15)]);
var inst_40178 = (state_40237[(16)]);
var inst_40186 = cljs.core._nth.call(null,inst_40179,inst_40181);
var inst_40187 = cljs.core.async.muxch_STAR_.call(null,inst_40186);
var inst_40188 = cljs.core.async.close_BANG_.call(null,inst_40187);
var inst_40189 = (inst_40181 + (1));
var tmp40267 = inst_40179;
var tmp40268 = inst_40180;
var tmp40269 = inst_40178;
var inst_40178__$1 = tmp40269;
var inst_40179__$1 = tmp40267;
var inst_40180__$1 = tmp40268;
var inst_40181__$1 = inst_40189;
var state_40237__$1 = (function (){var statearr_40273 = state_40237;
(statearr_40273[(12)] = inst_40181__$1);

(statearr_40273[(17)] = inst_40188);

(statearr_40273[(14)] = inst_40179__$1);

(statearr_40273[(15)] = inst_40180__$1);

(statearr_40273[(16)] = inst_40178__$1);

return statearr_40273;
})();
var statearr_40274_40314 = state_40237__$1;
(statearr_40274_40314[(2)] = null);

(statearr_40274_40314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (18))){
var inst_40207 = (state_40237[(2)]);
var state_40237__$1 = state_40237;
var statearr_40275_40315 = state_40237__$1;
(statearr_40275_40315[(2)] = inst_40207);

(statearr_40275_40315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40238 === (8))){
var inst_40181 = (state_40237[(12)]);
var inst_40180 = (state_40237[(15)]);
var inst_40183 = (inst_40181 < inst_40180);
var inst_40184 = inst_40183;
var state_40237__$1 = state_40237;
if(cljs.core.truth_(inst_40184)){
var statearr_40276_40316 = state_40237__$1;
(statearr_40276_40316[(1)] = (10));

} else {
var statearr_40277_40317 = state_40237__$1;
(statearr_40277_40317[(1)] = (11));

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
});})(c__38336__auto___40289,mults,ensure_mult,p))
;
return ((function (switch__38224__auto__,c__38336__auto___40289,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40281[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40281[(1)] = (1));

return statearr_40281;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40237){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40282){if((e40282 instanceof Object)){
var ex__38228__auto__ = e40282;
var statearr_40283_40318 = state_40237;
(statearr_40283_40318[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40319 = state_40237;
state_40237 = G__40319;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40289,mults,ensure_mult,p))
})();
var state__38338__auto__ = (function (){var statearr_40284 = f__38337__auto__.call(null);
(statearr_40284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40289);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40289,mults,ensure_mult,p))
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
var args40320 = [];
var len__31335__auto___40323 = arguments.length;
var i__31336__auto___40324 = (0);
while(true){
if((i__31336__auto___40324 < len__31335__auto___40323)){
args40320.push((arguments[i__31336__auto___40324]));

var G__40325 = (i__31336__auto___40324 + (1));
i__31336__auto___40324 = G__40325;
continue;
} else {
}
break;
}

var G__40322 = args40320.length;
switch (G__40322) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40320.length)].join('')));

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
var args40327 = [];
var len__31335__auto___40330 = arguments.length;
var i__31336__auto___40331 = (0);
while(true){
if((i__31336__auto___40331 < len__31335__auto___40330)){
args40327.push((arguments[i__31336__auto___40331]));

var G__40332 = (i__31336__auto___40331 + (1));
i__31336__auto___40331 = G__40332;
continue;
} else {
}
break;
}

var G__40329 = args40327.length;
switch (G__40329) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40327.length)].join('')));

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
var args40334 = [];
var len__31335__auto___40405 = arguments.length;
var i__31336__auto___40406 = (0);
while(true){
if((i__31336__auto___40406 < len__31335__auto___40405)){
args40334.push((arguments[i__31336__auto___40406]));

var G__40407 = (i__31336__auto___40406 + (1));
i__31336__auto___40406 = G__40407;
continue;
} else {
}
break;
}

var G__40336 = args40334.length;
switch (G__40336) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40334.length)].join('')));

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
var c__38336__auto___40409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40375){
var state_val_40376 = (state_40375[(1)]);
if((state_val_40376 === (7))){
var state_40375__$1 = state_40375;
var statearr_40377_40410 = state_40375__$1;
(statearr_40377_40410[(2)] = null);

(statearr_40377_40410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (1))){
var state_40375__$1 = state_40375;
var statearr_40378_40411 = state_40375__$1;
(statearr_40378_40411[(2)] = null);

(statearr_40378_40411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (4))){
var inst_40339 = (state_40375[(7)]);
var inst_40341 = (inst_40339 < cnt);
var state_40375__$1 = state_40375;
if(cljs.core.truth_(inst_40341)){
var statearr_40379_40412 = state_40375__$1;
(statearr_40379_40412[(1)] = (6));

} else {
var statearr_40380_40413 = state_40375__$1;
(statearr_40380_40413[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (15))){
var inst_40371 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40381_40414 = state_40375__$1;
(statearr_40381_40414[(2)] = inst_40371);

(statearr_40381_40414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (13))){
var inst_40364 = cljs.core.async.close_BANG_.call(null,out);
var state_40375__$1 = state_40375;
var statearr_40382_40415 = state_40375__$1;
(statearr_40382_40415[(2)] = inst_40364);

(statearr_40382_40415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (6))){
var state_40375__$1 = state_40375;
var statearr_40383_40416 = state_40375__$1;
(statearr_40383_40416[(2)] = null);

(statearr_40383_40416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (3))){
var inst_40373 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40375__$1,inst_40373);
} else {
if((state_val_40376 === (12))){
var inst_40361 = (state_40375[(8)]);
var inst_40361__$1 = (state_40375[(2)]);
var inst_40362 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40361__$1);
var state_40375__$1 = (function (){var statearr_40384 = state_40375;
(statearr_40384[(8)] = inst_40361__$1);

return statearr_40384;
})();
if(cljs.core.truth_(inst_40362)){
var statearr_40385_40417 = state_40375__$1;
(statearr_40385_40417[(1)] = (13));

} else {
var statearr_40386_40418 = state_40375__$1;
(statearr_40386_40418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (2))){
var inst_40338 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40339 = (0);
var state_40375__$1 = (function (){var statearr_40387 = state_40375;
(statearr_40387[(9)] = inst_40338);

(statearr_40387[(7)] = inst_40339);

return statearr_40387;
})();
var statearr_40388_40419 = state_40375__$1;
(statearr_40388_40419[(2)] = null);

(statearr_40388_40419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (11))){
var inst_40339 = (state_40375[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40375,(10),Object,null,(9));
var inst_40348 = chs__$1.call(null,inst_40339);
var inst_40349 = done.call(null,inst_40339);
var inst_40350 = cljs.core.async.take_BANG_.call(null,inst_40348,inst_40349);
var state_40375__$1 = state_40375;
var statearr_40389_40420 = state_40375__$1;
(statearr_40389_40420[(2)] = inst_40350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (9))){
var inst_40339 = (state_40375[(7)]);
var inst_40352 = (state_40375[(2)]);
var inst_40353 = (inst_40339 + (1));
var inst_40339__$1 = inst_40353;
var state_40375__$1 = (function (){var statearr_40390 = state_40375;
(statearr_40390[(10)] = inst_40352);

(statearr_40390[(7)] = inst_40339__$1);

return statearr_40390;
})();
var statearr_40391_40421 = state_40375__$1;
(statearr_40391_40421[(2)] = null);

(statearr_40391_40421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (5))){
var inst_40359 = (state_40375[(2)]);
var state_40375__$1 = (function (){var statearr_40392 = state_40375;
(statearr_40392[(11)] = inst_40359);

return statearr_40392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40375__$1,(12),dchan);
} else {
if((state_val_40376 === (14))){
var inst_40361 = (state_40375[(8)]);
var inst_40366 = cljs.core.apply.call(null,f,inst_40361);
var state_40375__$1 = state_40375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40375__$1,(16),out,inst_40366);
} else {
if((state_val_40376 === (16))){
var inst_40368 = (state_40375[(2)]);
var state_40375__$1 = (function (){var statearr_40393 = state_40375;
(statearr_40393[(12)] = inst_40368);

return statearr_40393;
})();
var statearr_40394_40422 = state_40375__$1;
(statearr_40394_40422[(2)] = null);

(statearr_40394_40422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (10))){
var inst_40343 = (state_40375[(2)]);
var inst_40344 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40375__$1 = (function (){var statearr_40395 = state_40375;
(statearr_40395[(13)] = inst_40343);

return statearr_40395;
})();
var statearr_40396_40423 = state_40375__$1;
(statearr_40396_40423[(2)] = inst_40344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40376 === (8))){
var inst_40357 = (state_40375[(2)]);
var state_40375__$1 = state_40375;
var statearr_40397_40424 = state_40375__$1;
(statearr_40397_40424[(2)] = inst_40357);

(statearr_40397_40424[(1)] = (5));


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
});})(c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38224__auto__,c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40401[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40401[(1)] = (1));

return statearr_40401;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40375){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40402){if((e40402 instanceof Object)){
var ex__38228__auto__ = e40402;
var statearr_40403_40425 = state_40375;
(statearr_40403_40425[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40426 = state_40375;
state_40375 = G__40426;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38338__auto__ = (function (){var statearr_40404 = f__38337__auto__.call(null);
(statearr_40404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40409);

return statearr_40404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40409,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40428 = [];
var len__31335__auto___40486 = arguments.length;
var i__31336__auto___40487 = (0);
while(true){
if((i__31336__auto___40487 < len__31335__auto___40486)){
args40428.push((arguments[i__31336__auto___40487]));

var G__40488 = (i__31336__auto___40487 + (1));
i__31336__auto___40487 = G__40488;
continue;
} else {
}
break;
}

var G__40430 = args40428.length;
switch (G__40430) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40428.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___40490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40490,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40490,out){
return (function (state_40462){
var state_val_40463 = (state_40462[(1)]);
if((state_val_40463 === (7))){
var inst_40441 = (state_40462[(7)]);
var inst_40442 = (state_40462[(8)]);
var inst_40441__$1 = (state_40462[(2)]);
var inst_40442__$1 = cljs.core.nth.call(null,inst_40441__$1,(0),null);
var inst_40443 = cljs.core.nth.call(null,inst_40441__$1,(1),null);
var inst_40444 = (inst_40442__$1 == null);
var state_40462__$1 = (function (){var statearr_40464 = state_40462;
(statearr_40464[(9)] = inst_40443);

(statearr_40464[(7)] = inst_40441__$1);

(statearr_40464[(8)] = inst_40442__$1);

return statearr_40464;
})();
if(cljs.core.truth_(inst_40444)){
var statearr_40465_40491 = state_40462__$1;
(statearr_40465_40491[(1)] = (8));

} else {
var statearr_40466_40492 = state_40462__$1;
(statearr_40466_40492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (1))){
var inst_40431 = cljs.core.vec.call(null,chs);
var inst_40432 = inst_40431;
var state_40462__$1 = (function (){var statearr_40467 = state_40462;
(statearr_40467[(10)] = inst_40432);

return statearr_40467;
})();
var statearr_40468_40493 = state_40462__$1;
(statearr_40468_40493[(2)] = null);

(statearr_40468_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (4))){
var inst_40432 = (state_40462[(10)]);
var state_40462__$1 = state_40462;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40462__$1,(7),inst_40432);
} else {
if((state_val_40463 === (6))){
var inst_40458 = (state_40462[(2)]);
var state_40462__$1 = state_40462;
var statearr_40469_40494 = state_40462__$1;
(statearr_40469_40494[(2)] = inst_40458);

(statearr_40469_40494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (3))){
var inst_40460 = (state_40462[(2)]);
var state_40462__$1 = state_40462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40462__$1,inst_40460);
} else {
if((state_val_40463 === (2))){
var inst_40432 = (state_40462[(10)]);
var inst_40434 = cljs.core.count.call(null,inst_40432);
var inst_40435 = (inst_40434 > (0));
var state_40462__$1 = state_40462;
if(cljs.core.truth_(inst_40435)){
var statearr_40471_40495 = state_40462__$1;
(statearr_40471_40495[(1)] = (4));

} else {
var statearr_40472_40496 = state_40462__$1;
(statearr_40472_40496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (11))){
var inst_40432 = (state_40462[(10)]);
var inst_40451 = (state_40462[(2)]);
var tmp40470 = inst_40432;
var inst_40432__$1 = tmp40470;
var state_40462__$1 = (function (){var statearr_40473 = state_40462;
(statearr_40473[(11)] = inst_40451);

(statearr_40473[(10)] = inst_40432__$1);

return statearr_40473;
})();
var statearr_40474_40497 = state_40462__$1;
(statearr_40474_40497[(2)] = null);

(statearr_40474_40497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (9))){
var inst_40442 = (state_40462[(8)]);
var state_40462__$1 = state_40462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40462__$1,(11),out,inst_40442);
} else {
if((state_val_40463 === (5))){
var inst_40456 = cljs.core.async.close_BANG_.call(null,out);
var state_40462__$1 = state_40462;
var statearr_40475_40498 = state_40462__$1;
(statearr_40475_40498[(2)] = inst_40456);

(statearr_40475_40498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (10))){
var inst_40454 = (state_40462[(2)]);
var state_40462__$1 = state_40462;
var statearr_40476_40499 = state_40462__$1;
(statearr_40476_40499[(2)] = inst_40454);

(statearr_40476_40499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40463 === (8))){
var inst_40443 = (state_40462[(9)]);
var inst_40441 = (state_40462[(7)]);
var inst_40432 = (state_40462[(10)]);
var inst_40442 = (state_40462[(8)]);
var inst_40446 = (function (){var cs = inst_40432;
var vec__40437 = inst_40441;
var v = inst_40442;
var c = inst_40443;
return ((function (cs,vec__40437,v,c,inst_40443,inst_40441,inst_40432,inst_40442,state_val_40463,c__38336__auto___40490,out){
return (function (p1__40427_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40427_SHARP_);
});
;})(cs,vec__40437,v,c,inst_40443,inst_40441,inst_40432,inst_40442,state_val_40463,c__38336__auto___40490,out))
})();
var inst_40447 = cljs.core.filterv.call(null,inst_40446,inst_40432);
var inst_40432__$1 = inst_40447;
var state_40462__$1 = (function (){var statearr_40477 = state_40462;
(statearr_40477[(10)] = inst_40432__$1);

return statearr_40477;
})();
var statearr_40478_40500 = state_40462__$1;
(statearr_40478_40500[(2)] = null);

(statearr_40478_40500[(1)] = (2));


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
});})(c__38336__auto___40490,out))
;
return ((function (switch__38224__auto__,c__38336__auto___40490,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40482[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40482[(1)] = (1));

return statearr_40482;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40462){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40483){if((e40483 instanceof Object)){
var ex__38228__auto__ = e40483;
var statearr_40484_40501 = state_40462;
(statearr_40484_40501[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40502 = state_40462;
state_40462 = G__40502;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40490,out))
})();
var state__38338__auto__ = (function (){var statearr_40485 = f__38337__auto__.call(null);
(statearr_40485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40490);

return statearr_40485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40490,out))
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
var args40503 = [];
var len__31335__auto___40552 = arguments.length;
var i__31336__auto___40553 = (0);
while(true){
if((i__31336__auto___40553 < len__31335__auto___40552)){
args40503.push((arguments[i__31336__auto___40553]));

var G__40554 = (i__31336__auto___40553 + (1));
i__31336__auto___40553 = G__40554;
continue;
} else {
}
break;
}

var G__40505 = args40503.length;
switch (G__40505) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40503.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___40556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40556,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40556,out){
return (function (state_40529){
var state_val_40530 = (state_40529[(1)]);
if((state_val_40530 === (7))){
var inst_40511 = (state_40529[(7)]);
var inst_40511__$1 = (state_40529[(2)]);
var inst_40512 = (inst_40511__$1 == null);
var inst_40513 = cljs.core.not.call(null,inst_40512);
var state_40529__$1 = (function (){var statearr_40531 = state_40529;
(statearr_40531[(7)] = inst_40511__$1);

return statearr_40531;
})();
if(inst_40513){
var statearr_40532_40557 = state_40529__$1;
(statearr_40532_40557[(1)] = (8));

} else {
var statearr_40533_40558 = state_40529__$1;
(statearr_40533_40558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (1))){
var inst_40506 = (0);
var state_40529__$1 = (function (){var statearr_40534 = state_40529;
(statearr_40534[(8)] = inst_40506);

return statearr_40534;
})();
var statearr_40535_40559 = state_40529__$1;
(statearr_40535_40559[(2)] = null);

(statearr_40535_40559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (4))){
var state_40529__$1 = state_40529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40529__$1,(7),ch);
} else {
if((state_val_40530 === (6))){
var inst_40524 = (state_40529[(2)]);
var state_40529__$1 = state_40529;
var statearr_40536_40560 = state_40529__$1;
(statearr_40536_40560[(2)] = inst_40524);

(statearr_40536_40560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (3))){
var inst_40526 = (state_40529[(2)]);
var inst_40527 = cljs.core.async.close_BANG_.call(null,out);
var state_40529__$1 = (function (){var statearr_40537 = state_40529;
(statearr_40537[(9)] = inst_40526);

return statearr_40537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40529__$1,inst_40527);
} else {
if((state_val_40530 === (2))){
var inst_40506 = (state_40529[(8)]);
var inst_40508 = (inst_40506 < n);
var state_40529__$1 = state_40529;
if(cljs.core.truth_(inst_40508)){
var statearr_40538_40561 = state_40529__$1;
(statearr_40538_40561[(1)] = (4));

} else {
var statearr_40539_40562 = state_40529__$1;
(statearr_40539_40562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (11))){
var inst_40506 = (state_40529[(8)]);
var inst_40516 = (state_40529[(2)]);
var inst_40517 = (inst_40506 + (1));
var inst_40506__$1 = inst_40517;
var state_40529__$1 = (function (){var statearr_40540 = state_40529;
(statearr_40540[(10)] = inst_40516);

(statearr_40540[(8)] = inst_40506__$1);

return statearr_40540;
})();
var statearr_40541_40563 = state_40529__$1;
(statearr_40541_40563[(2)] = null);

(statearr_40541_40563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (9))){
var state_40529__$1 = state_40529;
var statearr_40542_40564 = state_40529__$1;
(statearr_40542_40564[(2)] = null);

(statearr_40542_40564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (5))){
var state_40529__$1 = state_40529;
var statearr_40543_40565 = state_40529__$1;
(statearr_40543_40565[(2)] = null);

(statearr_40543_40565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (10))){
var inst_40521 = (state_40529[(2)]);
var state_40529__$1 = state_40529;
var statearr_40544_40566 = state_40529__$1;
(statearr_40544_40566[(2)] = inst_40521);

(statearr_40544_40566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40530 === (8))){
var inst_40511 = (state_40529[(7)]);
var state_40529__$1 = state_40529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40529__$1,(11),out,inst_40511);
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
});})(c__38336__auto___40556,out))
;
return ((function (switch__38224__auto__,c__38336__auto___40556,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40548 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40548[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40548[(1)] = (1));

return statearr_40548;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40529){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40549){if((e40549 instanceof Object)){
var ex__38228__auto__ = e40549;
var statearr_40550_40567 = state_40529;
(statearr_40550_40567[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40568 = state_40529;
state_40529 = G__40568;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40556,out))
})();
var state__38338__auto__ = (function (){var statearr_40551 = f__38337__auto__.call(null);
(statearr_40551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40556);

return statearr_40551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40556,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40576 = (function (f,ch,meta40577){
this.f = f;
this.ch = ch;
this.meta40577 = meta40577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40578,meta40577__$1){
var self__ = this;
var _40578__$1 = this;
return (new cljs.core.async.t_cljs$core$async40576(self__.f,self__.ch,meta40577__$1));
});

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40578){
var self__ = this;
var _40578__$1 = this;
return self__.meta40577;
});

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40579 = (function (f,ch,meta40577,_,fn1,meta40580){
this.f = f;
this.ch = ch;
this.meta40577 = meta40577;
this._ = _;
this.fn1 = fn1;
this.meta40580 = meta40580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40581,meta40580__$1){
var self__ = this;
var _40581__$1 = this;
return (new cljs.core.async.t_cljs$core$async40579(self__.f,self__.ch,self__.meta40577,self__._,self__.fn1,meta40580__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40581){
var self__ = this;
var _40581__$1 = this;
return self__.meta40580;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40569_SHARP_){
return f1.call(null,(((p1__40569_SHARP_ == null))?null:self__.f.call(null,p1__40569_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40577","meta40577",1531162121,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40576","cljs.core.async/t_cljs$core$async40576",1391981620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40580","meta40580",-189627956,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40579";

cljs.core.async.t_cljs$core$async40579.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async40579");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40579 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40579(f__$1,ch__$1,meta40577__$1,___$2,fn1__$1,meta40580){
return (new cljs.core.async.t_cljs$core$async40579(f__$1,ch__$1,meta40577__$1,___$2,fn1__$1,meta40580));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40579(self__.f,self__.ch,self__.meta40577,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30215__auto__ = ret;
if(cljs.core.truth_(and__30215__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30215__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40577","meta40577",1531162121,null)], null);
});

cljs.core.async.t_cljs$core$async40576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40576";

cljs.core.async.t_cljs$core$async40576.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async40576");
});

cljs.core.async.__GT_t_cljs$core$async40576 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40576(f__$1,ch__$1,meta40577){
return (new cljs.core.async.t_cljs$core$async40576(f__$1,ch__$1,meta40577));
});

}

return (new cljs.core.async.t_cljs$core$async40576(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40585 = (function (f,ch,meta40586){
this.f = f;
this.ch = ch;
this.meta40586 = meta40586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40587,meta40586__$1){
var self__ = this;
var _40587__$1 = this;
return (new cljs.core.async.t_cljs$core$async40585(self__.f,self__.ch,meta40586__$1));
});

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40587){
var self__ = this;
var _40587__$1 = this;
return self__.meta40586;
});

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40586","meta40586",1345255445,null)], null);
});

cljs.core.async.t_cljs$core$async40585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40585";

cljs.core.async.t_cljs$core$async40585.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async40585");
});

cljs.core.async.__GT_t_cljs$core$async40585 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40585(f__$1,ch__$1,meta40586){
return (new cljs.core.async.t_cljs$core$async40585(f__$1,ch__$1,meta40586));
});

}

return (new cljs.core.async.t_cljs$core$async40585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40591 = (function (p,ch,meta40592){
this.p = p;
this.ch = ch;
this.meta40592 = meta40592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40593,meta40592__$1){
var self__ = this;
var _40593__$1 = this;
return (new cljs.core.async.t_cljs$core$async40591(self__.p,self__.ch,meta40592__$1));
});

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40593){
var self__ = this;
var _40593__$1 = this;
return self__.meta40592;
});

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40592","meta40592",1591896770,null)], null);
});

cljs.core.async.t_cljs$core$async40591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40591";

cljs.core.async.t_cljs$core$async40591.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"cljs.core.async/t_cljs$core$async40591");
});

cljs.core.async.__GT_t_cljs$core$async40591 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40591(p__$1,ch__$1,meta40592){
return (new cljs.core.async.t_cljs$core$async40591(p__$1,ch__$1,meta40592));
});

}

return (new cljs.core.async.t_cljs$core$async40591(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40594 = [];
var len__31335__auto___40638 = arguments.length;
var i__31336__auto___40639 = (0);
while(true){
if((i__31336__auto___40639 < len__31335__auto___40638)){
args40594.push((arguments[i__31336__auto___40639]));

var G__40640 = (i__31336__auto___40639 + (1));
i__31336__auto___40639 = G__40640;
continue;
} else {
}
break;
}

var G__40596 = args40594.length;
switch (G__40596) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40594.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___40642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40642,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40642,out){
return (function (state_40617){
var state_val_40618 = (state_40617[(1)]);
if((state_val_40618 === (7))){
var inst_40613 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40619_40643 = state_40617__$1;
(statearr_40619_40643[(2)] = inst_40613);

(statearr_40619_40643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (1))){
var state_40617__$1 = state_40617;
var statearr_40620_40644 = state_40617__$1;
(statearr_40620_40644[(2)] = null);

(statearr_40620_40644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (4))){
var inst_40599 = (state_40617[(7)]);
var inst_40599__$1 = (state_40617[(2)]);
var inst_40600 = (inst_40599__$1 == null);
var state_40617__$1 = (function (){var statearr_40621 = state_40617;
(statearr_40621[(7)] = inst_40599__$1);

return statearr_40621;
})();
if(cljs.core.truth_(inst_40600)){
var statearr_40622_40645 = state_40617__$1;
(statearr_40622_40645[(1)] = (5));

} else {
var statearr_40623_40646 = state_40617__$1;
(statearr_40623_40646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (6))){
var inst_40599 = (state_40617[(7)]);
var inst_40604 = p.call(null,inst_40599);
var state_40617__$1 = state_40617;
if(cljs.core.truth_(inst_40604)){
var statearr_40624_40647 = state_40617__$1;
(statearr_40624_40647[(1)] = (8));

} else {
var statearr_40625_40648 = state_40617__$1;
(statearr_40625_40648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (3))){
var inst_40615 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40617__$1,inst_40615);
} else {
if((state_val_40618 === (2))){
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40617__$1,(4),ch);
} else {
if((state_val_40618 === (11))){
var inst_40607 = (state_40617[(2)]);
var state_40617__$1 = state_40617;
var statearr_40626_40649 = state_40617__$1;
(statearr_40626_40649[(2)] = inst_40607);

(statearr_40626_40649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (9))){
var state_40617__$1 = state_40617;
var statearr_40627_40650 = state_40617__$1;
(statearr_40627_40650[(2)] = null);

(statearr_40627_40650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (5))){
var inst_40602 = cljs.core.async.close_BANG_.call(null,out);
var state_40617__$1 = state_40617;
var statearr_40628_40651 = state_40617__$1;
(statearr_40628_40651[(2)] = inst_40602);

(statearr_40628_40651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (10))){
var inst_40610 = (state_40617[(2)]);
var state_40617__$1 = (function (){var statearr_40629 = state_40617;
(statearr_40629[(8)] = inst_40610);

return statearr_40629;
})();
var statearr_40630_40652 = state_40617__$1;
(statearr_40630_40652[(2)] = null);

(statearr_40630_40652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40618 === (8))){
var inst_40599 = (state_40617[(7)]);
var state_40617__$1 = state_40617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40617__$1,(11),out,inst_40599);
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
});})(c__38336__auto___40642,out))
;
return ((function (switch__38224__auto__,c__38336__auto___40642,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40634 = [null,null,null,null,null,null,null,null,null];
(statearr_40634[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40634[(1)] = (1));

return statearr_40634;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40617){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40635){if((e40635 instanceof Object)){
var ex__38228__auto__ = e40635;
var statearr_40636_40653 = state_40617;
(statearr_40636_40653[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40654 = state_40617;
state_40617 = G__40654;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40642,out))
})();
var state__38338__auto__ = (function (){var statearr_40637 = f__38337__auto__.call(null);
(statearr_40637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40642);

return statearr_40637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40642,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40655 = [];
var len__31335__auto___40658 = arguments.length;
var i__31336__auto___40659 = (0);
while(true){
if((i__31336__auto___40659 < len__31335__auto___40658)){
args40655.push((arguments[i__31336__auto___40659]));

var G__40660 = (i__31336__auto___40659 + (1));
i__31336__auto___40659 = G__40660;
continue;
} else {
}
break;
}

var G__40657 = args40655.length;
switch (G__40657) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40655.length)].join('')));

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
var c__38336__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto__){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto__){
return (function (state_40827){
var state_val_40828 = (state_40827[(1)]);
if((state_val_40828 === (7))){
var inst_40823 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40829_40870 = state_40827__$1;
(statearr_40829_40870[(2)] = inst_40823);

(statearr_40829_40870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (20))){
var inst_40793 = (state_40827[(7)]);
var inst_40804 = (state_40827[(2)]);
var inst_40805 = cljs.core.next.call(null,inst_40793);
var inst_40779 = inst_40805;
var inst_40780 = null;
var inst_40781 = (0);
var inst_40782 = (0);
var state_40827__$1 = (function (){var statearr_40830 = state_40827;
(statearr_40830[(8)] = inst_40781);

(statearr_40830[(9)] = inst_40782);

(statearr_40830[(10)] = inst_40780);

(statearr_40830[(11)] = inst_40804);

(statearr_40830[(12)] = inst_40779);

return statearr_40830;
})();
var statearr_40831_40871 = state_40827__$1;
(statearr_40831_40871[(2)] = null);

(statearr_40831_40871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (1))){
var state_40827__$1 = state_40827;
var statearr_40832_40872 = state_40827__$1;
(statearr_40832_40872[(2)] = null);

(statearr_40832_40872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (4))){
var inst_40768 = (state_40827[(13)]);
var inst_40768__$1 = (state_40827[(2)]);
var inst_40769 = (inst_40768__$1 == null);
var state_40827__$1 = (function (){var statearr_40833 = state_40827;
(statearr_40833[(13)] = inst_40768__$1);

return statearr_40833;
})();
if(cljs.core.truth_(inst_40769)){
var statearr_40834_40873 = state_40827__$1;
(statearr_40834_40873[(1)] = (5));

} else {
var statearr_40835_40874 = state_40827__$1;
(statearr_40835_40874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (15))){
var state_40827__$1 = state_40827;
var statearr_40839_40875 = state_40827__$1;
(statearr_40839_40875[(2)] = null);

(statearr_40839_40875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (21))){
var state_40827__$1 = state_40827;
var statearr_40840_40876 = state_40827__$1;
(statearr_40840_40876[(2)] = null);

(statearr_40840_40876[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (13))){
var inst_40781 = (state_40827[(8)]);
var inst_40782 = (state_40827[(9)]);
var inst_40780 = (state_40827[(10)]);
var inst_40779 = (state_40827[(12)]);
var inst_40789 = (state_40827[(2)]);
var inst_40790 = (inst_40782 + (1));
var tmp40836 = inst_40781;
var tmp40837 = inst_40780;
var tmp40838 = inst_40779;
var inst_40779__$1 = tmp40838;
var inst_40780__$1 = tmp40837;
var inst_40781__$1 = tmp40836;
var inst_40782__$1 = inst_40790;
var state_40827__$1 = (function (){var statearr_40841 = state_40827;
(statearr_40841[(8)] = inst_40781__$1);

(statearr_40841[(9)] = inst_40782__$1);

(statearr_40841[(14)] = inst_40789);

(statearr_40841[(10)] = inst_40780__$1);

(statearr_40841[(12)] = inst_40779__$1);

return statearr_40841;
})();
var statearr_40842_40877 = state_40827__$1;
(statearr_40842_40877[(2)] = null);

(statearr_40842_40877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (22))){
var state_40827__$1 = state_40827;
var statearr_40843_40878 = state_40827__$1;
(statearr_40843_40878[(2)] = null);

(statearr_40843_40878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (6))){
var inst_40768 = (state_40827[(13)]);
var inst_40777 = f.call(null,inst_40768);
var inst_40778 = cljs.core.seq.call(null,inst_40777);
var inst_40779 = inst_40778;
var inst_40780 = null;
var inst_40781 = (0);
var inst_40782 = (0);
var state_40827__$1 = (function (){var statearr_40844 = state_40827;
(statearr_40844[(8)] = inst_40781);

(statearr_40844[(9)] = inst_40782);

(statearr_40844[(10)] = inst_40780);

(statearr_40844[(12)] = inst_40779);

return statearr_40844;
})();
var statearr_40845_40879 = state_40827__$1;
(statearr_40845_40879[(2)] = null);

(statearr_40845_40879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (17))){
var inst_40793 = (state_40827[(7)]);
var inst_40797 = cljs.core.chunk_first.call(null,inst_40793);
var inst_40798 = cljs.core.chunk_rest.call(null,inst_40793);
var inst_40799 = cljs.core.count.call(null,inst_40797);
var inst_40779 = inst_40798;
var inst_40780 = inst_40797;
var inst_40781 = inst_40799;
var inst_40782 = (0);
var state_40827__$1 = (function (){var statearr_40846 = state_40827;
(statearr_40846[(8)] = inst_40781);

(statearr_40846[(9)] = inst_40782);

(statearr_40846[(10)] = inst_40780);

(statearr_40846[(12)] = inst_40779);

return statearr_40846;
})();
var statearr_40847_40880 = state_40827__$1;
(statearr_40847_40880[(2)] = null);

(statearr_40847_40880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (3))){
var inst_40825 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40827__$1,inst_40825);
} else {
if((state_val_40828 === (12))){
var inst_40813 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40848_40881 = state_40827__$1;
(statearr_40848_40881[(2)] = inst_40813);

(statearr_40848_40881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (2))){
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40827__$1,(4),in$);
} else {
if((state_val_40828 === (23))){
var inst_40821 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40849_40882 = state_40827__$1;
(statearr_40849_40882[(2)] = inst_40821);

(statearr_40849_40882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (19))){
var inst_40808 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40850_40883 = state_40827__$1;
(statearr_40850_40883[(2)] = inst_40808);

(statearr_40850_40883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (11))){
var inst_40793 = (state_40827[(7)]);
var inst_40779 = (state_40827[(12)]);
var inst_40793__$1 = cljs.core.seq.call(null,inst_40779);
var state_40827__$1 = (function (){var statearr_40851 = state_40827;
(statearr_40851[(7)] = inst_40793__$1);

return statearr_40851;
})();
if(inst_40793__$1){
var statearr_40852_40884 = state_40827__$1;
(statearr_40852_40884[(1)] = (14));

} else {
var statearr_40853_40885 = state_40827__$1;
(statearr_40853_40885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (9))){
var inst_40815 = (state_40827[(2)]);
var inst_40816 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40827__$1 = (function (){var statearr_40854 = state_40827;
(statearr_40854[(15)] = inst_40815);

return statearr_40854;
})();
if(cljs.core.truth_(inst_40816)){
var statearr_40855_40886 = state_40827__$1;
(statearr_40855_40886[(1)] = (21));

} else {
var statearr_40856_40887 = state_40827__$1;
(statearr_40856_40887[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (5))){
var inst_40771 = cljs.core.async.close_BANG_.call(null,out);
var state_40827__$1 = state_40827;
var statearr_40857_40888 = state_40827__$1;
(statearr_40857_40888[(2)] = inst_40771);

(statearr_40857_40888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (14))){
var inst_40793 = (state_40827[(7)]);
var inst_40795 = cljs.core.chunked_seq_QMARK_.call(null,inst_40793);
var state_40827__$1 = state_40827;
if(inst_40795){
var statearr_40858_40889 = state_40827__$1;
(statearr_40858_40889[(1)] = (17));

} else {
var statearr_40859_40890 = state_40827__$1;
(statearr_40859_40890[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (16))){
var inst_40811 = (state_40827[(2)]);
var state_40827__$1 = state_40827;
var statearr_40860_40891 = state_40827__$1;
(statearr_40860_40891[(2)] = inst_40811);

(statearr_40860_40891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40828 === (10))){
var inst_40782 = (state_40827[(9)]);
var inst_40780 = (state_40827[(10)]);
var inst_40787 = cljs.core._nth.call(null,inst_40780,inst_40782);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40827__$1,(13),out,inst_40787);
} else {
if((state_val_40828 === (18))){
var inst_40793 = (state_40827[(7)]);
var inst_40802 = cljs.core.first.call(null,inst_40793);
var state_40827__$1 = state_40827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40827__$1,(20),out,inst_40802);
} else {
if((state_val_40828 === (8))){
var inst_40781 = (state_40827[(8)]);
var inst_40782 = (state_40827[(9)]);
var inst_40784 = (inst_40782 < inst_40781);
var inst_40785 = inst_40784;
var state_40827__$1 = state_40827;
if(cljs.core.truth_(inst_40785)){
var statearr_40861_40892 = state_40827__$1;
(statearr_40861_40892[(1)] = (10));

} else {
var statearr_40862_40893 = state_40827__$1;
(statearr_40862_40893[(1)] = (11));

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
});})(c__38336__auto__))
;
return ((function (switch__38224__auto__,c__38336__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____0 = (function (){
var statearr_40866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40866[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__);

(statearr_40866[(1)] = (1));

return statearr_40866;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____1 = (function (state_40827){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40867){if((e40867 instanceof Object)){
var ex__38228__auto__ = e40867;
var statearr_40868_40894 = state_40827;
(statearr_40868_40894[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40895 = state_40827;
state_40827 = G__40895;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__ = function(state_40827){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____1.call(this,state_40827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38225__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto__))
})();
var state__38338__auto__ = (function (){var statearr_40869 = f__38337__auto__.call(null);
(statearr_40869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto__);

return statearr_40869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto__))
);

return c__38336__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40896 = [];
var len__31335__auto___40899 = arguments.length;
var i__31336__auto___40900 = (0);
while(true){
if((i__31336__auto___40900 < len__31335__auto___40899)){
args40896.push((arguments[i__31336__auto___40900]));

var G__40901 = (i__31336__auto___40900 + (1));
i__31336__auto___40900 = G__40901;
continue;
} else {
}
break;
}

var G__40898 = args40896.length;
switch (G__40898) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40896.length)].join('')));

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
var args40903 = [];
var len__31335__auto___40906 = arguments.length;
var i__31336__auto___40907 = (0);
while(true){
if((i__31336__auto___40907 < len__31335__auto___40906)){
args40903.push((arguments[i__31336__auto___40907]));

var G__40908 = (i__31336__auto___40907 + (1));
i__31336__auto___40907 = G__40908;
continue;
} else {
}
break;
}

var G__40905 = args40903.length;
switch (G__40905) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40903.length)].join('')));

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
var args40910 = [];
var len__31335__auto___40961 = arguments.length;
var i__31336__auto___40962 = (0);
while(true){
if((i__31336__auto___40962 < len__31335__auto___40961)){
args40910.push((arguments[i__31336__auto___40962]));

var G__40963 = (i__31336__auto___40962 + (1));
i__31336__auto___40962 = G__40963;
continue;
} else {
}
break;
}

var G__40912 = args40910.length;
switch (G__40912) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40910.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___40965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___40965,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___40965,out){
return (function (state_40936){
var state_val_40937 = (state_40936[(1)]);
if((state_val_40937 === (7))){
var inst_40931 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40938_40966 = state_40936__$1;
(statearr_40938_40966[(2)] = inst_40931);

(statearr_40938_40966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (1))){
var inst_40913 = null;
var state_40936__$1 = (function (){var statearr_40939 = state_40936;
(statearr_40939[(7)] = inst_40913);

return statearr_40939;
})();
var statearr_40940_40967 = state_40936__$1;
(statearr_40940_40967[(2)] = null);

(statearr_40940_40967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (4))){
var inst_40916 = (state_40936[(8)]);
var inst_40916__$1 = (state_40936[(2)]);
var inst_40917 = (inst_40916__$1 == null);
var inst_40918 = cljs.core.not.call(null,inst_40917);
var state_40936__$1 = (function (){var statearr_40941 = state_40936;
(statearr_40941[(8)] = inst_40916__$1);

return statearr_40941;
})();
if(inst_40918){
var statearr_40942_40968 = state_40936__$1;
(statearr_40942_40968[(1)] = (5));

} else {
var statearr_40943_40969 = state_40936__$1;
(statearr_40943_40969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (6))){
var state_40936__$1 = state_40936;
var statearr_40944_40970 = state_40936__$1;
(statearr_40944_40970[(2)] = null);

(statearr_40944_40970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (3))){
var inst_40933 = (state_40936[(2)]);
var inst_40934 = cljs.core.async.close_BANG_.call(null,out);
var state_40936__$1 = (function (){var statearr_40945 = state_40936;
(statearr_40945[(9)] = inst_40933);

return statearr_40945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40936__$1,inst_40934);
} else {
if((state_val_40937 === (2))){
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40936__$1,(4),ch);
} else {
if((state_val_40937 === (11))){
var inst_40916 = (state_40936[(8)]);
var inst_40925 = (state_40936[(2)]);
var inst_40913 = inst_40916;
var state_40936__$1 = (function (){var statearr_40946 = state_40936;
(statearr_40946[(10)] = inst_40925);

(statearr_40946[(7)] = inst_40913);

return statearr_40946;
})();
var statearr_40947_40971 = state_40936__$1;
(statearr_40947_40971[(2)] = null);

(statearr_40947_40971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (9))){
var inst_40916 = (state_40936[(8)]);
var state_40936__$1 = state_40936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40936__$1,(11),out,inst_40916);
} else {
if((state_val_40937 === (5))){
var inst_40913 = (state_40936[(7)]);
var inst_40916 = (state_40936[(8)]);
var inst_40920 = cljs.core._EQ_.call(null,inst_40916,inst_40913);
var state_40936__$1 = state_40936;
if(inst_40920){
var statearr_40949_40972 = state_40936__$1;
(statearr_40949_40972[(1)] = (8));

} else {
var statearr_40950_40973 = state_40936__$1;
(statearr_40950_40973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (10))){
var inst_40928 = (state_40936[(2)]);
var state_40936__$1 = state_40936;
var statearr_40951_40974 = state_40936__$1;
(statearr_40951_40974[(2)] = inst_40928);

(statearr_40951_40974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40937 === (8))){
var inst_40913 = (state_40936[(7)]);
var tmp40948 = inst_40913;
var inst_40913__$1 = tmp40948;
var state_40936__$1 = (function (){var statearr_40952 = state_40936;
(statearr_40952[(7)] = inst_40913__$1);

return statearr_40952;
})();
var statearr_40953_40975 = state_40936__$1;
(statearr_40953_40975[(2)] = null);

(statearr_40953_40975[(1)] = (2));


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
});})(c__38336__auto___40965,out))
;
return ((function (switch__38224__auto__,c__38336__auto___40965,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_40957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40957[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_40957[(1)] = (1));

return statearr_40957;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_40936){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_40936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e40958){if((e40958 instanceof Object)){
var ex__38228__auto__ = e40958;
var statearr_40959_40976 = state_40936;
(statearr_40959_40976[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40977 = state_40936;
state_40936 = G__40977;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_40936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_40936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___40965,out))
})();
var state__38338__auto__ = (function (){var statearr_40960 = f__38337__auto__.call(null);
(statearr_40960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___40965);

return statearr_40960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___40965,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40978 = [];
var len__31335__auto___41048 = arguments.length;
var i__31336__auto___41049 = (0);
while(true){
if((i__31336__auto___41049 < len__31335__auto___41048)){
args40978.push((arguments[i__31336__auto___41049]));

var G__41050 = (i__31336__auto___41049 + (1));
i__31336__auto___41049 = G__41050;
continue;
} else {
}
break;
}

var G__40980 = args40978.length;
switch (G__40980) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40978.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___41052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___41052,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___41052,out){
return (function (state_41018){
var state_val_41019 = (state_41018[(1)]);
if((state_val_41019 === (7))){
var inst_41014 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41020_41053 = state_41018__$1;
(statearr_41020_41053[(2)] = inst_41014);

(statearr_41020_41053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (1))){
var inst_40981 = (new Array(n));
var inst_40982 = inst_40981;
var inst_40983 = (0);
var state_41018__$1 = (function (){var statearr_41021 = state_41018;
(statearr_41021[(7)] = inst_40982);

(statearr_41021[(8)] = inst_40983);

return statearr_41021;
})();
var statearr_41022_41054 = state_41018__$1;
(statearr_41022_41054[(2)] = null);

(statearr_41022_41054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (4))){
var inst_40986 = (state_41018[(9)]);
var inst_40986__$1 = (state_41018[(2)]);
var inst_40987 = (inst_40986__$1 == null);
var inst_40988 = cljs.core.not.call(null,inst_40987);
var state_41018__$1 = (function (){var statearr_41023 = state_41018;
(statearr_41023[(9)] = inst_40986__$1);

return statearr_41023;
})();
if(inst_40988){
var statearr_41024_41055 = state_41018__$1;
(statearr_41024_41055[(1)] = (5));

} else {
var statearr_41025_41056 = state_41018__$1;
(statearr_41025_41056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (15))){
var inst_41008 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41026_41057 = state_41018__$1;
(statearr_41026_41057[(2)] = inst_41008);

(statearr_41026_41057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (13))){
var state_41018__$1 = state_41018;
var statearr_41027_41058 = state_41018__$1;
(statearr_41027_41058[(2)] = null);

(statearr_41027_41058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (6))){
var inst_40983 = (state_41018[(8)]);
var inst_41004 = (inst_40983 > (0));
var state_41018__$1 = state_41018;
if(cljs.core.truth_(inst_41004)){
var statearr_41028_41059 = state_41018__$1;
(statearr_41028_41059[(1)] = (12));

} else {
var statearr_41029_41060 = state_41018__$1;
(statearr_41029_41060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (3))){
var inst_41016 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41018__$1,inst_41016);
} else {
if((state_val_41019 === (12))){
var inst_40982 = (state_41018[(7)]);
var inst_41006 = cljs.core.vec.call(null,inst_40982);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41018__$1,(15),out,inst_41006);
} else {
if((state_val_41019 === (2))){
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41018__$1,(4),ch);
} else {
if((state_val_41019 === (11))){
var inst_40998 = (state_41018[(2)]);
var inst_40999 = (new Array(n));
var inst_40982 = inst_40999;
var inst_40983 = (0);
var state_41018__$1 = (function (){var statearr_41030 = state_41018;
(statearr_41030[(7)] = inst_40982);

(statearr_41030[(8)] = inst_40983);

(statearr_41030[(10)] = inst_40998);

return statearr_41030;
})();
var statearr_41031_41061 = state_41018__$1;
(statearr_41031_41061[(2)] = null);

(statearr_41031_41061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (9))){
var inst_40982 = (state_41018[(7)]);
var inst_40996 = cljs.core.vec.call(null,inst_40982);
var state_41018__$1 = state_41018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41018__$1,(11),out,inst_40996);
} else {
if((state_val_41019 === (5))){
var inst_40982 = (state_41018[(7)]);
var inst_40986 = (state_41018[(9)]);
var inst_40983 = (state_41018[(8)]);
var inst_40991 = (state_41018[(11)]);
var inst_40990 = (inst_40982[inst_40983] = inst_40986);
var inst_40991__$1 = (inst_40983 + (1));
var inst_40992 = (inst_40991__$1 < n);
var state_41018__$1 = (function (){var statearr_41032 = state_41018;
(statearr_41032[(12)] = inst_40990);

(statearr_41032[(11)] = inst_40991__$1);

return statearr_41032;
})();
if(cljs.core.truth_(inst_40992)){
var statearr_41033_41062 = state_41018__$1;
(statearr_41033_41062[(1)] = (8));

} else {
var statearr_41034_41063 = state_41018__$1;
(statearr_41034_41063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (14))){
var inst_41011 = (state_41018[(2)]);
var inst_41012 = cljs.core.async.close_BANG_.call(null,out);
var state_41018__$1 = (function (){var statearr_41036 = state_41018;
(statearr_41036[(13)] = inst_41011);

return statearr_41036;
})();
var statearr_41037_41064 = state_41018__$1;
(statearr_41037_41064[(2)] = inst_41012);

(statearr_41037_41064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (10))){
var inst_41002 = (state_41018[(2)]);
var state_41018__$1 = state_41018;
var statearr_41038_41065 = state_41018__$1;
(statearr_41038_41065[(2)] = inst_41002);

(statearr_41038_41065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41019 === (8))){
var inst_40982 = (state_41018[(7)]);
var inst_40991 = (state_41018[(11)]);
var tmp41035 = inst_40982;
var inst_40982__$1 = tmp41035;
var inst_40983 = inst_40991;
var state_41018__$1 = (function (){var statearr_41039 = state_41018;
(statearr_41039[(7)] = inst_40982__$1);

(statearr_41039[(8)] = inst_40983);

return statearr_41039;
})();
var statearr_41040_41066 = state_41018__$1;
(statearr_41040_41066[(2)] = null);

(statearr_41040_41066[(1)] = (2));


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
});})(c__38336__auto___41052,out))
;
return ((function (switch__38224__auto__,c__38336__auto___41052,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_41044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41044[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_41044[(1)] = (1));

return statearr_41044;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_41018){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_41018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e41045){if((e41045 instanceof Object)){
var ex__38228__auto__ = e41045;
var statearr_41046_41067 = state_41018;
(statearr_41046_41067[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41068 = state_41018;
state_41018 = G__41068;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_41018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_41018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___41052,out))
})();
var state__38338__auto__ = (function (){var statearr_41047 = f__38337__auto__.call(null);
(statearr_41047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___41052);

return statearr_41047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___41052,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41069 = [];
var len__31335__auto___41143 = arguments.length;
var i__31336__auto___41144 = (0);
while(true){
if((i__31336__auto___41144 < len__31335__auto___41143)){
args41069.push((arguments[i__31336__auto___41144]));

var G__41145 = (i__31336__auto___41144 + (1));
i__31336__auto___41144 = G__41145;
continue;
} else {
}
break;
}

var G__41071 = args41069.length;
switch (G__41071) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41069.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38336__auto___41147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38336__auto___41147,out){
return (function (){
var f__38337__auto__ = (function (){var switch__38224__auto__ = ((function (c__38336__auto___41147,out){
return (function (state_41113){
var state_val_41114 = (state_41113[(1)]);
if((state_val_41114 === (7))){
var inst_41109 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41115_41148 = state_41113__$1;
(statearr_41115_41148[(2)] = inst_41109);

(statearr_41115_41148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (1))){
var inst_41072 = [];
var inst_41073 = inst_41072;
var inst_41074 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41113__$1 = (function (){var statearr_41116 = state_41113;
(statearr_41116[(7)] = inst_41074);

(statearr_41116[(8)] = inst_41073);

return statearr_41116;
})();
var statearr_41117_41149 = state_41113__$1;
(statearr_41117_41149[(2)] = null);

(statearr_41117_41149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (4))){
var inst_41077 = (state_41113[(9)]);
var inst_41077__$1 = (state_41113[(2)]);
var inst_41078 = (inst_41077__$1 == null);
var inst_41079 = cljs.core.not.call(null,inst_41078);
var state_41113__$1 = (function (){var statearr_41118 = state_41113;
(statearr_41118[(9)] = inst_41077__$1);

return statearr_41118;
})();
if(inst_41079){
var statearr_41119_41150 = state_41113__$1;
(statearr_41119_41150[(1)] = (5));

} else {
var statearr_41120_41151 = state_41113__$1;
(statearr_41120_41151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (15))){
var inst_41103 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41121_41152 = state_41113__$1;
(statearr_41121_41152[(2)] = inst_41103);

(statearr_41121_41152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (13))){
var state_41113__$1 = state_41113;
var statearr_41122_41153 = state_41113__$1;
(statearr_41122_41153[(2)] = null);

(statearr_41122_41153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (6))){
var inst_41073 = (state_41113[(8)]);
var inst_41098 = inst_41073.length;
var inst_41099 = (inst_41098 > (0));
var state_41113__$1 = state_41113;
if(cljs.core.truth_(inst_41099)){
var statearr_41123_41154 = state_41113__$1;
(statearr_41123_41154[(1)] = (12));

} else {
var statearr_41124_41155 = state_41113__$1;
(statearr_41124_41155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (3))){
var inst_41111 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41113__$1,inst_41111);
} else {
if((state_val_41114 === (12))){
var inst_41073 = (state_41113[(8)]);
var inst_41101 = cljs.core.vec.call(null,inst_41073);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41113__$1,(15),out,inst_41101);
} else {
if((state_val_41114 === (2))){
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41113__$1,(4),ch);
} else {
if((state_val_41114 === (11))){
var inst_41077 = (state_41113[(9)]);
var inst_41081 = (state_41113[(10)]);
var inst_41091 = (state_41113[(2)]);
var inst_41092 = [];
var inst_41093 = inst_41092.push(inst_41077);
var inst_41073 = inst_41092;
var inst_41074 = inst_41081;
var state_41113__$1 = (function (){var statearr_41125 = state_41113;
(statearr_41125[(7)] = inst_41074);

(statearr_41125[(11)] = inst_41093);

(statearr_41125[(12)] = inst_41091);

(statearr_41125[(8)] = inst_41073);

return statearr_41125;
})();
var statearr_41126_41156 = state_41113__$1;
(statearr_41126_41156[(2)] = null);

(statearr_41126_41156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (9))){
var inst_41073 = (state_41113[(8)]);
var inst_41089 = cljs.core.vec.call(null,inst_41073);
var state_41113__$1 = state_41113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41113__$1,(11),out,inst_41089);
} else {
if((state_val_41114 === (5))){
var inst_41077 = (state_41113[(9)]);
var inst_41074 = (state_41113[(7)]);
var inst_41081 = (state_41113[(10)]);
var inst_41081__$1 = f.call(null,inst_41077);
var inst_41082 = cljs.core._EQ_.call(null,inst_41081__$1,inst_41074);
var inst_41083 = cljs.core.keyword_identical_QMARK_.call(null,inst_41074,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41084 = (inst_41082) || (inst_41083);
var state_41113__$1 = (function (){var statearr_41127 = state_41113;
(statearr_41127[(10)] = inst_41081__$1);

return statearr_41127;
})();
if(cljs.core.truth_(inst_41084)){
var statearr_41128_41157 = state_41113__$1;
(statearr_41128_41157[(1)] = (8));

} else {
var statearr_41129_41158 = state_41113__$1;
(statearr_41129_41158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (14))){
var inst_41106 = (state_41113[(2)]);
var inst_41107 = cljs.core.async.close_BANG_.call(null,out);
var state_41113__$1 = (function (){var statearr_41131 = state_41113;
(statearr_41131[(13)] = inst_41106);

return statearr_41131;
})();
var statearr_41132_41159 = state_41113__$1;
(statearr_41132_41159[(2)] = inst_41107);

(statearr_41132_41159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (10))){
var inst_41096 = (state_41113[(2)]);
var state_41113__$1 = state_41113;
var statearr_41133_41160 = state_41113__$1;
(statearr_41133_41160[(2)] = inst_41096);

(statearr_41133_41160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41114 === (8))){
var inst_41077 = (state_41113[(9)]);
var inst_41081 = (state_41113[(10)]);
var inst_41073 = (state_41113[(8)]);
var inst_41086 = inst_41073.push(inst_41077);
var tmp41130 = inst_41073;
var inst_41073__$1 = tmp41130;
var inst_41074 = inst_41081;
var state_41113__$1 = (function (){var statearr_41134 = state_41113;
(statearr_41134[(7)] = inst_41074);

(statearr_41134[(14)] = inst_41086);

(statearr_41134[(8)] = inst_41073__$1);

return statearr_41134;
})();
var statearr_41135_41161 = state_41113__$1;
(statearr_41135_41161[(2)] = null);

(statearr_41135_41161[(1)] = (2));


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
});})(c__38336__auto___41147,out))
;
return ((function (switch__38224__auto__,c__38336__auto___41147,out){
return (function() {
var cljs$core$async$state_machine__38225__auto__ = null;
var cljs$core$async$state_machine__38225__auto____0 = (function (){
var statearr_41139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41139[(0)] = cljs$core$async$state_machine__38225__auto__);

(statearr_41139[(1)] = (1));

return statearr_41139;
});
var cljs$core$async$state_machine__38225__auto____1 = (function (state_41113){
while(true){
var ret_value__38226__auto__ = (function (){try{while(true){
var result__38227__auto__ = switch__38224__auto__.call(null,state_41113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38227__auto__;
}
break;
}
}catch (e41140){if((e41140 instanceof Object)){
var ex__38228__auto__ = e41140;
var statearr_41141_41162 = state_41113;
(statearr_41141_41162[(5)] = ex__38228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41163 = state_41113;
state_41113 = G__41163;
continue;
} else {
return ret_value__38226__auto__;
}
break;
}
});
cljs$core$async$state_machine__38225__auto__ = function(state_41113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38225__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38225__auto____1.call(this,state_41113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38225__auto____0;
cljs$core$async$state_machine__38225__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38225__auto____1;
return cljs$core$async$state_machine__38225__auto__;
})()
;})(switch__38224__auto__,c__38336__auto___41147,out))
})();
var state__38338__auto__ = (function (){var statearr_41142 = f__38337__auto__.call(null);
(statearr_41142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38336__auto___41147);

return statearr_41142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38338__auto__);
});})(c__38336__auto___41147,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

