// Compiled by ClojureScript 1.9.293 {}
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.display_name[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.display_name["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.init_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.init_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.should_update[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,next_props,next_state);
} else {
var m__30891__auto____$1 = (om.core.should_update["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,next_props,next_state);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.will_mount[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.will_mount["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.did_mount[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.did_mount["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.will_unmount[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.will_update[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,next_props,next_state);
} else {
var m__30891__auto____$1 = (om.core.will_update["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,next_props,next_state);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.did_update[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__30891__auto____$1 = (om.core.did_update["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,prev_props,prev_state);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.will_receive_props[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,next_props);
} else {
var m__30891__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,next_props);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.render[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core.render["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.render_props[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,props,state);
} else {
var m__30891__auto____$1 = (om.core.render_props["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,props,state);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core.render_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,state);
} else {
var m__30891__auto____$1 = (om.core.render_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,state);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__30891__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,cursor,korks,f,tag);
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
var args41254 = [];
var len__31335__auto___41257 = arguments.length;
var i__31336__auto___41258 = (0);
while(true){
if((i__31336__auto___41258 < len__31335__auto___41257)){
args41254.push((arguments[i__31336__auto___41258]));

var G__41259 = (i__31336__auto___41258 + (1));
i__31336__auto___41258 = G__41259;
continue;
} else {
}
break;
}

var G__41256 = args41254.length;
switch (G__41256) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41254.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._get_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,ks);
} else {
var m__30891__auto____$1 = (om.core._get_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,ks);
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
var args41261 = [];
var len__31335__auto___41264 = arguments.length;
var i__31336__auto___41265 = (0);
while(true){
if((i__31336__auto___41265 < len__31335__auto___41264)){
args41261.push((arguments[i__31336__auto___41265]));

var G__41266 = (i__31336__auto___41265 + (1));
i__31336__auto___41265 = G__41266;
continue;
} else {
}
break;
}

var G__41263 = args41261.length;
switch (G__41263) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41261.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_render_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_render_state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,ks);
} else {
var m__30891__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,ks);
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
var args41268 = [];
var len__31335__auto___41271 = arguments.length;
var i__31336__auto___41272 = (0);
while(true){
if((i__31336__auto___41272 < len__31335__auto___41271)){
args41268.push((arguments[i__31336__auto___41272]));

var G__41273 = (i__31336__auto___41272 + (1));
i__31336__auto___41272 = G__41273;
continue;
} else {
}
break;
}

var G__41270 = args41268.length;
switch (G__41270) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41268.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,val,render);
} else {
var m__30891__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,val,render);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,ks,val,render);
} else {
var m__30891__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,ks,val,render);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_queue[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._get_queue["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,c);
} else {
var m__30891__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,c);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((x == null))?null:x);
var m__30891__auto__ = (om.core._value[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,x);
} else {
var m__30891__auto____$1 = (om.core._value["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,x);
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
var x__30890__auto__ = (((cursor == null))?null:cursor);
var m__30891__auto__ = (om.core._path[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,cursor);
} else {
var m__30891__auto____$1 = (om.core._path["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,cursor);
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
var x__30890__auto__ = (((cursor == null))?null:cursor);
var m__30891__auto__ = (om.core._state[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,cursor);
} else {
var m__30891__auto____$1 = (om.core._state["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,cursor);
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
var args41275 = [];
var len__31335__auto___41278 = arguments.length;
var i__31336__auto___41279 = (0);
while(true){
if((i__31336__auto___41279 < len__31335__auto___41278)){
args41275.push((arguments[i__31336__auto___41279]));

var G__41280 = (i__31336__auto___41279 + (1));
i__31336__auto___41279 = G__41280;
continue;
} else {
}
break;
}

var G__41277 = args41275.length;
switch (G__41277) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41275.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__30890__auto__ = (((value == null))?null:value);
var m__30891__auto__ = (om.core._to_cursor[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,value,state);
} else {
var m__30891__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,value,state);
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
var x__30890__auto__ = (((value == null))?null:value);
var m__30891__auto__ = (om.core._to_cursor[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,value,state,path);
} else {
var m__30891__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,value,state,path);
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
var x__30890__auto__ = (((cursor == null))?null:cursor);
var m__30891__auto__ = (om.core._derive[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,cursor,derived,state,path);
} else {
var m__30891__auto____$1 = (om.core._derive["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,cursor,derived,state,path);
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
var x__30890__auto__ = (((cursor == null))?null:cursor);
var m__30891__auto__ = (om.core._transact_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,cursor,korks,f,tag);
} else {
var m__30891__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,cursor,korks,f,tag);
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
var x__30890__auto__ = (((x == null))?null:x);
var m__30891__auto__ = (om.core._listen_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,x,key,tx_listen);
} else {
var m__30891__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,x,key,tx_listen);
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
var x__30890__auto__ = (((x == null))?null:x);
var m__30891__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,x,key);
} else {
var m__30891__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,x,key);
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
var x__30890__auto__ = (((x == null))?null:x);
var m__30891__auto__ = (om.core._notify_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__30891__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,x,tx_data,root_cursor);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,id,p,val);
} else {
var m__30891__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,id,p,val);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,id,p);
} else {
var m__30891__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,id,p);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,id);
} else {
var m__30891__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,id);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_property[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,id,p);
} else {
var m__30891__auto____$1 = (om.core._get_property["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,id,p);
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
var x__30890__auto__ = (((cursor == null))?null:cursor);
var m__30891__auto__ = (om.core._root_key[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,cursor);
} else {
var m__30891__auto____$1 = (om.core._root_key["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,cursor);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._adapt[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,other);
} else {
var m__30891__auto____$1 = (om.core._adapt["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,other);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,c);
} else {
var m__30891__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,c);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$,c);
} else {
var m__30891__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$,c);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
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
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (om.core._get_deps[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (om.core._get_deps["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$IOmSwap$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$))){
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
var args41286 = [];
var len__31335__auto___41290 = arguments.length;
var i__31336__auto___41291 = (0);
while(true){
if((i__31336__auto___41291 < len__31335__auto___41290)){
args41286.push((arguments[i__31336__auto___41291]));

var G__41292 = (i__31336__auto___41291 + (1));
i__31336__auto___41291 = G__41292;
continue;
} else {
}
break;
}

var G__41288 = args41286.length;
switch (G__41288) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41286.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__41289 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__41289,korks__$1);
} else {
return G__41289;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args41294 = [];
var len__31335__auto___41297 = arguments.length;
var i__31336__auto___41298 = (0);
while(true){
if((i__31336__auto___41298 < len__31335__auto___41297)){
args41294.push((arguments[i__31336__auto___41298]));

var G__41299 = (i__31336__auto___41298 + (1));
i__31336__auto___41298 = G__41299;
continue;
} else {
}
break;
}

var G__41296 = args41294.length;
switch (G__41296) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41294.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
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
var args41301 = [];
var len__31335__auto___41304 = arguments.length;
var i__31336__auto___41305 = (0);
while(true){
if((i__31336__auto___41305 < len__31335__auto___41304)){
args41301.push((arguments[i__31336__auto___41305]));

var G__41306 = (i__31336__auto___41305 + (1));
i__31336__auto___41305 = G__41306;
continue;
} else {
}
break;
}

var G__41303 = args41301.length;
switch (G__41303) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41301.length)].join('')));

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
var G__41309 = state;
(G__41309["__om_prev_state"] = (state["__om_state"]));

(G__41309["__om_state"] = pending_state);

(G__41309["__om_pending_state"] = null);

return G__41309;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args41310 = [];
var len__31335__auto___41313 = arguments.length;
var i__31336__auto___41314 = (0);
while(true){
if((i__31336__auto___41314 < len__31335__auto___41313)){
args41310.push((arguments[i__31336__auto___41314]));

var G__41315 = (i__31336__auto___41314 + (1));
i__31336__auto___41314 = G__41315;
continue;
} else {
}
break;
}

var G__41312 = args41310.length;
switch (G__41312) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41310.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__30227__auto__ = props;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__30227__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
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
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_41339 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__30227__auto__ = (state_41339["__om_prev_state"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return (state_41339["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__41320 = cljs.core.seq.call(null,refs);
var chunk__41321 = null;
var count__41322 = (0);
var i__41323 = (0);
while(true){
if((i__41323 < count__41322)){
var ref = cljs.core._nth.call(null,chunk__41321,i__41323);
om.core.unobserve.call(null,this$,ref);

var G__41340 = seq__41320;
var G__41341 = chunk__41321;
var G__41342 = count__41322;
var G__41343 = (i__41323 + (1));
seq__41320 = G__41340;
chunk__41321 = G__41341;
count__41322 = G__41342;
i__41323 = G__41343;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41320);
if(temp__4657__auto____$1){
var seq__41320__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41320__$1)){
var c__31041__auto__ = cljs.core.chunk_first.call(null,seq__41320__$1);
var G__41344 = cljs.core.chunk_rest.call(null,seq__41320__$1);
var G__41345 = c__31041__auto__;
var G__41346 = cljs.core.count.call(null,c__31041__auto__);
var G__41347 = (0);
seq__41320 = G__41344;
chunk__41321 = G__41345;
count__41322 = G__41346;
i__41323 = G__41347;
continue;
} else {
var ref = cljs.core.first.call(null,seq__41320__$1);
om.core.unobserve.call(null,this$,ref);

var G__41348 = cljs.core.next.call(null,seq__41320__$1);
var G__41349 = null;
var G__41350 = (0);
var G__41351 = (0);
seq__41320 = G__41348;
chunk__41321 = G__41349;
count__41322 = G__41350;
i__41323 = G__41351;
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
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillReceiveProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IShouldUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__30215__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__30215__auto__)){
var and__30215__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__30215__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__30215__auto____$1;
}
} else {
return and__30215__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__30215__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__30215__auto__){
return cljs.core.some.call(null,((function (and__30215__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__41317_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__41317_SHARP_);
});})(and__30215__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__30215__auto__;
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
var _STAR_parent_STAR_41326 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_41327 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_41328 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_41329 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_41330 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRender$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_41330;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_41329;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_41328;

om.core._STAR_state_STAR_ = _STAR_state_STAR_41327;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_41326;
}}),(function (next_props,next_state){
var this$ = this;
var c_41352 = om.core.children.call(null,this$);
if(((!((c_41352 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_41352.om$core$IWillUpdate$)))?true:(((!c_41352.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41352):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41352))){
var state_41353 = this$.state;
om.core.will_update.call(null,c_41352,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__30227__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__30227__auto__ = id;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDisplayName$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_41354 = om.core.children.call(null,this$);
if(((!((c_41354 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_41354.om$core$IWillMount$)))?true:(((!c_41354.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41354):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41354))){
om.core.will_mount.call(null,c_41354);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x41356 = obj;
x41356.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x41356.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x41356){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__30215__auto__ = !((app_state == null));
if(and__30215__auto__){
return render;
} else {
return and__30215__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x41356))
;

x41356.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x41356){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__30215__auto__ = !((app_state == null));
if(and__30215__auto__){
return render;
} else {
return and__30215__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x41356))
;

x41356.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x41356.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x41356){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x41356))
;

x41356.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x41356){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x41356))
;

x41356.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x41356.om$core$IGetState$_get_state$arity$1 = ((function (x41356){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__30227__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return (state["__om_state"]);
}
});})(x41356))
;

x41356.om$core$IGetState$_get_state$arity$2 = ((function (x41356){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x41356))
;

return x41356;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
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
var istate = (function (){var or__30227__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__30227__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_41367 = om.core.children.call(null,this$);
if(((!((c_41367 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_41367.om$core$IWillMount$)))?true:(((!c_41367.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41367):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_41367))){
om.core.will_mount.call(null,c_41367);
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
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__41361 = cljs.core.seq.call(null,refs);
var chunk__41362 = null;
var count__41363 = (0);
var i__41364 = (0);
while(true){
if((i__41364 < count__41363)){
var ref = cljs.core._nth.call(null,chunk__41362,i__41364);
om.core.unobserve.call(null,this$,ref);

var G__41368 = seq__41361;
var G__41369 = chunk__41362;
var G__41370 = count__41363;
var G__41371 = (i__41364 + (1));
seq__41361 = G__41368;
chunk__41362 = G__41369;
count__41363 = G__41370;
i__41364 = G__41371;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41361);
if(temp__4657__auto____$1){
var seq__41361__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41361__$1)){
var c__31041__auto__ = cljs.core.chunk_first.call(null,seq__41361__$1);
var G__41372 = cljs.core.chunk_rest.call(null,seq__41361__$1);
var G__41373 = c__31041__auto__;
var G__41374 = cljs.core.count.call(null,c__31041__auto__);
var G__41375 = (0);
seq__41361 = G__41372;
chunk__41362 = G__41373;
count__41363 = G__41374;
i__41364 = G__41375;
continue;
} else {
var ref = cljs.core.first.call(null,seq__41361__$1);
om.core.unobserve.call(null,this$,ref);

var G__41376 = cljs.core.next.call(null,seq__41361__$1);
var G__41377 = null;
var G__41378 = (0);
var G__41379 = (0);
seq__41361 = G__41376;
chunk__41362 = G__41377;
count__41363 = G__41378;
i__41364 = G__41379;
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
var props_41380 = this$.props;
var c_41381 = om.core.children.call(null,this$);
if(((!((c_41381 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_41381.om$core$IWillUpdate$)))?true:(((!c_41381.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41381):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_41381))){
var state_41382 = this$.state;
om.core.will_update.call(null,c_41381,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
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
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_41383 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__30227__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
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
var x41385 = cljs.core.clj__GT_js.call(null,methods$);
x41385.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x41385.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x41385){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__30215__auto__ = !((gstate == null));
if(and__30215__auto__){
return render;
} else {
return and__30215__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x41385))
;

x41385.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x41385){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x41385))
;

x41385.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x41385.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x41385){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x41385))
;

x41385.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x41385){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x41385))
;

x41385.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x41385.om$core$IGetState$_get_state$arity$1 = ((function (x41385){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__30227__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x41385))
;

x41385.om$core$IGetState$_get_state$arity$2 = ((function (x41385){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x41385))
;

return x41385;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
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

om.core.MapCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

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

om.core.MapCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

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

om.core.MapCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

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
return (function (p__41389){
var vec__41390 = p__41389;
var k = cljs.core.nth.call(null,vec__41390,(0),null);
var v = cljs.core.nth.call(null,vec__41390,(1),null);
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
var G__41393 = null;
var G__41393__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__41393__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__41393 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__41393__2.call(this,self__,k);
case 3:
return G__41393__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41393.cljs$core$IFn$_invoke$arity$2 = G__41393__2;
G__41393.cljs$core$IFn$_invoke$arity$3 = G__41393__3;
return G__41393;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args41388){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41388)));
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

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"om.core/MapCursor");
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

om.core.IndexedCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

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

om.core.IndexedCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

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

om.core.IndexedCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

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
var G__41395 = null;
var G__41395__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__41395__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__41395 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__41395__2.call(this,self__,k);
case 3:
return G__41395__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41395.cljs$core$IFn$_invoke$arity$2 = G__41395__2;
G__41395.cljs$core$IFn$_invoke$arity$3 = G__41395__3;
return G__41395;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args41394){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41394)));
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

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__30833__auto__,writer__30834__auto__,opt__30835__auto__){
return cljs.core._write.call(null,writer__30834__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x41397 = cljs.core.clone.call(null,val);
x41397.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x41397.cljs$core$IDeref$_deref$arity$1 = ((function (x41397){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x41397))
;

x41397.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x41397.om$core$ICursor$_path$arity$1 = ((function (x41397){
return (function (_){
var ___$1 = this;
return path;
});})(x41397))
;

x41397.om$core$ICursor$_state$arity$1 = ((function (x41397){
return (function (_){
var ___$1 = this;
return state;
});})(x41397))
;

x41397.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x41397.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41397){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x41397))
;

x41397.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

x41397.cljs$core$IEquiv$_equiv$arity$2 = ((function (x41397){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x41397))
;

return x41397;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args41398 = [];
var len__31335__auto___41403 = arguments.length;
var i__31336__auto___41404 = (0);
while(true){
if((i__31336__auto___41404 < len__31335__auto___41403)){
args41398.push((arguments[i__31336__auto___41404]));

var G__41405 = (i__31336__auto___41404 + (1));
i__31336__auto___41404 = G__41405;
continue;
} else {
}
break;
}

var G__41400 = args41398.length;
switch (G__41400) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41398.length)].join('')));

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
if(((!((val == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === val.om$core$IToCursor$)))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || ((cljs.core.PROTOCOL_SENTINEL === val.cljs$core$ICloneable$)))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
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
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atom.cljs$core$IDeref$)))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x41410 = cljs.core.clone.call(null,x);
x41410.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x41410.cljs$core$ICloneable$_clone$arity$1 = ((function (x41410){
return (function (this$){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x41410))
;

x41410.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x41410.om$core$IAdapt$_adapt$arity$2 = ((function (x41410){
return (function (this$,other){
var this$__$1 = this;
return om.core.ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x41410))
;

x41410.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x41410.om$core$ICursorDerive$_derive$arity$4 = ((function (x41410){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x41410))
;

x41410.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x41410.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41410){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x41410))
;

return x41410;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IOmRef$))){
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
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x41418 = cljs.core.clone.call(null,cursor);
x41418.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x41418.om$core$ICursorDerive$_derive$arity$4 = ((function (x41418,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x41418,path,storage))
;

x41418.om$core$IOmRef$ = cljs.core.PROTOCOL_SENTINEL;

x41418.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x41418,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x41418,path,storage))
;

x41418.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x41418,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x41418,path,storage))
;

