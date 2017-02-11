// Compiled by ClojureScript 1.9.293 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__37108_SHARP_,p2__37107_SHARP_){
return p2__37107_SHARP_.call(null,p1__37108_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__37110_SHARP_,p2__37109_SHARP_){
return p2__37109_SHARP_.call(null,old_state,p1__37110_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__30096__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__37111_SHARP_){
return p1__37111_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__37116 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__37116,(0),null);
var next_state = cljs.core.nth.call(null,vec__37116,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__37112_SHARP_){
return p1__37112_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__37119__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__37119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37120__i = 0, G__37120__a = new Array(arguments.length -  0);
while (G__37120__i < G__37120__a.length) {G__37120__a[G__37120__i] = arguments[G__37120__i + 0]; ++G__37120__i;}
  args = new cljs.core.IndexedSeq(G__37120__a,0);
} 
return G__37119__delegate.call(this,args);};
G__37119.cljs$lang$maxFixedArity = 0;
G__37119.cljs$lang$applyTo = (function (arglist__37121){
var args = cljs.core.seq(arglist__37121);
return G__37119__delegate(args);
});
G__37119.cljs$core$IFn$_invoke$arity$variadic = G__37119__delegate;
return G__37119;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__37122__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__37122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37123__i = 0, G__37123__a = new Array(arguments.length -  0);
while (G__37123__i < G__37123__a.length) {G__37123__a[G__37123__i] = arguments[G__37123__i + 0]; ++G__37123__i;}
  args = new cljs.core.IndexedSeq(G__37123__a,0);
} 
return G__37122__delegate.call(this,args);};
G__37122.cljs$lang$maxFixedArity = 0;
G__37122.cljs$lang$applyTo = (function (arglist__37124){
var args = cljs.core.seq(arglist__37124);
return G__37122__delegate(args);
});
G__37122.cljs$core$IFn$_invoke$arity$variadic = G__37122__delegate;
return G__37122;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__37125__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__37125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37126__i = 0, G__37126__a = new Array(arguments.length -  0);
while (G__37126__i < G__37126__a.length) {G__37126__a[G__37126__i] = arguments[G__37126__i + 0]; ++G__37126__i;}
  args = new cljs.core.IndexedSeq(G__37126__a,0);
} 
return G__37125__delegate.call(this,args);};
G__37125.cljs$lang$maxFixedArity = 0;
G__37125.cljs$lang$applyTo = (function (arglist__37127){
var args = cljs.core.seq(arglist__37127);
return G__37125__delegate(args);
});
G__37125.cljs$core$IFn$_invoke$arity$variadic = G__37125__delegate;
return G__37125;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__30096__auto__ = (function (){var and__30084__auto__ = typeof window !== 'undefined';
if(and__30084__auto__){
var or__30096__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
var or__30096__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30096__auto____$2)){
return or__30096__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30084__auto__;
}
})();
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return ((function (or__30096__auto__){
return (function (p1__37128_SHARP_){
return setTimeout(p1__37128_SHARP_,(16));
});
;})(or__30096__auto__))
}
})();
rum.core.batch = (function (){var or__30096__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
var or__30096__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30096__auto____$1)){
return or__30096__auto____$1;
} else {
return ((function (or__30096__auto____$1,or__30096__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__30096__auto____$1,or__30096__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__37135 = cljs.core.seq.call(null,queue);
var chunk__37137 = null;
var count__37138 = (0);
var i__37139 = (0);
while(true){
if((i__37139 < count__37138)){
var comp = cljs.core._nth.call(null,chunk__37137,i__37139);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__37141 = seq__37135;
var G__37142 = chunk__37137;
var G__37143 = count__37138;
var G__37144 = (i__37139 + (1));
seq__37135 = G__37141;
chunk__37137 = G__37142;
count__37138 = G__37143;
i__37139 = G__37144;
continue;
} else {
var G__37145 = seq__37135;
var G__37146 = chunk__37137;
var G__37147 = count__37138;
var G__37148 = (i__37139 + (1));
seq__37135 = G__37145;
chunk__37137 = G__37146;
count__37138 = G__37147;
i__37139 = G__37148;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37135);
if(temp__4657__auto__){
var seq__37135__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37135__$1)){
var c__30910__auto__ = cljs.core.chunk_first.call(null,seq__37135__$1);
var G__37149 = cljs.core.chunk_rest.call(null,seq__37135__$1);
var G__37150 = c__30910__auto__;
var G__37151 = cljs.core.count.call(null,c__30910__auto__);
var G__37152 = (0);
seq__37135 = G__37149;
chunk__37137 = G__37150;
count__37138 = G__37151;
i__37139 = G__37152;
continue;
} else {
var comp = cljs.core.first.call(null,seq__37135__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__37153 = cljs.core.next.call(null,seq__37135__$1);
var G__37154 = null;
var G__37155 = (0);
var G__37156 = (0);
seq__37135 = G__37153;
chunk__37137 = G__37154;
count__37138 = G__37155;
i__37139 = G__37156;
continue;
} else {
var G__37157 = cljs.core.next.call(null,seq__37135__$1);
var G__37158 = null;
var G__37159 = (0);
var G__37160 = (0);
seq__37135 = G__37157;
chunk__37137 = G__37158;
count__37138 = G__37159;
i__37139 = G__37160;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args37161 = [];
var len__31204__auto___37164 = arguments.length;
var i__31205__auto___37165 = (0);
while(true){
if((i__31205__auto___37165 < len__31204__auto___37164)){
args37161.push((arguments[i__31205__auto___37165]));

var G__37166 = (i__31205__auto___37165 + (1));
i__31205__auto___37165 = G__37166;
continue;
} else {
}
break;
}

var G__37163 = args37161.length;
switch (G__37163) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37161.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_37168 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__37169 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__37169,(0),null);
var next_state = cljs.core.nth.call(null,vec__37169,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37172_37184 = cljs.core.seq.call(null,old_reactions);
var chunk__37173_37185 = null;
var count__37174_37186 = (0);
var i__37175_37187 = (0);
while(true){
if((i__37175_37187 < count__37174_37186)){
var ref_37188 = cljs.core._nth.call(null,chunk__37173_37185,i__37175_37187);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37188)){
} else {
cljs.core.remove_watch.call(null,ref_37188,key);
}

var G__37189 = seq__37172_37184;
var G__37190 = chunk__37173_37185;
var G__37191 = count__37174_37186;
var G__37192 = (i__37175_37187 + (1));
seq__37172_37184 = G__37189;
chunk__37173_37185 = G__37190;
count__37174_37186 = G__37191;
i__37175_37187 = G__37192;
continue;
} else {
var temp__4657__auto___37193 = cljs.core.seq.call(null,seq__37172_37184);
if(temp__4657__auto___37193){
var seq__37172_37194__$1 = temp__4657__auto___37193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37172_37194__$1)){
var c__30910__auto___37195 = cljs.core.chunk_first.call(null,seq__37172_37194__$1);
var G__37196 = cljs.core.chunk_rest.call(null,seq__37172_37194__$1);
var G__37197 = c__30910__auto___37195;
var G__37198 = cljs.core.count.call(null,c__30910__auto___37195);
var G__37199 = (0);
seq__37172_37184 = G__37196;
chunk__37173_37185 = G__37197;
count__37174_37186 = G__37198;
i__37175_37187 = G__37199;
continue;
} else {
var ref_37200 = cljs.core.first.call(null,seq__37172_37194__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37200)){
} else {
cljs.core.remove_watch.call(null,ref_37200,key);
}

var G__37201 = cljs.core.next.call(null,seq__37172_37194__$1);
var G__37202 = null;
var G__37203 = (0);
var G__37204 = (0);
seq__37172_37184 = G__37201;
chunk__37173_37185 = G__37202;
count__37174_37186 = G__37203;
i__37175_37187 = G__37204;
continue;
}
} else {
}
}
break;
}

var seq__37176_37205 = cljs.core.seq.call(null,new_reactions);
var chunk__37177_37206 = null;
var count__37178_37207 = (0);
var i__37179_37208 = (0);
while(true){
if((i__37179_37208 < count__37178_37207)){
var ref_37209 = cljs.core._nth.call(null,chunk__37177_37206,i__37179_37208);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37209)){
} else {
cljs.core.add_watch.call(null,ref_37209,key,((function (seq__37176_37205,chunk__37177_37206,count__37178_37207,i__37179_37208,ref_37209,comp,old_reactions,vec__37169,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37168){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37176_37205,chunk__37177_37206,count__37178_37207,i__37179_37208,ref_37209,comp,old_reactions,vec__37169,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37168))
);
}

var G__37210 = seq__37176_37205;
var G__37211 = chunk__37177_37206;
var G__37212 = count__37178_37207;
var G__37213 = (i__37179_37208 + (1));
seq__37176_37205 = G__37210;
chunk__37177_37206 = G__37211;
count__37178_37207 = G__37212;
i__37179_37208 = G__37213;
continue;
} else {
var temp__4657__auto___37214 = cljs.core.seq.call(null,seq__37176_37205);
if(temp__4657__auto___37214){
var seq__37176_37215__$1 = temp__4657__auto___37214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37176_37215__$1)){
var c__30910__auto___37216 = cljs.core.chunk_first.call(null,seq__37176_37215__$1);
var G__37217 = cljs.core.chunk_rest.call(null,seq__37176_37215__$1);
var G__37218 = c__30910__auto___37216;
var G__37219 = cljs.core.count.call(null,c__30910__auto___37216);
var G__37220 = (0);
seq__37176_37205 = G__37217;
chunk__37177_37206 = G__37218;
count__37178_37207 = G__37219;
i__37179_37208 = G__37220;
continue;
} else {
var ref_37221 = cljs.core.first.call(null,seq__37176_37215__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37221)){
} else {
cljs.core.add_watch.call(null,ref_37221,key,((function (seq__37176_37205,chunk__37177_37206,count__37178_37207,i__37179_37208,ref_37221,seq__37176_37215__$1,temp__4657__auto___37214,comp,old_reactions,vec__37169,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37168){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37176_37205,chunk__37177_37206,count__37178_37207,i__37179_37208,ref_37221,seq__37176_37215__$1,temp__4657__auto___37214,comp,old_reactions,vec__37169,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37168))
);
}

var G__37222 = cljs.core.next.call(null,seq__37176_37215__$1);
var G__37223 = null;
var G__37224 = (0);
var G__37225 = (0);
seq__37176_37205 = G__37222;
chunk__37177_37206 = G__37223;
count__37178_37207 = G__37224;
i__37179_37208 = G__37225;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_37168;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_37226 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37180_37227 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__37181_37228 = null;
var count__37182_37229 = (0);
var i__37183_37230 = (0);
while(true){
if((i__37183_37230 < count__37182_37229)){
var ref_37231 = cljs.core._nth.call(null,chunk__37181_37228,i__37183_37230);
cljs.core.remove_watch.call(null,ref_37231,key_37226);

var G__37232 = seq__37180_37227;
var G__37233 = chunk__37181_37228;
var G__37234 = count__37182_37229;
var G__37235 = (i__37183_37230 + (1));
seq__37180_37227 = G__37232;
chunk__37181_37228 = G__37233;
count__37182_37229 = G__37234;
i__37183_37230 = G__37235;
continue;
} else {
var temp__4657__auto___37236 = cljs.core.seq.call(null,seq__37180_37227);
if(temp__4657__auto___37236){
var seq__37180_37237__$1 = temp__4657__auto___37236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37180_37237__$1)){
var c__30910__auto___37238 = cljs.core.chunk_first.call(null,seq__37180_37237__$1);
var G__37239 = cljs.core.chunk_rest.call(null,seq__37180_37237__$1);
var G__37240 = c__30910__auto___37238;
var G__37241 = cljs.core.count.call(null,c__30910__auto___37238);
var G__37242 = (0);
seq__37180_37227 = G__37239;
chunk__37181_37228 = G__37240;
count__37182_37229 = G__37241;
i__37183_37230 = G__37242;
continue;
} else {
var ref_37243 = cljs.core.first.call(null,seq__37180_37237__$1);
cljs.core.remove_watch.call(null,ref_37243,key_37226);

var G__37244 = cljs.core.next.call(null,seq__37180_37237__$1);
var G__37245 = null;
var G__37246 = (0);
var G__37247 = (0);
seq__37180_37227 = G__37244;
chunk__37181_37228 = G__37245;
count__37182_37229 = G__37246;
i__37183_37230 = G__37247;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37254 = arguments.length;
var i__31205__auto___37255 = (0);
while(true){
if((i__31205__auto___37255 < len__31204__auto___37254)){
args__31211__auto__.push((arguments[i__31205__auto___37255]));

var G__37256 = (i__31205__auto___37255 + (1));
i__31205__auto___37255 = G__37256;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__37251){
var map__37252 = p__37251;
var map__37252__$1 = ((((!((map__37252 == null)))?((((map__37252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37252):map__37252);
var options = map__37252__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq37248){
var G__37249 = cljs.core.first.call(null,seq37248);
var seq37248__$1 = cljs.core.next.call(null,seq37248);
var G__37250 = cljs.core.first.call(null,seq37248__$1);
var seq37248__$2 = cljs.core.next.call(null,seq37248__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__37249,G__37250,seq37248__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37260 = arguments.length;
var i__31205__auto___37261 = (0);
while(true){
if((i__31205__auto___37261 < len__31204__auto___37260)){
args__31211__auto__.push((arguments[i__31205__auto___37261]));

var G__37262 = (i__31205__auto___37261 + (1));
i__31205__auto___37261 = G__37262;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq37257){
var G__37258 = cljs.core.first.call(null,seq37257);
var seq37257__$1 = cljs.core.next.call(null,seq37257);
var G__37259 = cljs.core.first.call(null,seq37257__$1);
var seq37257__$2 = cljs.core.next.call(null,seq37257__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__37258,G__37259,seq37257__$2);
});

