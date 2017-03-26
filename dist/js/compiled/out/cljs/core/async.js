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
var args36558 = [];
var len__31204__auto___36564 = arguments.length;
var i__31205__auto___36565 = (0);
while(true){
if((i__31205__auto___36565 < len__31204__auto___36564)){
args36558.push((arguments[i__31205__auto___36565]));

var G__36566 = (i__31205__auto___36565 + (1));
i__31205__auto___36565 = G__36566;
continue;
} else {
}
break;
}

var G__36560 = args36558.length;
switch (G__36560) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36558.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async36561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36561 = (function (f,blockable,meta36562){
this.f = f;
this.blockable = blockable;
this.meta36562 = meta36562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36563,meta36562__$1){
var self__ = this;
var _36563__$1 = this;
return (new cljs.core.async.t_cljs$core$async36561(self__.f,self__.blockable,meta36562__$1));
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36563){
var self__ = this;
var _36563__$1 = this;
return self__.meta36562;
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36562","meta36562",1241249231,null)], null);
});

cljs.core.async.t_cljs$core$async36561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36561";

cljs.core.async.t_cljs$core$async36561.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async36561");
});

cljs.core.async.__GT_t_cljs$core$async36561 = (function cljs$core$async$__GT_t_cljs$core$async36561(f__$1,blockable__$1,meta36562){
return (new cljs.core.async.t_cljs$core$async36561(f__$1,blockable__$1,meta36562));
});

}

return (new cljs.core.async.t_cljs$core$async36561(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args36570 = [];
var len__31204__auto___36573 = arguments.length;
var i__31205__auto___36574 = (0);
while(true){
if((i__31205__auto___36574 < len__31204__auto___36573)){
args36570.push((arguments[i__31205__auto___36574]));

var G__36575 = (i__31205__auto___36574 + (1));
i__31205__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var G__36572 = args36570.length;
switch (G__36572) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36570.length)].join('')));

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
var args36577 = [];
var len__31204__auto___36580 = arguments.length;
var i__31205__auto___36581 = (0);
while(true){
if((i__31205__auto___36581 < len__31204__auto___36580)){
args36577.push((arguments[i__31205__auto___36581]));

var G__36582 = (i__31205__auto___36581 + (1));
i__31205__auto___36581 = G__36582;
continue;
} else {
}
break;
}

var G__36579 = args36577.length;
switch (G__36579) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36577.length)].join('')));

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
var args36584 = [];
var len__31204__auto___36587 = arguments.length;
var i__31205__auto___36588 = (0);
while(true){
if((i__31205__auto___36588 < len__31204__auto___36587)){
args36584.push((arguments[i__31205__auto___36588]));

var G__36589 = (i__31205__auto___36588 + (1));
i__31205__auto___36588 = G__36589;
continue;
} else {
}
break;
}

var G__36586 = args36584.length;
switch (G__36586) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36584.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36591 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36591);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36591,ret){
return (function (){
return fn1.call(null,val_36591);
});})(val_36591,ret))
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
var args36592 = [];
var len__31204__auto___36595 = arguments.length;
var i__31205__auto___36596 = (0);
while(true){
if((i__31205__auto___36596 < len__31204__auto___36595)){
args36592.push((arguments[i__31205__auto___36596]));

var G__36597 = (i__31205__auto___36596 + (1));
i__31205__auto___36596 = G__36597;
continue;
} else {
}
break;
}

var G__36594 = args36592.length;
switch (G__36594) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36592.length)].join('')));

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
var n__31014__auto___36599 = n;
var x_36600 = (0);
while(true){
if((x_36600 < n__31014__auto___36599)){
(a[x_36600] = (0));

var G__36601 = (x_36600 + (1));
x_36600 = G__36601;
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

var G__36602 = (i + (1));
i = G__36602;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36606 = (function (flag,meta36607){
this.flag = flag;
this.meta36607 = meta36607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36608,meta36607__$1){
var self__ = this;
var _36608__$1 = this;
return (new cljs.core.async.t_cljs$core$async36606(self__.flag,meta36607__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36608){
var self__ = this;
var _36608__$1 = this;
return self__.meta36607;
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36607","meta36607",542749648,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36606";

cljs.core.async.t_cljs$core$async36606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async36606");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36606(flag__$1,meta36607){
return (new cljs.core.async.t_cljs$core$async36606(flag__$1,meta36607));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36606(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36612 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36612 = (function (flag,cb,meta36613){
this.flag = flag;
this.cb = cb;
this.meta36613 = meta36613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36614,meta36613__$1){
var self__ = this;
var _36614__$1 = this;
return (new cljs.core.async.t_cljs$core$async36612(self__.flag,self__.cb,meta36613__$1));
});

cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36614){
var self__ = this;
var _36614__$1 = this;
return self__.meta36613;
});

cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36613","meta36613",-1581847743,null)], null);
});

cljs.core.async.t_cljs$core$async36612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36612";

cljs.core.async.t_cljs$core$async36612.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async36612");
});

cljs.core.async.__GT_t_cljs$core$async36612 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36612(flag__$1,cb__$1,meta36613){
return (new cljs.core.async.t_cljs$core$async36612(flag__$1,cb__$1,meta36613));
});

}

