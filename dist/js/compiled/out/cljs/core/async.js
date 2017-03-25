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
var args38130 = [];
var len__31204__auto___38136 = arguments.length;
var i__31205__auto___38137 = (0);
while(true){
if((i__31205__auto___38137 < len__31204__auto___38136)){
args38130.push((arguments[i__31205__auto___38137]));

var G__38138 = (i__31205__auto___38137 + (1));
i__31205__auto___38137 = G__38138;
continue;
} else {
}
break;
}

var G__38132 = args38130.length;
switch (G__38132) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38130.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38133 = (function (f,blockable,meta38134){
this.f = f;
this.blockable = blockable;
this.meta38134 = meta38134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38135,meta38134__$1){
var self__ = this;
var _38135__$1 = this;
return (new cljs.core.async.t_cljs$core$async38133(self__.f,self__.blockable,meta38134__$1));
});

cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38135){
var self__ = this;
var _38135__$1 = this;
return self__.meta38134;
});

cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38133.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38134","meta38134",844354906,null)], null);
});

cljs.core.async.t_cljs$core$async38133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38133";

cljs.core.async.t_cljs$core$async38133.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38133");
});

cljs.core.async.__GT_t_cljs$core$async38133 = (function cljs$core$async$__GT_t_cljs$core$async38133(f__$1,blockable__$1,meta38134){
return (new cljs.core.async.t_cljs$core$async38133(f__$1,blockable__$1,meta38134));
});

}

return (new cljs.core.async.t_cljs$core$async38133(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args38142 = [];
var len__31204__auto___38145 = arguments.length;
var i__31205__auto___38146 = (0);
while(true){
if((i__31205__auto___38146 < len__31204__auto___38145)){
args38142.push((arguments[i__31205__auto___38146]));

var G__38147 = (i__31205__auto___38146 + (1));
i__31205__auto___38146 = G__38147;
continue;
} else {
}
break;
}

var G__38144 = args38142.length;
switch (G__38144) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38142.length)].join('')));

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
var args38149 = [];
var len__31204__auto___38152 = arguments.length;
var i__31205__auto___38153 = (0);
while(true){
if((i__31205__auto___38153 < len__31204__auto___38152)){
args38149.push((arguments[i__31205__auto___38153]));

var G__38154 = (i__31205__auto___38153 + (1));
i__31205__auto___38153 = G__38154;
continue;
} else {
}
break;
}

var G__38151 = args38149.length;
switch (G__38151) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38149.length)].join('')));

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
var args38156 = [];
var len__31204__auto___38159 = arguments.length;
var i__31205__auto___38160 = (0);
while(true){
if((i__31205__auto___38160 < len__31204__auto___38159)){
args38156.push((arguments[i__31205__auto___38160]));

var G__38161 = (i__31205__auto___38160 + (1));
i__31205__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var G__38158 = args38156.length;
switch (G__38158) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38156.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38163 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38163);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38163,ret){
return (function (){
return fn1.call(null,val_38163);
});})(val_38163,ret))
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
var args38164 = [];
var len__31204__auto___38167 = arguments.length;
var i__31205__auto___38168 = (0);
while(true){
if((i__31205__auto___38168 < len__31204__auto___38167)){
args38164.push((arguments[i__31205__auto___38168]));

var G__38169 = (i__31205__auto___38168 + (1));
i__31205__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var G__38166 = args38164.length;
switch (G__38166) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38164.length)].join('')));

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
var n__31014__auto___38171 = n;
var x_38172 = (0);
while(true){
if((x_38172 < n__31014__auto___38171)){
(a[x_38172] = (0));

var G__38173 = (x_38172 + (1));
x_38172 = G__38173;
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

var G__38174 = (i + (1));
i = G__38174;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38178 = (function (flag,meta38179){
this.flag = flag;
this.meta38179 = meta38179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38180,meta38179__$1){
var self__ = this;
var _38180__$1 = this;
return (new cljs.core.async.t_cljs$core$async38178(self__.flag,meta38179__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38180){
var self__ = this;
var _38180__$1 = this;
return self__.meta38179;
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38179","meta38179",-170709254,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38178";

cljs.core.async.t_cljs$core$async38178.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38178");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38178 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38178(flag__$1,meta38179){
return (new cljs.core.async.t_cljs$core$async38178(flag__$1,meta38179));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38178(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38184 = (function (flag,cb,meta38185){
this.flag = flag;
this.cb = cb;
this.meta38185 = meta38185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38186,meta38185__$1){
var self__ = this;
var _38186__$1 = this;
return (new cljs.core.async.t_cljs$core$async38184(self__.flag,self__.cb,meta38185__$1));
});

cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38186){
var self__ = this;
var _38186__$1 = this;
return self__.meta38185;
});

cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38185","meta38185",501672453,null)], null);
});

cljs.core.async.t_cljs$core$async38184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38184";

cljs.core.async.t_cljs$core$async38184.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async38184");
});

cljs.core.async.__GT_t_cljs$core$async38184 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38184(flag__$1,cb__$1,meta38185){
return (new cljs.core.async.t_cljs$core$async38184(flag__$1,cb__$1,meta38185));
});

}