x41418.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x41418,path,storage){
return (function (_){
var ___$1 = this;
var seq__41419 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__41420 = null;
var count__41421 = (0);
var i__41422 = (0);
while(true){
if((i__41422 < count__41421)){
var c = cljs.core._nth.call(null,chunk__41420,i__41422);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__41423 = seq__41419;
var G__41424 = chunk__41420;
var G__41425 = count__41421;
var G__41426 = (i__41422 + (1));
seq__41419 = G__41423;
chunk__41420 = G__41424;
count__41421 = G__41425;
i__41422 = G__41426;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41419);
if(temp__4657__auto__){
var seq__41419__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41419__$1)){
var c__31041__auto__ = cljs.core.chunk_first.call(null,seq__41419__$1);
var G__41427 = cljs.core.chunk_rest.call(null,seq__41419__$1);
var G__41428 = c__31041__auto__;
var G__41429 = cljs.core.count.call(null,c__31041__auto__);
var G__41430 = (0);
seq__41419 = G__41427;
chunk__41420 = G__41428;
count__41421 = G__41429;
i__41422 = G__41430;
continue;
} else {
var c = cljs.core.first.call(null,seq__41419__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__41431 = cljs.core.next.call(null,seq__41419__$1);
var G__41432 = null;
var G__41433 = (0);
var G__41434 = (0);
seq__41419 = G__41431;
chunk__41420 = G__41432;
count__41421 = G__41433;
i__41422 = G__41434;
continue;
}
} else {
return null;
}
}
break;
}
});})(x41418,path,storage))
;

