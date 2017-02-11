// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__36436__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36433 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36434 = cljs.core.seq.call(null,vec__36433);
var first__36435 = cljs.core.first.call(null,seq__36434);
var seq__36434__$1 = cljs.core.next.call(null,seq__36434);
var tag = first__36435;
var body = seq__36434__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36437__i = 0, G__36437__a = new Array(arguments.length -  0);
while (G__36437__i < G__36437__a.length) {G__36437__a[G__36437__i] = arguments[G__36437__i + 0]; ++G__36437__i;}
  args = new cljs.core.IndexedSeq(G__36437__a,0);
} 
return G__36436__delegate.call(this,args);};
G__36436.cljs$lang$maxFixedArity = 0;
G__36436.cljs$lang$applyTo = (function (arglist__36438){
var args = cljs.core.seq(arglist__36438);
return G__36436__delegate(args);
});
G__36436.cljs$core$IFn$_invoke$arity$variadic = G__36436__delegate;
return G__36436;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30879__auto__ = (function sablono$core$update_arglists_$_iter__36443(s__36444){
return (new cljs.core.LazySeq(null,(function (){
var s__36444__$1 = s__36444;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36444__$1);
if(temp__4657__auto__){
var s__36444__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36444__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36444__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36446 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36445 = (0);
while(true){
if((i__36445 < size__30878__auto__)){
var args = cljs.core._nth.call(null,c__30877__auto__,i__36445);
cljs.core.chunk_append.call(null,b__36446,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36447 = (i__36445 + (1));
i__36445 = G__36447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36446),sablono$core$update_arglists_$_iter__36443.call(null,cljs.core.chunk_rest.call(null,s__36444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36446),null);
}
} else {
var args = cljs.core.first.call(null,s__36444__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36443.call(null,cljs.core.rest.call(null,s__36444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30879__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36453 = arguments.length;
var i__31205__auto___36454 = (0);
while(true){
if((i__31205__auto___36454 < len__31204__auto___36453)){
args__31211__auto__.push((arguments[i__31205__auto___36454]));

var G__36455 = (i__31205__auto___36454 + (1));
i__31205__auto___36454 = G__36455;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30879__auto__ = (function sablono$core$iter__36449(s__36450){
return (new cljs.core.LazySeq(null,(function (){
var s__36450__$1 = s__36450;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36450__$1);
if(temp__4657__auto__){
var s__36450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36450__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36450__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36452 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36451 = (0);
while(true){
if((i__36451 < size__30878__auto__)){
var style = cljs.core._nth.call(null,c__30877__auto__,i__36451);
cljs.core.chunk_append.call(null,b__36452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36456 = (i__36451 + (1));
i__36451 = G__36456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36452),sablono$core$iter__36449.call(null,cljs.core.chunk_rest.call(null,s__36450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36452),null);
}
} else {
var style = cljs.core.first.call(null,s__36450__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36449.call(null,cljs.core.rest.call(null,s__36450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30879__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36448){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36448));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to36457 = (function sablono$core$link_to36457(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36460 = arguments.length;
var i__31205__auto___36461 = (0);
while(true){
if((i__31205__auto___36461 < len__31204__auto___36460)){
args__31211__auto__.push((arguments[i__31205__auto___36461]));

var G__36462 = (i__31205__auto___36461 + (1));
i__31205__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36457.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.link_to36457.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36457.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36457.cljs$lang$applyTo = (function (seq36458){
var G__36459 = cljs.core.first.call(null,seq36458);
var seq36458__$1 = cljs.core.next.call(null,seq36458);
return sablono.core.link_to36457.cljs$core$IFn$_invoke$arity$variadic(G__36459,seq36458__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36457);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36463 = (function sablono$core$mail_to36463(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36470 = arguments.length;
var i__31205__auto___36471 = (0);
while(true){
if((i__31205__auto___36471 < len__31204__auto___36470)){
args__31211__auto__.push((arguments[i__31205__auto___36471]));

var G__36472 = (i__31205__auto___36471 + (1));
i__31205__auto___36471 = G__36472;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36463.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.mail_to36463.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36466){
var vec__36467 = p__36466;
var content = cljs.core.nth.call(null,vec__36467,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__30096__auto__ = content;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36463.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36463.cljs$lang$applyTo = (function (seq36464){
var G__36465 = cljs.core.first.call(null,seq36464);
var seq36464__$1 = cljs.core.next.call(null,seq36464);
return sablono.core.mail_to36463.cljs$core$IFn$_invoke$arity$variadic(G__36465,seq36464__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36463);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36473 = (function sablono$core$unordered_list36473(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30879__auto__ = (function sablono$core$unordered_list36473_$_iter__36478(s__36479){
return (new cljs.core.LazySeq(null,(function (){
var s__36479__$1 = s__36479;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36479__$1);
if(temp__4657__auto__){
var s__36479__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36479__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36479__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36481 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36480 = (0);
while(true){
if((i__36480 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36480);
cljs.core.chunk_append.call(null,b__36481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36482 = (i__36480 + (1));
i__36480 = G__36482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36481),sablono$core$unordered_list36473_$_iter__36478.call(null,cljs.core.chunk_rest.call(null,s__36479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36481),null);
}
} else {
var x = cljs.core.first.call(null,s__36479__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36473_$_iter__36478.call(null,cljs.core.rest.call(null,s__36479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30879__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36473);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36483 = (function sablono$core$ordered_list36483(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30879__auto__ = (function sablono$core$ordered_list36483_$_iter__36488(s__36489){
return (new cljs.core.LazySeq(null,(function (){
var s__36489__$1 = s__36489;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36489__$1);
if(temp__4657__auto__){
var s__36489__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36489__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36489__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36491 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36490 = (0);
while(true){
if((i__36490 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36490);
cljs.core.chunk_append.call(null,b__36491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36492 = (i__36490 + (1));
i__36490 = G__36492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36491),sablono$core$ordered_list36483_$_iter__36488.call(null,cljs.core.chunk_rest.call(null,s__36489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36491),null);
}
} else {
var x = cljs.core.first.call(null,s__36489__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36483_$_iter__36488.call(null,cljs.core.rest.call(null,s__36489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30879__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36483);
/**
 * Create an image element.
 */
sablono.core.image36493 = (function sablono$core$image36493(var_args){
var args36494 = [];
var len__31204__auto___36497 = arguments.length;
var i__31205__auto___36498 = (0);
while(true){
if((i__31205__auto___36498 < len__31204__auto___36497)){
args36494.push((arguments[i__31205__auto___36498]));

var G__36499 = (i__31205__auto___36498 + (1));
i__31205__auto___36498 = G__36499;
continue;
} else {
}
break;
}

var G__36496 = args36494.length;
switch (G__36496) {
case 1:
return sablono.core.image36493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36494.length)].join('')));

}
});

sablono.core.image36493.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36493.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36493.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36493);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36501_SHARP_,p2__36502_SHARP_){
return [cljs.core.str(p1__36501_SHARP_),cljs.core.str("["),cljs.core.str(p2__36502_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36503_SHARP_,p2__36504_SHARP_){
return [cljs.core.str(p1__36503_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36504_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field36505 = (function sablono$core$color_field36505(var_args){
var args36506 = [];
var len__31204__auto___36573 = arguments.length;
var i__31205__auto___36574 = (0);
while(true){
if((i__31205__auto___36574 < len__31204__auto___36573)){
args36506.push((arguments[i__31205__auto___36574]));

var G__36575 = (i__31205__auto___36574 + (1));
i__31205__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var G__36508 = args36506.length;
switch (G__36508) {
case 1:
return sablono.core.color_field36505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36506.length)].join('')));

}
});

sablono.core.color_field36505.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.color_field36505.call(null,name__36420__auto__,null);
});

sablono.core.color_field36505.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.color_field36505.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36505);

/**
 * Creates a date input field.
 */
sablono.core.date_field36509 = (function sablono$core$date_field36509(var_args){
var args36510 = [];
var len__31204__auto___36577 = arguments.length;
var i__31205__auto___36578 = (0);
while(true){
if((i__31205__auto___36578 < len__31204__auto___36577)){
args36510.push((arguments[i__31205__auto___36578]));

var G__36579 = (i__31205__auto___36578 + (1));
i__31205__auto___36578 = G__36579;
continue;
} else {
}
break;
}

var G__36512 = args36510.length;
switch (G__36512) {
case 1:
return sablono.core.date_field36509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36510.length)].join('')));

}
});

sablono.core.date_field36509.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.date_field36509.call(null,name__36420__auto__,null);
});

sablono.core.date_field36509.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.date_field36509.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36509);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36513 = (function sablono$core$datetime_field36513(var_args){
var args36514 = [];
var len__31204__auto___36581 = arguments.length;
var i__31205__auto___36582 = (0);
while(true){
if((i__31205__auto___36582 < len__31204__auto___36581)){
args36514.push((arguments[i__31205__auto___36582]));

var G__36583 = (i__31205__auto___36582 + (1));
i__31205__auto___36582 = G__36583;
continue;
} else {
}
break;
}

var G__36516 = args36514.length;
switch (G__36516) {
case 1:
return sablono.core.datetime_field36513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36514.length)].join('')));

}
});

sablono.core.datetime_field36513.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.datetime_field36513.call(null,name__36420__auto__,null);
});

sablono.core.datetime_field36513.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.datetime_field36513.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36513);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36517 = (function sablono$core$datetime_local_field36517(var_args){
var args36518 = [];
var len__31204__auto___36585 = arguments.length;
var i__31205__auto___36586 = (0);
while(true){
if((i__31205__auto___36586 < len__31204__auto___36585)){
args36518.push((arguments[i__31205__auto___36586]));

var G__36587 = (i__31205__auto___36586 + (1));
i__31205__auto___36586 = G__36587;
continue;
} else {
}
break;
}

var G__36520 = args36518.length;
switch (G__36520) {
case 1:
return sablono.core.datetime_local_field36517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36518.length)].join('')));

}
});

sablono.core.datetime_local_field36517.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.datetime_local_field36517.call(null,name__36420__auto__,null);
});

sablono.core.datetime_local_field36517.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.datetime_local_field36517.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36517);

/**
 * Creates a email input field.
 */
sablono.core.email_field36521 = (function sablono$core$email_field36521(var_args){
var args36522 = [];
var len__31204__auto___36589 = arguments.length;
var i__31205__auto___36590 = (0);
while(true){
if((i__31205__auto___36590 < len__31204__auto___36589)){
args36522.push((arguments[i__31205__auto___36590]));

var G__36591 = (i__31205__auto___36590 + (1));
i__31205__auto___36590 = G__36591;
continue;
} else {
}
break;
}

var G__36524 = args36522.length;
switch (G__36524) {
case 1:
return sablono.core.email_field36521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36522.length)].join('')));

}
});

sablono.core.email_field36521.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.email_field36521.call(null,name__36420__auto__,null);
});

sablono.core.email_field36521.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.email_field36521.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36521);

/**
 * Creates a file input field.
 */
sablono.core.file_field36525 = (function sablono$core$file_field36525(var_args){
var args36526 = [];
var len__31204__auto___36593 = arguments.length;
var i__31205__auto___36594 = (0);
while(true){
if((i__31205__auto___36594 < len__31204__auto___36593)){
args36526.push((arguments[i__31205__auto___36594]));

var G__36595 = (i__31205__auto___36594 + (1));
i__31205__auto___36594 = G__36595;
continue;
} else {
}
break;
}

var G__36528 = args36526.length;
switch (G__36528) {
case 1:
return sablono.core.file_field36525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36526.length)].join('')));

}
});

sablono.core.file_field36525.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.file_field36525.call(null,name__36420__auto__,null);
});

sablono.core.file_field36525.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.file_field36525.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36525);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36529 = (function sablono$core$hidden_field36529(var_args){
var args36530 = [];
var len__31204__auto___36597 = arguments.length;
var i__31205__auto___36598 = (0);
while(true){
if((i__31205__auto___36598 < len__31204__auto___36597)){
args36530.push((arguments[i__31205__auto___36598]));

var G__36599 = (i__31205__auto___36598 + (1));
i__31205__auto___36598 = G__36599;
continue;
} else {
}
break;
}

var G__36532 = args36530.length;
switch (G__36532) {
case 1:
return sablono.core.hidden_field36529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36530.length)].join('')));

}
});

sablono.core.hidden_field36529.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.hidden_field36529.call(null,name__36420__auto__,null);
});

sablono.core.hidden_field36529.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.hidden_field36529.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36529);

/**
 * Creates a month input field.
 */
sablono.core.month_field36533 = (function sablono$core$month_field36533(var_args){
var args36534 = [];
var len__31204__auto___36601 = arguments.length;
var i__31205__auto___36602 = (0);
while(true){
if((i__31205__auto___36602 < len__31204__auto___36601)){
args36534.push((arguments[i__31205__auto___36602]));

var G__36603 = (i__31205__auto___36602 + (1));
i__31205__auto___36602 = G__36603;
continue;
} else {
}
break;
}

var G__36536 = args36534.length;
switch (G__36536) {
case 1:
return sablono.core.month_field36533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36534.length)].join('')));

}
});

sablono.core.month_field36533.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.month_field36533.call(null,name__36420__auto__,null);
});

sablono.core.month_field36533.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.month_field36533.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36533);

