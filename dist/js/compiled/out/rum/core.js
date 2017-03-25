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
return (function (p1__36885_SHARP_,p2__36884_SHARP_){
return p2__36884_SHARP_.call(null,p1__36885_SHARP_);
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
return (function (p1__36887_SHARP_,p2__36886_SHARP_){
return p2__36886_SHARP_.call(null,old_state,p1__36887_SHARP_);
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
return (function (p1__36888_SHARP_){
return p1__36888_SHARP_.call(null,old_state,new_state);
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
var vec__36893 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__36893,(0),null);
var next_state = cljs.core.nth.call(null,vec__36893,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__36889_SHARP_){
return p1__36889_SHARP_.call(null,state);
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
var G__36896__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__36896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36897__i = 0, G__36897__a = new Array(arguments.length -  0);
while (G__36897__i < G__36897__a.length) {G__36897__a[G__36897__i] = arguments[G__36897__i + 0]; ++G__36897__i;}
  args = new cljs.core.IndexedSeq(G__36897__a,0);
} 
return G__36896__delegate.call(this,args);};
G__36896.cljs$lang$maxFixedArity = 0;
G__36896.cljs$lang$applyTo = (function (arglist__36898){
var args = cljs.core.seq(arglist__36898);
return G__36896__delegate(args);
});
G__36896.cljs$core$IFn$_invoke$arity$variadic = G__36896__delegate;
return G__36896;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__36899__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__36899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36900__i = 0, G__36900__a = new Array(arguments.length -  0);
while (G__36900__i < G__36900__a.length) {G__36900__a[G__36900__i] = arguments[G__36900__i + 0]; ++G__36900__i;}
  args = new cljs.core.IndexedSeq(G__36900__a,0);
} 
return G__36899__delegate.call(this,args);};
G__36899.cljs$lang$maxFixedArity = 0;
G__36899.cljs$lang$applyTo = (function (arglist__36901){
var args = cljs.core.seq(arglist__36901);
return G__36899__delegate(args);
});
G__36899.cljs$core$IFn$_invoke$arity$variadic = G__36899__delegate;
return G__36899;
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
var G__36902__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__36902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36903__i = 0, G__36903__a = new Array(arguments.length -  0);
while (G__36903__i < G__36903__a.length) {G__36903__a[G__36903__i] = arguments[G__36903__i + 0]; ++G__36903__i;}
  args = new cljs.core.IndexedSeq(G__36903__a,0);
} 
return G__36902__delegate.call(this,args);};
G__36902.cljs$lang$maxFixedArity = 0;
G__36902.cljs$lang$applyTo = (function (arglist__36904){
var args = cljs.core.seq(arglist__36904);
return G__36902__delegate(args);
});
G__36902.cljs$core$IFn$_invoke$arity$variadic = G__36902__delegate;
return G__36902;
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
return (function (p1__36905_SHARP_){
return setTimeout(p1__36905_SHARP_,(16));
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
var seq__36912 = cljs.core.seq.call(null,queue);
var chunk__36914 = null;
var count__36915 = (0);
var i__36916 = (0);
while(true){
if((i__36916 < count__36915)){
var comp = cljs.core._nth.call(null,chunk__36914,i__36916);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__36918 = seq__36912;
var G__36919 = chunk__36914;
var G__36920 = count__36915;
var G__36921 = (i__36916 + (1));
seq__36912 = G__36918;
chunk__36914 = G__36919;
count__36915 = G__36920;
i__36916 = G__36921;
continue;
} else {
var G__36922 = seq__36912;
var G__36923 = chunk__36914;
var G__36924 = count__36915;
var G__36925 = (i__36916 + (1));
seq__36912 = G__36922;
chunk__36914 = G__36923;
count__36915 = G__36924;
i__36916 = G__36925;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36912);
if(temp__4657__auto__){
var seq__36912__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36912__$1)){
var c__30910__auto__ = cljs.core.chunk_first.call(null,seq__36912__$1);
var G__36926 = cljs.core.chunk_rest.call(null,seq__36912__$1);
var G__36927 = c__30910__auto__;
var G__36928 = cljs.core.count.call(null,c__30910__auto__);
var G__36929 = (0);
seq__36912 = G__36926;
chunk__36914 = G__36927;
count__36915 = G__36928;
i__36916 = G__36929;
continue;
} else {
var comp = cljs.core.first.call(null,seq__36912__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__36930 = cljs.core.next.call(null,seq__36912__$1);
var G__36931 = null;
var G__36932 = (0);
var G__36933 = (0);
seq__36912 = G__36930;
chunk__36914 = G__36931;
count__36915 = G__36932;
i__36916 = G__36933;
continue;
} else {
var G__36934 = cljs.core.next.call(null,seq__36912__$1);
var G__36935 = null;
var G__36936 = (0);
var G__36937 = (0);
seq__36912 = G__36934;
chunk__36914 = G__36935;
count__36915 = G__36936;
i__36916 = G__36937;
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
var args36938 = [];
var len__31204__auto___36941 = arguments.length;
var i__31205__auto___36942 = (0);
while(true){
if((i__31205__auto___36942 < len__31204__auto___36941)){
args36938.push((arguments[i__31205__auto___36942]));

var G__36943 = (i__31205__auto___36942 + (1));
i__31205__auto___36942 = G__36943;
continue;
} else {
}
break;
}

var G__36940 = args36938.length;
switch (G__36940) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36938.length)].join('')));

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
var _STAR_reactions_STAR_36945 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__36946 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__36946,(0),null);
var next_state = cljs.core.nth.call(null,vec__36946,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__36949_36961 = cljs.core.seq.call(null,old_reactions);
var chunk__36950_36962 = null;
var count__36951_36963 = (0);
var i__36952_36964 = (0);
while(true){
if((i__36952_36964 < count__36951_36963)){
var ref_36965 = cljs.core._nth.call(null,chunk__36950_36962,i__36952_36964);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_36965)){
} else {
cljs.core.remove_watch.call(null,ref_36965,key);
}

var G__36966 = seq__36949_36961;
var G__36967 = chunk__36950_36962;
var G__36968 = count__36951_36963;
var G__36969 = (i__36952_36964 + (1));
seq__36949_36961 = G__36966;
chunk__36950_36962 = G__36967;
count__36951_36963 = G__36968;
i__36952_36964 = G__36969;
continue;
} else {
var temp__4657__auto___36970 = cljs.core.seq.call(null,seq__36949_36961);
if(temp__4657__auto___36970){
var seq__36949_36971__$1 = temp__4657__auto___36970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36949_36971__$1)){
var c__30910__auto___36972 = cljs.core.chunk_first.call(null,seq__36949_36971__$1);
var G__36973 = cljs.core.chunk_rest.call(null,seq__36949_36971__$1);
var G__36974 = c__30910__auto___36972;
var G__36975 = cljs.core.count.call(null,c__30910__auto___36972);
var G__36976 = (0);
seq__36949_36961 = G__36973;
chunk__36950_36962 = G__36974;
count__36951_36963 = G__36975;
i__36952_36964 = G__36976;
continue;
} else {
var ref_36977 = cljs.core.first.call(null,seq__36949_36971__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_36977)){
} else {
cljs.core.remove_watch.call(null,ref_36977,key);
}