x41418.om$core$IOmRef$_get_deps$arity$1 = ((function (x41418,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x41418,path,storage))
;

x41418.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x41418.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x41418,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x41418,path,storage))
;

return x41418;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__30227__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
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
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
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
var or__30227__auto__ = state.om$render$T;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args41435 = [];
var len__31335__auto___41442 = arguments.length;
var i__31336__auto___41443 = (0);
while(true){
if((i__31336__auto___41443 < len__31335__auto___41442)){
args41435.push((arguments[i__31336__auto___41443]));

var G__41444 = (i__31336__auto___41443 + (1));
i__31336__auto___41443 = G__41444;
continue;
} else {
}
break;
}

var G__41437 = args41435.length;
switch (G__41437) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41435.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__41438_41446 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__41439_41447 = null;
var count__41440_41448 = (0);
var i__41441_41449 = (0);
while(true){
if((i__41441_41449 < count__41440_41448)){
var f_41450 = cljs.core._nth.call(null,chunk__41439_41447,i__41441_41449);
f_41450.call(null);

var G__41451 = seq__41438_41446;
var G__41452 = chunk__41439_41447;
var G__41453 = count__41440_41448;
var G__41454 = (i__41441_41449 + (1));
seq__41438_41446 = G__41451;
chunk__41439_41447 = G__41452;
count__41440_41448 = G__41453;
i__41441_41449 = G__41454;
continue;
} else {
var temp__4657__auto___41455 = cljs.core.seq.call(null,seq__41438_41446);
if(temp__4657__auto___41455){
var seq__41438_41456__$1 = temp__4657__auto___41455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41438_41456__$1)){
var c__31041__auto___41457 = cljs.core.chunk_first.call(null,seq__41438_41456__$1);
var G__41458 = cljs.core.chunk_rest.call(null,seq__41438_41456__$1);
var G__41459 = c__31041__auto___41457;
var G__41460 = cljs.core.count.call(null,c__31041__auto___41457);
var G__41461 = (0);
seq__41438_41446 = G__41458;
chunk__41439_41447 = G__41459;
count__41440_41448 = G__41460;
i__41441_41449 = G__41461;
continue;
} else {
var f_41462 = cljs.core.first.call(null,seq__41438_41456__$1);
f_41462.call(null);

var G__41463 = cljs.core.next.call(null,seq__41438_41456__$1);
var G__41464 = null;
var G__41465 = (0);
var G__41466 = (0);
seq__41438_41446 = G__41463;
chunk__41439_41447 = G__41464;
count__41440_41448 = G__41465;
i__41441_41449 = G__41466;
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
if((function (){var or__30227__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRender$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__30227__auto__){
return or__30227__auto__;
} else {
var or__30227__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderProps$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__30227__auto____$1){
return or__30227__auto____$1;
} else {
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderState$))){
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args41477 = [];
var len__31335__auto___41480 = arguments.length;
var i__31336__auto___41481 = (0);
while(true){
if((i__31336__auto___41481 < len__31335__auto___41480)){
args41477.push((arguments[i__31336__auto___41481]));

var G__41482 = (i__31336__auto___41481 + (1));
i__31336__auto___41481 = G__41482;
continue;
} else {
}
break;
}

var G__41479 = args41477.length;
switch (G__41479) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41477.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_41484 = (function (){var or__30227__auto__ = descriptor;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
var or__30227__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__30227__auto____$1)){
return or__30227__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_41484 === goog.object.get(f,"om$tag"))))){
var factory_41485 = React.createFactory(React.createClass(rdesc_41484));
goog.object.set(f,"om$descriptor",factory_41485);

goog.object.set(f,"om$tag",rdesc_41484);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args41486 = [];
var len__31335__auto___41489 = arguments.length;
var i__31336__auto___41490 = (0);
while(true){
if((i__31336__auto___41490 < len__31335__auto___41489)){
args41486.push((arguments[i__31336__auto___41490]));

var G__41491 = (i__31336__auto___41490 + (1));
i__31336__auto___41490 = G__41491;
continue;
} else {
}
break;
}

var G__41488 = args41486.length;
switch (G__41488) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41486.length)].join('')));

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
var args41493 = [];
var len__31335__auto___41498 = arguments.length;
var i__31336__auto___41499 = (0);
while(true){
if((i__31336__auto___41499 < len__31335__auto___41498)){
args41493.push((arguments[i__31336__auto___41499]));

var G__41500 = (i__31336__auto___41499 + (1));
i__31336__auto___41499 = G__41500;
continue;
} else {
}
break;
}