/**
 * Creates a number input field.
 */
sablono.core.number_field36537 = (function sablono$core$number_field36537(var_args){
var args36538 = [];
var len__31204__auto___36605 = arguments.length;
var i__31205__auto___36606 = (0);
while(true){
if((i__31205__auto___36606 < len__31204__auto___36605)){
args36538.push((arguments[i__31205__auto___36606]));

var G__36607 = (i__31205__auto___36606 + (1));
i__31205__auto___36606 = G__36607;
continue;
} else {
}
break;
}

var G__36540 = args36538.length;
switch (G__36540) {
case 1:
return sablono.core.number_field36537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36538.length)].join('')));

}
});

sablono.core.number_field36537.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.number_field36537.call(null,name__36420__auto__,null);
});

sablono.core.number_field36537.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.number_field36537.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36537);

/**
 * Creates a password input field.
 */
sablono.core.password_field36541 = (function sablono$core$password_field36541(var_args){
var args36542 = [];
var len__31204__auto___36609 = arguments.length;
var i__31205__auto___36610 = (0);
while(true){
if((i__31205__auto___36610 < len__31204__auto___36609)){
args36542.push((arguments[i__31205__auto___36610]));

var G__36611 = (i__31205__auto___36610 + (1));
i__31205__auto___36610 = G__36611;
continue;
} else {
}
break;
}

var G__36544 = args36542.length;
switch (G__36544) {
case 1:
return sablono.core.password_field36541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36542.length)].join('')));

}
});