var G__36978 = cljs.core.next.call(null,seq__36949_36971__$1);
var G__36979 = null;
var G__36980 = (0);
var G__36981 = (0);
seq__36949_36961 = G__36978;
chunk__36950_36962 = G__36979;
count__36951_36963 = G__36980;
i__36952_36964 = G__36981;
continue;
}
} else {
}
}
break;
}

var seq__36953_36982 = cljs.core.seq.call(null,new_reactions);
var chunk__36954_36983 = null;
var count__36955_36984 = (0);
var i__36956_36985 = (0);
while(true){
if((i__36956_36985 < count__36955_36984)){
var ref_36986 = cljs.core._nth.call(null,chunk__36954_36983,i__36956_36985);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_36986)){
} else {
cljs.core.add_watch.call(null,ref_36986,key,((function (seq__36953_36982,chunk__36954_36983,count__36955_36984,i__36956_36985,ref_36986,comp,old_reactions,vec__36946,dom,next_state,new_reactions,key,_STAR_reactions_STAR_36945){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__36953_36982,chunk__36954_36983,count__36955_36984,i__36956_36985,ref_36986,comp,old_reactions,vec__36946,dom,next_state,new_reactions,key,_STAR_reactions_STAR_36945))
);
}

var G__36987 = seq__36953_36982;
var G__36988 = chunk__36954_36983;
var G__36989 = count__36955_36984;
var G__36990 = (i__36956_36985 + (1));
seq__36953_36982 = G__36987;
chunk__36954_36983 = G__36988;
count__36955_36984 = G__36989;
i__36956_36985 = G__36990;
continue;
} else {
var temp__4657__auto___36991 = cljs.core.seq.call(null,seq__36953_36982);
if(temp__4657__auto___36991){
var seq__36953_36992__$1 = temp__4657__auto___36991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36953_36992__$1)){
var c__30910__auto___36993 = cljs.core.chunk_first.call(null,seq__36953_36992__$1);
var G__36994 = cljs.core.chunk_rest.call(null,seq__36953_36992__$1);
var G__36995 = c__30910__auto___36993;
var G__36996 = cljs.core.count.call(null,c__30910__auto___36993);
var G__36997 = (0);
seq__36953_36982 = G__36994;
chunk__36954_36983 = G__36995;
count__36955_36984 = G__36996;
i__36956_36985 = G__36997;
continue;
} else {
var ref_36998 = cljs.core.first.call(null,seq__36953_36992__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_36998)){
} else {
cljs.core.add_watch.call(null,ref_36998,key,((function (seq__36953_36982,chunk__36954_36983,count__36955_36984,i__36956_36985,ref_36998,seq__36953_36992__$1,temp__4657__auto___36991,comp,old_reactions,vec__36946,dom,next_state,new_reactions,key,_STAR_reactions_STAR_36945){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__36953_36982,chunk__36954_36983,count__36955_36984,i__36956_36985,ref_36998,seq__36953_36992__$1,temp__4657__auto___36991,comp,old_reactions,vec__36946,dom,next_state,new_reactions,key,_STAR_reactions_STAR_36945))
);
}

var G__36999 = cljs.core.next.call(null,seq__36953_36992__$1);
var G__37000 = null;
var G__37001 = (0);
var G__37002 = (0);
seq__36953_36982 = G__36999;
chunk__36954_36983 = G__37000;
count__36955_36984 = G__37001;
i__36956_36985 = G__37002;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_36945;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_37003 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__36957_37004 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__36958_37005 = null;
var count__36959_37006 = (0);
var i__36960_37007 = (0);
while(true){
if((i__36960_37007 < count__36959_37006)){
var ref_37008 = cljs.core._nth.call(null,chunk__36958_37005,i__36960_37007);
cljs.core.remove_watch.call(null,ref_37008,key_37003);

var G__37009 = seq__36957_37004;
var G__37010 = chunk__36958_37005;
var G__37011 = count__36959_37006;
var G__37012 = (i__36960_37007 + (1));
seq__36957_37004 = G__37009;
chunk__36958_37005 = G__37010;
count__36959_37006 = G__37011;
i__36960_37007 = G__37012;
continue;
} else {
var temp__4657__auto___37013 = cljs.core.seq.call(null,seq__36957_37004);
if(temp__4657__auto___37013){
var seq__36957_37014__$1 = temp__4657__auto___37013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36957_37014__$1)){
var c__30910__auto___37015 = cljs.core.chunk_first.call(null,seq__36957_37014__$1);
var G__37016 = cljs.core.chunk_rest.call(null,seq__36957_37014__$1);
var G__37017 = c__30910__auto___37015;
var G__37018 = cljs.core.count.call(null,c__30910__auto___37015);
var G__37019 = (0);
seq__36957_37004 = G__37016;
chunk__36958_37005 = G__37017;
count__36959_37006 = G__37018;
i__36960_37007 = G__37019;
continue;
} else {
var ref_37020 = cljs.core.first.call(null,seq__36957_37014__$1);
cljs.core.remove_watch.call(null,ref_37020,key_37003);

var G__37021 = cljs.core.next.call(null,seq__36957_37014__$1);
var G__37022 = null;
var G__37023 = (0);
var G__37024 = (0);
seq__36957_37004 = G__37021;
chunk__36958_37005 = G__37022;
count__36959_37006 = G__37023;
i__36960_37007 = G__37024;
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
var len__31204__auto___37031 = arguments.length;
var i__31205__auto___37032 = (0);
while(true){
if((i__31205__auto___37032 < len__31204__auto___37031)){
args__31211__auto__.push((arguments[i__31205__auto___37032]));

var G__37033 = (i__31205__auto___37032 + (1));
i__31205__auto___37032 = G__37033;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__37028){
var map__37029 = p__37028;
var map__37029__$1 = ((((!((map__37029 == null)))?((((map__37029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37029):map__37029);
var options = map__37029__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq37025){
var G__37026 = cljs.core.first.call(null,seq37025);
var seq37025__$1 = cljs.core.next.call(null,seq37025);
var G__37027 = cljs.core.first.call(null,seq37025__$1);
var seq37025__$2 = cljs.core.next.call(null,seq37025__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__37026,G__37027,seq37025__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__31211__auto__ = [];
var len__31204__auto___37037 = arguments.length;
var i__31205__auto___37038 = (0);
while(true){
if((i__31205__auto___37038 < len__31204__auto___37037)){
args__31211__auto__.push((arguments[i__31205__auto___37038]));

var G__37039 = (i__31205__auto___37038 + (1));
i__31205__auto___37038 = G__37039;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq37034){
var G__37035 = cljs.core.first.call(null,seq37034);
var seq37034__$1 = cljs.core.next.call(null,seq37034);
var G__37036 = cljs.core.first.call(null,seq37034__$1);
var seq37034__$2 = cljs.core.next.call(null,seq37034__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__37035,G__37036,seq37034__$2);
});