var G__41495 = args41493.length;
switch (G__41495) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41493.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__41496 = m;
var map__41496__$1 = ((((!((map__41496 == null)))?((((map__41496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41496):map__41496);
var key = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
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
var shared = (function (){var or__30227__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__41496,map__41496__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__41496,map__41496__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__41496,map__41496__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__41496,map__41496__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__30227__auto__ = rkey;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

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
var args41502 = [];
var len__31335__auto___41505 = arguments.length;
var i__31336__auto___41506 = (0);
while(true){
if((i__31336__auto___41506 < len__31335__auto___41505)){
args41502.push((arguments[i__31336__auto___41506]));

var G__41507 = (i__31336__auto___41506 + (1));
i__31336__auto___41506 = G__41507;
continue;
} else {
}
break;
}

var G__41504 = args41502.length;
switch (G__41504) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41502.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
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
var args41509 = [];
var len__31335__auto___41512 = arguments.length;
var i__31336__auto___41513 = (0);
while(true){
if((i__31336__auto___41513 < len__31335__auto___41512)){
args41509.push((arguments[i__31336__auto___41513]));

var G__41514 = (i__31336__auto___41513 + (1));
i__31336__auto___41513 = G__41514;
continue;
} else {
}
break;
}

var G__41511 = args41509.length;
switch (G__41511) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41509.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$INotify$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_41540 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_41541 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_41542 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x41529_41543 = state;
x41529_41543.om$core$IRootProperties$ = cljs.core.PROTOCOL_SENTINEL;

x41529_41543.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41540,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41540,cljs.core.dissoc,id,k);
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_41540,cljs.core.dissoc,id);
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRootProperties$_get_property$arity$3 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_41540),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$INotify$ = cljs.core.PROTOCOL_SENTINEL;

x41529_41543.om$core$INotify$_listen_BANG_$arity$3 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_41541,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_41541,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$INotify$_notify_BANG_$arity$3 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__41530_41544 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_41541));
var chunk__41531_41545 = null;
var count__41532_41546 = (0);
var i__41533_41547 = (0);
while(true){
if((i__41533_41547 < count__41532_41546)){
var vec__41534_41548 = cljs.core._nth.call(null,chunk__41531_41545,i__41533_41547);
var __41549 = cljs.core.nth.call(null,vec__41534_41548,(0),null);
var f_41550 = cljs.core.nth.call(null,vec__41534_41548,(1),null);
f_41550.call(null,tx_data,root_cursor);

var G__41551 = seq__41530_41544;
var G__41552 = chunk__41531_41545;
var G__41553 = count__41532_41546;
var G__41554 = (i__41533_41547 + (1));
seq__41530_41544 = G__41551;
chunk__41531_41545 = G__41552;
count__41532_41546 = G__41553;
i__41533_41547 = G__41554;
continue;
} else {
var temp__4657__auto___41555 = cljs.core.seq.call(null,seq__41530_41544);
if(temp__4657__auto___41555){
var seq__41530_41556__$1 = temp__4657__auto___41555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41530_41556__$1)){
var c__31041__auto___41557 = cljs.core.chunk_first.call(null,seq__41530_41556__$1);
var G__41558 = cljs.core.chunk_rest.call(null,seq__41530_41556__$1);
var G__41559 = c__31041__auto___41557;
var G__41560 = cljs.core.count.call(null,c__31041__auto___41557);
var G__41561 = (0);
seq__41530_41544 = G__41558;
chunk__41531_41545 = G__41559;
count__41532_41546 = G__41560;
i__41533_41547 = G__41561;
continue;
} else {
var vec__41537_41562 = cljs.core.first.call(null,seq__41530_41556__$1);
var __41563 = cljs.core.nth.call(null,vec__41537_41562,(0),null);
var f_41564 = cljs.core.nth.call(null,vec__41537_41562,(1),null);
f_41564.call(null,tx_data,root_cursor);

var G__41565 = cljs.core.next.call(null,seq__41530_41556__$1);
var G__41566 = null;
var G__41567 = (0);
var G__41568 = (0);
seq__41530_41544 = G__41565;
chunk__41531_41545 = G__41566;
count__41532_41546 = G__41567;
i__41533_41547 = G__41568;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRenderQueue$ = cljs.core.PROTOCOL_SENTINEL;

x41529_41543.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_41542);
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_41542),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_41542,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

x41529_41543.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x41529_41543,properties_41540,listeners_41541,render_queue_41542){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_41542,cljs.core.empty);
});})(x41529_41543,properties_41540,listeners_41541,render_queue_41542))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x41570 = cljs.core.clone.call(null,cursor);
x41570.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x41570.cljs$core$ICloneable$_clone$arity$1 = ((function (x41570){
return (function (this$){
var this$__$1 = this;
return om.core.tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x41570))
;

x41570.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x41570.om$core$IAdapt$_adapt$arity$2 = ((function (x41570){
return (function (this$,other){
var this$__$1 = this;
return om.core.tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x41570))
;

x41570.om$core$IRootKey$ = cljs.core.PROTOCOL_SENTINEL;

x41570.om$core$IRootKey$_root_key$arity$1 = ((function (x41570){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x41570))
;

return x41570;
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
om.core.root = (function om$core$root(f,value,p__41571){
var map__41659 = p__41571;
var map__41659__$1 = ((((!((map__41659 == null)))?((((map__41659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41659):map__41659);
var options = map__41659__$1;
var target = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__41659__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__41746 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__41746,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__41746,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$)))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__30227__auto__ = adapt;
if(cljs.core.truth_(or__30227__auto__)){
return or__30227__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_41747 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_41704 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_41705 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_41706 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_41707 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_41707;

om.core._STAR_state_STAR_ = _STAR_state_STAR_41706;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_41705;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_41704;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_41747);
} else {
}
}

var queue_41748 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_41748)){
} else {
var seq__41708_41749 = cljs.core.seq.call(null,queue_41748);
var chunk__41709_41750 = null;
var count__41710_41751 = (0);
var i__41711_41752 = (0);
while(true){
if((i__41711_41752 < count__41710_41751)){
var c_41753 = cljs.core._nth.call(null,chunk__41709_41750,i__41711_41752);
if(cljs.core.truth_(c_41753.isMounted())){
var temp__4657__auto___41754 = (c_41753.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___41754)){
var next_props_41755 = temp__4657__auto___41754;
(c_41753.props["__om_cursor"] = next_props_41755);

(c_41753.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__30227__auto__ = !((function (){var G__41713 = om.core.children.call(null,c_41753);
if(!((G__41713 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__41713.om$core$ICheckState$))){
return true;
} else {
if((!G__41713.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41713);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41713);
}
})());
if(or__30227__auto__){
return or__30227__auto__;
} else {
return c_41753.shouldComponentUpdate(c_41753.props,c_41753.state);
}
})())){
c_41753.forceUpdate();
} else {
}
} else {
}

var G__41756 = seq__41708_41749;
var G__41757 = chunk__41709_41750;
var G__41758 = count__41710_41751;
var G__41759 = (i__41711_41752 + (1));
seq__41708_41749 = G__41756;
chunk__41709_41750 = G__41757;
count__41710_41751 = G__41758;
i__41711_41752 = G__41759;
continue;
} else {
var temp__4657__auto___41760 = cljs.core.seq.call(null,seq__41708_41749);
if(temp__4657__auto___41760){
var seq__41708_41761__$1 = temp__4657__auto___41760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41708_41761__$1)){
var c__31041__auto___41762 = cljs.core.chunk_first.call(null,seq__41708_41761__$1);
var G__41763 = cljs.core.chunk_rest.call(null,seq__41708_41761__$1);
var G__41764 = c__31041__auto___41762;
var G__41765 = cljs.core.count.call(null,c__31041__auto___41762);
var G__41766 = (0);
seq__41708_41749 = G__41763;
chunk__41709_41750 = G__41764;
count__41710_41751 = G__41765;
i__41711_41752 = G__41766;
continue;
} else {
var c_41767 = cljs.core.first.call(null,seq__41708_41761__$1);
if(cljs.core.truth_(c_41767.isMounted())){
var temp__4657__auto___41768__$1 = (c_41767.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___41768__$1)){
var next_props_41769 = temp__4657__auto___41768__$1;
(c_41767.props["__om_cursor"] = next_props_41769);

(c_41767.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__30227__auto__ = !((function (){var G__41715 = om.core.children.call(null,c_41767);
if(!((G__41715 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__41715.om$core$ICheckState$))){
return true;
} else {
if((!G__41715.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41715);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__41715);
}
})());
if(or__30227__auto__){
return or__30227__auto__;
} else {
return c_41767.shouldComponentUpdate(c_41767.props,c_41767.state);
}
})())){
c_41767.forceUpdate();
} else {
}
} else {
}

var G__41770 = cljs.core.next.call(null,seq__41708_41761__$1);
var G__41771 = null;
var G__41772 = (0);
var G__41773 = (0);
seq__41708_41749 = G__41770;
chunk__41709_41750 = G__41771;
count__41710_41751 = G__41772;
i__41711_41752 = G__41773;
continue;
}
} else {
}
}
break;
}
}

