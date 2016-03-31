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
var args27783 = [];
var len__22734__auto___27789 = arguments.length;
var i__22735__auto___27790 = (0);
while(true){
if((i__22735__auto___27790 < len__22734__auto___27789)){
args27783.push((arguments[i__22735__auto___27790]));

var G__27791 = (i__22735__auto___27790 + (1));
i__22735__auto___27790 = G__27791;
continue;
} else {
}
break;
}

var G__27785 = args27783.length;
switch (G__27785) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27783.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27786 = (function (f,blockable,meta27787){
this.f = f;
this.blockable = blockable;
this.meta27787 = meta27787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27788,meta27787__$1){
var self__ = this;
var _27788__$1 = this;
return (new cljs.core.async.t_cljs$core$async27786(self__.f,self__.blockable,meta27787__$1));
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27788){
var self__ = this;
var _27788__$1 = this;
return self__.meta27787;
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27787","meta27787",1587884988,null)], null);
});

cljs.core.async.t_cljs$core$async27786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27786";

cljs.core.async.t_cljs$core$async27786.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27786");
});

cljs.core.async.__GT_t_cljs$core$async27786 = (function cljs$core$async$__GT_t_cljs$core$async27786(f__$1,blockable__$1,meta27787){
return (new cljs.core.async.t_cljs$core$async27786(f__$1,blockable__$1,meta27787));
});

}

return (new cljs.core.async.t_cljs$core$async27786(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27795 = [];
var len__22734__auto___27798 = arguments.length;
var i__22735__auto___27799 = (0);
while(true){
if((i__22735__auto___27799 < len__22734__auto___27798)){
args27795.push((arguments[i__22735__auto___27799]));

var G__27800 = (i__22735__auto___27799 + (1));
i__22735__auto___27799 = G__27800;
continue;
} else {
}
break;
}

var G__27797 = args27795.length;
switch (G__27797) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27795.length)].join('')));

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
var args27802 = [];
var len__22734__auto___27805 = arguments.length;
var i__22735__auto___27806 = (0);
while(true){
if((i__22735__auto___27806 < len__22734__auto___27805)){
args27802.push((arguments[i__22735__auto___27806]));

var G__27807 = (i__22735__auto___27806 + (1));
i__22735__auto___27806 = G__27807;
continue;
} else {
}
break;
}

var G__27804 = args27802.length;
switch (G__27804) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27802.length)].join('')));

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
var args27809 = [];
var len__22734__auto___27812 = arguments.length;
var i__22735__auto___27813 = (0);
while(true){
if((i__22735__auto___27813 < len__22734__auto___27812)){
args27809.push((arguments[i__22735__auto___27813]));

var G__27814 = (i__22735__auto___27813 + (1));
i__22735__auto___27813 = G__27814;
continue;
} else {
}
break;
}

var G__27811 = args27809.length;
switch (G__27811) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27809.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27816 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27816);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27816,ret){
return (function (){
return fn1.call(null,val_27816);
});})(val_27816,ret))
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
var args27817 = [];
var len__22734__auto___27820 = arguments.length;
var i__22735__auto___27821 = (0);
while(true){
if((i__22735__auto___27821 < len__22734__auto___27820)){
args27817.push((arguments[i__22735__auto___27821]));

var G__27822 = (i__22735__auto___27821 + (1));
i__22735__auto___27821 = G__27822;
continue;
} else {
}
break;
}

var G__27819 = args27817.length;
switch (G__27819) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27817.length)].join('')));

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
var n__22579__auto___27824 = n;
var x_27825 = (0);
while(true){
if((x_27825 < n__22579__auto___27824)){
(a[x_27825] = (0));

var G__27826 = (x_27825 + (1));
x_27825 = G__27826;
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

var G__27827 = (i + (1));
i = G__27827;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27831 = (function (alt_flag,flag,meta27832){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27832 = meta27832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27833,meta27832__$1){
var self__ = this;
var _27833__$1 = this;
return (new cljs.core.async.t_cljs$core$async27831(self__.alt_flag,self__.flag,meta27832__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27833){
var self__ = this;
var _27833__$1 = this;
return self__.meta27832;
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27832","meta27832",622460215,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27831";

cljs.core.async.t_cljs$core$async27831.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27831");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27831 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27831(alt_flag__$1,flag__$1,meta27832){
return (new cljs.core.async.t_cljs$core$async27831(alt_flag__$1,flag__$1,meta27832));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27831(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27837 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27837 = (function (alt_handler,flag,cb,meta27838){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27838 = meta27838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27839,meta27838__$1){
var self__ = this;
var _27839__$1 = this;
return (new cljs.core.async.t_cljs$core$async27837(self__.alt_handler,self__.flag,self__.cb,meta27838__$1));
});

cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27839){
var self__ = this;
var _27839__$1 = this;
return self__.meta27838;
});

cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27838","meta27838",-314140225,null)], null);
});

cljs.core.async.t_cljs$core$async27837.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27837";

cljs.core.async.t_cljs$core$async27837.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27837");
});

cljs.core.async.__GT_t_cljs$core$async27837 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27837(alt_handler__$1,flag__$1,cb__$1,meta27838){
return (new cljs.core.async.t_cljs$core$async27837(alt_handler__$1,flag__$1,cb__$1,meta27838));
});

}