sablono.core.password_field36541.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.password_field36541.call(null,name__36420__auto__,null);
});

sablono.core.password_field36541.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.password_field36541.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36541);

/**
 * Creates a range input field.
 */
sablono.core.range_field36545 = (function sablono$core$range_field36545(var_args){
var args36546 = [];
var len__31204__auto___36613 = arguments.length;
var i__31205__auto___36614 = (0);
while(true){
if((i__31205__auto___36614 < len__31204__auto___36613)){
args36546.push((arguments[i__31205__auto___36614]));

var G__36615 = (i__31205__auto___36614 + (1));
i__31205__auto___36614 = G__36615;
continue;
} else {
}
break;
}

var G__36548 = args36546.length;
switch (G__36548) {
case 1:
return sablono.core.range_field36545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36546.length)].join('')));

}
});

sablono.core.range_field36545.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.range_field36545.call(null,name__36420__auto__,null);
});

sablono.core.range_field36545.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.range_field36545.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36545);

/**
 * Creates a search input field.
 */
sablono.core.search_field36549 = (function sablono$core$search_field36549(var_args){
var args36550 = [];
var len__31204__auto___36617 = arguments.length;
var i__31205__auto___36618 = (0);
while(true){
if((i__31205__auto___36618 < len__31204__auto___36617)){
args36550.push((arguments[i__31205__auto___36618]));

var G__36619 = (i__31205__auto___36618 + (1));
i__31205__auto___36618 = G__36619;
continue;
} else {
}
break;
}

var G__36552 = args36550.length;
switch (G__36552) {
case 1:
return sablono.core.search_field36549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36550.length)].join('')));

}
});