var _refs_41774 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_41774)){
} else {
var seq__41716_41775 = cljs.core.seq.call(null,_refs_41774);
var chunk__41717_41776 = null;
var count__41718_41777 = (0);
var i__41719_41778 = (0);
while(true){
if((i__41719_41778 < count__41718_41777)){
var vec__41720_41779 = cljs.core._nth.call(null,chunk__41717_41776,i__41719_41778);
var path_41780__$1 = cljs.core.nth.call(null,vec__41720_41779,(0),null);
var cs_41781 = cljs.core.nth.call(null,vec__41720_41779,(1),null);
var cs_41782__$1 = cljs.core.deref.call(null,cs_41781);
var seq__41723_41783 = cljs.core.seq.call(null,cs_41782__$1);
var chunk__41724_41784 = null;
var count__41725_41785 = (0);
var i__41726_41786 = (0);
while(true){
if((i__41726_41786 < count__41725_41785)){
var vec__41727_41787 = cljs.core._nth.call(null,chunk__41724_41784,i__41726_41786);
var id_41788 = cljs.core.nth.call(null,vec__41727_41787,(0),null);
var c_41789 = cljs.core.nth.call(null,vec__41727_41787,(1),null);
if(cljs.core.truth_(c_41789.shouldComponentUpdate(c_41789.props,c_41789.state))){
c_41789.forceUpdate();
} else {
}

var G__41790 = seq__41723_41783;
var G__41791 = chunk__41724_41784;
var G__41792 = count__41725_41785;
var G__41793 = (i__41726_41786 + (1));
seq__41723_41783 = G__41790;
chunk__41724_41784 = G__41791;
count__41725_41785 = G__41792;
i__41726_41786 = G__41793;
continue;
} else {
var temp__4657__auto___41794 = cljs.core.seq.call(null,seq__41723_41783);
if(temp__4657__auto___41794){
var seq__41723_41795__$1 = temp__4657__auto___41794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41723_41795__$1)){
var c__31041__auto___41796 = cljs.core.chunk_first.call(null,seq__41723_41795__$1);
var G__41797 = cljs.core.chunk_rest.call(null,seq__41723_41795__$1);
var G__41798 = c__31041__auto___41796;
var G__41799 = cljs.core.count.call(null,c__31041__auto___41796);
var G__41800 = (0);
seq__41723_41783 = G__41797;
chunk__41724_41784 = G__41798;
count__41725_41785 = G__41799;
i__41726_41786 = G__41800;
continue;
} else {
var vec__41730_41801 = cljs.core.first.call(null,seq__41723_41795__$1);
var id_41802 = cljs.core.nth.call(null,vec__41730_41801,(0),null);
var c_41803 = cljs.core.nth.call(null,vec__41730_41801,(1),null);
if(cljs.core.truth_(c_41803.shouldComponentUpdate(c_41803.props,c_41803.state))){
c_41803.forceUpdate();
} else {
}

var G__41804 = cljs.core.next.call(null,seq__41723_41795__$1);
var G__41805 = null;
var G__41806 = (0);
var G__41807 = (0);
seq__41723_41783 = G__41804;
chunk__41724_41784 = G__41805;
count__41725_41785 = G__41806;
i__41726_41786 = G__41807;
continue;
}
} else {
}
}
break;
}

var G__41808 = seq__41716_41775;
var G__41809 = chunk__41717_41776;
var G__41810 = count__41718_41777;
var G__41811 = (i__41719_41778 + (1));
seq__41716_41775 = G__41808;
chunk__41717_41776 = G__41809;
count__41718_41777 = G__41810;
i__41719_41778 = G__41811;
continue;
} else {
var temp__4657__auto___41812 = cljs.core.seq.call(null,seq__41716_41775);
if(temp__4657__auto___41812){
var seq__41716_41813__$1 = temp__4657__auto___41812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41716_41813__$1)){
var c__31041__auto___41814 = cljs.core.chunk_first.call(null,seq__41716_41813__$1);
var G__41815 = cljs.core.chunk_rest.call(null,seq__41716_41813__$1);
var G__41816 = c__31041__auto___41814;
var G__41817 = cljs.core.count.call(null,c__31041__auto___41814);
var G__41818 = (0);
seq__41716_41775 = G__41815;
chunk__41717_41776 = G__41816;
count__41718_41777 = G__41817;
i__41719_41778 = G__41818;
continue;
} else {
var vec__41733_41819 = cljs.core.first.call(null,seq__41716_41813__$1);
var path_41820__$1 = cljs.core.nth.call(null,vec__41733_41819,(0),null);
var cs_41821 = cljs.core.nth.call(null,vec__41733_41819,(1),null);
var cs_41822__$1 = cljs.core.deref.call(null,cs_41821);
var seq__41736_41823 = cljs.core.seq.call(null,cs_41822__$1);
var chunk__41737_41824 = null;
var count__41738_41825 = (0);
var i__41739_41826 = (0);
while(true){
if((i__41739_41826 < count__41738_41825)){
var vec__41740_41827 = cljs.core._nth.call(null,chunk__41737_41824,i__41739_41826);
var id_41828 = cljs.core.nth.call(null,vec__41740_41827,(0),null);
var c_41829 = cljs.core.nth.call(null,vec__41740_41827,(1),null);
if(cljs.core.truth_(c_41829.shouldComponentUpdate(c_41829.props,c_41829.state))){
c_41829.forceUpdate();
} else {
}

var G__41830 = seq__41736_41823;
var G__41831 = chunk__41737_41824;
var G__41832 = count__41738_41825;
var G__41833 = (i__41739_41826 + (1));
seq__41736_41823 = G__41830;
chunk__41737_41824 = G__41831;
count__41738_41825 = G__41832;
i__41739_41826 = G__41833;
continue;
} else {
var temp__4657__auto___41834__$1 = cljs.core.seq.call(null,seq__41736_41823);
if(temp__4657__auto___41834__$1){
var seq__41736_41835__$1 = temp__4657__auto___41834__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41736_41835__$1)){
var c__31041__auto___41836 = cljs.core.chunk_first.call(null,seq__41736_41835__$1);
var G__41837 = cljs.core.chunk_rest.call(null,seq__41736_41835__$1);
var G__41838 = c__31041__auto___41836;
var G__41839 = cljs.core.count.call(null,c__31041__auto___41836);
var G__41840 = (0);
seq__41736_41823 = G__41837;
chunk__41737_41824 = G__41838;
count__41738_41825 = G__41839;
i__41739_41826 = G__41840;
continue;
} else {
var vec__41743_41841 = cljs.core.first.call(null,seq__41736_41835__$1);
var id_41842 = cljs.core.nth.call(null,vec__41743_41841,(0),null);
var c_41843 = cljs.core.nth.call(null,vec__41743_41841,(1),null);
if(cljs.core.truth_(c_41843.shouldComponentUpdate(c_41843.props,c_41843.state))){
c_41843.forceUpdate();
} else {
}

var G__41844 = cljs.core.next.call(null,seq__41736_41835__$1);
var G__41845 = null;
var G__41846 = (0);
var G__41847 = (0);
seq__41736_41823 = G__41844;
chunk__41737_41824 = G__41845;
count__41738_41825 = G__41846;
i__41739_41826 = G__41847;
continue;
}
} else {
}
}
break;
}

