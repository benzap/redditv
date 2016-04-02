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
var args27059 = [];
var len__22734__auto___27065 = arguments.length;
var i__22735__auto___27066 = (0);
while(true){
if((i__22735__auto___27066 < len__22734__auto___27065)){
args27059.push((arguments[i__22735__auto___27066]));

var G__27067 = (i__22735__auto___27066 + (1));
i__22735__auto___27066 = G__27067;
continue;
} else {
}
break;
}

var G__27061 = args27059.length;
switch (G__27061) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27059.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27062 = (function (f,blockable,meta27063){
this.f = f;
this.blockable = blockable;
this.meta27063 = meta27063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27064,meta27063__$1){
var self__ = this;
var _27064__$1 = this;
return (new cljs.core.async.t_cljs$core$async27062(self__.f,self__.blockable,meta27063__$1));
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27064){
var self__ = this;
var _27064__$1 = this;
return self__.meta27063;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27063","meta27063",2131616568,null)], null);
});

cljs.core.async.t_cljs$core$async27062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27062";

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27062");
});

cljs.core.async.__GT_t_cljs$core$async27062 = (function cljs$core$async$__GT_t_cljs$core$async27062(f__$1,blockable__$1,meta27063){
return (new cljs.core.async.t_cljs$core$async27062(f__$1,blockable__$1,meta27063));
});

}

return (new cljs.core.async.t_cljs$core$async27062(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27071 = [];
var len__22734__auto___27074 = arguments.length;
var i__22735__auto___27075 = (0);
while(true){
if((i__22735__auto___27075 < len__22734__auto___27074)){
args27071.push((arguments[i__22735__auto___27075]));

var G__27076 = (i__22735__auto___27075 + (1));
i__22735__auto___27075 = G__27076;
continue;
} else {
}
break;
}

var G__27073 = args27071.length;
switch (G__27073) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27071.length)].join('')));

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
var args27078 = [];
var len__22734__auto___27081 = arguments.length;
var i__22735__auto___27082 = (0);
while(true){
if((i__22735__auto___27082 < len__22734__auto___27081)){
args27078.push((arguments[i__22735__auto___27082]));

var G__27083 = (i__22735__auto___27082 + (1));
i__22735__auto___27082 = G__27083;
continue;
} else {
}
break;
}

var G__27080 = args27078.length;
switch (G__27080) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27078.length)].join('')));

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
var args27085 = [];
var len__22734__auto___27088 = arguments.length;
var i__22735__auto___27089 = (0);
while(true){
if((i__22735__auto___27089 < len__22734__auto___27088)){
args27085.push((arguments[i__22735__auto___27089]));

var G__27090 = (i__22735__auto___27089 + (1));
i__22735__auto___27089 = G__27090;
continue;
} else {
}
break;
}

var G__27087 = args27085.length;
switch (G__27087) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27085.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27092 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27092);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27092,ret){
return (function (){
return fn1.call(null,val_27092);
});})(val_27092,ret))
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
var args27093 = [];
var len__22734__auto___27096 = arguments.length;
var i__22735__auto___27097 = (0);
while(true){
if((i__22735__auto___27097 < len__22734__auto___27096)){
args27093.push((arguments[i__22735__auto___27097]));

var G__27098 = (i__22735__auto___27097 + (1));
i__22735__auto___27097 = G__27098;
continue;
} else {
}
break;
}

var G__27095 = args27093.length;
switch (G__27095) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27093.length)].join('')));

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
var n__22579__auto___27100 = n;
var x_27101 = (0);
while(true){
if((x_27101 < n__22579__auto___27100)){
(a[x_27101] = (0));

var G__27102 = (x_27101 + (1));
x_27101 = G__27102;
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

var G__27103 = (i + (1));
i = G__27103;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27107 = (function (alt_flag,flag,meta27108){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27108 = meta27108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27109,meta27108__$1){
var self__ = this;
var _27109__$1 = this;
return (new cljs.core.async.t_cljs$core$async27107(self__.alt_flag,self__.flag,meta27108__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27109){
var self__ = this;
var _27109__$1 = this;
return self__.meta27108;
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27108","meta27108",-1112890230,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27107";

cljs.core.async.t_cljs$core$async27107.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27107");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27107 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27107(alt_flag__$1,flag__$1,meta27108){
return (new cljs.core.async.t_cljs$core$async27107(alt_flag__$1,flag__$1,meta27108));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27107(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27113 = (function (alt_handler,flag,cb,meta27114){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27114 = meta27114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27115,meta27114__$1){
var self__ = this;
var _27115__$1 = this;
return (new cljs.core.async.t_cljs$core$async27113(self__.alt_handler,self__.flag,self__.cb,meta27114__$1));
});

cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27115){
var self__ = this;
var _27115__$1 = this;
return self__.meta27114;
});

cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27114","meta27114",461511618,null)], null);
});

cljs.core.async.t_cljs$core$async27113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27113";

cljs.core.async.t_cljs$core$async27113.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async27113");
});

cljs.core.async.__GT_t_cljs$core$async27113 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27113(alt_handler__$1,flag__$1,cb__$1,meta27114){
return (new cljs.core.async.t_cljs$core$async27113(alt_handler__$1,flag__$1,cb__$1,meta27114));
});

}