sablono.core.search_field36549.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.search_field36549.call(null,name__36420__auto__,null);
});

sablono.core.search_field36549.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.search_field36549.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36549);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36553 = (function sablono$core$tel_field36553(var_args){
var args36554 = [];
var len__31204__auto___36621 = arguments.length;
var i__31205__auto___36622 = (0);
while(true){
if((i__31205__auto___36622 < len__31204__auto___36621)){
args36554.push((arguments[i__31205__auto___36622]));

var G__36623 = (i__31205__auto___36622 + (1));
i__31205__auto___36622 = G__36623;
continue;
} else {
}
break;
}

var G__36556 = args36554.length;
switch (G__36556) {
case 1:
return sablono.core.tel_field36553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36554.length)].join('')));

}
});

sablono.core.tel_field36553.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.tel_field36553.call(null,name__36420__auto__,null);
});

sablono.core.tel_field36553.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.tel_field36553.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36553);

/**
 * Creates a text input field.
 */
sablono.core.text_field36557 = (function sablono$core$text_field36557(var_args){
var args36558 = [];
var len__31204__auto___36625 = arguments.length;
var i__31205__auto___36626 = (0);
while(true){
if((i__31205__auto___36626 < len__31204__auto___36625)){
args36558.push((arguments[i__31205__auto___36626]));

var G__36627 = (i__31205__auto___36626 + (1));
i__31205__auto___36626 = G__36627;
continue;
} else {
}
break;
}

var G__36560 = args36558.length;
switch (G__36560) {
case 1:
return sablono.core.text_field36557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36558.length)].join('')));

}
});