return (new cljs.core.async.t_cljs$core$async27837(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27840_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27840_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27841_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27841_SHARP_,port], null));
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
var G__27842 = (i + (1));
i = G__27842;
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
var len__22734__auto___27848 = arguments.length;
var i__22735__auto___27849 = (0);
while(true){
if((i__22735__auto___27849 < len__22734__auto___27848)){
args__22741__auto__.push((arguments[i__22735__auto___27849]));

var G__27850 = (i__22735__auto___27849 + (1));
i__22735__auto___27849 = G__27850;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((1) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22742__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27845){
var map__27846 = p__27845;
var map__27846__$1 = ((((!((map__27846 == null)))?((((map__27846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27846):map__27846);
var opts = map__27846__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27843){
var G__27844 = cljs.core.first.call(null,seq27843);
var seq27843__$1 = cljs.core.next.call(null,seq27843);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27844,seq27843__$1);
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
var args27851 = [];
var len__22734__auto___27901 = arguments.length;
var i__22735__auto___27902 = (0);
while(true){
if((i__22735__auto___27902 < len__22734__auto___27901)){
args27851.push((arguments[i__22735__auto___27902]));

var G__27903 = (i__22735__auto___27902 + (1));
i__22735__auto___27902 = G__27903;
continue;
} else {
}
break;
}

var G__27853 = args27851.length;
switch (G__27853) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27851.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27738__auto___27905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___27905){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___27905){
return (function (state_27877){
var state_val_27878 = (state_27877[(1)]);
if((state_val_27878 === (7))){
var inst_27873 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
var statearr_27879_27906 = state_27877__$1;
(statearr_27879_27906[(2)] = inst_27873);

(statearr_27879_27906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (1))){
var state_27877__$1 = state_27877;
var statearr_27880_27907 = state_27877__$1;
(statearr_27880_27907[(2)] = null);

(statearr_27880_27907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (4))){
var inst_27856 = (state_27877[(7)]);
var inst_27856__$1 = (state_27877[(2)]);
var inst_27857 = (inst_27856__$1 == null);
var state_27877__$1 = (function (){var statearr_27881 = state_27877;
(statearr_27881[(7)] = inst_27856__$1);

return statearr_27881;
})();
if(cljs.core.truth_(inst_27857)){
var statearr_27882_27908 = state_27877__$1;
(statearr_27882_27908[(1)] = (5));

} else {
var statearr_27883_27909 = state_27877__$1;
(statearr_27883_27909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (13))){
var state_27877__$1 = state_27877;
var statearr_27884_27910 = state_27877__$1;
(statearr_27884_27910[(2)] = null);

(statearr_27884_27910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (6))){
var inst_27856 = (state_27877[(7)]);
var state_27877__$1 = state_27877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27877__$1,(11),to,inst_27856);
} else {
if((state_val_27878 === (3))){
var inst_27875 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27877__$1,inst_27875);
} else {
if((state_val_27878 === (12))){
var state_27877__$1 = state_27877;
var statearr_27885_27911 = state_27877__$1;
(statearr_27885_27911[(2)] = null);

(statearr_27885_27911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (2))){
var state_27877__$1 = state_27877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27877__$1,(4),from);
} else {
if((state_val_27878 === (11))){
var inst_27866 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
if(cljs.core.truth_(inst_27866)){
var statearr_27886_27912 = state_27877__$1;
(statearr_27886_27912[(1)] = (12));

} else {
var statearr_27887_27913 = state_27877__$1;
(statearr_27887_27913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (9))){
var state_27877__$1 = state_27877;
var statearr_27888_27914 = state_27877__$1;
(statearr_27888_27914[(2)] = null);

(statearr_27888_27914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (5))){
var state_27877__$1 = state_27877;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27889_27915 = state_27877__$1;
(statearr_27889_27915[(1)] = (8));

} else {
var statearr_27890_27916 = state_27877__$1;
(statearr_27890_27916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (14))){
var inst_27871 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
var statearr_27891_27917 = state_27877__$1;
(statearr_27891_27917[(2)] = inst_27871);

(statearr_27891_27917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (10))){
var inst_27863 = (state_27877[(2)]);
var state_27877__$1 = state_27877;
var statearr_27892_27918 = state_27877__$1;
(statearr_27892_27918[(2)] = inst_27863);

(statearr_27892_27918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27878 === (8))){
var inst_27860 = cljs.core.async.close_BANG_.call(null,to);
var state_27877__$1 = state_27877;
var statearr_27893_27919 = state_27877__$1;
(statearr_27893_27919[(2)] = inst_27860);

(statearr_27893_27919[(1)] = (10));


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
});})(c__27738__auto___27905))
;
return ((function (switch__27626__auto__,c__27738__auto___27905){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_27897 = [null,null,null,null,null,null,null,null];
(statearr_27897[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_27897[(1)] = (1));

return statearr_27897;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_27877){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_27877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e27898){if((e27898 instanceof Object)){
var ex__27630__auto__ = e27898;
var statearr_27899_27920 = state_27877;
(statearr_27899_27920[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27921 = state_27877;
state_27877 = G__27921;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_27877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_27877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___27905))
})();
var state__27740__auto__ = (function (){var statearr_27900 = f__27739__auto__.call(null);
(statearr_27900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___27905);

return statearr_27900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___27905))
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
return (function (p__28105){
var vec__28106 = p__28105;
var v = cljs.core.nth.call(null,vec__28106,(0),null);
var p = cljs.core.nth.call(null,vec__28106,(1),null);
var job = vec__28106;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27738__auto___28288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results){
return (function (state_28111){
var state_val_28112 = (state_28111[(1)]);
if((state_val_28112 === (1))){
var state_28111__$1 = state_28111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28111__$1,(2),res,v);
} else {
if((state_val_28112 === (2))){
var inst_28108 = (state_28111[(2)]);
var inst_28109 = cljs.core.async.close_BANG_.call(null,res);
var state_28111__$1 = (function (){var statearr_28113 = state_28111;
(statearr_28113[(7)] = inst_28108);

return statearr_28113;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28111__$1,inst_28109);
} else {
return null;
}
}
});})(c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results))
;
return ((function (switch__27626__auto__,c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28117 = [null,null,null,null,null,null,null,null];
(statearr_28117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28117[(1)] = (1));

return statearr_28117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28111){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28118){if((e28118 instanceof Object)){
var ex__27630__auto__ = e28118;
var statearr_28119_28289 = state_28111;
(statearr_28119_28289[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28290 = state_28111;
state_28111 = G__28290;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results))
})();
var state__27740__auto__ = (function (){var statearr_28120 = f__27739__auto__.call(null);
(statearr_28120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___28288);

return statearr_28120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___28288,res,vec__28106,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28121){
var vec__28122 = p__28121;
var v = cljs.core.nth.call(null,vec__28122,(0),null);
var p = cljs.core.nth.call(null,vec__28122,(1),null);
var job = vec__28122;
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
var n__22579__auto___28291 = n;
var __28292 = (0);
while(true){
if((__28292 < n__22579__auto___28291)){
var G__28123_28293 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28123_28293) {
case "compute":
var c__27738__auto___28295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28292,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (__28292,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function (state_28136){
var state_val_28137 = (state_28136[(1)]);
if((state_val_28137 === (1))){
var state_28136__$1 = state_28136;
var statearr_28138_28296 = state_28136__$1;
(statearr_28138_28296[(2)] = null);

(statearr_28138_28296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (2))){
var state_28136__$1 = state_28136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28136__$1,(4),jobs);
} else {
if((state_val_28137 === (3))){
var inst_28134 = (state_28136[(2)]);
var state_28136__$1 = state_28136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28136__$1,inst_28134);
} else {
if((state_val_28137 === (4))){
var inst_28126 = (state_28136[(2)]);
var inst_28127 = process.call(null,inst_28126);
var state_28136__$1 = state_28136;
if(cljs.core.truth_(inst_28127)){
var statearr_28139_28297 = state_28136__$1;
(statearr_28139_28297[(1)] = (5));

} else {
var statearr_28140_28298 = state_28136__$1;
(statearr_28140_28298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (5))){
var state_28136__$1 = state_28136;
var statearr_28141_28299 = state_28136__$1;
(statearr_28141_28299[(2)] = null);

(statearr_28141_28299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (6))){
var state_28136__$1 = state_28136;
var statearr_28142_28300 = state_28136__$1;
(statearr_28142_28300[(2)] = null);

(statearr_28142_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28137 === (7))){
var inst_28132 = (state_28136[(2)]);
var state_28136__$1 = state_28136;
var statearr_28143_28301 = state_28136__$1;
(statearr_28143_28301[(2)] = inst_28132);

(statearr_28143_28301[(1)] = (3));


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
});})(__28292,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
;
return ((function (__28292,switch__27626__auto__,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28147 = [null,null,null,null,null,null,null];
(statearr_28147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28147[(1)] = (1));

return statearr_28147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28136){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28148){if((e28148 instanceof Object)){
var ex__27630__auto__ = e28148;
var statearr_28149_28302 = state_28136;
(statearr_28149_28302[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28303 = state_28136;
state_28136 = G__28303;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(__28292,switch__27626__auto__,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
})();
var state__27740__auto__ = (function (){var statearr_28150 = f__27739__auto__.call(null);
(statearr_28150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___28295);

return statearr_28150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(__28292,c__27738__auto___28295,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
);


break;
case "async":
var c__27738__auto___28304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28292,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (__28292,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (1))){
var state_28163__$1 = state_28163;
var statearr_28165_28305 = state_28163__$1;
(statearr_28165_28305[(2)] = null);

(statearr_28165_28305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (2))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(4),jobs);
} else {
if((state_val_28164 === (3))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (4))){
var inst_28153 = (state_28163[(2)]);
var inst_28154 = async.call(null,inst_28153);
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28154)){
var statearr_28166_28306 = state_28163__$1;
(statearr_28166_28306[(1)] = (5));

} else {
var statearr_28167_28307 = state_28163__$1;
(statearr_28167_28307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (5))){
var state_28163__$1 = state_28163;
var statearr_28168_28308 = state_28163__$1;
(statearr_28168_28308[(2)] = null);

(statearr_28168_28308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var state_28163__$1 = state_28163;
var statearr_28169_28309 = state_28163__$1;
(statearr_28169_28309[(2)] = null);

(statearr_28169_28309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (7))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28170_28310 = state_28163__$1;
(statearr_28170_28310[(2)] = inst_28159);

(statearr_28170_28310[(1)] = (3));


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
});})(__28292,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
;
return ((function (__28292,switch__27626__auto__,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28174 = [null,null,null,null,null,null,null];
(statearr_28174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28174[(1)] = (1));

return statearr_28174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28163){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28175){if((e28175 instanceof Object)){
var ex__27630__auto__ = e28175;
var statearr_28176_28311 = state_28163;
(statearr_28176_28311[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28312 = state_28163;
state_28163 = G__28312;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(__28292,switch__27626__auto__,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
})();
var state__27740__auto__ = (function (){var statearr_28177 = f__27739__auto__.call(null);
(statearr_28177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___28304);

return statearr_28177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(__28292,c__27738__auto___28304,G__28123_28293,n__22579__auto___28291,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28313 = (__28292 + (1));
__28292 = G__28313;
continue;
} else {
}
break;
}

var c__27738__auto___28314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___28314,jobs,results,process,async){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___28314,jobs,results,process,async){
return (function (state_28199){
var state_val_28200 = (state_28199[(1)]);
if((state_val_28200 === (1))){
var state_28199__$1 = state_28199;
var statearr_28201_28315 = state_28199__$1;
(statearr_28201_28315[(2)] = null);

(statearr_28201_28315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (2))){
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28199__$1,(4),from);
} else {
if((state_val_28200 === (3))){
var inst_28197 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28199__$1,inst_28197);
} else {
if((state_val_28200 === (4))){
var inst_28180 = (state_28199[(7)]);
var inst_28180__$1 = (state_28199[(2)]);
var inst_28181 = (inst_28180__$1 == null);
var state_28199__$1 = (function (){var statearr_28202 = state_28199;
(statearr_28202[(7)] = inst_28180__$1);

return statearr_28202;
})();
if(cljs.core.truth_(inst_28181)){
var statearr_28203_28316 = state_28199__$1;
(statearr_28203_28316[(1)] = (5));

} else {
var statearr_28204_28317 = state_28199__$1;
(statearr_28204_28317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (5))){
var inst_28183 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28199__$1 = state_28199;
var statearr_28205_28318 = state_28199__$1;
(statearr_28205_28318[(2)] = inst_28183);

(statearr_28205_28318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (6))){
var inst_28185 = (state_28199[(8)]);
var inst_28180 = (state_28199[(7)]);
var inst_28185__$1 = cljs.core.async.chan.call(null,(1));
var inst_28186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28187 = [inst_28180,inst_28185__$1];
var inst_28188 = (new cljs.core.PersistentVector(null,2,(5),inst_28186,inst_28187,null));
var state_28199__$1 = (function (){var statearr_28206 = state_28199;
(statearr_28206[(8)] = inst_28185__$1);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28199__$1,(8),jobs,inst_28188);
} else {
if((state_val_28200 === (7))){
var inst_28195 = (state_28199[(2)]);
var state_28199__$1 = state_28199;
var statearr_28207_28319 = state_28199__$1;
(statearr_28207_28319[(2)] = inst_28195);

(statearr_28207_28319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28200 === (8))){
var inst_28185 = (state_28199[(8)]);
var inst_28190 = (state_28199[(2)]);
var state_28199__$1 = (function (){var statearr_28208 = state_28199;
(statearr_28208[(9)] = inst_28190);

return statearr_28208;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28199__$1,(9),results,inst_28185);
} else {
if((state_val_28200 === (9))){
var inst_28192 = (state_28199[(2)]);
var state_28199__$1 = (function (){var statearr_28209 = state_28199;
(statearr_28209[(10)] = inst_28192);

return statearr_28209;
})();
var statearr_28210_28320 = state_28199__$1;
(statearr_28210_28320[(2)] = null);

(statearr_28210_28320[(1)] = (2));


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
});})(c__27738__auto___28314,jobs,results,process,async))
;
return ((function (switch__27626__auto__,c__27738__auto___28314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28214[(1)] = (1));

return statearr_28214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28199){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object)){
var ex__27630__auto__ = e28215;
var statearr_28216_28321 = state_28199;
(statearr_28216_28321[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28322 = state_28199;
state_28199 = G__28322;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___28314,jobs,results,process,async))
})();
var state__27740__auto__ = (function (){var statearr_28217 = f__27739__auto__.call(null);
(statearr_28217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___28314);

return statearr_28217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___28314,jobs,results,process,async))
);


var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__,jobs,results,process,async){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__,jobs,results,process,async){
return (function (state_28255){
var state_val_28256 = (state_28255[(1)]);
if((state_val_28256 === (7))){
var inst_28251 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28257_28323 = state_28255__$1;
(statearr_28257_28323[(2)] = inst_28251);

(statearr_28257_28323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (20))){
var state_28255__$1 = state_28255;
var statearr_28258_28324 = state_28255__$1;
(statearr_28258_28324[(2)] = null);

(statearr_28258_28324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (1))){
var state_28255__$1 = state_28255;
var statearr_28259_28325 = state_28255__$1;
(statearr_28259_28325[(2)] = null);

(statearr_28259_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (4))){
var inst_28220 = (state_28255[(7)]);
var inst_28220__$1 = (state_28255[(2)]);
var inst_28221 = (inst_28220__$1 == null);
var state_28255__$1 = (function (){var statearr_28260 = state_28255;
(statearr_28260[(7)] = inst_28220__$1);

return statearr_28260;
})();
if(cljs.core.truth_(inst_28221)){
var statearr_28261_28326 = state_28255__$1;
(statearr_28261_28326[(1)] = (5));

} else {
var statearr_28262_28327 = state_28255__$1;
(statearr_28262_28327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (15))){
var inst_28233 = (state_28255[(8)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28255__$1,(18),to,inst_28233);
} else {
if((state_val_28256 === (21))){
var inst_28246 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28263_28328 = state_28255__$1;
(statearr_28263_28328[(2)] = inst_28246);

(statearr_28263_28328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (13))){
var inst_28248 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28264 = state_28255;
(statearr_28264[(9)] = inst_28248);

return statearr_28264;
})();
var statearr_28265_28329 = state_28255__$1;
(statearr_28265_28329[(2)] = null);

(statearr_28265_28329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (6))){
var inst_28220 = (state_28255[(7)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(11),inst_28220);
} else {
if((state_val_28256 === (17))){
var inst_28241 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
if(cljs.core.truth_(inst_28241)){
var statearr_28266_28330 = state_28255__$1;
(statearr_28266_28330[(1)] = (19));

} else {
var statearr_28267_28331 = state_28255__$1;
(statearr_28267_28331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (3))){
var inst_28253 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else {
if((state_val_28256 === (12))){
var inst_28230 = (state_28255[(10)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(14),inst_28230);
} else {
if((state_val_28256 === (2))){
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(4),results);
} else {
if((state_val_28256 === (19))){
var state_28255__$1 = state_28255;
var statearr_28268_28332 = state_28255__$1;
(statearr_28268_28332[(2)] = null);

(statearr_28268_28332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (11))){
var inst_28230 = (state_28255[(2)]);
var state_28255__$1 = (function (){var statearr_28269 = state_28255;
(statearr_28269[(10)] = inst_28230);

return statearr_28269;
})();
var statearr_28270_28333 = state_28255__$1;
(statearr_28270_28333[(2)] = null);

(statearr_28270_28333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (9))){
var state_28255__$1 = state_28255;
var statearr_28271_28334 = state_28255__$1;
(statearr_28271_28334[(2)] = null);

(statearr_28271_28334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (5))){
var state_28255__$1 = state_28255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28272_28335 = state_28255__$1;
(statearr_28272_28335[(1)] = (8));

} else {
var statearr_28273_28336 = state_28255__$1;
(statearr_28273_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (14))){
var inst_28235 = (state_28255[(11)]);
var inst_28233 = (state_28255[(8)]);
var inst_28233__$1 = (state_28255[(2)]);
var inst_28234 = (inst_28233__$1 == null);
var inst_28235__$1 = cljs.core.not.call(null,inst_28234);
var state_28255__$1 = (function (){var statearr_28274 = state_28255;
(statearr_28274[(11)] = inst_28235__$1);

(statearr_28274[(8)] = inst_28233__$1);

return statearr_28274;
})();
if(inst_28235__$1){
var statearr_28275_28337 = state_28255__$1;
(statearr_28275_28337[(1)] = (15));

} else {
var statearr_28276_28338 = state_28255__$1;
(statearr_28276_28338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (16))){
var inst_28235 = (state_28255[(11)]);
var state_28255__$1 = state_28255;
var statearr_28277_28339 = state_28255__$1;
(statearr_28277_28339[(2)] = inst_28235);

(statearr_28277_28339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (10))){
var inst_28227 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28278_28340 = state_28255__$1;
(statearr_28278_28340[(2)] = inst_28227);

(statearr_28278_28340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (18))){
var inst_28238 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28279_28341 = state_28255__$1;
(statearr_28279_28341[(2)] = inst_28238);

(statearr_28279_28341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (8))){
var inst_28224 = cljs.core.async.close_BANG_.call(null,to);
var state_28255__$1 = state_28255;
var statearr_28280_28342 = state_28255__$1;
(statearr_28280_28342[(2)] = inst_28224);

(statearr_28280_28342[(1)] = (10));


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
});})(c__27738__auto__,jobs,results,process,async))
;
return ((function (switch__27626__auto__,c__27738__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_28284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__);

(statearr_28284[(1)] = (1));

return statearr_28284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1 = (function (state_28255){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28285){if((e28285 instanceof Object)){
var ex__27630__auto__ = e28285;
var statearr_28286_28343 = state_28255;
(statearr_28286_28343[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28255;
state_28255 = G__28344;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__,jobs,results,process,async))
})();
var state__27740__auto__ = (function (){var statearr_28287 = f__27739__auto__.call(null);
(statearr_28287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_28287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__,jobs,results,process,async))
);

return c__27738__auto__;
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
var args28345 = [];
var len__22734__auto___28348 = arguments.length;
var i__22735__auto___28349 = (0);
while(true){
if((i__22735__auto___28349 < len__22734__auto___28348)){
args28345.push((arguments[i__22735__auto___28349]));

var G__28350 = (i__22735__auto___28349 + (1));
i__22735__auto___28349 = G__28350;
continue;
} else {
}
break;
}

var G__28347 = args28345.length;
switch (G__28347) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28345.length)].join('')));

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
var args28352 = [];
var len__22734__auto___28355 = arguments.length;
var i__22735__auto___28356 = (0);
while(true){
if((i__22735__auto___28356 < len__22734__auto___28355)){
args28352.push((arguments[i__22735__auto___28356]));

var G__28357 = (i__22735__auto___28356 + (1));
i__22735__auto___28356 = G__28357;
continue;
} else {
}
break;
}

var G__28354 = args28352.length;
switch (G__28354) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28352.length)].join('')));

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
var args28359 = [];
var len__22734__auto___28412 = arguments.length;
var i__22735__auto___28413 = (0);
while(true){
if((i__22735__auto___28413 < len__22734__auto___28412)){
args28359.push((arguments[i__22735__auto___28413]));

var G__28414 = (i__22735__auto___28413 + (1));
i__22735__auto___28413 = G__28414;
continue;
} else {
}
break;
}

var G__28361 = args28359.length;
switch (G__28361) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28359.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27738__auto___28416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___28416,tc,fc){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___28416,tc,fc){
return (function (state_28387){
var state_val_28388 = (state_28387[(1)]);
if((state_val_28388 === (7))){
var inst_28383 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28389_28417 = state_28387__$1;
(statearr_28389_28417[(2)] = inst_28383);

(statearr_28389_28417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (1))){
var state_28387__$1 = state_28387;
var statearr_28390_28418 = state_28387__$1;
(statearr_28390_28418[(2)] = null);

(statearr_28390_28418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (4))){
var inst_28364 = (state_28387[(7)]);
var inst_28364__$1 = (state_28387[(2)]);
var inst_28365 = (inst_28364__$1 == null);
var state_28387__$1 = (function (){var statearr_28391 = state_28387;
(statearr_28391[(7)] = inst_28364__$1);

return statearr_28391;
})();
if(cljs.core.truth_(inst_28365)){
var statearr_28392_28419 = state_28387__$1;
(statearr_28392_28419[(1)] = (5));

} else {
var statearr_28393_28420 = state_28387__$1;
(statearr_28393_28420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (13))){
var state_28387__$1 = state_28387;
var statearr_28394_28421 = state_28387__$1;
(statearr_28394_28421[(2)] = null);

(statearr_28394_28421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (6))){
var inst_28364 = (state_28387[(7)]);
var inst_28370 = p.call(null,inst_28364);
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28370)){
var statearr_28395_28422 = state_28387__$1;
(statearr_28395_28422[(1)] = (9));

} else {
var statearr_28396_28423 = state_28387__$1;
(statearr_28396_28423[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (3))){
var inst_28385 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28387__$1,inst_28385);
} else {
if((state_val_28388 === (12))){
var state_28387__$1 = state_28387;
var statearr_28397_28424 = state_28387__$1;
(statearr_28397_28424[(2)] = null);

(statearr_28397_28424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (2))){
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28387__$1,(4),ch);
} else {
if((state_val_28388 === (11))){
var inst_28364 = (state_28387[(7)]);
var inst_28374 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28387__$1,(8),inst_28374,inst_28364);
} else {
if((state_val_28388 === (9))){
var state_28387__$1 = state_28387;
var statearr_28398_28425 = state_28387__$1;
(statearr_28398_28425[(2)] = tc);

(statearr_28398_28425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (5))){
var inst_28367 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28368 = cljs.core.async.close_BANG_.call(null,fc);
var state_28387__$1 = (function (){var statearr_28399 = state_28387;
(statearr_28399[(8)] = inst_28367);

return statearr_28399;
})();
var statearr_28400_28426 = state_28387__$1;
(statearr_28400_28426[(2)] = inst_28368);

(statearr_28400_28426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (14))){
var inst_28381 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28401_28427 = state_28387__$1;
(statearr_28401_28427[(2)] = inst_28381);

(statearr_28401_28427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (10))){
var state_28387__$1 = state_28387;
var statearr_28402_28428 = state_28387__$1;
(statearr_28402_28428[(2)] = fc);

(statearr_28402_28428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (8))){
var inst_28376 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
if(cljs.core.truth_(inst_28376)){
var statearr_28403_28429 = state_28387__$1;
(statearr_28403_28429[(1)] = (12));

} else {
var statearr_28404_28430 = state_28387__$1;
(statearr_28404_28430[(1)] = (13));

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
});})(c__27738__auto___28416,tc,fc))
;
return ((function (switch__27626__auto__,c__27738__auto___28416,tc,fc){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_28408 = [null,null,null,null,null,null,null,null,null];
(statearr_28408[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_28408[(1)] = (1));

return statearr_28408;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_28387){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28409){if((e28409 instanceof Object)){
var ex__27630__auto__ = e28409;
var statearr_28410_28431 = state_28387;
(statearr_28410_28431[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28432 = state_28387;
state_28387 = G__28432;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_28387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_28387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___28416,tc,fc))
})();
var state__27740__auto__ = (function (){var statearr_28411 = f__27739__auto__.call(null);
(statearr_28411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___28416);

return statearr_28411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___28416,tc,fc))
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
var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__){
return (function (state_28496){
var state_val_28497 = (state_28496[(1)]);
if((state_val_28497 === (7))){
var inst_28492 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28498_28519 = state_28496__$1;
(statearr_28498_28519[(2)] = inst_28492);

(statearr_28498_28519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (1))){
var inst_28476 = init;
var state_28496__$1 = (function (){var statearr_28499 = state_28496;
(statearr_28499[(7)] = inst_28476);

return statearr_28499;
})();
var statearr_28500_28520 = state_28496__$1;
(statearr_28500_28520[(2)] = null);

(statearr_28500_28520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (4))){
var inst_28479 = (state_28496[(8)]);
var inst_28479__$1 = (state_28496[(2)]);
var inst_28480 = (inst_28479__$1 == null);
var state_28496__$1 = (function (){var statearr_28501 = state_28496;
(statearr_28501[(8)] = inst_28479__$1);

return statearr_28501;
})();
if(cljs.core.truth_(inst_28480)){
var statearr_28502_28521 = state_28496__$1;
(statearr_28502_28521[(1)] = (5));

} else {
var statearr_28503_28522 = state_28496__$1;
(statearr_28503_28522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (6))){
var inst_28483 = (state_28496[(9)]);
var inst_28476 = (state_28496[(7)]);
var inst_28479 = (state_28496[(8)]);
var inst_28483__$1 = f.call(null,inst_28476,inst_28479);
var inst_28484 = cljs.core.reduced_QMARK_.call(null,inst_28483__$1);
var state_28496__$1 = (function (){var statearr_28504 = state_28496;
(statearr_28504[(9)] = inst_28483__$1);

return statearr_28504;
})();
if(inst_28484){
var statearr_28505_28523 = state_28496__$1;
(statearr_28505_28523[(1)] = (8));

} else {
var statearr_28506_28524 = state_28496__$1;
(statearr_28506_28524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (3))){
var inst_28494 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28496__$1,inst_28494);
} else {
if((state_val_28497 === (2))){
var state_28496__$1 = state_28496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28496__$1,(4),ch);
} else {
if((state_val_28497 === (9))){
var inst_28483 = (state_28496[(9)]);
var inst_28476 = inst_28483;
var state_28496__$1 = (function (){var statearr_28507 = state_28496;
(statearr_28507[(7)] = inst_28476);

return statearr_28507;
})();
var statearr_28508_28525 = state_28496__$1;
(statearr_28508_28525[(2)] = null);

(statearr_28508_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (5))){
var inst_28476 = (state_28496[(7)]);
var state_28496__$1 = state_28496;
var statearr_28509_28526 = state_28496__$1;
(statearr_28509_28526[(2)] = inst_28476);

(statearr_28509_28526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (10))){
var inst_28490 = (state_28496[(2)]);
var state_28496__$1 = state_28496;
var statearr_28510_28527 = state_28496__$1;
(statearr_28510_28527[(2)] = inst_28490);

(statearr_28510_28527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28497 === (8))){
var inst_28483 = (state_28496[(9)]);
var inst_28486 = cljs.core.deref.call(null,inst_28483);
var state_28496__$1 = state_28496;
var statearr_28511_28528 = state_28496__$1;
(statearr_28511_28528[(2)] = inst_28486);

(statearr_28511_28528[(1)] = (10));


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
});})(c__27738__auto__))
;
return ((function (switch__27626__auto__,c__27738__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27627__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27627__auto____0 = (function (){
var statearr_28515 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28515[(0)] = cljs$core$async$reduce_$_state_machine__27627__auto__);

(statearr_28515[(1)] = (1));

return statearr_28515;
});
var cljs$core$async$reduce_$_state_machine__27627__auto____1 = (function (state_28496){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28516){if((e28516 instanceof Object)){
var ex__27630__auto__ = e28516;
var statearr_28517_28529 = state_28496;
(statearr_28517_28529[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28530 = state_28496;
state_28496 = G__28530;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27627__auto__ = function(state_28496){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27627__auto____1.call(this,state_28496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27627__auto____0;
cljs$core$async$reduce_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27627__auto____1;
return cljs$core$async$reduce_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__))
})();
var state__27740__auto__ = (function (){var statearr_28518 = f__27739__auto__.call(null);
(statearr_28518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_28518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__))
);

return c__27738__auto__;
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
var args28531 = [];
var len__22734__auto___28583 = arguments.length;
var i__22735__auto___28584 = (0);
while(true){
if((i__22735__auto___28584 < len__22734__auto___28583)){
args28531.push((arguments[i__22735__auto___28584]));

var G__28585 = (i__22735__auto___28584 + (1));
i__22735__auto___28584 = G__28585;
continue;
} else {
}
break;
}

var G__28533 = args28531.length;
switch (G__28533) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28531.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__){
return (function (state_28558){
var state_val_28559 = (state_28558[(1)]);
if((state_val_28559 === (7))){
var inst_28540 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28560_28587 = state_28558__$1;
(statearr_28560_28587[(2)] = inst_28540);

(statearr_28560_28587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (1))){
var inst_28534 = cljs.core.seq.call(null,coll);
var inst_28535 = inst_28534;
var state_28558__$1 = (function (){var statearr_28561 = state_28558;
(statearr_28561[(7)] = inst_28535);

return statearr_28561;
})();
var statearr_28562_28588 = state_28558__$1;
(statearr_28562_28588[(2)] = null);

(statearr_28562_28588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (4))){
var inst_28535 = (state_28558[(7)]);
var inst_28538 = cljs.core.first.call(null,inst_28535);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28558__$1,(7),ch,inst_28538);
} else {
if((state_val_28559 === (13))){
var inst_28552 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28563_28589 = state_28558__$1;
(statearr_28563_28589[(2)] = inst_28552);

(statearr_28563_28589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (6))){
var inst_28543 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
if(cljs.core.truth_(inst_28543)){
var statearr_28564_28590 = state_28558__$1;
(statearr_28564_28590[(1)] = (8));

} else {
var statearr_28565_28591 = state_28558__$1;
(statearr_28565_28591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (3))){
var inst_28556 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28558__$1,inst_28556);
} else {
if((state_val_28559 === (12))){
var state_28558__$1 = state_28558;
var statearr_28566_28592 = state_28558__$1;
(statearr_28566_28592[(2)] = null);

(statearr_28566_28592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (2))){
var inst_28535 = (state_28558[(7)]);
var state_28558__$1 = state_28558;
if(cljs.core.truth_(inst_28535)){
var statearr_28567_28593 = state_28558__$1;
(statearr_28567_28593[(1)] = (4));

} else {
var statearr_28568_28594 = state_28558__$1;
(statearr_28568_28594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (11))){
var inst_28549 = cljs.core.async.close_BANG_.call(null,ch);
var state_28558__$1 = state_28558;
var statearr_28569_28595 = state_28558__$1;
(statearr_28569_28595[(2)] = inst_28549);

(statearr_28569_28595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (9))){
var state_28558__$1 = state_28558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28570_28596 = state_28558__$1;
(statearr_28570_28596[(1)] = (11));

} else {
var statearr_28571_28597 = state_28558__$1;
(statearr_28571_28597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (5))){
var inst_28535 = (state_28558[(7)]);
var state_28558__$1 = state_28558;
var statearr_28572_28598 = state_28558__$1;
(statearr_28572_28598[(2)] = inst_28535);

(statearr_28572_28598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (10))){
var inst_28554 = (state_28558[(2)]);
var state_28558__$1 = state_28558;
var statearr_28573_28599 = state_28558__$1;
(statearr_28573_28599[(2)] = inst_28554);

(statearr_28573_28599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28559 === (8))){
var inst_28535 = (state_28558[(7)]);
var inst_28545 = cljs.core.next.call(null,inst_28535);
var inst_28535__$1 = inst_28545;
var state_28558__$1 = (function (){var statearr_28574 = state_28558;
(statearr_28574[(7)] = inst_28535__$1);

return statearr_28574;
})();
var statearr_28575_28600 = state_28558__$1;
(statearr_28575_28600[(2)] = null);

(statearr_28575_28600[(1)] = (2));


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
});})(c__27738__auto__))
;
return ((function (switch__27626__auto__,c__27738__auto__){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_28579 = [null,null,null,null,null,null,null,null];
(statearr_28579[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_28579[(1)] = (1));

return statearr_28579;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_28558){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e28580){if((e28580 instanceof Object)){
var ex__27630__auto__ = e28580;
var statearr_28581_28601 = state_28558;
(statearr_28581_28601[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28602 = state_28558;
state_28558 = G__28602;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_28558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_28558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__))
})();
var state__27740__auto__ = (function (){var statearr_28582 = f__27739__auto__.call(null);
(statearr_28582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_28582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__))
);

return c__27738__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28824 = (function (mult,ch,cs,meta28825){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28825 = meta28825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28826,meta28825__$1){
var self__ = this;
var _28826__$1 = this;
return (new cljs.core.async.t_cljs$core$async28824(self__.mult,self__.ch,self__.cs,meta28825__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28826){
var self__ = this;
var _28826__$1 = this;
return self__.meta28825;
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28825","meta28825",-1790003996,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28824";

cljs.core.async.t_cljs$core$async28824.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async28824");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28824 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28824(mult__$1,ch__$1,cs__$1,meta28825){
return (new cljs.core.async.t_cljs$core$async28824(mult__$1,ch__$1,cs__$1,meta28825));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28824(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27738__auto___29045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29045,cs,m,dchan,dctr,done){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29045,cs,m,dchan,dctr,done){
return (function (state_28957){
var state_val_28958 = (state_28957[(1)]);
if((state_val_28958 === (7))){
var inst_28953 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28959_29046 = state_28957__$1;
(statearr_28959_29046[(2)] = inst_28953);

(statearr_28959_29046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (20))){
var inst_28858 = (state_28957[(7)]);
var inst_28868 = cljs.core.first.call(null,inst_28858);
var inst_28869 = cljs.core.nth.call(null,inst_28868,(0),null);
var inst_28870 = cljs.core.nth.call(null,inst_28868,(1),null);
var state_28957__$1 = (function (){var statearr_28960 = state_28957;
(statearr_28960[(8)] = inst_28869);

return statearr_28960;
})();
if(cljs.core.truth_(inst_28870)){
var statearr_28961_29047 = state_28957__$1;
(statearr_28961_29047[(1)] = (22));

} else {
var statearr_28962_29048 = state_28957__$1;
(statearr_28962_29048[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (27))){
var inst_28900 = (state_28957[(9)]);
var inst_28905 = (state_28957[(10)]);
var inst_28898 = (state_28957[(11)]);
var inst_28829 = (state_28957[(12)]);
var inst_28905__$1 = cljs.core._nth.call(null,inst_28898,inst_28900);
var inst_28906 = cljs.core.async.put_BANG_.call(null,inst_28905__$1,inst_28829,done);
var state_28957__$1 = (function (){var statearr_28963 = state_28957;
(statearr_28963[(10)] = inst_28905__$1);

return statearr_28963;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28964_29049 = state_28957__$1;
(statearr_28964_29049[(1)] = (30));

} else {
var statearr_28965_29050 = state_28957__$1;
(statearr_28965_29050[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (1))){
var state_28957__$1 = state_28957;
var statearr_28966_29051 = state_28957__$1;
(statearr_28966_29051[(2)] = null);

(statearr_28966_29051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (24))){
var inst_28858 = (state_28957[(7)]);
var inst_28875 = (state_28957[(2)]);
var inst_28876 = cljs.core.next.call(null,inst_28858);
var inst_28838 = inst_28876;
var inst_28839 = null;
var inst_28840 = (0);
var inst_28841 = (0);
var state_28957__$1 = (function (){var statearr_28967 = state_28957;
(statearr_28967[(13)] = inst_28839);

(statearr_28967[(14)] = inst_28838);

(statearr_28967[(15)] = inst_28840);

(statearr_28967[(16)] = inst_28841);

(statearr_28967[(17)] = inst_28875);

return statearr_28967;
})();
var statearr_28968_29052 = state_28957__$1;
(statearr_28968_29052[(2)] = null);

(statearr_28968_29052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (39))){
var state_28957__$1 = state_28957;
var statearr_28972_29053 = state_28957__$1;
(statearr_28972_29053[(2)] = null);

(statearr_28972_29053[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (4))){
var inst_28829 = (state_28957[(12)]);
var inst_28829__$1 = (state_28957[(2)]);
var inst_28830 = (inst_28829__$1 == null);
var state_28957__$1 = (function (){var statearr_28973 = state_28957;
(statearr_28973[(12)] = inst_28829__$1);

return statearr_28973;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28974_29054 = state_28957__$1;
(statearr_28974_29054[(1)] = (5));

} else {
var statearr_28975_29055 = state_28957__$1;
(statearr_28975_29055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (15))){
var inst_28839 = (state_28957[(13)]);
var inst_28838 = (state_28957[(14)]);
var inst_28840 = (state_28957[(15)]);
var inst_28841 = (state_28957[(16)]);
var inst_28854 = (state_28957[(2)]);
var inst_28855 = (inst_28841 + (1));
var tmp28969 = inst_28839;
var tmp28970 = inst_28838;
var tmp28971 = inst_28840;
var inst_28838__$1 = tmp28970;
var inst_28839__$1 = tmp28969;
var inst_28840__$1 = tmp28971;
var inst_28841__$1 = inst_28855;
var state_28957__$1 = (function (){var statearr_28976 = state_28957;
(statearr_28976[(18)] = inst_28854);

(statearr_28976[(13)] = inst_28839__$1);

(statearr_28976[(14)] = inst_28838__$1);

(statearr_28976[(15)] = inst_28840__$1);

(statearr_28976[(16)] = inst_28841__$1);

return statearr_28976;
})();
var statearr_28977_29056 = state_28957__$1;
(statearr_28977_29056[(2)] = null);

(statearr_28977_29056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (21))){
var inst_28879 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28981_29057 = state_28957__$1;
(statearr_28981_29057[(2)] = inst_28879);

(statearr_28981_29057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (31))){
var inst_28905 = (state_28957[(10)]);
var inst_28909 = done.call(null,null);
var inst_28910 = cljs.core.async.untap_STAR_.call(null,m,inst_28905);
var state_28957__$1 = (function (){var statearr_28982 = state_28957;
(statearr_28982[(19)] = inst_28909);

return statearr_28982;
})();
var statearr_28983_29058 = state_28957__$1;
(statearr_28983_29058[(2)] = inst_28910);

(statearr_28983_29058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (32))){
var inst_28897 = (state_28957[(20)]);
var inst_28900 = (state_28957[(9)]);
var inst_28898 = (state_28957[(11)]);
var inst_28899 = (state_28957[(21)]);
var inst_28912 = (state_28957[(2)]);
var inst_28913 = (inst_28900 + (1));
var tmp28978 = inst_28897;
var tmp28979 = inst_28898;
var tmp28980 = inst_28899;
var inst_28897__$1 = tmp28978;
var inst_28898__$1 = tmp28979;
var inst_28899__$1 = tmp28980;
var inst_28900__$1 = inst_28913;
var state_28957__$1 = (function (){var statearr_28984 = state_28957;
(statearr_28984[(20)] = inst_28897__$1);

(statearr_28984[(9)] = inst_28900__$1);

(statearr_28984[(11)] = inst_28898__$1);

(statearr_28984[(22)] = inst_28912);

(statearr_28984[(21)] = inst_28899__$1);

return statearr_28984;
})();
var statearr_28985_29059 = state_28957__$1;
(statearr_28985_29059[(2)] = null);

(statearr_28985_29059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (40))){
var inst_28925 = (state_28957[(23)]);
var inst_28929 = done.call(null,null);
var inst_28930 = cljs.core.async.untap_STAR_.call(null,m,inst_28925);
var state_28957__$1 = (function (){var statearr_28986 = state_28957;
(statearr_28986[(24)] = inst_28929);

return statearr_28986;
})();
var statearr_28987_29060 = state_28957__$1;
(statearr_28987_29060[(2)] = inst_28930);

(statearr_28987_29060[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (33))){
var inst_28916 = (state_28957[(25)]);
var inst_28918 = cljs.core.chunked_seq_QMARK_.call(null,inst_28916);
var state_28957__$1 = state_28957;
if(inst_28918){
var statearr_28988_29061 = state_28957__$1;
(statearr_28988_29061[(1)] = (36));

} else {
var statearr_28989_29062 = state_28957__$1;
(statearr_28989_29062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (13))){
var inst_28848 = (state_28957[(26)]);
var inst_28851 = cljs.core.async.close_BANG_.call(null,inst_28848);
var state_28957__$1 = state_28957;
var statearr_28990_29063 = state_28957__$1;
(statearr_28990_29063[(2)] = inst_28851);

(statearr_28990_29063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (22))){
var inst_28869 = (state_28957[(8)]);
var inst_28872 = cljs.core.async.close_BANG_.call(null,inst_28869);
var state_28957__$1 = state_28957;
var statearr_28991_29064 = state_28957__$1;
(statearr_28991_29064[(2)] = inst_28872);

(statearr_28991_29064[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (36))){
var inst_28916 = (state_28957[(25)]);
var inst_28920 = cljs.core.chunk_first.call(null,inst_28916);
var inst_28921 = cljs.core.chunk_rest.call(null,inst_28916);
var inst_28922 = cljs.core.count.call(null,inst_28920);
var inst_28897 = inst_28921;
var inst_28898 = inst_28920;
var inst_28899 = inst_28922;
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_28992 = state_28957;
(statearr_28992[(20)] = inst_28897);

(statearr_28992[(9)] = inst_28900);

(statearr_28992[(11)] = inst_28898);

(statearr_28992[(21)] = inst_28899);

return statearr_28992;
})();
var statearr_28993_29065 = state_28957__$1;
(statearr_28993_29065[(2)] = null);

(statearr_28993_29065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (41))){
var inst_28916 = (state_28957[(25)]);
var inst_28932 = (state_28957[(2)]);
var inst_28933 = cljs.core.next.call(null,inst_28916);
var inst_28897 = inst_28933;
var inst_28898 = null;
var inst_28899 = (0);
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_28994 = state_28957;
(statearr_28994[(20)] = inst_28897);

(statearr_28994[(9)] = inst_28900);

(statearr_28994[(11)] = inst_28898);

(statearr_28994[(27)] = inst_28932);

(statearr_28994[(21)] = inst_28899);

return statearr_28994;
})();
var statearr_28995_29066 = state_28957__$1;
(statearr_28995_29066[(2)] = null);

(statearr_28995_29066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (43))){
var state_28957__$1 = state_28957;
var statearr_28996_29067 = state_28957__$1;
(statearr_28996_29067[(2)] = null);

(statearr_28996_29067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (29))){
var inst_28941 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_28997_29068 = state_28957__$1;
(statearr_28997_29068[(2)] = inst_28941);

(statearr_28997_29068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (44))){
var inst_28950 = (state_28957[(2)]);
var state_28957__$1 = (function (){var statearr_28998 = state_28957;
(statearr_28998[(28)] = inst_28950);

return statearr_28998;
})();
var statearr_28999_29069 = state_28957__$1;
(statearr_28999_29069[(2)] = null);

(statearr_28999_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (6))){
var inst_28889 = (state_28957[(29)]);
var inst_28888 = cljs.core.deref.call(null,cs);
var inst_28889__$1 = cljs.core.keys.call(null,inst_28888);
var inst_28890 = cljs.core.count.call(null,inst_28889__$1);
var inst_28891 = cljs.core.reset_BANG_.call(null,dctr,inst_28890);
var inst_28896 = cljs.core.seq.call(null,inst_28889__$1);
var inst_28897 = inst_28896;
var inst_28898 = null;
var inst_28899 = (0);
var inst_28900 = (0);
var state_28957__$1 = (function (){var statearr_29000 = state_28957;
(statearr_29000[(20)] = inst_28897);

(statearr_29000[(9)] = inst_28900);

(statearr_29000[(29)] = inst_28889__$1);

(statearr_29000[(11)] = inst_28898);

(statearr_29000[(30)] = inst_28891);

(statearr_29000[(21)] = inst_28899);

return statearr_29000;
})();
var statearr_29001_29070 = state_28957__$1;
(statearr_29001_29070[(2)] = null);

(statearr_29001_29070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (28))){
var inst_28897 = (state_28957[(20)]);
var inst_28916 = (state_28957[(25)]);
var inst_28916__$1 = cljs.core.seq.call(null,inst_28897);
var state_28957__$1 = (function (){var statearr_29002 = state_28957;
(statearr_29002[(25)] = inst_28916__$1);

return statearr_29002;
})();
if(inst_28916__$1){
var statearr_29003_29071 = state_28957__$1;
(statearr_29003_29071[(1)] = (33));

} else {
var statearr_29004_29072 = state_28957__$1;
(statearr_29004_29072[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (25))){
var inst_28900 = (state_28957[(9)]);
var inst_28899 = (state_28957[(21)]);
var inst_28902 = (inst_28900 < inst_28899);
var inst_28903 = inst_28902;
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28903)){
var statearr_29005_29073 = state_28957__$1;
(statearr_29005_29073[(1)] = (27));

} else {
var statearr_29006_29074 = state_28957__$1;
(statearr_29006_29074[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (34))){
var state_28957__$1 = state_28957;
var statearr_29007_29075 = state_28957__$1;
(statearr_29007_29075[(2)] = null);

(statearr_29007_29075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (17))){
var state_28957__$1 = state_28957;
var statearr_29008_29076 = state_28957__$1;
(statearr_29008_29076[(2)] = null);

(statearr_29008_29076[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (3))){
var inst_28955 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28957__$1,inst_28955);
} else {
if((state_val_28958 === (12))){
var inst_28884 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29009_29077 = state_28957__$1;
(statearr_29009_29077[(2)] = inst_28884);

(statearr_29009_29077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (2))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(4),ch);
} else {
if((state_val_28958 === (23))){
var state_28957__$1 = state_28957;
var statearr_29010_29078 = state_28957__$1;
(statearr_29010_29078[(2)] = null);

(statearr_29010_29078[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (35))){
var inst_28939 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29011_29079 = state_28957__$1;
(statearr_29011_29079[(2)] = inst_28939);

(statearr_29011_29079[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (19))){
var inst_28858 = (state_28957[(7)]);
var inst_28862 = cljs.core.chunk_first.call(null,inst_28858);
var inst_28863 = cljs.core.chunk_rest.call(null,inst_28858);
var inst_28864 = cljs.core.count.call(null,inst_28862);
var inst_28838 = inst_28863;
var inst_28839 = inst_28862;
var inst_28840 = inst_28864;
var inst_28841 = (0);
var state_28957__$1 = (function (){var statearr_29012 = state_28957;
(statearr_29012[(13)] = inst_28839);

(statearr_29012[(14)] = inst_28838);

(statearr_29012[(15)] = inst_28840);

(statearr_29012[(16)] = inst_28841);

return statearr_29012;
})();
var statearr_29013_29080 = state_28957__$1;
(statearr_29013_29080[(2)] = null);

(statearr_29013_29080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (11))){
var inst_28838 = (state_28957[(14)]);
var inst_28858 = (state_28957[(7)]);
var inst_28858__$1 = cljs.core.seq.call(null,inst_28838);
var state_28957__$1 = (function (){var statearr_29014 = state_28957;
(statearr_29014[(7)] = inst_28858__$1);

return statearr_29014;
})();
if(inst_28858__$1){
var statearr_29015_29081 = state_28957__$1;
(statearr_29015_29081[(1)] = (16));

} else {
var statearr_29016_29082 = state_28957__$1;
(statearr_29016_29082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (9))){
var inst_28886 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29017_29083 = state_28957__$1;
(statearr_29017_29083[(2)] = inst_28886);

(statearr_29017_29083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (5))){
var inst_28836 = cljs.core.deref.call(null,cs);
var inst_28837 = cljs.core.seq.call(null,inst_28836);
var inst_28838 = inst_28837;
var inst_28839 = null;
var inst_28840 = (0);
var inst_28841 = (0);
var state_28957__$1 = (function (){var statearr_29018 = state_28957;
(statearr_29018[(13)] = inst_28839);

(statearr_29018[(14)] = inst_28838);

(statearr_29018[(15)] = inst_28840);

(statearr_29018[(16)] = inst_28841);

return statearr_29018;
})();
var statearr_29019_29084 = state_28957__$1;
(statearr_29019_29084[(2)] = null);

(statearr_29019_29084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (14))){
var state_28957__$1 = state_28957;
var statearr_29020_29085 = state_28957__$1;
(statearr_29020_29085[(2)] = null);

(statearr_29020_29085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (45))){
var inst_28947 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29021_29086 = state_28957__$1;
(statearr_29021_29086[(2)] = inst_28947);

(statearr_29021_29086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (26))){
var inst_28889 = (state_28957[(29)]);
var inst_28943 = (state_28957[(2)]);
var inst_28944 = cljs.core.seq.call(null,inst_28889);
var state_28957__$1 = (function (){var statearr_29022 = state_28957;
(statearr_29022[(31)] = inst_28943);

return statearr_29022;
})();
if(inst_28944){
var statearr_29023_29087 = state_28957__$1;
(statearr_29023_29087[(1)] = (42));

} else {
var statearr_29024_29088 = state_28957__$1;
(statearr_29024_29088[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (16))){
var inst_28858 = (state_28957[(7)]);
var inst_28860 = cljs.core.chunked_seq_QMARK_.call(null,inst_28858);
var state_28957__$1 = state_28957;
if(inst_28860){
var statearr_29025_29089 = state_28957__$1;
(statearr_29025_29089[(1)] = (19));

} else {
var statearr_29026_29090 = state_28957__$1;
(statearr_29026_29090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (38))){
var inst_28936 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29027_29091 = state_28957__$1;
(statearr_29027_29091[(2)] = inst_28936);

(statearr_29027_29091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (30))){
var state_28957__$1 = state_28957;
var statearr_29028_29092 = state_28957__$1;
(statearr_29028_29092[(2)] = null);

(statearr_29028_29092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (10))){
var inst_28839 = (state_28957[(13)]);
var inst_28841 = (state_28957[(16)]);
var inst_28847 = cljs.core._nth.call(null,inst_28839,inst_28841);
var inst_28848 = cljs.core.nth.call(null,inst_28847,(0),null);
var inst_28849 = cljs.core.nth.call(null,inst_28847,(1),null);
var state_28957__$1 = (function (){var statearr_29029 = state_28957;
(statearr_29029[(26)] = inst_28848);

return statearr_29029;
})();
if(cljs.core.truth_(inst_28849)){
var statearr_29030_29093 = state_28957__$1;
(statearr_29030_29093[(1)] = (13));

} else {
var statearr_29031_29094 = state_28957__$1;
(statearr_29031_29094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (18))){
var inst_28882 = (state_28957[(2)]);
var state_28957__$1 = state_28957;
var statearr_29032_29095 = state_28957__$1;
(statearr_29032_29095[(2)] = inst_28882);

(statearr_29032_29095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (42))){
var state_28957__$1 = state_28957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28957__$1,(45),dchan);
} else {
if((state_val_28958 === (37))){
var inst_28925 = (state_28957[(23)]);
var inst_28829 = (state_28957[(12)]);
var inst_28916 = (state_28957[(25)]);
var inst_28925__$1 = cljs.core.first.call(null,inst_28916);
var inst_28926 = cljs.core.async.put_BANG_.call(null,inst_28925__$1,inst_28829,done);
var state_28957__$1 = (function (){var statearr_29033 = state_28957;
(statearr_29033[(23)] = inst_28925__$1);

return statearr_29033;
})();
if(cljs.core.truth_(inst_28926)){
var statearr_29034_29096 = state_28957__$1;
(statearr_29034_29096[(1)] = (39));

} else {
var statearr_29035_29097 = state_28957__$1;
(statearr_29035_29097[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28958 === (8))){
var inst_28840 = (state_28957[(15)]);
var inst_28841 = (state_28957[(16)]);
var inst_28843 = (inst_28841 < inst_28840);
var inst_28844 = inst_28843;
var state_28957__$1 = state_28957;
if(cljs.core.truth_(inst_28844)){
var statearr_29036_29098 = state_28957__$1;
(statearr_29036_29098[(1)] = (10));

} else {
var statearr_29037_29099 = state_28957__$1;
(statearr_29037_29099[(1)] = (11));

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
});})(c__27738__auto___29045,cs,m,dchan,dctr,done))
;
return ((function (switch__27626__auto__,c__27738__auto___29045,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27627__auto__ = null;
var cljs$core$async$mult_$_state_machine__27627__auto____0 = (function (){
var statearr_29041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29041[(0)] = cljs$core$async$mult_$_state_machine__27627__auto__);

(statearr_29041[(1)] = (1));

return statearr_29041;
});
var cljs$core$async$mult_$_state_machine__27627__auto____1 = (function (state_28957){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_28957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29042){if((e29042 instanceof Object)){
var ex__27630__auto__ = e29042;
var statearr_29043_29100 = state_28957;
(statearr_29043_29100[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29101 = state_28957;
state_28957 = G__29101;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27627__auto__ = function(state_28957){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27627__auto____1.call(this,state_28957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27627__auto____0;
cljs$core$async$mult_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27627__auto____1;
return cljs$core$async$mult_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29045,cs,m,dchan,dctr,done))
})();
var state__27740__auto__ = (function (){var statearr_29044 = f__27739__auto__.call(null);
(statearr_29044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29045);

return statearr_29044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29045,cs,m,dchan,dctr,done))
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
var args29102 = [];
var len__22734__auto___29105 = arguments.length;
var i__22735__auto___29106 = (0);
while(true){
if((i__22735__auto___29106 < len__22734__auto___29105)){
args29102.push((arguments[i__22735__auto___29106]));

var G__29107 = (i__22735__auto___29106 + (1));
i__22735__auto___29106 = G__29107;
continue;
} else {
}
break;
}

var G__29104 = args29102.length;
switch (G__29104) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29102.length)].join('')));

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
var len__22734__auto___29119 = arguments.length;
var i__22735__auto___29120 = (0);
while(true){
if((i__22735__auto___29120 < len__22734__auto___29119)){
args__22741__auto__.push((arguments[i__22735__auto___29120]));

var G__29121 = (i__22735__auto___29120 + (1));
i__22735__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((3) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22742__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29113){
var map__29114 = p__29113;
var map__29114__$1 = ((((!((map__29114 == null)))?((((map__29114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29114):map__29114);
var opts = map__29114__$1;
var statearr_29116_29122 = state;
(statearr_29116_29122[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29114,map__29114__$1,opts){
return (function (val){
var statearr_29117_29123 = state;
(statearr_29117_29123[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29114,map__29114__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29118_29124 = state;
(statearr_29118_29124[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29109){
var G__29110 = cljs.core.first.call(null,seq29109);
var seq29109__$1 = cljs.core.next.call(null,seq29109);
var G__29111 = cljs.core.first.call(null,seq29109__$1);
var seq29109__$2 = cljs.core.next.call(null,seq29109__$1);
var G__29112 = cljs.core.first.call(null,seq29109__$2);
var seq29109__$3 = cljs.core.next.call(null,seq29109__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29110,G__29111,G__29112,seq29109__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29288 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29289){
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
this.meta29289 = meta29289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29290,meta29289__$1){
var self__ = this;
var _29290__$1 = this;
return (new cljs.core.async.t_cljs$core$async29288(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29289__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29290){
var self__ = this;
var _29290__$1 = this;
return self__.meta29289;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29288.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29289","meta29289",-903896462,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29288";

cljs.core.async.t_cljs$core$async29288.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29288");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29288 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29288(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29289){
return (new cljs.core.async.t_cljs$core$async29288(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29289));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29288(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27738__auto___29451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29388){
var state_val_29389 = (state_29388[(1)]);
if((state_val_29389 === (7))){
var inst_29306 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29390_29452 = state_29388__$1;
(statearr_29390_29452[(2)] = inst_29306);

(statearr_29390_29452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (20))){
var inst_29318 = (state_29388[(7)]);
var state_29388__$1 = state_29388;
var statearr_29391_29453 = state_29388__$1;
(statearr_29391_29453[(2)] = inst_29318);

(statearr_29391_29453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (27))){
var state_29388__$1 = state_29388;
var statearr_29392_29454 = state_29388__$1;
(statearr_29392_29454[(2)] = null);

(statearr_29392_29454[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (1))){
var inst_29294 = (state_29388[(8)]);
var inst_29294__$1 = calc_state.call(null);
var inst_29296 = (inst_29294__$1 == null);
var inst_29297 = cljs.core.not.call(null,inst_29296);
var state_29388__$1 = (function (){var statearr_29393 = state_29388;
(statearr_29393[(8)] = inst_29294__$1);

return statearr_29393;
})();
if(inst_29297){
var statearr_29394_29455 = state_29388__$1;
(statearr_29394_29455[(1)] = (2));

} else {
var statearr_29395_29456 = state_29388__$1;
(statearr_29395_29456[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (24))){
var inst_29348 = (state_29388[(9)]);
var inst_29341 = (state_29388[(10)]);
var inst_29362 = (state_29388[(11)]);
var inst_29362__$1 = inst_29341.call(null,inst_29348);
var state_29388__$1 = (function (){var statearr_29396 = state_29388;
(statearr_29396[(11)] = inst_29362__$1);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29362__$1)){
var statearr_29397_29457 = state_29388__$1;
(statearr_29397_29457[(1)] = (29));

} else {
var statearr_29398_29458 = state_29388__$1;
(statearr_29398_29458[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (4))){
var inst_29309 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29309)){
var statearr_29399_29459 = state_29388__$1;
(statearr_29399_29459[(1)] = (8));

} else {
var statearr_29400_29460 = state_29388__$1;
(statearr_29400_29460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (15))){
var inst_29335 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29335)){
var statearr_29401_29461 = state_29388__$1;
(statearr_29401_29461[(1)] = (19));

} else {
var statearr_29402_29462 = state_29388__$1;
(statearr_29402_29462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (21))){
var inst_29340 = (state_29388[(12)]);
var inst_29340__$1 = (state_29388[(2)]);
var inst_29341 = cljs.core.get.call(null,inst_29340__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29342 = cljs.core.get.call(null,inst_29340__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29343 = cljs.core.get.call(null,inst_29340__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29388__$1 = (function (){var statearr_29403 = state_29388;
(statearr_29403[(12)] = inst_29340__$1);

(statearr_29403[(10)] = inst_29341);

(statearr_29403[(13)] = inst_29342);

return statearr_29403;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29388__$1,(22),inst_29343);
} else {
if((state_val_29389 === (31))){
var inst_29370 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29370)){
var statearr_29404_29463 = state_29388__$1;
(statearr_29404_29463[(1)] = (32));

} else {
var statearr_29405_29464 = state_29388__$1;
(statearr_29405_29464[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (32))){
var inst_29347 = (state_29388[(14)]);
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29388__$1,(35),out,inst_29347);
} else {
if((state_val_29389 === (33))){
var inst_29340 = (state_29388[(12)]);
var inst_29318 = inst_29340;
var state_29388__$1 = (function (){var statearr_29406 = state_29388;
(statearr_29406[(7)] = inst_29318);

return statearr_29406;
})();
var statearr_29407_29465 = state_29388__$1;
(statearr_29407_29465[(2)] = null);

(statearr_29407_29465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (13))){
var inst_29318 = (state_29388[(7)]);
var inst_29325 = inst_29318.cljs$lang$protocol_mask$partition0$;
var inst_29326 = (inst_29325 & (64));
var inst_29327 = inst_29318.cljs$core$ISeq$;
var inst_29328 = (inst_29326) || (inst_29327);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29328)){
var statearr_29408_29466 = state_29388__$1;
(statearr_29408_29466[(1)] = (16));

} else {
var statearr_29409_29467 = state_29388__$1;
(statearr_29409_29467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (22))){
var inst_29348 = (state_29388[(9)]);
var inst_29347 = (state_29388[(14)]);
var inst_29346 = (state_29388[(2)]);
var inst_29347__$1 = cljs.core.nth.call(null,inst_29346,(0),null);
var inst_29348__$1 = cljs.core.nth.call(null,inst_29346,(1),null);
var inst_29349 = (inst_29347__$1 == null);
var inst_29350 = cljs.core._EQ_.call(null,inst_29348__$1,change);
var inst_29351 = (inst_29349) || (inst_29350);
var state_29388__$1 = (function (){var statearr_29410 = state_29388;
(statearr_29410[(9)] = inst_29348__$1);

(statearr_29410[(14)] = inst_29347__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29351)){
var statearr_29411_29468 = state_29388__$1;
(statearr_29411_29468[(1)] = (23));

} else {
var statearr_29412_29469 = state_29388__$1;
(statearr_29412_29469[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (36))){
var inst_29340 = (state_29388[(12)]);
var inst_29318 = inst_29340;
var state_29388__$1 = (function (){var statearr_29413 = state_29388;
(statearr_29413[(7)] = inst_29318);

return statearr_29413;
})();
var statearr_29414_29470 = state_29388__$1;
(statearr_29414_29470[(2)] = null);

(statearr_29414_29470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (29))){
var inst_29362 = (state_29388[(11)]);
var state_29388__$1 = state_29388;
var statearr_29415_29471 = state_29388__$1;
(statearr_29415_29471[(2)] = inst_29362);

(statearr_29415_29471[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (6))){
var state_29388__$1 = state_29388;
var statearr_29416_29472 = state_29388__$1;
(statearr_29416_29472[(2)] = false);

(statearr_29416_29472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (28))){
var inst_29358 = (state_29388[(2)]);
var inst_29359 = calc_state.call(null);
var inst_29318 = inst_29359;
var state_29388__$1 = (function (){var statearr_29417 = state_29388;
(statearr_29417[(7)] = inst_29318);

(statearr_29417[(15)] = inst_29358);

return statearr_29417;
})();
var statearr_29418_29473 = state_29388__$1;
(statearr_29418_29473[(2)] = null);

(statearr_29418_29473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (25))){
var inst_29384 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29419_29474 = state_29388__$1;
(statearr_29419_29474[(2)] = inst_29384);

(statearr_29419_29474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (34))){
var inst_29382 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29420_29475 = state_29388__$1;
(statearr_29420_29475[(2)] = inst_29382);

(statearr_29420_29475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (17))){
var state_29388__$1 = state_29388;
var statearr_29421_29476 = state_29388__$1;
(statearr_29421_29476[(2)] = false);

(statearr_29421_29476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (3))){
var state_29388__$1 = state_29388;
var statearr_29422_29477 = state_29388__$1;
(statearr_29422_29477[(2)] = false);

(statearr_29422_29477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (12))){
var inst_29386 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29388__$1,inst_29386);
} else {
if((state_val_29389 === (2))){
var inst_29294 = (state_29388[(8)]);
var inst_29299 = inst_29294.cljs$lang$protocol_mask$partition0$;
var inst_29300 = (inst_29299 & (64));
var inst_29301 = inst_29294.cljs$core$ISeq$;
var inst_29302 = (inst_29300) || (inst_29301);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29302)){
var statearr_29423_29478 = state_29388__$1;
(statearr_29423_29478[(1)] = (5));

} else {
var statearr_29424_29479 = state_29388__$1;
(statearr_29424_29479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (23))){
var inst_29347 = (state_29388[(14)]);
var inst_29353 = (inst_29347 == null);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29353)){
var statearr_29425_29480 = state_29388__$1;
(statearr_29425_29480[(1)] = (26));

} else {
var statearr_29426_29481 = state_29388__$1;
(statearr_29426_29481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (35))){
var inst_29373 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
if(cljs.core.truth_(inst_29373)){
var statearr_29427_29482 = state_29388__$1;
(statearr_29427_29482[(1)] = (36));

} else {
var statearr_29428_29483 = state_29388__$1;
(statearr_29428_29483[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (19))){
var inst_29318 = (state_29388[(7)]);
var inst_29337 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29318);
var state_29388__$1 = state_29388;
var statearr_29429_29484 = state_29388__$1;
(statearr_29429_29484[(2)] = inst_29337);

(statearr_29429_29484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (11))){
var inst_29318 = (state_29388[(7)]);
var inst_29322 = (inst_29318 == null);
var inst_29323 = cljs.core.not.call(null,inst_29322);
var state_29388__$1 = state_29388;
if(inst_29323){
var statearr_29430_29485 = state_29388__$1;
(statearr_29430_29485[(1)] = (13));

} else {
var statearr_29431_29486 = state_29388__$1;
(statearr_29431_29486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (9))){
var inst_29294 = (state_29388[(8)]);
var state_29388__$1 = state_29388;
var statearr_29432_29487 = state_29388__$1;
(statearr_29432_29487[(2)] = inst_29294);

(statearr_29432_29487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (5))){
var state_29388__$1 = state_29388;
var statearr_29433_29488 = state_29388__$1;
(statearr_29433_29488[(2)] = true);

(statearr_29433_29488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (14))){
var state_29388__$1 = state_29388;
var statearr_29434_29489 = state_29388__$1;
(statearr_29434_29489[(2)] = false);

(statearr_29434_29489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (26))){
var inst_29348 = (state_29388[(9)]);
var inst_29355 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29348);
var state_29388__$1 = state_29388;
var statearr_29435_29490 = state_29388__$1;
(statearr_29435_29490[(2)] = inst_29355);

(statearr_29435_29490[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (16))){
var state_29388__$1 = state_29388;
var statearr_29436_29491 = state_29388__$1;
(statearr_29436_29491[(2)] = true);

(statearr_29436_29491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (38))){
var inst_29378 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29437_29492 = state_29388__$1;
(statearr_29437_29492[(2)] = inst_29378);

(statearr_29437_29492[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (30))){
var inst_29348 = (state_29388[(9)]);
var inst_29341 = (state_29388[(10)]);
var inst_29342 = (state_29388[(13)]);
var inst_29365 = cljs.core.empty_QMARK_.call(null,inst_29341);
var inst_29366 = inst_29342.call(null,inst_29348);
var inst_29367 = cljs.core.not.call(null,inst_29366);
var inst_29368 = (inst_29365) && (inst_29367);
var state_29388__$1 = state_29388;
var statearr_29438_29493 = state_29388__$1;
(statearr_29438_29493[(2)] = inst_29368);

(statearr_29438_29493[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (10))){
var inst_29294 = (state_29388[(8)]);
var inst_29314 = (state_29388[(2)]);
var inst_29315 = cljs.core.get.call(null,inst_29314,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29316 = cljs.core.get.call(null,inst_29314,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29317 = cljs.core.get.call(null,inst_29314,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29318 = inst_29294;
var state_29388__$1 = (function (){var statearr_29439 = state_29388;
(statearr_29439[(7)] = inst_29318);

(statearr_29439[(16)] = inst_29315);

(statearr_29439[(17)] = inst_29316);

(statearr_29439[(18)] = inst_29317);

return statearr_29439;
})();
var statearr_29440_29494 = state_29388__$1;
(statearr_29440_29494[(2)] = null);

(statearr_29440_29494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (18))){
var inst_29332 = (state_29388[(2)]);
var state_29388__$1 = state_29388;
var statearr_29441_29495 = state_29388__$1;
(statearr_29441_29495[(2)] = inst_29332);

(statearr_29441_29495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (37))){
var state_29388__$1 = state_29388;
var statearr_29442_29496 = state_29388__$1;
(statearr_29442_29496[(2)] = null);

(statearr_29442_29496[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29389 === (8))){
var inst_29294 = (state_29388[(8)]);
var inst_29311 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29294);
var state_29388__$1 = state_29388;
var statearr_29443_29497 = state_29388__$1;
(statearr_29443_29497[(2)] = inst_29311);

(statearr_29443_29497[(1)] = (10));


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
});})(c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27626__auto__,c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27627__auto__ = null;
var cljs$core$async$mix_$_state_machine__27627__auto____0 = (function (){
var statearr_29447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29447[(0)] = cljs$core$async$mix_$_state_machine__27627__auto__);

(statearr_29447[(1)] = (1));

return statearr_29447;
});
var cljs$core$async$mix_$_state_machine__27627__auto____1 = (function (state_29388){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29448){if((e29448 instanceof Object)){
var ex__27630__auto__ = e29448;
var statearr_29449_29498 = state_29388;
(statearr_29449_29498[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29499 = state_29388;
state_29388 = G__29499;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27627__auto__ = function(state_29388){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27627__auto____1.call(this,state_29388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27627__auto____0;
cljs$core$async$mix_$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27627__auto____1;
return cljs$core$async$mix_$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27740__auto__ = (function (){var statearr_29450 = f__27739__auto__.call(null);
(statearr_29450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29451);

return statearr_29450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29451,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args29500 = [];
var len__22734__auto___29503 = arguments.length;
var i__22735__auto___29504 = (0);
while(true){
if((i__22735__auto___29504 < len__22734__auto___29503)){
args29500.push((arguments[i__22735__auto___29504]));

var G__29505 = (i__22735__auto___29504 + (1));
i__22735__auto___29504 = G__29505;
continue;
} else {
}
break;
}

var G__29502 = args29500.length;
switch (G__29502) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29500.length)].join('')));

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
var args29508 = [];
var len__22734__auto___29633 = arguments.length;
var i__22735__auto___29634 = (0);
while(true){
if((i__22735__auto___29634 < len__22734__auto___29633)){
args29508.push((arguments[i__22735__auto___29634]));

var G__29635 = (i__22735__auto___29634 + (1));
i__22735__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var G__29510 = args29508.length;
switch (G__29510) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29508.length)].join('')));

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
return (function (p1__29507_SHARP_){
if(cljs.core.truth_(p1__29507_SHARP_.call(null,topic))){
return p1__29507_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29507_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21676__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29511 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29512){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29512 = meta29512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29513,meta29512__$1){
var self__ = this;
var _29513__$1 = this;
return (new cljs.core.async.t_cljs$core$async29511(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29512__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29513){
var self__ = this;
var _29513__$1 = this;
return self__.meta29512;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29512","meta29512",-12857790,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29511";

cljs.core.async.t_cljs$core$async29511.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29511");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29511 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29512){
return (new cljs.core.async.t_cljs$core$async29511(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29512));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29511(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27738__auto___29637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29637,mults,ensure_mult,p){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29637,mults,ensure_mult,p){
return (function (state_29585){
var state_val_29586 = (state_29585[(1)]);
if((state_val_29586 === (7))){
var inst_29581 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29587_29638 = state_29585__$1;
(statearr_29587_29638[(2)] = inst_29581);

(statearr_29587_29638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (20))){
var state_29585__$1 = state_29585;
var statearr_29588_29639 = state_29585__$1;
(statearr_29588_29639[(2)] = null);

(statearr_29588_29639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (1))){
var state_29585__$1 = state_29585;
var statearr_29589_29640 = state_29585__$1;
(statearr_29589_29640[(2)] = null);

(statearr_29589_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (24))){
var inst_29564 = (state_29585[(7)]);
var inst_29573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29564);
var state_29585__$1 = state_29585;
var statearr_29590_29641 = state_29585__$1;
(statearr_29590_29641[(2)] = inst_29573);

(statearr_29590_29641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (4))){
var inst_29516 = (state_29585[(8)]);
var inst_29516__$1 = (state_29585[(2)]);
var inst_29517 = (inst_29516__$1 == null);
var state_29585__$1 = (function (){var statearr_29591 = state_29585;
(statearr_29591[(8)] = inst_29516__$1);

return statearr_29591;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29592_29642 = state_29585__$1;
(statearr_29592_29642[(1)] = (5));

} else {
var statearr_29593_29643 = state_29585__$1;
(statearr_29593_29643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (15))){
var inst_29558 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29594_29644 = state_29585__$1;
(statearr_29594_29644[(2)] = inst_29558);

(statearr_29594_29644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (21))){
var inst_29578 = (state_29585[(2)]);
var state_29585__$1 = (function (){var statearr_29595 = state_29585;
(statearr_29595[(9)] = inst_29578);

return statearr_29595;
})();
var statearr_29596_29645 = state_29585__$1;
(statearr_29596_29645[(2)] = null);

(statearr_29596_29645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (13))){
var inst_29540 = (state_29585[(10)]);
var inst_29542 = cljs.core.chunked_seq_QMARK_.call(null,inst_29540);
var state_29585__$1 = state_29585;
if(inst_29542){
var statearr_29597_29646 = state_29585__$1;
(statearr_29597_29646[(1)] = (16));

} else {
var statearr_29598_29647 = state_29585__$1;
(statearr_29598_29647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (22))){
var inst_29570 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
if(cljs.core.truth_(inst_29570)){
var statearr_29599_29648 = state_29585__$1;
(statearr_29599_29648[(1)] = (23));

} else {
var statearr_29600_29649 = state_29585__$1;
(statearr_29600_29649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (6))){
var inst_29564 = (state_29585[(7)]);
var inst_29566 = (state_29585[(11)]);
var inst_29516 = (state_29585[(8)]);
var inst_29564__$1 = topic_fn.call(null,inst_29516);
var inst_29565 = cljs.core.deref.call(null,mults);
var inst_29566__$1 = cljs.core.get.call(null,inst_29565,inst_29564__$1);
var state_29585__$1 = (function (){var statearr_29601 = state_29585;
(statearr_29601[(7)] = inst_29564__$1);

(statearr_29601[(11)] = inst_29566__$1);

return statearr_29601;
})();
if(cljs.core.truth_(inst_29566__$1)){
var statearr_29602_29650 = state_29585__$1;
(statearr_29602_29650[(1)] = (19));

} else {
var statearr_29603_29651 = state_29585__$1;
(statearr_29603_29651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (25))){
var inst_29575 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29604_29652 = state_29585__$1;
(statearr_29604_29652[(2)] = inst_29575);

(statearr_29604_29652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (17))){
var inst_29540 = (state_29585[(10)]);
var inst_29549 = cljs.core.first.call(null,inst_29540);
var inst_29550 = cljs.core.async.muxch_STAR_.call(null,inst_29549);
var inst_29551 = cljs.core.async.close_BANG_.call(null,inst_29550);
var inst_29552 = cljs.core.next.call(null,inst_29540);
var inst_29526 = inst_29552;
var inst_29527 = null;
var inst_29528 = (0);
var inst_29529 = (0);
var state_29585__$1 = (function (){var statearr_29605 = state_29585;
(statearr_29605[(12)] = inst_29528);

(statearr_29605[(13)] = inst_29529);

(statearr_29605[(14)] = inst_29551);

(statearr_29605[(15)] = inst_29527);

(statearr_29605[(16)] = inst_29526);

return statearr_29605;
})();
var statearr_29606_29653 = state_29585__$1;
(statearr_29606_29653[(2)] = null);

(statearr_29606_29653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (3))){
var inst_29583 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29585__$1,inst_29583);
} else {
if((state_val_29586 === (12))){
var inst_29560 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29607_29654 = state_29585__$1;
(statearr_29607_29654[(2)] = inst_29560);

(statearr_29607_29654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (2))){
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29585__$1,(4),ch);
} else {
if((state_val_29586 === (23))){
var state_29585__$1 = state_29585;
var statearr_29608_29655 = state_29585__$1;
(statearr_29608_29655[(2)] = null);

(statearr_29608_29655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (19))){
var inst_29566 = (state_29585[(11)]);
var inst_29516 = (state_29585[(8)]);
var inst_29568 = cljs.core.async.muxch_STAR_.call(null,inst_29566);
var state_29585__$1 = state_29585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29585__$1,(22),inst_29568,inst_29516);
} else {
if((state_val_29586 === (11))){
var inst_29526 = (state_29585[(16)]);
var inst_29540 = (state_29585[(10)]);
var inst_29540__$1 = cljs.core.seq.call(null,inst_29526);
var state_29585__$1 = (function (){var statearr_29609 = state_29585;
(statearr_29609[(10)] = inst_29540__$1);

return statearr_29609;
})();
if(inst_29540__$1){
var statearr_29610_29656 = state_29585__$1;
(statearr_29610_29656[(1)] = (13));

} else {
var statearr_29611_29657 = state_29585__$1;
(statearr_29611_29657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (9))){
var inst_29562 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29612_29658 = state_29585__$1;
(statearr_29612_29658[(2)] = inst_29562);

(statearr_29612_29658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (5))){
var inst_29523 = cljs.core.deref.call(null,mults);
var inst_29524 = cljs.core.vals.call(null,inst_29523);
var inst_29525 = cljs.core.seq.call(null,inst_29524);
var inst_29526 = inst_29525;
var inst_29527 = null;
var inst_29528 = (0);
var inst_29529 = (0);
var state_29585__$1 = (function (){var statearr_29613 = state_29585;
(statearr_29613[(12)] = inst_29528);

(statearr_29613[(13)] = inst_29529);

(statearr_29613[(15)] = inst_29527);

(statearr_29613[(16)] = inst_29526);

return statearr_29613;
})();
var statearr_29614_29659 = state_29585__$1;
(statearr_29614_29659[(2)] = null);

(statearr_29614_29659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (14))){
var state_29585__$1 = state_29585;
var statearr_29618_29660 = state_29585__$1;
(statearr_29618_29660[(2)] = null);

(statearr_29618_29660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (16))){
var inst_29540 = (state_29585[(10)]);
var inst_29544 = cljs.core.chunk_first.call(null,inst_29540);
var inst_29545 = cljs.core.chunk_rest.call(null,inst_29540);
var inst_29546 = cljs.core.count.call(null,inst_29544);
var inst_29526 = inst_29545;
var inst_29527 = inst_29544;
var inst_29528 = inst_29546;
var inst_29529 = (0);
var state_29585__$1 = (function (){var statearr_29619 = state_29585;
(statearr_29619[(12)] = inst_29528);

(statearr_29619[(13)] = inst_29529);

(statearr_29619[(15)] = inst_29527);

(statearr_29619[(16)] = inst_29526);

return statearr_29619;
})();
var statearr_29620_29661 = state_29585__$1;
(statearr_29620_29661[(2)] = null);

(statearr_29620_29661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (10))){
var inst_29528 = (state_29585[(12)]);
var inst_29529 = (state_29585[(13)]);
var inst_29527 = (state_29585[(15)]);
var inst_29526 = (state_29585[(16)]);
var inst_29534 = cljs.core._nth.call(null,inst_29527,inst_29529);
var inst_29535 = cljs.core.async.muxch_STAR_.call(null,inst_29534);
var inst_29536 = cljs.core.async.close_BANG_.call(null,inst_29535);
var inst_29537 = (inst_29529 + (1));
var tmp29615 = inst_29528;
var tmp29616 = inst_29527;
var tmp29617 = inst_29526;
var inst_29526__$1 = tmp29617;
var inst_29527__$1 = tmp29616;
var inst_29528__$1 = tmp29615;
var inst_29529__$1 = inst_29537;
var state_29585__$1 = (function (){var statearr_29621 = state_29585;
(statearr_29621[(12)] = inst_29528__$1);

(statearr_29621[(13)] = inst_29529__$1);

(statearr_29621[(15)] = inst_29527__$1);

(statearr_29621[(17)] = inst_29536);

(statearr_29621[(16)] = inst_29526__$1);

return statearr_29621;
})();
var statearr_29622_29662 = state_29585__$1;
(statearr_29622_29662[(2)] = null);

(statearr_29622_29662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (18))){
var inst_29555 = (state_29585[(2)]);
var state_29585__$1 = state_29585;
var statearr_29623_29663 = state_29585__$1;
(statearr_29623_29663[(2)] = inst_29555);

(statearr_29623_29663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29586 === (8))){
var inst_29528 = (state_29585[(12)]);
var inst_29529 = (state_29585[(13)]);
var inst_29531 = (inst_29529 < inst_29528);
var inst_29532 = inst_29531;
var state_29585__$1 = state_29585;
if(cljs.core.truth_(inst_29532)){
var statearr_29624_29664 = state_29585__$1;
(statearr_29624_29664[(1)] = (10));

} else {
var statearr_29625_29665 = state_29585__$1;
(statearr_29625_29665[(1)] = (11));

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
});})(c__27738__auto___29637,mults,ensure_mult,p))
;
return ((function (switch__27626__auto__,c__27738__auto___29637,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29585){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__27630__auto__ = e29630;
var statearr_29631_29666 = state_29585;
(statearr_29631_29666[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29667 = state_29585;
state_29585 = G__29667;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29637,mults,ensure_mult,p))
})();
var state__27740__auto__ = (function (){var statearr_29632 = f__27739__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29637);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29637,mults,ensure_mult,p))
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
var args29668 = [];
var len__22734__auto___29671 = arguments.length;
var i__22735__auto___29672 = (0);
while(true){
if((i__22735__auto___29672 < len__22734__auto___29671)){
args29668.push((arguments[i__22735__auto___29672]));

var G__29673 = (i__22735__auto___29672 + (1));
i__22735__auto___29672 = G__29673;
continue;
} else {
}
break;
}

var G__29670 = args29668.length;
switch (G__29670) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29668.length)].join('')));

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
var args29675 = [];
var len__22734__auto___29678 = arguments.length;
var i__22735__auto___29679 = (0);
while(true){
if((i__22735__auto___29679 < len__22734__auto___29678)){
args29675.push((arguments[i__22735__auto___29679]));

var G__29680 = (i__22735__auto___29679 + (1));
i__22735__auto___29679 = G__29680;
continue;
} else {
}
break;
}

var G__29677 = args29675.length;
switch (G__29677) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29675.length)].join('')));

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
var args29682 = [];
var len__22734__auto___29753 = arguments.length;
var i__22735__auto___29754 = (0);
while(true){
if((i__22735__auto___29754 < len__22734__auto___29753)){
args29682.push((arguments[i__22735__auto___29754]));

var G__29755 = (i__22735__auto___29754 + (1));
i__22735__auto___29754 = G__29755;
continue;
} else {
}
break;
}

var G__29684 = args29682.length;
switch (G__29684) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29682.length)].join('')));

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
var c__27738__auto___29757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29723){
var state_val_29724 = (state_29723[(1)]);
if((state_val_29724 === (7))){
var state_29723__$1 = state_29723;
var statearr_29725_29758 = state_29723__$1;
(statearr_29725_29758[(2)] = null);

(statearr_29725_29758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (1))){
var state_29723__$1 = state_29723;
var statearr_29726_29759 = state_29723__$1;
(statearr_29726_29759[(2)] = null);

(statearr_29726_29759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (4))){
var inst_29687 = (state_29723[(7)]);
var inst_29689 = (inst_29687 < cnt);
var state_29723__$1 = state_29723;
if(cljs.core.truth_(inst_29689)){
var statearr_29727_29760 = state_29723__$1;
(statearr_29727_29760[(1)] = (6));

} else {
var statearr_29728_29761 = state_29723__$1;
(statearr_29728_29761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (15))){
var inst_29719 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29729_29762 = state_29723__$1;
(statearr_29729_29762[(2)] = inst_29719);

(statearr_29729_29762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (13))){
var inst_29712 = cljs.core.async.close_BANG_.call(null,out);
var state_29723__$1 = state_29723;
var statearr_29730_29763 = state_29723__$1;
(statearr_29730_29763[(2)] = inst_29712);

(statearr_29730_29763[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (6))){
var state_29723__$1 = state_29723;
var statearr_29731_29764 = state_29723__$1;
(statearr_29731_29764[(2)] = null);

(statearr_29731_29764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (3))){
var inst_29721 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29723__$1,inst_29721);
} else {
if((state_val_29724 === (12))){
var inst_29709 = (state_29723[(8)]);
var inst_29709__$1 = (state_29723[(2)]);
var inst_29710 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29709__$1);
var state_29723__$1 = (function (){var statearr_29732 = state_29723;
(statearr_29732[(8)] = inst_29709__$1);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29710)){
var statearr_29733_29765 = state_29723__$1;
(statearr_29733_29765[(1)] = (13));

} else {
var statearr_29734_29766 = state_29723__$1;
(statearr_29734_29766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (2))){
var inst_29686 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29687 = (0);
var state_29723__$1 = (function (){var statearr_29735 = state_29723;
(statearr_29735[(7)] = inst_29687);

(statearr_29735[(9)] = inst_29686);

return statearr_29735;
})();
var statearr_29736_29767 = state_29723__$1;
(statearr_29736_29767[(2)] = null);

(statearr_29736_29767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (11))){
var inst_29687 = (state_29723[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29723,(10),Object,null,(9));
var inst_29696 = chs__$1.call(null,inst_29687);
var inst_29697 = done.call(null,inst_29687);
var inst_29698 = cljs.core.async.take_BANG_.call(null,inst_29696,inst_29697);
var state_29723__$1 = state_29723;
var statearr_29737_29768 = state_29723__$1;
(statearr_29737_29768[(2)] = inst_29698);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (9))){
var inst_29687 = (state_29723[(7)]);
var inst_29700 = (state_29723[(2)]);
var inst_29701 = (inst_29687 + (1));
var inst_29687__$1 = inst_29701;
var state_29723__$1 = (function (){var statearr_29738 = state_29723;
(statearr_29738[(7)] = inst_29687__$1);

(statearr_29738[(10)] = inst_29700);

return statearr_29738;
})();
var statearr_29739_29769 = state_29723__$1;
(statearr_29739_29769[(2)] = null);

(statearr_29739_29769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (5))){
var inst_29707 = (state_29723[(2)]);
var state_29723__$1 = (function (){var statearr_29740 = state_29723;
(statearr_29740[(11)] = inst_29707);

return statearr_29740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29723__$1,(12),dchan);
} else {
if((state_val_29724 === (14))){
var inst_29709 = (state_29723[(8)]);
var inst_29714 = cljs.core.apply.call(null,f,inst_29709);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29723__$1,(16),out,inst_29714);
} else {
if((state_val_29724 === (16))){
var inst_29716 = (state_29723[(2)]);
var state_29723__$1 = (function (){var statearr_29741 = state_29723;
(statearr_29741[(12)] = inst_29716);

return statearr_29741;
})();
var statearr_29742_29770 = state_29723__$1;
(statearr_29742_29770[(2)] = null);

(statearr_29742_29770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (10))){
var inst_29691 = (state_29723[(2)]);
var inst_29692 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29723__$1 = (function (){var statearr_29743 = state_29723;
(statearr_29743[(13)] = inst_29691);

return statearr_29743;
})();
var statearr_29744_29771 = state_29723__$1;
(statearr_29744_29771[(2)] = inst_29692);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (8))){
var inst_29705 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29745_29772 = state_29723__$1;
(statearr_29745_29772[(2)] = inst_29705);

(statearr_29745_29772[(1)] = (5));


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
});})(c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27626__auto__,c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29749[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29749[(1)] = (1));

return statearr_29749;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29723){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29750){if((e29750 instanceof Object)){
var ex__27630__auto__ = e29750;
var statearr_29751_29773 = state_29723;
(statearr_29751_29773[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29774 = state_29723;
state_29723 = G__29774;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27740__auto__ = (function (){var statearr_29752 = f__27739__auto__.call(null);
(statearr_29752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29757);

return statearr_29752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29757,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29776 = [];
var len__22734__auto___29832 = arguments.length;
var i__22735__auto___29833 = (0);
while(true){
if((i__22735__auto___29833 < len__22734__auto___29832)){
args29776.push((arguments[i__22735__auto___29833]));

var G__29834 = (i__22735__auto___29833 + (1));
i__22735__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var G__29778 = args29776.length;
switch (G__29778) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29776.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___29836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29836,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29836,out){
return (function (state_29808){
var state_val_29809 = (state_29808[(1)]);
if((state_val_29809 === (7))){
var inst_29788 = (state_29808[(7)]);
var inst_29787 = (state_29808[(8)]);
var inst_29787__$1 = (state_29808[(2)]);
var inst_29788__$1 = cljs.core.nth.call(null,inst_29787__$1,(0),null);
var inst_29789 = cljs.core.nth.call(null,inst_29787__$1,(1),null);
var inst_29790 = (inst_29788__$1 == null);
var state_29808__$1 = (function (){var statearr_29810 = state_29808;
(statearr_29810[(7)] = inst_29788__$1);

(statearr_29810[(9)] = inst_29789);

(statearr_29810[(8)] = inst_29787__$1);

return statearr_29810;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29811_29837 = state_29808__$1;
(statearr_29811_29837[(1)] = (8));

} else {
var statearr_29812_29838 = state_29808__$1;
(statearr_29812_29838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (1))){
var inst_29779 = cljs.core.vec.call(null,chs);
var inst_29780 = inst_29779;
var state_29808__$1 = (function (){var statearr_29813 = state_29808;
(statearr_29813[(10)] = inst_29780);

return statearr_29813;
})();
var statearr_29814_29839 = state_29808__$1;
(statearr_29814_29839[(2)] = null);

(statearr_29814_29839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (4))){
var inst_29780 = (state_29808[(10)]);
var state_29808__$1 = state_29808;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29808__$1,(7),inst_29780);
} else {
if((state_val_29809 === (6))){
var inst_29804 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29815_29840 = state_29808__$1;
(statearr_29815_29840[(2)] = inst_29804);

(statearr_29815_29840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (3))){
var inst_29806 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29808__$1,inst_29806);
} else {
if((state_val_29809 === (2))){
var inst_29780 = (state_29808[(10)]);
var inst_29782 = cljs.core.count.call(null,inst_29780);
var inst_29783 = (inst_29782 > (0));
var state_29808__$1 = state_29808;
if(cljs.core.truth_(inst_29783)){
var statearr_29817_29841 = state_29808__$1;
(statearr_29817_29841[(1)] = (4));

} else {
var statearr_29818_29842 = state_29808__$1;
(statearr_29818_29842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (11))){
var inst_29780 = (state_29808[(10)]);
var inst_29797 = (state_29808[(2)]);
var tmp29816 = inst_29780;
var inst_29780__$1 = tmp29816;
var state_29808__$1 = (function (){var statearr_29819 = state_29808;
(statearr_29819[(11)] = inst_29797);

(statearr_29819[(10)] = inst_29780__$1);

return statearr_29819;
})();
var statearr_29820_29843 = state_29808__$1;
(statearr_29820_29843[(2)] = null);

(statearr_29820_29843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (9))){
var inst_29788 = (state_29808[(7)]);
var state_29808__$1 = state_29808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29808__$1,(11),out,inst_29788);
} else {
if((state_val_29809 === (5))){
var inst_29802 = cljs.core.async.close_BANG_.call(null,out);
var state_29808__$1 = state_29808;
var statearr_29821_29844 = state_29808__$1;
(statearr_29821_29844[(2)] = inst_29802);

(statearr_29821_29844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (10))){
var inst_29800 = (state_29808[(2)]);
var state_29808__$1 = state_29808;
var statearr_29822_29845 = state_29808__$1;
(statearr_29822_29845[(2)] = inst_29800);

(statearr_29822_29845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29809 === (8))){
var inst_29780 = (state_29808[(10)]);
var inst_29788 = (state_29808[(7)]);
var inst_29789 = (state_29808[(9)]);
var inst_29787 = (state_29808[(8)]);
var inst_29792 = (function (){var cs = inst_29780;
var vec__29785 = inst_29787;
var v = inst_29788;
var c = inst_29789;
return ((function (cs,vec__29785,v,c,inst_29780,inst_29788,inst_29789,inst_29787,state_val_29809,c__27738__auto___29836,out){
return (function (p1__29775_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29775_SHARP_);
});
;})(cs,vec__29785,v,c,inst_29780,inst_29788,inst_29789,inst_29787,state_val_29809,c__27738__auto___29836,out))
})();
var inst_29793 = cljs.core.filterv.call(null,inst_29792,inst_29780);
var inst_29780__$1 = inst_29793;
var state_29808__$1 = (function (){var statearr_29823 = state_29808;
(statearr_29823[(10)] = inst_29780__$1);

return statearr_29823;
})();
var statearr_29824_29846 = state_29808__$1;
(statearr_29824_29846[(2)] = null);

(statearr_29824_29846[(1)] = (2));


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
});})(c__27738__auto___29836,out))
;
return ((function (switch__27626__auto__,c__27738__auto___29836,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29828[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29828[(1)] = (1));

return statearr_29828;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29808){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29829){if((e29829 instanceof Object)){
var ex__27630__auto__ = e29829;
var statearr_29830_29847 = state_29808;
(statearr_29830_29847[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29848 = state_29808;
state_29808 = G__29848;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29836,out))
})();
var state__27740__auto__ = (function (){var statearr_29831 = f__27739__auto__.call(null);
(statearr_29831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29836);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29836,out))
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
var args29849 = [];
var len__22734__auto___29898 = arguments.length;
var i__22735__auto___29899 = (0);
while(true){
if((i__22735__auto___29899 < len__22734__auto___29898)){
args29849.push((arguments[i__22735__auto___29899]));

var G__29900 = (i__22735__auto___29899 + (1));
i__22735__auto___29899 = G__29900;
continue;
} else {
}
break;
}

var G__29851 = args29849.length;
switch (G__29851) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29849.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___29902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29902,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29902,out){
return (function (state_29875){
var state_val_29876 = (state_29875[(1)]);
if((state_val_29876 === (7))){
var inst_29857 = (state_29875[(7)]);
var inst_29857__$1 = (state_29875[(2)]);
var inst_29858 = (inst_29857__$1 == null);
var inst_29859 = cljs.core.not.call(null,inst_29858);
var state_29875__$1 = (function (){var statearr_29877 = state_29875;
(statearr_29877[(7)] = inst_29857__$1);

return statearr_29877;
})();
if(inst_29859){
var statearr_29878_29903 = state_29875__$1;
(statearr_29878_29903[(1)] = (8));

} else {
var statearr_29879_29904 = state_29875__$1;
(statearr_29879_29904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (1))){
var inst_29852 = (0);
var state_29875__$1 = (function (){var statearr_29880 = state_29875;
(statearr_29880[(8)] = inst_29852);

return statearr_29880;
})();
var statearr_29881_29905 = state_29875__$1;
(statearr_29881_29905[(2)] = null);

(statearr_29881_29905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (4))){
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29875__$1,(7),ch);
} else {
if((state_val_29876 === (6))){
var inst_29870 = (state_29875[(2)]);
var state_29875__$1 = state_29875;
var statearr_29882_29906 = state_29875__$1;
(statearr_29882_29906[(2)] = inst_29870);

(statearr_29882_29906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (3))){
var inst_29872 = (state_29875[(2)]);
var inst_29873 = cljs.core.async.close_BANG_.call(null,out);
var state_29875__$1 = (function (){var statearr_29883 = state_29875;
(statearr_29883[(9)] = inst_29872);

return statearr_29883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29875__$1,inst_29873);
} else {
if((state_val_29876 === (2))){
var inst_29852 = (state_29875[(8)]);
var inst_29854 = (inst_29852 < n);
var state_29875__$1 = state_29875;
if(cljs.core.truth_(inst_29854)){
var statearr_29884_29907 = state_29875__$1;
(statearr_29884_29907[(1)] = (4));

} else {
var statearr_29885_29908 = state_29875__$1;
(statearr_29885_29908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (11))){
var inst_29852 = (state_29875[(8)]);
var inst_29862 = (state_29875[(2)]);
var inst_29863 = (inst_29852 + (1));
var inst_29852__$1 = inst_29863;
var state_29875__$1 = (function (){var statearr_29886 = state_29875;
(statearr_29886[(10)] = inst_29862);

(statearr_29886[(8)] = inst_29852__$1);

return statearr_29886;
})();
var statearr_29887_29909 = state_29875__$1;
(statearr_29887_29909[(2)] = null);

(statearr_29887_29909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (9))){
var state_29875__$1 = state_29875;
var statearr_29888_29910 = state_29875__$1;
(statearr_29888_29910[(2)] = null);

(statearr_29888_29910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (5))){
var state_29875__$1 = state_29875;
var statearr_29889_29911 = state_29875__$1;
(statearr_29889_29911[(2)] = null);

(statearr_29889_29911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (10))){
var inst_29867 = (state_29875[(2)]);
var state_29875__$1 = state_29875;
var statearr_29890_29912 = state_29875__$1;
(statearr_29890_29912[(2)] = inst_29867);

(statearr_29890_29912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29876 === (8))){
var inst_29857 = (state_29875[(7)]);
var state_29875__$1 = state_29875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29875__$1,(11),out,inst_29857);
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
});})(c__27738__auto___29902,out))
;
return ((function (switch__27626__auto__,c__27738__auto___29902,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29894[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29894[(1)] = (1));

return statearr_29894;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29875){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29895){if((e29895 instanceof Object)){
var ex__27630__auto__ = e29895;
var statearr_29896_29913 = state_29875;
(statearr_29896_29913[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29914 = state_29875;
state_29875 = G__29914;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29902,out))
})();
var state__27740__auto__ = (function (){var statearr_29897 = f__27739__auto__.call(null);
(statearr_29897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29902);

return statearr_29897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29902,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29922 = (function (map_LT_,f,ch,meta29923){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29923 = meta29923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29924,meta29923__$1){
var self__ = this;
var _29924__$1 = this;
return (new cljs.core.async.t_cljs$core$async29922(self__.map_LT_,self__.f,self__.ch,meta29923__$1));
});

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29924){
var self__ = this;
var _29924__$1 = this;
return self__.meta29923;
});

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29925 = (function (map_LT_,f,ch,meta29923,_,fn1,meta29926){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29923 = meta29923;
this._ = _;
this.fn1 = fn1;
this.meta29926 = meta29926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29927,meta29926__$1){
var self__ = this;
var _29927__$1 = this;
return (new cljs.core.async.t_cljs$core$async29925(self__.map_LT_,self__.f,self__.ch,self__.meta29923,self__._,self__.fn1,meta29926__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29927){
var self__ = this;
var _29927__$1 = this;
return self__.meta29926;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29915_SHARP_){
return f1.call(null,(((p1__29915_SHARP_ == null))?null:self__.f.call(null,p1__29915_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29923","meta29923",1585601312,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29922","cljs.core.async/t_cljs$core$async29922",694663920,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29926","meta29926",-1699116872,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29925";

cljs.core.async.t_cljs$core$async29925.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29925");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29925 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29925(map_LT___$1,f__$1,ch__$1,meta29923__$1,___$2,fn1__$1,meta29926){
return (new cljs.core.async.t_cljs$core$async29925(map_LT___$1,f__$1,ch__$1,meta29923__$1,___$2,fn1__$1,meta29926));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29925(self__.map_LT_,self__.f,self__.ch,self__.meta29923,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29923","meta29923",1585601312,null)], null);
});

cljs.core.async.t_cljs$core$async29922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29922";

cljs.core.async.t_cljs$core$async29922.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29922");
});

cljs.core.async.__GT_t_cljs$core$async29922 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29922(map_LT___$1,f__$1,ch__$1,meta29923){
return (new cljs.core.async.t_cljs$core$async29922(map_LT___$1,f__$1,ch__$1,meta29923));
});

}

return (new cljs.core.async.t_cljs$core$async29922(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29931 = (function (map_GT_,f,ch,meta29932){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29932 = meta29932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29933,meta29932__$1){
var self__ = this;
var _29933__$1 = this;
return (new cljs.core.async.t_cljs$core$async29931(self__.map_GT_,self__.f,self__.ch,meta29932__$1));
});

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29933){
var self__ = this;
var _29933__$1 = this;
return self__.meta29932;
});

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29932","meta29932",1706670474,null)], null);
});

cljs.core.async.t_cljs$core$async29931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29931";

cljs.core.async.t_cljs$core$async29931.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29931");
});

cljs.core.async.__GT_t_cljs$core$async29931 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29931(map_GT___$1,f__$1,ch__$1,meta29932){
return (new cljs.core.async.t_cljs$core$async29931(map_GT___$1,f__$1,ch__$1,meta29932));
});

}

return (new cljs.core.async.t_cljs$core$async29931(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29937 = (function (filter_GT_,p,ch,meta29938){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29938 = meta29938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29939,meta29938__$1){
var self__ = this;
var _29939__$1 = this;
return (new cljs.core.async.t_cljs$core$async29937(self__.filter_GT_,self__.p,self__.ch,meta29938__$1));
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29939){
var self__ = this;
var _29939__$1 = this;
return self__.meta29938;
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29938","meta29938",825395172,null)], null);
});

cljs.core.async.t_cljs$core$async29937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29937";

cljs.core.async.t_cljs$core$async29937.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29937");
});

cljs.core.async.__GT_t_cljs$core$async29937 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29937(filter_GT___$1,p__$1,ch__$1,meta29938){
return (new cljs.core.async.t_cljs$core$async29937(filter_GT___$1,p__$1,ch__$1,meta29938));
});

}

return (new cljs.core.async.t_cljs$core$async29937(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29940 = [];
var len__22734__auto___29984 = arguments.length;
var i__22735__auto___29985 = (0);
while(true){
if((i__22735__auto___29985 < len__22734__auto___29984)){
args29940.push((arguments[i__22735__auto___29985]));

var G__29986 = (i__22735__auto___29985 + (1));
i__22735__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var G__29942 = args29940.length;
switch (G__29942) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29940.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___29988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___29988,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___29988,out){
return (function (state_29963){
var state_val_29964 = (state_29963[(1)]);
if((state_val_29964 === (7))){
var inst_29959 = (state_29963[(2)]);
var state_29963__$1 = state_29963;
var statearr_29965_29989 = state_29963__$1;
(statearr_29965_29989[(2)] = inst_29959);

(statearr_29965_29989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (1))){
var state_29963__$1 = state_29963;
var statearr_29966_29990 = state_29963__$1;
(statearr_29966_29990[(2)] = null);

(statearr_29966_29990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (4))){
var inst_29945 = (state_29963[(7)]);
var inst_29945__$1 = (state_29963[(2)]);
var inst_29946 = (inst_29945__$1 == null);
var state_29963__$1 = (function (){var statearr_29967 = state_29963;
(statearr_29967[(7)] = inst_29945__$1);

return statearr_29967;
})();
if(cljs.core.truth_(inst_29946)){
var statearr_29968_29991 = state_29963__$1;
(statearr_29968_29991[(1)] = (5));

} else {
var statearr_29969_29992 = state_29963__$1;
(statearr_29969_29992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (6))){
var inst_29945 = (state_29963[(7)]);
var inst_29950 = p.call(null,inst_29945);
var state_29963__$1 = state_29963;
if(cljs.core.truth_(inst_29950)){
var statearr_29970_29993 = state_29963__$1;
(statearr_29970_29993[(1)] = (8));

} else {
var statearr_29971_29994 = state_29963__$1;
(statearr_29971_29994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (3))){
var inst_29961 = (state_29963[(2)]);
var state_29963__$1 = state_29963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29963__$1,inst_29961);
} else {
if((state_val_29964 === (2))){
var state_29963__$1 = state_29963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29963__$1,(4),ch);
} else {
if((state_val_29964 === (11))){
var inst_29953 = (state_29963[(2)]);
var state_29963__$1 = state_29963;
var statearr_29972_29995 = state_29963__$1;
(statearr_29972_29995[(2)] = inst_29953);

(statearr_29972_29995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (9))){
var state_29963__$1 = state_29963;
var statearr_29973_29996 = state_29963__$1;
(statearr_29973_29996[(2)] = null);

(statearr_29973_29996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (5))){
var inst_29948 = cljs.core.async.close_BANG_.call(null,out);
var state_29963__$1 = state_29963;
var statearr_29974_29997 = state_29963__$1;
(statearr_29974_29997[(2)] = inst_29948);

(statearr_29974_29997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (10))){
var inst_29956 = (state_29963[(2)]);
var state_29963__$1 = (function (){var statearr_29975 = state_29963;
(statearr_29975[(8)] = inst_29956);

return statearr_29975;
})();
var statearr_29976_29998 = state_29963__$1;
(statearr_29976_29998[(2)] = null);

(statearr_29976_29998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29964 === (8))){
var inst_29945 = (state_29963[(7)]);
var state_29963__$1 = state_29963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29963__$1,(11),out,inst_29945);
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
});})(c__27738__auto___29988,out))
;
return ((function (switch__27626__auto__,c__27738__auto___29988,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_29980 = [null,null,null,null,null,null,null,null,null];
(statearr_29980[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_29980[(1)] = (1));

return statearr_29980;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_29963){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_29963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e29981){if((e29981 instanceof Object)){
var ex__27630__auto__ = e29981;
var statearr_29982_29999 = state_29963;
(statearr_29982_29999[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30000 = state_29963;
state_29963 = G__30000;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_29963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_29963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___29988,out))
})();
var state__27740__auto__ = (function (){var statearr_29983 = f__27739__auto__.call(null);
(statearr_29983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___29988);

return statearr_29983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___29988,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30001 = [];
var len__22734__auto___30004 = arguments.length;
var i__22735__auto___30005 = (0);
while(true){
if((i__22735__auto___30005 < len__22734__auto___30004)){
args30001.push((arguments[i__22735__auto___30005]));

var G__30006 = (i__22735__auto___30005 + (1));
i__22735__auto___30005 = G__30006;
continue;
} else {
}
break;
}

var G__30003 = args30001.length;
switch (G__30003) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30001.length)].join('')));

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
var c__27738__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto__){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto__){
return (function (state_30173){
var state_val_30174 = (state_30173[(1)]);
if((state_val_30174 === (7))){
var inst_30169 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30175_30216 = state_30173__$1;
(statearr_30175_30216[(2)] = inst_30169);

(statearr_30175_30216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (20))){
var inst_30139 = (state_30173[(7)]);
var inst_30150 = (state_30173[(2)]);
var inst_30151 = cljs.core.next.call(null,inst_30139);
var inst_30125 = inst_30151;
var inst_30126 = null;
var inst_30127 = (0);
var inst_30128 = (0);
var state_30173__$1 = (function (){var statearr_30176 = state_30173;
(statearr_30176[(8)] = inst_30150);

(statearr_30176[(9)] = inst_30128);

(statearr_30176[(10)] = inst_30126);

(statearr_30176[(11)] = inst_30127);

(statearr_30176[(12)] = inst_30125);

return statearr_30176;
})();
var statearr_30177_30217 = state_30173__$1;
(statearr_30177_30217[(2)] = null);

(statearr_30177_30217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (1))){
var state_30173__$1 = state_30173;
var statearr_30178_30218 = state_30173__$1;
(statearr_30178_30218[(2)] = null);

(statearr_30178_30218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (4))){
var inst_30114 = (state_30173[(13)]);
var inst_30114__$1 = (state_30173[(2)]);
var inst_30115 = (inst_30114__$1 == null);
var state_30173__$1 = (function (){var statearr_30179 = state_30173;
(statearr_30179[(13)] = inst_30114__$1);

return statearr_30179;
})();
if(cljs.core.truth_(inst_30115)){
var statearr_30180_30219 = state_30173__$1;
(statearr_30180_30219[(1)] = (5));

} else {
var statearr_30181_30220 = state_30173__$1;
(statearr_30181_30220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (15))){
var state_30173__$1 = state_30173;
var statearr_30185_30221 = state_30173__$1;
(statearr_30185_30221[(2)] = null);

(statearr_30185_30221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (21))){
var state_30173__$1 = state_30173;
var statearr_30186_30222 = state_30173__$1;
(statearr_30186_30222[(2)] = null);

(statearr_30186_30222[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (13))){
var inst_30128 = (state_30173[(9)]);
var inst_30126 = (state_30173[(10)]);
var inst_30127 = (state_30173[(11)]);
var inst_30125 = (state_30173[(12)]);
var inst_30135 = (state_30173[(2)]);
var inst_30136 = (inst_30128 + (1));
var tmp30182 = inst_30126;
var tmp30183 = inst_30127;
var tmp30184 = inst_30125;
var inst_30125__$1 = tmp30184;
var inst_30126__$1 = tmp30182;
var inst_30127__$1 = tmp30183;
var inst_30128__$1 = inst_30136;
var state_30173__$1 = (function (){var statearr_30187 = state_30173;
(statearr_30187[(9)] = inst_30128__$1);

(statearr_30187[(10)] = inst_30126__$1);

(statearr_30187[(11)] = inst_30127__$1);

(statearr_30187[(14)] = inst_30135);

(statearr_30187[(12)] = inst_30125__$1);

return statearr_30187;
})();
var statearr_30188_30223 = state_30173__$1;
(statearr_30188_30223[(2)] = null);

(statearr_30188_30223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (22))){
var state_30173__$1 = state_30173;
var statearr_30189_30224 = state_30173__$1;
(statearr_30189_30224[(2)] = null);

(statearr_30189_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (6))){
var inst_30114 = (state_30173[(13)]);
var inst_30123 = f.call(null,inst_30114);
var inst_30124 = cljs.core.seq.call(null,inst_30123);
var inst_30125 = inst_30124;
var inst_30126 = null;
var inst_30127 = (0);
var inst_30128 = (0);
var state_30173__$1 = (function (){var statearr_30190 = state_30173;
(statearr_30190[(9)] = inst_30128);

(statearr_30190[(10)] = inst_30126);

(statearr_30190[(11)] = inst_30127);

(statearr_30190[(12)] = inst_30125);

return statearr_30190;
})();
var statearr_30191_30225 = state_30173__$1;
(statearr_30191_30225[(2)] = null);

(statearr_30191_30225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (17))){
var inst_30139 = (state_30173[(7)]);
var inst_30143 = cljs.core.chunk_first.call(null,inst_30139);
var inst_30144 = cljs.core.chunk_rest.call(null,inst_30139);
var inst_30145 = cljs.core.count.call(null,inst_30143);
var inst_30125 = inst_30144;
var inst_30126 = inst_30143;
var inst_30127 = inst_30145;
var inst_30128 = (0);
var state_30173__$1 = (function (){var statearr_30192 = state_30173;
(statearr_30192[(9)] = inst_30128);

(statearr_30192[(10)] = inst_30126);

(statearr_30192[(11)] = inst_30127);

(statearr_30192[(12)] = inst_30125);

return statearr_30192;
})();
var statearr_30193_30226 = state_30173__$1;
(statearr_30193_30226[(2)] = null);

(statearr_30193_30226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (3))){
var inst_30171 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30173__$1,inst_30171);
} else {
if((state_val_30174 === (12))){
var inst_30159 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30194_30227 = state_30173__$1;
(statearr_30194_30227[(2)] = inst_30159);

(statearr_30194_30227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (2))){
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30173__$1,(4),in$);
} else {
if((state_val_30174 === (23))){
var inst_30167 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30195_30228 = state_30173__$1;
(statearr_30195_30228[(2)] = inst_30167);

(statearr_30195_30228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (19))){
var inst_30154 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30196_30229 = state_30173__$1;
(statearr_30196_30229[(2)] = inst_30154);

(statearr_30196_30229[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (11))){
var inst_30125 = (state_30173[(12)]);
var inst_30139 = (state_30173[(7)]);
var inst_30139__$1 = cljs.core.seq.call(null,inst_30125);
var state_30173__$1 = (function (){var statearr_30197 = state_30173;
(statearr_30197[(7)] = inst_30139__$1);

return statearr_30197;
})();
if(inst_30139__$1){
var statearr_30198_30230 = state_30173__$1;
(statearr_30198_30230[(1)] = (14));

} else {
var statearr_30199_30231 = state_30173__$1;
(statearr_30199_30231[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (9))){
var inst_30161 = (state_30173[(2)]);
var inst_30162 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30173__$1 = (function (){var statearr_30200 = state_30173;
(statearr_30200[(15)] = inst_30161);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30162)){
var statearr_30201_30232 = state_30173__$1;
(statearr_30201_30232[(1)] = (21));

} else {
var statearr_30202_30233 = state_30173__$1;
(statearr_30202_30233[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (5))){
var inst_30117 = cljs.core.async.close_BANG_.call(null,out);
var state_30173__$1 = state_30173;
var statearr_30203_30234 = state_30173__$1;
(statearr_30203_30234[(2)] = inst_30117);

(statearr_30203_30234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (14))){
var inst_30139 = (state_30173[(7)]);
var inst_30141 = cljs.core.chunked_seq_QMARK_.call(null,inst_30139);
var state_30173__$1 = state_30173;
if(inst_30141){
var statearr_30204_30235 = state_30173__$1;
(statearr_30204_30235[(1)] = (17));

} else {
var statearr_30205_30236 = state_30173__$1;
(statearr_30205_30236[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (16))){
var inst_30157 = (state_30173[(2)]);
var state_30173__$1 = state_30173;
var statearr_30206_30237 = state_30173__$1;
(statearr_30206_30237[(2)] = inst_30157);

(statearr_30206_30237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30174 === (10))){
var inst_30128 = (state_30173[(9)]);
var inst_30126 = (state_30173[(10)]);
var inst_30133 = cljs.core._nth.call(null,inst_30126,inst_30128);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30173__$1,(13),out,inst_30133);
} else {
if((state_val_30174 === (18))){
var inst_30139 = (state_30173[(7)]);
var inst_30148 = cljs.core.first.call(null,inst_30139);
var state_30173__$1 = state_30173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30173__$1,(20),out,inst_30148);
} else {
if((state_val_30174 === (8))){
var inst_30128 = (state_30173[(9)]);
var inst_30127 = (state_30173[(11)]);
var inst_30130 = (inst_30128 < inst_30127);
var inst_30131 = inst_30130;
var state_30173__$1 = state_30173;
if(cljs.core.truth_(inst_30131)){
var statearr_30207_30238 = state_30173__$1;
(statearr_30207_30238[(1)] = (10));

} else {
var statearr_30208_30239 = state_30173__$1;
(statearr_30208_30239[(1)] = (11));

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
});})(c__27738__auto__))
;
return ((function (switch__27626__auto__,c__27738__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0 = (function (){
var statearr_30212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30212[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__);

(statearr_30212[(1)] = (1));

return statearr_30212;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1 = (function (state_30173){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_30173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e30213){if((e30213 instanceof Object)){
var ex__27630__auto__ = e30213;
var statearr_30214_30240 = state_30173;
(statearr_30214_30240[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30241 = state_30173;
state_30173 = G__30241;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__ = function(state_30173){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1.call(this,state_30173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27627__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto__))
})();
var state__27740__auto__ = (function (){var statearr_30215 = f__27739__auto__.call(null);
(statearr_30215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto__);

return statearr_30215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto__))
);

return c__27738__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30242 = [];
var len__22734__auto___30245 = arguments.length;
var i__22735__auto___30246 = (0);
while(true){
if((i__22735__auto___30246 < len__22734__auto___30245)){
args30242.push((arguments[i__22735__auto___30246]));

var G__30247 = (i__22735__auto___30246 + (1));
i__22735__auto___30246 = G__30247;
continue;
} else {
}
break;
}

var G__30244 = args30242.length;
switch (G__30244) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30242.length)].join('')));

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
var args30249 = [];
var len__22734__auto___30252 = arguments.length;
var i__22735__auto___30253 = (0);
while(true){
if((i__22735__auto___30253 < len__22734__auto___30252)){
args30249.push((arguments[i__22735__auto___30253]));

var G__30254 = (i__22735__auto___30253 + (1));
i__22735__auto___30253 = G__30254;
continue;
} else {
}
break;
}

var G__30251 = args30249.length;
switch (G__30251) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30249.length)].join('')));

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
var args30256 = [];
var len__22734__auto___30307 = arguments.length;
var i__22735__auto___30308 = (0);
while(true){
if((i__22735__auto___30308 < len__22734__auto___30307)){
args30256.push((arguments[i__22735__auto___30308]));

var G__30309 = (i__22735__auto___30308 + (1));
i__22735__auto___30308 = G__30309;
continue;
} else {
}
break;
}

var G__30258 = args30256.length;
switch (G__30258) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30256.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___30311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___30311,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___30311,out){
return (function (state_30282){
var state_val_30283 = (state_30282[(1)]);
if((state_val_30283 === (7))){
var inst_30277 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30284_30312 = state_30282__$1;
(statearr_30284_30312[(2)] = inst_30277);

(statearr_30284_30312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (1))){
var inst_30259 = null;
var state_30282__$1 = (function (){var statearr_30285 = state_30282;
(statearr_30285[(7)] = inst_30259);

return statearr_30285;
})();
var statearr_30286_30313 = state_30282__$1;
(statearr_30286_30313[(2)] = null);

(statearr_30286_30313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (4))){
var inst_30262 = (state_30282[(8)]);
var inst_30262__$1 = (state_30282[(2)]);
var inst_30263 = (inst_30262__$1 == null);
var inst_30264 = cljs.core.not.call(null,inst_30263);
var state_30282__$1 = (function (){var statearr_30287 = state_30282;
(statearr_30287[(8)] = inst_30262__$1);

return statearr_30287;
})();
if(inst_30264){
var statearr_30288_30314 = state_30282__$1;
(statearr_30288_30314[(1)] = (5));

} else {
var statearr_30289_30315 = state_30282__$1;
(statearr_30289_30315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (6))){
var state_30282__$1 = state_30282;
var statearr_30290_30316 = state_30282__$1;
(statearr_30290_30316[(2)] = null);

(statearr_30290_30316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (3))){
var inst_30279 = (state_30282[(2)]);
var inst_30280 = cljs.core.async.close_BANG_.call(null,out);
var state_30282__$1 = (function (){var statearr_30291 = state_30282;
(statearr_30291[(9)] = inst_30279);

return statearr_30291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30282__$1,inst_30280);
} else {
if((state_val_30283 === (2))){
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30282__$1,(4),ch);
} else {
if((state_val_30283 === (11))){
var inst_30262 = (state_30282[(8)]);
var inst_30271 = (state_30282[(2)]);
var inst_30259 = inst_30262;
var state_30282__$1 = (function (){var statearr_30292 = state_30282;
(statearr_30292[(10)] = inst_30271);

(statearr_30292[(7)] = inst_30259);

return statearr_30292;
})();
var statearr_30293_30317 = state_30282__$1;
(statearr_30293_30317[(2)] = null);

(statearr_30293_30317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (9))){
var inst_30262 = (state_30282[(8)]);
var state_30282__$1 = state_30282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30282__$1,(11),out,inst_30262);
} else {
if((state_val_30283 === (5))){
var inst_30262 = (state_30282[(8)]);
var inst_30259 = (state_30282[(7)]);
var inst_30266 = cljs.core._EQ_.call(null,inst_30262,inst_30259);
var state_30282__$1 = state_30282;
if(inst_30266){
var statearr_30295_30318 = state_30282__$1;
(statearr_30295_30318[(1)] = (8));

} else {
var statearr_30296_30319 = state_30282__$1;
(statearr_30296_30319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (10))){
var inst_30274 = (state_30282[(2)]);
var state_30282__$1 = state_30282;
var statearr_30297_30320 = state_30282__$1;
(statearr_30297_30320[(2)] = inst_30274);

(statearr_30297_30320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30283 === (8))){
var inst_30259 = (state_30282[(7)]);
var tmp30294 = inst_30259;
var inst_30259__$1 = tmp30294;
var state_30282__$1 = (function (){var statearr_30298 = state_30282;
(statearr_30298[(7)] = inst_30259__$1);

return statearr_30298;
})();
var statearr_30299_30321 = state_30282__$1;
(statearr_30299_30321[(2)] = null);

(statearr_30299_30321[(1)] = (2));


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
});})(c__27738__auto___30311,out))
;
return ((function (switch__27626__auto__,c__27738__auto___30311,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_30303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30303[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_30303[(1)] = (1));

return statearr_30303;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_30282){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_30282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e30304){if((e30304 instanceof Object)){
var ex__27630__auto__ = e30304;
var statearr_30305_30322 = state_30282;
(statearr_30305_30322[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30323 = state_30282;
state_30282 = G__30323;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_30282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_30282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___30311,out))
})();
var state__27740__auto__ = (function (){var statearr_30306 = f__27739__auto__.call(null);
(statearr_30306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___30311);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___30311,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30324 = [];
var len__22734__auto___30394 = arguments.length;
var i__22735__auto___30395 = (0);
while(true){
if((i__22735__auto___30395 < len__22734__auto___30394)){
args30324.push((arguments[i__22735__auto___30395]));

var G__30396 = (i__22735__auto___30395 + (1));
i__22735__auto___30395 = G__30396;
continue;
} else {
}
break;
}

var G__30326 = args30324.length;
switch (G__30326) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30324.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___30398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___30398,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___30398,out){
return (function (state_30364){
var state_val_30365 = (state_30364[(1)]);
if((state_val_30365 === (7))){
var inst_30360 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30366_30399 = state_30364__$1;
(statearr_30366_30399[(2)] = inst_30360);

(statearr_30366_30399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (1))){
var inst_30327 = (new Array(n));
var inst_30328 = inst_30327;
var inst_30329 = (0);
var state_30364__$1 = (function (){var statearr_30367 = state_30364;
(statearr_30367[(7)] = inst_30328);

(statearr_30367[(8)] = inst_30329);

return statearr_30367;
})();
var statearr_30368_30400 = state_30364__$1;
(statearr_30368_30400[(2)] = null);

(statearr_30368_30400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (4))){
var inst_30332 = (state_30364[(9)]);
var inst_30332__$1 = (state_30364[(2)]);
var inst_30333 = (inst_30332__$1 == null);
var inst_30334 = cljs.core.not.call(null,inst_30333);
var state_30364__$1 = (function (){var statearr_30369 = state_30364;
(statearr_30369[(9)] = inst_30332__$1);

return statearr_30369;
})();
if(inst_30334){
var statearr_30370_30401 = state_30364__$1;
(statearr_30370_30401[(1)] = (5));

} else {
var statearr_30371_30402 = state_30364__$1;
(statearr_30371_30402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (15))){
var inst_30354 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30372_30403 = state_30364__$1;
(statearr_30372_30403[(2)] = inst_30354);

(statearr_30372_30403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (13))){
var state_30364__$1 = state_30364;
var statearr_30373_30404 = state_30364__$1;
(statearr_30373_30404[(2)] = null);

(statearr_30373_30404[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (6))){
var inst_30329 = (state_30364[(8)]);
var inst_30350 = (inst_30329 > (0));
var state_30364__$1 = state_30364;
if(cljs.core.truth_(inst_30350)){
var statearr_30374_30405 = state_30364__$1;
(statearr_30374_30405[(1)] = (12));

} else {
var statearr_30375_30406 = state_30364__$1;
(statearr_30375_30406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (3))){
var inst_30362 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30364__$1,inst_30362);
} else {
if((state_val_30365 === (12))){
var inst_30328 = (state_30364[(7)]);
var inst_30352 = cljs.core.vec.call(null,inst_30328);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30364__$1,(15),out,inst_30352);
} else {
if((state_val_30365 === (2))){
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30364__$1,(4),ch);
} else {
if((state_val_30365 === (11))){
var inst_30344 = (state_30364[(2)]);
var inst_30345 = (new Array(n));
var inst_30328 = inst_30345;
var inst_30329 = (0);
var state_30364__$1 = (function (){var statearr_30376 = state_30364;
(statearr_30376[(10)] = inst_30344);

(statearr_30376[(7)] = inst_30328);

(statearr_30376[(8)] = inst_30329);

return statearr_30376;
})();
var statearr_30377_30407 = state_30364__$1;
(statearr_30377_30407[(2)] = null);

(statearr_30377_30407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (9))){
var inst_30328 = (state_30364[(7)]);
var inst_30342 = cljs.core.vec.call(null,inst_30328);
var state_30364__$1 = state_30364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30364__$1,(11),out,inst_30342);
} else {
if((state_val_30365 === (5))){
var inst_30337 = (state_30364[(11)]);
var inst_30328 = (state_30364[(7)]);
var inst_30329 = (state_30364[(8)]);
var inst_30332 = (state_30364[(9)]);
var inst_30336 = (inst_30328[inst_30329] = inst_30332);
var inst_30337__$1 = (inst_30329 + (1));
var inst_30338 = (inst_30337__$1 < n);
var state_30364__$1 = (function (){var statearr_30378 = state_30364;
(statearr_30378[(11)] = inst_30337__$1);

(statearr_30378[(12)] = inst_30336);

return statearr_30378;
})();
if(cljs.core.truth_(inst_30338)){
var statearr_30379_30408 = state_30364__$1;
(statearr_30379_30408[(1)] = (8));

} else {
var statearr_30380_30409 = state_30364__$1;
(statearr_30380_30409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (14))){
var inst_30357 = (state_30364[(2)]);
var inst_30358 = cljs.core.async.close_BANG_.call(null,out);
var state_30364__$1 = (function (){var statearr_30382 = state_30364;
(statearr_30382[(13)] = inst_30357);

return statearr_30382;
})();
var statearr_30383_30410 = state_30364__$1;
(statearr_30383_30410[(2)] = inst_30358);

(statearr_30383_30410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (10))){
var inst_30348 = (state_30364[(2)]);
var state_30364__$1 = state_30364;
var statearr_30384_30411 = state_30364__$1;
(statearr_30384_30411[(2)] = inst_30348);

(statearr_30384_30411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30365 === (8))){
var inst_30337 = (state_30364[(11)]);
var inst_30328 = (state_30364[(7)]);
var tmp30381 = inst_30328;
var inst_30328__$1 = tmp30381;
var inst_30329 = inst_30337;
var state_30364__$1 = (function (){var statearr_30385 = state_30364;
(statearr_30385[(7)] = inst_30328__$1);

(statearr_30385[(8)] = inst_30329);

return statearr_30385;
})();
var statearr_30386_30412 = state_30364__$1;
(statearr_30386_30412[(2)] = null);

(statearr_30386_30412[(1)] = (2));


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
});})(c__27738__auto___30398,out))
;
return ((function (switch__27626__auto__,c__27738__auto___30398,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_30390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30390[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_30390[(1)] = (1));

return statearr_30390;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_30364){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_30364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object)){
var ex__27630__auto__ = e30391;
var statearr_30392_30413 = state_30364;
(statearr_30392_30413[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30414 = state_30364;
state_30364 = G__30414;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_30364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_30364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___30398,out))
})();
var state__27740__auto__ = (function (){var statearr_30393 = f__27739__auto__.call(null);
(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___30398);

return statearr_30393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___30398,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30415 = [];
var len__22734__auto___30489 = arguments.length;
var i__22735__auto___30490 = (0);
while(true){
if((i__22735__auto___30490 < len__22734__auto___30489)){
args30415.push((arguments[i__22735__auto___30490]));

var G__30491 = (i__22735__auto___30490 + (1));
i__22735__auto___30490 = G__30491;
continue;
} else {
}
break;
}

var G__30417 = args30415.length;
switch (G__30417) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30415.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27738__auto___30493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27738__auto___30493,out){
return (function (){
var f__27739__auto__ = (function (){var switch__27626__auto__ = ((function (c__27738__auto___30493,out){
return (function (state_30459){
var state_val_30460 = (state_30459[(1)]);
if((state_val_30460 === (7))){
var inst_30455 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30461_30494 = state_30459__$1;
(statearr_30461_30494[(2)] = inst_30455);

(statearr_30461_30494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (1))){
var inst_30418 = [];
var inst_30419 = inst_30418;
var inst_30420 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30459__$1 = (function (){var statearr_30462 = state_30459;
(statearr_30462[(7)] = inst_30420);

(statearr_30462[(8)] = inst_30419);

return statearr_30462;
})();
var statearr_30463_30495 = state_30459__$1;
(statearr_30463_30495[(2)] = null);

(statearr_30463_30495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (4))){
var inst_30423 = (state_30459[(9)]);
var inst_30423__$1 = (state_30459[(2)]);
var inst_30424 = (inst_30423__$1 == null);
var inst_30425 = cljs.core.not.call(null,inst_30424);
var state_30459__$1 = (function (){var statearr_30464 = state_30459;
(statearr_30464[(9)] = inst_30423__$1);

return statearr_30464;
})();
if(inst_30425){
var statearr_30465_30496 = state_30459__$1;
(statearr_30465_30496[(1)] = (5));

} else {
var statearr_30466_30497 = state_30459__$1;
(statearr_30466_30497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (15))){
var inst_30449 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30467_30498 = state_30459__$1;
(statearr_30467_30498[(2)] = inst_30449);

(statearr_30467_30498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (13))){
var state_30459__$1 = state_30459;
var statearr_30468_30499 = state_30459__$1;
(statearr_30468_30499[(2)] = null);

(statearr_30468_30499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (6))){
var inst_30419 = (state_30459[(8)]);
var inst_30444 = inst_30419.length;
var inst_30445 = (inst_30444 > (0));
var state_30459__$1 = state_30459;
if(cljs.core.truth_(inst_30445)){
var statearr_30469_30500 = state_30459__$1;
(statearr_30469_30500[(1)] = (12));

} else {
var statearr_30470_30501 = state_30459__$1;
(statearr_30470_30501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (3))){
var inst_30457 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30459__$1,inst_30457);
} else {
if((state_val_30460 === (12))){
var inst_30419 = (state_30459[(8)]);
var inst_30447 = cljs.core.vec.call(null,inst_30419);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30459__$1,(15),out,inst_30447);
} else {
if((state_val_30460 === (2))){
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30459__$1,(4),ch);
} else {
if((state_val_30460 === (11))){
var inst_30423 = (state_30459[(9)]);
var inst_30427 = (state_30459[(10)]);
var inst_30437 = (state_30459[(2)]);
var inst_30438 = [];
var inst_30439 = inst_30438.push(inst_30423);
var inst_30419 = inst_30438;
var inst_30420 = inst_30427;
var state_30459__$1 = (function (){var statearr_30471 = state_30459;
(statearr_30471[(7)] = inst_30420);

(statearr_30471[(8)] = inst_30419);

(statearr_30471[(11)] = inst_30437);

(statearr_30471[(12)] = inst_30439);

return statearr_30471;
})();
var statearr_30472_30502 = state_30459__$1;
(statearr_30472_30502[(2)] = null);

(statearr_30472_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (9))){
var inst_30419 = (state_30459[(8)]);
var inst_30435 = cljs.core.vec.call(null,inst_30419);
var state_30459__$1 = state_30459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30459__$1,(11),out,inst_30435);
} else {
if((state_val_30460 === (5))){
var inst_30420 = (state_30459[(7)]);
var inst_30423 = (state_30459[(9)]);
var inst_30427 = (state_30459[(10)]);
var inst_30427__$1 = f.call(null,inst_30423);
var inst_30428 = cljs.core._EQ_.call(null,inst_30427__$1,inst_30420);
var inst_30429 = cljs.core.keyword_identical_QMARK_.call(null,inst_30420,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30430 = (inst_30428) || (inst_30429);
var state_30459__$1 = (function (){var statearr_30473 = state_30459;
(statearr_30473[(10)] = inst_30427__$1);

return statearr_30473;
})();
if(cljs.core.truth_(inst_30430)){
var statearr_30474_30503 = state_30459__$1;
(statearr_30474_30503[(1)] = (8));

} else {
var statearr_30475_30504 = state_30459__$1;
(statearr_30475_30504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (14))){
var inst_30452 = (state_30459[(2)]);
var inst_30453 = cljs.core.async.close_BANG_.call(null,out);
var state_30459__$1 = (function (){var statearr_30477 = state_30459;
(statearr_30477[(13)] = inst_30452);

return statearr_30477;
})();
var statearr_30478_30505 = state_30459__$1;
(statearr_30478_30505[(2)] = inst_30453);

(statearr_30478_30505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (10))){
var inst_30442 = (state_30459[(2)]);
var state_30459__$1 = state_30459;
var statearr_30479_30506 = state_30459__$1;
(statearr_30479_30506[(2)] = inst_30442);

(statearr_30479_30506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30460 === (8))){
var inst_30423 = (state_30459[(9)]);
var inst_30427 = (state_30459[(10)]);
var inst_30419 = (state_30459[(8)]);
var inst_30432 = inst_30419.push(inst_30423);
var tmp30476 = inst_30419;
var inst_30419__$1 = tmp30476;
var inst_30420 = inst_30427;
var state_30459__$1 = (function (){var statearr_30480 = state_30459;
(statearr_30480[(7)] = inst_30420);

(statearr_30480[(8)] = inst_30419__$1);

(statearr_30480[(14)] = inst_30432);

return statearr_30480;
})();
var statearr_30481_30507 = state_30459__$1;
(statearr_30481_30507[(2)] = null);

(statearr_30481_30507[(1)] = (2));


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
});})(c__27738__auto___30493,out))
;
return ((function (switch__27626__auto__,c__27738__auto___30493,out){
return (function() {
var cljs$core$async$state_machine__27627__auto__ = null;
var cljs$core$async$state_machine__27627__auto____0 = (function (){
var statearr_30485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30485[(0)] = cljs$core$async$state_machine__27627__auto__);

(statearr_30485[(1)] = (1));

return statearr_30485;
});
var cljs$core$async$state_machine__27627__auto____1 = (function (state_30459){
while(true){
var ret_value__27628__auto__ = (function (){try{while(true){
var result__27629__auto__ = switch__27626__auto__.call(null,state_30459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27629__auto__;
}
break;
}
}catch (e30486){if((e30486 instanceof Object)){
var ex__27630__auto__ = e30486;
var statearr_30487_30508 = state_30459;
(statearr_30487_30508[(5)] = ex__27630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30509 = state_30459;
state_30459 = G__30509;
continue;
} else {
return ret_value__27628__auto__;
}
break;
}
});
cljs$core$async$state_machine__27627__auto__ = function(state_30459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27627__auto____1.call(this,state_30459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27627__auto____0;
cljs$core$async$state_machine__27627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27627__auto____1;
return cljs$core$async$state_machine__27627__auto__;
})()
;})(switch__27626__auto__,c__27738__auto___30493,out))
})();
var state__27740__auto__ = (function (){var statearr_30488 = f__27739__auto__.call(null);
(statearr_30488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27738__auto___30493);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27740__auto__);
});})(c__27738__auto___30493,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