return (new cljs.core.async.t_cljs$core$async27113(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27116_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27116_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27117_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27117_SHARP_,port], null));
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
var G__27118 = (i + (1));
i = G__27118;
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
var len__22734__auto___27124 = arguments.length;
var i__22735__auto___27125 = (0);
while(true){
if((i__22735__auto___27125 < len__22734__auto___27124)){
args__22741__auto__.push((arguments[i__22735__auto___27125]));

var G__27126 = (i__22735__auto___27125 + (1));
i__22735__auto___27125 = G__27126;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((1) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22742__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27121){
var map__27122 = p__27121;
var map__27122__$1 = ((((!((map__27122 == null)))?((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27122):map__27122);
var opts = map__27122__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27119){
var G__27120 = cljs.core.first.call(null,seq27119);
var seq27119__$1 = cljs.core.next.call(null,seq27119);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27120,seq27119__$1);
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
var args27127 = [];
var len__22734__auto___27177 = arguments.length;
var i__22735__auto___27178 = (0);
while(true){
if((i__22735__auto___27178 < len__22734__auto___27177)){
args27127.push((arguments[i__22735__auto___27178]));

var G__27179 = (i__22735__auto___27178 + (1));
i__22735__auto___27178 = G__27179;
continue;
} else {
}
break;
}

var G__27129 = args27127.length;
switch (G__27129) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27127.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27014__auto___27181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___27181){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___27181){
return (function (state_27153){
var state_val_27154 = (state_27153[(1)]);
if((state_val_27154 === (7))){
var inst_27149 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
var statearr_27155_27182 = state_27153__$1;
(statearr_27155_27182[(2)] = inst_27149);

(statearr_27155_27182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (1))){
var state_27153__$1 = state_27153;
var statearr_27156_27183 = state_27153__$1;
(statearr_27156_27183[(2)] = null);

(statearr_27156_27183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (4))){
var inst_27132 = (state_27153[(7)]);
var inst_27132__$1 = (state_27153[(2)]);
var inst_27133 = (inst_27132__$1 == null);
var state_27153__$1 = (function (){var statearr_27157 = state_27153;
(statearr_27157[(7)] = inst_27132__$1);

return statearr_27157;
})();
if(cljs.core.truth_(inst_27133)){
var statearr_27158_27184 = state_27153__$1;
(statearr_27158_27184[(1)] = (5));

} else {
var statearr_27159_27185 = state_27153__$1;
(statearr_27159_27185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (13))){
var state_27153__$1 = state_27153;
var statearr_27160_27186 = state_27153__$1;
(statearr_27160_27186[(2)] = null);

(statearr_27160_27186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (6))){
var inst_27132 = (state_27153[(7)]);
var state_27153__$1 = state_27153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27153__$1,(11),to,inst_27132);
} else {
if((state_val_27154 === (3))){
var inst_27151 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27153__$1,inst_27151);
} else {
if((state_val_27154 === (12))){
var state_27153__$1 = state_27153;
var statearr_27161_27187 = state_27153__$1;
(statearr_27161_27187[(2)] = null);

(statearr_27161_27187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (2))){
var state_27153__$1 = state_27153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27153__$1,(4),from);
} else {
if((state_val_27154 === (11))){
var inst_27142 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
if(cljs.core.truth_(inst_27142)){
var statearr_27162_27188 = state_27153__$1;
(statearr_27162_27188[(1)] = (12));

} else {
var statearr_27163_27189 = state_27153__$1;
(statearr_27163_27189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (9))){
var state_27153__$1 = state_27153;
var statearr_27164_27190 = state_27153__$1;
(statearr_27164_27190[(2)] = null);

(statearr_27164_27190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (5))){
var state_27153__$1 = state_27153;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27165_27191 = state_27153__$1;
(statearr_27165_27191[(1)] = (8));

} else {
var statearr_27166_27192 = state_27153__$1;
(statearr_27166_27192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (14))){
var inst_27147 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
var statearr_27167_27193 = state_27153__$1;
(statearr_27167_27193[(2)] = inst_27147);

(statearr_27167_27193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (10))){
var inst_27139 = (state_27153[(2)]);
var state_27153__$1 = state_27153;
var statearr_27168_27194 = state_27153__$1;
(statearr_27168_27194[(2)] = inst_27139);

(statearr_27168_27194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27154 === (8))){
var inst_27136 = cljs.core.async.close_BANG_.call(null,to);
var state_27153__$1 = state_27153;
var statearr_27169_27195 = state_27153__$1;
(statearr_27169_27195[(2)] = inst_27136);

(statearr_27169_27195[(1)] = (10));


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
});})(c__27014__auto___27181))
;
return ((function (switch__26902__auto__,c__27014__auto___27181){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_27173 = [null,null,null,null,null,null,null,null];
(statearr_27173[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_27173[(1)] = (1));

return statearr_27173;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_27153){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27174){if((e27174 instanceof Object)){
var ex__26906__auto__ = e27174;
var statearr_27175_27196 = state_27153;
(statearr_27175_27196[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27197 = state_27153;
state_27153 = G__27197;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_27153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_27153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___27181))
})();
var state__27016__auto__ = (function (){var statearr_27176 = f__27015__auto__.call(null);
(statearr_27176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27181);

return statearr_27176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___27181))
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
return (function (p__27381){
var vec__27382 = p__27381;
var v = cljs.core.nth.call(null,vec__27382,(0),null);
var p = cljs.core.nth.call(null,vec__27382,(1),null);
var job = vec__27382;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27014__auto___27564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (1))){
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27387__$1,(2),res,v);
} else {
if((state_val_27388 === (2))){
var inst_27384 = (state_27387[(2)]);
var inst_27385 = cljs.core.async.close_BANG_.call(null,res);
var state_27387__$1 = (function (){var statearr_27389 = state_27387;
(statearr_27389[(7)] = inst_27384);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
return null;
}
}
});})(c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results))
;
return ((function (switch__26902__auto__,c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1 = (function (state_27387){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__26906__auto__ = e27394;
var statearr_27395_27565 = state_27387;
(statearr_27395_27565[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27566 = state_27387;
state_27387 = G__27566;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results))
})();
var state__27016__auto__ = (function (){var statearr_27396 = f__27015__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27564);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___27564,res,vec__27382,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27397){
var vec__27398 = p__27397;
var v = cljs.core.nth.call(null,vec__27398,(0),null);
var p = cljs.core.nth.call(null,vec__27398,(1),null);
var job = vec__27398;
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
var n__22579__auto___27567 = n;
var __27568 = (0);
while(true){
if((__27568 < n__22579__auto___27567)){
var G__27399_27569 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27399_27569) {
case "compute":
var c__27014__auto___27571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27568,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (__27568,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function (state_27412){
var state_val_27413 = (state_27412[(1)]);
if((state_val_27413 === (1))){
var state_27412__$1 = state_27412;
var statearr_27414_27572 = state_27412__$1;
(statearr_27414_27572[(2)] = null);

(statearr_27414_27572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (2))){
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27412__$1,(4),jobs);
} else {
if((state_val_27413 === (3))){
var inst_27410 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27412__$1,inst_27410);
} else {
if((state_val_27413 === (4))){
var inst_27402 = (state_27412[(2)]);
var inst_27403 = process.call(null,inst_27402);
var state_27412__$1 = state_27412;
if(cljs.core.truth_(inst_27403)){
var statearr_27415_27573 = state_27412__$1;
(statearr_27415_27573[(1)] = (5));

} else {
var statearr_27416_27574 = state_27412__$1;
(statearr_27416_27574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (5))){
var state_27412__$1 = state_27412;
var statearr_27417_27575 = state_27412__$1;
(statearr_27417_27575[(2)] = null);

(statearr_27417_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (6))){
var state_27412__$1 = state_27412;
var statearr_27418_27576 = state_27412__$1;
(statearr_27418_27576[(2)] = null);

(statearr_27418_27576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27413 === (7))){
var inst_27408 = (state_27412[(2)]);
var state_27412__$1 = state_27412;
var statearr_27419_27577 = state_27412__$1;
(statearr_27419_27577[(2)] = inst_27408);

(statearr_27419_27577[(1)] = (3));


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
});})(__27568,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
;
return ((function (__27568,switch__26902__auto__,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_27423 = [null,null,null,null,null,null,null];
(statearr_27423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__);

(statearr_27423[(1)] = (1));

return statearr_27423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1 = (function (state_27412){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27424){if((e27424 instanceof Object)){
var ex__26906__auto__ = e27424;
var statearr_27425_27578 = state_27412;
(statearr_27425_27578[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27579 = state_27412;
state_27412 = G__27579;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = function(state_27412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1.call(this,state_27412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__;
})()
;})(__27568,switch__26902__auto__,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
})();
var state__27016__auto__ = (function (){var statearr_27426 = f__27015__auto__.call(null);
(statearr_27426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27571);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(__27568,c__27014__auto___27571,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
);


break;
case "async":
var c__27014__auto___27580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27568,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (__27568,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function (state_27439){
var state_val_27440 = (state_27439[(1)]);
if((state_val_27440 === (1))){
var state_27439__$1 = state_27439;
var statearr_27441_27581 = state_27439__$1;
(statearr_27441_27581[(2)] = null);

(statearr_27441_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (2))){
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27439__$1,(4),jobs);
} else {
if((state_val_27440 === (3))){
var inst_27437 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27439__$1,inst_27437);
} else {
if((state_val_27440 === (4))){
var inst_27429 = (state_27439[(2)]);
var inst_27430 = async.call(null,inst_27429);
var state_27439__$1 = state_27439;
if(cljs.core.truth_(inst_27430)){
var statearr_27442_27582 = state_27439__$1;
(statearr_27442_27582[(1)] = (5));

} else {
var statearr_27443_27583 = state_27439__$1;
(statearr_27443_27583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (5))){
var state_27439__$1 = state_27439;
var statearr_27444_27584 = state_27439__$1;
(statearr_27444_27584[(2)] = null);

(statearr_27444_27584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (6))){
var state_27439__$1 = state_27439;
var statearr_27445_27585 = state_27439__$1;
(statearr_27445_27585[(2)] = null);

(statearr_27445_27585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (7))){
var inst_27435 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27446_27586 = state_27439__$1;
(statearr_27446_27586[(2)] = inst_27435);

(statearr_27446_27586[(1)] = (3));


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
});})(__27568,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
;
return ((function (__27568,switch__26902__auto__,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_27450 = [null,null,null,null,null,null,null];
(statearr_27450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__);

(statearr_27450[(1)] = (1));

return statearr_27450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1 = (function (state_27439){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27451){if((e27451 instanceof Object)){
var ex__26906__auto__ = e27451;
var statearr_27452_27587 = state_27439;
(statearr_27452_27587[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27588 = state_27439;
state_27439 = G__27588;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = function(state_27439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1.call(this,state_27439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__;
})()
;})(__27568,switch__26902__auto__,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
})();
var state__27016__auto__ = (function (){var statearr_27453 = f__27015__auto__.call(null);
(statearr_27453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27580);

return statearr_27453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(__27568,c__27014__auto___27580,G__27399_27569,n__22579__auto___27567,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27589 = (__27568 + (1));
__27568 = G__27589;
continue;
} else {
}
break;
}

var c__27014__auto___27590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___27590,jobs,results,process,async){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___27590,jobs,results,process,async){
return (function (state_27475){
var state_val_27476 = (state_27475[(1)]);
if((state_val_27476 === (1))){
var state_27475__$1 = state_27475;
var statearr_27477_27591 = state_27475__$1;
(statearr_27477_27591[(2)] = null);

(statearr_27477_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (2))){
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27475__$1,(4),from);
} else {
if((state_val_27476 === (3))){
var inst_27473 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27475__$1,inst_27473);
} else {
if((state_val_27476 === (4))){
var inst_27456 = (state_27475[(7)]);
var inst_27456__$1 = (state_27475[(2)]);
var inst_27457 = (inst_27456__$1 == null);
var state_27475__$1 = (function (){var statearr_27478 = state_27475;
(statearr_27478[(7)] = inst_27456__$1);

return statearr_27478;
})();
if(cljs.core.truth_(inst_27457)){
var statearr_27479_27592 = state_27475__$1;
(statearr_27479_27592[(1)] = (5));

} else {
var statearr_27480_27593 = state_27475__$1;
(statearr_27480_27593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (5))){
var inst_27459 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27475__$1 = state_27475;
var statearr_27481_27594 = state_27475__$1;
(statearr_27481_27594[(2)] = inst_27459);

(statearr_27481_27594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (6))){
var inst_27456 = (state_27475[(7)]);
var inst_27461 = (state_27475[(8)]);
var inst_27461__$1 = cljs.core.async.chan.call(null,(1));
var inst_27462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27463 = [inst_27456,inst_27461__$1];
var inst_27464 = (new cljs.core.PersistentVector(null,2,(5),inst_27462,inst_27463,null));
var state_27475__$1 = (function (){var statearr_27482 = state_27475;
(statearr_27482[(8)] = inst_27461__$1);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27475__$1,(8),jobs,inst_27464);
} else {
if((state_val_27476 === (7))){
var inst_27471 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27483_27595 = state_27475__$1;
(statearr_27483_27595[(2)] = inst_27471);

(statearr_27483_27595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (8))){
var inst_27461 = (state_27475[(8)]);
var inst_27466 = (state_27475[(2)]);
var state_27475__$1 = (function (){var statearr_27484 = state_27475;
(statearr_27484[(9)] = inst_27466);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27475__$1,(9),results,inst_27461);
} else {
if((state_val_27476 === (9))){
var inst_27468 = (state_27475[(2)]);
var state_27475__$1 = (function (){var statearr_27485 = state_27475;
(statearr_27485[(10)] = inst_27468);

return statearr_27485;
})();
var statearr_27486_27596 = state_27475__$1;
(statearr_27486_27596[(2)] = null);

(statearr_27486_27596[(1)] = (2));


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
});})(c__27014__auto___27590,jobs,results,process,async))
;
return ((function (switch__26902__auto__,c__27014__auto___27590,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1 = (function (state_27475){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__26906__auto__ = e27491;
var statearr_27492_27597 = state_27475;
(statearr_27492_27597[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27598 = state_27475;
state_27475 = G__27598;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = function(state_27475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1.call(this,state_27475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___27590,jobs,results,process,async))
})();
var state__27016__auto__ = (function (){var statearr_27493 = f__27015__auto__.call(null);
(statearr_27493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27590);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___27590,jobs,results,process,async))
);


var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__,jobs,results,process,async){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__,jobs,results,process,async){
return (function (state_27531){
var state_val_27532 = (state_27531[(1)]);
if((state_val_27532 === (7))){
var inst_27527 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27533_27599 = state_27531__$1;
(statearr_27533_27599[(2)] = inst_27527);

(statearr_27533_27599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (20))){
var state_27531__$1 = state_27531;
var statearr_27534_27600 = state_27531__$1;
(statearr_27534_27600[(2)] = null);

(statearr_27534_27600[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (1))){
var state_27531__$1 = state_27531;
var statearr_27535_27601 = state_27531__$1;
(statearr_27535_27601[(2)] = null);

(statearr_27535_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (4))){
var inst_27496 = (state_27531[(7)]);
var inst_27496__$1 = (state_27531[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var state_27531__$1 = (function (){var statearr_27536 = state_27531;
(statearr_27536[(7)] = inst_27496__$1);

return statearr_27536;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27537_27602 = state_27531__$1;
(statearr_27537_27602[(1)] = (5));

} else {
var statearr_27538_27603 = state_27531__$1;
(statearr_27538_27603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (15))){
var inst_27509 = (state_27531[(8)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27531__$1,(18),to,inst_27509);
} else {
if((state_val_27532 === (21))){
var inst_27522 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27539_27604 = state_27531__$1;
(statearr_27539_27604[(2)] = inst_27522);

(statearr_27539_27604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (13))){
var inst_27524 = (state_27531[(2)]);
var state_27531__$1 = (function (){var statearr_27540 = state_27531;
(statearr_27540[(9)] = inst_27524);

return statearr_27540;
})();
var statearr_27541_27605 = state_27531__$1;
(statearr_27541_27605[(2)] = null);

(statearr_27541_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (6))){
var inst_27496 = (state_27531[(7)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27531__$1,(11),inst_27496);
} else {
if((state_val_27532 === (17))){
var inst_27517 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
if(cljs.core.truth_(inst_27517)){
var statearr_27542_27606 = state_27531__$1;
(statearr_27542_27606[(1)] = (19));

} else {
var statearr_27543_27607 = state_27531__$1;
(statearr_27543_27607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (3))){
var inst_27529 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27531__$1,inst_27529);
} else {
if((state_val_27532 === (12))){
var inst_27506 = (state_27531[(10)]);
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27531__$1,(14),inst_27506);
} else {
if((state_val_27532 === (2))){
var state_27531__$1 = state_27531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27531__$1,(4),results);
} else {
if((state_val_27532 === (19))){
var state_27531__$1 = state_27531;
var statearr_27544_27608 = state_27531__$1;
(statearr_27544_27608[(2)] = null);

(statearr_27544_27608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (11))){
var inst_27506 = (state_27531[(2)]);
var state_27531__$1 = (function (){var statearr_27545 = state_27531;
(statearr_27545[(10)] = inst_27506);

return statearr_27545;
})();
var statearr_27546_27609 = state_27531__$1;
(statearr_27546_27609[(2)] = null);

(statearr_27546_27609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (9))){
var state_27531__$1 = state_27531;
var statearr_27547_27610 = state_27531__$1;
(statearr_27547_27610[(2)] = null);

(statearr_27547_27610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (5))){
var state_27531__$1 = state_27531;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27548_27611 = state_27531__$1;
(statearr_27548_27611[(1)] = (8));

} else {
var statearr_27549_27612 = state_27531__$1;
(statearr_27549_27612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (14))){
var inst_27511 = (state_27531[(11)]);
var inst_27509 = (state_27531[(8)]);
var inst_27509__$1 = (state_27531[(2)]);
var inst_27510 = (inst_27509__$1 == null);
var inst_27511__$1 = cljs.core.not.call(null,inst_27510);
var state_27531__$1 = (function (){var statearr_27550 = state_27531;
(statearr_27550[(11)] = inst_27511__$1);

(statearr_27550[(8)] = inst_27509__$1);

return statearr_27550;
})();
if(inst_27511__$1){
var statearr_27551_27613 = state_27531__$1;
(statearr_27551_27613[(1)] = (15));

} else {
var statearr_27552_27614 = state_27531__$1;
(statearr_27552_27614[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (16))){
var inst_27511 = (state_27531[(11)]);
var state_27531__$1 = state_27531;
var statearr_27553_27615 = state_27531__$1;
(statearr_27553_27615[(2)] = inst_27511);

(statearr_27553_27615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (10))){
var inst_27503 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27554_27616 = state_27531__$1;
(statearr_27554_27616[(2)] = inst_27503);

(statearr_27554_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (18))){
var inst_27514 = (state_27531[(2)]);
var state_27531__$1 = state_27531;
var statearr_27555_27617 = state_27531__$1;
(statearr_27555_27617[(2)] = inst_27514);

(statearr_27555_27617[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27532 === (8))){
var inst_27500 = cljs.core.async.close_BANG_.call(null,to);
var state_27531__$1 = state_27531;
var statearr_27556_27618 = state_27531__$1;
(statearr_27556_27618[(2)] = inst_27500);

(statearr_27556_27618[(1)] = (10));


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
});})(c__27014__auto__,jobs,results,process,async))
;
return ((function (switch__26902__auto__,c__27014__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_27560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__);

(statearr_27560[(1)] = (1));

return statearr_27560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1 = (function (state_27531){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27561){if((e27561 instanceof Object)){
var ex__26906__auto__ = e27561;
var statearr_27562_27619 = state_27531;
(statearr_27562_27619[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27620 = state_27531;
state_27531 = G__27620;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__ = function(state_27531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1.call(this,state_27531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__,jobs,results,process,async))
})();
var state__27016__auto__ = (function (){var statearr_27563 = f__27015__auto__.call(null);
(statearr_27563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__,jobs,results,process,async))
);

return c__27014__auto__;
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
var args27621 = [];
var len__22734__auto___27624 = arguments.length;
var i__22735__auto___27625 = (0);
while(true){
if((i__22735__auto___27625 < len__22734__auto___27624)){
args27621.push((arguments[i__22735__auto___27625]));

var G__27626 = (i__22735__auto___27625 + (1));
i__22735__auto___27625 = G__27626;
continue;
} else {
}
break;
}

var G__27623 = args27621.length;
switch (G__27623) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27621.length)].join('')));

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
var args27628 = [];
var len__22734__auto___27631 = arguments.length;
var i__22735__auto___27632 = (0);
while(true){
if((i__22735__auto___27632 < len__22734__auto___27631)){
args27628.push((arguments[i__22735__auto___27632]));

var G__27633 = (i__22735__auto___27632 + (1));
i__22735__auto___27632 = G__27633;
continue;
} else {
}
break;
}

var G__27630 = args27628.length;
switch (G__27630) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27628.length)].join('')));

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
var args27635 = [];
var len__22734__auto___27688 = arguments.length;
var i__22735__auto___27689 = (0);
while(true){
if((i__22735__auto___27689 < len__22734__auto___27688)){
args27635.push((arguments[i__22735__auto___27689]));

var G__27690 = (i__22735__auto___27689 + (1));
i__22735__auto___27689 = G__27690;
continue;
} else {
}
break;
}

var G__27637 = args27635.length;
switch (G__27637) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27635.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27014__auto___27692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___27692,tc,fc){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___27692,tc,fc){
return (function (state_27663){
var state_val_27664 = (state_27663[(1)]);
if((state_val_27664 === (7))){
var inst_27659 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
var statearr_27665_27693 = state_27663__$1;
(statearr_27665_27693[(2)] = inst_27659);

(statearr_27665_27693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (1))){
var state_27663__$1 = state_27663;
var statearr_27666_27694 = state_27663__$1;
(statearr_27666_27694[(2)] = null);

(statearr_27666_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (4))){
var inst_27640 = (state_27663[(7)]);
var inst_27640__$1 = (state_27663[(2)]);
var inst_27641 = (inst_27640__$1 == null);
var state_27663__$1 = (function (){var statearr_27667 = state_27663;
(statearr_27667[(7)] = inst_27640__$1);

return statearr_27667;
})();
if(cljs.core.truth_(inst_27641)){
var statearr_27668_27695 = state_27663__$1;
(statearr_27668_27695[(1)] = (5));

} else {
var statearr_27669_27696 = state_27663__$1;
(statearr_27669_27696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (13))){
var state_27663__$1 = state_27663;
var statearr_27670_27697 = state_27663__$1;
(statearr_27670_27697[(2)] = null);

(statearr_27670_27697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (6))){
var inst_27640 = (state_27663[(7)]);
var inst_27646 = p.call(null,inst_27640);
var state_27663__$1 = state_27663;
if(cljs.core.truth_(inst_27646)){
var statearr_27671_27698 = state_27663__$1;
(statearr_27671_27698[(1)] = (9));

} else {
var statearr_27672_27699 = state_27663__$1;
(statearr_27672_27699[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (3))){
var inst_27661 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27663__$1,inst_27661);
} else {
if((state_val_27664 === (12))){
var state_27663__$1 = state_27663;
var statearr_27673_27700 = state_27663__$1;
(statearr_27673_27700[(2)] = null);

(statearr_27673_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (2))){
var state_27663__$1 = state_27663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27663__$1,(4),ch);
} else {
if((state_val_27664 === (11))){
var inst_27640 = (state_27663[(7)]);
var inst_27650 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27663__$1,(8),inst_27650,inst_27640);
} else {
if((state_val_27664 === (9))){
var state_27663__$1 = state_27663;
var statearr_27674_27701 = state_27663__$1;
(statearr_27674_27701[(2)] = tc);

(statearr_27674_27701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (5))){
var inst_27643 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27644 = cljs.core.async.close_BANG_.call(null,fc);
var state_27663__$1 = (function (){var statearr_27675 = state_27663;
(statearr_27675[(8)] = inst_27643);

return statearr_27675;
})();
var statearr_27676_27702 = state_27663__$1;
(statearr_27676_27702[(2)] = inst_27644);

(statearr_27676_27702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (14))){
var inst_27657 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
var statearr_27677_27703 = state_27663__$1;
(statearr_27677_27703[(2)] = inst_27657);

(statearr_27677_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (10))){
var state_27663__$1 = state_27663;
var statearr_27678_27704 = state_27663__$1;
(statearr_27678_27704[(2)] = fc);

(statearr_27678_27704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27664 === (8))){
var inst_27652 = (state_27663[(2)]);
var state_27663__$1 = state_27663;
if(cljs.core.truth_(inst_27652)){
var statearr_27679_27705 = state_27663__$1;
(statearr_27679_27705[(1)] = (12));

} else {
var statearr_27680_27706 = state_27663__$1;
(statearr_27680_27706[(1)] = (13));

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
});})(c__27014__auto___27692,tc,fc))
;
return ((function (switch__26902__auto__,c__27014__auto___27692,tc,fc){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_27684 = [null,null,null,null,null,null,null,null,null];
(statearr_27684[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_27684[(1)] = (1));

return statearr_27684;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_27663){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27685){if((e27685 instanceof Object)){
var ex__26906__auto__ = e27685;
var statearr_27686_27707 = state_27663;
(statearr_27686_27707[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27708 = state_27663;
state_27663 = G__27708;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_27663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_27663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___27692,tc,fc))
})();
var state__27016__auto__ = (function (){var statearr_27687 = f__27015__auto__.call(null);
(statearr_27687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___27692);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___27692,tc,fc))
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
var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__){
return (function (state_27772){
var state_val_27773 = (state_27772[(1)]);
if((state_val_27773 === (7))){
var inst_27768 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27774_27795 = state_27772__$1;
(statearr_27774_27795[(2)] = inst_27768);

(statearr_27774_27795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (1))){
var inst_27752 = init;
var state_27772__$1 = (function (){var statearr_27775 = state_27772;
(statearr_27775[(7)] = inst_27752);

return statearr_27775;
})();
var statearr_27776_27796 = state_27772__$1;
(statearr_27776_27796[(2)] = null);

(statearr_27776_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (4))){
var inst_27755 = (state_27772[(8)]);
var inst_27755__$1 = (state_27772[(2)]);
var inst_27756 = (inst_27755__$1 == null);
var state_27772__$1 = (function (){var statearr_27777 = state_27772;
(statearr_27777[(8)] = inst_27755__$1);

return statearr_27777;
})();
if(cljs.core.truth_(inst_27756)){
var statearr_27778_27797 = state_27772__$1;
(statearr_27778_27797[(1)] = (5));

} else {
var statearr_27779_27798 = state_27772__$1;
(statearr_27779_27798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (6))){
var inst_27755 = (state_27772[(8)]);
var inst_27759 = (state_27772[(9)]);
var inst_27752 = (state_27772[(7)]);
var inst_27759__$1 = f.call(null,inst_27752,inst_27755);
var inst_27760 = cljs.core.reduced_QMARK_.call(null,inst_27759__$1);
var state_27772__$1 = (function (){var statearr_27780 = state_27772;
(statearr_27780[(9)] = inst_27759__$1);

return statearr_27780;
})();
if(inst_27760){
var statearr_27781_27799 = state_27772__$1;
(statearr_27781_27799[(1)] = (8));

} else {
var statearr_27782_27800 = state_27772__$1;
(statearr_27782_27800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (3))){
var inst_27770 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27772__$1,inst_27770);
} else {
if((state_val_27773 === (2))){
var state_27772__$1 = state_27772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27772__$1,(4),ch);
} else {
if((state_val_27773 === (9))){
var inst_27759 = (state_27772[(9)]);
var inst_27752 = inst_27759;
var state_27772__$1 = (function (){var statearr_27783 = state_27772;
(statearr_27783[(7)] = inst_27752);

return statearr_27783;
})();
var statearr_27784_27801 = state_27772__$1;
(statearr_27784_27801[(2)] = null);

(statearr_27784_27801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (5))){
var inst_27752 = (state_27772[(7)]);
var state_27772__$1 = state_27772;
var statearr_27785_27802 = state_27772__$1;
(statearr_27785_27802[(2)] = inst_27752);

(statearr_27785_27802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (10))){
var inst_27766 = (state_27772[(2)]);
var state_27772__$1 = state_27772;
var statearr_27786_27803 = state_27772__$1;
(statearr_27786_27803[(2)] = inst_27766);

(statearr_27786_27803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27773 === (8))){
var inst_27759 = (state_27772[(9)]);
var inst_27762 = cljs.core.deref.call(null,inst_27759);
var state_27772__$1 = state_27772;
var statearr_27787_27804 = state_27772__$1;
(statearr_27787_27804[(2)] = inst_27762);

(statearr_27787_27804[(1)] = (10));


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
});})(c__27014__auto__))
;
return ((function (switch__26902__auto__,c__27014__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26903__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26903__auto____0 = (function (){
var statearr_27791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27791[(0)] = cljs$core$async$reduce_$_state_machine__26903__auto__);

(statearr_27791[(1)] = (1));

return statearr_27791;
});
var cljs$core$async$reduce_$_state_machine__26903__auto____1 = (function (state_27772){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27792){if((e27792 instanceof Object)){
var ex__26906__auto__ = e27792;
var statearr_27793_27805 = state_27772;
(statearr_27793_27805[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27806 = state_27772;
state_27772 = G__27806;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26903__auto__ = function(state_27772){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26903__auto____1.call(this,state_27772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26903__auto____0;
cljs$core$async$reduce_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26903__auto____1;
return cljs$core$async$reduce_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__))
})();
var state__27016__auto__ = (function (){var statearr_27794 = f__27015__auto__.call(null);
(statearr_27794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_27794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__))
);

return c__27014__auto__;
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
var args27807 = [];
var len__22734__auto___27859 = arguments.length;
var i__22735__auto___27860 = (0);
while(true){
if((i__22735__auto___27860 < len__22734__auto___27859)){
args27807.push((arguments[i__22735__auto___27860]));

var G__27861 = (i__22735__auto___27860 + (1));
i__22735__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var G__27809 = args27807.length;
switch (G__27809) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27807.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__){
return (function (state_27834){
var state_val_27835 = (state_27834[(1)]);
if((state_val_27835 === (7))){
var inst_27816 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27836_27863 = state_27834__$1;
(statearr_27836_27863[(2)] = inst_27816);

(statearr_27836_27863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (1))){
var inst_27810 = cljs.core.seq.call(null,coll);
var inst_27811 = inst_27810;
var state_27834__$1 = (function (){var statearr_27837 = state_27834;
(statearr_27837[(7)] = inst_27811);

return statearr_27837;
})();
var statearr_27838_27864 = state_27834__$1;
(statearr_27838_27864[(2)] = null);

(statearr_27838_27864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (4))){
var inst_27811 = (state_27834[(7)]);
var inst_27814 = cljs.core.first.call(null,inst_27811);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27834__$1,(7),ch,inst_27814);
} else {
if((state_val_27835 === (13))){
var inst_27828 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27839_27865 = state_27834__$1;
(statearr_27839_27865[(2)] = inst_27828);

(statearr_27839_27865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (6))){
var inst_27819 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
if(cljs.core.truth_(inst_27819)){
var statearr_27840_27866 = state_27834__$1;
(statearr_27840_27866[(1)] = (8));

} else {
var statearr_27841_27867 = state_27834__$1;
(statearr_27841_27867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (3))){
var inst_27832 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27834__$1,inst_27832);
} else {
if((state_val_27835 === (12))){
var state_27834__$1 = state_27834;
var statearr_27842_27868 = state_27834__$1;
(statearr_27842_27868[(2)] = null);

(statearr_27842_27868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (2))){
var inst_27811 = (state_27834[(7)]);
var state_27834__$1 = state_27834;
if(cljs.core.truth_(inst_27811)){
var statearr_27843_27869 = state_27834__$1;
(statearr_27843_27869[(1)] = (4));

} else {
var statearr_27844_27870 = state_27834__$1;
(statearr_27844_27870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (11))){
var inst_27825 = cljs.core.async.close_BANG_.call(null,ch);
var state_27834__$1 = state_27834;
var statearr_27845_27871 = state_27834__$1;
(statearr_27845_27871[(2)] = inst_27825);

(statearr_27845_27871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (9))){
var state_27834__$1 = state_27834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27846_27872 = state_27834__$1;
(statearr_27846_27872[(1)] = (11));

} else {
var statearr_27847_27873 = state_27834__$1;
(statearr_27847_27873[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (5))){
var inst_27811 = (state_27834[(7)]);
var state_27834__$1 = state_27834;
var statearr_27848_27874 = state_27834__$1;
(statearr_27848_27874[(2)] = inst_27811);

(statearr_27848_27874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (10))){
var inst_27830 = (state_27834[(2)]);
var state_27834__$1 = state_27834;
var statearr_27849_27875 = state_27834__$1;
(statearr_27849_27875[(2)] = inst_27830);

(statearr_27849_27875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27835 === (8))){
var inst_27811 = (state_27834[(7)]);
var inst_27821 = cljs.core.next.call(null,inst_27811);
var inst_27811__$1 = inst_27821;
var state_27834__$1 = (function (){var statearr_27850 = state_27834;
(statearr_27850[(7)] = inst_27811__$1);

return statearr_27850;
})();
var statearr_27851_27876 = state_27834__$1;
(statearr_27851_27876[(2)] = null);

(statearr_27851_27876[(1)] = (2));


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
});})(c__27014__auto__))
;
return ((function (switch__26902__auto__,c__27014__auto__){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_27855 = [null,null,null,null,null,null,null,null];
(statearr_27855[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_27855[(1)] = (1));

return statearr_27855;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_27834){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_27834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e27856){if((e27856 instanceof Object)){
var ex__26906__auto__ = e27856;
var statearr_27857_27877 = state_27834;
(statearr_27857_27877[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27834;
state_27834 = G__27878;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_27834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_27834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__))
})();
var state__27016__auto__ = (function (){var statearr_27858 = f__27015__auto__.call(null);
(statearr_27858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__))
);

return c__27014__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28100 = (function (mult,ch,cs,meta28101){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28101 = meta28101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28102,meta28101__$1){
var self__ = this;
var _28102__$1 = this;
return (new cljs.core.async.t_cljs$core$async28100(self__.mult,self__.ch,self__.cs,meta28101__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28102){
var self__ = this;
var _28102__$1 = this;
return self__.meta28101;
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28101","meta28101",-1975886889,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28100";

cljs.core.async.t_cljs$core$async28100.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async28100");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28100 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28100(mult__$1,ch__$1,cs__$1,meta28101){
return (new cljs.core.async.t_cljs$core$async28100(mult__$1,ch__$1,cs__$1,meta28101));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28100(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27014__auto___28321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___28321,cs,m,dchan,dctr,done){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___28321,cs,m,dchan,dctr,done){
return (function (state_28233){
var state_val_28234 = (state_28233[(1)]);
if((state_val_28234 === (7))){
var inst_28229 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28235_28322 = state_28233__$1;
(statearr_28235_28322[(2)] = inst_28229);

(statearr_28235_28322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (20))){
var inst_28134 = (state_28233[(7)]);
var inst_28144 = cljs.core.first.call(null,inst_28134);
var inst_28145 = cljs.core.nth.call(null,inst_28144,(0),null);
var inst_28146 = cljs.core.nth.call(null,inst_28144,(1),null);
var state_28233__$1 = (function (){var statearr_28236 = state_28233;
(statearr_28236[(8)] = inst_28145);

return statearr_28236;
})();
if(cljs.core.truth_(inst_28146)){
var statearr_28237_28323 = state_28233__$1;
(statearr_28237_28323[(1)] = (22));

} else {
var statearr_28238_28324 = state_28233__$1;
(statearr_28238_28324[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (27))){
var inst_28181 = (state_28233[(9)]);
var inst_28176 = (state_28233[(10)]);
var inst_28174 = (state_28233[(11)]);
var inst_28105 = (state_28233[(12)]);
var inst_28181__$1 = cljs.core._nth.call(null,inst_28174,inst_28176);
var inst_28182 = cljs.core.async.put_BANG_.call(null,inst_28181__$1,inst_28105,done);
var state_28233__$1 = (function (){var statearr_28239 = state_28233;
(statearr_28239[(9)] = inst_28181__$1);

return statearr_28239;
})();
if(cljs.core.truth_(inst_28182)){
var statearr_28240_28325 = state_28233__$1;
(statearr_28240_28325[(1)] = (30));

} else {
var statearr_28241_28326 = state_28233__$1;
(statearr_28241_28326[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (1))){
var state_28233__$1 = state_28233;
var statearr_28242_28327 = state_28233__$1;
(statearr_28242_28327[(2)] = null);

(statearr_28242_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (24))){
var inst_28134 = (state_28233[(7)]);
var inst_28151 = (state_28233[(2)]);
var inst_28152 = cljs.core.next.call(null,inst_28134);
var inst_28114 = inst_28152;
var inst_28115 = null;
var inst_28116 = (0);
var inst_28117 = (0);
var state_28233__$1 = (function (){var statearr_28243 = state_28233;
(statearr_28243[(13)] = inst_28151);

(statearr_28243[(14)] = inst_28115);

(statearr_28243[(15)] = inst_28117);

(statearr_28243[(16)] = inst_28114);

(statearr_28243[(17)] = inst_28116);

return statearr_28243;
})();
var statearr_28244_28328 = state_28233__$1;
(statearr_28244_28328[(2)] = null);

(statearr_28244_28328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (39))){
var state_28233__$1 = state_28233;
var statearr_28248_28329 = state_28233__$1;
(statearr_28248_28329[(2)] = null);

(statearr_28248_28329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (4))){
var inst_28105 = (state_28233[(12)]);
var inst_28105__$1 = (state_28233[(2)]);
var inst_28106 = (inst_28105__$1 == null);
var state_28233__$1 = (function (){var statearr_28249 = state_28233;
(statearr_28249[(12)] = inst_28105__$1);

return statearr_28249;
})();
if(cljs.core.truth_(inst_28106)){
var statearr_28250_28330 = state_28233__$1;
(statearr_28250_28330[(1)] = (5));

} else {
var statearr_28251_28331 = state_28233__$1;
(statearr_28251_28331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (15))){
var inst_28115 = (state_28233[(14)]);
var inst_28117 = (state_28233[(15)]);
var inst_28114 = (state_28233[(16)]);
var inst_28116 = (state_28233[(17)]);
var inst_28130 = (state_28233[(2)]);
var inst_28131 = (inst_28117 + (1));
var tmp28245 = inst_28115;
var tmp28246 = inst_28114;
var tmp28247 = inst_28116;
var inst_28114__$1 = tmp28246;
var inst_28115__$1 = tmp28245;
var inst_28116__$1 = tmp28247;
var inst_28117__$1 = inst_28131;
var state_28233__$1 = (function (){var statearr_28252 = state_28233;
(statearr_28252[(18)] = inst_28130);

(statearr_28252[(14)] = inst_28115__$1);

(statearr_28252[(15)] = inst_28117__$1);

(statearr_28252[(16)] = inst_28114__$1);

(statearr_28252[(17)] = inst_28116__$1);

return statearr_28252;
})();
var statearr_28253_28332 = state_28233__$1;
(statearr_28253_28332[(2)] = null);

(statearr_28253_28332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (21))){
var inst_28155 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28257_28333 = state_28233__$1;
(statearr_28257_28333[(2)] = inst_28155);

(statearr_28257_28333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (31))){
var inst_28181 = (state_28233[(9)]);
var inst_28185 = done.call(null,null);
var inst_28186 = cljs.core.async.untap_STAR_.call(null,m,inst_28181);
var state_28233__$1 = (function (){var statearr_28258 = state_28233;
(statearr_28258[(19)] = inst_28185);

return statearr_28258;
})();
var statearr_28259_28334 = state_28233__$1;
(statearr_28259_28334[(2)] = inst_28186);

(statearr_28259_28334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (32))){
var inst_28176 = (state_28233[(10)]);
var inst_28175 = (state_28233[(20)]);
var inst_28173 = (state_28233[(21)]);
var inst_28174 = (state_28233[(11)]);
var inst_28188 = (state_28233[(2)]);
var inst_28189 = (inst_28176 + (1));
var tmp28254 = inst_28175;
var tmp28255 = inst_28173;
var tmp28256 = inst_28174;
var inst_28173__$1 = tmp28255;
var inst_28174__$1 = tmp28256;
var inst_28175__$1 = tmp28254;
var inst_28176__$1 = inst_28189;
var state_28233__$1 = (function (){var statearr_28260 = state_28233;
(statearr_28260[(10)] = inst_28176__$1);

(statearr_28260[(22)] = inst_28188);

(statearr_28260[(20)] = inst_28175__$1);

(statearr_28260[(21)] = inst_28173__$1);

(statearr_28260[(11)] = inst_28174__$1);

return statearr_28260;
})();
var statearr_28261_28335 = state_28233__$1;
(statearr_28261_28335[(2)] = null);

(statearr_28261_28335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (40))){
var inst_28201 = (state_28233[(23)]);
var inst_28205 = done.call(null,null);
var inst_28206 = cljs.core.async.untap_STAR_.call(null,m,inst_28201);
var state_28233__$1 = (function (){var statearr_28262 = state_28233;
(statearr_28262[(24)] = inst_28205);

return statearr_28262;
})();
var statearr_28263_28336 = state_28233__$1;
(statearr_28263_28336[(2)] = inst_28206);

(statearr_28263_28336[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (33))){
var inst_28192 = (state_28233[(25)]);
var inst_28194 = cljs.core.chunked_seq_QMARK_.call(null,inst_28192);
var state_28233__$1 = state_28233;
if(inst_28194){
var statearr_28264_28337 = state_28233__$1;
(statearr_28264_28337[(1)] = (36));

} else {
var statearr_28265_28338 = state_28233__$1;
(statearr_28265_28338[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (13))){
var inst_28124 = (state_28233[(26)]);
var inst_28127 = cljs.core.async.close_BANG_.call(null,inst_28124);
var state_28233__$1 = state_28233;
var statearr_28266_28339 = state_28233__$1;
(statearr_28266_28339[(2)] = inst_28127);

(statearr_28266_28339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (22))){
var inst_28145 = (state_28233[(8)]);
var inst_28148 = cljs.core.async.close_BANG_.call(null,inst_28145);
var state_28233__$1 = state_28233;
var statearr_28267_28340 = state_28233__$1;
(statearr_28267_28340[(2)] = inst_28148);

(statearr_28267_28340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (36))){
var inst_28192 = (state_28233[(25)]);
var inst_28196 = cljs.core.chunk_first.call(null,inst_28192);
var inst_28197 = cljs.core.chunk_rest.call(null,inst_28192);
var inst_28198 = cljs.core.count.call(null,inst_28196);
var inst_28173 = inst_28197;
var inst_28174 = inst_28196;
var inst_28175 = inst_28198;
var inst_28176 = (0);
var state_28233__$1 = (function (){var statearr_28268 = state_28233;
(statearr_28268[(10)] = inst_28176);

(statearr_28268[(20)] = inst_28175);

(statearr_28268[(21)] = inst_28173);

(statearr_28268[(11)] = inst_28174);

return statearr_28268;
})();
var statearr_28269_28341 = state_28233__$1;
(statearr_28269_28341[(2)] = null);

(statearr_28269_28341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (41))){
var inst_28192 = (state_28233[(25)]);
var inst_28208 = (state_28233[(2)]);
var inst_28209 = cljs.core.next.call(null,inst_28192);
var inst_28173 = inst_28209;
var inst_28174 = null;
var inst_28175 = (0);
var inst_28176 = (0);
var state_28233__$1 = (function (){var statearr_28270 = state_28233;
(statearr_28270[(10)] = inst_28176);

(statearr_28270[(20)] = inst_28175);

(statearr_28270[(21)] = inst_28173);

(statearr_28270[(11)] = inst_28174);

(statearr_28270[(27)] = inst_28208);

return statearr_28270;
})();
var statearr_28271_28342 = state_28233__$1;
(statearr_28271_28342[(2)] = null);

(statearr_28271_28342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (43))){
var state_28233__$1 = state_28233;
var statearr_28272_28343 = state_28233__$1;
(statearr_28272_28343[(2)] = null);

(statearr_28272_28343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (29))){
var inst_28217 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28273_28344 = state_28233__$1;
(statearr_28273_28344[(2)] = inst_28217);

(statearr_28273_28344[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (44))){
var inst_28226 = (state_28233[(2)]);
var state_28233__$1 = (function (){var statearr_28274 = state_28233;
(statearr_28274[(28)] = inst_28226);

return statearr_28274;
})();
var statearr_28275_28345 = state_28233__$1;
(statearr_28275_28345[(2)] = null);

(statearr_28275_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (6))){
var inst_28165 = (state_28233[(29)]);
var inst_28164 = cljs.core.deref.call(null,cs);
var inst_28165__$1 = cljs.core.keys.call(null,inst_28164);
var inst_28166 = cljs.core.count.call(null,inst_28165__$1);
var inst_28167 = cljs.core.reset_BANG_.call(null,dctr,inst_28166);
var inst_28172 = cljs.core.seq.call(null,inst_28165__$1);
var inst_28173 = inst_28172;
var inst_28174 = null;
var inst_28175 = (0);
var inst_28176 = (0);
var state_28233__$1 = (function (){var statearr_28276 = state_28233;
(statearr_28276[(10)] = inst_28176);

(statearr_28276[(29)] = inst_28165__$1);

(statearr_28276[(20)] = inst_28175);

(statearr_28276[(21)] = inst_28173);

(statearr_28276[(11)] = inst_28174);

(statearr_28276[(30)] = inst_28167);

return statearr_28276;
})();
var statearr_28277_28346 = state_28233__$1;
(statearr_28277_28346[(2)] = null);

(statearr_28277_28346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (28))){
var inst_28173 = (state_28233[(21)]);
var inst_28192 = (state_28233[(25)]);
var inst_28192__$1 = cljs.core.seq.call(null,inst_28173);
var state_28233__$1 = (function (){var statearr_28278 = state_28233;
(statearr_28278[(25)] = inst_28192__$1);

return statearr_28278;
})();
if(inst_28192__$1){
var statearr_28279_28347 = state_28233__$1;
(statearr_28279_28347[(1)] = (33));

} else {
var statearr_28280_28348 = state_28233__$1;
(statearr_28280_28348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (25))){
var inst_28176 = (state_28233[(10)]);
var inst_28175 = (state_28233[(20)]);
var inst_28178 = (inst_28176 < inst_28175);
var inst_28179 = inst_28178;
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28179)){
var statearr_28281_28349 = state_28233__$1;
(statearr_28281_28349[(1)] = (27));

} else {
var statearr_28282_28350 = state_28233__$1;
(statearr_28282_28350[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (34))){
var state_28233__$1 = state_28233;
var statearr_28283_28351 = state_28233__$1;
(statearr_28283_28351[(2)] = null);

(statearr_28283_28351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (17))){
var state_28233__$1 = state_28233;
var statearr_28284_28352 = state_28233__$1;
(statearr_28284_28352[(2)] = null);

(statearr_28284_28352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (3))){
var inst_28231 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28233__$1,inst_28231);
} else {
if((state_val_28234 === (12))){
var inst_28160 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28285_28353 = state_28233__$1;
(statearr_28285_28353[(2)] = inst_28160);

(statearr_28285_28353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (2))){
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28233__$1,(4),ch);
} else {
if((state_val_28234 === (23))){
var state_28233__$1 = state_28233;
var statearr_28286_28354 = state_28233__$1;
(statearr_28286_28354[(2)] = null);

(statearr_28286_28354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (35))){
var inst_28215 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28287_28355 = state_28233__$1;
(statearr_28287_28355[(2)] = inst_28215);

(statearr_28287_28355[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (19))){
var inst_28134 = (state_28233[(7)]);
var inst_28138 = cljs.core.chunk_first.call(null,inst_28134);
var inst_28139 = cljs.core.chunk_rest.call(null,inst_28134);
var inst_28140 = cljs.core.count.call(null,inst_28138);
var inst_28114 = inst_28139;
var inst_28115 = inst_28138;
var inst_28116 = inst_28140;
var inst_28117 = (0);
var state_28233__$1 = (function (){var statearr_28288 = state_28233;
(statearr_28288[(14)] = inst_28115);

(statearr_28288[(15)] = inst_28117);

(statearr_28288[(16)] = inst_28114);

(statearr_28288[(17)] = inst_28116);

return statearr_28288;
})();
var statearr_28289_28356 = state_28233__$1;
(statearr_28289_28356[(2)] = null);

(statearr_28289_28356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (11))){
var inst_28134 = (state_28233[(7)]);
var inst_28114 = (state_28233[(16)]);
var inst_28134__$1 = cljs.core.seq.call(null,inst_28114);
var state_28233__$1 = (function (){var statearr_28290 = state_28233;
(statearr_28290[(7)] = inst_28134__$1);

return statearr_28290;
})();
if(inst_28134__$1){
var statearr_28291_28357 = state_28233__$1;
(statearr_28291_28357[(1)] = (16));

} else {
var statearr_28292_28358 = state_28233__$1;
(statearr_28292_28358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (9))){
var inst_28162 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28293_28359 = state_28233__$1;
(statearr_28293_28359[(2)] = inst_28162);

(statearr_28293_28359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (5))){
var inst_28112 = cljs.core.deref.call(null,cs);
var inst_28113 = cljs.core.seq.call(null,inst_28112);
var inst_28114 = inst_28113;
var inst_28115 = null;
var inst_28116 = (0);
var inst_28117 = (0);
var state_28233__$1 = (function (){var statearr_28294 = state_28233;
(statearr_28294[(14)] = inst_28115);

(statearr_28294[(15)] = inst_28117);

(statearr_28294[(16)] = inst_28114);

(statearr_28294[(17)] = inst_28116);

return statearr_28294;
})();
var statearr_28295_28360 = state_28233__$1;
(statearr_28295_28360[(2)] = null);

(statearr_28295_28360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (14))){
var state_28233__$1 = state_28233;
var statearr_28296_28361 = state_28233__$1;
(statearr_28296_28361[(2)] = null);

(statearr_28296_28361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (45))){
var inst_28223 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28297_28362 = state_28233__$1;
(statearr_28297_28362[(2)] = inst_28223);

(statearr_28297_28362[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (26))){
var inst_28165 = (state_28233[(29)]);
var inst_28219 = (state_28233[(2)]);
var inst_28220 = cljs.core.seq.call(null,inst_28165);
var state_28233__$1 = (function (){var statearr_28298 = state_28233;
(statearr_28298[(31)] = inst_28219);

return statearr_28298;
})();
if(inst_28220){
var statearr_28299_28363 = state_28233__$1;
(statearr_28299_28363[(1)] = (42));

} else {
var statearr_28300_28364 = state_28233__$1;
(statearr_28300_28364[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (16))){
var inst_28134 = (state_28233[(7)]);
var inst_28136 = cljs.core.chunked_seq_QMARK_.call(null,inst_28134);
var state_28233__$1 = state_28233;
if(inst_28136){
var statearr_28301_28365 = state_28233__$1;
(statearr_28301_28365[(1)] = (19));

} else {
var statearr_28302_28366 = state_28233__$1;
(statearr_28302_28366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (38))){
var inst_28212 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28303_28367 = state_28233__$1;
(statearr_28303_28367[(2)] = inst_28212);

(statearr_28303_28367[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (30))){
var state_28233__$1 = state_28233;
var statearr_28304_28368 = state_28233__$1;
(statearr_28304_28368[(2)] = null);

(statearr_28304_28368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (10))){
var inst_28115 = (state_28233[(14)]);
var inst_28117 = (state_28233[(15)]);
var inst_28123 = cljs.core._nth.call(null,inst_28115,inst_28117);
var inst_28124 = cljs.core.nth.call(null,inst_28123,(0),null);
var inst_28125 = cljs.core.nth.call(null,inst_28123,(1),null);
var state_28233__$1 = (function (){var statearr_28305 = state_28233;
(statearr_28305[(26)] = inst_28124);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28125)){
var statearr_28306_28369 = state_28233__$1;
(statearr_28306_28369[(1)] = (13));

} else {
var statearr_28307_28370 = state_28233__$1;
(statearr_28307_28370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (18))){
var inst_28158 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28308_28371 = state_28233__$1;
(statearr_28308_28371[(2)] = inst_28158);

(statearr_28308_28371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (42))){
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28233__$1,(45),dchan);
} else {
if((state_val_28234 === (37))){
var inst_28201 = (state_28233[(23)]);
var inst_28105 = (state_28233[(12)]);
var inst_28192 = (state_28233[(25)]);
var inst_28201__$1 = cljs.core.first.call(null,inst_28192);
var inst_28202 = cljs.core.async.put_BANG_.call(null,inst_28201__$1,inst_28105,done);
var state_28233__$1 = (function (){var statearr_28309 = state_28233;
(statearr_28309[(23)] = inst_28201__$1);

return statearr_28309;
})();
if(cljs.core.truth_(inst_28202)){
var statearr_28310_28372 = state_28233__$1;
(statearr_28310_28372[(1)] = (39));

} else {
var statearr_28311_28373 = state_28233__$1;
(statearr_28311_28373[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (8))){
var inst_28117 = (state_28233[(15)]);
var inst_28116 = (state_28233[(17)]);
var inst_28119 = (inst_28117 < inst_28116);
var inst_28120 = inst_28119;
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28120)){
var statearr_28312_28374 = state_28233__$1;
(statearr_28312_28374[(1)] = (10));

} else {
var statearr_28313_28375 = state_28233__$1;
(statearr_28313_28375[(1)] = (11));

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
});})(c__27014__auto___28321,cs,m,dchan,dctr,done))
;
return ((function (switch__26902__auto__,c__27014__auto___28321,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26903__auto__ = null;
var cljs$core$async$mult_$_state_machine__26903__auto____0 = (function (){
var statearr_28317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28317[(0)] = cljs$core$async$mult_$_state_machine__26903__auto__);

(statearr_28317[(1)] = (1));

return statearr_28317;
});
var cljs$core$async$mult_$_state_machine__26903__auto____1 = (function (state_28233){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_28233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e28318){if((e28318 instanceof Object)){
var ex__26906__auto__ = e28318;
var statearr_28319_28376 = state_28233;
(statearr_28319_28376[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28377 = state_28233;
state_28233 = G__28377;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26903__auto__ = function(state_28233){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26903__auto____1.call(this,state_28233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26903__auto____0;
cljs$core$async$mult_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26903__auto____1;
return cljs$core$async$mult_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___28321,cs,m,dchan,dctr,done))
})();
var state__27016__auto__ = (function (){var statearr_28320 = f__27015__auto__.call(null);
(statearr_28320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___28321);

return statearr_28320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___28321,cs,m,dchan,dctr,done))
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
var args28378 = [];
var len__22734__auto___28381 = arguments.length;
var i__22735__auto___28382 = (0);
while(true){
if((i__22735__auto___28382 < len__22734__auto___28381)){
args28378.push((arguments[i__22735__auto___28382]));

var G__28383 = (i__22735__auto___28382 + (1));
i__22735__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var G__28380 = args28378.length;
switch (G__28380) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28378.length)].join('')));

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
var len__22734__auto___28395 = arguments.length;
var i__22735__auto___28396 = (0);
while(true){
if((i__22735__auto___28396 < len__22734__auto___28395)){
args__22741__auto__.push((arguments[i__22735__auto___28396]));

var G__28397 = (i__22735__auto___28396 + (1));
i__22735__auto___28396 = G__28397;
continue;
} else {
}
break;
}

var argseq__22742__auto__ = ((((3) < args__22741__auto__.length))?(new cljs.core.IndexedSeq(args__22741__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22742__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28389){
var map__28390 = p__28389;
var map__28390__$1 = ((((!((map__28390 == null)))?((((map__28390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28390):map__28390);
var opts = map__28390__$1;
var statearr_28392_28398 = state;
(statearr_28392_28398[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28390,map__28390__$1,opts){
return (function (val){
var statearr_28393_28399 = state;
(statearr_28393_28399[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28390,map__28390__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28394_28400 = state;
(statearr_28394_28400[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28385){
var G__28386 = cljs.core.first.call(null,seq28385);
var seq28385__$1 = cljs.core.next.call(null,seq28385);
var G__28387 = cljs.core.first.call(null,seq28385__$1);
var seq28385__$2 = cljs.core.next.call(null,seq28385__$1);
var G__28388 = cljs.core.first.call(null,seq28385__$2);
var seq28385__$3 = cljs.core.next.call(null,seq28385__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28386,G__28387,G__28388,seq28385__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28564 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28565){
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
this.meta28565 = meta28565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28566,meta28565__$1){
var self__ = this;
var _28566__$1 = this;
return (new cljs.core.async.t_cljs$core$async28564(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28565__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28566){
var self__ = this;
var _28566__$1 = this;
return self__.meta28565;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28564.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28565","meta28565",-1550310335,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28564";

cljs.core.async.t_cljs$core$async28564.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async28564");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28564 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28565){
return (new cljs.core.async.t_cljs$core$async28564(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28565));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28564(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27014__auto___28727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28664){
var state_val_28665 = (state_28664[(1)]);
if((state_val_28665 === (7))){
var inst_28582 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28666_28728 = state_28664__$1;
(statearr_28666_28728[(2)] = inst_28582);

(statearr_28666_28728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (20))){
var inst_28594 = (state_28664[(7)]);
var state_28664__$1 = state_28664;
var statearr_28667_28729 = state_28664__$1;
(statearr_28667_28729[(2)] = inst_28594);

(statearr_28667_28729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (27))){
var state_28664__$1 = state_28664;
var statearr_28668_28730 = state_28664__$1;
(statearr_28668_28730[(2)] = null);

(statearr_28668_28730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (1))){
var inst_28570 = (state_28664[(8)]);
var inst_28570__$1 = calc_state.call(null);
var inst_28572 = (inst_28570__$1 == null);
var inst_28573 = cljs.core.not.call(null,inst_28572);
var state_28664__$1 = (function (){var statearr_28669 = state_28664;
(statearr_28669[(8)] = inst_28570__$1);

return statearr_28669;
})();
if(inst_28573){
var statearr_28670_28731 = state_28664__$1;
(statearr_28670_28731[(1)] = (2));

} else {
var statearr_28671_28732 = state_28664__$1;
(statearr_28671_28732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (24))){
var inst_28638 = (state_28664[(9)]);
var inst_28624 = (state_28664[(10)]);
var inst_28617 = (state_28664[(11)]);
var inst_28638__$1 = inst_28617.call(null,inst_28624);
var state_28664__$1 = (function (){var statearr_28672 = state_28664;
(statearr_28672[(9)] = inst_28638__$1);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28638__$1)){
var statearr_28673_28733 = state_28664__$1;
(statearr_28673_28733[(1)] = (29));

} else {
var statearr_28674_28734 = state_28664__$1;
(statearr_28674_28734[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (4))){
var inst_28585 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28585)){
var statearr_28675_28735 = state_28664__$1;
(statearr_28675_28735[(1)] = (8));

} else {
var statearr_28676_28736 = state_28664__$1;
(statearr_28676_28736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (15))){
var inst_28611 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28611)){
var statearr_28677_28737 = state_28664__$1;
(statearr_28677_28737[(1)] = (19));

} else {
var statearr_28678_28738 = state_28664__$1;
(statearr_28678_28738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (21))){
var inst_28616 = (state_28664[(12)]);
var inst_28616__$1 = (state_28664[(2)]);
var inst_28617 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28618 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28619 = cljs.core.get.call(null,inst_28616__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28664__$1 = (function (){var statearr_28679 = state_28664;
(statearr_28679[(12)] = inst_28616__$1);

(statearr_28679[(11)] = inst_28617);

(statearr_28679[(13)] = inst_28618);

return statearr_28679;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28664__$1,(22),inst_28619);
} else {
if((state_val_28665 === (31))){
var inst_28646 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28646)){
var statearr_28680_28739 = state_28664__$1;
(statearr_28680_28739[(1)] = (32));

} else {
var statearr_28681_28740 = state_28664__$1;
(statearr_28681_28740[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (32))){
var inst_28623 = (state_28664[(14)]);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28664__$1,(35),out,inst_28623);
} else {
if((state_val_28665 === (33))){
var inst_28616 = (state_28664[(12)]);
var inst_28594 = inst_28616;
var state_28664__$1 = (function (){var statearr_28682 = state_28664;
(statearr_28682[(7)] = inst_28594);

return statearr_28682;
})();
var statearr_28683_28741 = state_28664__$1;
(statearr_28683_28741[(2)] = null);

(statearr_28683_28741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (13))){
var inst_28594 = (state_28664[(7)]);
var inst_28601 = inst_28594.cljs$lang$protocol_mask$partition0$;
var inst_28602 = (inst_28601 & (64));
var inst_28603 = inst_28594.cljs$core$ISeq$;
var inst_28604 = (inst_28602) || (inst_28603);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28604)){
var statearr_28684_28742 = state_28664__$1;
(statearr_28684_28742[(1)] = (16));

} else {
var statearr_28685_28743 = state_28664__$1;
(statearr_28685_28743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (22))){
var inst_28624 = (state_28664[(10)]);
var inst_28623 = (state_28664[(14)]);
var inst_28622 = (state_28664[(2)]);
var inst_28623__$1 = cljs.core.nth.call(null,inst_28622,(0),null);
var inst_28624__$1 = cljs.core.nth.call(null,inst_28622,(1),null);
var inst_28625 = (inst_28623__$1 == null);
var inst_28626 = cljs.core._EQ_.call(null,inst_28624__$1,change);
var inst_28627 = (inst_28625) || (inst_28626);
var state_28664__$1 = (function (){var statearr_28686 = state_28664;
(statearr_28686[(10)] = inst_28624__$1);

(statearr_28686[(14)] = inst_28623__$1);

return statearr_28686;
})();
if(cljs.core.truth_(inst_28627)){
var statearr_28687_28744 = state_28664__$1;
(statearr_28687_28744[(1)] = (23));

} else {
var statearr_28688_28745 = state_28664__$1;
(statearr_28688_28745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (36))){
var inst_28616 = (state_28664[(12)]);
var inst_28594 = inst_28616;
var state_28664__$1 = (function (){var statearr_28689 = state_28664;
(statearr_28689[(7)] = inst_28594);

return statearr_28689;
})();
var statearr_28690_28746 = state_28664__$1;
(statearr_28690_28746[(2)] = null);

(statearr_28690_28746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (29))){
var inst_28638 = (state_28664[(9)]);
var state_28664__$1 = state_28664;
var statearr_28691_28747 = state_28664__$1;
(statearr_28691_28747[(2)] = inst_28638);

(statearr_28691_28747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (6))){
var state_28664__$1 = state_28664;
var statearr_28692_28748 = state_28664__$1;
(statearr_28692_28748[(2)] = false);

(statearr_28692_28748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (28))){
var inst_28634 = (state_28664[(2)]);
var inst_28635 = calc_state.call(null);
var inst_28594 = inst_28635;
var state_28664__$1 = (function (){var statearr_28693 = state_28664;
(statearr_28693[(15)] = inst_28634);

(statearr_28693[(7)] = inst_28594);

return statearr_28693;
})();
var statearr_28694_28749 = state_28664__$1;
(statearr_28694_28749[(2)] = null);

(statearr_28694_28749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (25))){
var inst_28660 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28695_28750 = state_28664__$1;
(statearr_28695_28750[(2)] = inst_28660);

(statearr_28695_28750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (34))){
var inst_28658 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28696_28751 = state_28664__$1;
(statearr_28696_28751[(2)] = inst_28658);

(statearr_28696_28751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (17))){
var state_28664__$1 = state_28664;
var statearr_28697_28752 = state_28664__$1;
(statearr_28697_28752[(2)] = false);

(statearr_28697_28752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (3))){
var state_28664__$1 = state_28664;
var statearr_28698_28753 = state_28664__$1;
(statearr_28698_28753[(2)] = false);

(statearr_28698_28753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (12))){
var inst_28662 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28664__$1,inst_28662);
} else {
if((state_val_28665 === (2))){
var inst_28570 = (state_28664[(8)]);
var inst_28575 = inst_28570.cljs$lang$protocol_mask$partition0$;
var inst_28576 = (inst_28575 & (64));
var inst_28577 = inst_28570.cljs$core$ISeq$;
var inst_28578 = (inst_28576) || (inst_28577);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28578)){
var statearr_28699_28754 = state_28664__$1;
(statearr_28699_28754[(1)] = (5));

} else {
var statearr_28700_28755 = state_28664__$1;
(statearr_28700_28755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (23))){
var inst_28623 = (state_28664[(14)]);
var inst_28629 = (inst_28623 == null);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28629)){
var statearr_28701_28756 = state_28664__$1;
(statearr_28701_28756[(1)] = (26));

} else {
var statearr_28702_28757 = state_28664__$1;
(statearr_28702_28757[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (35))){
var inst_28649 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
if(cljs.core.truth_(inst_28649)){
var statearr_28703_28758 = state_28664__$1;
(statearr_28703_28758[(1)] = (36));

} else {
var statearr_28704_28759 = state_28664__$1;
(statearr_28704_28759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (19))){
var inst_28594 = (state_28664[(7)]);
var inst_28613 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28594);
var state_28664__$1 = state_28664;
var statearr_28705_28760 = state_28664__$1;
(statearr_28705_28760[(2)] = inst_28613);

(statearr_28705_28760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (11))){
var inst_28594 = (state_28664[(7)]);
var inst_28598 = (inst_28594 == null);
var inst_28599 = cljs.core.not.call(null,inst_28598);
var state_28664__$1 = state_28664;
if(inst_28599){
var statearr_28706_28761 = state_28664__$1;
(statearr_28706_28761[(1)] = (13));

} else {
var statearr_28707_28762 = state_28664__$1;
(statearr_28707_28762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (9))){
var inst_28570 = (state_28664[(8)]);
var state_28664__$1 = state_28664;
var statearr_28708_28763 = state_28664__$1;
(statearr_28708_28763[(2)] = inst_28570);

(statearr_28708_28763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (5))){
var state_28664__$1 = state_28664;
var statearr_28709_28764 = state_28664__$1;
(statearr_28709_28764[(2)] = true);

(statearr_28709_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (14))){
var state_28664__$1 = state_28664;
var statearr_28710_28765 = state_28664__$1;
(statearr_28710_28765[(2)] = false);

(statearr_28710_28765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (26))){
var inst_28624 = (state_28664[(10)]);
var inst_28631 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28624);
var state_28664__$1 = state_28664;
var statearr_28711_28766 = state_28664__$1;
(statearr_28711_28766[(2)] = inst_28631);

(statearr_28711_28766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (16))){
var state_28664__$1 = state_28664;
var statearr_28712_28767 = state_28664__$1;
(statearr_28712_28767[(2)] = true);

(statearr_28712_28767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (38))){
var inst_28654 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28713_28768 = state_28664__$1;
(statearr_28713_28768[(2)] = inst_28654);

(statearr_28713_28768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (30))){
var inst_28624 = (state_28664[(10)]);
var inst_28617 = (state_28664[(11)]);
var inst_28618 = (state_28664[(13)]);
var inst_28641 = cljs.core.empty_QMARK_.call(null,inst_28617);
var inst_28642 = inst_28618.call(null,inst_28624);
var inst_28643 = cljs.core.not.call(null,inst_28642);
var inst_28644 = (inst_28641) && (inst_28643);
var state_28664__$1 = state_28664;
var statearr_28714_28769 = state_28664__$1;
(statearr_28714_28769[(2)] = inst_28644);

(statearr_28714_28769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (10))){
var inst_28570 = (state_28664[(8)]);
var inst_28590 = (state_28664[(2)]);
var inst_28591 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28592 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28593 = cljs.core.get.call(null,inst_28590,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28594 = inst_28570;
var state_28664__$1 = (function (){var statearr_28715 = state_28664;
(statearr_28715[(16)] = inst_28592);

(statearr_28715[(17)] = inst_28591);

(statearr_28715[(18)] = inst_28593);

(statearr_28715[(7)] = inst_28594);

return statearr_28715;
})();
var statearr_28716_28770 = state_28664__$1;
(statearr_28716_28770[(2)] = null);

(statearr_28716_28770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (18))){
var inst_28608 = (state_28664[(2)]);
var state_28664__$1 = state_28664;
var statearr_28717_28771 = state_28664__$1;
(statearr_28717_28771[(2)] = inst_28608);

(statearr_28717_28771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (37))){
var state_28664__$1 = state_28664;
var statearr_28718_28772 = state_28664__$1;
(statearr_28718_28772[(2)] = null);

(statearr_28718_28772[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28665 === (8))){
var inst_28570 = (state_28664[(8)]);
var inst_28587 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28570);
var state_28664__$1 = state_28664;
var statearr_28719_28773 = state_28664__$1;
(statearr_28719_28773[(2)] = inst_28587);

(statearr_28719_28773[(1)] = (10));


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
});})(c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26902__auto__,c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26903__auto__ = null;
var cljs$core$async$mix_$_state_machine__26903__auto____0 = (function (){
var statearr_28723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28723[(0)] = cljs$core$async$mix_$_state_machine__26903__auto__);

(statearr_28723[(1)] = (1));

return statearr_28723;
});
var cljs$core$async$mix_$_state_machine__26903__auto____1 = (function (state_28664){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_28664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e28724){if((e28724 instanceof Object)){
var ex__26906__auto__ = e28724;
var statearr_28725_28774 = state_28664;
(statearr_28725_28774[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28775 = state_28664;
state_28664 = G__28775;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26903__auto__ = function(state_28664){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26903__auto____1.call(this,state_28664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26903__auto____0;
cljs$core$async$mix_$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26903__auto____1;
return cljs$core$async$mix_$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27016__auto__ = (function (){var statearr_28726 = f__27015__auto__.call(null);
(statearr_28726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___28727);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___28727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28776 = [];
var len__22734__auto___28779 = arguments.length;
var i__22735__auto___28780 = (0);
while(true){
if((i__22735__auto___28780 < len__22734__auto___28779)){
args28776.push((arguments[i__22735__auto___28780]));

var G__28781 = (i__22735__auto___28780 + (1));
i__22735__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var G__28778 = args28776.length;
switch (G__28778) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28776.length)].join('')));

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
var args28784 = [];
var len__22734__auto___28909 = arguments.length;
var i__22735__auto___28910 = (0);
while(true){
if((i__22735__auto___28910 < len__22734__auto___28909)){
args28784.push((arguments[i__22735__auto___28910]));

var G__28911 = (i__22735__auto___28910 + (1));
i__22735__auto___28910 = G__28911;
continue;
} else {
}
break;
}

var G__28786 = args28784.length;
switch (G__28786) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28784.length)].join('')));

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
return (function (p1__28783_SHARP_){
if(cljs.core.truth_(p1__28783_SHARP_.call(null,topic))){
return p1__28783_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28783_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21676__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28787 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28788){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28788 = meta28788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28789,meta28788__$1){
var self__ = this;
var _28789__$1 = this;
return (new cljs.core.async.t_cljs$core$async28787(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28788__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28789){
var self__ = this;
var _28789__$1 = this;
return self__.meta28788;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28788","meta28788",841331175,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28787";

cljs.core.async.t_cljs$core$async28787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async28787");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28787 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28788){
return (new cljs.core.async.t_cljs$core$async28787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28788));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28787(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27014__auto___28913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___28913,mults,ensure_mult,p){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___28913,mults,ensure_mult,p){
return (function (state_28861){
var state_val_28862 = (state_28861[(1)]);
if((state_val_28862 === (7))){
var inst_28857 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28863_28914 = state_28861__$1;
(statearr_28863_28914[(2)] = inst_28857);

(statearr_28863_28914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (20))){
var state_28861__$1 = state_28861;
var statearr_28864_28915 = state_28861__$1;
(statearr_28864_28915[(2)] = null);

(statearr_28864_28915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (1))){
var state_28861__$1 = state_28861;
var statearr_28865_28916 = state_28861__$1;
(statearr_28865_28916[(2)] = null);

(statearr_28865_28916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (24))){
var inst_28840 = (state_28861[(7)]);
var inst_28849 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28840);
var state_28861__$1 = state_28861;
var statearr_28866_28917 = state_28861__$1;
(statearr_28866_28917[(2)] = inst_28849);

(statearr_28866_28917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (4))){
var inst_28792 = (state_28861[(8)]);
var inst_28792__$1 = (state_28861[(2)]);
var inst_28793 = (inst_28792__$1 == null);
var state_28861__$1 = (function (){var statearr_28867 = state_28861;
(statearr_28867[(8)] = inst_28792__$1);

return statearr_28867;
})();
if(cljs.core.truth_(inst_28793)){
var statearr_28868_28918 = state_28861__$1;
(statearr_28868_28918[(1)] = (5));

} else {
var statearr_28869_28919 = state_28861__$1;
(statearr_28869_28919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (15))){
var inst_28834 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28870_28920 = state_28861__$1;
(statearr_28870_28920[(2)] = inst_28834);

(statearr_28870_28920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (21))){
var inst_28854 = (state_28861[(2)]);
var state_28861__$1 = (function (){var statearr_28871 = state_28861;
(statearr_28871[(9)] = inst_28854);

return statearr_28871;
})();
var statearr_28872_28921 = state_28861__$1;
(statearr_28872_28921[(2)] = null);

(statearr_28872_28921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (13))){
var inst_28816 = (state_28861[(10)]);
var inst_28818 = cljs.core.chunked_seq_QMARK_.call(null,inst_28816);
var state_28861__$1 = state_28861;
if(inst_28818){
var statearr_28873_28922 = state_28861__$1;
(statearr_28873_28922[(1)] = (16));

} else {
var statearr_28874_28923 = state_28861__$1;
(statearr_28874_28923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (22))){
var inst_28846 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
if(cljs.core.truth_(inst_28846)){
var statearr_28875_28924 = state_28861__$1;
(statearr_28875_28924[(1)] = (23));

} else {
var statearr_28876_28925 = state_28861__$1;
(statearr_28876_28925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (6))){
var inst_28842 = (state_28861[(11)]);
var inst_28840 = (state_28861[(7)]);
var inst_28792 = (state_28861[(8)]);
var inst_28840__$1 = topic_fn.call(null,inst_28792);
var inst_28841 = cljs.core.deref.call(null,mults);
var inst_28842__$1 = cljs.core.get.call(null,inst_28841,inst_28840__$1);
var state_28861__$1 = (function (){var statearr_28877 = state_28861;
(statearr_28877[(11)] = inst_28842__$1);

(statearr_28877[(7)] = inst_28840__$1);

return statearr_28877;
})();
if(cljs.core.truth_(inst_28842__$1)){
var statearr_28878_28926 = state_28861__$1;
(statearr_28878_28926[(1)] = (19));

} else {
var statearr_28879_28927 = state_28861__$1;
(statearr_28879_28927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (25))){
var inst_28851 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28880_28928 = state_28861__$1;
(statearr_28880_28928[(2)] = inst_28851);

(statearr_28880_28928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (17))){
var inst_28816 = (state_28861[(10)]);
var inst_28825 = cljs.core.first.call(null,inst_28816);
var inst_28826 = cljs.core.async.muxch_STAR_.call(null,inst_28825);
var inst_28827 = cljs.core.async.close_BANG_.call(null,inst_28826);
var inst_28828 = cljs.core.next.call(null,inst_28816);
var inst_28802 = inst_28828;
var inst_28803 = null;
var inst_28804 = (0);
var inst_28805 = (0);
var state_28861__$1 = (function (){var statearr_28881 = state_28861;
(statearr_28881[(12)] = inst_28804);

(statearr_28881[(13)] = inst_28805);

(statearr_28881[(14)] = inst_28803);

(statearr_28881[(15)] = inst_28802);

(statearr_28881[(16)] = inst_28827);

return statearr_28881;
})();
var statearr_28882_28929 = state_28861__$1;
(statearr_28882_28929[(2)] = null);

(statearr_28882_28929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (3))){
var inst_28859 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28861__$1,inst_28859);
} else {
if((state_val_28862 === (12))){
var inst_28836 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28883_28930 = state_28861__$1;
(statearr_28883_28930[(2)] = inst_28836);

(statearr_28883_28930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (2))){
var state_28861__$1 = state_28861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28861__$1,(4),ch);
} else {
if((state_val_28862 === (23))){
var state_28861__$1 = state_28861;
var statearr_28884_28931 = state_28861__$1;
(statearr_28884_28931[(2)] = null);

(statearr_28884_28931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (19))){
var inst_28842 = (state_28861[(11)]);
var inst_28792 = (state_28861[(8)]);
var inst_28844 = cljs.core.async.muxch_STAR_.call(null,inst_28842);
var state_28861__$1 = state_28861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28861__$1,(22),inst_28844,inst_28792);
} else {
if((state_val_28862 === (11))){
var inst_28816 = (state_28861[(10)]);
var inst_28802 = (state_28861[(15)]);
var inst_28816__$1 = cljs.core.seq.call(null,inst_28802);
var state_28861__$1 = (function (){var statearr_28885 = state_28861;
(statearr_28885[(10)] = inst_28816__$1);

return statearr_28885;
})();
if(inst_28816__$1){
var statearr_28886_28932 = state_28861__$1;
(statearr_28886_28932[(1)] = (13));

} else {
var statearr_28887_28933 = state_28861__$1;
(statearr_28887_28933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (9))){
var inst_28838 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28888_28934 = state_28861__$1;
(statearr_28888_28934[(2)] = inst_28838);

(statearr_28888_28934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (5))){
var inst_28799 = cljs.core.deref.call(null,mults);
var inst_28800 = cljs.core.vals.call(null,inst_28799);
var inst_28801 = cljs.core.seq.call(null,inst_28800);
var inst_28802 = inst_28801;
var inst_28803 = null;
var inst_28804 = (0);
var inst_28805 = (0);
var state_28861__$1 = (function (){var statearr_28889 = state_28861;
(statearr_28889[(12)] = inst_28804);

(statearr_28889[(13)] = inst_28805);

(statearr_28889[(14)] = inst_28803);

(statearr_28889[(15)] = inst_28802);

return statearr_28889;
})();
var statearr_28890_28935 = state_28861__$1;
(statearr_28890_28935[(2)] = null);

(statearr_28890_28935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (14))){
var state_28861__$1 = state_28861;
var statearr_28894_28936 = state_28861__$1;
(statearr_28894_28936[(2)] = null);

(statearr_28894_28936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (16))){
var inst_28816 = (state_28861[(10)]);
var inst_28820 = cljs.core.chunk_first.call(null,inst_28816);
var inst_28821 = cljs.core.chunk_rest.call(null,inst_28816);
var inst_28822 = cljs.core.count.call(null,inst_28820);
var inst_28802 = inst_28821;
var inst_28803 = inst_28820;
var inst_28804 = inst_28822;
var inst_28805 = (0);
var state_28861__$1 = (function (){var statearr_28895 = state_28861;
(statearr_28895[(12)] = inst_28804);

(statearr_28895[(13)] = inst_28805);

(statearr_28895[(14)] = inst_28803);

(statearr_28895[(15)] = inst_28802);

return statearr_28895;
})();
var statearr_28896_28937 = state_28861__$1;
(statearr_28896_28937[(2)] = null);

(statearr_28896_28937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (10))){
var inst_28804 = (state_28861[(12)]);
var inst_28805 = (state_28861[(13)]);
var inst_28803 = (state_28861[(14)]);
var inst_28802 = (state_28861[(15)]);
var inst_28810 = cljs.core._nth.call(null,inst_28803,inst_28805);
var inst_28811 = cljs.core.async.muxch_STAR_.call(null,inst_28810);
var inst_28812 = cljs.core.async.close_BANG_.call(null,inst_28811);
var inst_28813 = (inst_28805 + (1));
var tmp28891 = inst_28804;
var tmp28892 = inst_28803;
var tmp28893 = inst_28802;
var inst_28802__$1 = tmp28893;
var inst_28803__$1 = tmp28892;
var inst_28804__$1 = tmp28891;
var inst_28805__$1 = inst_28813;
var state_28861__$1 = (function (){var statearr_28897 = state_28861;
(statearr_28897[(17)] = inst_28812);

(statearr_28897[(12)] = inst_28804__$1);

(statearr_28897[(13)] = inst_28805__$1);

(statearr_28897[(14)] = inst_28803__$1);

(statearr_28897[(15)] = inst_28802__$1);

return statearr_28897;
})();
var statearr_28898_28938 = state_28861__$1;
(statearr_28898_28938[(2)] = null);

(statearr_28898_28938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (18))){
var inst_28831 = (state_28861[(2)]);
var state_28861__$1 = state_28861;
var statearr_28899_28939 = state_28861__$1;
(statearr_28899_28939[(2)] = inst_28831);

(statearr_28899_28939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28862 === (8))){
var inst_28804 = (state_28861[(12)]);
var inst_28805 = (state_28861[(13)]);
var inst_28807 = (inst_28805 < inst_28804);
var inst_28808 = inst_28807;
var state_28861__$1 = state_28861;
if(cljs.core.truth_(inst_28808)){
var statearr_28900_28940 = state_28861__$1;
(statearr_28900_28940[(1)] = (10));

} else {
var statearr_28901_28941 = state_28861__$1;
(statearr_28901_28941[(1)] = (11));

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
});})(c__27014__auto___28913,mults,ensure_mult,p))
;
return ((function (switch__26902__auto__,c__27014__auto___28913,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_28905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28905[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_28905[(1)] = (1));

return statearr_28905;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_28861){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_28861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e28906){if((e28906 instanceof Object)){
var ex__26906__auto__ = e28906;
var statearr_28907_28942 = state_28861;
(statearr_28907_28942[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28943 = state_28861;
state_28861 = G__28943;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_28861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_28861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___28913,mults,ensure_mult,p))
})();
var state__27016__auto__ = (function (){var statearr_28908 = f__27015__auto__.call(null);
(statearr_28908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___28913);

return statearr_28908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___28913,mults,ensure_mult,p))
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
var args28944 = [];
var len__22734__auto___28947 = arguments.length;
var i__22735__auto___28948 = (0);
while(true){
if((i__22735__auto___28948 < len__22734__auto___28947)){
args28944.push((arguments[i__22735__auto___28948]));

var G__28949 = (i__22735__auto___28948 + (1));
i__22735__auto___28948 = G__28949;
continue;
} else {
}
break;
}

var G__28946 = args28944.length;
switch (G__28946) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28944.length)].join('')));

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
var args28951 = [];
var len__22734__auto___28954 = arguments.length;
var i__22735__auto___28955 = (0);
while(true){
if((i__22735__auto___28955 < len__22734__auto___28954)){
args28951.push((arguments[i__22735__auto___28955]));

var G__28956 = (i__22735__auto___28955 + (1));
i__22735__auto___28955 = G__28956;
continue;
} else {
}
break;
}

var G__28953 = args28951.length;
switch (G__28953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28951.length)].join('')));

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
var args28958 = [];
var len__22734__auto___29029 = arguments.length;
var i__22735__auto___29030 = (0);
while(true){
if((i__22735__auto___29030 < len__22734__auto___29029)){
args28958.push((arguments[i__22735__auto___29030]));

var G__29031 = (i__22735__auto___29030 + (1));
i__22735__auto___29030 = G__29031;
continue;
} else {
}
break;
}

var G__28960 = args28958.length;
switch (G__28960) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28958.length)].join('')));

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
var c__27014__auto___29033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28999){
var state_val_29000 = (state_28999[(1)]);
if((state_val_29000 === (7))){
var state_28999__$1 = state_28999;
var statearr_29001_29034 = state_28999__$1;
(statearr_29001_29034[(2)] = null);

(statearr_29001_29034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (1))){
var state_28999__$1 = state_28999;
var statearr_29002_29035 = state_28999__$1;
(statearr_29002_29035[(2)] = null);

(statearr_29002_29035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (4))){
var inst_28963 = (state_28999[(7)]);
var inst_28965 = (inst_28963 < cnt);
var state_28999__$1 = state_28999;
if(cljs.core.truth_(inst_28965)){
var statearr_29003_29036 = state_28999__$1;
(statearr_29003_29036[(1)] = (6));

} else {
var statearr_29004_29037 = state_28999__$1;
(statearr_29004_29037[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (15))){
var inst_28995 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29005_29038 = state_28999__$1;
(statearr_29005_29038[(2)] = inst_28995);

(statearr_29005_29038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (13))){
var inst_28988 = cljs.core.async.close_BANG_.call(null,out);
var state_28999__$1 = state_28999;
var statearr_29006_29039 = state_28999__$1;
(statearr_29006_29039[(2)] = inst_28988);

(statearr_29006_29039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (6))){
var state_28999__$1 = state_28999;
var statearr_29007_29040 = state_28999__$1;
(statearr_29007_29040[(2)] = null);

(statearr_29007_29040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (3))){
var inst_28997 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else {
if((state_val_29000 === (12))){
var inst_28985 = (state_28999[(8)]);
var inst_28985__$1 = (state_28999[(2)]);
var inst_28986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28985__$1);
var state_28999__$1 = (function (){var statearr_29008 = state_28999;
(statearr_29008[(8)] = inst_28985__$1);

return statearr_29008;
})();
if(cljs.core.truth_(inst_28986)){
var statearr_29009_29041 = state_28999__$1;
(statearr_29009_29041[(1)] = (13));

} else {
var statearr_29010_29042 = state_28999__$1;
(statearr_29010_29042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (2))){
var inst_28962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28963 = (0);
var state_28999__$1 = (function (){var statearr_29011 = state_28999;
(statearr_29011[(7)] = inst_28963);

(statearr_29011[(9)] = inst_28962);

return statearr_29011;
})();
var statearr_29012_29043 = state_28999__$1;
(statearr_29012_29043[(2)] = null);

(statearr_29012_29043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (11))){
var inst_28963 = (state_28999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28999,(10),Object,null,(9));
var inst_28972 = chs__$1.call(null,inst_28963);
var inst_28973 = done.call(null,inst_28963);
var inst_28974 = cljs.core.async.take_BANG_.call(null,inst_28972,inst_28973);
var state_28999__$1 = state_28999;
var statearr_29013_29044 = state_28999__$1;
(statearr_29013_29044[(2)] = inst_28974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (9))){
var inst_28963 = (state_28999[(7)]);
var inst_28976 = (state_28999[(2)]);
var inst_28977 = (inst_28963 + (1));
var inst_28963__$1 = inst_28977;
var state_28999__$1 = (function (){var statearr_29014 = state_28999;
(statearr_29014[(7)] = inst_28963__$1);

(statearr_29014[(10)] = inst_28976);

return statearr_29014;
})();
var statearr_29015_29045 = state_28999__$1;
(statearr_29015_29045[(2)] = null);

(statearr_29015_29045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (5))){
var inst_28983 = (state_28999[(2)]);
var state_28999__$1 = (function (){var statearr_29016 = state_28999;
(statearr_29016[(11)] = inst_28983);

return statearr_29016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(12),dchan);
} else {
if((state_val_29000 === (14))){
var inst_28985 = (state_28999[(8)]);
var inst_28990 = cljs.core.apply.call(null,f,inst_28985);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,(16),out,inst_28990);
} else {
if((state_val_29000 === (16))){
var inst_28992 = (state_28999[(2)]);
var state_28999__$1 = (function (){var statearr_29017 = state_28999;
(statearr_29017[(12)] = inst_28992);

return statearr_29017;
})();
var statearr_29018_29046 = state_28999__$1;
(statearr_29018_29046[(2)] = null);

(statearr_29018_29046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (10))){
var inst_28967 = (state_28999[(2)]);
var inst_28968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28999__$1 = (function (){var statearr_29019 = state_28999;
(statearr_29019[(13)] = inst_28967);

return statearr_29019;
})();
var statearr_29020_29047 = state_28999__$1;
(statearr_29020_29047[(2)] = inst_28968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29000 === (8))){
var inst_28981 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
var statearr_29021_29048 = state_28999__$1;
(statearr_29021_29048[(2)] = inst_28981);

(statearr_29021_29048[(1)] = (5));


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
});})(c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26902__auto__,c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_28999){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_28999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__26906__auto__ = e29026;
var statearr_29027_29049 = state_28999;
(statearr_29027_29049[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29050 = state_28999;
state_28999 = G__29050;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27016__auto__ = (function (){var statearr_29028 = f__27015__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29033);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29033,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29052 = [];
var len__22734__auto___29108 = arguments.length;
var i__22735__auto___29109 = (0);
while(true){
if((i__22735__auto___29109 < len__22734__auto___29108)){
args29052.push((arguments[i__22735__auto___29109]));

var G__29110 = (i__22735__auto___29109 + (1));
i__22735__auto___29109 = G__29110;
continue;
} else {
}
break;
}

var G__29054 = args29052.length;
switch (G__29054) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29052.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29112,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29112,out){
return (function (state_29084){
var state_val_29085 = (state_29084[(1)]);
if((state_val_29085 === (7))){
var inst_29064 = (state_29084[(7)]);
var inst_29063 = (state_29084[(8)]);
var inst_29063__$1 = (state_29084[(2)]);
var inst_29064__$1 = cljs.core.nth.call(null,inst_29063__$1,(0),null);
var inst_29065 = cljs.core.nth.call(null,inst_29063__$1,(1),null);
var inst_29066 = (inst_29064__$1 == null);
var state_29084__$1 = (function (){var statearr_29086 = state_29084;
(statearr_29086[(7)] = inst_29064__$1);

(statearr_29086[(9)] = inst_29065);

(statearr_29086[(8)] = inst_29063__$1);

return statearr_29086;
})();
if(cljs.core.truth_(inst_29066)){
var statearr_29087_29113 = state_29084__$1;
(statearr_29087_29113[(1)] = (8));

} else {
var statearr_29088_29114 = state_29084__$1;
(statearr_29088_29114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (1))){
var inst_29055 = cljs.core.vec.call(null,chs);
var inst_29056 = inst_29055;
var state_29084__$1 = (function (){var statearr_29089 = state_29084;
(statearr_29089[(10)] = inst_29056);

return statearr_29089;
})();
var statearr_29090_29115 = state_29084__$1;
(statearr_29090_29115[(2)] = null);

(statearr_29090_29115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (4))){
var inst_29056 = (state_29084[(10)]);
var state_29084__$1 = state_29084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29084__$1,(7),inst_29056);
} else {
if((state_val_29085 === (6))){
var inst_29080 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29091_29116 = state_29084__$1;
(statearr_29091_29116[(2)] = inst_29080);

(statearr_29091_29116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (3))){
var inst_29082 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29084__$1,inst_29082);
} else {
if((state_val_29085 === (2))){
var inst_29056 = (state_29084[(10)]);
var inst_29058 = cljs.core.count.call(null,inst_29056);
var inst_29059 = (inst_29058 > (0));
var state_29084__$1 = state_29084;
if(cljs.core.truth_(inst_29059)){
var statearr_29093_29117 = state_29084__$1;
(statearr_29093_29117[(1)] = (4));

} else {
var statearr_29094_29118 = state_29084__$1;
(statearr_29094_29118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (11))){
var inst_29056 = (state_29084[(10)]);
var inst_29073 = (state_29084[(2)]);
var tmp29092 = inst_29056;
var inst_29056__$1 = tmp29092;
var state_29084__$1 = (function (){var statearr_29095 = state_29084;
(statearr_29095[(10)] = inst_29056__$1);

(statearr_29095[(11)] = inst_29073);

return statearr_29095;
})();
var statearr_29096_29119 = state_29084__$1;
(statearr_29096_29119[(2)] = null);

(statearr_29096_29119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (9))){
var inst_29064 = (state_29084[(7)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29084__$1,(11),out,inst_29064);
} else {
if((state_val_29085 === (5))){
var inst_29078 = cljs.core.async.close_BANG_.call(null,out);
var state_29084__$1 = state_29084;
var statearr_29097_29120 = state_29084__$1;
(statearr_29097_29120[(2)] = inst_29078);

(statearr_29097_29120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (10))){
var inst_29076 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29098_29121 = state_29084__$1;
(statearr_29098_29121[(2)] = inst_29076);

(statearr_29098_29121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (8))){
var inst_29064 = (state_29084[(7)]);
var inst_29065 = (state_29084[(9)]);
var inst_29056 = (state_29084[(10)]);
var inst_29063 = (state_29084[(8)]);
var inst_29068 = (function (){var cs = inst_29056;
var vec__29061 = inst_29063;
var v = inst_29064;
var c = inst_29065;
return ((function (cs,vec__29061,v,c,inst_29064,inst_29065,inst_29056,inst_29063,state_val_29085,c__27014__auto___29112,out){
return (function (p1__29051_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29051_SHARP_);
});
;})(cs,vec__29061,v,c,inst_29064,inst_29065,inst_29056,inst_29063,state_val_29085,c__27014__auto___29112,out))
})();
var inst_29069 = cljs.core.filterv.call(null,inst_29068,inst_29056);
var inst_29056__$1 = inst_29069;
var state_29084__$1 = (function (){var statearr_29099 = state_29084;
(statearr_29099[(10)] = inst_29056__$1);

return statearr_29099;
})();
var statearr_29100_29122 = state_29084__$1;
(statearr_29100_29122[(2)] = null);

(statearr_29100_29122[(1)] = (2));


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
});})(c__27014__auto___29112,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29112,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29104[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29104[(1)] = (1));

return statearr_29104;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29084){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29105){if((e29105 instanceof Object)){
var ex__26906__auto__ = e29105;
var statearr_29106_29123 = state_29084;
(statearr_29106_29123[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29124 = state_29084;
state_29084 = G__29124;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29112,out))
})();
var state__27016__auto__ = (function (){var statearr_29107 = f__27015__auto__.call(null);
(statearr_29107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29112);

return statearr_29107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29112,out))
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
var args29125 = [];
var len__22734__auto___29174 = arguments.length;
var i__22735__auto___29175 = (0);
while(true){
if((i__22735__auto___29175 < len__22734__auto___29174)){
args29125.push((arguments[i__22735__auto___29175]));

var G__29176 = (i__22735__auto___29175 + (1));
i__22735__auto___29175 = G__29176;
continue;
} else {
}
break;
}

var G__29127 = args29125.length;
switch (G__29127) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29125.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29178,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29178,out){
return (function (state_29151){
var state_val_29152 = (state_29151[(1)]);
if((state_val_29152 === (7))){
var inst_29133 = (state_29151[(7)]);
var inst_29133__$1 = (state_29151[(2)]);
var inst_29134 = (inst_29133__$1 == null);
var inst_29135 = cljs.core.not.call(null,inst_29134);
var state_29151__$1 = (function (){var statearr_29153 = state_29151;
(statearr_29153[(7)] = inst_29133__$1);

return statearr_29153;
})();
if(inst_29135){
var statearr_29154_29179 = state_29151__$1;
(statearr_29154_29179[(1)] = (8));

} else {
var statearr_29155_29180 = state_29151__$1;
(statearr_29155_29180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (1))){
var inst_29128 = (0);
var state_29151__$1 = (function (){var statearr_29156 = state_29151;
(statearr_29156[(8)] = inst_29128);

return statearr_29156;
})();
var statearr_29157_29181 = state_29151__$1;
(statearr_29157_29181[(2)] = null);

(statearr_29157_29181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (4))){
var state_29151__$1 = state_29151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29151__$1,(7),ch);
} else {
if((state_val_29152 === (6))){
var inst_29146 = (state_29151[(2)]);
var state_29151__$1 = state_29151;
var statearr_29158_29182 = state_29151__$1;
(statearr_29158_29182[(2)] = inst_29146);

(statearr_29158_29182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (3))){
var inst_29148 = (state_29151[(2)]);
var inst_29149 = cljs.core.async.close_BANG_.call(null,out);
var state_29151__$1 = (function (){var statearr_29159 = state_29151;
(statearr_29159[(9)] = inst_29148);

return statearr_29159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29151__$1,inst_29149);
} else {
if((state_val_29152 === (2))){
var inst_29128 = (state_29151[(8)]);
var inst_29130 = (inst_29128 < n);
var state_29151__$1 = state_29151;
if(cljs.core.truth_(inst_29130)){
var statearr_29160_29183 = state_29151__$1;
(statearr_29160_29183[(1)] = (4));

} else {
var statearr_29161_29184 = state_29151__$1;
(statearr_29161_29184[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (11))){
var inst_29128 = (state_29151[(8)]);
var inst_29138 = (state_29151[(2)]);
var inst_29139 = (inst_29128 + (1));
var inst_29128__$1 = inst_29139;
var state_29151__$1 = (function (){var statearr_29162 = state_29151;
(statearr_29162[(10)] = inst_29138);

(statearr_29162[(8)] = inst_29128__$1);

return statearr_29162;
})();
var statearr_29163_29185 = state_29151__$1;
(statearr_29163_29185[(2)] = null);

(statearr_29163_29185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (9))){
var state_29151__$1 = state_29151;
var statearr_29164_29186 = state_29151__$1;
(statearr_29164_29186[(2)] = null);

(statearr_29164_29186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (5))){
var state_29151__$1 = state_29151;
var statearr_29165_29187 = state_29151__$1;
(statearr_29165_29187[(2)] = null);

(statearr_29165_29187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (10))){
var inst_29143 = (state_29151[(2)]);
var state_29151__$1 = state_29151;
var statearr_29166_29188 = state_29151__$1;
(statearr_29166_29188[(2)] = inst_29143);

(statearr_29166_29188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29152 === (8))){
var inst_29133 = (state_29151[(7)]);
var state_29151__$1 = state_29151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29151__$1,(11),out,inst_29133);
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
});})(c__27014__auto___29178,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29178,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29170[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29170[(1)] = (1));

return statearr_29170;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29151){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29171){if((e29171 instanceof Object)){
var ex__26906__auto__ = e29171;
var statearr_29172_29189 = state_29151;
(statearr_29172_29189[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29190 = state_29151;
state_29151 = G__29190;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29178,out))
})();
var state__27016__auto__ = (function (){var statearr_29173 = f__27015__auto__.call(null);
(statearr_29173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29178);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29178,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29198 = (function (map_LT_,f,ch,meta29199){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29199 = meta29199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29200,meta29199__$1){
var self__ = this;
var _29200__$1 = this;
return (new cljs.core.async.t_cljs$core$async29198(self__.map_LT_,self__.f,self__.ch,meta29199__$1));
});

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29200){
var self__ = this;
var _29200__$1 = this;
return self__.meta29199;
});

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29201 = (function (map_LT_,f,ch,meta29199,_,fn1,meta29202){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29199 = meta29199;
this._ = _;
this.fn1 = fn1;
this.meta29202 = meta29202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29203,meta29202__$1){
var self__ = this;
var _29203__$1 = this;
return (new cljs.core.async.t_cljs$core$async29201(self__.map_LT_,self__.f,self__.ch,self__.meta29199,self__._,self__.fn1,meta29202__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29203){
var self__ = this;
var _29203__$1 = this;
return self__.meta29202;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29191_SHARP_){
return f1.call(null,(((p1__29191_SHARP_ == null))?null:self__.f.call(null,p1__29191_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29199","meta29199",1933451195,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29198","cljs.core.async/t_cljs$core$async29198",-786341452,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29202","meta29202",-1602322756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29201";

cljs.core.async.t_cljs$core$async29201.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29201");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29201 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29201(map_LT___$1,f__$1,ch__$1,meta29199__$1,___$2,fn1__$1,meta29202){
return (new cljs.core.async.t_cljs$core$async29201(map_LT___$1,f__$1,ch__$1,meta29199__$1,___$2,fn1__$1,meta29202));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29201(self__.map_LT_,self__.f,self__.ch,self__.meta29199,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29198.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29199","meta29199",1933451195,null)], null);
});

cljs.core.async.t_cljs$core$async29198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29198";

cljs.core.async.t_cljs$core$async29198.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29198");
});

cljs.core.async.__GT_t_cljs$core$async29198 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29198(map_LT___$1,f__$1,ch__$1,meta29199){
return (new cljs.core.async.t_cljs$core$async29198(map_LT___$1,f__$1,ch__$1,meta29199));
});

}

return (new cljs.core.async.t_cljs$core$async29198(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29207 = (function (map_GT_,f,ch,meta29208){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29208 = meta29208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29209,meta29208__$1){
var self__ = this;
var _29209__$1 = this;
return (new cljs.core.async.t_cljs$core$async29207(self__.map_GT_,self__.f,self__.ch,meta29208__$1));
});

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29209){
var self__ = this;
var _29209__$1 = this;
return self__.meta29208;
});

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29208","meta29208",1816158732,null)], null);
});

cljs.core.async.t_cljs$core$async29207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29207";

cljs.core.async.t_cljs$core$async29207.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29207");
});

cljs.core.async.__GT_t_cljs$core$async29207 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29207(map_GT___$1,f__$1,ch__$1,meta29208){
return (new cljs.core.async.t_cljs$core$async29207(map_GT___$1,f__$1,ch__$1,meta29208));
});

}

return (new cljs.core.async.t_cljs$core$async29207(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29213 = (function (filter_GT_,p,ch,meta29214){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29214 = meta29214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29215,meta29214__$1){
var self__ = this;
var _29215__$1 = this;
return (new cljs.core.async.t_cljs$core$async29213(self__.filter_GT_,self__.p,self__.ch,meta29214__$1));
});

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29215){
var self__ = this;
var _29215__$1 = this;
return self__.meta29214;
});

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29214","meta29214",-1927755113,null)], null);
});

cljs.core.async.t_cljs$core$async29213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29213";

cljs.core.async.t_cljs$core$async29213.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"cljs.core.async/t_cljs$core$async29213");
});

cljs.core.async.__GT_t_cljs$core$async29213 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29213(filter_GT___$1,p__$1,ch__$1,meta29214){
return (new cljs.core.async.t_cljs$core$async29213(filter_GT___$1,p__$1,ch__$1,meta29214));
});

}

return (new cljs.core.async.t_cljs$core$async29213(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29216 = [];
var len__22734__auto___29260 = arguments.length;
var i__22735__auto___29261 = (0);
while(true){
if((i__22735__auto___29261 < len__22734__auto___29260)){
args29216.push((arguments[i__22735__auto___29261]));

var G__29262 = (i__22735__auto___29261 + (1));
i__22735__auto___29261 = G__29262;
continue;
} else {
}
break;
}

var G__29218 = args29216.length;
switch (G__29218) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29216.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29264,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29264,out){
return (function (state_29239){
var state_val_29240 = (state_29239[(1)]);
if((state_val_29240 === (7))){
var inst_29235 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29241_29265 = state_29239__$1;
(statearr_29241_29265[(2)] = inst_29235);

(statearr_29241_29265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (1))){
var state_29239__$1 = state_29239;
var statearr_29242_29266 = state_29239__$1;
(statearr_29242_29266[(2)] = null);

(statearr_29242_29266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (4))){
var inst_29221 = (state_29239[(7)]);
var inst_29221__$1 = (state_29239[(2)]);
var inst_29222 = (inst_29221__$1 == null);
var state_29239__$1 = (function (){var statearr_29243 = state_29239;
(statearr_29243[(7)] = inst_29221__$1);

return statearr_29243;
})();
if(cljs.core.truth_(inst_29222)){
var statearr_29244_29267 = state_29239__$1;
(statearr_29244_29267[(1)] = (5));

} else {
var statearr_29245_29268 = state_29239__$1;
(statearr_29245_29268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (6))){
var inst_29221 = (state_29239[(7)]);
var inst_29226 = p.call(null,inst_29221);
var state_29239__$1 = state_29239;
if(cljs.core.truth_(inst_29226)){
var statearr_29246_29269 = state_29239__$1;
(statearr_29246_29269[(1)] = (8));

} else {
var statearr_29247_29270 = state_29239__$1;
(statearr_29247_29270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (3))){
var inst_29237 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29239__$1,inst_29237);
} else {
if((state_val_29240 === (2))){
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29239__$1,(4),ch);
} else {
if((state_val_29240 === (11))){
var inst_29229 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29248_29271 = state_29239__$1;
(statearr_29248_29271[(2)] = inst_29229);

(statearr_29248_29271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (9))){
var state_29239__$1 = state_29239;
var statearr_29249_29272 = state_29239__$1;
(statearr_29249_29272[(2)] = null);

(statearr_29249_29272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (5))){
var inst_29224 = cljs.core.async.close_BANG_.call(null,out);
var state_29239__$1 = state_29239;
var statearr_29250_29273 = state_29239__$1;
(statearr_29250_29273[(2)] = inst_29224);

(statearr_29250_29273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (10))){
var inst_29232 = (state_29239[(2)]);
var state_29239__$1 = (function (){var statearr_29251 = state_29239;
(statearr_29251[(8)] = inst_29232);

return statearr_29251;
})();
var statearr_29252_29274 = state_29239__$1;
(statearr_29252_29274[(2)] = null);

(statearr_29252_29274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (8))){
var inst_29221 = (state_29239[(7)]);
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29239__$1,(11),out,inst_29221);
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
});})(c__27014__auto___29264,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29264,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29239){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29257){if((e29257 instanceof Object)){
var ex__26906__auto__ = e29257;
var statearr_29258_29275 = state_29239;
(statearr_29258_29275[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29276 = state_29239;
state_29239 = G__29276;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29264,out))
})();
var state__27016__auto__ = (function (){var statearr_29259 = f__27015__auto__.call(null);
(statearr_29259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29264);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29264,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29277 = [];
var len__22734__auto___29280 = arguments.length;
var i__22735__auto___29281 = (0);
while(true){
if((i__22735__auto___29281 < len__22734__auto___29280)){
args29277.push((arguments[i__22735__auto___29281]));

var G__29282 = (i__22735__auto___29281 + (1));
i__22735__auto___29281 = G__29282;
continue;
} else {
}
break;
}

var G__29279 = args29277.length;
switch (G__29279) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29277.length)].join('')));

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
var c__27014__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto__){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto__){
return (function (state_29449){
var state_val_29450 = (state_29449[(1)]);
if((state_val_29450 === (7))){
var inst_29445 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
var statearr_29451_29492 = state_29449__$1;
(statearr_29451_29492[(2)] = inst_29445);

(statearr_29451_29492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (20))){
var inst_29415 = (state_29449[(7)]);
var inst_29426 = (state_29449[(2)]);
var inst_29427 = cljs.core.next.call(null,inst_29415);
var inst_29401 = inst_29427;
var inst_29402 = null;
var inst_29403 = (0);
var inst_29404 = (0);
var state_29449__$1 = (function (){var statearr_29452 = state_29449;
(statearr_29452[(8)] = inst_29404);

(statearr_29452[(9)] = inst_29426);

(statearr_29452[(10)] = inst_29403);

(statearr_29452[(11)] = inst_29401);

(statearr_29452[(12)] = inst_29402);

return statearr_29452;
})();
var statearr_29453_29493 = state_29449__$1;
(statearr_29453_29493[(2)] = null);

(statearr_29453_29493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (1))){
var state_29449__$1 = state_29449;
var statearr_29454_29494 = state_29449__$1;
(statearr_29454_29494[(2)] = null);

(statearr_29454_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (4))){
var inst_29390 = (state_29449[(13)]);
var inst_29390__$1 = (state_29449[(2)]);
var inst_29391 = (inst_29390__$1 == null);
var state_29449__$1 = (function (){var statearr_29455 = state_29449;
(statearr_29455[(13)] = inst_29390__$1);

return statearr_29455;
})();
if(cljs.core.truth_(inst_29391)){
var statearr_29456_29495 = state_29449__$1;
(statearr_29456_29495[(1)] = (5));

} else {
var statearr_29457_29496 = state_29449__$1;
(statearr_29457_29496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (15))){
var state_29449__$1 = state_29449;
var statearr_29461_29497 = state_29449__$1;
(statearr_29461_29497[(2)] = null);

(statearr_29461_29497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (21))){
var state_29449__$1 = state_29449;
var statearr_29462_29498 = state_29449__$1;
(statearr_29462_29498[(2)] = null);

(statearr_29462_29498[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (13))){
var inst_29404 = (state_29449[(8)]);
var inst_29403 = (state_29449[(10)]);
var inst_29401 = (state_29449[(11)]);
var inst_29402 = (state_29449[(12)]);
var inst_29411 = (state_29449[(2)]);
var inst_29412 = (inst_29404 + (1));
var tmp29458 = inst_29403;
var tmp29459 = inst_29401;
var tmp29460 = inst_29402;
var inst_29401__$1 = tmp29459;
var inst_29402__$1 = tmp29460;
var inst_29403__$1 = tmp29458;
var inst_29404__$1 = inst_29412;
var state_29449__$1 = (function (){var statearr_29463 = state_29449;
(statearr_29463[(8)] = inst_29404__$1);

(statearr_29463[(14)] = inst_29411);

(statearr_29463[(10)] = inst_29403__$1);

(statearr_29463[(11)] = inst_29401__$1);

(statearr_29463[(12)] = inst_29402__$1);

return statearr_29463;
})();
var statearr_29464_29499 = state_29449__$1;
(statearr_29464_29499[(2)] = null);

(statearr_29464_29499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (22))){
var state_29449__$1 = state_29449;
var statearr_29465_29500 = state_29449__$1;
(statearr_29465_29500[(2)] = null);

(statearr_29465_29500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (6))){
var inst_29390 = (state_29449[(13)]);
var inst_29399 = f.call(null,inst_29390);
var inst_29400 = cljs.core.seq.call(null,inst_29399);
var inst_29401 = inst_29400;
var inst_29402 = null;
var inst_29403 = (0);
var inst_29404 = (0);
var state_29449__$1 = (function (){var statearr_29466 = state_29449;
(statearr_29466[(8)] = inst_29404);

(statearr_29466[(10)] = inst_29403);

(statearr_29466[(11)] = inst_29401);

(statearr_29466[(12)] = inst_29402);

return statearr_29466;
})();
var statearr_29467_29501 = state_29449__$1;
(statearr_29467_29501[(2)] = null);

(statearr_29467_29501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (17))){
var inst_29415 = (state_29449[(7)]);
var inst_29419 = cljs.core.chunk_first.call(null,inst_29415);
var inst_29420 = cljs.core.chunk_rest.call(null,inst_29415);
var inst_29421 = cljs.core.count.call(null,inst_29419);
var inst_29401 = inst_29420;
var inst_29402 = inst_29419;
var inst_29403 = inst_29421;
var inst_29404 = (0);
var state_29449__$1 = (function (){var statearr_29468 = state_29449;
(statearr_29468[(8)] = inst_29404);

(statearr_29468[(10)] = inst_29403);

(statearr_29468[(11)] = inst_29401);

(statearr_29468[(12)] = inst_29402);

return statearr_29468;
})();
var statearr_29469_29502 = state_29449__$1;
(statearr_29469_29502[(2)] = null);

(statearr_29469_29502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (3))){
var inst_29447 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29449__$1,inst_29447);
} else {
if((state_val_29450 === (12))){
var inst_29435 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
var statearr_29470_29503 = state_29449__$1;
(statearr_29470_29503[(2)] = inst_29435);

(statearr_29470_29503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (2))){
var state_29449__$1 = state_29449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29449__$1,(4),in$);
} else {
if((state_val_29450 === (23))){
var inst_29443 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
var statearr_29471_29504 = state_29449__$1;
(statearr_29471_29504[(2)] = inst_29443);

(statearr_29471_29504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (19))){
var inst_29430 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
var statearr_29472_29505 = state_29449__$1;
(statearr_29472_29505[(2)] = inst_29430);

(statearr_29472_29505[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (11))){
var inst_29401 = (state_29449[(11)]);
var inst_29415 = (state_29449[(7)]);
var inst_29415__$1 = cljs.core.seq.call(null,inst_29401);
var state_29449__$1 = (function (){var statearr_29473 = state_29449;
(statearr_29473[(7)] = inst_29415__$1);

return statearr_29473;
})();
if(inst_29415__$1){
var statearr_29474_29506 = state_29449__$1;
(statearr_29474_29506[(1)] = (14));

} else {
var statearr_29475_29507 = state_29449__$1;
(statearr_29475_29507[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (9))){
var inst_29437 = (state_29449[(2)]);
var inst_29438 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29449__$1 = (function (){var statearr_29476 = state_29449;
(statearr_29476[(15)] = inst_29437);

return statearr_29476;
})();
if(cljs.core.truth_(inst_29438)){
var statearr_29477_29508 = state_29449__$1;
(statearr_29477_29508[(1)] = (21));

} else {
var statearr_29478_29509 = state_29449__$1;
(statearr_29478_29509[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (5))){
var inst_29393 = cljs.core.async.close_BANG_.call(null,out);
var state_29449__$1 = state_29449;
var statearr_29479_29510 = state_29449__$1;
(statearr_29479_29510[(2)] = inst_29393);

(statearr_29479_29510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (14))){
var inst_29415 = (state_29449[(7)]);
var inst_29417 = cljs.core.chunked_seq_QMARK_.call(null,inst_29415);
var state_29449__$1 = state_29449;
if(inst_29417){
var statearr_29480_29511 = state_29449__$1;
(statearr_29480_29511[(1)] = (17));

} else {
var statearr_29481_29512 = state_29449__$1;
(statearr_29481_29512[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (16))){
var inst_29433 = (state_29449[(2)]);
var state_29449__$1 = state_29449;
var statearr_29482_29513 = state_29449__$1;
(statearr_29482_29513[(2)] = inst_29433);

(statearr_29482_29513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29450 === (10))){
var inst_29404 = (state_29449[(8)]);
var inst_29402 = (state_29449[(12)]);
var inst_29409 = cljs.core._nth.call(null,inst_29402,inst_29404);
var state_29449__$1 = state_29449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29449__$1,(13),out,inst_29409);
} else {
if((state_val_29450 === (18))){
var inst_29415 = (state_29449[(7)]);
var inst_29424 = cljs.core.first.call(null,inst_29415);
var state_29449__$1 = state_29449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29449__$1,(20),out,inst_29424);
} else {
if((state_val_29450 === (8))){
var inst_29404 = (state_29449[(8)]);
var inst_29403 = (state_29449[(10)]);
var inst_29406 = (inst_29404 < inst_29403);
var inst_29407 = inst_29406;
var state_29449__$1 = state_29449;
if(cljs.core.truth_(inst_29407)){
var statearr_29483_29514 = state_29449__$1;
(statearr_29483_29514[(1)] = (10));

} else {
var statearr_29484_29515 = state_29449__$1;
(statearr_29484_29515[(1)] = (11));

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
});})(c__27014__auto__))
;
return ((function (switch__26902__auto__,c__27014__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____0 = (function (){
var statearr_29488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29488[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__);

(statearr_29488[(1)] = (1));

return statearr_29488;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____1 = (function (state_29449){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29489){if((e29489 instanceof Object)){
var ex__26906__auto__ = e29489;
var statearr_29490_29516 = state_29449;
(statearr_29490_29516[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29517 = state_29449;
state_29449 = G__29517;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__ = function(state_29449){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____1.call(this,state_29449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26903__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto__))
})();
var state__27016__auto__ = (function (){var statearr_29491 = f__27015__auto__.call(null);
(statearr_29491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto__);

return statearr_29491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto__))
);

return c__27014__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29518 = [];
var len__22734__auto___29521 = arguments.length;
var i__22735__auto___29522 = (0);
while(true){
if((i__22735__auto___29522 < len__22734__auto___29521)){
args29518.push((arguments[i__22735__auto___29522]));

var G__29523 = (i__22735__auto___29522 + (1));
i__22735__auto___29522 = G__29523;
continue;
} else {
}
break;
}

var G__29520 = args29518.length;
switch (G__29520) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29518.length)].join('')));

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
var args29525 = [];
var len__22734__auto___29528 = arguments.length;
var i__22735__auto___29529 = (0);
while(true){
if((i__22735__auto___29529 < len__22734__auto___29528)){
args29525.push((arguments[i__22735__auto___29529]));

var G__29530 = (i__22735__auto___29529 + (1));
i__22735__auto___29529 = G__29530;
continue;
} else {
}
break;
}

var G__29527 = args29525.length;
switch (G__29527) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29525.length)].join('')));

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
var args29532 = [];
var len__22734__auto___29583 = arguments.length;
var i__22735__auto___29584 = (0);
while(true){
if((i__22735__auto___29584 < len__22734__auto___29583)){
args29532.push((arguments[i__22735__auto___29584]));

var G__29585 = (i__22735__auto___29584 + (1));
i__22735__auto___29584 = G__29585;
continue;
} else {
}
break;
}

var G__29534 = args29532.length;
switch (G__29534) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29532.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29587,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29587,out){
return (function (state_29558){
var state_val_29559 = (state_29558[(1)]);
if((state_val_29559 === (7))){
var inst_29553 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
var statearr_29560_29588 = state_29558__$1;
(statearr_29560_29588[(2)] = inst_29553);

(statearr_29560_29588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (1))){
var inst_29535 = null;
var state_29558__$1 = (function (){var statearr_29561 = state_29558;
(statearr_29561[(7)] = inst_29535);

return statearr_29561;
})();
var statearr_29562_29589 = state_29558__$1;
(statearr_29562_29589[(2)] = null);

(statearr_29562_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (4))){
var inst_29538 = (state_29558[(8)]);
var inst_29538__$1 = (state_29558[(2)]);
var inst_29539 = (inst_29538__$1 == null);
var inst_29540 = cljs.core.not.call(null,inst_29539);
var state_29558__$1 = (function (){var statearr_29563 = state_29558;
(statearr_29563[(8)] = inst_29538__$1);

return statearr_29563;
})();
if(inst_29540){
var statearr_29564_29590 = state_29558__$1;
(statearr_29564_29590[(1)] = (5));

} else {
var statearr_29565_29591 = state_29558__$1;
(statearr_29565_29591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (6))){
var state_29558__$1 = state_29558;
var statearr_29566_29592 = state_29558__$1;
(statearr_29566_29592[(2)] = null);

(statearr_29566_29592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (3))){
var inst_29555 = (state_29558[(2)]);
var inst_29556 = cljs.core.async.close_BANG_.call(null,out);
var state_29558__$1 = (function (){var statearr_29567 = state_29558;
(statearr_29567[(9)] = inst_29555);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29558__$1,inst_29556);
} else {
if((state_val_29559 === (2))){
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29558__$1,(4),ch);
} else {
if((state_val_29559 === (11))){
var inst_29538 = (state_29558[(8)]);
var inst_29547 = (state_29558[(2)]);
var inst_29535 = inst_29538;
var state_29558__$1 = (function (){var statearr_29568 = state_29558;
(statearr_29568[(10)] = inst_29547);

(statearr_29568[(7)] = inst_29535);

return statearr_29568;
})();
var statearr_29569_29593 = state_29558__$1;
(statearr_29569_29593[(2)] = null);

(statearr_29569_29593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (9))){
var inst_29538 = (state_29558[(8)]);
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29558__$1,(11),out,inst_29538);
} else {
if((state_val_29559 === (5))){
var inst_29538 = (state_29558[(8)]);
var inst_29535 = (state_29558[(7)]);
var inst_29542 = cljs.core._EQ_.call(null,inst_29538,inst_29535);
var state_29558__$1 = state_29558;
if(inst_29542){
var statearr_29571_29594 = state_29558__$1;
(statearr_29571_29594[(1)] = (8));

} else {
var statearr_29572_29595 = state_29558__$1;
(statearr_29572_29595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (10))){
var inst_29550 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
var statearr_29573_29596 = state_29558__$1;
(statearr_29573_29596[(2)] = inst_29550);

(statearr_29573_29596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (8))){
var inst_29535 = (state_29558[(7)]);
var tmp29570 = inst_29535;
var inst_29535__$1 = tmp29570;
var state_29558__$1 = (function (){var statearr_29574 = state_29558;
(statearr_29574[(7)] = inst_29535__$1);

return statearr_29574;
})();
var statearr_29575_29597 = state_29558__$1;
(statearr_29575_29597[(2)] = null);

(statearr_29575_29597[(1)] = (2));


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
});})(c__27014__auto___29587,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29587,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29579[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29579[(1)] = (1));

return statearr_29579;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29558){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29580){if((e29580 instanceof Object)){
var ex__26906__auto__ = e29580;
var statearr_29581_29598 = state_29558;
(statearr_29581_29598[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29599 = state_29558;
state_29558 = G__29599;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29587,out))
})();
var state__27016__auto__ = (function (){var statearr_29582 = f__27015__auto__.call(null);
(statearr_29582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29587);

return statearr_29582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29587,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29600 = [];
var len__22734__auto___29670 = arguments.length;
var i__22735__auto___29671 = (0);
while(true){
if((i__22735__auto___29671 < len__22734__auto___29670)){
args29600.push((arguments[i__22735__auto___29671]));

var G__29672 = (i__22735__auto___29671 + (1));
i__22735__auto___29671 = G__29672;
continue;
} else {
}
break;
}

var G__29602 = args29600.length;
switch (G__29602) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29600.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29674,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29674,out){
return (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_29675 = state_29640__$1;
(statearr_29642_29675[(2)] = inst_29636);

(statearr_29642_29675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var inst_29603 = (new Array(n));
var inst_29604 = inst_29603;
var inst_29605 = (0);
var state_29640__$1 = (function (){var statearr_29643 = state_29640;
(statearr_29643[(7)] = inst_29605);

(statearr_29643[(8)] = inst_29604);

return statearr_29643;
})();
var statearr_29644_29676 = state_29640__$1;
(statearr_29644_29676[(2)] = null);

(statearr_29644_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29608 = (state_29640[(9)]);
var inst_29608__$1 = (state_29640[(2)]);
var inst_29609 = (inst_29608__$1 == null);
var inst_29610 = cljs.core.not.call(null,inst_29609);
var state_29640__$1 = (function (){var statearr_29645 = state_29640;
(statearr_29645[(9)] = inst_29608__$1);

return statearr_29645;
})();
if(inst_29610){
var statearr_29646_29677 = state_29640__$1;
(statearr_29646_29677[(1)] = (5));

} else {
var statearr_29647_29678 = state_29640__$1;
(statearr_29647_29678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (15))){
var inst_29630 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29648_29679 = state_29640__$1;
(statearr_29648_29679[(2)] = inst_29630);

(statearr_29648_29679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (13))){
var state_29640__$1 = state_29640;
var statearr_29649_29680 = state_29640__$1;
(statearr_29649_29680[(2)] = null);

(statearr_29649_29680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var inst_29605 = (state_29640[(7)]);
var inst_29626 = (inst_29605 > (0));
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29626)){
var statearr_29650_29681 = state_29640__$1;
(statearr_29650_29681[(1)] = (12));

} else {
var statearr_29651_29682 = state_29640__$1;
(statearr_29651_29682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (12))){
var inst_29604 = (state_29640[(8)]);
var inst_29628 = cljs.core.vec.call(null,inst_29604);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29640__$1,(15),out,inst_29628);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29640__$1,(4),ch);
} else {
if((state_val_29641 === (11))){
var inst_29620 = (state_29640[(2)]);
var inst_29621 = (new Array(n));
var inst_29604 = inst_29621;
var inst_29605 = (0);
var state_29640__$1 = (function (){var statearr_29652 = state_29640;
(statearr_29652[(7)] = inst_29605);

(statearr_29652[(8)] = inst_29604);

(statearr_29652[(10)] = inst_29620);

return statearr_29652;
})();
var statearr_29653_29683 = state_29640__$1;
(statearr_29653_29683[(2)] = null);

(statearr_29653_29683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (9))){
var inst_29604 = (state_29640[(8)]);
var inst_29618 = cljs.core.vec.call(null,inst_29604);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29640__$1,(11),out,inst_29618);
} else {
if((state_val_29641 === (5))){
var inst_29613 = (state_29640[(11)]);
var inst_29605 = (state_29640[(7)]);
var inst_29604 = (state_29640[(8)]);
var inst_29608 = (state_29640[(9)]);
var inst_29612 = (inst_29604[inst_29605] = inst_29608);
var inst_29613__$1 = (inst_29605 + (1));
var inst_29614 = (inst_29613__$1 < n);
var state_29640__$1 = (function (){var statearr_29654 = state_29640;
(statearr_29654[(11)] = inst_29613__$1);

(statearr_29654[(12)] = inst_29612);

return statearr_29654;
})();
if(cljs.core.truth_(inst_29614)){
var statearr_29655_29684 = state_29640__$1;
(statearr_29655_29684[(1)] = (8));

} else {
var statearr_29656_29685 = state_29640__$1;
(statearr_29656_29685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (14))){
var inst_29633 = (state_29640[(2)]);
var inst_29634 = cljs.core.async.close_BANG_.call(null,out);
var state_29640__$1 = (function (){var statearr_29658 = state_29640;
(statearr_29658[(13)] = inst_29633);

return statearr_29658;
})();
var statearr_29659_29686 = state_29640__$1;
(statearr_29659_29686[(2)] = inst_29634);

(statearr_29659_29686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29624 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29660_29687 = state_29640__$1;
(statearr_29660_29687[(2)] = inst_29624);

(statearr_29660_29687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29613 = (state_29640[(11)]);
var inst_29604 = (state_29640[(8)]);
var tmp29657 = inst_29604;
var inst_29604__$1 = tmp29657;
var inst_29605 = inst_29613;
var state_29640__$1 = (function (){var statearr_29661 = state_29640;
(statearr_29661[(7)] = inst_29605);

(statearr_29661[(8)] = inst_29604__$1);

return statearr_29661;
})();
var statearr_29662_29688 = state_29640__$1;
(statearr_29662_29688[(2)] = null);

(statearr_29662_29688[(1)] = (2));


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
});})(c__27014__auto___29674,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29674,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29666[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29666[(1)] = (1));

return statearr_29666;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29640){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29667){if((e29667 instanceof Object)){
var ex__26906__auto__ = e29667;
var statearr_29668_29689 = state_29640;
(statearr_29668_29689[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29690 = state_29640;
state_29640 = G__29690;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29674,out))
})();
var state__27016__auto__ = (function (){var statearr_29669 = f__27015__auto__.call(null);
(statearr_29669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29674);

return statearr_29669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29674,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29691 = [];
var len__22734__auto___29765 = arguments.length;
var i__22735__auto___29766 = (0);
while(true){
if((i__22735__auto___29766 < len__22734__auto___29765)){
args29691.push((arguments[i__22735__auto___29766]));

var G__29767 = (i__22735__auto___29766 + (1));
i__22735__auto___29766 = G__29767;
continue;
} else {
}
break;
}

var G__29693 = args29691.length;
switch (G__29693) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29691.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27014__auto___29769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27014__auto___29769,out){
return (function (){
var f__27015__auto__ = (function (){var switch__26902__auto__ = ((function (c__27014__auto___29769,out){
return (function (state_29735){
var state_val_29736 = (state_29735[(1)]);
if((state_val_29736 === (7))){
var inst_29731 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29737_29770 = state_29735__$1;
(statearr_29737_29770[(2)] = inst_29731);

(statearr_29737_29770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (1))){
var inst_29694 = [];
var inst_29695 = inst_29694;
var inst_29696 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29735__$1 = (function (){var statearr_29738 = state_29735;
(statearr_29738[(7)] = inst_29696);

(statearr_29738[(8)] = inst_29695);

return statearr_29738;
})();
var statearr_29739_29771 = state_29735__$1;
(statearr_29739_29771[(2)] = null);

(statearr_29739_29771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (4))){
var inst_29699 = (state_29735[(9)]);
var inst_29699__$1 = (state_29735[(2)]);
var inst_29700 = (inst_29699__$1 == null);
var inst_29701 = cljs.core.not.call(null,inst_29700);
var state_29735__$1 = (function (){var statearr_29740 = state_29735;
(statearr_29740[(9)] = inst_29699__$1);

return statearr_29740;
})();
if(inst_29701){
var statearr_29741_29772 = state_29735__$1;
(statearr_29741_29772[(1)] = (5));

} else {
var statearr_29742_29773 = state_29735__$1;
(statearr_29742_29773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (15))){
var inst_29725 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29743_29774 = state_29735__$1;
(statearr_29743_29774[(2)] = inst_29725);

(statearr_29743_29774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (13))){
var state_29735__$1 = state_29735;
var statearr_29744_29775 = state_29735__$1;
(statearr_29744_29775[(2)] = null);

(statearr_29744_29775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (6))){
var inst_29695 = (state_29735[(8)]);
var inst_29720 = inst_29695.length;
var inst_29721 = (inst_29720 > (0));
var state_29735__$1 = state_29735;
if(cljs.core.truth_(inst_29721)){
var statearr_29745_29776 = state_29735__$1;
(statearr_29745_29776[(1)] = (12));

} else {
var statearr_29746_29777 = state_29735__$1;
(statearr_29746_29777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (3))){
var inst_29733 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29735__$1,inst_29733);
} else {
if((state_val_29736 === (12))){
var inst_29695 = (state_29735[(8)]);
var inst_29723 = cljs.core.vec.call(null,inst_29695);
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29735__$1,(15),out,inst_29723);
} else {
if((state_val_29736 === (2))){
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29735__$1,(4),ch);
} else {
if((state_val_29736 === (11))){
var inst_29703 = (state_29735[(10)]);
var inst_29699 = (state_29735[(9)]);
var inst_29713 = (state_29735[(2)]);
var inst_29714 = [];
var inst_29715 = inst_29714.push(inst_29699);
var inst_29695 = inst_29714;
var inst_29696 = inst_29703;
var state_29735__$1 = (function (){var statearr_29747 = state_29735;
(statearr_29747[(11)] = inst_29713);

(statearr_29747[(12)] = inst_29715);

(statearr_29747[(7)] = inst_29696);

(statearr_29747[(8)] = inst_29695);

return statearr_29747;
})();
var statearr_29748_29778 = state_29735__$1;
(statearr_29748_29778[(2)] = null);

(statearr_29748_29778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (9))){
var inst_29695 = (state_29735[(8)]);
var inst_29711 = cljs.core.vec.call(null,inst_29695);
var state_29735__$1 = state_29735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29735__$1,(11),out,inst_29711);
} else {
if((state_val_29736 === (5))){
var inst_29703 = (state_29735[(10)]);
var inst_29696 = (state_29735[(7)]);
var inst_29699 = (state_29735[(9)]);
var inst_29703__$1 = f.call(null,inst_29699);
var inst_29704 = cljs.core._EQ_.call(null,inst_29703__$1,inst_29696);
var inst_29705 = cljs.core.keyword_identical_QMARK_.call(null,inst_29696,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29706 = (inst_29704) || (inst_29705);
var state_29735__$1 = (function (){var statearr_29749 = state_29735;
(statearr_29749[(10)] = inst_29703__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29706)){
var statearr_29750_29779 = state_29735__$1;
(statearr_29750_29779[(1)] = (8));

} else {
var statearr_29751_29780 = state_29735__$1;
(statearr_29751_29780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (14))){
var inst_29728 = (state_29735[(2)]);
var inst_29729 = cljs.core.async.close_BANG_.call(null,out);
var state_29735__$1 = (function (){var statearr_29753 = state_29735;
(statearr_29753[(13)] = inst_29728);

return statearr_29753;
})();
var statearr_29754_29781 = state_29735__$1;
(statearr_29754_29781[(2)] = inst_29729);

(statearr_29754_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (10))){
var inst_29718 = (state_29735[(2)]);
var state_29735__$1 = state_29735;
var statearr_29755_29782 = state_29735__$1;
(statearr_29755_29782[(2)] = inst_29718);

(statearr_29755_29782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29736 === (8))){
var inst_29703 = (state_29735[(10)]);
var inst_29695 = (state_29735[(8)]);
var inst_29699 = (state_29735[(9)]);
var inst_29708 = inst_29695.push(inst_29699);
var tmp29752 = inst_29695;
var inst_29695__$1 = tmp29752;
var inst_29696 = inst_29703;
var state_29735__$1 = (function (){var statearr_29756 = state_29735;
(statearr_29756[(14)] = inst_29708);

(statearr_29756[(7)] = inst_29696);

(statearr_29756[(8)] = inst_29695__$1);

return statearr_29756;
})();
var statearr_29757_29783 = state_29735__$1;
(statearr_29757_29783[(2)] = null);

(statearr_29757_29783[(1)] = (2));


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
});})(c__27014__auto___29769,out))
;
return ((function (switch__26902__auto__,c__27014__auto___29769,out){
return (function() {
var cljs$core$async$state_machine__26903__auto__ = null;
var cljs$core$async$state_machine__26903__auto____0 = (function (){
var statearr_29761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29761[(0)] = cljs$core$async$state_machine__26903__auto__);

(statearr_29761[(1)] = (1));

return statearr_29761;
});
var cljs$core$async$state_machine__26903__auto____1 = (function (state_29735){
while(true){
var ret_value__26904__auto__ = (function (){try{while(true){
var result__26905__auto__ = switch__26902__auto__.call(null,state_29735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26905__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26905__auto__;
}
break;
}
}catch (e29762){if((e29762 instanceof Object)){
var ex__26906__auto__ = e29762;
var statearr_29763_29784 = state_29735;
(statearr_29763_29784[(5)] = ex__26906__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29785 = state_29735;
state_29735 = G__29785;
continue;
} else {
return ret_value__26904__auto__;
}
break;
}
});
cljs$core$async$state_machine__26903__auto__ = function(state_29735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26903__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26903__auto____1.call(this,state_29735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26903__auto____0;
cljs$core$async$state_machine__26903__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26903__auto____1;
return cljs$core$async$state_machine__26903__auto__;
})()
;})(switch__26902__auto__,c__27014__auto___29769,out))
})();
var state__27016__auto__ = (function (){var statearr_29764 = f__27015__auto__.call(null);
(statearr_29764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27014__auto___29769);

return statearr_29764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27016__auto__);
});})(c__27014__auto___29769,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