sablono.core.text_field36557.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.text_field36557.call(null,name__36420__auto__,null);
});

sablono.core.text_field36557.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.text_field36557.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36557);

/**
 * Creates a time input field.
 */
sablono.core.time_field36561 = (function sablono$core$time_field36561(var_args){
var args36562 = [];
var len__31204__auto___36629 = arguments.length;
var i__31205__auto___36630 = (0);
while(true){
if((i__31205__auto___36630 < len__31204__auto___36629)){
args36562.push((arguments[i__31205__auto___36630]));

var G__36631 = (i__31205__auto___36630 + (1));
i__31205__auto___36630 = G__36631;
continue;
} else {
}
break;
}

var G__36564 = args36562.length;
switch (G__36564) {
case 1:
return sablono.core.time_field36561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36562.length)].join('')));

}
});

sablono.core.time_field36561.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.time_field36561.call(null,name__36420__auto__,null);
});

sablono.core.time_field36561.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.time_field36561.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36561);

/**
 * Creates a url input field.
 */
sablono.core.url_field36565 = (function sablono$core$url_field36565(var_args){
var args36566 = [];
var len__31204__auto___36633 = arguments.length;
var i__31205__auto___36634 = (0);
while(true){
if((i__31205__auto___36634 < len__31204__auto___36633)){
args36566.push((arguments[i__31205__auto___36634]));

var G__36635 = (i__31205__auto___36634 + (1));
i__31205__auto___36634 = G__36635;
continue;
} else {
}
break;
}

var G__36568 = args36566.length;
switch (G__36568) {
case 1:
return sablono.core.url_field36565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36566.length)].join('')));

}
});

sablono.core.url_field36565.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.url_field36565.call(null,name__36420__auto__,null);
});

sablono.core.url_field36565.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.url_field36565.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36565);

/**
 * Creates a week input field.
 */
sablono.core.week_field36569 = (function sablono$core$week_field36569(var_args){
var args36570 = [];
var len__31204__auto___36637 = arguments.length;
var i__31205__auto___36638 = (0);
while(true){
if((i__31205__auto___36638 < len__31204__auto___36637)){
args36570.push((arguments[i__31205__auto___36638]));

var G__36639 = (i__31205__auto___36638 + (1));
i__31205__auto___36638 = G__36639;
continue;
} else {
}
break;
}

var G__36572 = args36570.length;
switch (G__36572) {
case 1:
return sablono.core.week_field36569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36570.length)].join('')));

}
});

sablono.core.week_field36569.cljs$core$IFn$_invoke$arity$1 = (function (name__36420__auto__){
return sablono.core.week_field36569.call(null,name__36420__auto__,null);
});

sablono.core.week_field36569.cljs$core$IFn$_invoke$arity$2 = (function (name__36420__auto__,value__36421__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36420__auto__,value__36421__auto__);
});

sablono.core.week_field36569.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36569);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36641 = (function sablono$core$check_box36641(var_args){
var args36642 = [];
var len__31204__auto___36645 = arguments.length;
var i__31205__auto___36646 = (0);
while(true){
if((i__31205__auto___36646 < len__31204__auto___36645)){
args36642.push((arguments[i__31205__auto___36646]));

var G__36647 = (i__31205__auto___36646 + (1));
i__31205__auto___36646 = G__36647;
continue;
} else {
}
break;
}

var G__36644 = args36642.length;
switch (G__36644) {
case 1:
return sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36642.length)].join('')));

}
});

sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36641.call(null,name,null);
});

sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36641.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36641.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36641.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36641);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36649 = (function sablono$core$radio_button36649(var_args){
var args36650 = [];
var len__31204__auto___36653 = arguments.length;
var i__31205__auto___36654 = (0);
while(true){
if((i__31205__auto___36654 < len__31204__auto___36653)){
args36650.push((arguments[i__31205__auto___36654]));

var G__36655 = (i__31205__auto___36654 + (1));
i__31205__auto___36654 = G__36655;
continue;
} else {
}
break;
}

var G__36652 = args36650.length;
switch (G__36652) {
case 1:
return sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36650.length)].join('')));

}
});

sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36649.call(null,group,null);
});

sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36649.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36649.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36649.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36649);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36657 = (function sablono$core$select_options36657(coll){
var iter__30879__auto__ = (function sablono$core$select_options36657_$_iter__36674(s__36675){
return (new cljs.core.LazySeq(null,(function (){
var s__36675__$1 = s__36675;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36675__$1);
if(temp__4657__auto__){
var s__36675__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36675__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36675__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36677 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36676 = (0);
while(true){
if((i__36676 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36676);
cljs.core.chunk_append.call(null,b__36677,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36684 = x;
var text = cljs.core.nth.call(null,vec__36684,(0),null);
var val = cljs.core.nth.call(null,vec__36684,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36684,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36657.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36690 = (i__36676 + (1));
i__36676 = G__36690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36677),sablono$core$select_options36657_$_iter__36674.call(null,cljs.core.chunk_rest.call(null,s__36675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36677),null);
}
} else {
var x = cljs.core.first.call(null,s__36675__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36687 = x;
var text = cljs.core.nth.call(null,vec__36687,(0),null);
var val = cljs.core.nth.call(null,vec__36687,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36687,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36657.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36657_$_iter__36674.call(null,cljs.core.rest.call(null,s__36675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30879__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36657);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36691 = (function sablono$core$drop_down36691(var_args){
var args36692 = [];
var len__31204__auto___36695 = arguments.length;
var i__31205__auto___36696 = (0);
while(true){
if((i__31205__auto___36696 < len__31204__auto___36695)){
args36692.push((arguments[i__31205__auto___36696]));

var G__36697 = (i__31205__auto___36696 + (1));
i__31205__auto___36696 = G__36697;
continue;
} else {
}
break;
}

var G__36694 = args36692.length;
switch (G__36694) {
case 2:
return sablono.core.drop_down36691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36691.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36692.length)].join('')));

}
});

sablono.core.drop_down36691.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36691.call(null,name,options,null);
});

sablono.core.drop_down36691.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36691.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36691);
/**
 * Creates a text area element.
 */
sablono.core.text_area36699 = (function sablono$core$text_area36699(var_args){
var args36700 = [];
var len__31204__auto___36703 = arguments.length;
var i__31205__auto___36704 = (0);
while(true){
if((i__31205__auto___36704 < len__31204__auto___36703)){
args36700.push((arguments[i__31205__auto___36704]));

var G__36705 = (i__31205__auto___36704 + (1));
i__31205__auto___36704 = G__36705;
continue;
} else {
}
break;
}

var G__36702 = args36700.length;
switch (G__36702) {
case 1:
return sablono.core.text_area36699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36700.length)].join('')));

}
});

sablono.core.text_area36699.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36699.call(null,name,null);
});

sablono.core.text_area36699.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36699.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36699);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36707 = (function sablono$core$label36707(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36707);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36708 = (function sablono$core$submit_button36708(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36708);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36709 = (function sablono$core$reset_button36709(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36709);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36710 = (function sablono$core$form_to36710(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36717 = arguments.length;
var i__31205__auto___36718 = (0);
while(true){
if((i__31205__auto___36718 < len__31204__auto___36717)){
args__31211__auto__.push((arguments[i__31205__auto___36718]));

var G__36719 = (i__31205__auto___36718 + (1));
i__31205__auto___36718 = G__36719;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36710.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.form_to36710.cljs$core$IFn$_invoke$arity$variadic = (function (p__36713,body){
var vec__36714 = p__36713;
var method = cljs.core.nth.call(null,vec__36714,(0),null);
var action = cljs.core.nth.call(null,vec__36714,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36710.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36710.cljs$lang$applyTo = (function (seq36711){
var G__36712 = cljs.core.first.call(null,seq36711);
var seq36711__$1 = cljs.core.next.call(null,seq36711);
return sablono.core.form_to36710.cljs$core$IFn$_invoke$arity$variadic(G__36712,seq36711__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36710);