var G__41848 = cljs.core.next.call(null,seq__41716_41813__$1);
var G__41849 = null;
var G__41850 = (0);
var G__41851 = (0);
seq__41716_41775 = G__41848;
chunk__41717_41776 = G__41849;
count__41718_41777 = G__41850;
i__41719_41778 = G__41851;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
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
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__41659,map__41659__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ITransact$))){
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
var args41854 = [];
var len__31335__auto___41857 = arguments.length;
var i__31336__auto___41858 = (0);
while(true){
if((i__31336__auto___41858 < len__31335__auto___41857)){
args41854.push((arguments[i__31336__auto___41858]));

var G__41859 = (i__31336__auto___41858 + (1));
i__31336__auto___41858 = G__41859;
continue;
} else {
}
break;
}

var G__41856 = args41854.length;
switch (G__41856) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41854.length)].join('')));

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
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
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
var args41861 = [];
var len__31335__auto___41864 = arguments.length;
var i__31336__auto___41865 = (0);
while(true){
if((i__31336__auto___41865 < len__31335__auto___41864)){
args41861.push((arguments[i__31336__auto___41865]));

var G__41866 = (i__31336__auto___41865 + (1));
i__31336__auto___41865 = G__41866;
continue;
} else {
}
break;
}

var G__41863 = args41861.length;
switch (G__41863) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41861.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
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
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === cursor.om$core$IRootKey$)))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
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
var args41870 = [];
var len__31335__auto___41874 = arguments.length;
var i__31336__auto___41875 = (0);
while(true){
if((i__31336__auto___41875 < len__31335__auto___41874)){
args41870.push((arguments[i__31336__auto___41875]));

var G__41876 = (i__31336__auto___41875 + (1));
i__31336__auto___41875 = G__41876;
continue;
} else {
}
break;
}

