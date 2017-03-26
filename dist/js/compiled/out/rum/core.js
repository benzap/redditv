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
return (function (p1__40830_SHARP_,p2__40829_SHARP_){
return p2__40829_SHARP_.call(null,p1__40830_SHARP_);
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
return (function (p1__40832_SHARP_,p2__40831_SHARP_){
return p2__40831_SHARP_.call(null,old_state,p1__40832_SHARP_);
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
return (function (p1__40833_SHARP_){
return p1__40833_SHARP_.call(null,old_state,new_state);
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
var vec__40838 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__40838,(0),null);
var next_state = cljs.core.nth.call(null,vec__40838,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__40834_SHARP_){
return p1__40834_SHARP_.call(null,state);
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
var G__40841__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__40841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40842__i = 0, G__40842__a = new Array(arguments.length -  0);
while (G__40842__i < G__40842__a.length) {G__40842__a[G__40842__i] = arguments[G__40842__i + 0]; ++G__40842__i;}
  args = new cljs.core.IndexedSeq(G__40842__a,0);
} 
return G__40841__delegate.call(this,args);};
G__40841.cljs$lang$maxFixedArity = 0;
G__40841.cljs$lang$applyTo = (function (arglist__40843){
var args = cljs.core.seq(arglist__40843);
return G__40841__delegate(args);
});
G__40841.cljs$core$IFn$_invoke$arity$variadic = G__40841__delegate;
return G__40841;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__40844__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__40844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40845__i = 0, G__40845__a = new Array(arguments.length -  0);
while (G__40845__i < G__40845__a.length) {G__40845__a[G__40845__i] = arguments[G__40845__i + 0]; ++G__40845__i;}
  args = new cljs.core.IndexedSeq(G__40845__a,0);
} 
return G__40844__delegate.call(this,args);};
G__40844.cljs$lang$maxFixedArity = 0;
G__40844.cljs$lang$applyTo = (function (arglist__40846){
var args = cljs.core.seq(arglist__40846);
return G__40844__delegate(args);
});
G__40844.cljs$core$IFn$_invoke$arity$variadic = G__40844__delegate;
return G__40844;
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
var G__40847__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__40847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40848__i = 0, G__40848__a = new Array(arguments.length -  0);
while (G__40848__i < G__40848__a.length) {G__40848__a[G__40848__i] = arguments[G__40848__i + 0]; ++G__40848__i;}
  args = new cljs.core.IndexedSeq(G__40848__a,0);
} 
return G__40847__delegate.call(this,args);};
G__40847.cljs$lang$maxFixedArity = 0;
G__40847.cljs$lang$applyTo = (function (arglist__40849){
var args = cljs.core.seq(arglist__40849);
return G__40847__delegate(args);
});
G__40847.cljs$core$IFn$_invoke$arity$variadic = G__40847__delegate;
return G__40847;
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
return (function (p1__40850_SHARP_){
return setTimeout(p1__40850_SHARP_,(16));
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
var seq__40857 = cljs.core.seq.call(null,queue);
var chunk__40859 = null;
var count__40860 = (0);
var i__40861 = (0);
while(true){
if((i__40861 < count__40860)){
var comp = cljs.core._nth.call(null,chunk__40859,i__40861);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__40863 = seq__40857;
var G__40864 = chunk__40859;
var G__40865 = count__40860;
var G__40866 = (i__40861 + (1));
seq__40857 = G__40863;
chunk__40859 = G__40864;
count__40860 = G__40865;
i__40861 = G__40866;
continue;
} else {
var G__40867 = seq__40857;
var G__40868 = chunk__40859;
var G__40869 = count__40860;
var G__40870 = (i__40861 + (1));
seq__40857 = G__40867;
chunk__40859 = G__40868;
count__40860 = G__40869;
i__40861 = G__40870;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40857);
if(temp__4657__auto__){
var seq__40857__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40857__$1)){
var c__30910__auto__ = cljs.core.chunk_first.call(null,seq__40857__$1);
var G__40871 = cljs.core.chunk_rest.call(null,seq__40857__$1);
var G__40872 = c__30910__auto__;
var G__40873 = cljs.core.count.call(null,c__30910__auto__);
var G__40874 = (0);
seq__40857 = G__40871;
chunk__40859 = G__40872;
count__40860 = G__40873;
i__40861 = G__40874;
continue;
} else {
var comp = cljs.core.first.call(null,seq__40857__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__40875 = cljs.core.next.call(null,seq__40857__$1);
var G__40876 = null;
var G__40877 = (0);
var G__40878 = (0);
seq__40857 = G__40875;
chunk__40859 = G__40876;
count__40860 = G__40877;
i__40861 = G__40878;
continue;
} else {
var G__40879 = cljs.core.next.call(null,seq__40857__$1);
var G__40880 = null;
var G__40881 = (0);
var G__40882 = (0);
seq__40857 = G__40879;
chunk__40859 = G__40880;
count__40860 = G__40881;
i__40861 = G__40882;
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
var args40883 = [];
var len__31204__auto___40886 = arguments.length;
var i__31205__auto___40887 = (0);
while(true){
if((i__31205__auto___40887 < len__31204__auto___40886)){
args40883.push((arguments[i__31205__auto___40887]));

var G__40888 = (i__31205__auto___40887 + (1));
i__31205__auto___40887 = G__40888;
continue;
} else {
}
break;
}

var G__40885 = args40883.length;
switch (G__40885) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40883.length)].join('')));

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
var _STAR_reactions_STAR_40890 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__40891 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__40891,(0),null);
var next_state = cljs.core.nth.call(null,vec__40891,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__40894_40906 = cljs.core.seq.call(null,old_reactions);
var chunk__40895_40907 = null;
var count__40896_40908 = (0);
var i__40897_40909 = (0);
while(true){
if((i__40897_40909 < count__40896_40908)){
var ref_40910 = cljs.core._nth.call(null,chunk__40895_40907,i__40897_40909);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_40910)){
} else {
cljs.core.remove_watch.call(null,ref_40910,key);
}

var G__40911 = seq__40894_40906;
var G__40912 = chunk__40895_40907;
var G__40913 = count__40896_40908;
var G__40914 = (i__40897_40909 + (1));
seq__40894_40906 = G__40911;
chunk__40895_40907 = G__40912;
count__40896_40908 = G__40913;
i__40897_40909 = G__40914;
continue;
} else {
var temp__4657__auto___40915 = cljs.core.seq.call(null,seq__40894_40906);
if(temp__4657__auto___40915){
var seq__40894_40916__$1 = temp__4657__auto___40915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40894_40916__$1)){
var c__30910__auto___40917 = cljs.core.chunk_first.call(null,seq__40894_40916__$1);
var G__40918 = cljs.core.chunk_rest.call(null,seq__40894_40916__$1);
var G__40919 = c__30910__auto___40917;
var G__40920 = cljs.core.count.call(null,c__30910__auto___40917);
var G__40921 = (0);
seq__40894_40906 = G__40918;
chunk__40895_40907 = G__40919;
count__40896_40908 = G__40920;
i__40897_40909 = G__40921;
continue;
} else {
var ref_40922 = cljs.core.first.call(null,seq__40894_40916__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_40922)){
} else {
cljs.core.remove_watch.call(null,ref_40922,key);
}