return (new cljs.core.async.t_cljs$core$async36612(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36615_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36615_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36616_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30096__auto__ = wport;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36617 = (i + (1));
i = G__36617;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30096__auto__ = ret;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30084__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30084__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30084__auto__;
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
var args__31211__auto__ = [];
var len__31204__auto___36623 = arguments.length;
var i__31205__auto___36624 = (0);
while(true){
if((i__31205__auto___36624 < len__31204__auto___36623)){
args__31211__auto__.push((arguments[i__31205__auto___36624]));

var G__36625 = (i__31205__auto___36624 + (1));
i__31205__auto___36624 = G__36625;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36620){
var map__36621 = p__36620;
var map__36621__$1 = ((((!((map__36621 == null)))?((((map__36621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36621):map__36621);
var opts = map__36621__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36618){
var G__36619 = cljs.core.first.call(null,seq36618);
var seq36618__$1 = cljs.core.next.call(null,seq36618);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36619,seq36618__$1);
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
var args36626 = [];
var len__31204__auto___36676 = arguments.length;
var i__31205__auto___36677 = (0);
while(true){
if((i__31205__auto___36677 < len__31204__auto___36676)){
args36626.push((arguments[i__31205__auto___36677]));

var G__36678 = (i__31205__auto___36677 + (1));
i__31205__auto___36677 = G__36678;
continue;
} else {
}
break;
}

var G__36628 = args36626.length;
switch (G__36628) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36626.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36513__auto___36680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___36680){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___36680){
return (function (state_36652){
var state_val_36653 = (state_36652[(1)]);
if((state_val_36653 === (7))){
var inst_36648 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36654_36681 = state_36652__$1;
(statearr_36654_36681[(2)] = inst_36648);

(statearr_36654_36681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (1))){
var state_36652__$1 = state_36652;
var statearr_36655_36682 = state_36652__$1;
(statearr_36655_36682[(2)] = null);

(statearr_36655_36682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (4))){
var inst_36631 = (state_36652[(7)]);
var inst_36631__$1 = (state_36652[(2)]);
var inst_36632 = (inst_36631__$1 == null);
var state_36652__$1 = (function (){var statearr_36656 = state_36652;
(statearr_36656[(7)] = inst_36631__$1);

return statearr_36656;
})();
if(cljs.core.truth_(inst_36632)){
var statearr_36657_36683 = state_36652__$1;
(statearr_36657_36683[(1)] = (5));

} else {
var statearr_36658_36684 = state_36652__$1;
(statearr_36658_36684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (13))){
var state_36652__$1 = state_36652;
var statearr_36659_36685 = state_36652__$1;
(statearr_36659_36685[(2)] = null);

(statearr_36659_36685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (6))){
var inst_36631 = (state_36652[(7)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36652__$1,(11),to,inst_36631);
} else {
if((state_val_36653 === (3))){
var inst_36650 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36652__$1,inst_36650);
} else {
if((state_val_36653 === (12))){
var state_36652__$1 = state_36652;
var statearr_36660_36686 = state_36652__$1;
(statearr_36660_36686[(2)] = null);

(statearr_36660_36686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (2))){
var state_36652__$1 = state_36652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36652__$1,(4),from);
} else {
if((state_val_36653 === (11))){
var inst_36641 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
if(cljs.core.truth_(inst_36641)){
var statearr_36661_36687 = state_36652__$1;
(statearr_36661_36687[(1)] = (12));

} else {
var statearr_36662_36688 = state_36652__$1;
(statearr_36662_36688[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (9))){
var state_36652__$1 = state_36652;
var statearr_36663_36689 = state_36652__$1;
(statearr_36663_36689[(2)] = null);

(statearr_36663_36689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (5))){
var state_36652__$1 = state_36652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36664_36690 = state_36652__$1;
(statearr_36664_36690[(1)] = (8));

} else {
var statearr_36665_36691 = state_36652__$1;
(statearr_36665_36691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (14))){
var inst_36646 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36666_36692 = state_36652__$1;
(statearr_36666_36692[(2)] = inst_36646);

(statearr_36666_36692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (10))){
var inst_36638 = (state_36652[(2)]);
var state_36652__$1 = state_36652;
var statearr_36667_36693 = state_36652__$1;
(statearr_36667_36693[(2)] = inst_36638);

(statearr_36667_36693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36653 === (8))){
var inst_36635 = cljs.core.async.close_BANG_.call(null,to);
var state_36652__$1 = state_36652;
var statearr_36668_36694 = state_36652__$1;
(statearr_36668_36694[(2)] = inst_36635);

(statearr_36668_36694[(1)] = (10));


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
});})(c__36513__auto___36680))
;
return ((function (switch__36401__auto__,c__36513__auto___36680){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_36672 = [null,null,null,null,null,null,null,null];
(statearr_36672[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_36672[(1)] = (1));

return statearr_36672;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_36652){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_36652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e36673){if((e36673 instanceof Object)){
var ex__36405__auto__ = e36673;
var statearr_36674_36695 = state_36652;
(statearr_36674_36695[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36696 = state_36652;
state_36652 = G__36696;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_36652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_36652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___36680))
})();
var state__36515__auto__ = (function (){var statearr_36675 = f__36514__auto__.call(null);
(statearr_36675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___36680);

return statearr_36675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___36680))
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
return (function (p__36884){
var vec__36885 = p__36884;
var v = cljs.core.nth.call(null,vec__36885,(0),null);
var p = cljs.core.nth.call(null,vec__36885,(1),null);
var job = vec__36885;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36513__auto___37071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results){
return (function (state_36892){
var state_val_36893 = (state_36892[(1)]);
if((state_val_36893 === (1))){
var state_36892__$1 = state_36892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36892__$1,(2),res,v);
} else {
if((state_val_36893 === (2))){
var inst_36889 = (state_36892[(2)]);
var inst_36890 = cljs.core.async.close_BANG_.call(null,res);
var state_36892__$1 = (function (){var statearr_36894 = state_36892;
(statearr_36894[(7)] = inst_36889);

return statearr_36894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36892__$1,inst_36890);
} else {
return null;
}
}
});})(c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results))
;
return ((function (switch__36401__auto__,c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_36898 = [null,null,null,null,null,null,null,null];
(statearr_36898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__);

(statearr_36898[(1)] = (1));

return statearr_36898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1 = (function (state_36892){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_36892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e36899){if((e36899 instanceof Object)){
var ex__36405__auto__ = e36899;
var statearr_36900_37072 = state_36892;
(statearr_36900_37072[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37073 = state_36892;
state_36892 = G__37073;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = function(state_36892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1.call(this,state_36892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results))
})();
var state__36515__auto__ = (function (){var statearr_36901 = f__36514__auto__.call(null);
(statearr_36901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37071);

return statearr_36901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___37071,res,vec__36885,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36902){
var vec__36903 = p__36902;
var v = cljs.core.nth.call(null,vec__36903,(0),null);
var p = cljs.core.nth.call(null,vec__36903,(1),null);
var job = vec__36903;
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
var n__31014__auto___37074 = n;
var __37075 = (0);
while(true){
if((__37075 < n__31014__auto___37074)){
var G__36906_37076 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36906_37076) {
case "compute":
var c__36513__auto___37078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37075,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (__37075,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function (state_36919){
var state_val_36920 = (state_36919[(1)]);
if((state_val_36920 === (1))){
var state_36919__$1 = state_36919;
var statearr_36921_37079 = state_36919__$1;
(statearr_36921_37079[(2)] = null);

(statearr_36921_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (2))){
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36919__$1,(4),jobs);
} else {
if((state_val_36920 === (3))){
var inst_36917 = (state_36919[(2)]);
var state_36919__$1 = state_36919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36919__$1,inst_36917);
} else {
if((state_val_36920 === (4))){
var inst_36909 = (state_36919[(2)]);
var inst_36910 = process.call(null,inst_36909);
var state_36919__$1 = state_36919;
if(cljs.core.truth_(inst_36910)){
var statearr_36922_37080 = state_36919__$1;
(statearr_36922_37080[(1)] = (5));

} else {
var statearr_36923_37081 = state_36919__$1;
(statearr_36923_37081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (5))){
var state_36919__$1 = state_36919;
var statearr_36924_37082 = state_36919__$1;
(statearr_36924_37082[(2)] = null);

(statearr_36924_37082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (6))){
var state_36919__$1 = state_36919;
var statearr_36925_37083 = state_36919__$1;
(statearr_36925_37083[(2)] = null);

(statearr_36925_37083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36920 === (7))){
var inst_36915 = (state_36919[(2)]);
var state_36919__$1 = state_36919;
var statearr_36926_37084 = state_36919__$1;
(statearr_36926_37084[(2)] = inst_36915);

(statearr_36926_37084[(1)] = (3));


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
});})(__37075,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
;
return ((function (__37075,switch__36401__auto__,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_36930 = [null,null,null,null,null,null,null];
(statearr_36930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__);

(statearr_36930[(1)] = (1));

return statearr_36930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1 = (function (state_36919){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_36919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e36931){if((e36931 instanceof Object)){
var ex__36405__auto__ = e36931;
var statearr_36932_37085 = state_36919;
(statearr_36932_37085[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37086 = state_36919;
state_36919 = G__37086;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = function(state_36919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1.call(this,state_36919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__;
})()
;})(__37075,switch__36401__auto__,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
})();
var state__36515__auto__ = (function (){var statearr_36933 = f__36514__auto__.call(null);
(statearr_36933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37078);

return statearr_36933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(__37075,c__36513__auto___37078,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
);


break;
case "async":
var c__36513__auto___37087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37075,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (__37075,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function (state_36946){
var state_val_36947 = (state_36946[(1)]);
if((state_val_36947 === (1))){
var state_36946__$1 = state_36946;
var statearr_36948_37088 = state_36946__$1;
(statearr_36948_37088[(2)] = null);

(statearr_36948_37088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (2))){
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36946__$1,(4),jobs);
} else {
if((state_val_36947 === (3))){
var inst_36944 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36946__$1,inst_36944);
} else {
if((state_val_36947 === (4))){
var inst_36936 = (state_36946[(2)]);
var inst_36937 = async.call(null,inst_36936);
var state_36946__$1 = state_36946;
if(cljs.core.truth_(inst_36937)){
var statearr_36949_37089 = state_36946__$1;
(statearr_36949_37089[(1)] = (5));

} else {
var statearr_36950_37090 = state_36946__$1;
(statearr_36950_37090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (5))){
var state_36946__$1 = state_36946;
var statearr_36951_37091 = state_36946__$1;
(statearr_36951_37091[(2)] = null);

(statearr_36951_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (6))){
var state_36946__$1 = state_36946;
var statearr_36952_37092 = state_36946__$1;
(statearr_36952_37092[(2)] = null);

(statearr_36952_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36947 === (7))){
var inst_36942 = (state_36946[(2)]);
var state_36946__$1 = state_36946;
var statearr_36953_37093 = state_36946__$1;
(statearr_36953_37093[(2)] = inst_36942);

(statearr_36953_37093[(1)] = (3));


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
});})(__37075,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
;
return ((function (__37075,switch__36401__auto__,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_36957 = [null,null,null,null,null,null,null];
(statearr_36957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__);

(statearr_36957[(1)] = (1));

return statearr_36957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1 = (function (state_36946){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_36946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e36958){if((e36958 instanceof Object)){
var ex__36405__auto__ = e36958;
var statearr_36959_37094 = state_36946;
(statearr_36959_37094[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37095 = state_36946;
state_36946 = G__37095;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = function(state_36946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1.call(this,state_36946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__;
})()
;})(__37075,switch__36401__auto__,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
})();
var state__36515__auto__ = (function (){var statearr_36960 = f__36514__auto__.call(null);
(statearr_36960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37087);

return statearr_36960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(__37075,c__36513__auto___37087,G__36906_37076,n__31014__auto___37074,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37096 = (__37075 + (1));
__37075 = G__37096;
continue;
} else {
}
break;
}

var c__36513__auto___37097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___37097,jobs,results,process,async){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___37097,jobs,results,process,async){
return (function (state_36982){
var state_val_36983 = (state_36982[(1)]);
if((state_val_36983 === (1))){
var state_36982__$1 = state_36982;
var statearr_36984_37098 = state_36982__$1;
(statearr_36984_37098[(2)] = null);

(statearr_36984_37098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (2))){
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36982__$1,(4),from);
} else {
if((state_val_36983 === (3))){
var inst_36980 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36982__$1,inst_36980);
} else {
if((state_val_36983 === (4))){
var inst_36963 = (state_36982[(7)]);
var inst_36963__$1 = (state_36982[(2)]);
var inst_36964 = (inst_36963__$1 == null);
var state_36982__$1 = (function (){var statearr_36985 = state_36982;
(statearr_36985[(7)] = inst_36963__$1);

return statearr_36985;
})();
if(cljs.core.truth_(inst_36964)){
var statearr_36986_37099 = state_36982__$1;
(statearr_36986_37099[(1)] = (5));

} else {
var statearr_36987_37100 = state_36982__$1;
(statearr_36987_37100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (5))){
var inst_36966 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36982__$1 = state_36982;
var statearr_36988_37101 = state_36982__$1;
(statearr_36988_37101[(2)] = inst_36966);

(statearr_36988_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (6))){
var inst_36968 = (state_36982[(8)]);
var inst_36963 = (state_36982[(7)]);
var inst_36968__$1 = cljs.core.async.chan.call(null,(1));
var inst_36969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36970 = [inst_36963,inst_36968__$1];
var inst_36971 = (new cljs.core.PersistentVector(null,2,(5),inst_36969,inst_36970,null));
var state_36982__$1 = (function (){var statearr_36989 = state_36982;
(statearr_36989[(8)] = inst_36968__$1);

return statearr_36989;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36982__$1,(8),jobs,inst_36971);
} else {
if((state_val_36983 === (7))){
var inst_36978 = (state_36982[(2)]);
var state_36982__$1 = state_36982;
var statearr_36990_37102 = state_36982__$1;
(statearr_36990_37102[(2)] = inst_36978);

(statearr_36990_37102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36983 === (8))){
var inst_36968 = (state_36982[(8)]);
var inst_36973 = (state_36982[(2)]);
var state_36982__$1 = (function (){var statearr_36991 = state_36982;
(statearr_36991[(9)] = inst_36973);

return statearr_36991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36982__$1,(9),results,inst_36968);
} else {
if((state_val_36983 === (9))){
var inst_36975 = (state_36982[(2)]);
var state_36982__$1 = (function (){var statearr_36992 = state_36982;
(statearr_36992[(10)] = inst_36975);

return statearr_36992;
})();
var statearr_36993_37103 = state_36982__$1;
(statearr_36993_37103[(2)] = null);

(statearr_36993_37103[(1)] = (2));


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
});})(c__36513__auto___37097,jobs,results,process,async))
;
return ((function (switch__36401__auto__,c__36513__auto___37097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_36997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__);

(statearr_36997[(1)] = (1));

return statearr_36997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1 = (function (state_36982){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_36982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e36998){if((e36998 instanceof Object)){
var ex__36405__auto__ = e36998;
var statearr_36999_37104 = state_36982;
(statearr_36999_37104[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37105 = state_36982;
state_36982 = G__37105;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = function(state_36982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1.call(this,state_36982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___37097,jobs,results,process,async))
})();
var state__36515__auto__ = (function (){var statearr_37000 = f__36514__auto__.call(null);
(statearr_37000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37097);

return statearr_37000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___37097,jobs,results,process,async))
);


var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__,jobs,results,process,async){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__,jobs,results,process,async){
return (function (state_37038){
var state_val_37039 = (state_37038[(1)]);
if((state_val_37039 === (7))){
var inst_37034 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37040_37106 = state_37038__$1;
(statearr_37040_37106[(2)] = inst_37034);

(statearr_37040_37106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (20))){
var state_37038__$1 = state_37038;
var statearr_37041_37107 = state_37038__$1;
(statearr_37041_37107[(2)] = null);

(statearr_37041_37107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (1))){
var state_37038__$1 = state_37038;
var statearr_37042_37108 = state_37038__$1;
(statearr_37042_37108[(2)] = null);

(statearr_37042_37108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (4))){
var inst_37003 = (state_37038[(7)]);
var inst_37003__$1 = (state_37038[(2)]);
var inst_37004 = (inst_37003__$1 == null);
var state_37038__$1 = (function (){var statearr_37043 = state_37038;
(statearr_37043[(7)] = inst_37003__$1);

return statearr_37043;
})();
if(cljs.core.truth_(inst_37004)){
var statearr_37044_37109 = state_37038__$1;
(statearr_37044_37109[(1)] = (5));

} else {
var statearr_37045_37110 = state_37038__$1;
(statearr_37045_37110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (15))){
var inst_37016 = (state_37038[(8)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37038__$1,(18),to,inst_37016);
} else {
if((state_val_37039 === (21))){
var inst_37029 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37046_37111 = state_37038__$1;
(statearr_37046_37111[(2)] = inst_37029);

(statearr_37046_37111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (13))){
var inst_37031 = (state_37038[(2)]);
var state_37038__$1 = (function (){var statearr_37047 = state_37038;
(statearr_37047[(9)] = inst_37031);

return statearr_37047;
})();
var statearr_37048_37112 = state_37038__$1;
(statearr_37048_37112[(2)] = null);

(statearr_37048_37112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (6))){
var inst_37003 = (state_37038[(7)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37038__$1,(11),inst_37003);
} else {
if((state_val_37039 === (17))){
var inst_37024 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
if(cljs.core.truth_(inst_37024)){
var statearr_37049_37113 = state_37038__$1;
(statearr_37049_37113[(1)] = (19));

} else {
var statearr_37050_37114 = state_37038__$1;
(statearr_37050_37114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (3))){
var inst_37036 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37038__$1,inst_37036);
} else {
if((state_val_37039 === (12))){
var inst_37013 = (state_37038[(10)]);
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37038__$1,(14),inst_37013);
} else {
if((state_val_37039 === (2))){
var state_37038__$1 = state_37038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37038__$1,(4),results);
} else {
if((state_val_37039 === (19))){
var state_37038__$1 = state_37038;
var statearr_37051_37115 = state_37038__$1;
(statearr_37051_37115[(2)] = null);

(statearr_37051_37115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (11))){
var inst_37013 = (state_37038[(2)]);
var state_37038__$1 = (function (){var statearr_37052 = state_37038;
(statearr_37052[(10)] = inst_37013);

return statearr_37052;
})();
var statearr_37053_37116 = state_37038__$1;
(statearr_37053_37116[(2)] = null);

(statearr_37053_37116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (9))){
var state_37038__$1 = state_37038;
var statearr_37054_37117 = state_37038__$1;
(statearr_37054_37117[(2)] = null);

(statearr_37054_37117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (5))){
var state_37038__$1 = state_37038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37055_37118 = state_37038__$1;
(statearr_37055_37118[(1)] = (8));

} else {
var statearr_37056_37119 = state_37038__$1;
(statearr_37056_37119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (14))){
var inst_37016 = (state_37038[(8)]);
var inst_37018 = (state_37038[(11)]);
var inst_37016__$1 = (state_37038[(2)]);
var inst_37017 = (inst_37016__$1 == null);
var inst_37018__$1 = cljs.core.not.call(null,inst_37017);
var state_37038__$1 = (function (){var statearr_37057 = state_37038;
(statearr_37057[(8)] = inst_37016__$1);

(statearr_37057[(11)] = inst_37018__$1);

return statearr_37057;
})();
if(inst_37018__$1){
var statearr_37058_37120 = state_37038__$1;
(statearr_37058_37120[(1)] = (15));

} else {
var statearr_37059_37121 = state_37038__$1;
(statearr_37059_37121[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (16))){
var inst_37018 = (state_37038[(11)]);
var state_37038__$1 = state_37038;
var statearr_37060_37122 = state_37038__$1;
(statearr_37060_37122[(2)] = inst_37018);

(statearr_37060_37122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (10))){
var inst_37010 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37061_37123 = state_37038__$1;
(statearr_37061_37123[(2)] = inst_37010);

(statearr_37061_37123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (18))){
var inst_37021 = (state_37038[(2)]);
var state_37038__$1 = state_37038;
var statearr_37062_37124 = state_37038__$1;
(statearr_37062_37124[(2)] = inst_37021);

(statearr_37062_37124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37039 === (8))){
var inst_37007 = cljs.core.async.close_BANG_.call(null,to);
var state_37038__$1 = state_37038;
var statearr_37063_37125 = state_37038__$1;
(statearr_37063_37125[(2)] = inst_37007);

(statearr_37063_37125[(1)] = (10));


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
});})(c__36513__auto__,jobs,results,process,async))
;
return ((function (switch__36401__auto__,c__36513__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_37067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__);

(statearr_37067[(1)] = (1));

return statearr_37067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1 = (function (state_37038){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37068){if((e37068 instanceof Object)){
var ex__36405__auto__ = e37068;
var statearr_37069_37126 = state_37038;
(statearr_37069_37126[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37127 = state_37038;
state_37038 = G__37127;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__ = function(state_37038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1.call(this,state_37038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__,jobs,results,process,async))
})();
var state__36515__auto__ = (function (){var statearr_37070 = f__36514__auto__.call(null);
(statearr_37070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_37070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__,jobs,results,process,async))
);

return c__36513__auto__;
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
var args37128 = [];
var len__31204__auto___37131 = arguments.length;
var i__31205__auto___37132 = (0);
while(true){
if((i__31205__auto___37132 < len__31204__auto___37131)){
args37128.push((arguments[i__31205__auto___37132]));

var G__37133 = (i__31205__auto___37132 + (1));
i__31205__auto___37132 = G__37133;
continue;
} else {
}
break;
}

var G__37130 = args37128.length;
switch (G__37130) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37128.length)].join('')));

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
var args37135 = [];
var len__31204__auto___37138 = arguments.length;
var i__31205__auto___37139 = (0);
while(true){
if((i__31205__auto___37139 < len__31204__auto___37138)){
args37135.push((arguments[i__31205__auto___37139]));

var G__37140 = (i__31205__auto___37139 + (1));
i__31205__auto___37139 = G__37140;
continue;
} else {
}
break;
}

var G__37137 = args37135.length;
switch (G__37137) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37135.length)].join('')));

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
var args37142 = [];
var len__31204__auto___37195 = arguments.length;
var i__31205__auto___37196 = (0);
while(true){
if((i__31205__auto___37196 < len__31204__auto___37195)){
args37142.push((arguments[i__31205__auto___37196]));

var G__37197 = (i__31205__auto___37196 + (1));
i__31205__auto___37196 = G__37197;
continue;
} else {
}
break;
}

var G__37144 = args37142.length;
switch (G__37144) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37142.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36513__auto___37199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___37199,tc,fc){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___37199,tc,fc){
return (function (state_37170){
var state_val_37171 = (state_37170[(1)]);
if((state_val_37171 === (7))){
var inst_37166 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37172_37200 = state_37170__$1;
(statearr_37172_37200[(2)] = inst_37166);

(statearr_37172_37200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (1))){
var state_37170__$1 = state_37170;
var statearr_37173_37201 = state_37170__$1;
(statearr_37173_37201[(2)] = null);

(statearr_37173_37201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (4))){
var inst_37147 = (state_37170[(7)]);
var inst_37147__$1 = (state_37170[(2)]);
var inst_37148 = (inst_37147__$1 == null);
var state_37170__$1 = (function (){var statearr_37174 = state_37170;
(statearr_37174[(7)] = inst_37147__$1);

return statearr_37174;
})();
if(cljs.core.truth_(inst_37148)){
var statearr_37175_37202 = state_37170__$1;
(statearr_37175_37202[(1)] = (5));

} else {
var statearr_37176_37203 = state_37170__$1;
(statearr_37176_37203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (13))){
var state_37170__$1 = state_37170;
var statearr_37177_37204 = state_37170__$1;
(statearr_37177_37204[(2)] = null);

(statearr_37177_37204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (6))){
var inst_37147 = (state_37170[(7)]);
var inst_37153 = p.call(null,inst_37147);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37153)){
var statearr_37178_37205 = state_37170__$1;
(statearr_37178_37205[(1)] = (9));

} else {
var statearr_37179_37206 = state_37170__$1;
(statearr_37179_37206[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (3))){
var inst_37168 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37170__$1,inst_37168);
} else {
if((state_val_37171 === (12))){
var state_37170__$1 = state_37170;
var statearr_37180_37207 = state_37170__$1;
(statearr_37180_37207[(2)] = null);

(statearr_37180_37207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (2))){
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37170__$1,(4),ch);
} else {
if((state_val_37171 === (11))){
var inst_37147 = (state_37170[(7)]);
var inst_37157 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37170__$1,(8),inst_37157,inst_37147);
} else {
if((state_val_37171 === (9))){
var state_37170__$1 = state_37170;
var statearr_37181_37208 = state_37170__$1;
(statearr_37181_37208[(2)] = tc);

(statearr_37181_37208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (5))){
var inst_37150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37151 = cljs.core.async.close_BANG_.call(null,fc);
var state_37170__$1 = (function (){var statearr_37182 = state_37170;
(statearr_37182[(8)] = inst_37150);

return statearr_37182;
})();
var statearr_37183_37209 = state_37170__$1;
(statearr_37183_37209[(2)] = inst_37151);

(statearr_37183_37209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (14))){
var inst_37164 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
var statearr_37184_37210 = state_37170__$1;
(statearr_37184_37210[(2)] = inst_37164);

(statearr_37184_37210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (10))){
var state_37170__$1 = state_37170;
var statearr_37185_37211 = state_37170__$1;
(statearr_37185_37211[(2)] = fc);

(statearr_37185_37211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37171 === (8))){
var inst_37159 = (state_37170[(2)]);
var state_37170__$1 = state_37170;
if(cljs.core.truth_(inst_37159)){
var statearr_37186_37212 = state_37170__$1;
(statearr_37186_37212[(1)] = (12));

} else {
var statearr_37187_37213 = state_37170__$1;
(statearr_37187_37213[(1)] = (13));

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
});})(c__36513__auto___37199,tc,fc))
;
return ((function (switch__36401__auto__,c__36513__auto___37199,tc,fc){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_37191 = [null,null,null,null,null,null,null,null,null];
(statearr_37191[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_37191[(1)] = (1));

return statearr_37191;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_37170){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37192){if((e37192 instanceof Object)){
var ex__36405__auto__ = e37192;
var statearr_37193_37214 = state_37170;
(statearr_37193_37214[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37215 = state_37170;
state_37170 = G__37215;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_37170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_37170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___37199,tc,fc))
})();
var state__36515__auto__ = (function (){var statearr_37194 = f__36514__auto__.call(null);
(statearr_37194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37199);

return statearr_37194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___37199,tc,fc))
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
var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__){
return (function (state_37279){
var state_val_37280 = (state_37279[(1)]);
if((state_val_37280 === (7))){
var inst_37275 = (state_37279[(2)]);
var state_37279__$1 = state_37279;
var statearr_37281_37302 = state_37279__$1;
(statearr_37281_37302[(2)] = inst_37275);

(statearr_37281_37302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (1))){
var inst_37259 = init;
var state_37279__$1 = (function (){var statearr_37282 = state_37279;
(statearr_37282[(7)] = inst_37259);

return statearr_37282;
})();
var statearr_37283_37303 = state_37279__$1;
(statearr_37283_37303[(2)] = null);

(statearr_37283_37303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (4))){
var inst_37262 = (state_37279[(8)]);
var inst_37262__$1 = (state_37279[(2)]);
var inst_37263 = (inst_37262__$1 == null);
var state_37279__$1 = (function (){var statearr_37284 = state_37279;
(statearr_37284[(8)] = inst_37262__$1);

return statearr_37284;
})();
if(cljs.core.truth_(inst_37263)){
var statearr_37285_37304 = state_37279__$1;
(statearr_37285_37304[(1)] = (5));

} else {
var statearr_37286_37305 = state_37279__$1;
(statearr_37286_37305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (6))){
var inst_37262 = (state_37279[(8)]);
var inst_37266 = (state_37279[(9)]);
var inst_37259 = (state_37279[(7)]);
var inst_37266__$1 = f.call(null,inst_37259,inst_37262);
var inst_37267 = cljs.core.reduced_QMARK_.call(null,inst_37266__$1);
var state_37279__$1 = (function (){var statearr_37287 = state_37279;
(statearr_37287[(9)] = inst_37266__$1);

return statearr_37287;
})();
if(inst_37267){
var statearr_37288_37306 = state_37279__$1;
(statearr_37288_37306[(1)] = (8));

} else {
var statearr_37289_37307 = state_37279__$1;
(statearr_37289_37307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (3))){
var inst_37277 = (state_37279[(2)]);
var state_37279__$1 = state_37279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37279__$1,inst_37277);
} else {
if((state_val_37280 === (2))){
var state_37279__$1 = state_37279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37279__$1,(4),ch);
} else {
if((state_val_37280 === (9))){
var inst_37266 = (state_37279[(9)]);
var inst_37259 = inst_37266;
var state_37279__$1 = (function (){var statearr_37290 = state_37279;
(statearr_37290[(7)] = inst_37259);

return statearr_37290;
})();
var statearr_37291_37308 = state_37279__$1;
(statearr_37291_37308[(2)] = null);

(statearr_37291_37308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (5))){
var inst_37259 = (state_37279[(7)]);
var state_37279__$1 = state_37279;
var statearr_37292_37309 = state_37279__$1;
(statearr_37292_37309[(2)] = inst_37259);

(statearr_37292_37309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (10))){
var inst_37273 = (state_37279[(2)]);
var state_37279__$1 = state_37279;
var statearr_37293_37310 = state_37279__$1;
(statearr_37293_37310[(2)] = inst_37273);

(statearr_37293_37310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37280 === (8))){
var inst_37266 = (state_37279[(9)]);
var inst_37269 = cljs.core.deref.call(null,inst_37266);
var state_37279__$1 = state_37279;
var statearr_37294_37311 = state_37279__$1;
(statearr_37294_37311[(2)] = inst_37269);

(statearr_37294_37311[(1)] = (10));


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
});})(c__36513__auto__))
;
return ((function (switch__36401__auto__,c__36513__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36402__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36402__auto____0 = (function (){
var statearr_37298 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37298[(0)] = cljs$core$async$reduce_$_state_machine__36402__auto__);

(statearr_37298[(1)] = (1));

return statearr_37298;
});
var cljs$core$async$reduce_$_state_machine__36402__auto____1 = (function (state_37279){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37299){if((e37299 instanceof Object)){
var ex__36405__auto__ = e37299;
var statearr_37300_37312 = state_37279;
(statearr_37300_37312[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37313 = state_37279;
state_37279 = G__37313;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36402__auto__ = function(state_37279){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36402__auto____1.call(this,state_37279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36402__auto____0;
cljs$core$async$reduce_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36402__auto____1;
return cljs$core$async$reduce_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__))
})();
var state__36515__auto__ = (function (){var statearr_37301 = f__36514__auto__.call(null);
(statearr_37301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__))
);

return c__36513__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__,f__$1){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__,f__$1){
return (function (state_37333){
var state_val_37334 = (state_37333[(1)]);
if((state_val_37334 === (1))){
var inst_37328 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37333__$1 = state_37333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37333__$1,(2),inst_37328);
} else {
if((state_val_37334 === (2))){
var inst_37330 = (state_37333[(2)]);
var inst_37331 = f__$1.call(null,inst_37330);
var state_37333__$1 = state_37333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37333__$1,inst_37331);
} else {
return null;
}
}
});})(c__36513__auto__,f__$1))
;
return ((function (switch__36401__auto__,c__36513__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36402__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36402__auto____0 = (function (){
var statearr_37338 = [null,null,null,null,null,null,null];
(statearr_37338[(0)] = cljs$core$async$transduce_$_state_machine__36402__auto__);

(statearr_37338[(1)] = (1));

return statearr_37338;
});
var cljs$core$async$transduce_$_state_machine__36402__auto____1 = (function (state_37333){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37339){if((e37339 instanceof Object)){
var ex__36405__auto__ = e37339;
var statearr_37340_37342 = state_37333;
(statearr_37340_37342[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37343 = state_37333;
state_37333 = G__37343;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36402__auto__ = function(state_37333){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36402__auto____1.call(this,state_37333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36402__auto____0;
cljs$core$async$transduce_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36402__auto____1;
return cljs$core$async$transduce_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__,f__$1))
})();
var state__36515__auto__ = (function (){var statearr_37341 = f__36514__auto__.call(null);
(statearr_37341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_37341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__,f__$1))
);

return c__36513__auto__;
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
var args37344 = [];
var len__31204__auto___37396 = arguments.length;
var i__31205__auto___37397 = (0);
while(true){
if((i__31205__auto___37397 < len__31204__auto___37396)){
args37344.push((arguments[i__31205__auto___37397]));

var G__37398 = (i__31205__auto___37397 + (1));
i__31205__auto___37397 = G__37398;
continue;
} else {
}
break;
}

var G__37346 = args37344.length;
switch (G__37346) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37344.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__){
return (function (state_37371){
var state_val_37372 = (state_37371[(1)]);
if((state_val_37372 === (7))){
var inst_37353 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37373_37400 = state_37371__$1;
(statearr_37373_37400[(2)] = inst_37353);

(statearr_37373_37400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (1))){
var inst_37347 = cljs.core.seq.call(null,coll);
var inst_37348 = inst_37347;
var state_37371__$1 = (function (){var statearr_37374 = state_37371;
(statearr_37374[(7)] = inst_37348);

return statearr_37374;
})();
var statearr_37375_37401 = state_37371__$1;
(statearr_37375_37401[(2)] = null);

(statearr_37375_37401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (4))){
var inst_37348 = (state_37371[(7)]);
var inst_37351 = cljs.core.first.call(null,inst_37348);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37371__$1,(7),ch,inst_37351);
} else {
if((state_val_37372 === (13))){
var inst_37365 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37376_37402 = state_37371__$1;
(statearr_37376_37402[(2)] = inst_37365);

(statearr_37376_37402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (6))){
var inst_37356 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37356)){
var statearr_37377_37403 = state_37371__$1;
(statearr_37377_37403[(1)] = (8));

} else {
var statearr_37378_37404 = state_37371__$1;
(statearr_37378_37404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (3))){
var inst_37369 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37371__$1,inst_37369);
} else {
if((state_val_37372 === (12))){
var state_37371__$1 = state_37371;
var statearr_37379_37405 = state_37371__$1;
(statearr_37379_37405[(2)] = null);

(statearr_37379_37405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (2))){
var inst_37348 = (state_37371[(7)]);
var state_37371__$1 = state_37371;
if(cljs.core.truth_(inst_37348)){
var statearr_37380_37406 = state_37371__$1;
(statearr_37380_37406[(1)] = (4));

} else {
var statearr_37381_37407 = state_37371__$1;
(statearr_37381_37407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (11))){
var inst_37362 = cljs.core.async.close_BANG_.call(null,ch);
var state_37371__$1 = state_37371;
var statearr_37382_37408 = state_37371__$1;
(statearr_37382_37408[(2)] = inst_37362);

(statearr_37382_37408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (9))){
var state_37371__$1 = state_37371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37383_37409 = state_37371__$1;
(statearr_37383_37409[(1)] = (11));

} else {
var statearr_37384_37410 = state_37371__$1;
(statearr_37384_37410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (5))){
var inst_37348 = (state_37371[(7)]);
var state_37371__$1 = state_37371;
var statearr_37385_37411 = state_37371__$1;
(statearr_37385_37411[(2)] = inst_37348);

(statearr_37385_37411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (10))){
var inst_37367 = (state_37371[(2)]);
var state_37371__$1 = state_37371;
var statearr_37386_37412 = state_37371__$1;
(statearr_37386_37412[(2)] = inst_37367);

(statearr_37386_37412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37372 === (8))){
var inst_37348 = (state_37371[(7)]);
var inst_37358 = cljs.core.next.call(null,inst_37348);
var inst_37348__$1 = inst_37358;
var state_37371__$1 = (function (){var statearr_37387 = state_37371;
(statearr_37387[(7)] = inst_37348__$1);

return statearr_37387;
})();
var statearr_37388_37413 = state_37371__$1;
(statearr_37388_37413[(2)] = null);

(statearr_37388_37413[(1)] = (2));


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
});})(c__36513__auto__))
;
return ((function (switch__36401__auto__,c__36513__auto__){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_37392 = [null,null,null,null,null,null,null,null];
(statearr_37392[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_37392[(1)] = (1));

return statearr_37392;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_37371){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37393){if((e37393 instanceof Object)){
var ex__36405__auto__ = e37393;
var statearr_37394_37414 = state_37371;
(statearr_37394_37414[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37415 = state_37371;
state_37371 = G__37415;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_37371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_37371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__))
})();
var state__36515__auto__ = (function (){var statearr_37395 = f__36514__auto__.call(null);
(statearr_37395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_37395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__))
);

return c__36513__auto__;
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
var x__30759__auto__ = (((_ == null))?null:_);
var m__30760__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,_);
} else {
var m__30760__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,_);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30760__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,ch);
} else {
var m__30760__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,ch);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m);
} else {
var m__30760__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37641 = (function (ch,cs,meta37642){
this.ch = ch;
this.cs = cs;
this.meta37642 = meta37642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37643,meta37642__$1){
var self__ = this;
var _37643__$1 = this;
return (new cljs.core.async.t_cljs$core$async37641(self__.ch,self__.cs,meta37642__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37643){
var self__ = this;
var _37643__$1 = this;
return self__.meta37642;
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37642","meta37642",956231860,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37641";

cljs.core.async.t_cljs$core$async37641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async37641");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37641 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37641(ch__$1,cs__$1,meta37642){
return (new cljs.core.async.t_cljs$core$async37641(ch__$1,cs__$1,meta37642));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37641(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36513__auto___37866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___37866,cs,m,dchan,dctr,done){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___37866,cs,m,dchan,dctr,done){
return (function (state_37778){
var state_val_37779 = (state_37778[(1)]);
if((state_val_37779 === (7))){
var inst_37774 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37780_37867 = state_37778__$1;
(statearr_37780_37867[(2)] = inst_37774);

(statearr_37780_37867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (20))){
var inst_37677 = (state_37778[(7)]);
var inst_37689 = cljs.core.first.call(null,inst_37677);
var inst_37690 = cljs.core.nth.call(null,inst_37689,(0),null);
var inst_37691 = cljs.core.nth.call(null,inst_37689,(1),null);
var state_37778__$1 = (function (){var statearr_37781 = state_37778;
(statearr_37781[(8)] = inst_37690);

return statearr_37781;
})();
if(cljs.core.truth_(inst_37691)){
var statearr_37782_37868 = state_37778__$1;
(statearr_37782_37868[(1)] = (22));

} else {
var statearr_37783_37869 = state_37778__$1;
(statearr_37783_37869[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (27))){
var inst_37646 = (state_37778[(9)]);
var inst_37721 = (state_37778[(10)]);
var inst_37726 = (state_37778[(11)]);
var inst_37719 = (state_37778[(12)]);
var inst_37726__$1 = cljs.core._nth.call(null,inst_37719,inst_37721);
var inst_37727 = cljs.core.async.put_BANG_.call(null,inst_37726__$1,inst_37646,done);
var state_37778__$1 = (function (){var statearr_37784 = state_37778;
(statearr_37784[(11)] = inst_37726__$1);

return statearr_37784;
})();
if(cljs.core.truth_(inst_37727)){
var statearr_37785_37870 = state_37778__$1;
(statearr_37785_37870[(1)] = (30));

} else {
var statearr_37786_37871 = state_37778__$1;
(statearr_37786_37871[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (1))){
var state_37778__$1 = state_37778;
var statearr_37787_37872 = state_37778__$1;
(statearr_37787_37872[(2)] = null);

(statearr_37787_37872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (24))){
var inst_37677 = (state_37778[(7)]);
var inst_37696 = (state_37778[(2)]);
var inst_37697 = cljs.core.next.call(null,inst_37677);
var inst_37655 = inst_37697;
var inst_37656 = null;
var inst_37657 = (0);
var inst_37658 = (0);
var state_37778__$1 = (function (){var statearr_37788 = state_37778;
(statearr_37788[(13)] = inst_37658);

(statearr_37788[(14)] = inst_37696);

(statearr_37788[(15)] = inst_37656);

(statearr_37788[(16)] = inst_37657);

(statearr_37788[(17)] = inst_37655);

return statearr_37788;
})();
var statearr_37789_37873 = state_37778__$1;
(statearr_37789_37873[(2)] = null);

(statearr_37789_37873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (39))){
var state_37778__$1 = state_37778;
var statearr_37793_37874 = state_37778__$1;
(statearr_37793_37874[(2)] = null);

(statearr_37793_37874[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (4))){
var inst_37646 = (state_37778[(9)]);
var inst_37646__$1 = (state_37778[(2)]);
var inst_37647 = (inst_37646__$1 == null);
var state_37778__$1 = (function (){var statearr_37794 = state_37778;
(statearr_37794[(9)] = inst_37646__$1);

return statearr_37794;
})();
if(cljs.core.truth_(inst_37647)){
var statearr_37795_37875 = state_37778__$1;
(statearr_37795_37875[(1)] = (5));

} else {
var statearr_37796_37876 = state_37778__$1;
(statearr_37796_37876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (15))){
var inst_37658 = (state_37778[(13)]);
var inst_37656 = (state_37778[(15)]);
var inst_37657 = (state_37778[(16)]);
var inst_37655 = (state_37778[(17)]);
var inst_37673 = (state_37778[(2)]);
var inst_37674 = (inst_37658 + (1));
var tmp37790 = inst_37656;
var tmp37791 = inst_37657;
var tmp37792 = inst_37655;
var inst_37655__$1 = tmp37792;
var inst_37656__$1 = tmp37790;
var inst_37657__$1 = tmp37791;
var inst_37658__$1 = inst_37674;
var state_37778__$1 = (function (){var statearr_37797 = state_37778;
(statearr_37797[(13)] = inst_37658__$1);

(statearr_37797[(15)] = inst_37656__$1);

(statearr_37797[(16)] = inst_37657__$1);

(statearr_37797[(18)] = inst_37673);

(statearr_37797[(17)] = inst_37655__$1);

return statearr_37797;
})();
var statearr_37798_37877 = state_37778__$1;
(statearr_37798_37877[(2)] = null);

(statearr_37798_37877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (21))){
var inst_37700 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37802_37878 = state_37778__$1;
(statearr_37802_37878[(2)] = inst_37700);

(statearr_37802_37878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (31))){
var inst_37726 = (state_37778[(11)]);
var inst_37730 = done.call(null,null);
var inst_37731 = cljs.core.async.untap_STAR_.call(null,m,inst_37726);
var state_37778__$1 = (function (){var statearr_37803 = state_37778;
(statearr_37803[(19)] = inst_37730);

return statearr_37803;
})();
var statearr_37804_37879 = state_37778__$1;
(statearr_37804_37879[(2)] = inst_37731);

(statearr_37804_37879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (32))){
var inst_37720 = (state_37778[(20)]);
var inst_37721 = (state_37778[(10)]);
var inst_37718 = (state_37778[(21)]);
var inst_37719 = (state_37778[(12)]);
var inst_37733 = (state_37778[(2)]);
var inst_37734 = (inst_37721 + (1));
var tmp37799 = inst_37720;
var tmp37800 = inst_37718;
var tmp37801 = inst_37719;
var inst_37718__$1 = tmp37800;
var inst_37719__$1 = tmp37801;
var inst_37720__$1 = tmp37799;
var inst_37721__$1 = inst_37734;
var state_37778__$1 = (function (){var statearr_37805 = state_37778;
(statearr_37805[(20)] = inst_37720__$1);

(statearr_37805[(22)] = inst_37733);

(statearr_37805[(10)] = inst_37721__$1);

(statearr_37805[(21)] = inst_37718__$1);

(statearr_37805[(12)] = inst_37719__$1);

return statearr_37805;
})();
var statearr_37806_37880 = state_37778__$1;
(statearr_37806_37880[(2)] = null);

(statearr_37806_37880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (40))){
var inst_37746 = (state_37778[(23)]);
var inst_37750 = done.call(null,null);
var inst_37751 = cljs.core.async.untap_STAR_.call(null,m,inst_37746);
var state_37778__$1 = (function (){var statearr_37807 = state_37778;
(statearr_37807[(24)] = inst_37750);

return statearr_37807;
})();
var statearr_37808_37881 = state_37778__$1;
(statearr_37808_37881[(2)] = inst_37751);

(statearr_37808_37881[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (33))){
var inst_37737 = (state_37778[(25)]);
var inst_37739 = cljs.core.chunked_seq_QMARK_.call(null,inst_37737);
var state_37778__$1 = state_37778;
if(inst_37739){
var statearr_37809_37882 = state_37778__$1;
(statearr_37809_37882[(1)] = (36));

} else {
var statearr_37810_37883 = state_37778__$1;
(statearr_37810_37883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (13))){
var inst_37667 = (state_37778[(26)]);
var inst_37670 = cljs.core.async.close_BANG_.call(null,inst_37667);
var state_37778__$1 = state_37778;
var statearr_37811_37884 = state_37778__$1;
(statearr_37811_37884[(2)] = inst_37670);

(statearr_37811_37884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (22))){
var inst_37690 = (state_37778[(8)]);
var inst_37693 = cljs.core.async.close_BANG_.call(null,inst_37690);
var state_37778__$1 = state_37778;
var statearr_37812_37885 = state_37778__$1;
(statearr_37812_37885[(2)] = inst_37693);

(statearr_37812_37885[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (36))){
var inst_37737 = (state_37778[(25)]);
var inst_37741 = cljs.core.chunk_first.call(null,inst_37737);
var inst_37742 = cljs.core.chunk_rest.call(null,inst_37737);
var inst_37743 = cljs.core.count.call(null,inst_37741);
var inst_37718 = inst_37742;
var inst_37719 = inst_37741;
var inst_37720 = inst_37743;
var inst_37721 = (0);
var state_37778__$1 = (function (){var statearr_37813 = state_37778;
(statearr_37813[(20)] = inst_37720);

(statearr_37813[(10)] = inst_37721);

(statearr_37813[(21)] = inst_37718);

(statearr_37813[(12)] = inst_37719);

return statearr_37813;
})();
var statearr_37814_37886 = state_37778__$1;
(statearr_37814_37886[(2)] = null);

(statearr_37814_37886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (41))){
var inst_37737 = (state_37778[(25)]);
var inst_37753 = (state_37778[(2)]);
var inst_37754 = cljs.core.next.call(null,inst_37737);
var inst_37718 = inst_37754;
var inst_37719 = null;
var inst_37720 = (0);
var inst_37721 = (0);
var state_37778__$1 = (function (){var statearr_37815 = state_37778;
(statearr_37815[(20)] = inst_37720);

(statearr_37815[(10)] = inst_37721);

(statearr_37815[(27)] = inst_37753);

(statearr_37815[(21)] = inst_37718);

(statearr_37815[(12)] = inst_37719);

return statearr_37815;
})();
var statearr_37816_37887 = state_37778__$1;
(statearr_37816_37887[(2)] = null);

(statearr_37816_37887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (43))){
var state_37778__$1 = state_37778;
var statearr_37817_37888 = state_37778__$1;
(statearr_37817_37888[(2)] = null);

(statearr_37817_37888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (29))){
var inst_37762 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37818_37889 = state_37778__$1;
(statearr_37818_37889[(2)] = inst_37762);

(statearr_37818_37889[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (44))){
var inst_37771 = (state_37778[(2)]);
var state_37778__$1 = (function (){var statearr_37819 = state_37778;
(statearr_37819[(28)] = inst_37771);

return statearr_37819;
})();
var statearr_37820_37890 = state_37778__$1;
(statearr_37820_37890[(2)] = null);

(statearr_37820_37890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (6))){
var inst_37710 = (state_37778[(29)]);
var inst_37709 = cljs.core.deref.call(null,cs);
var inst_37710__$1 = cljs.core.keys.call(null,inst_37709);
var inst_37711 = cljs.core.count.call(null,inst_37710__$1);
var inst_37712 = cljs.core.reset_BANG_.call(null,dctr,inst_37711);
var inst_37717 = cljs.core.seq.call(null,inst_37710__$1);
var inst_37718 = inst_37717;
var inst_37719 = null;
var inst_37720 = (0);
var inst_37721 = (0);
var state_37778__$1 = (function (){var statearr_37821 = state_37778;
(statearr_37821[(20)] = inst_37720);

(statearr_37821[(10)] = inst_37721);

(statearr_37821[(29)] = inst_37710__$1);

(statearr_37821[(21)] = inst_37718);

(statearr_37821[(12)] = inst_37719);

(statearr_37821[(30)] = inst_37712);

return statearr_37821;
})();
var statearr_37822_37891 = state_37778__$1;
(statearr_37822_37891[(2)] = null);

(statearr_37822_37891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (28))){
var inst_37718 = (state_37778[(21)]);
var inst_37737 = (state_37778[(25)]);
var inst_37737__$1 = cljs.core.seq.call(null,inst_37718);
var state_37778__$1 = (function (){var statearr_37823 = state_37778;
(statearr_37823[(25)] = inst_37737__$1);

return statearr_37823;
})();
if(inst_37737__$1){
var statearr_37824_37892 = state_37778__$1;
(statearr_37824_37892[(1)] = (33));

} else {
var statearr_37825_37893 = state_37778__$1;
(statearr_37825_37893[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (25))){
var inst_37720 = (state_37778[(20)]);
var inst_37721 = (state_37778[(10)]);
var inst_37723 = (inst_37721 < inst_37720);
var inst_37724 = inst_37723;
var state_37778__$1 = state_37778;
if(cljs.core.truth_(inst_37724)){
var statearr_37826_37894 = state_37778__$1;
(statearr_37826_37894[(1)] = (27));

} else {
var statearr_37827_37895 = state_37778__$1;
(statearr_37827_37895[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (34))){
var state_37778__$1 = state_37778;
var statearr_37828_37896 = state_37778__$1;
(statearr_37828_37896[(2)] = null);

(statearr_37828_37896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (17))){
var state_37778__$1 = state_37778;
var statearr_37829_37897 = state_37778__$1;
(statearr_37829_37897[(2)] = null);

(statearr_37829_37897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (3))){
var inst_37776 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37778__$1,inst_37776);
} else {
if((state_val_37779 === (12))){
var inst_37705 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37830_37898 = state_37778__$1;
(statearr_37830_37898[(2)] = inst_37705);

(statearr_37830_37898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (2))){
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37778__$1,(4),ch);
} else {
if((state_val_37779 === (23))){
var state_37778__$1 = state_37778;
var statearr_37831_37899 = state_37778__$1;
(statearr_37831_37899[(2)] = null);

(statearr_37831_37899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (35))){
var inst_37760 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37832_37900 = state_37778__$1;
(statearr_37832_37900[(2)] = inst_37760);

(statearr_37832_37900[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (19))){
var inst_37677 = (state_37778[(7)]);
var inst_37681 = cljs.core.chunk_first.call(null,inst_37677);
var inst_37682 = cljs.core.chunk_rest.call(null,inst_37677);
var inst_37683 = cljs.core.count.call(null,inst_37681);
var inst_37655 = inst_37682;
var inst_37656 = inst_37681;
var inst_37657 = inst_37683;
var inst_37658 = (0);
var state_37778__$1 = (function (){var statearr_37833 = state_37778;
(statearr_37833[(13)] = inst_37658);

(statearr_37833[(15)] = inst_37656);

(statearr_37833[(16)] = inst_37657);

(statearr_37833[(17)] = inst_37655);

return statearr_37833;
})();
var statearr_37834_37901 = state_37778__$1;
(statearr_37834_37901[(2)] = null);

(statearr_37834_37901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (11))){
var inst_37677 = (state_37778[(7)]);
var inst_37655 = (state_37778[(17)]);
var inst_37677__$1 = cljs.core.seq.call(null,inst_37655);
var state_37778__$1 = (function (){var statearr_37835 = state_37778;
(statearr_37835[(7)] = inst_37677__$1);

return statearr_37835;
})();
if(inst_37677__$1){
var statearr_37836_37902 = state_37778__$1;
(statearr_37836_37902[(1)] = (16));

} else {
var statearr_37837_37903 = state_37778__$1;
(statearr_37837_37903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (9))){
var inst_37707 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37838_37904 = state_37778__$1;
(statearr_37838_37904[(2)] = inst_37707);

(statearr_37838_37904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (5))){
var inst_37653 = cljs.core.deref.call(null,cs);
var inst_37654 = cljs.core.seq.call(null,inst_37653);
var inst_37655 = inst_37654;
var inst_37656 = null;
var inst_37657 = (0);
var inst_37658 = (0);
var state_37778__$1 = (function (){var statearr_37839 = state_37778;
(statearr_37839[(13)] = inst_37658);

(statearr_37839[(15)] = inst_37656);

(statearr_37839[(16)] = inst_37657);

(statearr_37839[(17)] = inst_37655);

return statearr_37839;
})();
var statearr_37840_37905 = state_37778__$1;
(statearr_37840_37905[(2)] = null);

(statearr_37840_37905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (14))){
var state_37778__$1 = state_37778;
var statearr_37841_37906 = state_37778__$1;
(statearr_37841_37906[(2)] = null);

(statearr_37841_37906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (45))){
var inst_37768 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37842_37907 = state_37778__$1;
(statearr_37842_37907[(2)] = inst_37768);

(statearr_37842_37907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (26))){
var inst_37710 = (state_37778[(29)]);
var inst_37764 = (state_37778[(2)]);
var inst_37765 = cljs.core.seq.call(null,inst_37710);
var state_37778__$1 = (function (){var statearr_37843 = state_37778;
(statearr_37843[(31)] = inst_37764);

return statearr_37843;
})();
if(inst_37765){
var statearr_37844_37908 = state_37778__$1;
(statearr_37844_37908[(1)] = (42));

} else {
var statearr_37845_37909 = state_37778__$1;
(statearr_37845_37909[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (16))){
var inst_37677 = (state_37778[(7)]);
var inst_37679 = cljs.core.chunked_seq_QMARK_.call(null,inst_37677);
var state_37778__$1 = state_37778;
if(inst_37679){
var statearr_37846_37910 = state_37778__$1;
(statearr_37846_37910[(1)] = (19));

} else {
var statearr_37847_37911 = state_37778__$1;
(statearr_37847_37911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (38))){
var inst_37757 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37848_37912 = state_37778__$1;
(statearr_37848_37912[(2)] = inst_37757);

(statearr_37848_37912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (30))){
var state_37778__$1 = state_37778;
var statearr_37849_37913 = state_37778__$1;
(statearr_37849_37913[(2)] = null);

(statearr_37849_37913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (10))){
var inst_37658 = (state_37778[(13)]);
var inst_37656 = (state_37778[(15)]);
var inst_37666 = cljs.core._nth.call(null,inst_37656,inst_37658);
var inst_37667 = cljs.core.nth.call(null,inst_37666,(0),null);
var inst_37668 = cljs.core.nth.call(null,inst_37666,(1),null);
var state_37778__$1 = (function (){var statearr_37850 = state_37778;
(statearr_37850[(26)] = inst_37667);

return statearr_37850;
})();
if(cljs.core.truth_(inst_37668)){
var statearr_37851_37914 = state_37778__$1;
(statearr_37851_37914[(1)] = (13));

} else {
var statearr_37852_37915 = state_37778__$1;
(statearr_37852_37915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (18))){
var inst_37703 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37853_37916 = state_37778__$1;
(statearr_37853_37916[(2)] = inst_37703);

(statearr_37853_37916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (42))){
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37778__$1,(45),dchan);
} else {
if((state_val_37779 === (37))){
var inst_37646 = (state_37778[(9)]);
var inst_37746 = (state_37778[(23)]);
var inst_37737 = (state_37778[(25)]);
var inst_37746__$1 = cljs.core.first.call(null,inst_37737);
var inst_37747 = cljs.core.async.put_BANG_.call(null,inst_37746__$1,inst_37646,done);
var state_37778__$1 = (function (){var statearr_37854 = state_37778;
(statearr_37854[(23)] = inst_37746__$1);

return statearr_37854;
})();
if(cljs.core.truth_(inst_37747)){
var statearr_37855_37917 = state_37778__$1;
(statearr_37855_37917[(1)] = (39));

} else {
var statearr_37856_37918 = state_37778__$1;
(statearr_37856_37918[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (8))){
var inst_37658 = (state_37778[(13)]);
var inst_37657 = (state_37778[(16)]);
var inst_37660 = (inst_37658 < inst_37657);
var inst_37661 = inst_37660;
var state_37778__$1 = state_37778;
if(cljs.core.truth_(inst_37661)){
var statearr_37857_37919 = state_37778__$1;
(statearr_37857_37919[(1)] = (10));

} else {
var statearr_37858_37920 = state_37778__$1;
(statearr_37858_37920[(1)] = (11));

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
});})(c__36513__auto___37866,cs,m,dchan,dctr,done))
;
return ((function (switch__36401__auto__,c__36513__auto___37866,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36402__auto__ = null;
var cljs$core$async$mult_$_state_machine__36402__auto____0 = (function (){
var statearr_37862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37862[(0)] = cljs$core$async$mult_$_state_machine__36402__auto__);

(statearr_37862[(1)] = (1));

return statearr_37862;
});
var cljs$core$async$mult_$_state_machine__36402__auto____1 = (function (state_37778){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_37778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e37863){if((e37863 instanceof Object)){
var ex__36405__auto__ = e37863;
var statearr_37864_37921 = state_37778;
(statearr_37864_37921[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37922 = state_37778;
state_37778 = G__37922;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36402__auto__ = function(state_37778){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36402__auto____1.call(this,state_37778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36402__auto____0;
cljs$core$async$mult_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36402__auto____1;
return cljs$core$async$mult_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___37866,cs,m,dchan,dctr,done))
})();
var state__36515__auto__ = (function (){var statearr_37865 = f__36514__auto__.call(null);
(statearr_37865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___37866);

return statearr_37865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___37866,cs,m,dchan,dctr,done))
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
var args37923 = [];
var len__31204__auto___37926 = arguments.length;
var i__31205__auto___37927 = (0);
while(true){
if((i__31205__auto___37927 < len__31204__auto___37926)){
args37923.push((arguments[i__31205__auto___37927]));

var G__37928 = (i__31205__auto___37927 + (1));
i__31205__auto___37927 = G__37928;
continue;
} else {
}
break;
}

var G__37925 = args37923.length;
switch (G__37925) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37923.length)].join('')));

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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,ch);
} else {
var m__30760__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,ch);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,ch);
} else {
var m__30760__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,ch);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m);
} else {
var m__30760__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,state_map);
} else {
var m__30760__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,state_map);
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
var x__30759__auto__ = (((m == null))?null:m);
var m__30760__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,m,mode);
} else {
var m__30760__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37940 = arguments.length;
var i__31205__auto___37941 = (0);
while(true){
if((i__31205__auto___37941 < len__31204__auto___37940)){
args__31211__auto__.push((arguments[i__31205__auto___37941]));

var G__37942 = (i__31205__auto___37941 + (1));
i__31205__auto___37941 = G__37942;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((3) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31212__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37934){
var map__37935 = p__37934;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var opts = map__37935__$1;
var statearr_37937_37943 = state;
(statearr_37937_37943[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__37935,map__37935__$1,opts){
return (function (val){
var statearr_37938_37944 = state;
(statearr_37938_37944[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37935,map__37935__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_37939_37945 = state;
(statearr_37939_37945[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37930){
var G__37931 = cljs.core.first.call(null,seq37930);
var seq37930__$1 = cljs.core.next.call(null,seq37930);
var G__37932 = cljs.core.first.call(null,seq37930__$1);
var seq37930__$2 = cljs.core.next.call(null,seq37930__$1);
var G__37933 = cljs.core.first.call(null,seq37930__$2);
var seq37930__$3 = cljs.core.next.call(null,seq37930__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37931,G__37932,G__37933,seq37930__$3);
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
if(typeof cljs.core.async.t_cljs$core$async38113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38113 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38114){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38114 = meta38114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38115,meta38114__$1){
var self__ = this;
var _38115__$1 = this;
return (new cljs.core.async.t_cljs$core$async38113(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38114__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38115){
var self__ = this;
var _38115__$1 = this;
return self__.meta38114;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async38113.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38114","meta38114",1420846325,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38113";

cljs.core.async.t_cljs$core$async38113.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38113");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38113 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38113(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38114){
return (new cljs.core.async.t_cljs$core$async38113(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38114));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38113(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36513__auto___38280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38217){
var state_val_38218 = (state_38217[(1)]);
if((state_val_38218 === (7))){
var inst_38132 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38219_38281 = state_38217__$1;
(statearr_38219_38281[(2)] = inst_38132);

(statearr_38219_38281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (20))){
var inst_38144 = (state_38217[(7)]);
var state_38217__$1 = state_38217;
var statearr_38220_38282 = state_38217__$1;
(statearr_38220_38282[(2)] = inst_38144);

(statearr_38220_38282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (27))){
var state_38217__$1 = state_38217;
var statearr_38221_38283 = state_38217__$1;
(statearr_38221_38283[(2)] = null);

(statearr_38221_38283[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (1))){
var inst_38119 = (state_38217[(8)]);
var inst_38119__$1 = calc_state.call(null);
var inst_38121 = (inst_38119__$1 == null);
var inst_38122 = cljs.core.not.call(null,inst_38121);
var state_38217__$1 = (function (){var statearr_38222 = state_38217;
(statearr_38222[(8)] = inst_38119__$1);

return statearr_38222;
})();
if(inst_38122){
var statearr_38223_38284 = state_38217__$1;
(statearr_38223_38284[(1)] = (2));

} else {
var statearr_38224_38285 = state_38217__$1;
(statearr_38224_38285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (24))){
var inst_38168 = (state_38217[(9)]);
var inst_38191 = (state_38217[(10)]);
var inst_38177 = (state_38217[(11)]);
var inst_38191__$1 = inst_38168.call(null,inst_38177);
var state_38217__$1 = (function (){var statearr_38225 = state_38217;
(statearr_38225[(10)] = inst_38191__$1);

return statearr_38225;
})();
if(cljs.core.truth_(inst_38191__$1)){
var statearr_38226_38286 = state_38217__$1;
(statearr_38226_38286[(1)] = (29));

} else {
var statearr_38227_38287 = state_38217__$1;
(statearr_38227_38287[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (4))){
var inst_38135 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38135)){
var statearr_38228_38288 = state_38217__$1;
(statearr_38228_38288[(1)] = (8));

} else {
var statearr_38229_38289 = state_38217__$1;
(statearr_38229_38289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (15))){
var inst_38162 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38162)){
var statearr_38230_38290 = state_38217__$1;
(statearr_38230_38290[(1)] = (19));

} else {
var statearr_38231_38291 = state_38217__$1;
(statearr_38231_38291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (21))){
var inst_38167 = (state_38217[(12)]);
var inst_38167__$1 = (state_38217[(2)]);
var inst_38168 = cljs.core.get.call(null,inst_38167__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38169 = cljs.core.get.call(null,inst_38167__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38170 = cljs.core.get.call(null,inst_38167__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38217__$1 = (function (){var statearr_38232 = state_38217;
(statearr_38232[(9)] = inst_38168);

(statearr_38232[(12)] = inst_38167__$1);

(statearr_38232[(13)] = inst_38169);

return statearr_38232;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38217__$1,(22),inst_38170);
} else {
if((state_val_38218 === (31))){
var inst_38199 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38199)){
var statearr_38233_38292 = state_38217__$1;
(statearr_38233_38292[(1)] = (32));

} else {
var statearr_38234_38293 = state_38217__$1;
(statearr_38234_38293[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (32))){
var inst_38176 = (state_38217[(14)]);
var state_38217__$1 = state_38217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38217__$1,(35),out,inst_38176);
} else {
if((state_val_38218 === (33))){
var inst_38167 = (state_38217[(12)]);
var inst_38144 = inst_38167;
var state_38217__$1 = (function (){var statearr_38235 = state_38217;
(statearr_38235[(7)] = inst_38144);

return statearr_38235;
})();
var statearr_38236_38294 = state_38217__$1;
(statearr_38236_38294[(2)] = null);

(statearr_38236_38294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (13))){
var inst_38144 = (state_38217[(7)]);
var inst_38151 = inst_38144.cljs$lang$protocol_mask$partition0$;
var inst_38152 = (inst_38151 & (64));
var inst_38153 = inst_38144.cljs$core$ISeq$;
var inst_38154 = (cljs.core.PROTOCOL_SENTINEL === inst_38153);
var inst_38155 = (inst_38152) || (inst_38154);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38155)){
var statearr_38237_38295 = state_38217__$1;
(statearr_38237_38295[(1)] = (16));

} else {
var statearr_38238_38296 = state_38217__$1;
(statearr_38238_38296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (22))){
var inst_38176 = (state_38217[(14)]);
var inst_38177 = (state_38217[(11)]);
var inst_38175 = (state_38217[(2)]);
var inst_38176__$1 = cljs.core.nth.call(null,inst_38175,(0),null);
var inst_38177__$1 = cljs.core.nth.call(null,inst_38175,(1),null);
var inst_38178 = (inst_38176__$1 == null);
var inst_38179 = cljs.core._EQ_.call(null,inst_38177__$1,change);
var inst_38180 = (inst_38178) || (inst_38179);
var state_38217__$1 = (function (){var statearr_38239 = state_38217;
(statearr_38239[(14)] = inst_38176__$1);

(statearr_38239[(11)] = inst_38177__$1);

return statearr_38239;
})();
if(cljs.core.truth_(inst_38180)){
var statearr_38240_38297 = state_38217__$1;
(statearr_38240_38297[(1)] = (23));

} else {
var statearr_38241_38298 = state_38217__$1;
(statearr_38241_38298[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (36))){
var inst_38167 = (state_38217[(12)]);
var inst_38144 = inst_38167;
var state_38217__$1 = (function (){var statearr_38242 = state_38217;
(statearr_38242[(7)] = inst_38144);

return statearr_38242;
})();
var statearr_38243_38299 = state_38217__$1;
(statearr_38243_38299[(2)] = null);

(statearr_38243_38299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (29))){
var inst_38191 = (state_38217[(10)]);
var state_38217__$1 = state_38217;
var statearr_38244_38300 = state_38217__$1;
(statearr_38244_38300[(2)] = inst_38191);

(statearr_38244_38300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (6))){
var state_38217__$1 = state_38217;
var statearr_38245_38301 = state_38217__$1;
(statearr_38245_38301[(2)] = false);

(statearr_38245_38301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (28))){
var inst_38187 = (state_38217[(2)]);
var inst_38188 = calc_state.call(null);
var inst_38144 = inst_38188;
var state_38217__$1 = (function (){var statearr_38246 = state_38217;
(statearr_38246[(15)] = inst_38187);

(statearr_38246[(7)] = inst_38144);

return statearr_38246;
})();
var statearr_38247_38302 = state_38217__$1;
(statearr_38247_38302[(2)] = null);

(statearr_38247_38302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (25))){
var inst_38213 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38248_38303 = state_38217__$1;
(statearr_38248_38303[(2)] = inst_38213);

(statearr_38248_38303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (34))){
var inst_38211 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38249_38304 = state_38217__$1;
(statearr_38249_38304[(2)] = inst_38211);

(statearr_38249_38304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (17))){
var state_38217__$1 = state_38217;
var statearr_38250_38305 = state_38217__$1;
(statearr_38250_38305[(2)] = false);

(statearr_38250_38305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (3))){
var state_38217__$1 = state_38217;
var statearr_38251_38306 = state_38217__$1;
(statearr_38251_38306[(2)] = false);

(statearr_38251_38306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (12))){
var inst_38215 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38217__$1,inst_38215);
} else {
if((state_val_38218 === (2))){
var inst_38119 = (state_38217[(8)]);
var inst_38124 = inst_38119.cljs$lang$protocol_mask$partition0$;
var inst_38125 = (inst_38124 & (64));
var inst_38126 = inst_38119.cljs$core$ISeq$;
var inst_38127 = (cljs.core.PROTOCOL_SENTINEL === inst_38126);
var inst_38128 = (inst_38125) || (inst_38127);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38128)){
var statearr_38252_38307 = state_38217__$1;
(statearr_38252_38307[(1)] = (5));

} else {
var statearr_38253_38308 = state_38217__$1;
(statearr_38253_38308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (23))){
var inst_38176 = (state_38217[(14)]);
var inst_38182 = (inst_38176 == null);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38182)){
var statearr_38254_38309 = state_38217__$1;
(statearr_38254_38309[(1)] = (26));

} else {
var statearr_38255_38310 = state_38217__$1;
(statearr_38255_38310[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (35))){
var inst_38202 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
if(cljs.core.truth_(inst_38202)){
var statearr_38256_38311 = state_38217__$1;
(statearr_38256_38311[(1)] = (36));

} else {
var statearr_38257_38312 = state_38217__$1;
(statearr_38257_38312[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (19))){
var inst_38144 = (state_38217[(7)]);
var inst_38164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38144);
var state_38217__$1 = state_38217;
var statearr_38258_38313 = state_38217__$1;
(statearr_38258_38313[(2)] = inst_38164);

(statearr_38258_38313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (11))){
var inst_38144 = (state_38217[(7)]);
var inst_38148 = (inst_38144 == null);
var inst_38149 = cljs.core.not.call(null,inst_38148);
var state_38217__$1 = state_38217;
if(inst_38149){
var statearr_38259_38314 = state_38217__$1;
(statearr_38259_38314[(1)] = (13));

} else {
var statearr_38260_38315 = state_38217__$1;
(statearr_38260_38315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (9))){
var inst_38119 = (state_38217[(8)]);
var state_38217__$1 = state_38217;
var statearr_38261_38316 = state_38217__$1;
(statearr_38261_38316[(2)] = inst_38119);

(statearr_38261_38316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (5))){
var state_38217__$1 = state_38217;
var statearr_38262_38317 = state_38217__$1;
(statearr_38262_38317[(2)] = true);

(statearr_38262_38317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (14))){
var state_38217__$1 = state_38217;
var statearr_38263_38318 = state_38217__$1;
(statearr_38263_38318[(2)] = false);

(statearr_38263_38318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (26))){
var inst_38177 = (state_38217[(11)]);
var inst_38184 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38177);
var state_38217__$1 = state_38217;
var statearr_38264_38319 = state_38217__$1;
(statearr_38264_38319[(2)] = inst_38184);

(statearr_38264_38319[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (16))){
var state_38217__$1 = state_38217;
var statearr_38265_38320 = state_38217__$1;
(statearr_38265_38320[(2)] = true);

(statearr_38265_38320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (38))){
var inst_38207 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38266_38321 = state_38217__$1;
(statearr_38266_38321[(2)] = inst_38207);

(statearr_38266_38321[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (30))){
var inst_38168 = (state_38217[(9)]);
var inst_38177 = (state_38217[(11)]);
var inst_38169 = (state_38217[(13)]);
var inst_38194 = cljs.core.empty_QMARK_.call(null,inst_38168);
var inst_38195 = inst_38169.call(null,inst_38177);
var inst_38196 = cljs.core.not.call(null,inst_38195);
var inst_38197 = (inst_38194) && (inst_38196);
var state_38217__$1 = state_38217;
var statearr_38267_38322 = state_38217__$1;
(statearr_38267_38322[(2)] = inst_38197);

(statearr_38267_38322[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (10))){
var inst_38119 = (state_38217[(8)]);
var inst_38140 = (state_38217[(2)]);
var inst_38141 = cljs.core.get.call(null,inst_38140,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38142 = cljs.core.get.call(null,inst_38140,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38143 = cljs.core.get.call(null,inst_38140,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38144 = inst_38119;
var state_38217__$1 = (function (){var statearr_38268 = state_38217;
(statearr_38268[(16)] = inst_38143);

(statearr_38268[(7)] = inst_38144);

(statearr_38268[(17)] = inst_38141);

(statearr_38268[(18)] = inst_38142);

return statearr_38268;
})();
var statearr_38269_38323 = state_38217__$1;
(statearr_38269_38323[(2)] = null);

(statearr_38269_38323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (18))){
var inst_38159 = (state_38217[(2)]);
var state_38217__$1 = state_38217;
var statearr_38270_38324 = state_38217__$1;
(statearr_38270_38324[(2)] = inst_38159);

(statearr_38270_38324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (37))){
var state_38217__$1 = state_38217;
var statearr_38271_38325 = state_38217__$1;
(statearr_38271_38325[(2)] = null);

(statearr_38271_38325[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38218 === (8))){
var inst_38119 = (state_38217[(8)]);
var inst_38137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38119);
var state_38217__$1 = state_38217;
var statearr_38272_38326 = state_38217__$1;
(statearr_38272_38326[(2)] = inst_38137);

(statearr_38272_38326[(1)] = (10));


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
});})(c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36401__auto__,c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36402__auto__ = null;
var cljs$core$async$mix_$_state_machine__36402__auto____0 = (function (){
var statearr_38276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38276[(0)] = cljs$core$async$mix_$_state_machine__36402__auto__);

(statearr_38276[(1)] = (1));

return statearr_38276;
});
var cljs$core$async$mix_$_state_machine__36402__auto____1 = (function (state_38217){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38277){if((e38277 instanceof Object)){
var ex__36405__auto__ = e38277;
var statearr_38278_38327 = state_38217;
(statearr_38278_38327[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38328 = state_38217;
state_38217 = G__38328;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36402__auto__ = function(state_38217){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36402__auto____1.call(this,state_38217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36402__auto____0;
cljs$core$async$mix_$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36402__auto____1;
return cljs$core$async$mix_$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36515__auto__ = (function (){var statearr_38279 = f__36514__auto__.call(null);
(statearr_38279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38280);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38280,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30759__auto__ = (((p == null))?null:p);
var m__30760__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30760__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30759__auto__ = (((p == null))?null:p);
var m__30760__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,p,v,ch);
} else {
var m__30760__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args38329 = [];
var len__31204__auto___38332 = arguments.length;
var i__31205__auto___38333 = (0);
while(true){
if((i__31205__auto___38333 < len__31204__auto___38332)){
args38329.push((arguments[i__31205__auto___38333]));

var G__38334 = (i__31205__auto___38333 + (1));
i__31205__auto___38333 = G__38334;
continue;
} else {
}
break;
}

var G__38331 = args38329.length;
switch (G__38331) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38329.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30759__auto__ = (((p == null))?null:p);
var m__30760__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,p);
} else {
var m__30760__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,p);
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
var x__30759__auto__ = (((p == null))?null:p);
var m__30760__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30759__auto__)]);
if(!((m__30760__auto__ == null))){
return m__30760__auto__.call(null,p,v);
} else {
var m__30760__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30760__auto____$1 == null))){
return m__30760__auto____$1.call(null,p,v);
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
var args38337 = [];
var len__31204__auto___38462 = arguments.length;
var i__31205__auto___38463 = (0);
while(true){
if((i__31205__auto___38463 < len__31204__auto___38462)){
args38337.push((arguments[i__31205__auto___38463]));

var G__38464 = (i__31205__auto___38463 + (1));
i__31205__auto___38463 = G__38464;
continue;
} else {
}
break;
}

var G__38339 = args38337.length;
switch (G__38339) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38337.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30096__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30096__auto__,mults){
return (function (p1__38336_SHARP_){
if(cljs.core.truth_(p1__38336_SHARP_.call(null,topic))){
return p1__38336_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38336_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38341 = meta38341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38342,meta38341__$1){
var self__ = this;
var _38342__$1 = this;
return (new cljs.core.async.t_cljs$core$async38340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38341__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38342){
var self__ = this;
var _38342__$1 = this;
return self__.meta38341;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38341","meta38341",1389014072,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38340";

cljs.core.async.t_cljs$core$async38340.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38340");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38340 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38341){
return (new cljs.core.async.t_cljs$core$async38340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38341));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36513__auto___38466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38466,mults,ensure_mult,p){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38466,mults,ensure_mult,p){
return (function (state_38414){
var state_val_38415 = (state_38414[(1)]);
if((state_val_38415 === (7))){
var inst_38410 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38416_38467 = state_38414__$1;
(statearr_38416_38467[(2)] = inst_38410);

(statearr_38416_38467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (20))){
var state_38414__$1 = state_38414;
var statearr_38417_38468 = state_38414__$1;
(statearr_38417_38468[(2)] = null);

(statearr_38417_38468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (1))){
var state_38414__$1 = state_38414;
var statearr_38418_38469 = state_38414__$1;
(statearr_38418_38469[(2)] = null);

(statearr_38418_38469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (24))){
var inst_38393 = (state_38414[(7)]);
var inst_38402 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38393);
var state_38414__$1 = state_38414;
var statearr_38419_38470 = state_38414__$1;
(statearr_38419_38470[(2)] = inst_38402);

(statearr_38419_38470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (4))){
var inst_38345 = (state_38414[(8)]);
var inst_38345__$1 = (state_38414[(2)]);
var inst_38346 = (inst_38345__$1 == null);
var state_38414__$1 = (function (){var statearr_38420 = state_38414;
(statearr_38420[(8)] = inst_38345__$1);

return statearr_38420;
})();
if(cljs.core.truth_(inst_38346)){
var statearr_38421_38471 = state_38414__$1;
(statearr_38421_38471[(1)] = (5));

} else {
var statearr_38422_38472 = state_38414__$1;
(statearr_38422_38472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (15))){
var inst_38387 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38423_38473 = state_38414__$1;
(statearr_38423_38473[(2)] = inst_38387);

(statearr_38423_38473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (21))){
var inst_38407 = (state_38414[(2)]);
var state_38414__$1 = (function (){var statearr_38424 = state_38414;
(statearr_38424[(9)] = inst_38407);

return statearr_38424;
})();
var statearr_38425_38474 = state_38414__$1;
(statearr_38425_38474[(2)] = null);

(statearr_38425_38474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (13))){
var inst_38369 = (state_38414[(10)]);
var inst_38371 = cljs.core.chunked_seq_QMARK_.call(null,inst_38369);
var state_38414__$1 = state_38414;
if(inst_38371){
var statearr_38426_38475 = state_38414__$1;
(statearr_38426_38475[(1)] = (16));

} else {
var statearr_38427_38476 = state_38414__$1;
(statearr_38427_38476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (22))){
var inst_38399 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
if(cljs.core.truth_(inst_38399)){
var statearr_38428_38477 = state_38414__$1;
(statearr_38428_38477[(1)] = (23));

} else {
var statearr_38429_38478 = state_38414__$1;
(statearr_38429_38478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (6))){
var inst_38393 = (state_38414[(7)]);
var inst_38395 = (state_38414[(11)]);
var inst_38345 = (state_38414[(8)]);
var inst_38393__$1 = topic_fn.call(null,inst_38345);
var inst_38394 = cljs.core.deref.call(null,mults);
var inst_38395__$1 = cljs.core.get.call(null,inst_38394,inst_38393__$1);
var state_38414__$1 = (function (){var statearr_38430 = state_38414;
(statearr_38430[(7)] = inst_38393__$1);

(statearr_38430[(11)] = inst_38395__$1);

return statearr_38430;
})();
if(cljs.core.truth_(inst_38395__$1)){
var statearr_38431_38479 = state_38414__$1;
(statearr_38431_38479[(1)] = (19));

} else {
var statearr_38432_38480 = state_38414__$1;
(statearr_38432_38480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (25))){
var inst_38404 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38433_38481 = state_38414__$1;
(statearr_38433_38481[(2)] = inst_38404);

(statearr_38433_38481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (17))){
var inst_38369 = (state_38414[(10)]);
var inst_38378 = cljs.core.first.call(null,inst_38369);
var inst_38379 = cljs.core.async.muxch_STAR_.call(null,inst_38378);
var inst_38380 = cljs.core.async.close_BANG_.call(null,inst_38379);
var inst_38381 = cljs.core.next.call(null,inst_38369);
var inst_38355 = inst_38381;
var inst_38356 = null;
var inst_38357 = (0);
var inst_38358 = (0);
var state_38414__$1 = (function (){var statearr_38434 = state_38414;
(statearr_38434[(12)] = inst_38358);

(statearr_38434[(13)] = inst_38356);

(statearr_38434[(14)] = inst_38355);

(statearr_38434[(15)] = inst_38380);

(statearr_38434[(16)] = inst_38357);

return statearr_38434;
})();
var statearr_38435_38482 = state_38414__$1;
(statearr_38435_38482[(2)] = null);

(statearr_38435_38482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (3))){
var inst_38412 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38414__$1,inst_38412);
} else {
if((state_val_38415 === (12))){
var inst_38389 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38436_38483 = state_38414__$1;
(statearr_38436_38483[(2)] = inst_38389);

(statearr_38436_38483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (2))){
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38414__$1,(4),ch);
} else {
if((state_val_38415 === (23))){
var state_38414__$1 = state_38414;
var statearr_38437_38484 = state_38414__$1;
(statearr_38437_38484[(2)] = null);

(statearr_38437_38484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (19))){
var inst_38395 = (state_38414[(11)]);
var inst_38345 = (state_38414[(8)]);
var inst_38397 = cljs.core.async.muxch_STAR_.call(null,inst_38395);
var state_38414__$1 = state_38414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38414__$1,(22),inst_38397,inst_38345);
} else {
if((state_val_38415 === (11))){
var inst_38369 = (state_38414[(10)]);
var inst_38355 = (state_38414[(14)]);
var inst_38369__$1 = cljs.core.seq.call(null,inst_38355);
var state_38414__$1 = (function (){var statearr_38438 = state_38414;
(statearr_38438[(10)] = inst_38369__$1);

return statearr_38438;
})();
if(inst_38369__$1){
var statearr_38439_38485 = state_38414__$1;
(statearr_38439_38485[(1)] = (13));

} else {
var statearr_38440_38486 = state_38414__$1;
(statearr_38440_38486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (9))){
var inst_38391 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38441_38487 = state_38414__$1;
(statearr_38441_38487[(2)] = inst_38391);

(statearr_38441_38487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (5))){
var inst_38352 = cljs.core.deref.call(null,mults);
var inst_38353 = cljs.core.vals.call(null,inst_38352);
var inst_38354 = cljs.core.seq.call(null,inst_38353);
var inst_38355 = inst_38354;
var inst_38356 = null;
var inst_38357 = (0);
var inst_38358 = (0);
var state_38414__$1 = (function (){var statearr_38442 = state_38414;
(statearr_38442[(12)] = inst_38358);

(statearr_38442[(13)] = inst_38356);

(statearr_38442[(14)] = inst_38355);

(statearr_38442[(16)] = inst_38357);

return statearr_38442;
})();
var statearr_38443_38488 = state_38414__$1;
(statearr_38443_38488[(2)] = null);

(statearr_38443_38488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (14))){
var state_38414__$1 = state_38414;
var statearr_38447_38489 = state_38414__$1;
(statearr_38447_38489[(2)] = null);

(statearr_38447_38489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (16))){
var inst_38369 = (state_38414[(10)]);
var inst_38373 = cljs.core.chunk_first.call(null,inst_38369);
var inst_38374 = cljs.core.chunk_rest.call(null,inst_38369);
var inst_38375 = cljs.core.count.call(null,inst_38373);
var inst_38355 = inst_38374;
var inst_38356 = inst_38373;
var inst_38357 = inst_38375;
var inst_38358 = (0);
var state_38414__$1 = (function (){var statearr_38448 = state_38414;
(statearr_38448[(12)] = inst_38358);

(statearr_38448[(13)] = inst_38356);

(statearr_38448[(14)] = inst_38355);

(statearr_38448[(16)] = inst_38357);

return statearr_38448;
})();
var statearr_38449_38490 = state_38414__$1;
(statearr_38449_38490[(2)] = null);

(statearr_38449_38490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (10))){
var inst_38358 = (state_38414[(12)]);
var inst_38356 = (state_38414[(13)]);
var inst_38355 = (state_38414[(14)]);
var inst_38357 = (state_38414[(16)]);
var inst_38363 = cljs.core._nth.call(null,inst_38356,inst_38358);
var inst_38364 = cljs.core.async.muxch_STAR_.call(null,inst_38363);
var inst_38365 = cljs.core.async.close_BANG_.call(null,inst_38364);
var inst_38366 = (inst_38358 + (1));
var tmp38444 = inst_38356;
var tmp38445 = inst_38355;
var tmp38446 = inst_38357;
var inst_38355__$1 = tmp38445;
var inst_38356__$1 = tmp38444;
var inst_38357__$1 = tmp38446;
var inst_38358__$1 = inst_38366;
var state_38414__$1 = (function (){var statearr_38450 = state_38414;
(statearr_38450[(17)] = inst_38365);

(statearr_38450[(12)] = inst_38358__$1);

(statearr_38450[(13)] = inst_38356__$1);

(statearr_38450[(14)] = inst_38355__$1);

(statearr_38450[(16)] = inst_38357__$1);

return statearr_38450;
})();
var statearr_38451_38491 = state_38414__$1;
(statearr_38451_38491[(2)] = null);

(statearr_38451_38491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (18))){
var inst_38384 = (state_38414[(2)]);
var state_38414__$1 = state_38414;
var statearr_38452_38492 = state_38414__$1;
(statearr_38452_38492[(2)] = inst_38384);

(statearr_38452_38492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38415 === (8))){
var inst_38358 = (state_38414[(12)]);
var inst_38357 = (state_38414[(16)]);
var inst_38360 = (inst_38358 < inst_38357);
var inst_38361 = inst_38360;
var state_38414__$1 = state_38414;
if(cljs.core.truth_(inst_38361)){
var statearr_38453_38493 = state_38414__$1;
(statearr_38453_38493[(1)] = (10));

} else {
var statearr_38454_38494 = state_38414__$1;
(statearr_38454_38494[(1)] = (11));

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
});})(c__36513__auto___38466,mults,ensure_mult,p))
;
return ((function (switch__36401__auto__,c__36513__auto___38466,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_38458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38458[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_38458[(1)] = (1));

return statearr_38458;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_38414){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38459){if((e38459 instanceof Object)){
var ex__36405__auto__ = e38459;
var statearr_38460_38495 = state_38414;
(statearr_38460_38495[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38496 = state_38414;
state_38414 = G__38496;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_38414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_38414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38466,mults,ensure_mult,p))
})();
var state__36515__auto__ = (function (){var statearr_38461 = f__36514__auto__.call(null);
(statearr_38461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38466);

return statearr_38461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38466,mults,ensure_mult,p))
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
var args38497 = [];
var len__31204__auto___38500 = arguments.length;
var i__31205__auto___38501 = (0);
while(true){
if((i__31205__auto___38501 < len__31204__auto___38500)){
args38497.push((arguments[i__31205__auto___38501]));

var G__38502 = (i__31205__auto___38501 + (1));
i__31205__auto___38501 = G__38502;
continue;
} else {
}
break;
}

var G__38499 = args38497.length;
switch (G__38499) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38497.length)].join('')));

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
var args38504 = [];
var len__31204__auto___38507 = arguments.length;
var i__31205__auto___38508 = (0);
while(true){
if((i__31205__auto___38508 < len__31204__auto___38507)){
args38504.push((arguments[i__31205__auto___38508]));

var G__38509 = (i__31205__auto___38508 + (1));
i__31205__auto___38508 = G__38509;
continue;
} else {
}
break;
}

var G__38506 = args38504.length;
switch (G__38506) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38504.length)].join('')));

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
var args38511 = [];
var len__31204__auto___38582 = arguments.length;
var i__31205__auto___38583 = (0);
while(true){
if((i__31205__auto___38583 < len__31204__auto___38582)){
args38511.push((arguments[i__31205__auto___38583]));

var G__38584 = (i__31205__auto___38583 + (1));
i__31205__auto___38583 = G__38584;
continue;
} else {
}
break;
}

var G__38513 = args38511.length;
switch (G__38513) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38511.length)].join('')));

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
var c__36513__auto___38586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38552){
var state_val_38553 = (state_38552[(1)]);
if((state_val_38553 === (7))){
var state_38552__$1 = state_38552;
var statearr_38554_38587 = state_38552__$1;
(statearr_38554_38587[(2)] = null);

(statearr_38554_38587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (1))){
var state_38552__$1 = state_38552;
var statearr_38555_38588 = state_38552__$1;
(statearr_38555_38588[(2)] = null);

(statearr_38555_38588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (4))){
var inst_38516 = (state_38552[(7)]);
var inst_38518 = (inst_38516 < cnt);
var state_38552__$1 = state_38552;
if(cljs.core.truth_(inst_38518)){
var statearr_38556_38589 = state_38552__$1;
(statearr_38556_38589[(1)] = (6));

} else {
var statearr_38557_38590 = state_38552__$1;
(statearr_38557_38590[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (15))){
var inst_38548 = (state_38552[(2)]);
var state_38552__$1 = state_38552;
var statearr_38558_38591 = state_38552__$1;
(statearr_38558_38591[(2)] = inst_38548);

(statearr_38558_38591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (13))){
var inst_38541 = cljs.core.async.close_BANG_.call(null,out);
var state_38552__$1 = state_38552;
var statearr_38559_38592 = state_38552__$1;
(statearr_38559_38592[(2)] = inst_38541);

(statearr_38559_38592[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (6))){
var state_38552__$1 = state_38552;
var statearr_38560_38593 = state_38552__$1;
(statearr_38560_38593[(2)] = null);

(statearr_38560_38593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (3))){
var inst_38550 = (state_38552[(2)]);
var state_38552__$1 = state_38552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38552__$1,inst_38550);
} else {
if((state_val_38553 === (12))){
var inst_38538 = (state_38552[(8)]);
var inst_38538__$1 = (state_38552[(2)]);
var inst_38539 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38538__$1);
var state_38552__$1 = (function (){var statearr_38561 = state_38552;
(statearr_38561[(8)] = inst_38538__$1);

return statearr_38561;
})();
if(cljs.core.truth_(inst_38539)){
var statearr_38562_38594 = state_38552__$1;
(statearr_38562_38594[(1)] = (13));

} else {
var statearr_38563_38595 = state_38552__$1;
(statearr_38563_38595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (2))){
var inst_38515 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38516 = (0);
var state_38552__$1 = (function (){var statearr_38564 = state_38552;
(statearr_38564[(9)] = inst_38515);

(statearr_38564[(7)] = inst_38516);

return statearr_38564;
})();
var statearr_38565_38596 = state_38552__$1;
(statearr_38565_38596[(2)] = null);

(statearr_38565_38596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (11))){
var inst_38516 = (state_38552[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38552,(10),Object,null,(9));
var inst_38525 = chs__$1.call(null,inst_38516);
var inst_38526 = done.call(null,inst_38516);
var inst_38527 = cljs.core.async.take_BANG_.call(null,inst_38525,inst_38526);
var state_38552__$1 = state_38552;
var statearr_38566_38597 = state_38552__$1;
(statearr_38566_38597[(2)] = inst_38527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38552__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (9))){
var inst_38516 = (state_38552[(7)]);
var inst_38529 = (state_38552[(2)]);
var inst_38530 = (inst_38516 + (1));
var inst_38516__$1 = inst_38530;
var state_38552__$1 = (function (){var statearr_38567 = state_38552;
(statearr_38567[(10)] = inst_38529);

(statearr_38567[(7)] = inst_38516__$1);

return statearr_38567;
})();
var statearr_38568_38598 = state_38552__$1;
(statearr_38568_38598[(2)] = null);

(statearr_38568_38598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (5))){
var inst_38536 = (state_38552[(2)]);
var state_38552__$1 = (function (){var statearr_38569 = state_38552;
(statearr_38569[(11)] = inst_38536);

return statearr_38569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38552__$1,(12),dchan);
} else {
if((state_val_38553 === (14))){
var inst_38538 = (state_38552[(8)]);
var inst_38543 = cljs.core.apply.call(null,f,inst_38538);
var state_38552__$1 = state_38552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38552__$1,(16),out,inst_38543);
} else {
if((state_val_38553 === (16))){
var inst_38545 = (state_38552[(2)]);
var state_38552__$1 = (function (){var statearr_38570 = state_38552;
(statearr_38570[(12)] = inst_38545);

return statearr_38570;
})();
var statearr_38571_38599 = state_38552__$1;
(statearr_38571_38599[(2)] = null);

(statearr_38571_38599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (10))){
var inst_38520 = (state_38552[(2)]);
var inst_38521 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38552__$1 = (function (){var statearr_38572 = state_38552;
(statearr_38572[(13)] = inst_38520);

return statearr_38572;
})();
var statearr_38573_38600 = state_38552__$1;
(statearr_38573_38600[(2)] = inst_38521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38552__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38553 === (8))){
var inst_38534 = (state_38552[(2)]);
var state_38552__$1 = state_38552;
var statearr_38574_38601 = state_38552__$1;
(statearr_38574_38601[(2)] = inst_38534);

(statearr_38574_38601[(1)] = (5));


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
});})(c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36401__auto__,c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_38578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38578[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_38578[(1)] = (1));

return statearr_38578;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_38552){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38579){if((e38579 instanceof Object)){
var ex__36405__auto__ = e38579;
var statearr_38580_38602 = state_38552;
(statearr_38580_38602[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38603 = state_38552;
state_38552 = G__38603;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_38552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_38552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36515__auto__ = (function (){var statearr_38581 = f__36514__auto__.call(null);
(statearr_38581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38586);

return statearr_38581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38586,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args38605 = [];
var len__31204__auto___38663 = arguments.length;
var i__31205__auto___38664 = (0);
while(true){
if((i__31205__auto___38664 < len__31204__auto___38663)){
args38605.push((arguments[i__31205__auto___38664]));

var G__38665 = (i__31205__auto___38664 + (1));
i__31205__auto___38664 = G__38665;
continue;
} else {
}
break;
}

var G__38607 = args38605.length;
switch (G__38607) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38605.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___38667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38667,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38667,out){
return (function (state_38639){
var state_val_38640 = (state_38639[(1)]);
if((state_val_38640 === (7))){
var inst_38618 = (state_38639[(7)]);
var inst_38619 = (state_38639[(8)]);
var inst_38618__$1 = (state_38639[(2)]);
var inst_38619__$1 = cljs.core.nth.call(null,inst_38618__$1,(0),null);
var inst_38620 = cljs.core.nth.call(null,inst_38618__$1,(1),null);
var inst_38621 = (inst_38619__$1 == null);
var state_38639__$1 = (function (){var statearr_38641 = state_38639;
(statearr_38641[(7)] = inst_38618__$1);

(statearr_38641[(8)] = inst_38619__$1);

(statearr_38641[(9)] = inst_38620);

return statearr_38641;
})();
if(cljs.core.truth_(inst_38621)){
var statearr_38642_38668 = state_38639__$1;
(statearr_38642_38668[(1)] = (8));

} else {
var statearr_38643_38669 = state_38639__$1;
(statearr_38643_38669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (1))){
var inst_38608 = cljs.core.vec.call(null,chs);
var inst_38609 = inst_38608;
var state_38639__$1 = (function (){var statearr_38644 = state_38639;
(statearr_38644[(10)] = inst_38609);

return statearr_38644;
})();
var statearr_38645_38670 = state_38639__$1;
(statearr_38645_38670[(2)] = null);

(statearr_38645_38670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (4))){
var inst_38609 = (state_38639[(10)]);
var state_38639__$1 = state_38639;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38639__$1,(7),inst_38609);
} else {
if((state_val_38640 === (6))){
var inst_38635 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38646_38671 = state_38639__$1;
(statearr_38646_38671[(2)] = inst_38635);

(statearr_38646_38671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (3))){
var inst_38637 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38639__$1,inst_38637);
} else {
if((state_val_38640 === (2))){
var inst_38609 = (state_38639[(10)]);
var inst_38611 = cljs.core.count.call(null,inst_38609);
var inst_38612 = (inst_38611 > (0));
var state_38639__$1 = state_38639;
if(cljs.core.truth_(inst_38612)){
var statearr_38648_38672 = state_38639__$1;
(statearr_38648_38672[(1)] = (4));

} else {
var statearr_38649_38673 = state_38639__$1;
(statearr_38649_38673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (11))){
var inst_38609 = (state_38639[(10)]);
var inst_38628 = (state_38639[(2)]);
var tmp38647 = inst_38609;
var inst_38609__$1 = tmp38647;
var state_38639__$1 = (function (){var statearr_38650 = state_38639;
(statearr_38650[(11)] = inst_38628);

(statearr_38650[(10)] = inst_38609__$1);

return statearr_38650;
})();
var statearr_38651_38674 = state_38639__$1;
(statearr_38651_38674[(2)] = null);

(statearr_38651_38674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (9))){
var inst_38619 = (state_38639[(8)]);
var state_38639__$1 = state_38639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38639__$1,(11),out,inst_38619);
} else {
if((state_val_38640 === (5))){
var inst_38633 = cljs.core.async.close_BANG_.call(null,out);
var state_38639__$1 = state_38639;
var statearr_38652_38675 = state_38639__$1;
(statearr_38652_38675[(2)] = inst_38633);

(statearr_38652_38675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (10))){
var inst_38631 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38653_38676 = state_38639__$1;
(statearr_38653_38676[(2)] = inst_38631);

(statearr_38653_38676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (8))){
var inst_38618 = (state_38639[(7)]);
var inst_38609 = (state_38639[(10)]);
var inst_38619 = (state_38639[(8)]);
var inst_38620 = (state_38639[(9)]);
var inst_38623 = (function (){var cs = inst_38609;
var vec__38614 = inst_38618;
var v = inst_38619;
var c = inst_38620;
return ((function (cs,vec__38614,v,c,inst_38618,inst_38609,inst_38619,inst_38620,state_val_38640,c__36513__auto___38667,out){
return (function (p1__38604_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38604_SHARP_);
});
;})(cs,vec__38614,v,c,inst_38618,inst_38609,inst_38619,inst_38620,state_val_38640,c__36513__auto___38667,out))
})();
var inst_38624 = cljs.core.filterv.call(null,inst_38623,inst_38609);
var inst_38609__$1 = inst_38624;
var state_38639__$1 = (function (){var statearr_38654 = state_38639;
(statearr_38654[(10)] = inst_38609__$1);

return statearr_38654;
})();
var statearr_38655_38677 = state_38639__$1;
(statearr_38655_38677[(2)] = null);

(statearr_38655_38677[(1)] = (2));


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
});})(c__36513__auto___38667,out))
;
return ((function (switch__36401__auto__,c__36513__auto___38667,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_38659 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38659[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_38659[(1)] = (1));

return statearr_38659;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_38639){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38660){if((e38660 instanceof Object)){
var ex__36405__auto__ = e38660;
var statearr_38661_38678 = state_38639;
(statearr_38661_38678[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38679 = state_38639;
state_38639 = G__38679;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_38639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_38639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38667,out))
})();
var state__36515__auto__ = (function (){var statearr_38662 = f__36514__auto__.call(null);
(statearr_38662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38667);

return statearr_38662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38667,out))
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
var args38680 = [];
var len__31204__auto___38729 = arguments.length;
var i__31205__auto___38730 = (0);
while(true){
if((i__31205__auto___38730 < len__31204__auto___38729)){
args38680.push((arguments[i__31205__auto___38730]));

var G__38731 = (i__31205__auto___38730 + (1));
i__31205__auto___38730 = G__38731;
continue;
} else {
}
break;
}

var G__38682 = args38680.length;
switch (G__38682) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38680.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___38733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38733,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38733,out){
return (function (state_38706){
var state_val_38707 = (state_38706[(1)]);
if((state_val_38707 === (7))){
var inst_38688 = (state_38706[(7)]);
var inst_38688__$1 = (state_38706[(2)]);
var inst_38689 = (inst_38688__$1 == null);
var inst_38690 = cljs.core.not.call(null,inst_38689);
var state_38706__$1 = (function (){var statearr_38708 = state_38706;
(statearr_38708[(7)] = inst_38688__$1);

return statearr_38708;
})();
if(inst_38690){
var statearr_38709_38734 = state_38706__$1;
(statearr_38709_38734[(1)] = (8));

} else {
var statearr_38710_38735 = state_38706__$1;
(statearr_38710_38735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (1))){
var inst_38683 = (0);
var state_38706__$1 = (function (){var statearr_38711 = state_38706;
(statearr_38711[(8)] = inst_38683);

return statearr_38711;
})();
var statearr_38712_38736 = state_38706__$1;
(statearr_38712_38736[(2)] = null);

(statearr_38712_38736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (4))){
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38706__$1,(7),ch);
} else {
if((state_val_38707 === (6))){
var inst_38701 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
var statearr_38713_38737 = state_38706__$1;
(statearr_38713_38737[(2)] = inst_38701);

(statearr_38713_38737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (3))){
var inst_38703 = (state_38706[(2)]);
var inst_38704 = cljs.core.async.close_BANG_.call(null,out);
var state_38706__$1 = (function (){var statearr_38714 = state_38706;
(statearr_38714[(9)] = inst_38703);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38706__$1,inst_38704);
} else {
if((state_val_38707 === (2))){
var inst_38683 = (state_38706[(8)]);
var inst_38685 = (inst_38683 < n);
var state_38706__$1 = state_38706;
if(cljs.core.truth_(inst_38685)){
var statearr_38715_38738 = state_38706__$1;
(statearr_38715_38738[(1)] = (4));

} else {
var statearr_38716_38739 = state_38706__$1;
(statearr_38716_38739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (11))){
var inst_38683 = (state_38706[(8)]);
var inst_38693 = (state_38706[(2)]);
var inst_38694 = (inst_38683 + (1));
var inst_38683__$1 = inst_38694;
var state_38706__$1 = (function (){var statearr_38717 = state_38706;
(statearr_38717[(10)] = inst_38693);

(statearr_38717[(8)] = inst_38683__$1);

return statearr_38717;
})();
var statearr_38718_38740 = state_38706__$1;
(statearr_38718_38740[(2)] = null);

(statearr_38718_38740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (9))){
var state_38706__$1 = state_38706;
var statearr_38719_38741 = state_38706__$1;
(statearr_38719_38741[(2)] = null);

(statearr_38719_38741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (5))){
var state_38706__$1 = state_38706;
var statearr_38720_38742 = state_38706__$1;
(statearr_38720_38742[(2)] = null);

(statearr_38720_38742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (10))){
var inst_38698 = (state_38706[(2)]);
var state_38706__$1 = state_38706;
var statearr_38721_38743 = state_38706__$1;
(statearr_38721_38743[(2)] = inst_38698);

(statearr_38721_38743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38707 === (8))){
var inst_38688 = (state_38706[(7)]);
var state_38706__$1 = state_38706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38706__$1,(11),out,inst_38688);
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
});})(c__36513__auto___38733,out))
;
return ((function (switch__36401__auto__,c__36513__auto___38733,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_38725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38725[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_38725[(1)] = (1));

return statearr_38725;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_38706){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38726){if((e38726 instanceof Object)){
var ex__36405__auto__ = e38726;
var statearr_38727_38744 = state_38706;
(statearr_38727_38744[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38745 = state_38706;
state_38706 = G__38745;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_38706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_38706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38733,out))
})();
var state__36515__auto__ = (function (){var statearr_38728 = f__36514__auto__.call(null);
(statearr_38728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38733);

return statearr_38728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38733,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38753 = (function (f,ch,meta38754){
this.f = f;
this.ch = ch;
this.meta38754 = meta38754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38755,meta38754__$1){
var self__ = this;
var _38755__$1 = this;
return (new cljs.core.async.t_cljs$core$async38753(self__.f,self__.ch,meta38754__$1));
});

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38755){
var self__ = this;
var _38755__$1 = this;
return self__.meta38754;
});

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38756 = (function (f,ch,meta38754,_,fn1,meta38757){
this.f = f;
this.ch = ch;
this.meta38754 = meta38754;
this._ = _;
this.fn1 = fn1;
this.meta38757 = meta38757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38758,meta38757__$1){
var self__ = this;
var _38758__$1 = this;
return (new cljs.core.async.t_cljs$core$async38756(self__.f,self__.ch,self__.meta38754,self__._,self__.fn1,meta38757__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38758){
var self__ = this;
var _38758__$1 = this;
return self__.meta38757;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38746_SHARP_){
return f1.call(null,(((p1__38746_SHARP_ == null))?null:self__.f.call(null,p1__38746_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38754","meta38754",1365265160,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38753","cljs.core.async/t_cljs$core$async38753",1979122972,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38757","meta38757",1669608638,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38756";

cljs.core.async.t_cljs$core$async38756.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38756");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38756 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38756(f__$1,ch__$1,meta38754__$1,___$2,fn1__$1,meta38757){
return (new cljs.core.async.t_cljs$core$async38756(f__$1,ch__$1,meta38754__$1,___$2,fn1__$1,meta38757));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38756(self__.f,self__.ch,self__.meta38754,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30084__auto__ = ret;
if(cljs.core.truth_(and__30084__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30084__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38754","meta38754",1365265160,null)], null);
});

cljs.core.async.t_cljs$core$async38753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38753";

cljs.core.async.t_cljs$core$async38753.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38753");
});

cljs.core.async.__GT_t_cljs$core$async38753 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38753(f__$1,ch__$1,meta38754){
return (new cljs.core.async.t_cljs$core$async38753(f__$1,ch__$1,meta38754));
});

}

return (new cljs.core.async.t_cljs$core$async38753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38762 = (function (f,ch,meta38763){
this.f = f;
this.ch = ch;
this.meta38763 = meta38763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38764,meta38763__$1){
var self__ = this;
var _38764__$1 = this;
return (new cljs.core.async.t_cljs$core$async38762(self__.f,self__.ch,meta38763__$1));
});

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38764){
var self__ = this;
var _38764__$1 = this;
return self__.meta38763;
});

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38763","meta38763",1696269824,null)], null);
});

cljs.core.async.t_cljs$core$async38762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38762";

cljs.core.async.t_cljs$core$async38762.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38762");
});

cljs.core.async.__GT_t_cljs$core$async38762 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38762(f__$1,ch__$1,meta38763){
return (new cljs.core.async.t_cljs$core$async38762(f__$1,ch__$1,meta38763));
});

}

return (new cljs.core.async.t_cljs$core$async38762(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38768 = (function (p,ch,meta38769){
this.p = p;
this.ch = ch;
this.meta38769 = meta38769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38770,meta38769__$1){
var self__ = this;
var _38770__$1 = this;
return (new cljs.core.async.t_cljs$core$async38768(self__.p,self__.ch,meta38769__$1));
});

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38770){
var self__ = this;
var _38770__$1 = this;
return self__.meta38769;
});

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38769","meta38769",1553135127,null)], null);
});

cljs.core.async.t_cljs$core$async38768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38768";

cljs.core.async.t_cljs$core$async38768.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38768");
});

cljs.core.async.__GT_t_cljs$core$async38768 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38768(p__$1,ch__$1,meta38769){
return (new cljs.core.async.t_cljs$core$async38768(p__$1,ch__$1,meta38769));
});

}

return (new cljs.core.async.t_cljs$core$async38768(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args38771 = [];
var len__31204__auto___38815 = arguments.length;
var i__31205__auto___38816 = (0);
while(true){
if((i__31205__auto___38816 < len__31204__auto___38815)){
args38771.push((arguments[i__31205__auto___38816]));

var G__38817 = (i__31205__auto___38816 + (1));
i__31205__auto___38816 = G__38817;
continue;
} else {
}
break;
}

var G__38773 = args38771.length;
switch (G__38773) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38771.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___38819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___38819,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___38819,out){
return (function (state_38794){
var state_val_38795 = (state_38794[(1)]);
if((state_val_38795 === (7))){
var inst_38790 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
var statearr_38796_38820 = state_38794__$1;
(statearr_38796_38820[(2)] = inst_38790);

(statearr_38796_38820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (1))){
var state_38794__$1 = state_38794;
var statearr_38797_38821 = state_38794__$1;
(statearr_38797_38821[(2)] = null);

(statearr_38797_38821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (4))){
var inst_38776 = (state_38794[(7)]);
var inst_38776__$1 = (state_38794[(2)]);
var inst_38777 = (inst_38776__$1 == null);
var state_38794__$1 = (function (){var statearr_38798 = state_38794;
(statearr_38798[(7)] = inst_38776__$1);

return statearr_38798;
})();
if(cljs.core.truth_(inst_38777)){
var statearr_38799_38822 = state_38794__$1;
(statearr_38799_38822[(1)] = (5));

} else {
var statearr_38800_38823 = state_38794__$1;
(statearr_38800_38823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (6))){
var inst_38776 = (state_38794[(7)]);
var inst_38781 = p.call(null,inst_38776);
var state_38794__$1 = state_38794;
if(cljs.core.truth_(inst_38781)){
var statearr_38801_38824 = state_38794__$1;
(statearr_38801_38824[(1)] = (8));

} else {
var statearr_38802_38825 = state_38794__$1;
(statearr_38802_38825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (3))){
var inst_38792 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38794__$1,inst_38792);
} else {
if((state_val_38795 === (2))){
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38794__$1,(4),ch);
} else {
if((state_val_38795 === (11))){
var inst_38784 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
var statearr_38803_38826 = state_38794__$1;
(statearr_38803_38826[(2)] = inst_38784);

(statearr_38803_38826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (9))){
var state_38794__$1 = state_38794;
var statearr_38804_38827 = state_38794__$1;
(statearr_38804_38827[(2)] = null);

(statearr_38804_38827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (5))){
var inst_38779 = cljs.core.async.close_BANG_.call(null,out);
var state_38794__$1 = state_38794;
var statearr_38805_38828 = state_38794__$1;
(statearr_38805_38828[(2)] = inst_38779);

(statearr_38805_38828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (10))){
var inst_38787 = (state_38794[(2)]);
var state_38794__$1 = (function (){var statearr_38806 = state_38794;
(statearr_38806[(8)] = inst_38787);

return statearr_38806;
})();
var statearr_38807_38829 = state_38794__$1;
(statearr_38807_38829[(2)] = null);

(statearr_38807_38829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (8))){
var inst_38776 = (state_38794[(7)]);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38794__$1,(11),out,inst_38776);
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
});})(c__36513__auto___38819,out))
;
return ((function (switch__36401__auto__,c__36513__auto___38819,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_38811 = [null,null,null,null,null,null,null,null,null];
(statearr_38811[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_38811[(1)] = (1));

return statearr_38811;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_38794){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_38794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e38812){if((e38812 instanceof Object)){
var ex__36405__auto__ = e38812;
var statearr_38813_38830 = state_38794;
(statearr_38813_38830[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38831 = state_38794;
state_38794 = G__38831;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_38794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_38794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___38819,out))
})();
var state__36515__auto__ = (function (){var statearr_38814 = f__36514__auto__.call(null);
(statearr_38814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___38819);

return statearr_38814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___38819,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args38832 = [];
var len__31204__auto___38835 = arguments.length;
var i__31205__auto___38836 = (0);
while(true){
if((i__31205__auto___38836 < len__31204__auto___38835)){
args38832.push((arguments[i__31205__auto___38836]));

var G__38837 = (i__31205__auto___38836 + (1));
i__31205__auto___38836 = G__38837;
continue;
} else {
}
break;
}

var G__38834 = args38832.length;
switch (G__38834) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38832.length)].join('')));

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
var c__36513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto__){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto__){
return (function (state_39004){
var state_val_39005 = (state_39004[(1)]);
if((state_val_39005 === (7))){
var inst_39000 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39006_39047 = state_39004__$1;
(statearr_39006_39047[(2)] = inst_39000);

(statearr_39006_39047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (20))){
var inst_38970 = (state_39004[(7)]);
var inst_38981 = (state_39004[(2)]);
var inst_38982 = cljs.core.next.call(null,inst_38970);
var inst_38956 = inst_38982;
var inst_38957 = null;
var inst_38958 = (0);
var inst_38959 = (0);
var state_39004__$1 = (function (){var statearr_39007 = state_39004;
(statearr_39007[(8)] = inst_38956);

(statearr_39007[(9)] = inst_38957);

(statearr_39007[(10)] = inst_38981);

(statearr_39007[(11)] = inst_38958);

(statearr_39007[(12)] = inst_38959);

return statearr_39007;
})();
var statearr_39008_39048 = state_39004__$1;
(statearr_39008_39048[(2)] = null);

(statearr_39008_39048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (1))){
var state_39004__$1 = state_39004;
var statearr_39009_39049 = state_39004__$1;
(statearr_39009_39049[(2)] = null);

(statearr_39009_39049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (4))){
var inst_38945 = (state_39004[(13)]);
var inst_38945__$1 = (state_39004[(2)]);
var inst_38946 = (inst_38945__$1 == null);
var state_39004__$1 = (function (){var statearr_39010 = state_39004;
(statearr_39010[(13)] = inst_38945__$1);

return statearr_39010;
})();
if(cljs.core.truth_(inst_38946)){
var statearr_39011_39050 = state_39004__$1;
(statearr_39011_39050[(1)] = (5));

} else {
var statearr_39012_39051 = state_39004__$1;
(statearr_39012_39051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (15))){
var state_39004__$1 = state_39004;
var statearr_39016_39052 = state_39004__$1;
(statearr_39016_39052[(2)] = null);

(statearr_39016_39052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (21))){
var state_39004__$1 = state_39004;
var statearr_39017_39053 = state_39004__$1;
(statearr_39017_39053[(2)] = null);

(statearr_39017_39053[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (13))){
var inst_38956 = (state_39004[(8)]);
var inst_38957 = (state_39004[(9)]);
var inst_38958 = (state_39004[(11)]);
var inst_38959 = (state_39004[(12)]);
var inst_38966 = (state_39004[(2)]);
var inst_38967 = (inst_38959 + (1));
var tmp39013 = inst_38956;
var tmp39014 = inst_38957;
var tmp39015 = inst_38958;
var inst_38956__$1 = tmp39013;
var inst_38957__$1 = tmp39014;
var inst_38958__$1 = tmp39015;
var inst_38959__$1 = inst_38967;
var state_39004__$1 = (function (){var statearr_39018 = state_39004;
(statearr_39018[(8)] = inst_38956__$1);

(statearr_39018[(14)] = inst_38966);

(statearr_39018[(9)] = inst_38957__$1);

(statearr_39018[(11)] = inst_38958__$1);

(statearr_39018[(12)] = inst_38959__$1);

return statearr_39018;
})();
var statearr_39019_39054 = state_39004__$1;
(statearr_39019_39054[(2)] = null);

(statearr_39019_39054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (22))){
var state_39004__$1 = state_39004;
var statearr_39020_39055 = state_39004__$1;
(statearr_39020_39055[(2)] = null);

(statearr_39020_39055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (6))){
var inst_38945 = (state_39004[(13)]);
var inst_38954 = f.call(null,inst_38945);
var inst_38955 = cljs.core.seq.call(null,inst_38954);
var inst_38956 = inst_38955;
var inst_38957 = null;
var inst_38958 = (0);
var inst_38959 = (0);
var state_39004__$1 = (function (){var statearr_39021 = state_39004;
(statearr_39021[(8)] = inst_38956);

(statearr_39021[(9)] = inst_38957);

(statearr_39021[(11)] = inst_38958);

(statearr_39021[(12)] = inst_38959);

return statearr_39021;
})();
var statearr_39022_39056 = state_39004__$1;
(statearr_39022_39056[(2)] = null);

(statearr_39022_39056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (17))){
var inst_38970 = (state_39004[(7)]);
var inst_38974 = cljs.core.chunk_first.call(null,inst_38970);
var inst_38975 = cljs.core.chunk_rest.call(null,inst_38970);
var inst_38976 = cljs.core.count.call(null,inst_38974);
var inst_38956 = inst_38975;
var inst_38957 = inst_38974;
var inst_38958 = inst_38976;
var inst_38959 = (0);
var state_39004__$1 = (function (){var statearr_39023 = state_39004;
(statearr_39023[(8)] = inst_38956);

(statearr_39023[(9)] = inst_38957);

(statearr_39023[(11)] = inst_38958);

(statearr_39023[(12)] = inst_38959);

return statearr_39023;
})();
var statearr_39024_39057 = state_39004__$1;
(statearr_39024_39057[(2)] = null);

(statearr_39024_39057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (3))){
var inst_39002 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39004__$1,inst_39002);
} else {
if((state_val_39005 === (12))){
var inst_38990 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39025_39058 = state_39004__$1;
(statearr_39025_39058[(2)] = inst_38990);

(statearr_39025_39058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (2))){
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39004__$1,(4),in$);
} else {
if((state_val_39005 === (23))){
var inst_38998 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39026_39059 = state_39004__$1;
(statearr_39026_39059[(2)] = inst_38998);

(statearr_39026_39059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (19))){
var inst_38985 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39027_39060 = state_39004__$1;
(statearr_39027_39060[(2)] = inst_38985);

(statearr_39027_39060[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (11))){
var inst_38956 = (state_39004[(8)]);
var inst_38970 = (state_39004[(7)]);
var inst_38970__$1 = cljs.core.seq.call(null,inst_38956);
var state_39004__$1 = (function (){var statearr_39028 = state_39004;
(statearr_39028[(7)] = inst_38970__$1);

return statearr_39028;
})();
if(inst_38970__$1){
var statearr_39029_39061 = state_39004__$1;
(statearr_39029_39061[(1)] = (14));

} else {
var statearr_39030_39062 = state_39004__$1;
(statearr_39030_39062[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (9))){
var inst_38992 = (state_39004[(2)]);
var inst_38993 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39004__$1 = (function (){var statearr_39031 = state_39004;
(statearr_39031[(15)] = inst_38992);

return statearr_39031;
})();
if(cljs.core.truth_(inst_38993)){
var statearr_39032_39063 = state_39004__$1;
(statearr_39032_39063[(1)] = (21));

} else {
var statearr_39033_39064 = state_39004__$1;
(statearr_39033_39064[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (5))){
var inst_38948 = cljs.core.async.close_BANG_.call(null,out);
var state_39004__$1 = state_39004;
var statearr_39034_39065 = state_39004__$1;
(statearr_39034_39065[(2)] = inst_38948);

(statearr_39034_39065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (14))){
var inst_38970 = (state_39004[(7)]);
var inst_38972 = cljs.core.chunked_seq_QMARK_.call(null,inst_38970);
var state_39004__$1 = state_39004;
if(inst_38972){
var statearr_39035_39066 = state_39004__$1;
(statearr_39035_39066[(1)] = (17));

} else {
var statearr_39036_39067 = state_39004__$1;
(statearr_39036_39067[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (16))){
var inst_38988 = (state_39004[(2)]);
var state_39004__$1 = state_39004;
var statearr_39037_39068 = state_39004__$1;
(statearr_39037_39068[(2)] = inst_38988);

(statearr_39037_39068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39005 === (10))){
var inst_38957 = (state_39004[(9)]);
var inst_38959 = (state_39004[(12)]);
var inst_38964 = cljs.core._nth.call(null,inst_38957,inst_38959);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39004__$1,(13),out,inst_38964);
} else {
if((state_val_39005 === (18))){
var inst_38970 = (state_39004[(7)]);
var inst_38979 = cljs.core.first.call(null,inst_38970);
var state_39004__$1 = state_39004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39004__$1,(20),out,inst_38979);
} else {
if((state_val_39005 === (8))){
var inst_38958 = (state_39004[(11)]);
var inst_38959 = (state_39004[(12)]);
var inst_38961 = (inst_38959 < inst_38958);
var inst_38962 = inst_38961;
var state_39004__$1 = state_39004;
if(cljs.core.truth_(inst_38962)){
var statearr_39038_39069 = state_39004__$1;
(statearr_39038_39069[(1)] = (10));

} else {
var statearr_39039_39070 = state_39004__$1;
(statearr_39039_39070[(1)] = (11));

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
});})(c__36513__auto__))
;
return ((function (switch__36401__auto__,c__36513__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____0 = (function (){
var statearr_39043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39043[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__);

(statearr_39043[(1)] = (1));

return statearr_39043;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____1 = (function (state_39004){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_39004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e39044){if((e39044 instanceof Object)){
var ex__36405__auto__ = e39044;
var statearr_39045_39071 = state_39004;
(statearr_39045_39071[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39072 = state_39004;
state_39004 = G__39072;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__ = function(state_39004){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____1.call(this,state_39004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36402__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto__))
})();
var state__36515__auto__ = (function (){var statearr_39046 = f__36514__auto__.call(null);
(statearr_39046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto__);

return statearr_39046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto__))
);

return c__36513__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39073 = [];
var len__31204__auto___39076 = arguments.length;
var i__31205__auto___39077 = (0);
while(true){
if((i__31205__auto___39077 < len__31204__auto___39076)){
args39073.push((arguments[i__31205__auto___39077]));

var G__39078 = (i__31205__auto___39077 + (1));
i__31205__auto___39077 = G__39078;
continue;
} else {
}
break;
}

var G__39075 = args39073.length;
switch (G__39075) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39073.length)].join('')));

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
var args39080 = [];
var len__31204__auto___39083 = arguments.length;
var i__31205__auto___39084 = (0);
while(true){
if((i__31205__auto___39084 < len__31204__auto___39083)){
args39080.push((arguments[i__31205__auto___39084]));

var G__39085 = (i__31205__auto___39084 + (1));
i__31205__auto___39084 = G__39085;
continue;
} else {
}
break;
}

var G__39082 = args39080.length;
switch (G__39082) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39080.length)].join('')));

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
var args39087 = [];
var len__31204__auto___39138 = arguments.length;
var i__31205__auto___39139 = (0);
while(true){
if((i__31205__auto___39139 < len__31204__auto___39138)){
args39087.push((arguments[i__31205__auto___39139]));

var G__39140 = (i__31205__auto___39139 + (1));
i__31205__auto___39139 = G__39140;
continue;
} else {
}
break;
}

var G__39089 = args39087.length;
switch (G__39089) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39087.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___39142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___39142,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___39142,out){
return (function (state_39113){
var state_val_39114 = (state_39113[(1)]);
if((state_val_39114 === (7))){
var inst_39108 = (state_39113[(2)]);
var state_39113__$1 = state_39113;
var statearr_39115_39143 = state_39113__$1;
(statearr_39115_39143[(2)] = inst_39108);

(statearr_39115_39143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (1))){
var inst_39090 = null;
var state_39113__$1 = (function (){var statearr_39116 = state_39113;
(statearr_39116[(7)] = inst_39090);

return statearr_39116;
})();
var statearr_39117_39144 = state_39113__$1;
(statearr_39117_39144[(2)] = null);

(statearr_39117_39144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (4))){
var inst_39093 = (state_39113[(8)]);
var inst_39093__$1 = (state_39113[(2)]);
var inst_39094 = (inst_39093__$1 == null);
var inst_39095 = cljs.core.not.call(null,inst_39094);
var state_39113__$1 = (function (){var statearr_39118 = state_39113;
(statearr_39118[(8)] = inst_39093__$1);

return statearr_39118;
})();
if(inst_39095){
var statearr_39119_39145 = state_39113__$1;
(statearr_39119_39145[(1)] = (5));

} else {
var statearr_39120_39146 = state_39113__$1;
(statearr_39120_39146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (6))){
var state_39113__$1 = state_39113;
var statearr_39121_39147 = state_39113__$1;
(statearr_39121_39147[(2)] = null);

(statearr_39121_39147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (3))){
var inst_39110 = (state_39113[(2)]);
var inst_39111 = cljs.core.async.close_BANG_.call(null,out);
var state_39113__$1 = (function (){var statearr_39122 = state_39113;
(statearr_39122[(9)] = inst_39110);

return statearr_39122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39113__$1,inst_39111);
} else {
if((state_val_39114 === (2))){
var state_39113__$1 = state_39113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39113__$1,(4),ch);
} else {
if((state_val_39114 === (11))){
var inst_39093 = (state_39113[(8)]);
var inst_39102 = (state_39113[(2)]);
var inst_39090 = inst_39093;
var state_39113__$1 = (function (){var statearr_39123 = state_39113;
(statearr_39123[(7)] = inst_39090);

(statearr_39123[(10)] = inst_39102);

return statearr_39123;
})();
var statearr_39124_39148 = state_39113__$1;
(statearr_39124_39148[(2)] = null);

(statearr_39124_39148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (9))){
var inst_39093 = (state_39113[(8)]);
var state_39113__$1 = state_39113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39113__$1,(11),out,inst_39093);
} else {
if((state_val_39114 === (5))){
var inst_39090 = (state_39113[(7)]);
var inst_39093 = (state_39113[(8)]);
var inst_39097 = cljs.core._EQ_.call(null,inst_39093,inst_39090);
var state_39113__$1 = state_39113;
if(inst_39097){
var statearr_39126_39149 = state_39113__$1;
(statearr_39126_39149[(1)] = (8));

} else {
var statearr_39127_39150 = state_39113__$1;
(statearr_39127_39150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (10))){
var inst_39105 = (state_39113[(2)]);
var state_39113__$1 = state_39113;
var statearr_39128_39151 = state_39113__$1;
(statearr_39128_39151[(2)] = inst_39105);

(statearr_39128_39151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39114 === (8))){
var inst_39090 = (state_39113[(7)]);
var tmp39125 = inst_39090;
var inst_39090__$1 = tmp39125;
var state_39113__$1 = (function (){var statearr_39129 = state_39113;
(statearr_39129[(7)] = inst_39090__$1);

return statearr_39129;
})();
var statearr_39130_39152 = state_39113__$1;
(statearr_39130_39152[(2)] = null);

(statearr_39130_39152[(1)] = (2));


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
});})(c__36513__auto___39142,out))
;
return ((function (switch__36401__auto__,c__36513__auto___39142,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_39134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39134[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_39134[(1)] = (1));

return statearr_39134;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_39113){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_39113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e39135){if((e39135 instanceof Object)){
var ex__36405__auto__ = e39135;
var statearr_39136_39153 = state_39113;
(statearr_39136_39153[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39154 = state_39113;
state_39113 = G__39154;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_39113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_39113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___39142,out))
})();
var state__36515__auto__ = (function (){var statearr_39137 = f__36514__auto__.call(null);
(statearr_39137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___39142);

return statearr_39137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___39142,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39155 = [];
var len__31204__auto___39225 = arguments.length;
var i__31205__auto___39226 = (0);
while(true){
if((i__31205__auto___39226 < len__31204__auto___39225)){
args39155.push((arguments[i__31205__auto___39226]));

var G__39227 = (i__31205__auto___39226 + (1));
i__31205__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var G__39157 = args39155.length;
switch (G__39157) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39155.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___39229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___39229,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___39229,out){
return (function (state_39195){
var state_val_39196 = (state_39195[(1)]);
if((state_val_39196 === (7))){
var inst_39191 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39197_39230 = state_39195__$1;
(statearr_39197_39230[(2)] = inst_39191);

(statearr_39197_39230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (1))){
var inst_39158 = (new Array(n));
var inst_39159 = inst_39158;
var inst_39160 = (0);
var state_39195__$1 = (function (){var statearr_39198 = state_39195;
(statearr_39198[(7)] = inst_39160);

(statearr_39198[(8)] = inst_39159);

return statearr_39198;
})();
var statearr_39199_39231 = state_39195__$1;
(statearr_39199_39231[(2)] = null);

(statearr_39199_39231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (4))){
var inst_39163 = (state_39195[(9)]);
var inst_39163__$1 = (state_39195[(2)]);
var inst_39164 = (inst_39163__$1 == null);
var inst_39165 = cljs.core.not.call(null,inst_39164);
var state_39195__$1 = (function (){var statearr_39200 = state_39195;
(statearr_39200[(9)] = inst_39163__$1);

return statearr_39200;
})();
if(inst_39165){
var statearr_39201_39232 = state_39195__$1;
(statearr_39201_39232[(1)] = (5));

} else {
var statearr_39202_39233 = state_39195__$1;
(statearr_39202_39233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (15))){
var inst_39185 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39203_39234 = state_39195__$1;
(statearr_39203_39234[(2)] = inst_39185);

(statearr_39203_39234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (13))){
var state_39195__$1 = state_39195;
var statearr_39204_39235 = state_39195__$1;
(statearr_39204_39235[(2)] = null);

(statearr_39204_39235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (6))){
var inst_39160 = (state_39195[(7)]);
var inst_39181 = (inst_39160 > (0));
var state_39195__$1 = state_39195;
if(cljs.core.truth_(inst_39181)){
var statearr_39205_39236 = state_39195__$1;
(statearr_39205_39236[(1)] = (12));

} else {
var statearr_39206_39237 = state_39195__$1;
(statearr_39206_39237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (3))){
var inst_39193 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39195__$1,inst_39193);
} else {
if((state_val_39196 === (12))){
var inst_39159 = (state_39195[(8)]);
var inst_39183 = cljs.core.vec.call(null,inst_39159);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39195__$1,(15),out,inst_39183);
} else {
if((state_val_39196 === (2))){
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39195__$1,(4),ch);
} else {
if((state_val_39196 === (11))){
var inst_39175 = (state_39195[(2)]);
var inst_39176 = (new Array(n));
var inst_39159 = inst_39176;
var inst_39160 = (0);
var state_39195__$1 = (function (){var statearr_39207 = state_39195;
(statearr_39207[(7)] = inst_39160);

(statearr_39207[(8)] = inst_39159);

(statearr_39207[(10)] = inst_39175);

return statearr_39207;
})();
var statearr_39208_39238 = state_39195__$1;
(statearr_39208_39238[(2)] = null);

(statearr_39208_39238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (9))){
var inst_39159 = (state_39195[(8)]);
var inst_39173 = cljs.core.vec.call(null,inst_39159);
var state_39195__$1 = state_39195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39195__$1,(11),out,inst_39173);
} else {
if((state_val_39196 === (5))){
var inst_39168 = (state_39195[(11)]);
var inst_39160 = (state_39195[(7)]);
var inst_39159 = (state_39195[(8)]);
var inst_39163 = (state_39195[(9)]);
var inst_39167 = (inst_39159[inst_39160] = inst_39163);
var inst_39168__$1 = (inst_39160 + (1));
var inst_39169 = (inst_39168__$1 < n);
var state_39195__$1 = (function (){var statearr_39209 = state_39195;
(statearr_39209[(11)] = inst_39168__$1);

(statearr_39209[(12)] = inst_39167);

return statearr_39209;
})();
if(cljs.core.truth_(inst_39169)){
var statearr_39210_39239 = state_39195__$1;
(statearr_39210_39239[(1)] = (8));

} else {
var statearr_39211_39240 = state_39195__$1;
(statearr_39211_39240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (14))){
var inst_39188 = (state_39195[(2)]);
var inst_39189 = cljs.core.async.close_BANG_.call(null,out);
var state_39195__$1 = (function (){var statearr_39213 = state_39195;
(statearr_39213[(13)] = inst_39188);

return statearr_39213;
})();
var statearr_39214_39241 = state_39195__$1;
(statearr_39214_39241[(2)] = inst_39189);

(statearr_39214_39241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (10))){
var inst_39179 = (state_39195[(2)]);
var state_39195__$1 = state_39195;
var statearr_39215_39242 = state_39195__$1;
(statearr_39215_39242[(2)] = inst_39179);

(statearr_39215_39242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39196 === (8))){
var inst_39168 = (state_39195[(11)]);
var inst_39159 = (state_39195[(8)]);
var tmp39212 = inst_39159;
var inst_39159__$1 = tmp39212;
var inst_39160 = inst_39168;
var state_39195__$1 = (function (){var statearr_39216 = state_39195;
(statearr_39216[(7)] = inst_39160);

(statearr_39216[(8)] = inst_39159__$1);

return statearr_39216;
})();
var statearr_39217_39243 = state_39195__$1;
(statearr_39217_39243[(2)] = null);

(statearr_39217_39243[(1)] = (2));


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
});})(c__36513__auto___39229,out))
;
return ((function (switch__36401__auto__,c__36513__auto___39229,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_39221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39221[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_39221[(1)] = (1));

return statearr_39221;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_39195){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_39195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e39222){if((e39222 instanceof Object)){
var ex__36405__auto__ = e39222;
var statearr_39223_39244 = state_39195;
(statearr_39223_39244[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39245 = state_39195;
state_39195 = G__39245;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_39195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_39195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___39229,out))
})();
var state__36515__auto__ = (function (){var statearr_39224 = f__36514__auto__.call(null);
(statearr_39224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___39229);

return statearr_39224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___39229,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39246 = [];
var len__31204__auto___39320 = arguments.length;
var i__31205__auto___39321 = (0);
while(true){
if((i__31205__auto___39321 < len__31204__auto___39320)){
args39246.push((arguments[i__31205__auto___39321]));

var G__39322 = (i__31205__auto___39321 + (1));
i__31205__auto___39321 = G__39322;
continue;
} else {
}
break;
}

var G__39248 = args39246.length;
switch (G__39248) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39246.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36513__auto___39324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36513__auto___39324,out){
return (function (){
var f__36514__auto__ = (function (){var switch__36401__auto__ = ((function (c__36513__auto___39324,out){
return (function (state_39290){
var state_val_39291 = (state_39290[(1)]);
if((state_val_39291 === (7))){
var inst_39286 = (state_39290[(2)]);
var state_39290__$1 = state_39290;
var statearr_39292_39325 = state_39290__$1;
(statearr_39292_39325[(2)] = inst_39286);

(statearr_39292_39325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (1))){
var inst_39249 = [];
var inst_39250 = inst_39249;
var inst_39251 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39290__$1 = (function (){var statearr_39293 = state_39290;
(statearr_39293[(7)] = inst_39250);

(statearr_39293[(8)] = inst_39251);

return statearr_39293;
})();
var statearr_39294_39326 = state_39290__$1;
(statearr_39294_39326[(2)] = null);

(statearr_39294_39326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (4))){
var inst_39254 = (state_39290[(9)]);
var inst_39254__$1 = (state_39290[(2)]);
var inst_39255 = (inst_39254__$1 == null);
var inst_39256 = cljs.core.not.call(null,inst_39255);
var state_39290__$1 = (function (){var statearr_39295 = state_39290;
(statearr_39295[(9)] = inst_39254__$1);

return statearr_39295;
})();
if(inst_39256){
var statearr_39296_39327 = state_39290__$1;
(statearr_39296_39327[(1)] = (5));

} else {
var statearr_39297_39328 = state_39290__$1;
(statearr_39297_39328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (15))){
var inst_39280 = (state_39290[(2)]);
var state_39290__$1 = state_39290;
var statearr_39298_39329 = state_39290__$1;
(statearr_39298_39329[(2)] = inst_39280);

(statearr_39298_39329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (13))){
var state_39290__$1 = state_39290;
var statearr_39299_39330 = state_39290__$1;
(statearr_39299_39330[(2)] = null);

(statearr_39299_39330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (6))){
var inst_39250 = (state_39290[(7)]);
var inst_39275 = inst_39250.length;
var inst_39276 = (inst_39275 > (0));
var state_39290__$1 = state_39290;
if(cljs.core.truth_(inst_39276)){
var statearr_39300_39331 = state_39290__$1;
(statearr_39300_39331[(1)] = (12));

} else {
var statearr_39301_39332 = state_39290__$1;
(statearr_39301_39332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (3))){
var inst_39288 = (state_39290[(2)]);
var state_39290__$1 = state_39290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39290__$1,inst_39288);
} else {
if((state_val_39291 === (12))){
var inst_39250 = (state_39290[(7)]);
var inst_39278 = cljs.core.vec.call(null,inst_39250);
var state_39290__$1 = state_39290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39290__$1,(15),out,inst_39278);
} else {
if((state_val_39291 === (2))){
var state_39290__$1 = state_39290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39290__$1,(4),ch);
} else {
if((state_val_39291 === (11))){
var inst_39254 = (state_39290[(9)]);
var inst_39258 = (state_39290[(10)]);
var inst_39268 = (state_39290[(2)]);
var inst_39269 = [];
var inst_39270 = inst_39269.push(inst_39254);
var inst_39250 = inst_39269;
var inst_39251 = inst_39258;
var state_39290__$1 = (function (){var statearr_39302 = state_39290;
(statearr_39302[(11)] = inst_39270);

(statearr_39302[(7)] = inst_39250);

(statearr_39302[(8)] = inst_39251);

(statearr_39302[(12)] = inst_39268);

return statearr_39302;
})();
var statearr_39303_39333 = state_39290__$1;
(statearr_39303_39333[(2)] = null);

(statearr_39303_39333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (9))){
var inst_39250 = (state_39290[(7)]);
var inst_39266 = cljs.core.vec.call(null,inst_39250);
var state_39290__$1 = state_39290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39290__$1,(11),out,inst_39266);
} else {
if((state_val_39291 === (5))){
var inst_39254 = (state_39290[(9)]);
var inst_39251 = (state_39290[(8)]);
var inst_39258 = (state_39290[(10)]);
var inst_39258__$1 = f.call(null,inst_39254);
var inst_39259 = cljs.core._EQ_.call(null,inst_39258__$1,inst_39251);
var inst_39260 = cljs.core.keyword_identical_QMARK_.call(null,inst_39251,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39261 = (inst_39259) || (inst_39260);
var state_39290__$1 = (function (){var statearr_39304 = state_39290;
(statearr_39304[(10)] = inst_39258__$1);

return statearr_39304;
})();
if(cljs.core.truth_(inst_39261)){
var statearr_39305_39334 = state_39290__$1;
(statearr_39305_39334[(1)] = (8));

} else {
var statearr_39306_39335 = state_39290__$1;
(statearr_39306_39335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (14))){
var inst_39283 = (state_39290[(2)]);
var inst_39284 = cljs.core.async.close_BANG_.call(null,out);
var state_39290__$1 = (function (){var statearr_39308 = state_39290;
(statearr_39308[(13)] = inst_39283);

return statearr_39308;
})();
var statearr_39309_39336 = state_39290__$1;
(statearr_39309_39336[(2)] = inst_39284);

(statearr_39309_39336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (10))){
var inst_39273 = (state_39290[(2)]);
var state_39290__$1 = state_39290;
var statearr_39310_39337 = state_39290__$1;
(statearr_39310_39337[(2)] = inst_39273);

(statearr_39310_39337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39291 === (8))){
var inst_39254 = (state_39290[(9)]);
var inst_39250 = (state_39290[(7)]);
var inst_39258 = (state_39290[(10)]);
var inst_39263 = inst_39250.push(inst_39254);
var tmp39307 = inst_39250;
var inst_39250__$1 = tmp39307;
var inst_39251 = inst_39258;
var state_39290__$1 = (function (){var statearr_39311 = state_39290;
(statearr_39311[(7)] = inst_39250__$1);

(statearr_39311[(8)] = inst_39251);

(statearr_39311[(14)] = inst_39263);

return statearr_39311;
})();
var statearr_39312_39338 = state_39290__$1;
(statearr_39312_39338[(2)] = null);

(statearr_39312_39338[(1)] = (2));


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
});})(c__36513__auto___39324,out))
;
return ((function (switch__36401__auto__,c__36513__auto___39324,out){
return (function() {
var cljs$core$async$state_machine__36402__auto__ = null;
var cljs$core$async$state_machine__36402__auto____0 = (function (){
var statearr_39316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39316[(0)] = cljs$core$async$state_machine__36402__auto__);

(statearr_39316[(1)] = (1));

return statearr_39316;
});
var cljs$core$async$state_machine__36402__auto____1 = (function (state_39290){
while(true){
var ret_value__36403__auto__ = (function (){try{while(true){
var result__36404__auto__ = switch__36401__auto__.call(null,state_39290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36404__auto__;
}
break;
}
}catch (e39317){if((e39317 instanceof Object)){
var ex__36405__auto__ = e39317;
var statearr_39318_39339 = state_39290;
(statearr_39318_39339[(5)] = ex__36405__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36403__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39340 = state_39290;
state_39290 = G__39340;
continue;
} else {
return ret_value__36403__auto__;
}
break;
}
});
cljs$core$async$state_machine__36402__auto__ = function(state_39290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36402__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36402__auto____1.call(this,state_39290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36402__auto____0;
cljs$core$async$state_machine__36402__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36402__auto____1;
return cljs$core$async$state_machine__36402__auto__;
})()
;})(switch__36401__auto__,c__36513__auto___39324,out))
})();
var state__36515__auto__ = (function (){var statearr_39319 = f__36514__auto__.call(null);
(statearr_39319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36513__auto___39324);

return statearr_39319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36515__auto__);
});})(c__36513__auto___39324,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

