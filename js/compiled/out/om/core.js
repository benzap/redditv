// Compiled by ClojureScript 1.7.228 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.display_name[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.display_name["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.init_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.init_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.should_update[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,next_props,next_state);
} else {
var m__22332__auto____$1 = (om.core.should_update["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.will_mount[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.will_mount["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.did_mount[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.did_mount["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.will_unmount[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.will_update[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,next_props,next_state);
} else {
var m__22332__auto____$1 = (om.core.will_update["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.did_update[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__22332__auto____$1 = (om.core.did_update["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.will_receive_props[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,next_props);
} else {
var m__22332__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.render[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core.render["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.render_props[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,props,state);
} else {
var m__22332__auto____$1 = (om.core.render_props["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core.render_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,state);
} else {
var m__22332__auto____$1 = (om.core.render_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__22332__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args32197 = [];
var len__22734__auto___32200 = arguments.length;
var i__22735__auto___32201 = (0);
while(true){
if((i__22735__auto___32201 < len__22734__auto___32200)){
args32197.push((arguments[i__22735__auto___32201]));

var G__32202 = (i__22735__auto___32201 + (1));
i__22735__auto___32201 = G__32202;
continue;
} else {
}
break;
}

var G__32199 = args32197.length;
switch (G__32199) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32197.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._get_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,ks);
} else {
var m__22332__auto____$1 = (om.core._get_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args32204 = [];
var len__22734__auto___32207 = arguments.length;
var i__22735__auto___32208 = (0);
while(true){
if((i__22735__auto___32208 < len__22734__auto___32207)){
args32204.push((arguments[i__22735__auto___32208]));

var G__32209 = (i__22735__auto___32208 + (1));
i__22735__auto___32208 = G__32209;
continue;
} else {
}
break;
}

var G__32206 = args32204.length;
switch (G__32206) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32204.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_render_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_render_state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,ks);
} else {
var m__22332__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args32211 = [];
var len__22734__auto___32214 = arguments.length;
var i__22735__auto___32215 = (0);
while(true){
if((i__22735__auto___32215 < len__22734__auto___32214)){
args32211.push((arguments[i__22735__auto___32215]));

var G__32216 = (i__22735__auto___32215 + (1));
i__22735__auto___32215 = G__32216;
continue;
} else {
}
break;
}

var G__32213 = args32211.length;
switch (G__32213) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32211.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,val,render);
} else {
var m__22332__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,ks,val,render);
} else {
var m__22332__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_queue[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._get_queue["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,c);
} else {
var m__22332__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__22331__auto__ = (((x == null))?null:x);
var m__22332__auto__ = (om.core._value[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,x);
} else {
var m__22332__auto____$1 = (om.core._value["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__22331__auto__ = (((cursor == null))?null:cursor);
var m__22332__auto__ = (om.core._path[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,cursor);
} else {
var m__22332__auto____$1 = (om.core._path["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__22331__auto__ = (((cursor == null))?null:cursor);
var m__22332__auto__ = (om.core._state[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,cursor);
} else {
var m__22332__auto____$1 = (om.core._state["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args32218 = [];
var len__22734__auto___32221 = arguments.length;
var i__22735__auto___32222 = (0);
while(true){
if((i__22735__auto___32222 < len__22734__auto___32221)){
args32218.push((arguments[i__22735__auto___32222]));

var G__32223 = (i__22735__auto___32222 + (1));
i__22735__auto___32222 = G__32223;
continue;
} else {
}
break;
}

var G__32220 = args32218.length;
switch (G__32220) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32218.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__22331__auto__ = (((value == null))?null:value);
var m__22332__auto__ = (om.core._to_cursor[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,value,state);
} else {
var m__22332__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__22331__auto__ = (((value == null))?null:value);
var m__22332__auto__ = (om.core._to_cursor[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,value,state,path);
} else {
var m__22332__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__22331__auto__ = (((cursor == null))?null:cursor);
var m__22332__auto__ = (om.core._derive[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,cursor,derived,state,path);
} else {
var m__22332__auto____$1 = (om.core._derive["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__22331__auto__ = (((cursor == null))?null:cursor);
var m__22332__auto__ = (om.core._transact_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,cursor,korks,f,tag);
} else {
var m__22332__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__22331__auto__ = (((x == null))?null:x);
var m__22332__auto__ = (om.core._listen_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,x,key,tx_listen);
} else {
var m__22332__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__22331__auto__ = (((x == null))?null:x);
var m__22332__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,x,key);
} else {
var m__22332__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__22331__auto__ = (((x == null))?null:x);
var m__22332__auto__ = (om.core._notify_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__22332__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,id,p,val);
} else {
var m__22332__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,id,p);
} else {
var m__22332__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,id);
} else {
var m__22332__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_property[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,id,p);
} else {
var m__22332__auto____$1 = (om.core._get_property["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__22331__auto__ = (((cursor == null))?null:cursor);
var m__22332__auto__ = (om.core._root_key[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,cursor);
} else {
var m__22332__auto____$1 = (om.core._root_key["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._adapt[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,other);
} else {
var m__22332__auto____$1 = (om.core._adapt["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,c);
} else {
var m__22332__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$,c);
} else {
var m__22332__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__22331__auto__ = (((this$ == null))?null:this$);
var m__22332__auto__ = (om.core._get_deps[goog.typeOf(x__22331__auto__)]);
if(!((m__22332__auto__ == null))){
return m__22332__auto__.call(null,this$);
} else {
var m__22332__auto____$1 = (om.core._get_deps["_"]);
if(!((m__22332__auto____$1 == null))){
return m__22332__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args32229 = [];
var len__22734__auto___32233 = arguments.length;
var i__22735__auto___32234 = (0);
while(true){
if((i__22735__auto___32234 < len__22734__auto___32233)){
args32229.push((arguments[i__22735__auto___32234]));

var G__32235 = (i__22735__auto___32234 + (1));
i__22735__auto___32234 = G__32235;
continue;
} else {
}
break;
}

var G__32231 = args32229.length;
switch (G__32231) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32229.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__32232 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__32232,korks__$1);
} else {
return G__32232;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args32237 = [];
var len__22734__auto___32240 = arguments.length;
var i__22735__auto___32241 = (0);
while(true){
if((i__22735__auto___32241 < len__22734__auto___32240)){
args32237.push((arguments[i__22735__auto___32241]));

var G__32242 = (i__22735__auto___32241 + (1));
i__22735__auto___32241 = G__32242;
continue;
} else {
}
break;
}

var G__32239 = args32237.length;
switch (G__32239) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32237.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args32244 = [];
var len__22734__auto___32247 = arguments.length;
var i__22735__auto___32248 = (0);
while(true){
if((i__22735__auto___32248 < len__22734__auto___32247)){
args32244.push((arguments[i__22735__auto___32248]));

var G__32249 = (i__22735__auto___32248 + (1));
i__22735__auto___32248 = G__32249;
continue;
} else {
}
break;
}

var G__32246 = args32244.length;
switch (G__32246) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32244.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__32252 = state;
(G__32252["__om_prev_state"] = (state["__om_state"]));

(G__32252["__om_state"] = pending_state);

(G__32252["__om_pending_state"] = null);

return G__32252;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args32253 = [];
var len__22734__auto___32256 = arguments.length;
var i__22735__auto___32257 = (0);
while(true){
if((i__22735__auto___32257 < len__22734__auto___32256)){
args32253.push((arguments[i__22735__auto___32257]));

var G__32258 = (i__22735__auto___32257 + (1));
i__22735__auto___32257 = G__32258;
continue;
} else {
}
break;
}

var G__32255 = args32253.length;
switch (G__32255) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32253.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__21676__auto__ = props;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__21676__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32282 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__21676__auto__ = (state_32282["__om_prev_state"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return (state_32282["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32263 = cljs.core.seq.call(null,refs);
var chunk__32264 = null;
var count__32265 = (0);
var i__32266 = (0);
while(true){
if((i__32266 < count__32265)){
var ref = cljs.core._nth.call(null,chunk__32264,i__32266);
om.core.unobserve.call(null,this$,ref);

var G__32283 = seq__32263;
var G__32284 = chunk__32264;
var G__32285 = count__32265;
var G__32286 = (i__32266 + (1));
seq__32263 = G__32283;
chunk__32264 = G__32284;
count__32265 = G__32285;
i__32266 = G__32286;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32263);
if(temp__4657__auto____$1){
var seq__32263__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32263__$1)){
var c__22479__auto__ = cljs.core.chunk_first.call(null,seq__32263__$1);
var G__32287 = cljs.core.chunk_rest.call(null,seq__32263__$1);
var G__32288 = c__22479__auto__;
var G__32289 = cljs.core.count.call(null,c__22479__auto__);
var G__32290 = (0);
seq__32263 = G__32287;
chunk__32264 = G__32288;
count__32265 = G__32289;
i__32266 = G__32290;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32263__$1);
om.core.unobserve.call(null,this$,ref);

var G__32291 = cljs.core.next.call(null,seq__32263__$1);
var G__32292 = null;
var G__32293 = (0);
var G__32294 = (0);
seq__32263 = G__32291;
chunk__32264 = G__32292;
count__32265 = G__32293;
i__32266 = G__32294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21664__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__21664__auto__)){
var and__21664__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__21664__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__21664__auto____$1;
}
} else {
return and__21664__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21664__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__21664__auto__){
return cljs.core.some.call(null,((function (and__21664__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32260_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__32260_SHARP_);
});})(and__21664__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__21664__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_32269 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32270 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32271 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32272 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32273 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32273;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32272;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32271;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32270;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32269;
}}),(function (next_props,next_state){
var this$ = this;
var c_32295 = om.core.children.call(null,this$);
if(((!((c_32295 == null)))?(((false) || (c_32295.om$core$IWillUpdate$))?true:(((!c_32295.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32295):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32295))){
var state_32296 = this$.state;
om.core.will_update.call(null,c_32295,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__21676__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__21676__auto__ = id;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32297 = om.core.children.call(null,this$);
if(((!((c_32297 == null)))?(((false) || (c_32297.om$core$IWillMount$))?true:(((!c_32297.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32297):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32297))){
om.core.will_mount.call(null,c_32297);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x32299 = obj;
x32299.om$core$ISetState$ = true;

x32299.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32299){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__21664__auto__ = !((app_state == null));
if(and__21664__auto__){
return render;
} else {
return and__21664__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32299))
;

x32299.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32299){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__21664__auto__ = !((app_state == null));
if(and__21664__auto__){
return render;
} else {
return and__21664__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32299))
;

x32299.om$core$IGetRenderState$ = true;

x32299.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32299){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32299))
;

x32299.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32299){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32299))
;

x32299.om$core$IGetState$ = true;

x32299.om$core$IGetState$_get_state$arity$1 = ((function (x32299){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__21676__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return (state["__om_state"]);
}
});})(x32299))
;

x32299.om$core$IGetState$_get_state$arity$2 = ((function (x32299){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32299))
;

return x32299;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__21676__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__21676__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32310 = om.core.children.call(null,this$);
if(((!((c_32310 == null)))?(((false) || (c_32310.om$core$IWillMount$))?true:(((!c_32310.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32310):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_32310))){
om.core.will_mount.call(null,c_32310);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32304 = cljs.core.seq.call(null,refs);
var chunk__32305 = null;
var count__32306 = (0);
var i__32307 = (0);
while(true){
if((i__32307 < count__32306)){
var ref = cljs.core._nth.call(null,chunk__32305,i__32307);
om.core.unobserve.call(null,this$,ref);

var G__32311 = seq__32304;
var G__32312 = chunk__32305;
var G__32313 = count__32306;
var G__32314 = (i__32307 + (1));
seq__32304 = G__32311;
chunk__32305 = G__32312;
count__32306 = G__32313;
i__32307 = G__32314;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32304);
if(temp__4657__auto____$1){
var seq__32304__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32304__$1)){
var c__22479__auto__ = cljs.core.chunk_first.call(null,seq__32304__$1);
var G__32315 = cljs.core.chunk_rest.call(null,seq__32304__$1);
var G__32316 = c__22479__auto__;
var G__32317 = cljs.core.count.call(null,c__22479__auto__);
var G__32318 = (0);
seq__32304 = G__32315;
chunk__32305 = G__32316;
count__32306 = G__32317;
i__32307 = G__32318;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32304__$1);
om.core.unobserve.call(null,this$,ref);

var G__32319 = cljs.core.next.call(null,seq__32304__$1);
var G__32320 = null;
var G__32321 = (0);
var G__32322 = (0);
seq__32304 = G__32319;
chunk__32305 = G__32320;
count__32306 = G__32321;
i__32307 = G__32322;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_32323 = this$.props;
var c_32324 = om.core.children.call(null,this$);
if(((!((c_32324 == null)))?(((false) || (c_32324.om$core$IWillUpdate$))?true:(((!c_32324.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32324):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_32324))){
var state_32325 = this$.state;
om.core.will_update.call(null,c_32324,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_32326 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__21676__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x32328 = cljs.core.clj__GT_js.call(null,methods$);
x32328.om$core$ISetState$ = true;

x32328.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32328){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__21664__auto__ = !((gstate == null));
if(and__21664__auto__){
return render;
} else {
return and__21664__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x32328))
;

x32328.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32328){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x32328))
;

x32328.om$core$IGetRenderState$ = true;

x32328.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32328){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x32328))
;

x32328.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32328){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32328))
;

x32328.om$core$IGetState$ = true;

x32328.om$core$IGetState$_get_state$arity$1 = ((function (x32328){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__21676__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x32328))
;

x32328.om$core$IGetState$_get_state$arity$2 = ((function (x32328){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32328))
;

return x32328;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__32332){
var vec__32333 = p__32332;
var k = cljs.core.nth.call(null,vec__32333,(0),null);
var v = cljs.core.nth.call(null,vec__32333,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32334 = null;
var G__32334__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32334__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32334 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32334__2.call(this,self__,k);
case 3:
return G__32334__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32334.cljs$core$IFn$_invoke$arity$2 = G__32334__2;
G__32334.cljs$core$IFn$_invoke$arity$3 = G__32334__3;
return G__32334;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32331){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32331)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32336 = null;
var G__32336__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32336__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32336 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32336__2.call(this,self__,k);
case 3:
return G__32336__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32336.cljs$core$IFn$_invoke$arity$2 = G__32336__2;
G__32336.cljs$core$IFn$_invoke$arity$3 = G__32336__3;
return G__32336;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32335){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32335)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__22274__auto__,writer__22275__auto__,opt__22276__auto__){
return cljs.core._write.call(null,writer__22275__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x32338 = cljs.core.clone.call(null,val);
x32338.cljs$core$IDeref$ = true;

x32338.cljs$core$IDeref$_deref$arity$1 = ((function (x32338){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x32338))
;

x32338.om$core$ICursor$ = true;

x32338.om$core$ICursor$_path$arity$1 = ((function (x32338){
return (function (_){
var ___$1 = this;
return path;
});})(x32338))
;

x32338.om$core$ICursor$_state$arity$1 = ((function (x32338){
return (function (_){
var ___$1 = this;
return state;
});})(x32338))
;

x32338.om$core$ITransact$ = true;

x32338.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32338){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x32338))
;

x32338.cljs$core$IEquiv$ = true;

x32338.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32338){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x32338))
;

return x32338;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args32339 = [];
var len__22734__auto___32344 = arguments.length;
var i__22735__auto___32345 = (0);
while(true){
if((i__22735__auto___32345 < len__22734__auto___32344)){
args32339.push((arguments[i__22735__auto___32345]));

var G__32346 = (i__22735__auto___32345 + (1));
i__22735__auto___32345 = G__32346;
continue;
} else {
}
break;
}

var G__32341 = args32339.length;
switch (G__32341) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32339.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x32351 = cljs.core.clone.call(null,x);
x32351.cljs$core$ICloneable$ = true;

x32351.cljs$core$ICloneable$_clone$arity$1 = ((function (x32351){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x32351))
;

x32351.om$core$IAdapt$ = true;

x32351.om$core$IAdapt$_adapt$arity$2 = ((function (x32351){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x32351))
;

x32351.om$core$ICursorDerive$ = true;

x32351.om$core$ICursorDerive$_derive$arity$4 = ((function (x32351){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32351))
;

x32351.om$core$ITransact$ = true;

x32351.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32351){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x32351))
;

return x32351;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x32359 = cljs.core.clone.call(null,cursor);
x32359.om$core$ICursorDerive$ = true;

x32359.om$core$ICursorDerive$_derive$arity$4 = ((function (x32359,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32359,path,storage))
;

x32359.om$core$IOmRef$ = true;

x32359.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32359,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x32359,path,storage))
;

x32359.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32359,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32359,path,storage))
;

x32359.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32359,path,storage){
return (function (_){
var ___$1 = this;
var seq__32360 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__32361 = null;
var count__32362 = (0);
var i__32363 = (0);
while(true){
if((i__32363 < count__32362)){
var c = cljs.core._nth.call(null,chunk__32361,i__32363);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32364 = seq__32360;
var G__32365 = chunk__32361;
var G__32366 = count__32362;
var G__32367 = (i__32363 + (1));
seq__32360 = G__32364;
chunk__32361 = G__32365;
count__32362 = G__32366;
i__32363 = G__32367;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32360);
if(temp__4657__auto__){
var seq__32360__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32360__$1)){
var c__22479__auto__ = cljs.core.chunk_first.call(null,seq__32360__$1);
var G__32368 = cljs.core.chunk_rest.call(null,seq__32360__$1);
var G__32369 = c__22479__auto__;
var G__32370 = cljs.core.count.call(null,c__22479__auto__);
var G__32371 = (0);
seq__32360 = G__32368;
chunk__32361 = G__32369;
count__32362 = G__32370;
i__32363 = G__32371;
continue;
} else {
var c = cljs.core.first.call(null,seq__32360__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32372 = cljs.core.next.call(null,seq__32360__$1);
var G__32373 = null;
var G__32374 = (0);
var G__32375 = (0);
seq__32360 = G__32372;
chunk__32361 = G__32373;
count__32362 = G__32374;
i__32363 = G__32375;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32359,path,storage))
;

x32359.om$core$IOmRef$_get_deps$arity$1 = ((function (x32359,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x32359,path,storage))
;

x32359.om$core$ITransact$ = true;

x32359.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32359,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x32359,path,storage))
;

return x32359;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__21676__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ref-cursor?","ref-cursor?",1026875459,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__21676__auto__ = state.om$render$T;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args32376 = [];
var len__22734__auto___32383 = arguments.length;
var i__22735__auto___32384 = (0);
while(true){
if((i__22735__auto___32384 < len__22734__auto___32383)){
args32376.push((arguments[i__22735__auto___32384]));

var G__32385 = (i__22735__auto___32384 + (1));
i__22735__auto___32384 = G__32385;
continue;
} else {
}
break;
}

var G__32378 = args32376.length;
switch (G__32378) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32376.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__32379_32387 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__32380_32388 = null;
var count__32381_32389 = (0);
var i__32382_32390 = (0);
while(true){
if((i__32382_32390 < count__32381_32389)){
var f_32391 = cljs.core._nth.call(null,chunk__32380_32388,i__32382_32390);
f_32391.call(null);

var G__32392 = seq__32379_32387;
var G__32393 = chunk__32380_32388;
var G__32394 = count__32381_32389;
var G__32395 = (i__32382_32390 + (1));
seq__32379_32387 = G__32392;
chunk__32380_32388 = G__32393;
count__32381_32389 = G__32394;
i__32382_32390 = G__32395;
continue;
} else {
var temp__4657__auto___32396 = cljs.core.seq.call(null,seq__32379_32387);
if(temp__4657__auto___32396){
var seq__32379_32397__$1 = temp__4657__auto___32396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32379_32397__$1)){
var c__22479__auto___32398 = cljs.core.chunk_first.call(null,seq__32379_32397__$1);
var G__32399 = cljs.core.chunk_rest.call(null,seq__32379_32397__$1);
var G__32400 = c__22479__auto___32398;
var G__32401 = cljs.core.count.call(null,c__22479__auto___32398);
var G__32402 = (0);
seq__32379_32387 = G__32399;
chunk__32380_32388 = G__32400;
count__32381_32389 = G__32401;
i__32382_32390 = G__32402;
continue;
} else {
var f_32403 = cljs.core.first.call(null,seq__32379_32397__$1);
f_32403.call(null);

var G__32404 = cljs.core.next.call(null,seq__32379_32397__$1);
var G__32405 = null;
var G__32406 = (0);
var G__32407 = (0);
seq__32379_32387 = G__32404;
chunk__32380_32388 = G__32405;
count__32381_32389 = G__32406;
i__32382_32390 = G__32407;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__21676__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__21676__auto__){
return or__21676__auto__;
} else {
var or__21676__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__21676__auto____$1){
return or__21676__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args32418 = [];
var len__22734__auto___32421 = arguments.length;
var i__22735__auto___32422 = (0);
while(true){
if((i__22735__auto___32422 < len__22734__auto___32421)){
args32418.push((arguments[i__22735__auto___32422]));

var G__32423 = (i__22735__auto___32422 + (1));
i__22735__auto___32422 = G__32423;
continue;
} else {
}
break;
}

var G__32420 = args32418.length;
switch (G__32420) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32418.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_32425 = (function (){var or__21676__auto__ = descriptor;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
var or__21676__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__21676__auto____$1)){
return or__21676__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_32425 === goog.object.get(f,"om$tag"))))){
var factory_32426 = React.createFactory(React.createClass(rdesc_32425));
goog.object.set(f,"om$descriptor",factory_32426);

goog.object.set(f,"om$tag",rdesc_32425);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args32427 = [];
var len__22734__auto___32430 = arguments.length;
var i__22735__auto___32431 = (0);
while(true){
if((i__22735__auto___32431 < len__22734__auto___32430)){
args32427.push((arguments[i__22735__auto___32431]));

var G__32432 = (i__22735__auto___32431 + (1));
i__22735__auto___32431 = G__32432;
continue;
} else {
}
break;
}

var G__32429 = args32427.length;
switch (G__32429) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32427.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args32434 = [];
var len__22734__auto___32439 = arguments.length;
var i__22735__auto___32440 = (0);
while(true){
if((i__22735__auto___32440 < len__22734__auto___32439)){
args32434.push((arguments[i__22735__auto___32440]));

var G__32441 = (i__22735__auto___32440 + (1));
i__22735__auto___32440 = G__32441;
continue;
} else {
}
break;
}

var G__32436 = args32434.length;
switch (G__32436) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32434.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__32437 = m;
var map__32437__$1 = ((((!((map__32437 == null)))?((((map__32437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32437):map__32437);
var key = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__21676__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32437,map__32437__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32437,map__32437__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32437,map__32437__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32437,map__32437__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__21676__auto__ = rkey;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args32443 = [];
var len__22734__auto___32446 = arguments.length;
var i__22735__auto___32447 = (0);
while(true){
if((i__22735__auto___32447 < len__22734__auto___32446)){
args32443.push((arguments[i__22735__auto___32447]));

var G__32448 = (i__22735__auto___32447 + (1));
i__22735__auto___32447 = G__32448;
continue;
} else {
}
break;
}

var G__32445 = args32443.length;
switch (G__32445) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32443.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args32450 = [];
var len__22734__auto___32453 = arguments.length;
var i__22735__auto___32454 = (0);
while(true){
if((i__22735__auto___32454 < len__22734__auto___32453)){
args32450.push((arguments[i__22735__auto___32454]));

var G__32455 = (i__22735__auto___32454 + (1));
i__22735__auto___32454 = G__32455;
continue;
} else {
}
break;
}

var G__32452 = args32450.length;
switch (G__32452) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32450.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_32473 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_32474 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_32475 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x32466_32476 = state;
x32466_32476.om$core$IRootProperties$ = true;

x32466_32476.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32473,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32473,cljs.core.dissoc,id,k);
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32473,cljs.core.dissoc,id);
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRootProperties$_get_property$arity$3 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_32473),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$INotify$ = true;

x32466_32476.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_32474,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_32474,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32467_32477 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_32474));
var chunk__32468_32478 = null;
var count__32469_32479 = (0);
var i__32470_32480 = (0);
while(true){
if((i__32470_32480 < count__32469_32479)){
var vec__32471_32481 = cljs.core._nth.call(null,chunk__32468_32478,i__32470_32480);
var __32482 = cljs.core.nth.call(null,vec__32471_32481,(0),null);
var f_32483 = cljs.core.nth.call(null,vec__32471_32481,(1),null);
f_32483.call(null,tx_data,root_cursor);

var G__32484 = seq__32467_32477;
var G__32485 = chunk__32468_32478;
var G__32486 = count__32469_32479;
var G__32487 = (i__32470_32480 + (1));
seq__32467_32477 = G__32484;
chunk__32468_32478 = G__32485;
count__32469_32479 = G__32486;
i__32470_32480 = G__32487;
continue;
} else {
var temp__4657__auto___32488 = cljs.core.seq.call(null,seq__32467_32477);
if(temp__4657__auto___32488){
var seq__32467_32489__$1 = temp__4657__auto___32488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32467_32489__$1)){
var c__22479__auto___32490 = cljs.core.chunk_first.call(null,seq__32467_32489__$1);
var G__32491 = cljs.core.chunk_rest.call(null,seq__32467_32489__$1);
var G__32492 = c__22479__auto___32490;
var G__32493 = cljs.core.count.call(null,c__22479__auto___32490);
var G__32494 = (0);
seq__32467_32477 = G__32491;
chunk__32468_32478 = G__32492;
count__32469_32479 = G__32493;
i__32470_32480 = G__32494;
continue;
} else {
var vec__32472_32495 = cljs.core.first.call(null,seq__32467_32489__$1);
var __32496 = cljs.core.nth.call(null,vec__32472_32495,(0),null);
var f_32497 = cljs.core.nth.call(null,vec__32472_32495,(1),null);
f_32497.call(null,tx_data,root_cursor);

var G__32498 = cljs.core.next.call(null,seq__32467_32489__$1);
var G__32499 = null;
var G__32500 = (0);
var G__32501 = (0);
seq__32467_32477 = G__32498;
chunk__32468_32478 = G__32499;
count__32469_32479 = G__32500;
i__32470_32480 = G__32501;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRenderQueue$ = true;

x32466_32476.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_32475);
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_32475),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_32475,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

x32466_32476.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32466_32476,properties_32473,listeners_32474,render_queue_32475){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_32475,cljs.core.empty);
});})(x32466_32476,properties_32473,listeners_32474,render_queue_32475))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x32503 = cljs.core.clone.call(null,cursor);
x32503.cljs$core$ICloneable$ = true;

x32503.cljs$core$ICloneable$_clone$arity$1 = ((function (x32503){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x32503))
;

x32503.om$core$IAdapt$ = true;

x32503.om$core$IAdapt$_adapt$arity$2 = ((function (x32503){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x32503))
;

x32503.om$core$IRootKey$ = true;

x32503.om$core$IRootKey$_root_key$arity$1 = ((function (x32503){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32503))
;

return x32503;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__32504){
var map__32568 = p__32504;
var map__32568__$1 = ((((!((map__32568 == null)))?((((map__32568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32568):map__32568);
var options = map__32568__$1;
var target = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__32568__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__32631 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__32631,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__32631,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__21676__auto__ = adapt;
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_32632 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_32601 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32602 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32603 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32604 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32604;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32603;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32602;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32601;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_32632);
} else {
}
}

var queue_32633 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_32633)){
} else {
var seq__32605_32634 = cljs.core.seq.call(null,queue_32633);
var chunk__32606_32635 = null;
var count__32607_32636 = (0);
var i__32608_32637 = (0);
while(true){
if((i__32608_32637 < count__32607_32636)){
var c_32638 = cljs.core._nth.call(null,chunk__32606_32635,i__32608_32637);
if(cljs.core.truth_(c_32638.isMounted())){
var temp__4657__auto___32639 = (c_32638.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32639)){
var next_props_32640 = temp__4657__auto___32639;
(c_32638.props["__om_cursor"] = next_props_32640);

(c_32638.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21676__auto__ = !((function (){var G__32610 = om.core.children.call(null,c_32638);
if(!((G__32610 == null))){
if((false) || (G__32610.om$core$ICheckState$)){
return true;
} else {
if((!G__32610.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32610);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32610);
}
})());
if(or__21676__auto__){
return or__21676__auto__;
} else {
return c_32638.shouldComponentUpdate(c_32638.props,c_32638.state);
}
})())){
c_32638.forceUpdate();
} else {
}
} else {
}

var G__32641 = seq__32605_32634;
var G__32642 = chunk__32606_32635;
var G__32643 = count__32607_32636;
var G__32644 = (i__32608_32637 + (1));
seq__32605_32634 = G__32641;
chunk__32606_32635 = G__32642;
count__32607_32636 = G__32643;
i__32608_32637 = G__32644;
continue;
} else {
var temp__4657__auto___32645 = cljs.core.seq.call(null,seq__32605_32634);
if(temp__4657__auto___32645){
var seq__32605_32646__$1 = temp__4657__auto___32645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32605_32646__$1)){
var c__22479__auto___32647 = cljs.core.chunk_first.call(null,seq__32605_32646__$1);
var G__32648 = cljs.core.chunk_rest.call(null,seq__32605_32646__$1);
var G__32649 = c__22479__auto___32647;
var G__32650 = cljs.core.count.call(null,c__22479__auto___32647);
var G__32651 = (0);
seq__32605_32634 = G__32648;
chunk__32606_32635 = G__32649;
count__32607_32636 = G__32650;
i__32608_32637 = G__32651;
continue;
} else {
var c_32652 = cljs.core.first.call(null,seq__32605_32646__$1);
if(cljs.core.truth_(c_32652.isMounted())){
var temp__4657__auto___32653__$1 = (c_32652.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32653__$1)){
var next_props_32654 = temp__4657__auto___32653__$1;
(c_32652.props["__om_cursor"] = next_props_32654);

(c_32652.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21676__auto__ = !((function (){var G__32612 = om.core.children.call(null,c_32652);
if(!((G__32612 == null))){
if((false) || (G__32612.om$core$ICheckState$)){
return true;
} else {
if((!G__32612.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32612);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32612);
}
})());
if(or__21676__auto__){
return or__21676__auto__;
} else {
return c_32652.shouldComponentUpdate(c_32652.props,c_32652.state);
}
})())){
c_32652.forceUpdate();
} else {
}
} else {
}

var G__32655 = cljs.core.next.call(null,seq__32605_32646__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32605_32634 = G__32655;
chunk__32606_32635 = G__32656;
count__32607_32636 = G__32657;
i__32608_32637 = G__32658;
continue;
}
} else {
}
}
break;
}
}

var _refs_32659 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_32659)){
} else {
var seq__32613_32660 = cljs.core.seq.call(null,_refs_32659);
var chunk__32614_32661 = null;
var count__32615_32662 = (0);
var i__32616_32663 = (0);
while(true){
if((i__32616_32663 < count__32615_32662)){
var vec__32617_32664 = cljs.core._nth.call(null,chunk__32614_32661,i__32616_32663);
var path_32665__$1 = cljs.core.nth.call(null,vec__32617_32664,(0),null);
var cs_32666 = cljs.core.nth.call(null,vec__32617_32664,(1),null);
var cs_32667__$1 = cljs.core.deref.call(null,cs_32666);
var seq__32618_32668 = cljs.core.seq.call(null,cs_32667__$1);
var chunk__32619_32669 = null;
var count__32620_32670 = (0);
var i__32621_32671 = (0);
while(true){
if((i__32621_32671 < count__32620_32670)){
var vec__32622_32672 = cljs.core._nth.call(null,chunk__32619_32669,i__32621_32671);
var id_32673 = cljs.core.nth.call(null,vec__32622_32672,(0),null);
var c_32674 = cljs.core.nth.call(null,vec__32622_32672,(1),null);
if(cljs.core.truth_(c_32674.shouldComponentUpdate(c_32674.props,c_32674.state))){
c_32674.forceUpdate();
} else {
}

var G__32675 = seq__32618_32668;
var G__32676 = chunk__32619_32669;
var G__32677 = count__32620_32670;
var G__32678 = (i__32621_32671 + (1));
seq__32618_32668 = G__32675;
chunk__32619_32669 = G__32676;
count__32620_32670 = G__32677;
i__32621_32671 = G__32678;
continue;
} else {
var temp__4657__auto___32679 = cljs.core.seq.call(null,seq__32618_32668);
if(temp__4657__auto___32679){
var seq__32618_32680__$1 = temp__4657__auto___32679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32618_32680__$1)){
var c__22479__auto___32681 = cljs.core.chunk_first.call(null,seq__32618_32680__$1);
var G__32682 = cljs.core.chunk_rest.call(null,seq__32618_32680__$1);
var G__32683 = c__22479__auto___32681;
var G__32684 = cljs.core.count.call(null,c__22479__auto___32681);
var G__32685 = (0);
seq__32618_32668 = G__32682;
chunk__32619_32669 = G__32683;
count__32620_32670 = G__32684;
i__32621_32671 = G__32685;
continue;
} else {
var vec__32623_32686 = cljs.core.first.call(null,seq__32618_32680__$1);
var id_32687 = cljs.core.nth.call(null,vec__32623_32686,(0),null);
var c_32688 = cljs.core.nth.call(null,vec__32623_32686,(1),null);
if(cljs.core.truth_(c_32688.shouldComponentUpdate(c_32688.props,c_32688.state))){
c_32688.forceUpdate();
} else {
}

var G__32689 = cljs.core.next.call(null,seq__32618_32680__$1);
var G__32690 = null;
var G__32691 = (0);
var G__32692 = (0);
seq__32618_32668 = G__32689;
chunk__32619_32669 = G__32690;
count__32620_32670 = G__32691;
i__32621_32671 = G__32692;
continue;
}
} else {
}
}
break;
}

var G__32693 = seq__32613_32660;
var G__32694 = chunk__32614_32661;
var G__32695 = count__32615_32662;
var G__32696 = (i__32616_32663 + (1));
seq__32613_32660 = G__32693;
chunk__32614_32661 = G__32694;
count__32615_32662 = G__32695;
i__32616_32663 = G__32696;
continue;
} else {
var temp__4657__auto___32697 = cljs.core.seq.call(null,seq__32613_32660);
if(temp__4657__auto___32697){
var seq__32613_32698__$1 = temp__4657__auto___32697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32613_32698__$1)){
var c__22479__auto___32699 = cljs.core.chunk_first.call(null,seq__32613_32698__$1);
var G__32700 = cljs.core.chunk_rest.call(null,seq__32613_32698__$1);
var G__32701 = c__22479__auto___32699;
var G__32702 = cljs.core.count.call(null,c__22479__auto___32699);
var G__32703 = (0);
seq__32613_32660 = G__32700;
chunk__32614_32661 = G__32701;
count__32615_32662 = G__32702;
i__32616_32663 = G__32703;
continue;
} else {
var vec__32624_32704 = cljs.core.first.call(null,seq__32613_32698__$1);
var path_32705__$1 = cljs.core.nth.call(null,vec__32624_32704,(0),null);
var cs_32706 = cljs.core.nth.call(null,vec__32624_32704,(1),null);
var cs_32707__$1 = cljs.core.deref.call(null,cs_32706);
var seq__32625_32708 = cljs.core.seq.call(null,cs_32707__$1);
var chunk__32626_32709 = null;
var count__32627_32710 = (0);
var i__32628_32711 = (0);
while(true){
if((i__32628_32711 < count__32627_32710)){
var vec__32629_32712 = cljs.core._nth.call(null,chunk__32626_32709,i__32628_32711);
var id_32713 = cljs.core.nth.call(null,vec__32629_32712,(0),null);
var c_32714 = cljs.core.nth.call(null,vec__32629_32712,(1),null);
if(cljs.core.truth_(c_32714.shouldComponentUpdate(c_32714.props,c_32714.state))){
c_32714.forceUpdate();
} else {
}

var G__32715 = seq__32625_32708;
var G__32716 = chunk__32626_32709;
var G__32717 = count__32627_32710;
var G__32718 = (i__32628_32711 + (1));
seq__32625_32708 = G__32715;
chunk__32626_32709 = G__32716;
count__32627_32710 = G__32717;
i__32628_32711 = G__32718;
continue;
} else {
var temp__4657__auto___32719__$1 = cljs.core.seq.call(null,seq__32625_32708);
if(temp__4657__auto___32719__$1){
var seq__32625_32720__$1 = temp__4657__auto___32719__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32625_32720__$1)){
var c__22479__auto___32721 = cljs.core.chunk_first.call(null,seq__32625_32720__$1);
var G__32722 = cljs.core.chunk_rest.call(null,seq__32625_32720__$1);
var G__32723 = c__22479__auto___32721;
var G__32724 = cljs.core.count.call(null,c__22479__auto___32721);
var G__32725 = (0);
seq__32625_32708 = G__32722;
chunk__32626_32709 = G__32723;
count__32627_32710 = G__32724;
i__32628_32711 = G__32725;
continue;
} else {
var vec__32630_32726 = cljs.core.first.call(null,seq__32625_32720__$1);
var id_32727 = cljs.core.nth.call(null,vec__32630_32726,(0),null);
var c_32728 = cljs.core.nth.call(null,vec__32630_32726,(1),null);
if(cljs.core.truth_(c_32728.shouldComponentUpdate(c_32728.props,c_32728.state))){
c_32728.forceUpdate();
} else {
}

var G__32729 = cljs.core.next.call(null,seq__32625_32720__$1);
var G__32730 = null;
var G__32731 = (0);
var G__32732 = (0);
seq__32625_32708 = G__32729;
chunk__32626_32709 = G__32730;
count__32627_32710 = G__32731;
i__32628_32711 = G__32732;
continue;
}
} else {
}
}
break;
}

var G__32733 = cljs.core.next.call(null,seq__32613_32698__$1);
var G__32734 = null;
var G__32735 = (0);
var G__32736 = (0);
seq__32613_32660 = G__32733;
chunk__32614_32661 = G__32734;
count__32615_32662 = G__32735;
i__32616_32663 = G__32736;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32568,map__32568__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args32739 = [];
var len__22734__auto___32742 = arguments.length;
var i__22735__auto___32743 = (0);
while(true){
if((i__22735__auto___32743 < len__22734__auto___32742)){
args32739.push((arguments[i__22735__auto___32743]));

var G__32744 = (i__22735__auto___32743 + (1));
i__22735__auto___32743 = G__32744;
continue;
} else {
}
break;
}

var G__32741 = args32739.length;
switch (G__32741) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32739.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args32746 = [];
var len__22734__auto___32749 = arguments.length;
var i__22735__auto___32750 = (0);
while(true){
if((i__22735__auto___32750 < len__22734__auto___32749)){
args32746.push((arguments[i__22735__auto___32750]));

var G__32751 = (i__22735__auto___32750 + (1));
i__22735__auto___32750 = G__32751;
continue;
} else {
}
break;
}

var G__32748 = args32746.length;
switch (G__32748) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32746.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args32755 = [];
var len__22734__auto___32759 = arguments.length;
var i__22735__auto___32760 = (0);
while(true){
if((i__22735__auto___32760 < len__22734__auto___32759)){
args32755.push((arguments[i__22735__auto___32760]));

var G__32761 = (i__22735__auto___32760 + (1));
i__22735__auto___32760 = G__32761;
continue;
} else {
}
break;
}

var G__32757 = args32755.length;
switch (G__32757) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32755.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__32758 = owner.refs;
var G__32758__$1 = (((G__32758 == null))?null:(G__32758[name]));
if((G__32758__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__32758__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var G__32764 = owner.refs;
if((G__32764 == null)){
return null;
} else {
return goog.object.get(G__32764,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args32765 = [];
var len__22734__auto___32768 = arguments.length;
var i__22735__auto___32769 = (0);
while(true){
if((i__22735__auto___32769 < len__22734__auto___32768)){
args32765.push((arguments[i__22735__auto___32769]));

var G__32770 = (i__22735__auto___32769 + (1));
i__22735__auto___32769 = G__32770;
continue;
} else {
}
break;
}

var G__32767 = args32765.length;
switch (G__32767) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32765.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args32772 = [];
var len__22734__auto___32775 = arguments.length;
var i__22735__auto___32776 = (0);
while(true){
if((i__22735__auto___32776 < len__22734__auto___32775)){
args32772.push((arguments[i__22735__auto___32776]));

var G__32777 = (i__22735__auto___32776 + (1));
i__22735__auto___32776 = G__32777;
continue;
} else {
}
break;
}

var G__32774 = args32772.length;
switch (G__32774) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32772.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args32779 = [];
var len__22734__auto___32782 = arguments.length;
var i__22735__auto___32783 = (0);
while(true){
if((i__22735__auto___32783 < len__22734__auto___32782)){
args32779.push((arguments[i__22735__auto___32783]));

var G__32784 = (i__22735__auto___32783 + (1));
i__22735__auto___32783 = G__32784;
continue;
} else {
}
break;
}

var G__32781 = args32779.length;
switch (G__32781) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32779.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args32786 = [];
var len__22734__auto___32789 = arguments.length;
var i__22735__auto___32790 = (0);
while(true){
if((i__22735__auto___32790 < len__22734__auto___32789)){
args32786.push((arguments[i__22735__auto___32790]));

var G__32791 = (i__22735__auto___32790 + (1));
i__22735__auto___32790 = G__32791;
continue;
} else {
}
break;
}

var G__32788 = args32786.length;
switch (G__32788) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32786.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args32793 = [];
var len__22734__auto___32796 = arguments.length;
var i__22735__auto___32797 = (0);
while(true){
if((i__22735__auto___32797 < len__22734__auto___32796)){
args32793.push((arguments[i__22735__auto___32797]));

var G__32798 = (i__22735__auto___32797 + (1));
i__22735__auto___32797 = G__32798;
continue;
} else {
}
break;
}

var G__32795 = args32793.length;
switch (G__32795) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32793.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