var G__41872 = args41870.length;
switch (G__41872) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41870.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__41873 = owner.refs;
var G__41873__$1 = (((G__41873 == null))?null:(G__41873[name]));
if((G__41873__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__41873__$1);
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
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__41879 = owner.refs;
if((G__41879 == null)){
return null;
} else {
return goog.object.get(G__41879,name);
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
var args41880 = [];
var len__31335__auto___41883 = arguments.length;
var i__31336__auto___41884 = (0);
while(true){
if((i__31336__auto___41884 < len__31335__auto___41883)){
args41880.push((arguments[i__31336__auto___41884]));

var G__41885 = (i__31336__auto___41884 + (1));
i__31336__auto___41884 = G__41885;
continue;
} else {
}
break;
}

var G__41882 = args41880.length;
switch (G__41882) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41880.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args41887 = [];
var len__31335__auto___41890 = arguments.length;
var i__31336__auto___41891 = (0);
while(true){
if((i__31336__auto___41891 < len__31335__auto___41890)){
args41887.push((arguments[i__31336__auto___41891]));

var G__41892 = (i__31336__auto___41891 + (1));
i__31336__auto___41891 = G__41892;
continue;
} else {
}
break;
}

var G__41889 = args41887.length;
switch (G__41889) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41887.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
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
var args41894 = [];
var len__31335__auto___41897 = arguments.length;
var i__31336__auto___41898 = (0);
while(true){
if((i__31336__auto___41898 < len__31335__auto___41897)){
args41894.push((arguments[i__31336__auto___41898]));

var G__41899 = (i__31336__auto___41898 + (1));
i__31336__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var G__41896 = args41894.length;
switch (G__41896) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41894.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args41901 = [];
var len__31335__auto___41904 = arguments.length;
var i__31336__auto___41905 = (0);
while(true){
if((i__31336__auto___41905 < len__31335__auto___41904)){
args41901.push((arguments[i__31336__auto___41905]));

var G__41906 = (i__31336__auto___41905 + (1));
i__31336__auto___41905 = G__41906;
continue;
} else {
}
break;
}

var G__41903 = args41901.length;
switch (G__41903) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41901.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
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
throw (new Error("Assert failed: (component? owner)"));
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
var args41908 = [];
var len__31335__auto___41911 = arguments.length;
var i__31336__auto___41912 = (0);
while(true){
if((i__31336__auto___41912 < len__31335__auto___41911)){
args41908.push((arguments[i__31336__auto___41912]));

var G__41913 = (i__31336__auto___41912 + (1));
i__31336__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var G__41910 = args41908.length;
switch (G__41910) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41908.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