var G__40923 = cljs.core.next.call(null,seq__40894_40916__$1);
var G__40924 = null;
var G__40925 = (0);
var G__40926 = (0);
seq__40894_40906 = G__40923;
chunk__40895_40907 = G__40924;
count__40896_40908 = G__40925;
i__40897_40909 = G__40926;
continue;
}
} else {
}
}
break;
}

var seq__40898_40927 = cljs.core.seq.call(null,new_reactions);
var chunk__40899_40928 = null;
var count__40900_40929 = (0);
var i__40901_40930 = (0);
while(true){
if((i__40901_40930 < count__40900_40929)){
var ref_40931 = cljs.core._nth.call(null,chunk__40899_40928,i__40901_40930);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_40931)){
} else {
cljs.core.add_watch.call(null,ref_40931,key,((function (seq__40898_40927,chunk__40899_40928,count__40900_40929,i__40901_40930,ref_40931,comp,old_reactions,vec__40891,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40890){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__40898_40927,chunk__40899_40928,count__40900_40929,i__40901_40930,ref_40931,comp,old_reactions,vec__40891,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40890))
);
}

var G__40932 = seq__40898_40927;
var G__40933 = chunk__40899_40928;
var G__40934 = count__40900_40929;
var G__40935 = (i__40901_40930 + (1));
seq__40898_40927 = G__40932;
chunk__40899_40928 = G__40933;
count__40900_40929 = G__40934;
i__40901_40930 = G__40935;
continue;
} else {
var temp__4657__auto___40936 = cljs.core.seq.call(null,seq__40898_40927);
if(temp__4657__auto___40936){
var seq__40898_40937__$1 = temp__4657__auto___40936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40898_40937__$1)){
var c__30910__auto___40938 = cljs.core.chunk_first.call(null,seq__40898_40937__$1);
var G__40939 = cljs.core.chunk_rest.call(null,seq__40898_40937__$1);
var G__40940 = c__30910__auto___40938;
var G__40941 = cljs.core.count.call(null,c__30910__auto___40938);
var G__40942 = (0);
seq__40898_40927 = G__40939;
chunk__40899_40928 = G__40940;
count__40900_40929 = G__40941;
i__40901_40930 = G__40942;
continue;
} else {
var ref_40943 = cljs.core.first.call(null,seq__40898_40937__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_40943)){
} else {
cljs.core.add_watch.call(null,ref_40943,key,((function (seq__40898_40927,chunk__40899_40928,count__40900_40929,i__40901_40930,ref_40943,seq__40898_40937__$1,temp__4657__auto___40936,comp,old_reactions,vec__40891,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40890){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__40898_40927,chunk__40899_40928,count__40900_40929,i__40901_40930,ref_40943,seq__40898_40937__$1,temp__4657__auto___40936,comp,old_reactions,vec__40891,dom,next_state,new_reactions,key,_STAR_reactions_STAR_40890))
);
}

var G__40944 = cljs.core.next.call(null,seq__40898_40937__$1);
var G__40945 = null;
var G__40946 = (0);
var G__40947 = (0);
seq__40898_40927 = G__40944;
chunk__40899_40928 = G__40945;
count__40900_40929 = G__40946;
i__40901_40930 = G__40947;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_40890;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_40948 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__40902_40949 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__40903_40950 = null;
var count__40904_40951 = (0);
var i__40905_40952 = (0);
while(true){
if((i__40905_40952 < count__40904_40951)){
var ref_40953 = cljs.core._nth.call(null,chunk__40903_40950,i__40905_40952);
cljs.core.remove_watch.call(null,ref_40953,key_40948);

var G__40954 = seq__40902_40949;
var G__40955 = chunk__40903_40950;
var G__40956 = count__40904_40951;
var G__40957 = (i__40905_40952 + (1));
seq__40902_40949 = G__40954;
chunk__40903_40950 = G__40955;
count__40904_40951 = G__40956;
i__40905_40952 = G__40957;
continue;
} else {
var temp__4657__auto___40958 = cljs.core.seq.call(null,seq__40902_40949);
if(temp__4657__auto___40958){
var seq__40902_40959__$1 = temp__4657__auto___40958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40902_40959__$1)){
var c__30910__auto___40960 = cljs.core.chunk_first.call(null,seq__40902_40959__$1);
var G__40961 = cljs.core.chunk_rest.call(null,seq__40902_40959__$1);
var G__40962 = c__30910__auto___40960;
var G__40963 = cljs.core.count.call(null,c__30910__auto___40960);
var G__40964 = (0);
seq__40902_40949 = G__40961;
chunk__40903_40950 = G__40962;
count__40904_40951 = G__40963;
i__40905_40952 = G__40964;
continue;
} else {
var ref_40965 = cljs.core.first.call(null,seq__40902_40959__$1);
cljs.core.remove_watch.call(null,ref_40965,key_40948);

var G__40966 = cljs.core.next.call(null,seq__40902_40959__$1);
var G__40967 = null;
var G__40968 = (0);
var G__40969 = (0);
seq__40902_40949 = G__40966;
chunk__40903_40950 = G__40967;
count__40904_40951 = G__40968;
i__40905_40952 = G__40969;
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
var len__31204__auto___40976 = arguments.length;
var i__31205__auto___40977 = (0);
while(true){
if((i__31205__auto___40977 < len__31204__auto___40976)){
args__31211__auto__.push((arguments[i__31205__auto___40977]));

var G__40978 = (i__31205__auto___40977 + (1));
i__31205__auto___40977 = G__40978;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((2) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31212__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__40973){
var map__40974 = p__40973;
var map__40974__$1 = ((((!((map__40974 == null)))?((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40974):map__40974);
var options = map__40974__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq40970){
var G__40971 = cljs.core.first.call(null,seq40970);
var seq40970__$1 = cljs.core.next.call(null,seq40970);
var G__40972 = cljs.core.first.call(null,seq40970__$1);
var seq40970__$2 = cljs.core.next.call(null,seq40970__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__40971,G__40972,seq40970__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__31211__auto__ = [];
var len__31204__auto___40982 = arguments.length;
var i__31205__auto___40983 = (0);
while(true){
if((i__31205__auto___40983 < len__31204__auto___40982)){
args__31211__auto__.push((arguments[i__31205__auto___40983]));

var G__40984 = (i__31205__auto___40983 + (1));
i__31205__auto___40983 = G__40984;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq40979){
var G__40980 = cljs.core.first.call(null,seq40979);
var seq40979__$1 = cljs.core.next.call(null,seq40979);
var G__40981 = cljs.core.first.call(null,seq40979__$1);
var seq40979__$2 = cljs.core.next.call(null,seq40979__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__40980,G__40981,seq40979__$2);
});