return (new cljs.core.async.t_cljs$core$async38184(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38187_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38187_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38188_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38188_SHARP_,port], null));
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
var G__38189 = (i + (1));
i = G__38189;
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
var len__31204__auto___38195 = arguments.length;
var i__31205__auto___38196 = (0);
while(true){
if((i__31205__auto___38196 < len__31204__auto___38195)){
args__31211__auto__.push((arguments[i__31205__auto___38196]));

var G__38197 = (i__31205__auto___38196 + (1));
i__31205__auto___38196 = G__38197;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38192){
var map__38193 = p__38192;
var map__38193__$1 = ((((!((map__38193 == null)))?((((map__38193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38193):map__38193);
var opts = map__38193__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38190){
var G__38191 = cljs.core.first.call(null,seq38190);
var seq38190__$1 = cljs.core.next.call(null,seq38190);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38191,seq38190__$1);
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
var args38198 = [];
var len__31204__auto___38248 = arguments.length;
var i__31205__auto___38249 = (0);
while(true){
if((i__31205__auto___38249 < len__31204__auto___38248)){
args38198.push((arguments[i__31205__auto___38249]));

var G__38250 = (i__31205__auto___38249 + (1));
i__31205__auto___38249 = G__38250;
continue;
} else {
}
break;
}

var G__38200 = args38198.length;
switch (G__38200) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38198.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38085__auto___38252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___38252){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___38252){
return (function (state_38224){
var state_val_38225 = (state_38224[(1)]);
if((state_val_38225 === (7))){
var inst_38220 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38226_38253 = state_38224__$1;
(statearr_38226_38253[(2)] = inst_38220);

(statearr_38226_38253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (1))){
var state_38224__$1 = state_38224;
var statearr_38227_38254 = state_38224__$1;
(statearr_38227_38254[(2)] = null);

(statearr_38227_38254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (4))){
var inst_38203 = (state_38224[(7)]);
var inst_38203__$1 = (state_38224[(2)]);
var inst_38204 = (inst_38203__$1 == null);
var state_38224__$1 = (function (){var statearr_38228 = state_38224;
(statearr_38228[(7)] = inst_38203__$1);

return statearr_38228;
})();
if(cljs.core.truth_(inst_38204)){
var statearr_38229_38255 = state_38224__$1;
(statearr_38229_38255[(1)] = (5));

} else {
var statearr_38230_38256 = state_38224__$1;
(statearr_38230_38256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (13))){
var state_38224__$1 = state_38224;
var statearr_38231_38257 = state_38224__$1;
(statearr_38231_38257[(2)] = null);

(statearr_38231_38257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (6))){
var inst_38203 = (state_38224[(7)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38224__$1,(11),to,inst_38203);
} else {
if((state_val_38225 === (3))){
var inst_38222 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38224__$1,inst_38222);
} else {
if((state_val_38225 === (12))){
var state_38224__$1 = state_38224;
var statearr_38232_38258 = state_38224__$1;
(statearr_38232_38258[(2)] = null);

(statearr_38232_38258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (2))){
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38224__$1,(4),from);
} else {
if((state_val_38225 === (11))){
var inst_38213 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38213)){
var statearr_38233_38259 = state_38224__$1;
(statearr_38233_38259[(1)] = (12));

} else {
var statearr_38234_38260 = state_38224__$1;
(statearr_38234_38260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (9))){
var state_38224__$1 = state_38224;
var statearr_38235_38261 = state_38224__$1;
(statearr_38235_38261[(2)] = null);

(statearr_38235_38261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (5))){
var state_38224__$1 = state_38224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38236_38262 = state_38224__$1;
(statearr_38236_38262[(1)] = (8));

} else {
var statearr_38237_38263 = state_38224__$1;
(statearr_38237_38263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (14))){
var inst_38218 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38238_38264 = state_38224__$1;
(statearr_38238_38264[(2)] = inst_38218);

(statearr_38238_38264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (10))){
var inst_38210 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38239_38265 = state_38224__$1;
(statearr_38239_38265[(2)] = inst_38210);

(statearr_38239_38265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (8))){
var inst_38207 = cljs.core.async.close_BANG_.call(null,to);
var state_38224__$1 = state_38224;
var statearr_38240_38266 = state_38224__$1;
(statearr_38240_38266[(2)] = inst_38207);

(statearr_38240_38266[(1)] = (10));


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
});})(c__38085__auto___38252))
;
return ((function (switch__37973__auto__,c__38085__auto___38252){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_38244 = [null,null,null,null,null,null,null,null];
(statearr_38244[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_38244[(1)] = (1));

return statearr_38244;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_38224){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38245){if((e38245 instanceof Object)){
var ex__37977__auto__ = e38245;
var statearr_38246_38267 = state_38224;
(statearr_38246_38267[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38268 = state_38224;
state_38224 = G__38268;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_38224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_38224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___38252))
})();
var state__38087__auto__ = (function (){var statearr_38247 = f__38086__auto__.call(null);
(statearr_38247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38252);

return statearr_38247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___38252))
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
return (function (p__38456){
var vec__38457 = p__38456;
var v = cljs.core.nth.call(null,vec__38457,(0),null);
var p = cljs.core.nth.call(null,vec__38457,(1),null);
var job = vec__38457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38085__auto___38643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results){
return (function (state_38464){
var state_val_38465 = (state_38464[(1)]);
if((state_val_38465 === (1))){
var state_38464__$1 = state_38464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38464__$1,(2),res,v);
} else {
if((state_val_38465 === (2))){
var inst_38461 = (state_38464[(2)]);
var inst_38462 = cljs.core.async.close_BANG_.call(null,res);
var state_38464__$1 = (function (){var statearr_38466 = state_38464;
(statearr_38466[(7)] = inst_38461);

return statearr_38466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38464__$1,inst_38462);
} else {
return null;
}
}
});})(c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results))
;
return ((function (switch__37973__auto__,c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_38470 = [null,null,null,null,null,null,null,null];
(statearr_38470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__);

(statearr_38470[(1)] = (1));

return statearr_38470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1 = (function (state_38464){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38471){if((e38471 instanceof Object)){
var ex__37977__auto__ = e38471;
var statearr_38472_38644 = state_38464;
(statearr_38472_38644[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38645 = state_38464;
state_38464 = G__38645;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = function(state_38464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1.call(this,state_38464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results))
})();
var state__38087__auto__ = (function (){var statearr_38473 = f__38086__auto__.call(null);
(statearr_38473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38643);

return statearr_38473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___38643,res,vec__38457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38474){
var vec__38475 = p__38474;
var v = cljs.core.nth.call(null,vec__38475,(0),null);
var p = cljs.core.nth.call(null,vec__38475,(1),null);
var job = vec__38475;
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
var n__31014__auto___38646 = n;
var __38647 = (0);
while(true){
if((__38647 < n__31014__auto___38646)){
var G__38478_38648 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38478_38648) {
case "compute":
var c__38085__auto___38650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38647,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (__38647,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function (state_38491){
var state_val_38492 = (state_38491[(1)]);
if((state_val_38492 === (1))){
var state_38491__$1 = state_38491;
var statearr_38493_38651 = state_38491__$1;
(statearr_38493_38651[(2)] = null);

(statearr_38493_38651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (2))){
var state_38491__$1 = state_38491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38491__$1,(4),jobs);
} else {
if((state_val_38492 === (3))){
var inst_38489 = (state_38491[(2)]);
var state_38491__$1 = state_38491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38491__$1,inst_38489);
} else {
if((state_val_38492 === (4))){
var inst_38481 = (state_38491[(2)]);
var inst_38482 = process.call(null,inst_38481);
var state_38491__$1 = state_38491;
if(cljs.core.truth_(inst_38482)){
var statearr_38494_38652 = state_38491__$1;
(statearr_38494_38652[(1)] = (5));

} else {
var statearr_38495_38653 = state_38491__$1;
(statearr_38495_38653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (5))){
var state_38491__$1 = state_38491;
var statearr_38496_38654 = state_38491__$1;
(statearr_38496_38654[(2)] = null);

(statearr_38496_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (6))){
var state_38491__$1 = state_38491;
var statearr_38497_38655 = state_38491__$1;
(statearr_38497_38655[(2)] = null);

(statearr_38497_38655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38492 === (7))){
var inst_38487 = (state_38491[(2)]);
var state_38491__$1 = state_38491;
var statearr_38498_38656 = state_38491__$1;
(statearr_38498_38656[(2)] = inst_38487);

(statearr_38498_38656[(1)] = (3));


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
});})(__38647,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
;
return ((function (__38647,switch__37973__auto__,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_38502 = [null,null,null,null,null,null,null];
(statearr_38502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__);

(statearr_38502[(1)] = (1));

return statearr_38502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1 = (function (state_38491){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38503){if((e38503 instanceof Object)){
var ex__37977__auto__ = e38503;
var statearr_38504_38657 = state_38491;
(statearr_38504_38657[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38658 = state_38491;
state_38491 = G__38658;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = function(state_38491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1.call(this,state_38491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__;
})()
;})(__38647,switch__37973__auto__,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
})();
var state__38087__auto__ = (function (){var statearr_38505 = f__38086__auto__.call(null);
(statearr_38505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38650);

return statearr_38505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(__38647,c__38085__auto___38650,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
);


break;
case "async":
var c__38085__auto___38659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38647,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (__38647,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function (state_38518){
var state_val_38519 = (state_38518[(1)]);
if((state_val_38519 === (1))){
var state_38518__$1 = state_38518;
var statearr_38520_38660 = state_38518__$1;
(statearr_38520_38660[(2)] = null);

(statearr_38520_38660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38519 === (2))){
var state_38518__$1 = state_38518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38518__$1,(4),jobs);
} else {
if((state_val_38519 === (3))){
var inst_38516 = (state_38518[(2)]);
var state_38518__$1 = state_38518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38518__$1,inst_38516);
} else {
if((state_val_38519 === (4))){
var inst_38508 = (state_38518[(2)]);
var inst_38509 = async.call(null,inst_38508);
var state_38518__$1 = state_38518;
if(cljs.core.truth_(inst_38509)){
var statearr_38521_38661 = state_38518__$1;
(statearr_38521_38661[(1)] = (5));

} else {
var statearr_38522_38662 = state_38518__$1;
(statearr_38522_38662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38519 === (5))){
var state_38518__$1 = state_38518;
var statearr_38523_38663 = state_38518__$1;
(statearr_38523_38663[(2)] = null);

(statearr_38523_38663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38519 === (6))){
var state_38518__$1 = state_38518;
var statearr_38524_38664 = state_38518__$1;
(statearr_38524_38664[(2)] = null);

(statearr_38524_38664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38519 === (7))){
var inst_38514 = (state_38518[(2)]);
var state_38518__$1 = state_38518;
var statearr_38525_38665 = state_38518__$1;
(statearr_38525_38665[(2)] = inst_38514);

(statearr_38525_38665[(1)] = (3));


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
});})(__38647,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
;
return ((function (__38647,switch__37973__auto__,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_38529 = [null,null,null,null,null,null,null];
(statearr_38529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__);

(statearr_38529[(1)] = (1));

return statearr_38529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1 = (function (state_38518){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38530){if((e38530 instanceof Object)){
var ex__37977__auto__ = e38530;
var statearr_38531_38666 = state_38518;
(statearr_38531_38666[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38667 = state_38518;
state_38518 = G__38667;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = function(state_38518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1.call(this,state_38518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__;
})()
;})(__38647,switch__37973__auto__,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
})();
var state__38087__auto__ = (function (){var statearr_38532 = f__38086__auto__.call(null);
(statearr_38532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38659);

return statearr_38532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(__38647,c__38085__auto___38659,G__38478_38648,n__31014__auto___38646,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38668 = (__38647 + (1));
__38647 = G__38668;
continue;
} else {
}
break;
}

var c__38085__auto___38669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___38669,jobs,results,process,async){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___38669,jobs,results,process,async){
return (function (state_38554){
var state_val_38555 = (state_38554[(1)]);
if((state_val_38555 === (1))){
var state_38554__$1 = state_38554;
var statearr_38556_38670 = state_38554__$1;
(statearr_38556_38670[(2)] = null);

(statearr_38556_38670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (2))){
var state_38554__$1 = state_38554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38554__$1,(4),from);
} else {
if((state_val_38555 === (3))){
var inst_38552 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38554__$1,inst_38552);
} else {
if((state_val_38555 === (4))){
var inst_38535 = (state_38554[(7)]);
var inst_38535__$1 = (state_38554[(2)]);
var inst_38536 = (inst_38535__$1 == null);
var state_38554__$1 = (function (){var statearr_38557 = state_38554;
(statearr_38557[(7)] = inst_38535__$1);

return statearr_38557;
})();
if(cljs.core.truth_(inst_38536)){
var statearr_38558_38671 = state_38554__$1;
(statearr_38558_38671[(1)] = (5));

} else {
var statearr_38559_38672 = state_38554__$1;
(statearr_38559_38672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (5))){
var inst_38538 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38554__$1 = state_38554;
var statearr_38560_38673 = state_38554__$1;
(statearr_38560_38673[(2)] = inst_38538);

(statearr_38560_38673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (6))){
var inst_38535 = (state_38554[(7)]);
var inst_38540 = (state_38554[(8)]);
var inst_38540__$1 = cljs.core.async.chan.call(null,(1));
var inst_38541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38542 = [inst_38535,inst_38540__$1];
var inst_38543 = (new cljs.core.PersistentVector(null,2,(5),inst_38541,inst_38542,null));
var state_38554__$1 = (function (){var statearr_38561 = state_38554;
(statearr_38561[(8)] = inst_38540__$1);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38554__$1,(8),jobs,inst_38543);
} else {
if((state_val_38555 === (7))){
var inst_38550 = (state_38554[(2)]);
var state_38554__$1 = state_38554;
var statearr_38562_38674 = state_38554__$1;
(statearr_38562_38674[(2)] = inst_38550);

(statearr_38562_38674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38555 === (8))){
var inst_38540 = (state_38554[(8)]);
var inst_38545 = (state_38554[(2)]);
var state_38554__$1 = (function (){var statearr_38563 = state_38554;
(statearr_38563[(9)] = inst_38545);

return statearr_38563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38554__$1,(9),results,inst_38540);
} else {
if((state_val_38555 === (9))){
var inst_38547 = (state_38554[(2)]);
var state_38554__$1 = (function (){var statearr_38564 = state_38554;
(statearr_38564[(10)] = inst_38547);

return statearr_38564;
})();
var statearr_38565_38675 = state_38554__$1;
(statearr_38565_38675[(2)] = null);

(statearr_38565_38675[(1)] = (2));


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
});})(c__38085__auto___38669,jobs,results,process,async))
;
return ((function (switch__37973__auto__,c__38085__auto___38669,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_38569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__);

(statearr_38569[(1)] = (1));

return statearr_38569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1 = (function (state_38554){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38570){if((e38570 instanceof Object)){
var ex__37977__auto__ = e38570;
var statearr_38571_38676 = state_38554;
(statearr_38571_38676[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38677 = state_38554;
state_38554 = G__38677;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = function(state_38554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1.call(this,state_38554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___38669,jobs,results,process,async))
})();
var state__38087__auto__ = (function (){var statearr_38572 = f__38086__auto__.call(null);
(statearr_38572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38669);

return statearr_38572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___38669,jobs,results,process,async))
);


var c__38085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto__,jobs,results,process,async){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto__,jobs,results,process,async){
return (function (state_38610){
var state_val_38611 = (state_38610[(1)]);
if((state_val_38611 === (7))){
var inst_38606 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38612_38678 = state_38610__$1;
(statearr_38612_38678[(2)] = inst_38606);

(statearr_38612_38678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (20))){
var state_38610__$1 = state_38610;
var statearr_38613_38679 = state_38610__$1;
(statearr_38613_38679[(2)] = null);

(statearr_38613_38679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (1))){
var state_38610__$1 = state_38610;
var statearr_38614_38680 = state_38610__$1;
(statearr_38614_38680[(2)] = null);

(statearr_38614_38680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (4))){
var inst_38575 = (state_38610[(7)]);
var inst_38575__$1 = (state_38610[(2)]);
var inst_38576 = (inst_38575__$1 == null);
var state_38610__$1 = (function (){var statearr_38615 = state_38610;
(statearr_38615[(7)] = inst_38575__$1);

return statearr_38615;
})();
if(cljs.core.truth_(inst_38576)){
var statearr_38616_38681 = state_38610__$1;
(statearr_38616_38681[(1)] = (5));

} else {
var statearr_38617_38682 = state_38610__$1;
(statearr_38617_38682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (15))){
var inst_38588 = (state_38610[(8)]);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38610__$1,(18),to,inst_38588);
} else {
if((state_val_38611 === (21))){
var inst_38601 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38618_38683 = state_38610__$1;
(statearr_38618_38683[(2)] = inst_38601);

(statearr_38618_38683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (13))){
var inst_38603 = (state_38610[(2)]);
var state_38610__$1 = (function (){var statearr_38619 = state_38610;
(statearr_38619[(9)] = inst_38603);

return statearr_38619;
})();
var statearr_38620_38684 = state_38610__$1;
(statearr_38620_38684[(2)] = null);

(statearr_38620_38684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (6))){
var inst_38575 = (state_38610[(7)]);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(11),inst_38575);
} else {
if((state_val_38611 === (17))){
var inst_38596 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38596)){
var statearr_38621_38685 = state_38610__$1;
(statearr_38621_38685[(1)] = (19));

} else {
var statearr_38622_38686 = state_38610__$1;
(statearr_38622_38686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (3))){
var inst_38608 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38610__$1,inst_38608);
} else {
if((state_val_38611 === (12))){
var inst_38585 = (state_38610[(10)]);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(14),inst_38585);
} else {
if((state_val_38611 === (2))){
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(4),results);
} else {
if((state_val_38611 === (19))){
var state_38610__$1 = state_38610;
var statearr_38623_38687 = state_38610__$1;
(statearr_38623_38687[(2)] = null);

(statearr_38623_38687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (11))){
var inst_38585 = (state_38610[(2)]);
var state_38610__$1 = (function (){var statearr_38624 = state_38610;
(statearr_38624[(10)] = inst_38585);

return statearr_38624;
})();
var statearr_38625_38688 = state_38610__$1;
(statearr_38625_38688[(2)] = null);

(statearr_38625_38688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (9))){
var state_38610__$1 = state_38610;
var statearr_38626_38689 = state_38610__$1;
(statearr_38626_38689[(2)] = null);

(statearr_38626_38689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (5))){
var state_38610__$1 = state_38610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38627_38690 = state_38610__$1;
(statearr_38627_38690[(1)] = (8));

} else {
var statearr_38628_38691 = state_38610__$1;
(statearr_38628_38691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (14))){
var inst_38588 = (state_38610[(8)]);
var inst_38590 = (state_38610[(11)]);
var inst_38588__$1 = (state_38610[(2)]);
var inst_38589 = (inst_38588__$1 == null);
var inst_38590__$1 = cljs.core.not.call(null,inst_38589);
var state_38610__$1 = (function (){var statearr_38629 = state_38610;
(statearr_38629[(8)] = inst_38588__$1);

(statearr_38629[(11)] = inst_38590__$1);

return statearr_38629;
})();
if(inst_38590__$1){
var statearr_38630_38692 = state_38610__$1;
(statearr_38630_38692[(1)] = (15));

} else {
var statearr_38631_38693 = state_38610__$1;
(statearr_38631_38693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (16))){
var inst_38590 = (state_38610[(11)]);
var state_38610__$1 = state_38610;
var statearr_38632_38694 = state_38610__$1;
(statearr_38632_38694[(2)] = inst_38590);

(statearr_38632_38694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (10))){
var inst_38582 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38633_38695 = state_38610__$1;
(statearr_38633_38695[(2)] = inst_38582);

(statearr_38633_38695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (18))){
var inst_38593 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38634_38696 = state_38610__$1;
(statearr_38634_38696[(2)] = inst_38593);

(statearr_38634_38696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (8))){
var inst_38579 = cljs.core.async.close_BANG_.call(null,to);
var state_38610__$1 = state_38610;
var statearr_38635_38697 = state_38610__$1;
(statearr_38635_38697[(2)] = inst_38579);

(statearr_38635_38697[(1)] = (10));


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
});})(c__38085__auto__,jobs,results,process,async))
;
return ((function (switch__37973__auto__,c__38085__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_38639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__);

(statearr_38639[(1)] = (1));

return statearr_38639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1 = (function (state_38610){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38640){if((e38640 instanceof Object)){
var ex__37977__auto__ = e38640;
var statearr_38641_38698 = state_38610;
(statearr_38641_38698[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38699 = state_38610;
state_38610 = G__38699;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__ = function(state_38610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1.call(this,state_38610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto__,jobs,results,process,async))
})();
var state__38087__auto__ = (function (){var statearr_38642 = f__38086__auto__.call(null);
(statearr_38642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto__);

return statearr_38642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto__,jobs,results,process,async))
);

return c__38085__auto__;
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
var args38700 = [];
var len__31204__auto___38703 = arguments.length;
var i__31205__auto___38704 = (0);
while(true){
if((i__31205__auto___38704 < len__31204__auto___38703)){
args38700.push((arguments[i__31205__auto___38704]));

var G__38705 = (i__31205__auto___38704 + (1));
i__31205__auto___38704 = G__38705;
continue;
} else {
}
break;
}

var G__38702 = args38700.length;
switch (G__38702) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38700.length)].join('')));

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
var args38707 = [];
var len__31204__auto___38710 = arguments.length;
var i__31205__auto___38711 = (0);
while(true){
if((i__31205__auto___38711 < len__31204__auto___38710)){
args38707.push((arguments[i__31205__auto___38711]));

var G__38712 = (i__31205__auto___38711 + (1));
i__31205__auto___38711 = G__38712;
continue;
} else {
}
break;
}

var G__38709 = args38707.length;
switch (G__38709) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38707.length)].join('')));

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
var args38714 = [];
var len__31204__auto___38767 = arguments.length;
var i__31205__auto___38768 = (0);
while(true){
if((i__31205__auto___38768 < len__31204__auto___38767)){
args38714.push((arguments[i__31205__auto___38768]));

var G__38769 = (i__31205__auto___38768 + (1));
i__31205__auto___38768 = G__38769;
continue;
} else {
}
break;
}

var G__38716 = args38714.length;
switch (G__38716) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38714.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38085__auto___38771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___38771,tc,fc){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___38771,tc,fc){
return (function (state_38742){
var state_val_38743 = (state_38742[(1)]);
if((state_val_38743 === (7))){
var inst_38738 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
var statearr_38744_38772 = state_38742__$1;
(statearr_38744_38772[(2)] = inst_38738);

(statearr_38744_38772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (1))){
var state_38742__$1 = state_38742;
var statearr_38745_38773 = state_38742__$1;
(statearr_38745_38773[(2)] = null);

(statearr_38745_38773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (4))){
var inst_38719 = (state_38742[(7)]);
var inst_38719__$1 = (state_38742[(2)]);
var inst_38720 = (inst_38719__$1 == null);
var state_38742__$1 = (function (){var statearr_38746 = state_38742;
(statearr_38746[(7)] = inst_38719__$1);

return statearr_38746;
})();
if(cljs.core.truth_(inst_38720)){
var statearr_38747_38774 = state_38742__$1;
(statearr_38747_38774[(1)] = (5));

} else {
var statearr_38748_38775 = state_38742__$1;
(statearr_38748_38775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (13))){
var state_38742__$1 = state_38742;
var statearr_38749_38776 = state_38742__$1;
(statearr_38749_38776[(2)] = null);

(statearr_38749_38776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (6))){
var inst_38719 = (state_38742[(7)]);
var inst_38725 = p.call(null,inst_38719);
var state_38742__$1 = state_38742;
if(cljs.core.truth_(inst_38725)){
var statearr_38750_38777 = state_38742__$1;
(statearr_38750_38777[(1)] = (9));

} else {
var statearr_38751_38778 = state_38742__$1;
(statearr_38751_38778[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (3))){
var inst_38740 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38742__$1,inst_38740);
} else {
if((state_val_38743 === (12))){
var state_38742__$1 = state_38742;
var statearr_38752_38779 = state_38742__$1;
(statearr_38752_38779[(2)] = null);

(statearr_38752_38779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (2))){
var state_38742__$1 = state_38742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38742__$1,(4),ch);
} else {
if((state_val_38743 === (11))){
var inst_38719 = (state_38742[(7)]);
var inst_38729 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38742__$1,(8),inst_38729,inst_38719);
} else {
if((state_val_38743 === (9))){
var state_38742__$1 = state_38742;
var statearr_38753_38780 = state_38742__$1;
(statearr_38753_38780[(2)] = tc);

(statearr_38753_38780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (5))){
var inst_38722 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38723 = cljs.core.async.close_BANG_.call(null,fc);
var state_38742__$1 = (function (){var statearr_38754 = state_38742;
(statearr_38754[(8)] = inst_38722);

return statearr_38754;
})();
var statearr_38755_38781 = state_38742__$1;
(statearr_38755_38781[(2)] = inst_38723);

(statearr_38755_38781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (14))){
var inst_38736 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
var statearr_38756_38782 = state_38742__$1;
(statearr_38756_38782[(2)] = inst_38736);

(statearr_38756_38782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (10))){
var state_38742__$1 = state_38742;
var statearr_38757_38783 = state_38742__$1;
(statearr_38757_38783[(2)] = fc);

(statearr_38757_38783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38743 === (8))){
var inst_38731 = (state_38742[(2)]);
var state_38742__$1 = state_38742;
if(cljs.core.truth_(inst_38731)){
var statearr_38758_38784 = state_38742__$1;
(statearr_38758_38784[(1)] = (12));

} else {
var statearr_38759_38785 = state_38742__$1;
(statearr_38759_38785[(1)] = (13));

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
});})(c__38085__auto___38771,tc,fc))
;
return ((function (switch__37973__auto__,c__38085__auto___38771,tc,fc){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_38763 = [null,null,null,null,null,null,null,null,null];
(statearr_38763[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_38763[(1)] = (1));

return statearr_38763;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_38742){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38764){if((e38764 instanceof Object)){
var ex__37977__auto__ = e38764;
var statearr_38765_38786 = state_38742;
(statearr_38765_38786[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38787 = state_38742;
state_38742 = G__38787;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_38742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_38742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___38771,tc,fc))
})();
var state__38087__auto__ = (function (){var statearr_38766 = f__38086__auto__.call(null);
(statearr_38766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___38771);

return statearr_38766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___38771,tc,fc))
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
var c__38085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto__){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto__){
return (function (state_38851){
var state_val_38852 = (state_38851[(1)]);
if((state_val_38852 === (7))){
var inst_38847 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
var statearr_38853_38874 = state_38851__$1;
(statearr_38853_38874[(2)] = inst_38847);

(statearr_38853_38874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (1))){
var inst_38831 = init;
var state_38851__$1 = (function (){var statearr_38854 = state_38851;
(statearr_38854[(7)] = inst_38831);

return statearr_38854;
})();
var statearr_38855_38875 = state_38851__$1;
(statearr_38855_38875[(2)] = null);

(statearr_38855_38875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (4))){
var inst_38834 = (state_38851[(8)]);
var inst_38834__$1 = (state_38851[(2)]);
var inst_38835 = (inst_38834__$1 == null);
var state_38851__$1 = (function (){var statearr_38856 = state_38851;
(statearr_38856[(8)] = inst_38834__$1);

return statearr_38856;
})();
if(cljs.core.truth_(inst_38835)){
var statearr_38857_38876 = state_38851__$1;
(statearr_38857_38876[(1)] = (5));

} else {
var statearr_38858_38877 = state_38851__$1;
(statearr_38858_38877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (6))){
var inst_38831 = (state_38851[(7)]);
var inst_38838 = (state_38851[(9)]);
var inst_38834 = (state_38851[(8)]);
var inst_38838__$1 = f.call(null,inst_38831,inst_38834);
var inst_38839 = cljs.core.reduced_QMARK_.call(null,inst_38838__$1);
var state_38851__$1 = (function (){var statearr_38859 = state_38851;
(statearr_38859[(9)] = inst_38838__$1);

return statearr_38859;
})();
if(inst_38839){
var statearr_38860_38878 = state_38851__$1;
(statearr_38860_38878[(1)] = (8));

} else {
var statearr_38861_38879 = state_38851__$1;
(statearr_38861_38879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (3))){
var inst_38849 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38851__$1,inst_38849);
} else {
if((state_val_38852 === (2))){
var state_38851__$1 = state_38851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38851__$1,(4),ch);
} else {
if((state_val_38852 === (9))){
var inst_38838 = (state_38851[(9)]);
var inst_38831 = inst_38838;
var state_38851__$1 = (function (){var statearr_38862 = state_38851;
(statearr_38862[(7)] = inst_38831);

return statearr_38862;
})();
var statearr_38863_38880 = state_38851__$1;
(statearr_38863_38880[(2)] = null);

(statearr_38863_38880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (5))){
var inst_38831 = (state_38851[(7)]);
var state_38851__$1 = state_38851;
var statearr_38864_38881 = state_38851__$1;
(statearr_38864_38881[(2)] = inst_38831);

(statearr_38864_38881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (10))){
var inst_38845 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
var statearr_38865_38882 = state_38851__$1;
(statearr_38865_38882[(2)] = inst_38845);

(statearr_38865_38882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (8))){
var inst_38838 = (state_38851[(9)]);
var inst_38841 = cljs.core.deref.call(null,inst_38838);
var state_38851__$1 = state_38851;
var statearr_38866_38883 = state_38851__$1;
(statearr_38866_38883[(2)] = inst_38841);

(statearr_38866_38883[(1)] = (10));


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
});})(c__38085__auto__))
;
return ((function (switch__37973__auto__,c__38085__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37974__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37974__auto____0 = (function (){
var statearr_38870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38870[(0)] = cljs$core$async$reduce_$_state_machine__37974__auto__);

(statearr_38870[(1)] = (1));

return statearr_38870;
});
var cljs$core$async$reduce_$_state_machine__37974__auto____1 = (function (state_38851){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38871){if((e38871 instanceof Object)){
var ex__37977__auto__ = e38871;
var statearr_38872_38884 = state_38851;
(statearr_38872_38884[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38885 = state_38851;
state_38851 = G__38885;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37974__auto__ = function(state_38851){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37974__auto____1.call(this,state_38851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37974__auto____0;
cljs$core$async$reduce_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37974__auto____1;
return cljs$core$async$reduce_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto__))
})();
var state__38087__auto__ = (function (){var statearr_38873 = f__38086__auto__.call(null);
(statearr_38873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto__);

return statearr_38873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto__))
);

return c__38085__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto__,f__$1){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto__,f__$1){
return (function (state_38905){
var state_val_38906 = (state_38905[(1)]);
if((state_val_38906 === (1))){
var inst_38900 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38905__$1,(2),inst_38900);
} else {
if((state_val_38906 === (2))){
var inst_38902 = (state_38905[(2)]);
var inst_38903 = f__$1.call(null,inst_38902);
var state_38905__$1 = state_38905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38905__$1,inst_38903);
} else {
return null;
}
}
});})(c__38085__auto__,f__$1))
;
return ((function (switch__37973__auto__,c__38085__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37974__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37974__auto____0 = (function (){
var statearr_38910 = [null,null,null,null,null,null,null];
(statearr_38910[(0)] = cljs$core$async$transduce_$_state_machine__37974__auto__);

(statearr_38910[(1)] = (1));

return statearr_38910;
});
var cljs$core$async$transduce_$_state_machine__37974__auto____1 = (function (state_38905){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38911){if((e38911 instanceof Object)){
var ex__37977__auto__ = e38911;
var statearr_38912_38914 = state_38905;
(statearr_38912_38914[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38915 = state_38905;
state_38905 = G__38915;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37974__auto__ = function(state_38905){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37974__auto____1.call(this,state_38905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37974__auto____0;
cljs$core$async$transduce_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37974__auto____1;
return cljs$core$async$transduce_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto__,f__$1))
})();
var state__38087__auto__ = (function (){var statearr_38913 = f__38086__auto__.call(null);
(statearr_38913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto__);

return statearr_38913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto__,f__$1))
);

return c__38085__auto__;
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
var args38916 = [];
var len__31204__auto___38968 = arguments.length;
var i__31205__auto___38969 = (0);
while(true){
if((i__31205__auto___38969 < len__31204__auto___38968)){
args38916.push((arguments[i__31205__auto___38969]));

var G__38970 = (i__31205__auto___38969 + (1));
i__31205__auto___38969 = G__38970;
continue;
} else {
}
break;
}

var G__38918 = args38916.length;
switch (G__38918) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38916.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto__){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto__){
return (function (state_38943){
var state_val_38944 = (state_38943[(1)]);
if((state_val_38944 === (7))){
var inst_38925 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38945_38972 = state_38943__$1;
(statearr_38945_38972[(2)] = inst_38925);

(statearr_38945_38972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (1))){
var inst_38919 = cljs.core.seq.call(null,coll);
var inst_38920 = inst_38919;
var state_38943__$1 = (function (){var statearr_38946 = state_38943;
(statearr_38946[(7)] = inst_38920);

return statearr_38946;
})();
var statearr_38947_38973 = state_38943__$1;
(statearr_38947_38973[(2)] = null);

(statearr_38947_38973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (4))){
var inst_38920 = (state_38943[(7)]);
var inst_38923 = cljs.core.first.call(null,inst_38920);
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38943__$1,(7),ch,inst_38923);
} else {
if((state_val_38944 === (13))){
var inst_38937 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38948_38974 = state_38943__$1;
(statearr_38948_38974[(2)] = inst_38937);

(statearr_38948_38974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (6))){
var inst_38928 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
if(cljs.core.truth_(inst_38928)){
var statearr_38949_38975 = state_38943__$1;
(statearr_38949_38975[(1)] = (8));

} else {
var statearr_38950_38976 = state_38943__$1;
(statearr_38950_38976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (3))){
var inst_38941 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38943__$1,inst_38941);
} else {
if((state_val_38944 === (12))){
var state_38943__$1 = state_38943;
var statearr_38951_38977 = state_38943__$1;
(statearr_38951_38977[(2)] = null);

(statearr_38951_38977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (2))){
var inst_38920 = (state_38943[(7)]);
var state_38943__$1 = state_38943;
if(cljs.core.truth_(inst_38920)){
var statearr_38952_38978 = state_38943__$1;
(statearr_38952_38978[(1)] = (4));

} else {
var statearr_38953_38979 = state_38943__$1;
(statearr_38953_38979[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (11))){
var inst_38934 = cljs.core.async.close_BANG_.call(null,ch);
var state_38943__$1 = state_38943;
var statearr_38954_38980 = state_38943__$1;
(statearr_38954_38980[(2)] = inst_38934);

(statearr_38954_38980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (9))){
var state_38943__$1 = state_38943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38955_38981 = state_38943__$1;
(statearr_38955_38981[(1)] = (11));

} else {
var statearr_38956_38982 = state_38943__$1;
(statearr_38956_38982[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (5))){
var inst_38920 = (state_38943[(7)]);
var state_38943__$1 = state_38943;
var statearr_38957_38983 = state_38943__$1;
(statearr_38957_38983[(2)] = inst_38920);

(statearr_38957_38983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (10))){
var inst_38939 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38958_38984 = state_38943__$1;
(statearr_38958_38984[(2)] = inst_38939);

(statearr_38958_38984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (8))){
var inst_38920 = (state_38943[(7)]);
var inst_38930 = cljs.core.next.call(null,inst_38920);
var inst_38920__$1 = inst_38930;
var state_38943__$1 = (function (){var statearr_38959 = state_38943;
(statearr_38959[(7)] = inst_38920__$1);

return statearr_38959;
})();
var statearr_38960_38985 = state_38943__$1;
(statearr_38960_38985[(2)] = null);

(statearr_38960_38985[(1)] = (2));


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
});})(c__38085__auto__))
;
return ((function (switch__37973__auto__,c__38085__auto__){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_38964 = [null,null,null,null,null,null,null,null];
(statearr_38964[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_38964[(1)] = (1));

return statearr_38964;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_38943){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_38943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e38965){if((e38965 instanceof Object)){
var ex__37977__auto__ = e38965;
var statearr_38966_38986 = state_38943;
(statearr_38966_38986[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38987 = state_38943;
state_38943 = G__38987;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_38943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_38943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto__))
})();
var state__38087__auto__ = (function (){var statearr_38967 = f__38086__auto__.call(null);
(statearr_38967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto__);

return statearr_38967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto__))
);

return c__38085__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async39213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39213 = (function (ch,cs,meta39214){
this.ch = ch;
this.cs = cs;
this.meta39214 = meta39214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39215,meta39214__$1){
var self__ = this;
var _39215__$1 = this;
return (new cljs.core.async.t_cljs$core$async39213(self__.ch,self__.cs,meta39214__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39215){
var self__ = this;
var _39215__$1 = this;
return self__.meta39214;
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39214","meta39214",-506188625,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39213";

cljs.core.async.t_cljs$core$async39213.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async39213");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39213 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39213(ch__$1,cs__$1,meta39214){
return (new cljs.core.async.t_cljs$core$async39213(ch__$1,cs__$1,meta39214));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39213(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38085__auto___39438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___39438,cs,m,dchan,dctr,done){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___39438,cs,m,dchan,dctr,done){
return (function (state_39350){
var state_val_39351 = (state_39350[(1)]);
if((state_val_39351 === (7))){
var inst_39346 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39352_39439 = state_39350__$1;
(statearr_39352_39439[(2)] = inst_39346);

(statearr_39352_39439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (20))){
var inst_39249 = (state_39350[(7)]);
var inst_39261 = cljs.core.first.call(null,inst_39249);
var inst_39262 = cljs.core.nth.call(null,inst_39261,(0),null);
var inst_39263 = cljs.core.nth.call(null,inst_39261,(1),null);
var state_39350__$1 = (function (){var statearr_39353 = state_39350;
(statearr_39353[(8)] = inst_39262);

return statearr_39353;
})();
if(cljs.core.truth_(inst_39263)){
var statearr_39354_39440 = state_39350__$1;
(statearr_39354_39440[(1)] = (22));

} else {
var statearr_39355_39441 = state_39350__$1;
(statearr_39355_39441[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (27))){
var inst_39291 = (state_39350[(9)]);
var inst_39298 = (state_39350[(10)]);
var inst_39293 = (state_39350[(11)]);
var inst_39218 = (state_39350[(12)]);
var inst_39298__$1 = cljs.core._nth.call(null,inst_39291,inst_39293);
var inst_39299 = cljs.core.async.put_BANG_.call(null,inst_39298__$1,inst_39218,done);
var state_39350__$1 = (function (){var statearr_39356 = state_39350;
(statearr_39356[(10)] = inst_39298__$1);

return statearr_39356;
})();
if(cljs.core.truth_(inst_39299)){
var statearr_39357_39442 = state_39350__$1;
(statearr_39357_39442[(1)] = (30));

} else {
var statearr_39358_39443 = state_39350__$1;
(statearr_39358_39443[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (1))){
var state_39350__$1 = state_39350;
var statearr_39359_39444 = state_39350__$1;
(statearr_39359_39444[(2)] = null);

(statearr_39359_39444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (24))){
var inst_39249 = (state_39350[(7)]);
var inst_39268 = (state_39350[(2)]);
var inst_39269 = cljs.core.next.call(null,inst_39249);
var inst_39227 = inst_39269;
var inst_39228 = null;
var inst_39229 = (0);
var inst_39230 = (0);
var state_39350__$1 = (function (){var statearr_39360 = state_39350;
(statearr_39360[(13)] = inst_39229);

(statearr_39360[(14)] = inst_39227);

(statearr_39360[(15)] = inst_39230);

(statearr_39360[(16)] = inst_39228);

(statearr_39360[(17)] = inst_39268);

return statearr_39360;
})();
var statearr_39361_39445 = state_39350__$1;
(statearr_39361_39445[(2)] = null);

(statearr_39361_39445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (39))){
var state_39350__$1 = state_39350;
var statearr_39365_39446 = state_39350__$1;
(statearr_39365_39446[(2)] = null);

(statearr_39365_39446[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (4))){
var inst_39218 = (state_39350[(12)]);
var inst_39218__$1 = (state_39350[(2)]);
var inst_39219 = (inst_39218__$1 == null);
var state_39350__$1 = (function (){var statearr_39366 = state_39350;
(statearr_39366[(12)] = inst_39218__$1);

return statearr_39366;
})();
if(cljs.core.truth_(inst_39219)){
var statearr_39367_39447 = state_39350__$1;
(statearr_39367_39447[(1)] = (5));

} else {
var statearr_39368_39448 = state_39350__$1;
(statearr_39368_39448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (15))){
var inst_39229 = (state_39350[(13)]);
var inst_39227 = (state_39350[(14)]);
var inst_39230 = (state_39350[(15)]);
var inst_39228 = (state_39350[(16)]);
var inst_39245 = (state_39350[(2)]);
var inst_39246 = (inst_39230 + (1));
var tmp39362 = inst_39229;
var tmp39363 = inst_39227;
var tmp39364 = inst_39228;
var inst_39227__$1 = tmp39363;
var inst_39228__$1 = tmp39364;
var inst_39229__$1 = tmp39362;
var inst_39230__$1 = inst_39246;
var state_39350__$1 = (function (){var statearr_39369 = state_39350;
(statearr_39369[(13)] = inst_39229__$1);

(statearr_39369[(18)] = inst_39245);

(statearr_39369[(14)] = inst_39227__$1);

(statearr_39369[(15)] = inst_39230__$1);

(statearr_39369[(16)] = inst_39228__$1);

return statearr_39369;
})();
var statearr_39370_39449 = state_39350__$1;
(statearr_39370_39449[(2)] = null);

(statearr_39370_39449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (21))){
var inst_39272 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39374_39450 = state_39350__$1;
(statearr_39374_39450[(2)] = inst_39272);

(statearr_39374_39450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (31))){
var inst_39298 = (state_39350[(10)]);
var inst_39302 = done.call(null,null);
var inst_39303 = cljs.core.async.untap_STAR_.call(null,m,inst_39298);
var state_39350__$1 = (function (){var statearr_39375 = state_39350;
(statearr_39375[(19)] = inst_39302);

return statearr_39375;
})();
var statearr_39376_39451 = state_39350__$1;
(statearr_39376_39451[(2)] = inst_39303);

(statearr_39376_39451[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (32))){
var inst_39291 = (state_39350[(9)]);
var inst_39290 = (state_39350[(20)]);
var inst_39292 = (state_39350[(21)]);
var inst_39293 = (state_39350[(11)]);
var inst_39305 = (state_39350[(2)]);
var inst_39306 = (inst_39293 + (1));
var tmp39371 = inst_39291;
var tmp39372 = inst_39290;
var tmp39373 = inst_39292;
var inst_39290__$1 = tmp39372;
var inst_39291__$1 = tmp39371;
var inst_39292__$1 = tmp39373;
var inst_39293__$1 = inst_39306;
var state_39350__$1 = (function (){var statearr_39377 = state_39350;
(statearr_39377[(22)] = inst_39305);

(statearr_39377[(9)] = inst_39291__$1);

(statearr_39377[(20)] = inst_39290__$1);

(statearr_39377[(21)] = inst_39292__$1);

(statearr_39377[(11)] = inst_39293__$1);

return statearr_39377;
})();
var statearr_39378_39452 = state_39350__$1;
(statearr_39378_39452[(2)] = null);

(statearr_39378_39452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (40))){
var inst_39318 = (state_39350[(23)]);
var inst_39322 = done.call(null,null);
var inst_39323 = cljs.core.async.untap_STAR_.call(null,m,inst_39318);
var state_39350__$1 = (function (){var statearr_39379 = state_39350;
(statearr_39379[(24)] = inst_39322);

return statearr_39379;
})();
var statearr_39380_39453 = state_39350__$1;
(statearr_39380_39453[(2)] = inst_39323);

(statearr_39380_39453[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (33))){
var inst_39309 = (state_39350[(25)]);
var inst_39311 = cljs.core.chunked_seq_QMARK_.call(null,inst_39309);
var state_39350__$1 = state_39350;
if(inst_39311){
var statearr_39381_39454 = state_39350__$1;
(statearr_39381_39454[(1)] = (36));

} else {
var statearr_39382_39455 = state_39350__$1;
(statearr_39382_39455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (13))){
var inst_39239 = (state_39350[(26)]);
var inst_39242 = cljs.core.async.close_BANG_.call(null,inst_39239);
var state_39350__$1 = state_39350;
var statearr_39383_39456 = state_39350__$1;
(statearr_39383_39456[(2)] = inst_39242);

(statearr_39383_39456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (22))){
var inst_39262 = (state_39350[(8)]);
var inst_39265 = cljs.core.async.close_BANG_.call(null,inst_39262);
var state_39350__$1 = state_39350;
var statearr_39384_39457 = state_39350__$1;
(statearr_39384_39457[(2)] = inst_39265);

(statearr_39384_39457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (36))){
var inst_39309 = (state_39350[(25)]);
var inst_39313 = cljs.core.chunk_first.call(null,inst_39309);
var inst_39314 = cljs.core.chunk_rest.call(null,inst_39309);
var inst_39315 = cljs.core.count.call(null,inst_39313);
var inst_39290 = inst_39314;
var inst_39291 = inst_39313;
var inst_39292 = inst_39315;
var inst_39293 = (0);
var state_39350__$1 = (function (){var statearr_39385 = state_39350;
(statearr_39385[(9)] = inst_39291);

(statearr_39385[(20)] = inst_39290);

(statearr_39385[(21)] = inst_39292);

(statearr_39385[(11)] = inst_39293);

return statearr_39385;
})();
var statearr_39386_39458 = state_39350__$1;
(statearr_39386_39458[(2)] = null);

(statearr_39386_39458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (41))){
var inst_39309 = (state_39350[(25)]);
var inst_39325 = (state_39350[(2)]);
var inst_39326 = cljs.core.next.call(null,inst_39309);
var inst_39290 = inst_39326;
var inst_39291 = null;
var inst_39292 = (0);
var inst_39293 = (0);
var state_39350__$1 = (function (){var statearr_39387 = state_39350;
(statearr_39387[(9)] = inst_39291);

(statearr_39387[(20)] = inst_39290);

(statearr_39387[(27)] = inst_39325);

(statearr_39387[(21)] = inst_39292);

(statearr_39387[(11)] = inst_39293);

return statearr_39387;
})();
var statearr_39388_39459 = state_39350__$1;
(statearr_39388_39459[(2)] = null);

(statearr_39388_39459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (43))){
var state_39350__$1 = state_39350;
var statearr_39389_39460 = state_39350__$1;
(statearr_39389_39460[(2)] = null);

(statearr_39389_39460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (29))){
var inst_39334 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39390_39461 = state_39350__$1;
(statearr_39390_39461[(2)] = inst_39334);

(statearr_39390_39461[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (44))){
var inst_39343 = (state_39350[(2)]);
var state_39350__$1 = (function (){var statearr_39391 = state_39350;
(statearr_39391[(28)] = inst_39343);

return statearr_39391;
})();
var statearr_39392_39462 = state_39350__$1;
(statearr_39392_39462[(2)] = null);

(statearr_39392_39462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (6))){
var inst_39282 = (state_39350[(29)]);
var inst_39281 = cljs.core.deref.call(null,cs);
var inst_39282__$1 = cljs.core.keys.call(null,inst_39281);
var inst_39283 = cljs.core.count.call(null,inst_39282__$1);
var inst_39284 = cljs.core.reset_BANG_.call(null,dctr,inst_39283);
var inst_39289 = cljs.core.seq.call(null,inst_39282__$1);
var inst_39290 = inst_39289;
var inst_39291 = null;
var inst_39292 = (0);
var inst_39293 = (0);
var state_39350__$1 = (function (){var statearr_39393 = state_39350;
(statearr_39393[(9)] = inst_39291);

(statearr_39393[(20)] = inst_39290);

(statearr_39393[(29)] = inst_39282__$1);

(statearr_39393[(21)] = inst_39292);

(statearr_39393[(30)] = inst_39284);

(statearr_39393[(11)] = inst_39293);

return statearr_39393;
})();
var statearr_39394_39463 = state_39350__$1;
(statearr_39394_39463[(2)] = null);

(statearr_39394_39463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (28))){
var inst_39290 = (state_39350[(20)]);
var inst_39309 = (state_39350[(25)]);
var inst_39309__$1 = cljs.core.seq.call(null,inst_39290);
var state_39350__$1 = (function (){var statearr_39395 = state_39350;
(statearr_39395[(25)] = inst_39309__$1);

return statearr_39395;
})();
if(inst_39309__$1){
var statearr_39396_39464 = state_39350__$1;
(statearr_39396_39464[(1)] = (33));

} else {
var statearr_39397_39465 = state_39350__$1;
(statearr_39397_39465[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (25))){
var inst_39292 = (state_39350[(21)]);
var inst_39293 = (state_39350[(11)]);
var inst_39295 = (inst_39293 < inst_39292);
var inst_39296 = inst_39295;
var state_39350__$1 = state_39350;
if(cljs.core.truth_(inst_39296)){
var statearr_39398_39466 = state_39350__$1;
(statearr_39398_39466[(1)] = (27));

} else {
var statearr_39399_39467 = state_39350__$1;
(statearr_39399_39467[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (34))){
var state_39350__$1 = state_39350;
var statearr_39400_39468 = state_39350__$1;
(statearr_39400_39468[(2)] = null);

(statearr_39400_39468[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (17))){
var state_39350__$1 = state_39350;
var statearr_39401_39469 = state_39350__$1;
(statearr_39401_39469[(2)] = null);

(statearr_39401_39469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (3))){
var inst_39348 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39350__$1,inst_39348);
} else {
if((state_val_39351 === (12))){
var inst_39277 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39402_39470 = state_39350__$1;
(statearr_39402_39470[(2)] = inst_39277);

(statearr_39402_39470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (2))){
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39350__$1,(4),ch);
} else {
if((state_val_39351 === (23))){
var state_39350__$1 = state_39350;
var statearr_39403_39471 = state_39350__$1;
(statearr_39403_39471[(2)] = null);

(statearr_39403_39471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (35))){
var inst_39332 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39404_39472 = state_39350__$1;
(statearr_39404_39472[(2)] = inst_39332);

(statearr_39404_39472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (19))){
var inst_39249 = (state_39350[(7)]);
var inst_39253 = cljs.core.chunk_first.call(null,inst_39249);
var inst_39254 = cljs.core.chunk_rest.call(null,inst_39249);
var inst_39255 = cljs.core.count.call(null,inst_39253);
var inst_39227 = inst_39254;
var inst_39228 = inst_39253;
var inst_39229 = inst_39255;
var inst_39230 = (0);
var state_39350__$1 = (function (){var statearr_39405 = state_39350;
(statearr_39405[(13)] = inst_39229);

(statearr_39405[(14)] = inst_39227);

(statearr_39405[(15)] = inst_39230);

(statearr_39405[(16)] = inst_39228);

return statearr_39405;
})();
var statearr_39406_39473 = state_39350__$1;
(statearr_39406_39473[(2)] = null);

(statearr_39406_39473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (11))){
var inst_39227 = (state_39350[(14)]);
var inst_39249 = (state_39350[(7)]);
var inst_39249__$1 = cljs.core.seq.call(null,inst_39227);
var state_39350__$1 = (function (){var statearr_39407 = state_39350;
(statearr_39407[(7)] = inst_39249__$1);

return statearr_39407;
})();
if(inst_39249__$1){
var statearr_39408_39474 = state_39350__$1;
(statearr_39408_39474[(1)] = (16));

} else {
var statearr_39409_39475 = state_39350__$1;
(statearr_39409_39475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (9))){
var inst_39279 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39410_39476 = state_39350__$1;
(statearr_39410_39476[(2)] = inst_39279);

(statearr_39410_39476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (5))){
var inst_39225 = cljs.core.deref.call(null,cs);
var inst_39226 = cljs.core.seq.call(null,inst_39225);
var inst_39227 = inst_39226;
var inst_39228 = null;
var inst_39229 = (0);
var inst_39230 = (0);
var state_39350__$1 = (function (){var statearr_39411 = state_39350;
(statearr_39411[(13)] = inst_39229);

(statearr_39411[(14)] = inst_39227);

(statearr_39411[(15)] = inst_39230);

(statearr_39411[(16)] = inst_39228);

return statearr_39411;
})();
var statearr_39412_39477 = state_39350__$1;
(statearr_39412_39477[(2)] = null);

(statearr_39412_39477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (14))){
var state_39350__$1 = state_39350;
var statearr_39413_39478 = state_39350__$1;
(statearr_39413_39478[(2)] = null);

(statearr_39413_39478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (45))){
var inst_39340 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39414_39479 = state_39350__$1;
(statearr_39414_39479[(2)] = inst_39340);

(statearr_39414_39479[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (26))){
var inst_39282 = (state_39350[(29)]);
var inst_39336 = (state_39350[(2)]);
var inst_39337 = cljs.core.seq.call(null,inst_39282);
var state_39350__$1 = (function (){var statearr_39415 = state_39350;
(statearr_39415[(31)] = inst_39336);

return statearr_39415;
})();
if(inst_39337){
var statearr_39416_39480 = state_39350__$1;
(statearr_39416_39480[(1)] = (42));

} else {
var statearr_39417_39481 = state_39350__$1;
(statearr_39417_39481[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (16))){
var inst_39249 = (state_39350[(7)]);
var inst_39251 = cljs.core.chunked_seq_QMARK_.call(null,inst_39249);
var state_39350__$1 = state_39350;
if(inst_39251){
var statearr_39418_39482 = state_39350__$1;
(statearr_39418_39482[(1)] = (19));

} else {
var statearr_39419_39483 = state_39350__$1;
(statearr_39419_39483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (38))){
var inst_39329 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39420_39484 = state_39350__$1;
(statearr_39420_39484[(2)] = inst_39329);

(statearr_39420_39484[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (30))){
var state_39350__$1 = state_39350;
var statearr_39421_39485 = state_39350__$1;
(statearr_39421_39485[(2)] = null);

(statearr_39421_39485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (10))){
var inst_39230 = (state_39350[(15)]);
var inst_39228 = (state_39350[(16)]);
var inst_39238 = cljs.core._nth.call(null,inst_39228,inst_39230);
var inst_39239 = cljs.core.nth.call(null,inst_39238,(0),null);
var inst_39240 = cljs.core.nth.call(null,inst_39238,(1),null);
var state_39350__$1 = (function (){var statearr_39422 = state_39350;
(statearr_39422[(26)] = inst_39239);

return statearr_39422;
})();
if(cljs.core.truth_(inst_39240)){
var statearr_39423_39486 = state_39350__$1;
(statearr_39423_39486[(1)] = (13));

} else {
var statearr_39424_39487 = state_39350__$1;
(statearr_39424_39487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (18))){
var inst_39275 = (state_39350[(2)]);
var state_39350__$1 = state_39350;
var statearr_39425_39488 = state_39350__$1;
(statearr_39425_39488[(2)] = inst_39275);

(statearr_39425_39488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (42))){
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39350__$1,(45),dchan);
} else {
if((state_val_39351 === (37))){
var inst_39309 = (state_39350[(25)]);
var inst_39318 = (state_39350[(23)]);
var inst_39218 = (state_39350[(12)]);
var inst_39318__$1 = cljs.core.first.call(null,inst_39309);
var inst_39319 = cljs.core.async.put_BANG_.call(null,inst_39318__$1,inst_39218,done);
var state_39350__$1 = (function (){var statearr_39426 = state_39350;
(statearr_39426[(23)] = inst_39318__$1);

return statearr_39426;
})();
if(cljs.core.truth_(inst_39319)){
var statearr_39427_39489 = state_39350__$1;
(statearr_39427_39489[(1)] = (39));

} else {
var statearr_39428_39490 = state_39350__$1;
(statearr_39428_39490[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39351 === (8))){
var inst_39229 = (state_39350[(13)]);
var inst_39230 = (state_39350[(15)]);
var inst_39232 = (inst_39230 < inst_39229);
var inst_39233 = inst_39232;
var state_39350__$1 = state_39350;
if(cljs.core.truth_(inst_39233)){
var statearr_39429_39491 = state_39350__$1;
(statearr_39429_39491[(1)] = (10));

} else {
var statearr_39430_39492 = state_39350__$1;
(statearr_39430_39492[(1)] = (11));

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
});})(c__38085__auto___39438,cs,m,dchan,dctr,done))
;
return ((function (switch__37973__auto__,c__38085__auto___39438,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37974__auto__ = null;
var cljs$core$async$mult_$_state_machine__37974__auto____0 = (function (){
var statearr_39434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39434[(0)] = cljs$core$async$mult_$_state_machine__37974__auto__);

(statearr_39434[(1)] = (1));

return statearr_39434;
});
var cljs$core$async$mult_$_state_machine__37974__auto____1 = (function (state_39350){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_39350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e39435){if((e39435 instanceof Object)){
var ex__37977__auto__ = e39435;
var statearr_39436_39493 = state_39350;
(statearr_39436_39493[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39494 = state_39350;
state_39350 = G__39494;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37974__auto__ = function(state_39350){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37974__auto____1.call(this,state_39350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37974__auto____0;
cljs$core$async$mult_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37974__auto____1;
return cljs$core$async$mult_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___39438,cs,m,dchan,dctr,done))
})();
var state__38087__auto__ = (function (){var statearr_39437 = f__38086__auto__.call(null);
(statearr_39437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___39438);

return statearr_39437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___39438,cs,m,dchan,dctr,done))
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
var args39495 = [];
var len__31204__auto___39498 = arguments.length;
var i__31205__auto___39499 = (0);
while(true){
if((i__31205__auto___39499 < len__31204__auto___39498)){
args39495.push((arguments[i__31205__auto___39499]));

var G__39500 = (i__31205__auto___39499 + (1));
i__31205__auto___39499 = G__39500;
continue;
} else {
}
break;
}

var G__39497 = args39495.length;
switch (G__39497) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39495.length)].join('')));

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
var len__31204__auto___39512 = arguments.length;
var i__31205__auto___39513 = (0);
while(true){
if((i__31205__auto___39513 < len__31204__auto___39512)){
args__31211__auto__.push((arguments[i__31205__auto___39513]));

var G__39514 = (i__31205__auto___39513 + (1));
i__31205__auto___39513 = G__39514;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((3) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31212__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39506){
var map__39507 = p__39506;
var map__39507__$1 = ((((!((map__39507 == null)))?((((map__39507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39507):map__39507);
var opts = map__39507__$1;
var statearr_39509_39515 = state;
(statearr_39509_39515[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39507,map__39507__$1,opts){
return (function (val){
var statearr_39510_39516 = state;
(statearr_39510_39516[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39507,map__39507__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39511_39517 = state;
(statearr_39511_39517[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39502){
var G__39503 = cljs.core.first.call(null,seq39502);
var seq39502__$1 = cljs.core.next.call(null,seq39502);
var G__39504 = cljs.core.first.call(null,seq39502__$1);
var seq39502__$2 = cljs.core.next.call(null,seq39502__$1);
var G__39505 = cljs.core.first.call(null,seq39502__$2);
var seq39502__$3 = cljs.core.next.call(null,seq39502__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39503,G__39504,G__39505,seq39502__$3);
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
if(typeof cljs.core.async.t_cljs$core$async39685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39685 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39686){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39686 = meta39686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39687,meta39686__$1){
var self__ = this;
var _39687__$1 = this;
return (new cljs.core.async.t_cljs$core$async39685(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39686__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39687){
var self__ = this;
var _39687__$1 = this;
return self__.meta39686;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39685.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39686","meta39686",1121223244,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39685";

cljs.core.async.t_cljs$core$async39685.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async39685");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39685 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39685(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39686){
return (new cljs.core.async.t_cljs$core$async39685(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39686));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39685(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38085__auto___39852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39789){
var state_val_39790 = (state_39789[(1)]);
if((state_val_39790 === (7))){
var inst_39704 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39791_39853 = state_39789__$1;
(statearr_39791_39853[(2)] = inst_39704);

(statearr_39791_39853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (20))){
var inst_39716 = (state_39789[(7)]);
var state_39789__$1 = state_39789;
var statearr_39792_39854 = state_39789__$1;
(statearr_39792_39854[(2)] = inst_39716);

(statearr_39792_39854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (27))){
var state_39789__$1 = state_39789;
var statearr_39793_39855 = state_39789__$1;
(statearr_39793_39855[(2)] = null);

(statearr_39793_39855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (1))){
var inst_39691 = (state_39789[(8)]);
var inst_39691__$1 = calc_state.call(null);
var inst_39693 = (inst_39691__$1 == null);
var inst_39694 = cljs.core.not.call(null,inst_39693);
var state_39789__$1 = (function (){var statearr_39794 = state_39789;
(statearr_39794[(8)] = inst_39691__$1);

return statearr_39794;
})();
if(inst_39694){
var statearr_39795_39856 = state_39789__$1;
(statearr_39795_39856[(1)] = (2));

} else {
var statearr_39796_39857 = state_39789__$1;
(statearr_39796_39857[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (24))){
var inst_39763 = (state_39789[(9)]);
var inst_39749 = (state_39789[(10)]);
var inst_39740 = (state_39789[(11)]);
var inst_39763__$1 = inst_39740.call(null,inst_39749);
var state_39789__$1 = (function (){var statearr_39797 = state_39789;
(statearr_39797[(9)] = inst_39763__$1);

return statearr_39797;
})();
if(cljs.core.truth_(inst_39763__$1)){
var statearr_39798_39858 = state_39789__$1;
(statearr_39798_39858[(1)] = (29));

} else {
var statearr_39799_39859 = state_39789__$1;
(statearr_39799_39859[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (4))){
var inst_39707 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39707)){
var statearr_39800_39860 = state_39789__$1;
(statearr_39800_39860[(1)] = (8));

} else {
var statearr_39801_39861 = state_39789__$1;
(statearr_39801_39861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (15))){
var inst_39734 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39734)){
var statearr_39802_39862 = state_39789__$1;
(statearr_39802_39862[(1)] = (19));

} else {
var statearr_39803_39863 = state_39789__$1;
(statearr_39803_39863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (21))){
var inst_39739 = (state_39789[(12)]);
var inst_39739__$1 = (state_39789[(2)]);
var inst_39740 = cljs.core.get.call(null,inst_39739__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39741 = cljs.core.get.call(null,inst_39739__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39742 = cljs.core.get.call(null,inst_39739__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39789__$1 = (function (){var statearr_39804 = state_39789;
(statearr_39804[(13)] = inst_39741);

(statearr_39804[(11)] = inst_39740);

(statearr_39804[(12)] = inst_39739__$1);

return statearr_39804;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39789__$1,(22),inst_39742);
} else {
if((state_val_39790 === (31))){
var inst_39771 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39771)){
var statearr_39805_39864 = state_39789__$1;
(statearr_39805_39864[(1)] = (32));

} else {
var statearr_39806_39865 = state_39789__$1;
(statearr_39806_39865[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (32))){
var inst_39748 = (state_39789[(14)]);
var state_39789__$1 = state_39789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39789__$1,(35),out,inst_39748);
} else {
if((state_val_39790 === (33))){
var inst_39739 = (state_39789[(12)]);
var inst_39716 = inst_39739;
var state_39789__$1 = (function (){var statearr_39807 = state_39789;
(statearr_39807[(7)] = inst_39716);

return statearr_39807;
})();
var statearr_39808_39866 = state_39789__$1;
(statearr_39808_39866[(2)] = null);

(statearr_39808_39866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (13))){
var inst_39716 = (state_39789[(7)]);
var inst_39723 = inst_39716.cljs$lang$protocol_mask$partition0$;
var inst_39724 = (inst_39723 & (64));
var inst_39725 = inst_39716.cljs$core$ISeq$;
var inst_39726 = (cljs.core.PROTOCOL_SENTINEL === inst_39725);
var inst_39727 = (inst_39724) || (inst_39726);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39727)){
var statearr_39809_39867 = state_39789__$1;
(statearr_39809_39867[(1)] = (16));

} else {
var statearr_39810_39868 = state_39789__$1;
(statearr_39810_39868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (22))){
var inst_39749 = (state_39789[(10)]);
var inst_39748 = (state_39789[(14)]);
var inst_39747 = (state_39789[(2)]);
var inst_39748__$1 = cljs.core.nth.call(null,inst_39747,(0),null);
var inst_39749__$1 = cljs.core.nth.call(null,inst_39747,(1),null);
var inst_39750 = (inst_39748__$1 == null);
var inst_39751 = cljs.core._EQ_.call(null,inst_39749__$1,change);
var inst_39752 = (inst_39750) || (inst_39751);
var state_39789__$1 = (function (){var statearr_39811 = state_39789;
(statearr_39811[(10)] = inst_39749__$1);

(statearr_39811[(14)] = inst_39748__$1);

return statearr_39811;
})();
if(cljs.core.truth_(inst_39752)){
var statearr_39812_39869 = state_39789__$1;
(statearr_39812_39869[(1)] = (23));

} else {
var statearr_39813_39870 = state_39789__$1;
(statearr_39813_39870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (36))){
var inst_39739 = (state_39789[(12)]);
var inst_39716 = inst_39739;
var state_39789__$1 = (function (){var statearr_39814 = state_39789;
(statearr_39814[(7)] = inst_39716);

return statearr_39814;
})();
var statearr_39815_39871 = state_39789__$1;
(statearr_39815_39871[(2)] = null);

(statearr_39815_39871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (29))){
var inst_39763 = (state_39789[(9)]);
var state_39789__$1 = state_39789;
var statearr_39816_39872 = state_39789__$1;
(statearr_39816_39872[(2)] = inst_39763);

(statearr_39816_39872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (6))){
var state_39789__$1 = state_39789;
var statearr_39817_39873 = state_39789__$1;
(statearr_39817_39873[(2)] = false);

(statearr_39817_39873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (28))){
var inst_39759 = (state_39789[(2)]);
var inst_39760 = calc_state.call(null);
var inst_39716 = inst_39760;
var state_39789__$1 = (function (){var statearr_39818 = state_39789;
(statearr_39818[(7)] = inst_39716);

(statearr_39818[(15)] = inst_39759);

return statearr_39818;
})();
var statearr_39819_39874 = state_39789__$1;
(statearr_39819_39874[(2)] = null);

(statearr_39819_39874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (25))){
var inst_39785 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39820_39875 = state_39789__$1;
(statearr_39820_39875[(2)] = inst_39785);

(statearr_39820_39875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (34))){
var inst_39783 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39821_39876 = state_39789__$1;
(statearr_39821_39876[(2)] = inst_39783);

(statearr_39821_39876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (17))){
var state_39789__$1 = state_39789;
var statearr_39822_39877 = state_39789__$1;
(statearr_39822_39877[(2)] = false);

(statearr_39822_39877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (3))){
var state_39789__$1 = state_39789;
var statearr_39823_39878 = state_39789__$1;
(statearr_39823_39878[(2)] = false);

(statearr_39823_39878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (12))){
var inst_39787 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39789__$1,inst_39787);
} else {
if((state_val_39790 === (2))){
var inst_39691 = (state_39789[(8)]);
var inst_39696 = inst_39691.cljs$lang$protocol_mask$partition0$;
var inst_39697 = (inst_39696 & (64));
var inst_39698 = inst_39691.cljs$core$ISeq$;
var inst_39699 = (cljs.core.PROTOCOL_SENTINEL === inst_39698);
var inst_39700 = (inst_39697) || (inst_39699);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39700)){
var statearr_39824_39879 = state_39789__$1;
(statearr_39824_39879[(1)] = (5));

} else {
var statearr_39825_39880 = state_39789__$1;
(statearr_39825_39880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (23))){
var inst_39748 = (state_39789[(14)]);
var inst_39754 = (inst_39748 == null);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39754)){
var statearr_39826_39881 = state_39789__$1;
(statearr_39826_39881[(1)] = (26));

} else {
var statearr_39827_39882 = state_39789__$1;
(statearr_39827_39882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (35))){
var inst_39774 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
if(cljs.core.truth_(inst_39774)){
var statearr_39828_39883 = state_39789__$1;
(statearr_39828_39883[(1)] = (36));

} else {
var statearr_39829_39884 = state_39789__$1;
(statearr_39829_39884[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (19))){
var inst_39716 = (state_39789[(7)]);
var inst_39736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39716);
var state_39789__$1 = state_39789;
var statearr_39830_39885 = state_39789__$1;
(statearr_39830_39885[(2)] = inst_39736);

(statearr_39830_39885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (11))){
var inst_39716 = (state_39789[(7)]);
var inst_39720 = (inst_39716 == null);
var inst_39721 = cljs.core.not.call(null,inst_39720);
var state_39789__$1 = state_39789;
if(inst_39721){
var statearr_39831_39886 = state_39789__$1;
(statearr_39831_39886[(1)] = (13));

} else {
var statearr_39832_39887 = state_39789__$1;
(statearr_39832_39887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (9))){
var inst_39691 = (state_39789[(8)]);
var state_39789__$1 = state_39789;
var statearr_39833_39888 = state_39789__$1;
(statearr_39833_39888[(2)] = inst_39691);

(statearr_39833_39888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (5))){
var state_39789__$1 = state_39789;
var statearr_39834_39889 = state_39789__$1;
(statearr_39834_39889[(2)] = true);

(statearr_39834_39889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (14))){
var state_39789__$1 = state_39789;
var statearr_39835_39890 = state_39789__$1;
(statearr_39835_39890[(2)] = false);

(statearr_39835_39890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (26))){
var inst_39749 = (state_39789[(10)]);
var inst_39756 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39749);
var state_39789__$1 = state_39789;
var statearr_39836_39891 = state_39789__$1;
(statearr_39836_39891[(2)] = inst_39756);

(statearr_39836_39891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (16))){
var state_39789__$1 = state_39789;
var statearr_39837_39892 = state_39789__$1;
(statearr_39837_39892[(2)] = true);

(statearr_39837_39892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (38))){
var inst_39779 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39838_39893 = state_39789__$1;
(statearr_39838_39893[(2)] = inst_39779);

(statearr_39838_39893[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (30))){
var inst_39741 = (state_39789[(13)]);
var inst_39749 = (state_39789[(10)]);
var inst_39740 = (state_39789[(11)]);
var inst_39766 = cljs.core.empty_QMARK_.call(null,inst_39740);
var inst_39767 = inst_39741.call(null,inst_39749);
var inst_39768 = cljs.core.not.call(null,inst_39767);
var inst_39769 = (inst_39766) && (inst_39768);
var state_39789__$1 = state_39789;
var statearr_39839_39894 = state_39789__$1;
(statearr_39839_39894[(2)] = inst_39769);

(statearr_39839_39894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (10))){
var inst_39691 = (state_39789[(8)]);
var inst_39712 = (state_39789[(2)]);
var inst_39713 = cljs.core.get.call(null,inst_39712,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39714 = cljs.core.get.call(null,inst_39712,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39715 = cljs.core.get.call(null,inst_39712,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39716 = inst_39691;
var state_39789__$1 = (function (){var statearr_39840 = state_39789;
(statearr_39840[(16)] = inst_39714);

(statearr_39840[(17)] = inst_39713);

(statearr_39840[(7)] = inst_39716);

(statearr_39840[(18)] = inst_39715);

return statearr_39840;
})();
var statearr_39841_39895 = state_39789__$1;
(statearr_39841_39895[(2)] = null);

(statearr_39841_39895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (18))){
var inst_39731 = (state_39789[(2)]);
var state_39789__$1 = state_39789;
var statearr_39842_39896 = state_39789__$1;
(statearr_39842_39896[(2)] = inst_39731);

(statearr_39842_39896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (37))){
var state_39789__$1 = state_39789;
var statearr_39843_39897 = state_39789__$1;
(statearr_39843_39897[(2)] = null);

(statearr_39843_39897[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39790 === (8))){
var inst_39691 = (state_39789[(8)]);
var inst_39709 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39691);
var state_39789__$1 = state_39789;
var statearr_39844_39898 = state_39789__$1;
(statearr_39844_39898[(2)] = inst_39709);

(statearr_39844_39898[(1)] = (10));


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
});})(c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37973__auto__,c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37974__auto__ = null;
var cljs$core$async$mix_$_state_machine__37974__auto____0 = (function (){
var statearr_39848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39848[(0)] = cljs$core$async$mix_$_state_machine__37974__auto__);

(statearr_39848[(1)] = (1));

return statearr_39848;
});
var cljs$core$async$mix_$_state_machine__37974__auto____1 = (function (state_39789){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_39789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e39849){if((e39849 instanceof Object)){
var ex__37977__auto__ = e39849;
var statearr_39850_39899 = state_39789;
(statearr_39850_39899[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39900 = state_39789;
state_39789 = G__39900;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37974__auto__ = function(state_39789){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37974__auto____1.call(this,state_39789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37974__auto____0;
cljs$core$async$mix_$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37974__auto____1;
return cljs$core$async$mix_$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38087__auto__ = (function (){var statearr_39851 = f__38086__auto__.call(null);
(statearr_39851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___39852);

return statearr_39851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___39852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args39901 = [];
var len__31204__auto___39904 = arguments.length;
var i__31205__auto___39905 = (0);
while(true){
if((i__31205__auto___39905 < len__31204__auto___39904)){
args39901.push((arguments[i__31205__auto___39905]));

var G__39906 = (i__31205__auto___39905 + (1));
i__31205__auto___39905 = G__39906;
continue;
} else {
}
break;
}

var G__39903 = args39901.length;
switch (G__39903) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39901.length)].join('')));

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
var args39909 = [];
var len__31204__auto___40034 = arguments.length;
var i__31205__auto___40035 = (0);
while(true){
if((i__31205__auto___40035 < len__31204__auto___40034)){
args39909.push((arguments[i__31205__auto___40035]));

var G__40036 = (i__31205__auto___40035 + (1));
i__31205__auto___40035 = G__40036;
continue;
} else {
}
break;
}

var G__39911 = args39909.length;
switch (G__39911) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39909.length)].join('')));

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
return (function (p1__39908_SHARP_){
if(cljs.core.truth_(p1__39908_SHARP_.call(null,topic))){
return p1__39908_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39908_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39912 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39913){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39913 = meta39913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39914,meta39913__$1){
var self__ = this;
var _39914__$1 = this;
return (new cljs.core.async.t_cljs$core$async39912(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39913__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39914){
var self__ = this;
var _39914__$1 = this;
return self__.meta39913;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39913","meta39913",-356519439,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39912";

cljs.core.async.t_cljs$core$async39912.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async39912");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39912 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39912(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39913){
return (new cljs.core.async.t_cljs$core$async39912(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39913));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39912(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38085__auto___40038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40038,mults,ensure_mult,p){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40038,mults,ensure_mult,p){
return (function (state_39986){
var state_val_39987 = (state_39986[(1)]);
if((state_val_39987 === (7))){
var inst_39982 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39988_40039 = state_39986__$1;
(statearr_39988_40039[(2)] = inst_39982);

(statearr_39988_40039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (20))){
var state_39986__$1 = state_39986;
var statearr_39989_40040 = state_39986__$1;
(statearr_39989_40040[(2)] = null);

(statearr_39989_40040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (1))){
var state_39986__$1 = state_39986;
var statearr_39990_40041 = state_39986__$1;
(statearr_39990_40041[(2)] = null);

(statearr_39990_40041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (24))){
var inst_39965 = (state_39986[(7)]);
var inst_39974 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39965);
var state_39986__$1 = state_39986;
var statearr_39991_40042 = state_39986__$1;
(statearr_39991_40042[(2)] = inst_39974);

(statearr_39991_40042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (4))){
var inst_39917 = (state_39986[(8)]);
var inst_39917__$1 = (state_39986[(2)]);
var inst_39918 = (inst_39917__$1 == null);
var state_39986__$1 = (function (){var statearr_39992 = state_39986;
(statearr_39992[(8)] = inst_39917__$1);

return statearr_39992;
})();
if(cljs.core.truth_(inst_39918)){
var statearr_39993_40043 = state_39986__$1;
(statearr_39993_40043[(1)] = (5));

} else {
var statearr_39994_40044 = state_39986__$1;
(statearr_39994_40044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (15))){
var inst_39959 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_39995_40045 = state_39986__$1;
(statearr_39995_40045[(2)] = inst_39959);

(statearr_39995_40045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (21))){
var inst_39979 = (state_39986[(2)]);
var state_39986__$1 = (function (){var statearr_39996 = state_39986;
(statearr_39996[(9)] = inst_39979);

return statearr_39996;
})();
var statearr_39997_40046 = state_39986__$1;
(statearr_39997_40046[(2)] = null);

(statearr_39997_40046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (13))){
var inst_39941 = (state_39986[(10)]);
var inst_39943 = cljs.core.chunked_seq_QMARK_.call(null,inst_39941);
var state_39986__$1 = state_39986;
if(inst_39943){
var statearr_39998_40047 = state_39986__$1;
(statearr_39998_40047[(1)] = (16));

} else {
var statearr_39999_40048 = state_39986__$1;
(statearr_39999_40048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (22))){
var inst_39971 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39971)){
var statearr_40000_40049 = state_39986__$1;
(statearr_40000_40049[(1)] = (23));

} else {
var statearr_40001_40050 = state_39986__$1;
(statearr_40001_40050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (6))){
var inst_39965 = (state_39986[(7)]);
var inst_39917 = (state_39986[(8)]);
var inst_39967 = (state_39986[(11)]);
var inst_39965__$1 = topic_fn.call(null,inst_39917);
var inst_39966 = cljs.core.deref.call(null,mults);
var inst_39967__$1 = cljs.core.get.call(null,inst_39966,inst_39965__$1);
var state_39986__$1 = (function (){var statearr_40002 = state_39986;
(statearr_40002[(7)] = inst_39965__$1);

(statearr_40002[(11)] = inst_39967__$1);

return statearr_40002;
})();
if(cljs.core.truth_(inst_39967__$1)){
var statearr_40003_40051 = state_39986__$1;
(statearr_40003_40051[(1)] = (19));

} else {
var statearr_40004_40052 = state_39986__$1;
(statearr_40004_40052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (25))){
var inst_39976 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40005_40053 = state_39986__$1;
(statearr_40005_40053[(2)] = inst_39976);

(statearr_40005_40053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (17))){
var inst_39941 = (state_39986[(10)]);
var inst_39950 = cljs.core.first.call(null,inst_39941);
var inst_39951 = cljs.core.async.muxch_STAR_.call(null,inst_39950);
var inst_39952 = cljs.core.async.close_BANG_.call(null,inst_39951);
var inst_39953 = cljs.core.next.call(null,inst_39941);
var inst_39927 = inst_39953;
var inst_39928 = null;
var inst_39929 = (0);
var inst_39930 = (0);
var state_39986__$1 = (function (){var statearr_40006 = state_39986;
(statearr_40006[(12)] = inst_39930);

(statearr_40006[(13)] = inst_39929);

(statearr_40006[(14)] = inst_39928);

(statearr_40006[(15)] = inst_39927);

(statearr_40006[(16)] = inst_39952);

return statearr_40006;
})();
var statearr_40007_40054 = state_39986__$1;
(statearr_40007_40054[(2)] = null);

(statearr_40007_40054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (3))){
var inst_39984 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39986__$1,inst_39984);
} else {
if((state_val_39987 === (12))){
var inst_39961 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40008_40055 = state_39986__$1;
(statearr_40008_40055[(2)] = inst_39961);

(statearr_40008_40055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (2))){
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39986__$1,(4),ch);
} else {
if((state_val_39987 === (23))){
var state_39986__$1 = state_39986;
var statearr_40009_40056 = state_39986__$1;
(statearr_40009_40056[(2)] = null);

(statearr_40009_40056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (19))){
var inst_39917 = (state_39986[(8)]);
var inst_39967 = (state_39986[(11)]);
var inst_39969 = cljs.core.async.muxch_STAR_.call(null,inst_39967);
var state_39986__$1 = state_39986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39986__$1,(22),inst_39969,inst_39917);
} else {
if((state_val_39987 === (11))){
var inst_39941 = (state_39986[(10)]);
var inst_39927 = (state_39986[(15)]);
var inst_39941__$1 = cljs.core.seq.call(null,inst_39927);
var state_39986__$1 = (function (){var statearr_40010 = state_39986;
(statearr_40010[(10)] = inst_39941__$1);

return statearr_40010;
})();
if(inst_39941__$1){
var statearr_40011_40057 = state_39986__$1;
(statearr_40011_40057[(1)] = (13));

} else {
var statearr_40012_40058 = state_39986__$1;
(statearr_40012_40058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (9))){
var inst_39963 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40013_40059 = state_39986__$1;
(statearr_40013_40059[(2)] = inst_39963);

(statearr_40013_40059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (5))){
var inst_39924 = cljs.core.deref.call(null,mults);
var inst_39925 = cljs.core.vals.call(null,inst_39924);
var inst_39926 = cljs.core.seq.call(null,inst_39925);
var inst_39927 = inst_39926;
var inst_39928 = null;
var inst_39929 = (0);
var inst_39930 = (0);
var state_39986__$1 = (function (){var statearr_40014 = state_39986;
(statearr_40014[(12)] = inst_39930);

(statearr_40014[(13)] = inst_39929);

(statearr_40014[(14)] = inst_39928);

(statearr_40014[(15)] = inst_39927);

return statearr_40014;
})();
var statearr_40015_40060 = state_39986__$1;
(statearr_40015_40060[(2)] = null);

(statearr_40015_40060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (14))){
var state_39986__$1 = state_39986;
var statearr_40019_40061 = state_39986__$1;
(statearr_40019_40061[(2)] = null);

(statearr_40019_40061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (16))){
var inst_39941 = (state_39986[(10)]);
var inst_39945 = cljs.core.chunk_first.call(null,inst_39941);
var inst_39946 = cljs.core.chunk_rest.call(null,inst_39941);
var inst_39947 = cljs.core.count.call(null,inst_39945);
var inst_39927 = inst_39946;
var inst_39928 = inst_39945;
var inst_39929 = inst_39947;
var inst_39930 = (0);
var state_39986__$1 = (function (){var statearr_40020 = state_39986;
(statearr_40020[(12)] = inst_39930);

(statearr_40020[(13)] = inst_39929);

(statearr_40020[(14)] = inst_39928);

(statearr_40020[(15)] = inst_39927);

return statearr_40020;
})();
var statearr_40021_40062 = state_39986__$1;
(statearr_40021_40062[(2)] = null);

(statearr_40021_40062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (10))){
var inst_39930 = (state_39986[(12)]);
var inst_39929 = (state_39986[(13)]);
var inst_39928 = (state_39986[(14)]);
var inst_39927 = (state_39986[(15)]);
var inst_39935 = cljs.core._nth.call(null,inst_39928,inst_39930);
var inst_39936 = cljs.core.async.muxch_STAR_.call(null,inst_39935);
var inst_39937 = cljs.core.async.close_BANG_.call(null,inst_39936);
var inst_39938 = (inst_39930 + (1));
var tmp40016 = inst_39929;
var tmp40017 = inst_39928;
var tmp40018 = inst_39927;
var inst_39927__$1 = tmp40018;
var inst_39928__$1 = tmp40017;
var inst_39929__$1 = tmp40016;
var inst_39930__$1 = inst_39938;
var state_39986__$1 = (function (){var statearr_40022 = state_39986;
(statearr_40022[(12)] = inst_39930__$1);

(statearr_40022[(13)] = inst_39929__$1);

(statearr_40022[(14)] = inst_39928__$1);

(statearr_40022[(15)] = inst_39927__$1);

(statearr_40022[(17)] = inst_39937);

return statearr_40022;
})();
var statearr_40023_40063 = state_39986__$1;
(statearr_40023_40063[(2)] = null);

(statearr_40023_40063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (18))){
var inst_39956 = (state_39986[(2)]);
var state_39986__$1 = state_39986;
var statearr_40024_40064 = state_39986__$1;
(statearr_40024_40064[(2)] = inst_39956);

(statearr_40024_40064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39987 === (8))){
var inst_39930 = (state_39986[(12)]);
var inst_39929 = (state_39986[(13)]);
var inst_39932 = (inst_39930 < inst_39929);
var inst_39933 = inst_39932;
var state_39986__$1 = state_39986;
if(cljs.core.truth_(inst_39933)){
var statearr_40025_40065 = state_39986__$1;
(statearr_40025_40065[(1)] = (10));

} else {
var statearr_40026_40066 = state_39986__$1;
(statearr_40026_40066[(1)] = (11));

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
});})(c__38085__auto___40038,mults,ensure_mult,p))
;
return ((function (switch__37973__auto__,c__38085__auto___40038,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40030[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40030[(1)] = (1));

return statearr_40030;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_39986){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_39986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40031){if((e40031 instanceof Object)){
var ex__37977__auto__ = e40031;
var statearr_40032_40067 = state_39986;
(statearr_40032_40067[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40068 = state_39986;
state_39986 = G__40068;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_39986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_39986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40038,mults,ensure_mult,p))
})();
var state__38087__auto__ = (function (){var statearr_40033 = f__38086__auto__.call(null);
(statearr_40033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40038);

return statearr_40033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40038,mults,ensure_mult,p))
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
var args40069 = [];
var len__31204__auto___40072 = arguments.length;
var i__31205__auto___40073 = (0);
while(true){
if((i__31205__auto___40073 < len__31204__auto___40072)){
args40069.push((arguments[i__31205__auto___40073]));

var G__40074 = (i__31205__auto___40073 + (1));
i__31205__auto___40073 = G__40074;
continue;
} else {
}
break;
}

var G__40071 = args40069.length;
switch (G__40071) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40069.length)].join('')));

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
var args40076 = [];
var len__31204__auto___40079 = arguments.length;
var i__31205__auto___40080 = (0);
while(true){
if((i__31205__auto___40080 < len__31204__auto___40079)){
args40076.push((arguments[i__31205__auto___40080]));

var G__40081 = (i__31205__auto___40080 + (1));
i__31205__auto___40080 = G__40081;
continue;
} else {
}
break;
}

var G__40078 = args40076.length;
switch (G__40078) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40076.length)].join('')));

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
var args40083 = [];
var len__31204__auto___40154 = arguments.length;
var i__31205__auto___40155 = (0);
while(true){
if((i__31205__auto___40155 < len__31204__auto___40154)){
args40083.push((arguments[i__31205__auto___40155]));

var G__40156 = (i__31205__auto___40155 + (1));
i__31205__auto___40155 = G__40156;
continue;
} else {
}
break;
}

var G__40085 = args40083.length;
switch (G__40085) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40083.length)].join('')));

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
var c__38085__auto___40158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40124){
var state_val_40125 = (state_40124[(1)]);
if((state_val_40125 === (7))){
var state_40124__$1 = state_40124;
var statearr_40126_40159 = state_40124__$1;
(statearr_40126_40159[(2)] = null);

(statearr_40126_40159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (1))){
var state_40124__$1 = state_40124;
var statearr_40127_40160 = state_40124__$1;
(statearr_40127_40160[(2)] = null);

(statearr_40127_40160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (4))){
var inst_40088 = (state_40124[(7)]);
var inst_40090 = (inst_40088 < cnt);
var state_40124__$1 = state_40124;
if(cljs.core.truth_(inst_40090)){
var statearr_40128_40161 = state_40124__$1;
(statearr_40128_40161[(1)] = (6));

} else {
var statearr_40129_40162 = state_40124__$1;
(statearr_40129_40162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (15))){
var inst_40120 = (state_40124[(2)]);
var state_40124__$1 = state_40124;
var statearr_40130_40163 = state_40124__$1;
(statearr_40130_40163[(2)] = inst_40120);

(statearr_40130_40163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (13))){
var inst_40113 = cljs.core.async.close_BANG_.call(null,out);
var state_40124__$1 = state_40124;
var statearr_40131_40164 = state_40124__$1;
(statearr_40131_40164[(2)] = inst_40113);

(statearr_40131_40164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (6))){
var state_40124__$1 = state_40124;
var statearr_40132_40165 = state_40124__$1;
(statearr_40132_40165[(2)] = null);

(statearr_40132_40165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (3))){
var inst_40122 = (state_40124[(2)]);
var state_40124__$1 = state_40124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40124__$1,inst_40122);
} else {
if((state_val_40125 === (12))){
var inst_40110 = (state_40124[(8)]);
var inst_40110__$1 = (state_40124[(2)]);
var inst_40111 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40110__$1);
var state_40124__$1 = (function (){var statearr_40133 = state_40124;
(statearr_40133[(8)] = inst_40110__$1);

return statearr_40133;
})();
if(cljs.core.truth_(inst_40111)){
var statearr_40134_40166 = state_40124__$1;
(statearr_40134_40166[(1)] = (13));

} else {
var statearr_40135_40167 = state_40124__$1;
(statearr_40135_40167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (2))){
var inst_40087 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40088 = (0);
var state_40124__$1 = (function (){var statearr_40136 = state_40124;
(statearr_40136[(9)] = inst_40087);

(statearr_40136[(7)] = inst_40088);

return statearr_40136;
})();
var statearr_40137_40168 = state_40124__$1;
(statearr_40137_40168[(2)] = null);

(statearr_40137_40168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (11))){
var inst_40088 = (state_40124[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40124,(10),Object,null,(9));
var inst_40097 = chs__$1.call(null,inst_40088);
var inst_40098 = done.call(null,inst_40088);
var inst_40099 = cljs.core.async.take_BANG_.call(null,inst_40097,inst_40098);
var state_40124__$1 = state_40124;
var statearr_40138_40169 = state_40124__$1;
(statearr_40138_40169[(2)] = inst_40099);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (9))){
var inst_40088 = (state_40124[(7)]);
var inst_40101 = (state_40124[(2)]);
var inst_40102 = (inst_40088 + (1));
var inst_40088__$1 = inst_40102;
var state_40124__$1 = (function (){var statearr_40139 = state_40124;
(statearr_40139[(10)] = inst_40101);

(statearr_40139[(7)] = inst_40088__$1);

return statearr_40139;
})();
var statearr_40140_40170 = state_40124__$1;
(statearr_40140_40170[(2)] = null);

(statearr_40140_40170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (5))){
var inst_40108 = (state_40124[(2)]);
var state_40124__$1 = (function (){var statearr_40141 = state_40124;
(statearr_40141[(11)] = inst_40108);

return statearr_40141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40124__$1,(12),dchan);
} else {
if((state_val_40125 === (14))){
var inst_40110 = (state_40124[(8)]);
var inst_40115 = cljs.core.apply.call(null,f,inst_40110);
var state_40124__$1 = state_40124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40124__$1,(16),out,inst_40115);
} else {
if((state_val_40125 === (16))){
var inst_40117 = (state_40124[(2)]);
var state_40124__$1 = (function (){var statearr_40142 = state_40124;
(statearr_40142[(12)] = inst_40117);

return statearr_40142;
})();
var statearr_40143_40171 = state_40124__$1;
(statearr_40143_40171[(2)] = null);

(statearr_40143_40171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (10))){
var inst_40092 = (state_40124[(2)]);
var inst_40093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40124__$1 = (function (){var statearr_40144 = state_40124;
(statearr_40144[(13)] = inst_40092);

return statearr_40144;
})();
var statearr_40145_40172 = state_40124__$1;
(statearr_40145_40172[(2)] = inst_40093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40125 === (8))){
var inst_40106 = (state_40124[(2)]);
var state_40124__$1 = state_40124;
var statearr_40146_40173 = state_40124__$1;
(statearr_40146_40173[(2)] = inst_40106);

(statearr_40146_40173[(1)] = (5));


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
});})(c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37973__auto__,c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40150[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40150[(1)] = (1));

return statearr_40150;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40124){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40151){if((e40151 instanceof Object)){
var ex__37977__auto__ = e40151;
var statearr_40152_40174 = state_40124;
(statearr_40152_40174[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40175 = state_40124;
state_40124 = G__40175;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38087__auto__ = (function (){var statearr_40153 = f__38086__auto__.call(null);
(statearr_40153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40158);

return statearr_40153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40158,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40177 = [];
var len__31204__auto___40235 = arguments.length;
var i__31205__auto___40236 = (0);
while(true){
if((i__31205__auto___40236 < len__31204__auto___40235)){
args40177.push((arguments[i__31205__auto___40236]));

var G__40237 = (i__31205__auto___40236 + (1));
i__31205__auto___40236 = G__40237;
continue;
} else {
}
break;
}

var G__40179 = args40177.length;
switch (G__40179) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40177.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40239,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40239,out){
return (function (state_40211){
var state_val_40212 = (state_40211[(1)]);
if((state_val_40212 === (7))){
var inst_40191 = (state_40211[(7)]);
var inst_40190 = (state_40211[(8)]);
var inst_40190__$1 = (state_40211[(2)]);
var inst_40191__$1 = cljs.core.nth.call(null,inst_40190__$1,(0),null);
var inst_40192 = cljs.core.nth.call(null,inst_40190__$1,(1),null);
var inst_40193 = (inst_40191__$1 == null);
var state_40211__$1 = (function (){var statearr_40213 = state_40211;
(statearr_40213[(9)] = inst_40192);

(statearr_40213[(7)] = inst_40191__$1);

(statearr_40213[(8)] = inst_40190__$1);

return statearr_40213;
})();
if(cljs.core.truth_(inst_40193)){
var statearr_40214_40240 = state_40211__$1;
(statearr_40214_40240[(1)] = (8));

} else {
var statearr_40215_40241 = state_40211__$1;
(statearr_40215_40241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (1))){
var inst_40180 = cljs.core.vec.call(null,chs);
var inst_40181 = inst_40180;
var state_40211__$1 = (function (){var statearr_40216 = state_40211;
(statearr_40216[(10)] = inst_40181);

return statearr_40216;
})();
var statearr_40217_40242 = state_40211__$1;
(statearr_40217_40242[(2)] = null);

(statearr_40217_40242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (4))){
var inst_40181 = (state_40211[(10)]);
var state_40211__$1 = state_40211;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40211__$1,(7),inst_40181);
} else {
if((state_val_40212 === (6))){
var inst_40207 = (state_40211[(2)]);
var state_40211__$1 = state_40211;
var statearr_40218_40243 = state_40211__$1;
(statearr_40218_40243[(2)] = inst_40207);

(statearr_40218_40243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (3))){
var inst_40209 = (state_40211[(2)]);
var state_40211__$1 = state_40211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40211__$1,inst_40209);
} else {
if((state_val_40212 === (2))){
var inst_40181 = (state_40211[(10)]);
var inst_40183 = cljs.core.count.call(null,inst_40181);
var inst_40184 = (inst_40183 > (0));
var state_40211__$1 = state_40211;
if(cljs.core.truth_(inst_40184)){
var statearr_40220_40244 = state_40211__$1;
(statearr_40220_40244[(1)] = (4));

} else {
var statearr_40221_40245 = state_40211__$1;
(statearr_40221_40245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (11))){
var inst_40181 = (state_40211[(10)]);
var inst_40200 = (state_40211[(2)]);
var tmp40219 = inst_40181;
var inst_40181__$1 = tmp40219;
var state_40211__$1 = (function (){var statearr_40222 = state_40211;
(statearr_40222[(11)] = inst_40200);

(statearr_40222[(10)] = inst_40181__$1);

return statearr_40222;
})();
var statearr_40223_40246 = state_40211__$1;
(statearr_40223_40246[(2)] = null);

(statearr_40223_40246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (9))){
var inst_40191 = (state_40211[(7)]);
var state_40211__$1 = state_40211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40211__$1,(11),out,inst_40191);
} else {
if((state_val_40212 === (5))){
var inst_40205 = cljs.core.async.close_BANG_.call(null,out);
var state_40211__$1 = state_40211;
var statearr_40224_40247 = state_40211__$1;
(statearr_40224_40247[(2)] = inst_40205);

(statearr_40224_40247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (10))){
var inst_40203 = (state_40211[(2)]);
var state_40211__$1 = state_40211;
var statearr_40225_40248 = state_40211__$1;
(statearr_40225_40248[(2)] = inst_40203);

(statearr_40225_40248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40212 === (8))){
var inst_40181 = (state_40211[(10)]);
var inst_40192 = (state_40211[(9)]);
var inst_40191 = (state_40211[(7)]);
var inst_40190 = (state_40211[(8)]);
var inst_40195 = (function (){var cs = inst_40181;
var vec__40186 = inst_40190;
var v = inst_40191;
var c = inst_40192;
return ((function (cs,vec__40186,v,c,inst_40181,inst_40192,inst_40191,inst_40190,state_val_40212,c__38085__auto___40239,out){
return (function (p1__40176_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40176_SHARP_);
});
;})(cs,vec__40186,v,c,inst_40181,inst_40192,inst_40191,inst_40190,state_val_40212,c__38085__auto___40239,out))
})();
var inst_40196 = cljs.core.filterv.call(null,inst_40195,inst_40181);
var inst_40181__$1 = inst_40196;
var state_40211__$1 = (function (){var statearr_40226 = state_40211;
(statearr_40226[(10)] = inst_40181__$1);

return statearr_40226;
})();
var statearr_40227_40249 = state_40211__$1;
(statearr_40227_40249[(2)] = null);

(statearr_40227_40249[(1)] = (2));


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
});})(c__38085__auto___40239,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40239,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40231[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40231[(1)] = (1));

return statearr_40231;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40211){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40232){if((e40232 instanceof Object)){
var ex__37977__auto__ = e40232;
var statearr_40233_40250 = state_40211;
(statearr_40233_40250[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40251 = state_40211;
state_40211 = G__40251;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40239,out))
})();
var state__38087__auto__ = (function (){var statearr_40234 = f__38086__auto__.call(null);
(statearr_40234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40239);

return statearr_40234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40239,out))
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
var args40252 = [];
var len__31204__auto___40301 = arguments.length;
var i__31205__auto___40302 = (0);
while(true){
if((i__31205__auto___40302 < len__31204__auto___40301)){
args40252.push((arguments[i__31205__auto___40302]));

var G__40303 = (i__31205__auto___40302 + (1));
i__31205__auto___40302 = G__40303;
continue;
} else {
}
break;
}

var G__40254 = args40252.length;
switch (G__40254) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40252.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40305,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40305,out){
return (function (state_40278){
var state_val_40279 = (state_40278[(1)]);
if((state_val_40279 === (7))){
var inst_40260 = (state_40278[(7)]);
var inst_40260__$1 = (state_40278[(2)]);
var inst_40261 = (inst_40260__$1 == null);
var inst_40262 = cljs.core.not.call(null,inst_40261);
var state_40278__$1 = (function (){var statearr_40280 = state_40278;
(statearr_40280[(7)] = inst_40260__$1);

return statearr_40280;
})();
if(inst_40262){
var statearr_40281_40306 = state_40278__$1;
(statearr_40281_40306[(1)] = (8));

} else {
var statearr_40282_40307 = state_40278__$1;
(statearr_40282_40307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (1))){
var inst_40255 = (0);
var state_40278__$1 = (function (){var statearr_40283 = state_40278;
(statearr_40283[(8)] = inst_40255);

return statearr_40283;
})();
var statearr_40284_40308 = state_40278__$1;
(statearr_40284_40308[(2)] = null);

(statearr_40284_40308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (4))){
var state_40278__$1 = state_40278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40278__$1,(7),ch);
} else {
if((state_val_40279 === (6))){
var inst_40273 = (state_40278[(2)]);
var state_40278__$1 = state_40278;
var statearr_40285_40309 = state_40278__$1;
(statearr_40285_40309[(2)] = inst_40273);

(statearr_40285_40309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (3))){
var inst_40275 = (state_40278[(2)]);
var inst_40276 = cljs.core.async.close_BANG_.call(null,out);
var state_40278__$1 = (function (){var statearr_40286 = state_40278;
(statearr_40286[(9)] = inst_40275);

return statearr_40286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40278__$1,inst_40276);
} else {
if((state_val_40279 === (2))){
var inst_40255 = (state_40278[(8)]);
var inst_40257 = (inst_40255 < n);
var state_40278__$1 = state_40278;
if(cljs.core.truth_(inst_40257)){
var statearr_40287_40310 = state_40278__$1;
(statearr_40287_40310[(1)] = (4));

} else {
var statearr_40288_40311 = state_40278__$1;
(statearr_40288_40311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (11))){
var inst_40255 = (state_40278[(8)]);
var inst_40265 = (state_40278[(2)]);
var inst_40266 = (inst_40255 + (1));
var inst_40255__$1 = inst_40266;
var state_40278__$1 = (function (){var statearr_40289 = state_40278;
(statearr_40289[(8)] = inst_40255__$1);

(statearr_40289[(10)] = inst_40265);

return statearr_40289;
})();
var statearr_40290_40312 = state_40278__$1;
(statearr_40290_40312[(2)] = null);

(statearr_40290_40312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (9))){
var state_40278__$1 = state_40278;
var statearr_40291_40313 = state_40278__$1;
(statearr_40291_40313[(2)] = null);

(statearr_40291_40313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (5))){
var state_40278__$1 = state_40278;
var statearr_40292_40314 = state_40278__$1;
(statearr_40292_40314[(2)] = null);

(statearr_40292_40314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (10))){
var inst_40270 = (state_40278[(2)]);
var state_40278__$1 = state_40278;
var statearr_40293_40315 = state_40278__$1;
(statearr_40293_40315[(2)] = inst_40270);

(statearr_40293_40315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40279 === (8))){
var inst_40260 = (state_40278[(7)]);
var state_40278__$1 = state_40278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40278__$1,(11),out,inst_40260);
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
});})(c__38085__auto___40305,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40305,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40297[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40297[(1)] = (1));

return statearr_40297;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40278){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40298){if((e40298 instanceof Object)){
var ex__37977__auto__ = e40298;
var statearr_40299_40316 = state_40278;
(statearr_40299_40316[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40317 = state_40278;
state_40278 = G__40317;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40305,out))
})();
var state__38087__auto__ = (function (){var statearr_40300 = f__38086__auto__.call(null);
(statearr_40300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40305);

return statearr_40300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40305,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40325 = (function (f,ch,meta40326){
this.f = f;
this.ch = ch;
this.meta40326 = meta40326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40327,meta40326__$1){
var self__ = this;
var _40327__$1 = this;
return (new cljs.core.async.t_cljs$core$async40325(self__.f,self__.ch,meta40326__$1));
});

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40327){
var self__ = this;
var _40327__$1 = this;
return self__.meta40326;
});

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40328 = (function (f,ch,meta40326,_,fn1,meta40329){
this.f = f;
this.ch = ch;
this.meta40326 = meta40326;
this._ = _;
this.fn1 = fn1;
this.meta40329 = meta40329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40330,meta40329__$1){
var self__ = this;
var _40330__$1 = this;
return (new cljs.core.async.t_cljs$core$async40328(self__.f,self__.ch,self__.meta40326,self__._,self__.fn1,meta40329__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40330){
var self__ = this;
var _40330__$1 = this;
return self__.meta40329;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40318_SHARP_){
return f1.call(null,(((p1__40318_SHARP_ == null))?null:self__.f.call(null,p1__40318_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40326","meta40326",426406773,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40325","cljs.core.async/t_cljs$core$async40325",952409358,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40329","meta40329",1651514982,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40328";

cljs.core.async.t_cljs$core$async40328.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async40328");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40328 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40328(f__$1,ch__$1,meta40326__$1,___$2,fn1__$1,meta40329){
return (new cljs.core.async.t_cljs$core$async40328(f__$1,ch__$1,meta40326__$1,___$2,fn1__$1,meta40329));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40328(self__.f,self__.ch,self__.meta40326,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40326","meta40326",426406773,null)], null);
});

cljs.core.async.t_cljs$core$async40325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40325";

cljs.core.async.t_cljs$core$async40325.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async40325");
});

cljs.core.async.__GT_t_cljs$core$async40325 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40325(f__$1,ch__$1,meta40326){
return (new cljs.core.async.t_cljs$core$async40325(f__$1,ch__$1,meta40326));
});

}

return (new cljs.core.async.t_cljs$core$async40325(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40334 = (function (f,ch,meta40335){
this.f = f;
this.ch = ch;
this.meta40335 = meta40335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40336,meta40335__$1){
var self__ = this;
var _40336__$1 = this;
return (new cljs.core.async.t_cljs$core$async40334(self__.f,self__.ch,meta40335__$1));
});

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40336){
var self__ = this;
var _40336__$1 = this;
return self__.meta40335;
});

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40335","meta40335",769306742,null)], null);
});

cljs.core.async.t_cljs$core$async40334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40334";

cljs.core.async.t_cljs$core$async40334.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async40334");
});

cljs.core.async.__GT_t_cljs$core$async40334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40334(f__$1,ch__$1,meta40335){
return (new cljs.core.async.t_cljs$core$async40334(f__$1,ch__$1,meta40335));
});

}

return (new cljs.core.async.t_cljs$core$async40334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40340 = (function (p,ch,meta40341){
this.p = p;
this.ch = ch;
this.meta40341 = meta40341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40342,meta40341__$1){
var self__ = this;
var _40342__$1 = this;
return (new cljs.core.async.t_cljs$core$async40340(self__.p,self__.ch,meta40341__$1));
});

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40342){
var self__ = this;
var _40342__$1 = this;
return self__.meta40341;
});

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40341","meta40341",1302896537,null)], null);
});

cljs.core.async.t_cljs$core$async40340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40340";

cljs.core.async.t_cljs$core$async40340.cljs$lang$ctorPrWriter = (function (this__30702__auto__,writer__30703__auto__,opt__30704__auto__){
return cljs.core._write.call(null,writer__30703__auto__,"cljs.core.async/t_cljs$core$async40340");
});

cljs.core.async.__GT_t_cljs$core$async40340 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40340(p__$1,ch__$1,meta40341){
return (new cljs.core.async.t_cljs$core$async40340(p__$1,ch__$1,meta40341));
});

}

return (new cljs.core.async.t_cljs$core$async40340(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40343 = [];
var len__31204__auto___40387 = arguments.length;
var i__31205__auto___40388 = (0);
while(true){
if((i__31205__auto___40388 < len__31204__auto___40387)){
args40343.push((arguments[i__31205__auto___40388]));

var G__40389 = (i__31205__auto___40388 + (1));
i__31205__auto___40388 = G__40389;
continue;
} else {
}
break;
}

var G__40345 = args40343.length;
switch (G__40345) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40343.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40391,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40391,out){
return (function (state_40366){
var state_val_40367 = (state_40366[(1)]);
if((state_val_40367 === (7))){
var inst_40362 = (state_40366[(2)]);
var state_40366__$1 = state_40366;
var statearr_40368_40392 = state_40366__$1;
(statearr_40368_40392[(2)] = inst_40362);

(statearr_40368_40392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (1))){
var state_40366__$1 = state_40366;
var statearr_40369_40393 = state_40366__$1;
(statearr_40369_40393[(2)] = null);

(statearr_40369_40393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (4))){
var inst_40348 = (state_40366[(7)]);
var inst_40348__$1 = (state_40366[(2)]);
var inst_40349 = (inst_40348__$1 == null);
var state_40366__$1 = (function (){var statearr_40370 = state_40366;
(statearr_40370[(7)] = inst_40348__$1);

return statearr_40370;
})();
if(cljs.core.truth_(inst_40349)){
var statearr_40371_40394 = state_40366__$1;
(statearr_40371_40394[(1)] = (5));

} else {
var statearr_40372_40395 = state_40366__$1;
(statearr_40372_40395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (6))){
var inst_40348 = (state_40366[(7)]);
var inst_40353 = p.call(null,inst_40348);
var state_40366__$1 = state_40366;
if(cljs.core.truth_(inst_40353)){
var statearr_40373_40396 = state_40366__$1;
(statearr_40373_40396[(1)] = (8));

} else {
var statearr_40374_40397 = state_40366__$1;
(statearr_40374_40397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (3))){
var inst_40364 = (state_40366[(2)]);
var state_40366__$1 = state_40366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40366__$1,inst_40364);
} else {
if((state_val_40367 === (2))){
var state_40366__$1 = state_40366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40366__$1,(4),ch);
} else {
if((state_val_40367 === (11))){
var inst_40356 = (state_40366[(2)]);
var state_40366__$1 = state_40366;
var statearr_40375_40398 = state_40366__$1;
(statearr_40375_40398[(2)] = inst_40356);

(statearr_40375_40398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (9))){
var state_40366__$1 = state_40366;
var statearr_40376_40399 = state_40366__$1;
(statearr_40376_40399[(2)] = null);

(statearr_40376_40399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (5))){
var inst_40351 = cljs.core.async.close_BANG_.call(null,out);
var state_40366__$1 = state_40366;
var statearr_40377_40400 = state_40366__$1;
(statearr_40377_40400[(2)] = inst_40351);

(statearr_40377_40400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (10))){
var inst_40359 = (state_40366[(2)]);
var state_40366__$1 = (function (){var statearr_40378 = state_40366;
(statearr_40378[(8)] = inst_40359);

return statearr_40378;
})();
var statearr_40379_40401 = state_40366__$1;
(statearr_40379_40401[(2)] = null);

(statearr_40379_40401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40367 === (8))){
var inst_40348 = (state_40366[(7)]);
var state_40366__$1 = state_40366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40366__$1,(11),out,inst_40348);
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
});})(c__38085__auto___40391,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40391,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40383 = [null,null,null,null,null,null,null,null,null];
(statearr_40383[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40383[(1)] = (1));

return statearr_40383;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40366){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40384){if((e40384 instanceof Object)){
var ex__37977__auto__ = e40384;
var statearr_40385_40402 = state_40366;
(statearr_40385_40402[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40403 = state_40366;
state_40366 = G__40403;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40391,out))
})();
var state__38087__auto__ = (function (){var statearr_40386 = f__38086__auto__.call(null);
(statearr_40386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40391);

return statearr_40386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40391,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40404 = [];
var len__31204__auto___40407 = arguments.length;
var i__31205__auto___40408 = (0);
while(true){
if((i__31205__auto___40408 < len__31204__auto___40407)){
args40404.push((arguments[i__31205__auto___40408]));

var G__40409 = (i__31205__auto___40408 + (1));
i__31205__auto___40408 = G__40409;
continue;
} else {
}
break;
}

var G__40406 = args40404.length;
switch (G__40406) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40404.length)].join('')));

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
var c__38085__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto__){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto__){
return (function (state_40576){
var state_val_40577 = (state_40576[(1)]);
if((state_val_40577 === (7))){
var inst_40572 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40578_40619 = state_40576__$1;
(statearr_40578_40619[(2)] = inst_40572);

(statearr_40578_40619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (20))){
var inst_40542 = (state_40576[(7)]);
var inst_40553 = (state_40576[(2)]);
var inst_40554 = cljs.core.next.call(null,inst_40542);
var inst_40528 = inst_40554;
var inst_40529 = null;
var inst_40530 = (0);
var inst_40531 = (0);
var state_40576__$1 = (function (){var statearr_40579 = state_40576;
(statearr_40579[(8)] = inst_40529);

(statearr_40579[(9)] = inst_40530);

(statearr_40579[(10)] = inst_40528);

(statearr_40579[(11)] = inst_40531);

(statearr_40579[(12)] = inst_40553);

return statearr_40579;
})();
var statearr_40580_40620 = state_40576__$1;
(statearr_40580_40620[(2)] = null);

(statearr_40580_40620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (1))){
var state_40576__$1 = state_40576;
var statearr_40581_40621 = state_40576__$1;
(statearr_40581_40621[(2)] = null);

(statearr_40581_40621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (4))){
var inst_40517 = (state_40576[(13)]);
var inst_40517__$1 = (state_40576[(2)]);
var inst_40518 = (inst_40517__$1 == null);
var state_40576__$1 = (function (){var statearr_40582 = state_40576;
(statearr_40582[(13)] = inst_40517__$1);

return statearr_40582;
})();
if(cljs.core.truth_(inst_40518)){
var statearr_40583_40622 = state_40576__$1;
(statearr_40583_40622[(1)] = (5));

} else {
var statearr_40584_40623 = state_40576__$1;
(statearr_40584_40623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (15))){
var state_40576__$1 = state_40576;
var statearr_40588_40624 = state_40576__$1;
(statearr_40588_40624[(2)] = null);

(statearr_40588_40624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (21))){
var state_40576__$1 = state_40576;
var statearr_40589_40625 = state_40576__$1;
(statearr_40589_40625[(2)] = null);

(statearr_40589_40625[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (13))){
var inst_40529 = (state_40576[(8)]);
var inst_40530 = (state_40576[(9)]);
var inst_40528 = (state_40576[(10)]);
var inst_40531 = (state_40576[(11)]);
var inst_40538 = (state_40576[(2)]);
var inst_40539 = (inst_40531 + (1));
var tmp40585 = inst_40529;
var tmp40586 = inst_40530;
var tmp40587 = inst_40528;
var inst_40528__$1 = tmp40587;
var inst_40529__$1 = tmp40585;
var inst_40530__$1 = tmp40586;
var inst_40531__$1 = inst_40539;
var state_40576__$1 = (function (){var statearr_40590 = state_40576;
(statearr_40590[(8)] = inst_40529__$1);

(statearr_40590[(9)] = inst_40530__$1);

(statearr_40590[(10)] = inst_40528__$1);

(statearr_40590[(11)] = inst_40531__$1);

(statearr_40590[(14)] = inst_40538);

return statearr_40590;
})();
var statearr_40591_40626 = state_40576__$1;
(statearr_40591_40626[(2)] = null);

(statearr_40591_40626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (22))){
var state_40576__$1 = state_40576;
var statearr_40592_40627 = state_40576__$1;
(statearr_40592_40627[(2)] = null);

(statearr_40592_40627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (6))){
var inst_40517 = (state_40576[(13)]);
var inst_40526 = f.call(null,inst_40517);
var inst_40527 = cljs.core.seq.call(null,inst_40526);
var inst_40528 = inst_40527;
var inst_40529 = null;
var inst_40530 = (0);
var inst_40531 = (0);
var state_40576__$1 = (function (){var statearr_40593 = state_40576;
(statearr_40593[(8)] = inst_40529);

(statearr_40593[(9)] = inst_40530);

(statearr_40593[(10)] = inst_40528);

(statearr_40593[(11)] = inst_40531);

return statearr_40593;
})();
var statearr_40594_40628 = state_40576__$1;
(statearr_40594_40628[(2)] = null);

(statearr_40594_40628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (17))){
var inst_40542 = (state_40576[(7)]);
var inst_40546 = cljs.core.chunk_first.call(null,inst_40542);
var inst_40547 = cljs.core.chunk_rest.call(null,inst_40542);
var inst_40548 = cljs.core.count.call(null,inst_40546);
var inst_40528 = inst_40547;
var inst_40529 = inst_40546;
var inst_40530 = inst_40548;
var inst_40531 = (0);
var state_40576__$1 = (function (){var statearr_40595 = state_40576;
(statearr_40595[(8)] = inst_40529);

(statearr_40595[(9)] = inst_40530);

(statearr_40595[(10)] = inst_40528);

(statearr_40595[(11)] = inst_40531);

return statearr_40595;
})();
var statearr_40596_40629 = state_40576__$1;
(statearr_40596_40629[(2)] = null);

(statearr_40596_40629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (3))){
var inst_40574 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40576__$1,inst_40574);
} else {
if((state_val_40577 === (12))){
var inst_40562 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40597_40630 = state_40576__$1;
(statearr_40597_40630[(2)] = inst_40562);

(statearr_40597_40630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (2))){
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40576__$1,(4),in$);
} else {
if((state_val_40577 === (23))){
var inst_40570 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40598_40631 = state_40576__$1;
(statearr_40598_40631[(2)] = inst_40570);

(statearr_40598_40631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (19))){
var inst_40557 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40599_40632 = state_40576__$1;
(statearr_40599_40632[(2)] = inst_40557);

(statearr_40599_40632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (11))){
var inst_40528 = (state_40576[(10)]);
var inst_40542 = (state_40576[(7)]);
var inst_40542__$1 = cljs.core.seq.call(null,inst_40528);
var state_40576__$1 = (function (){var statearr_40600 = state_40576;
(statearr_40600[(7)] = inst_40542__$1);

return statearr_40600;
})();
if(inst_40542__$1){
var statearr_40601_40633 = state_40576__$1;
(statearr_40601_40633[(1)] = (14));

} else {
var statearr_40602_40634 = state_40576__$1;
(statearr_40602_40634[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (9))){
var inst_40564 = (state_40576[(2)]);
var inst_40565 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40576__$1 = (function (){var statearr_40603 = state_40576;
(statearr_40603[(15)] = inst_40564);

return statearr_40603;
})();
if(cljs.core.truth_(inst_40565)){
var statearr_40604_40635 = state_40576__$1;
(statearr_40604_40635[(1)] = (21));

} else {
var statearr_40605_40636 = state_40576__$1;
(statearr_40605_40636[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (5))){
var inst_40520 = cljs.core.async.close_BANG_.call(null,out);
var state_40576__$1 = state_40576;
var statearr_40606_40637 = state_40576__$1;
(statearr_40606_40637[(2)] = inst_40520);

(statearr_40606_40637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (14))){
var inst_40542 = (state_40576[(7)]);
var inst_40544 = cljs.core.chunked_seq_QMARK_.call(null,inst_40542);
var state_40576__$1 = state_40576;
if(inst_40544){
var statearr_40607_40638 = state_40576__$1;
(statearr_40607_40638[(1)] = (17));

} else {
var statearr_40608_40639 = state_40576__$1;
(statearr_40608_40639[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (16))){
var inst_40560 = (state_40576[(2)]);
var state_40576__$1 = state_40576;
var statearr_40609_40640 = state_40576__$1;
(statearr_40609_40640[(2)] = inst_40560);

(statearr_40609_40640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40577 === (10))){
var inst_40529 = (state_40576[(8)]);
var inst_40531 = (state_40576[(11)]);
var inst_40536 = cljs.core._nth.call(null,inst_40529,inst_40531);
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40576__$1,(13),out,inst_40536);
} else {
if((state_val_40577 === (18))){
var inst_40542 = (state_40576[(7)]);
var inst_40551 = cljs.core.first.call(null,inst_40542);
var state_40576__$1 = state_40576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40576__$1,(20),out,inst_40551);
} else {
if((state_val_40577 === (8))){
var inst_40530 = (state_40576[(9)]);
var inst_40531 = (state_40576[(11)]);
var inst_40533 = (inst_40531 < inst_40530);
var inst_40534 = inst_40533;
var state_40576__$1 = state_40576;
if(cljs.core.truth_(inst_40534)){
var statearr_40610_40641 = state_40576__$1;
(statearr_40610_40641[(1)] = (10));

} else {
var statearr_40611_40642 = state_40576__$1;
(statearr_40611_40642[(1)] = (11));

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
});})(c__38085__auto__))
;
return ((function (switch__37973__auto__,c__38085__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____0 = (function (){
var statearr_40615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40615[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__);

(statearr_40615[(1)] = (1));

return statearr_40615;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____1 = (function (state_40576){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40616){if((e40616 instanceof Object)){
var ex__37977__auto__ = e40616;
var statearr_40617_40643 = state_40576;
(statearr_40617_40643[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40644 = state_40576;
state_40576 = G__40644;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__ = function(state_40576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____1.call(this,state_40576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37974__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto__))
})();
var state__38087__auto__ = (function (){var statearr_40618 = f__38086__auto__.call(null);
(statearr_40618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto__);

return statearr_40618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto__))
);

return c__38085__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40645 = [];
var len__31204__auto___40648 = arguments.length;
var i__31205__auto___40649 = (0);
while(true){
if((i__31205__auto___40649 < len__31204__auto___40648)){
args40645.push((arguments[i__31205__auto___40649]));

var G__40650 = (i__31205__auto___40649 + (1));
i__31205__auto___40649 = G__40650;
continue;
} else {
}
break;
}

var G__40647 = args40645.length;
switch (G__40647) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40645.length)].join('')));

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
var args40652 = [];
var len__31204__auto___40655 = arguments.length;
var i__31205__auto___40656 = (0);
while(true){
if((i__31205__auto___40656 < len__31204__auto___40655)){
args40652.push((arguments[i__31205__auto___40656]));

var G__40657 = (i__31205__auto___40656 + (1));
i__31205__auto___40656 = G__40657;
continue;
} else {
}
break;
}

var G__40654 = args40652.length;
switch (G__40654) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40652.length)].join('')));

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
var args40659 = [];
var len__31204__auto___40710 = arguments.length;
var i__31205__auto___40711 = (0);
while(true){
if((i__31205__auto___40711 < len__31204__auto___40710)){
args40659.push((arguments[i__31205__auto___40711]));

var G__40712 = (i__31205__auto___40711 + (1));
i__31205__auto___40711 = G__40712;
continue;
} else {
}
break;
}

var G__40661 = args40659.length;
switch (G__40661) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40659.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40714,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40714,out){
return (function (state_40685){
var state_val_40686 = (state_40685[(1)]);
if((state_val_40686 === (7))){
var inst_40680 = (state_40685[(2)]);
var state_40685__$1 = state_40685;
var statearr_40687_40715 = state_40685__$1;
(statearr_40687_40715[(2)] = inst_40680);

(statearr_40687_40715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (1))){
var inst_40662 = null;
var state_40685__$1 = (function (){var statearr_40688 = state_40685;
(statearr_40688[(7)] = inst_40662);

return statearr_40688;
})();
var statearr_40689_40716 = state_40685__$1;
(statearr_40689_40716[(2)] = null);

(statearr_40689_40716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (4))){
var inst_40665 = (state_40685[(8)]);
var inst_40665__$1 = (state_40685[(2)]);
var inst_40666 = (inst_40665__$1 == null);
var inst_40667 = cljs.core.not.call(null,inst_40666);
var state_40685__$1 = (function (){var statearr_40690 = state_40685;
(statearr_40690[(8)] = inst_40665__$1);

return statearr_40690;
})();
if(inst_40667){
var statearr_40691_40717 = state_40685__$1;
(statearr_40691_40717[(1)] = (5));

} else {
var statearr_40692_40718 = state_40685__$1;
(statearr_40692_40718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (6))){
var state_40685__$1 = state_40685;
var statearr_40693_40719 = state_40685__$1;
(statearr_40693_40719[(2)] = null);

(statearr_40693_40719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (3))){
var inst_40682 = (state_40685[(2)]);
var inst_40683 = cljs.core.async.close_BANG_.call(null,out);
var state_40685__$1 = (function (){var statearr_40694 = state_40685;
(statearr_40694[(9)] = inst_40682);

return statearr_40694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40685__$1,inst_40683);
} else {
if((state_val_40686 === (2))){
var state_40685__$1 = state_40685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40685__$1,(4),ch);
} else {
if((state_val_40686 === (11))){
var inst_40665 = (state_40685[(8)]);
var inst_40674 = (state_40685[(2)]);
var inst_40662 = inst_40665;
var state_40685__$1 = (function (){var statearr_40695 = state_40685;
(statearr_40695[(10)] = inst_40674);

(statearr_40695[(7)] = inst_40662);

return statearr_40695;
})();
var statearr_40696_40720 = state_40685__$1;
(statearr_40696_40720[(2)] = null);

(statearr_40696_40720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (9))){
var inst_40665 = (state_40685[(8)]);
var state_40685__$1 = state_40685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40685__$1,(11),out,inst_40665);
} else {
if((state_val_40686 === (5))){
var inst_40665 = (state_40685[(8)]);
var inst_40662 = (state_40685[(7)]);
var inst_40669 = cljs.core._EQ_.call(null,inst_40665,inst_40662);
var state_40685__$1 = state_40685;
if(inst_40669){
var statearr_40698_40721 = state_40685__$1;
(statearr_40698_40721[(1)] = (8));

} else {
var statearr_40699_40722 = state_40685__$1;
(statearr_40699_40722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (10))){
var inst_40677 = (state_40685[(2)]);
var state_40685__$1 = state_40685;
var statearr_40700_40723 = state_40685__$1;
(statearr_40700_40723[(2)] = inst_40677);

(statearr_40700_40723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40686 === (8))){
var inst_40662 = (state_40685[(7)]);
var tmp40697 = inst_40662;
var inst_40662__$1 = tmp40697;
var state_40685__$1 = (function (){var statearr_40701 = state_40685;
(statearr_40701[(7)] = inst_40662__$1);

return statearr_40701;
})();
var statearr_40702_40724 = state_40685__$1;
(statearr_40702_40724[(2)] = null);

(statearr_40702_40724[(1)] = (2));


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
});})(c__38085__auto___40714,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40714,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40706[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40706[(1)] = (1));

return statearr_40706;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40685){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40707){if((e40707 instanceof Object)){
var ex__37977__auto__ = e40707;
var statearr_40708_40725 = state_40685;
(statearr_40708_40725[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40726 = state_40685;
state_40685 = G__40726;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40714,out))
})();
var state__38087__auto__ = (function (){var statearr_40709 = f__38086__auto__.call(null);
(statearr_40709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40714);

return statearr_40709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40714,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40727 = [];
var len__31204__auto___40797 = arguments.length;
var i__31205__auto___40798 = (0);
while(true){
if((i__31205__auto___40798 < len__31204__auto___40797)){
args40727.push((arguments[i__31205__auto___40798]));

var G__40799 = (i__31205__auto___40798 + (1));
i__31205__auto___40798 = G__40799;
continue;
} else {
}
break;
}

var G__40729 = args40727.length;
switch (G__40729) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40727.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40801,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40801,out){
return (function (state_40767){
var state_val_40768 = (state_40767[(1)]);
if((state_val_40768 === (7))){
var inst_40763 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40769_40802 = state_40767__$1;
(statearr_40769_40802[(2)] = inst_40763);

(statearr_40769_40802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (1))){
var inst_40730 = (new Array(n));
var inst_40731 = inst_40730;
var inst_40732 = (0);
var state_40767__$1 = (function (){var statearr_40770 = state_40767;
(statearr_40770[(7)] = inst_40732);

(statearr_40770[(8)] = inst_40731);

return statearr_40770;
})();
var statearr_40771_40803 = state_40767__$1;
(statearr_40771_40803[(2)] = null);

(statearr_40771_40803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (4))){
var inst_40735 = (state_40767[(9)]);
var inst_40735__$1 = (state_40767[(2)]);
var inst_40736 = (inst_40735__$1 == null);
var inst_40737 = cljs.core.not.call(null,inst_40736);
var state_40767__$1 = (function (){var statearr_40772 = state_40767;
(statearr_40772[(9)] = inst_40735__$1);

return statearr_40772;
})();
if(inst_40737){
var statearr_40773_40804 = state_40767__$1;
(statearr_40773_40804[(1)] = (5));

} else {
var statearr_40774_40805 = state_40767__$1;
(statearr_40774_40805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (15))){
var inst_40757 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40775_40806 = state_40767__$1;
(statearr_40775_40806[(2)] = inst_40757);

(statearr_40775_40806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (13))){
var state_40767__$1 = state_40767;
var statearr_40776_40807 = state_40767__$1;
(statearr_40776_40807[(2)] = null);

(statearr_40776_40807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (6))){
var inst_40732 = (state_40767[(7)]);
var inst_40753 = (inst_40732 > (0));
var state_40767__$1 = state_40767;
if(cljs.core.truth_(inst_40753)){
var statearr_40777_40808 = state_40767__$1;
(statearr_40777_40808[(1)] = (12));

} else {
var statearr_40778_40809 = state_40767__$1;
(statearr_40778_40809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (3))){
var inst_40765 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40767__$1,inst_40765);
} else {
if((state_val_40768 === (12))){
var inst_40731 = (state_40767[(8)]);
var inst_40755 = cljs.core.vec.call(null,inst_40731);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40767__$1,(15),out,inst_40755);
} else {
if((state_val_40768 === (2))){
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40767__$1,(4),ch);
} else {
if((state_val_40768 === (11))){
var inst_40747 = (state_40767[(2)]);
var inst_40748 = (new Array(n));
var inst_40731 = inst_40748;
var inst_40732 = (0);
var state_40767__$1 = (function (){var statearr_40779 = state_40767;
(statearr_40779[(10)] = inst_40747);

(statearr_40779[(7)] = inst_40732);

(statearr_40779[(8)] = inst_40731);

return statearr_40779;
})();
var statearr_40780_40810 = state_40767__$1;
(statearr_40780_40810[(2)] = null);

(statearr_40780_40810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (9))){
var inst_40731 = (state_40767[(8)]);
var inst_40745 = cljs.core.vec.call(null,inst_40731);
var state_40767__$1 = state_40767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40767__$1,(11),out,inst_40745);
} else {
if((state_val_40768 === (5))){
var inst_40735 = (state_40767[(9)]);
var inst_40732 = (state_40767[(7)]);
var inst_40740 = (state_40767[(11)]);
var inst_40731 = (state_40767[(8)]);
var inst_40739 = (inst_40731[inst_40732] = inst_40735);
var inst_40740__$1 = (inst_40732 + (1));
var inst_40741 = (inst_40740__$1 < n);
var state_40767__$1 = (function (){var statearr_40781 = state_40767;
(statearr_40781[(11)] = inst_40740__$1);

(statearr_40781[(12)] = inst_40739);

return statearr_40781;
})();
if(cljs.core.truth_(inst_40741)){
var statearr_40782_40811 = state_40767__$1;
(statearr_40782_40811[(1)] = (8));

} else {
var statearr_40783_40812 = state_40767__$1;
(statearr_40783_40812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (14))){
var inst_40760 = (state_40767[(2)]);
var inst_40761 = cljs.core.async.close_BANG_.call(null,out);
var state_40767__$1 = (function (){var statearr_40785 = state_40767;
(statearr_40785[(13)] = inst_40760);

return statearr_40785;
})();
var statearr_40786_40813 = state_40767__$1;
(statearr_40786_40813[(2)] = inst_40761);

(statearr_40786_40813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (10))){
var inst_40751 = (state_40767[(2)]);
var state_40767__$1 = state_40767;
var statearr_40787_40814 = state_40767__$1;
(statearr_40787_40814[(2)] = inst_40751);

(statearr_40787_40814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40768 === (8))){
var inst_40740 = (state_40767[(11)]);
var inst_40731 = (state_40767[(8)]);
var tmp40784 = inst_40731;
var inst_40731__$1 = tmp40784;
var inst_40732 = inst_40740;
var state_40767__$1 = (function (){var statearr_40788 = state_40767;
(statearr_40788[(7)] = inst_40732);

(statearr_40788[(8)] = inst_40731__$1);

return statearr_40788;
})();
var statearr_40789_40815 = state_40767__$1;
(statearr_40789_40815[(2)] = null);

(statearr_40789_40815[(1)] = (2));


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
});})(c__38085__auto___40801,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40801,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40793[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40793[(1)] = (1));

return statearr_40793;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40767){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40794){if((e40794 instanceof Object)){
var ex__37977__auto__ = e40794;
var statearr_40795_40816 = state_40767;
(statearr_40795_40816[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40817 = state_40767;
state_40767 = G__40817;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40801,out))
})();
var state__38087__auto__ = (function (){var statearr_40796 = f__38086__auto__.call(null);
(statearr_40796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40801);

return statearr_40796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40801,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40818 = [];
var len__31204__auto___40892 = arguments.length;
var i__31205__auto___40893 = (0);
while(true){
if((i__31205__auto___40893 < len__31204__auto___40892)){
args40818.push((arguments[i__31205__auto___40893]));

var G__40894 = (i__31205__auto___40893 + (1));
i__31205__auto___40893 = G__40894;
continue;
} else {
}
break;
}

var G__40820 = args40818.length;
switch (G__40820) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40818.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38085__auto___40896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38085__auto___40896,out){
return (function (){
var f__38086__auto__ = (function (){var switch__37973__auto__ = ((function (c__38085__auto___40896,out){
return (function (state_40862){
var state_val_40863 = (state_40862[(1)]);
if((state_val_40863 === (7))){
var inst_40858 = (state_40862[(2)]);
var state_40862__$1 = state_40862;
var statearr_40864_40897 = state_40862__$1;
(statearr_40864_40897[(2)] = inst_40858);

(statearr_40864_40897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (1))){
var inst_40821 = [];
var inst_40822 = inst_40821;
var inst_40823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40862__$1 = (function (){var statearr_40865 = state_40862;
(statearr_40865[(7)] = inst_40823);

(statearr_40865[(8)] = inst_40822);

return statearr_40865;
})();
var statearr_40866_40898 = state_40862__$1;
(statearr_40866_40898[(2)] = null);

(statearr_40866_40898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (4))){
var inst_40826 = (state_40862[(9)]);
var inst_40826__$1 = (state_40862[(2)]);
var inst_40827 = (inst_40826__$1 == null);
var inst_40828 = cljs.core.not.call(null,inst_40827);
var state_40862__$1 = (function (){var statearr_40867 = state_40862;
(statearr_40867[(9)] = inst_40826__$1);

return statearr_40867;
})();
if(inst_40828){
var statearr_40868_40899 = state_40862__$1;
(statearr_40868_40899[(1)] = (5));

} else {
var statearr_40869_40900 = state_40862__$1;
(statearr_40869_40900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (15))){
var inst_40852 = (state_40862[(2)]);
var state_40862__$1 = state_40862;
var statearr_40870_40901 = state_40862__$1;
(statearr_40870_40901[(2)] = inst_40852);

(statearr_40870_40901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (13))){
var state_40862__$1 = state_40862;
var statearr_40871_40902 = state_40862__$1;
(statearr_40871_40902[(2)] = null);

(statearr_40871_40902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (6))){
var inst_40822 = (state_40862[(8)]);
var inst_40847 = inst_40822.length;
var inst_40848 = (inst_40847 > (0));
var state_40862__$1 = state_40862;
if(cljs.core.truth_(inst_40848)){
var statearr_40872_40903 = state_40862__$1;
(statearr_40872_40903[(1)] = (12));

} else {
var statearr_40873_40904 = state_40862__$1;
(statearr_40873_40904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (3))){
var inst_40860 = (state_40862[(2)]);
var state_40862__$1 = state_40862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40862__$1,inst_40860);
} else {
if((state_val_40863 === (12))){
var inst_40822 = (state_40862[(8)]);
var inst_40850 = cljs.core.vec.call(null,inst_40822);
var state_40862__$1 = state_40862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40862__$1,(15),out,inst_40850);
} else {
if((state_val_40863 === (2))){
var state_40862__$1 = state_40862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40862__$1,(4),ch);
} else {
if((state_val_40863 === (11))){
var inst_40826 = (state_40862[(9)]);
var inst_40830 = (state_40862[(10)]);
var inst_40840 = (state_40862[(2)]);
var inst_40841 = [];
var inst_40842 = inst_40841.push(inst_40826);
var inst_40822 = inst_40841;
var inst_40823 = inst_40830;
var state_40862__$1 = (function (){var statearr_40874 = state_40862;
(statearr_40874[(11)] = inst_40840);

(statearr_40874[(7)] = inst_40823);

(statearr_40874[(8)] = inst_40822);

(statearr_40874[(12)] = inst_40842);

return statearr_40874;
})();
var statearr_40875_40905 = state_40862__$1;
(statearr_40875_40905[(2)] = null);

(statearr_40875_40905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (9))){
var inst_40822 = (state_40862[(8)]);
var inst_40838 = cljs.core.vec.call(null,inst_40822);
var state_40862__$1 = state_40862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40862__$1,(11),out,inst_40838);
} else {
if((state_val_40863 === (5))){
var inst_40826 = (state_40862[(9)]);
var inst_40823 = (state_40862[(7)]);
var inst_40830 = (state_40862[(10)]);
var inst_40830__$1 = f.call(null,inst_40826);
var inst_40831 = cljs.core._EQ_.call(null,inst_40830__$1,inst_40823);
var inst_40832 = cljs.core.keyword_identical_QMARK_.call(null,inst_40823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40833 = (inst_40831) || (inst_40832);
var state_40862__$1 = (function (){var statearr_40876 = state_40862;
(statearr_40876[(10)] = inst_40830__$1);

return statearr_40876;
})();
if(cljs.core.truth_(inst_40833)){
var statearr_40877_40906 = state_40862__$1;
(statearr_40877_40906[(1)] = (8));

} else {
var statearr_40878_40907 = state_40862__$1;
(statearr_40878_40907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (14))){
var inst_40855 = (state_40862[(2)]);
var inst_40856 = cljs.core.async.close_BANG_.call(null,out);
var state_40862__$1 = (function (){var statearr_40880 = state_40862;
(statearr_40880[(13)] = inst_40855);

return statearr_40880;
})();
var statearr_40881_40908 = state_40862__$1;
(statearr_40881_40908[(2)] = inst_40856);

(statearr_40881_40908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (10))){
var inst_40845 = (state_40862[(2)]);
var state_40862__$1 = state_40862;
var statearr_40882_40909 = state_40862__$1;
(statearr_40882_40909[(2)] = inst_40845);

(statearr_40882_40909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40863 === (8))){
var inst_40826 = (state_40862[(9)]);
var inst_40822 = (state_40862[(8)]);
var inst_40830 = (state_40862[(10)]);
var inst_40835 = inst_40822.push(inst_40826);
var tmp40879 = inst_40822;
var inst_40822__$1 = tmp40879;
var inst_40823 = inst_40830;
var state_40862__$1 = (function (){var statearr_40883 = state_40862;
(statearr_40883[(14)] = inst_40835);

(statearr_40883[(7)] = inst_40823);

(statearr_40883[(8)] = inst_40822__$1);

return statearr_40883;
})();
var statearr_40884_40910 = state_40862__$1;
(statearr_40884_40910[(2)] = null);

(statearr_40884_40910[(1)] = (2));


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
});})(c__38085__auto___40896,out))
;
return ((function (switch__37973__auto__,c__38085__auto___40896,out){
return (function() {
var cljs$core$async$state_machine__37974__auto__ = null;
var cljs$core$async$state_machine__37974__auto____0 = (function (){
var statearr_40888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40888[(0)] = cljs$core$async$state_machine__37974__auto__);

(statearr_40888[(1)] = (1));

return statearr_40888;
});
var cljs$core$async$state_machine__37974__auto____1 = (function (state_40862){
while(true){
var ret_value__37975__auto__ = (function (){try{while(true){
var result__37976__auto__ = switch__37973__auto__.call(null,state_40862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37976__auto__;
}
break;
}
}catch (e40889){if((e40889 instanceof Object)){
var ex__37977__auto__ = e40889;
var statearr_40890_40911 = state_40862;
(statearr_40890_40911[(5)] = ex__37977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40912 = state_40862;
state_40862 = G__40912;
continue;
} else {
return ret_value__37975__auto__;
}
break;
}
});
cljs$core$async$state_machine__37974__auto__ = function(state_40862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37974__auto____1.call(this,state_40862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37974__auto____0;
cljs$core$async$state_machine__37974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37974__auto____1;
return cljs$core$async$state_machine__37974__auto__;
})()
;})(switch__37973__auto__,c__38085__auto___40896,out))
})();
var state__38087__auto__ = (function (){var statearr_40891 = f__38086__auto__.call(null);
(statearr_40891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38085__auto___40896);

return statearr_40891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38087__auto__);
});})(c__38085__auto___40896,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

