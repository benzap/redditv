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
var G__40158__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__40155 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__40156 = cljs.core.seq.call(null,vec__40155);
var first__40157 = cljs.core.first.call(null,seq__40156);
var seq__40156__$1 = cljs.core.next.call(null,seq__40156);
var tag = first__40157;
var body = seq__40156__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__40158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40159__i = 0, G__40159__a = new Array(arguments.length -  0);
while (G__40159__i < G__40159__a.length) {G__40159__a[G__40159__i] = arguments[G__40159__i + 0]; ++G__40159__i;}
  args = new cljs.core.IndexedSeq(G__40159__a,0);
} 
return G__40158__delegate.call(this,args);};
G__40158.cljs$lang$maxFixedArity = 0;
G__40158.cljs$lang$applyTo = (function (arglist__40160){
var args = cljs.core.seq(arglist__40160);
return G__40158__delegate(args);
});
G__40158.cljs$core$IFn$_invoke$arity$variadic = G__40158__delegate;
return G__40158;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30879__auto__ = (function sablono$core$update_arglists_$_iter__40165(s__40166){
return (new cljs.core.LazySeq(null,(function (){
var s__40166__$1 = s__40166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40166__$1);
if(temp__4657__auto__){
var s__40166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40166__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__40166__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__40168 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__40167 = (0);
while(true){
if((i__40167 < size__30878__auto__)){
var args = cljs.core._nth.call(null,c__30877__auto__,i__40167);
cljs.core.chunk_append.call(null,b__40168,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__40169 = (i__40167 + (1));
i__40167 = G__40169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40168),sablono$core$update_arglists_$_iter__40165.call(null,cljs.core.chunk_rest.call(null,s__40166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40168),null);
}
} else {
var args = cljs.core.first.call(null,s__40166__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__40165.call(null,cljs.core.rest.call(null,s__40166__$2)));
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
var len__31204__auto___40175 = arguments.length;
var i__31205__auto___40176 = (0);
while(true){
if((i__31205__auto___40176 < len__31204__auto___40175)){
args__31211__auto__.push((arguments[i__31205__auto___40176]));

var G__40177 = (i__31205__auto___40176 + (1));
i__31205__auto___40176 = G__40177;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30879__auto__ = (function sablono$core$iter__40171(s__40172){
return (new cljs.core.LazySeq(null,(function (){
var s__40172__$1 = s__40172;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40172__$1);
if(temp__4657__auto__){
var s__40172__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40172__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__40172__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__40174 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__40173 = (0);
while(true){
if((i__40173 < size__30878__auto__)){
var style = cljs.core._nth.call(null,c__30877__auto__,i__40173);
cljs.core.chunk_append.call(null,b__40174,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__40178 = (i__40173 + (1));
i__40173 = G__40178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40174),sablono$core$iter__40171.call(null,cljs.core.chunk_rest.call(null,s__40172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40174),null);
}
} else {
var style = cljs.core.first.call(null,s__40172__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__40171.call(null,cljs.core.rest.call(null,s__40172__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq40170){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40170));
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
sablono.core.link_to40179 = (function sablono$core$link_to40179(var_args){
var args__31211__auto__ = [];
var len__31204__auto___40182 = arguments.length;
var i__31205__auto___40183 = (0);
while(true){
if((i__31205__auto___40183 < len__31204__auto___40182)){
args__31211__auto__.push((arguments[i__31205__auto___40183]));

var G__40184 = (i__31205__auto___40183 + (1));
i__31205__auto___40183 = G__40184;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to40179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.link_to40179.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to40179.cljs$lang$maxFixedArity = (1);

sablono.core.link_to40179.cljs$lang$applyTo = (function (seq40180){
var G__40181 = cljs.core.first.call(null,seq40180);
var seq40180__$1 = cljs.core.next.call(null,seq40180);
return sablono.core.link_to40179.cljs$core$IFn$_invoke$arity$variadic(G__40181,seq40180__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to40179);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to40185 = (function sablono$core$mail_to40185(var_args){
var args__31211__auto__ = [];
var len__31204__auto___40192 = arguments.length;
var i__31205__auto___40193 = (0);
while(true){
if((i__31205__auto___40193 < len__31204__auto___40192)){
args__31211__auto__.push((arguments[i__31205__auto___40193]));

var G__40194 = (i__31205__auto___40193 + (1));
i__31205__auto___40193 = G__40194;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to40185.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.mail_to40185.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__40188){
var vec__40189 = p__40188;
var content = cljs.core.nth.call(null,vec__40189,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__30096__auto__ = content;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to40185.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to40185.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first.call(null,seq40186);
var seq40186__$1 = cljs.core.next.call(null,seq40186);
return sablono.core.mail_to40185.cljs$core$IFn$_invoke$arity$variadic(G__40187,seq40186__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to40185);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list40195 = (function sablono$core$unordered_list40195(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30879__auto__ = (function sablono$core$unordered_list40195_$_iter__40200(s__40201){
return (new cljs.core.LazySeq(null,(function (){
var s__40201__$1 = s__40201;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40201__$1);
if(temp__4657__auto__){
var s__40201__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40201__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__40201__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__40203 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__40202 = (0);
while(true){
if((i__40202 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__40202);
cljs.core.chunk_append.call(null,b__40203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40204 = (i__40202 + (1));
i__40202 = G__40204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40203),sablono$core$unordered_list40195_$_iter__40200.call(null,cljs.core.chunk_rest.call(null,s__40201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40203),null);
}
} else {
var x = cljs.core.first.call(null,s__40201__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list40195_$_iter__40200.call(null,cljs.core.rest.call(null,s__40201__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list40195);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list40205 = (function sablono$core$ordered_list40205(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30879__auto__ = (function sablono$core$ordered_list40205_$_iter__40210(s__40211){
return (new cljs.core.LazySeq(null,(function (){
var s__40211__$1 = s__40211;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40211__$1);
if(temp__4657__auto__){
var s__40211__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40211__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__40211__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__40213 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__40212 = (0);
while(true){
if((i__40212 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__40212);
cljs.core.chunk_append.call(null,b__40213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__40214 = (i__40212 + (1));
i__40212 = G__40214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40213),sablono$core$ordered_list40205_$_iter__40210.call(null,cljs.core.chunk_rest.call(null,s__40211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40213),null);
}
} else {
var x = cljs.core.first.call(null,s__40211__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list40205_$_iter__40210.call(null,cljs.core.rest.call(null,s__40211__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list40205);
/**
 * Create an image element.
 */
sablono.core.image40215 = (function sablono$core$image40215(var_args){
var args40216 = [];
var len__31204__auto___40219 = arguments.length;
var i__31205__auto___40220 = (0);
while(true){
if((i__31205__auto___40220 < len__31204__auto___40219)){
args40216.push((arguments[i__31205__auto___40220]));

var G__40221 = (i__31205__auto___40220 + (1));
i__31205__auto___40220 = G__40221;
continue;
} else {
}
break;
}

var G__40218 = args40216.length;
switch (G__40218) {
case 1:
return sablono.core.image40215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image40215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40216.length)].join('')));

}
});

sablono.core.image40215.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image40215.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image40215.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image40215);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__40223_SHARP_,p2__40224_SHARP_){
return [cljs.core.str(p1__40223_SHARP_),cljs.core.str("["),cljs.core.str(p2__40224_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__40225_SHARP_,p2__40226_SHARP_){
return [cljs.core.str(p1__40225_SHARP_),cljs.core.str("-"),cljs.core.str(p2__40226_SHARP_)].join('');
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
sablono.core.color_field40227 = (function sablono$core$color_field40227(var_args){
var args40228 = [];
var len__31204__auto___40295 = arguments.length;
var i__31205__auto___40296 = (0);
while(true){
if((i__31205__auto___40296 < len__31204__auto___40295)){
args40228.push((arguments[i__31205__auto___40296]));

var G__40297 = (i__31205__auto___40296 + (1));
i__31205__auto___40296 = G__40297;
continue;
} else {
}
break;
}

var G__40230 = args40228.length;
switch (G__40230) {
case 1:
return sablono.core.color_field40227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field40227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40228.length)].join('')));

}
});

sablono.core.color_field40227.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.color_field40227.call(null,name__40142__auto__,null);
});

sablono.core.color_field40227.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.color_field40227.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field40227);

/**
 * Creates a date input field.
 */
sablono.core.date_field40231 = (function sablono$core$date_field40231(var_args){
var args40232 = [];
var len__31204__auto___40299 = arguments.length;
var i__31205__auto___40300 = (0);
while(true){
if((i__31205__auto___40300 < len__31204__auto___40299)){
args40232.push((arguments[i__31205__auto___40300]));

var G__40301 = (i__31205__auto___40300 + (1));
i__31205__auto___40300 = G__40301;
continue;
} else {
}
break;
}

var G__40234 = args40232.length;
switch (G__40234) {
case 1:
return sablono.core.date_field40231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field40231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40232.length)].join('')));

}
});

sablono.core.date_field40231.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.date_field40231.call(null,name__40142__auto__,null);
});

sablono.core.date_field40231.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.date_field40231.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field40231);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field40235 = (function sablono$core$datetime_field40235(var_args){
var args40236 = [];
var len__31204__auto___40303 = arguments.length;
var i__31205__auto___40304 = (0);
while(true){
if((i__31205__auto___40304 < len__31204__auto___40303)){
args40236.push((arguments[i__31205__auto___40304]));

var G__40305 = (i__31205__auto___40304 + (1));
i__31205__auto___40304 = G__40305;
continue;
} else {
}
break;
}

var G__40238 = args40236.length;
switch (G__40238) {
case 1:
return sablono.core.datetime_field40235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field40235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40236.length)].join('')));

}
});

sablono.core.datetime_field40235.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.datetime_field40235.call(null,name__40142__auto__,null);
});

sablono.core.datetime_field40235.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.datetime_field40235.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field40235);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field40239 = (function sablono$core$datetime_local_field40239(var_args){
var args40240 = [];
var len__31204__auto___40307 = arguments.length;
var i__31205__auto___40308 = (0);
while(true){
if((i__31205__auto___40308 < len__31204__auto___40307)){
args40240.push((arguments[i__31205__auto___40308]));

var G__40309 = (i__31205__auto___40308 + (1));
i__31205__auto___40308 = G__40309;
continue;
} else {
}
break;
}

var G__40242 = args40240.length;
switch (G__40242) {
case 1:
return sablono.core.datetime_local_field40239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field40239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40240.length)].join('')));

}
});

sablono.core.datetime_local_field40239.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.datetime_local_field40239.call(null,name__40142__auto__,null);
});

sablono.core.datetime_local_field40239.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.datetime_local_field40239.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field40239);

/**
 * Creates a email input field.
 */
sablono.core.email_field40243 = (function sablono$core$email_field40243(var_args){
var args40244 = [];
var len__31204__auto___40311 = arguments.length;
var i__31205__auto___40312 = (0);
while(true){
if((i__31205__auto___40312 < len__31204__auto___40311)){
args40244.push((arguments[i__31205__auto___40312]));

var G__40313 = (i__31205__auto___40312 + (1));
i__31205__auto___40312 = G__40313;
continue;
} else {
}
break;
}

var G__40246 = args40244.length;
switch (G__40246) {
case 1:
return sablono.core.email_field40243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field40243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40244.length)].join('')));

}
});

sablono.core.email_field40243.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.email_field40243.call(null,name__40142__auto__,null);
});

sablono.core.email_field40243.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.email_field40243.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field40243);

/**
 * Creates a file input field.
 */
sablono.core.file_field40247 = (function sablono$core$file_field40247(var_args){
var args40248 = [];
var len__31204__auto___40315 = arguments.length;
var i__31205__auto___40316 = (0);
while(true){
if((i__31205__auto___40316 < len__31204__auto___40315)){
args40248.push((arguments[i__31205__auto___40316]));

var G__40317 = (i__31205__auto___40316 + (1));
i__31205__auto___40316 = G__40317;
continue;
} else {
}
break;
}

var G__40250 = args40248.length;
switch (G__40250) {
case 1:
return sablono.core.file_field40247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field40247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40248.length)].join('')));

}
});

sablono.core.file_field40247.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.file_field40247.call(null,name__40142__auto__,null);
});

sablono.core.file_field40247.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.file_field40247.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field40247);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field40251 = (function sablono$core$hidden_field40251(var_args){
var args40252 = [];
var len__31204__auto___40319 = arguments.length;
var i__31205__auto___40320 = (0);
while(true){
if((i__31205__auto___40320 < len__31204__auto___40319)){
args40252.push((arguments[i__31205__auto___40320]));

var G__40321 = (i__31205__auto___40320 + (1));
i__31205__auto___40320 = G__40321;
continue;
} else {
}
break;
}

var G__40254 = args40252.length;
switch (G__40254) {
case 1:
return sablono.core.hidden_field40251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field40251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40252.length)].join('')));

}
});

sablono.core.hidden_field40251.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.hidden_field40251.call(null,name__40142__auto__,null);
});

sablono.core.hidden_field40251.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.hidden_field40251.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field40251);

/**
 * Creates a month input field.
 */
sablono.core.month_field40255 = (function sablono$core$month_field40255(var_args){
var args40256 = [];
var len__31204__auto___40323 = arguments.length;
var i__31205__auto___40324 = (0);
while(true){
if((i__31205__auto___40324 < len__31204__auto___40323)){
args40256.push((arguments[i__31205__auto___40324]));

var G__40325 = (i__31205__auto___40324 + (1));
i__31205__auto___40324 = G__40325;
continue;
} else {
}
break;
}

var G__40258 = args40256.length;
switch (G__40258) {
case 1:
return sablono.core.month_field40255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field40255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40256.length)].join('')));

}
});

sablono.core.month_field40255.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.month_field40255.call(null,name__40142__auto__,null);
});

sablono.core.month_field40255.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.month_field40255.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field40255);

/**
 * Creates a number input field.
 */
sablono.core.number_field40259 = (function sablono$core$number_field40259(var_args){
var args40260 = [];
var len__31204__auto___40327 = arguments.length;
var i__31205__auto___40328 = (0);
while(true){
if((i__31205__auto___40328 < len__31204__auto___40327)){
args40260.push((arguments[i__31205__auto___40328]));

var G__40329 = (i__31205__auto___40328 + (1));
i__31205__auto___40328 = G__40329;
continue;
} else {
}
break;
}

var G__40262 = args40260.length;
switch (G__40262) {
case 1:
return sablono.core.number_field40259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field40259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40260.length)].join('')));

}
});

sablono.core.number_field40259.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.number_field40259.call(null,name__40142__auto__,null);
});

sablono.core.number_field40259.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.number_field40259.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field40259);

/**
 * Creates a password input field.
 */
sablono.core.password_field40263 = (function sablono$core$password_field40263(var_args){
var args40264 = [];
var len__31204__auto___40331 = arguments.length;
var i__31205__auto___40332 = (0);
while(true){
if((i__31205__auto___40332 < len__31204__auto___40331)){
args40264.push((arguments[i__31205__auto___40332]));

var G__40333 = (i__31205__auto___40332 + (1));
i__31205__auto___40332 = G__40333;
continue;
} else {
}
break;
}

var G__40266 = args40264.length;
switch (G__40266) {
case 1:
return sablono.core.password_field40263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field40263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40264.length)].join('')));

}
});

sablono.core.password_field40263.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.password_field40263.call(null,name__40142__auto__,null);
});

sablono.core.password_field40263.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.password_field40263.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field40263);

/**
 * Creates a range input field.
 */
sablono.core.range_field40267 = (function sablono$core$range_field40267(var_args){
var args40268 = [];
var len__31204__auto___40335 = arguments.length;
var i__31205__auto___40336 = (0);
while(true){
if((i__31205__auto___40336 < len__31204__auto___40335)){
args40268.push((arguments[i__31205__auto___40336]));

var G__40337 = (i__31205__auto___40336 + (1));
i__31205__auto___40336 = G__40337;
continue;
} else {
}
break;
}

var G__40270 = args40268.length;
switch (G__40270) {
case 1:
return sablono.core.range_field40267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field40267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40268.length)].join('')));

}
});

sablono.core.range_field40267.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.range_field40267.call(null,name__40142__auto__,null);
});

sablono.core.range_field40267.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.range_field40267.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field40267);

/**
 * Creates a search input field.
 */
sablono.core.search_field40271 = (function sablono$core$search_field40271(var_args){
var args40272 = [];
var len__31204__auto___40339 = arguments.length;
var i__31205__auto___40340 = (0);
while(true){
if((i__31205__auto___40340 < len__31204__auto___40339)){
args40272.push((arguments[i__31205__auto___40340]));

var G__40341 = (i__31205__auto___40340 + (1));
i__31205__auto___40340 = G__40341;
continue;
} else {
}
break;
}

var G__40274 = args40272.length;
switch (G__40274) {
case 1:
return sablono.core.search_field40271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field40271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40272.length)].join('')));

}
});

sablono.core.search_field40271.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.search_field40271.call(null,name__40142__auto__,null);
});

sablono.core.search_field40271.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.search_field40271.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field40271);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field40275 = (function sablono$core$tel_field40275(var_args){
var args40276 = [];
var len__31204__auto___40343 = arguments.length;
var i__31205__auto___40344 = (0);
while(true){
if((i__31205__auto___40344 < len__31204__auto___40343)){
args40276.push((arguments[i__31205__auto___40344]));

var G__40345 = (i__31205__auto___40344 + (1));
i__31205__auto___40344 = G__40345;
continue;
} else {
}
break;
}

var G__40278 = args40276.length;
switch (G__40278) {
case 1:
return sablono.core.tel_field40275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field40275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40276.length)].join('')));

}
});

sablono.core.tel_field40275.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.tel_field40275.call(null,name__40142__auto__,null);
});

sablono.core.tel_field40275.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.tel_field40275.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field40275);

/**
 * Creates a text input field.
 */
sablono.core.text_field40279 = (function sablono$core$text_field40279(var_args){
var args40280 = [];
var len__31204__auto___40347 = arguments.length;
var i__31205__auto___40348 = (0);
while(true){
if((i__31205__auto___40348 < len__31204__auto___40347)){
args40280.push((arguments[i__31205__auto___40348]));

var G__40349 = (i__31205__auto___40348 + (1));
i__31205__auto___40348 = G__40349;
continue;
} else {
}
break;
}

var G__40282 = args40280.length;
switch (G__40282) {
case 1:
return sablono.core.text_field40279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field40279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40280.length)].join('')));

}
});

sablono.core.text_field40279.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.text_field40279.call(null,name__40142__auto__,null);
});

sablono.core.text_field40279.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.text_field40279.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field40279);

/**
 * Creates a time input field.
 */
sablono.core.time_field40283 = (function sablono$core$time_field40283(var_args){
var args40284 = [];
var len__31204__auto___40351 = arguments.length;
var i__31205__auto___40352 = (0);
while(true){
if((i__31205__auto___40352 < len__31204__auto___40351)){
args40284.push((arguments[i__31205__auto___40352]));

var G__40353 = (i__31205__auto___40352 + (1));
i__31205__auto___40352 = G__40353;
continue;
} else {
}
break;
}

var G__40286 = args40284.length;
switch (G__40286) {
case 1:
return sablono.core.time_field40283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field40283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40284.length)].join('')));

}
});

sablono.core.time_field40283.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.time_field40283.call(null,name__40142__auto__,null);
});

sablono.core.time_field40283.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.time_field40283.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field40283);

/**
 * Creates a url input field.
 */
sablono.core.url_field40287 = (function sablono$core$url_field40287(var_args){
var args40288 = [];
var len__31204__auto___40355 = arguments.length;
var i__31205__auto___40356 = (0);
while(true){
if((i__31205__auto___40356 < len__31204__auto___40355)){
args40288.push((arguments[i__31205__auto___40356]));

var G__40357 = (i__31205__auto___40356 + (1));
i__31205__auto___40356 = G__40357;
continue;
} else {
}
break;
}

var G__40290 = args40288.length;
switch (G__40290) {
case 1:
return sablono.core.url_field40287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field40287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40288.length)].join('')));

}
});

sablono.core.url_field40287.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.url_field40287.call(null,name__40142__auto__,null);
});

sablono.core.url_field40287.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.url_field40287.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field40287);

/**
 * Creates a week input field.
 */
sablono.core.week_field40291 = (function sablono$core$week_field40291(var_args){
var args40292 = [];
var len__31204__auto___40359 = arguments.length;
var i__31205__auto___40360 = (0);
while(true){
if((i__31205__auto___40360 < len__31204__auto___40359)){
args40292.push((arguments[i__31205__auto___40360]));

var G__40361 = (i__31205__auto___40360 + (1));
i__31205__auto___40360 = G__40361;
continue;
} else {
}
break;
}

var G__40294 = args40292.length;
switch (G__40294) {
case 1:
return sablono.core.week_field40291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field40291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40292.length)].join('')));

}
});

sablono.core.week_field40291.cljs$core$IFn$_invoke$arity$1 = (function (name__40142__auto__){
return sablono.core.week_field40291.call(null,name__40142__auto__,null);
});

sablono.core.week_field40291.cljs$core$IFn$_invoke$arity$2 = (function (name__40142__auto__,value__40143__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__40142__auto__,value__40143__auto__);
});

sablono.core.week_field40291.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field40291);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box40363 = (function sablono$core$check_box40363(var_args){
var args40364 = [];
var len__31204__auto___40367 = arguments.length;
var i__31205__auto___40368 = (0);
while(true){
if((i__31205__auto___40368 < len__31204__auto___40367)){
args40364.push((arguments[i__31205__auto___40368]));

var G__40369 = (i__31205__auto___40368 + (1));
i__31205__auto___40368 = G__40369;
continue;
} else {
}
break;
}

var G__40366 = args40364.length;
switch (G__40366) {
case 1:
return sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40364.length)].join('')));

}
});

sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box40363.call(null,name,null);
});

sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box40363.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box40363.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box40363.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box40363);
/**
 * Creates a radio button.
 */
sablono.core.radio_button40371 = (function sablono$core$radio_button40371(var_args){
var args40372 = [];
var len__31204__auto___40375 = arguments.length;
var i__31205__auto___40376 = (0);
while(true){
if((i__31205__auto___40376 < len__31204__auto___40375)){
args40372.push((arguments[i__31205__auto___40376]));

var G__40377 = (i__31205__auto___40376 + (1));
i__31205__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var G__40374 = args40372.length;
switch (G__40374) {
case 1:
return sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40372.length)].join('')));

}
});

sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button40371.call(null,group,null);
});

sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button40371.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button40371.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button40371.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button40371);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options40379 = (function sablono$core$select_options40379(coll){
var iter__30879__auto__ = (function sablono$core$select_options40379_$_iter__40396(s__40397){
return (new cljs.core.LazySeq(null,(function (){
var s__40397__$1 = s__40397;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40397__$1);
if(temp__4657__auto__){
var s__40397__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40397__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__40397__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__40399 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__40398 = (0);
while(true){
if((i__40398 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__40398);
cljs.core.chunk_append.call(null,b__40399,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40406 = x;
var text = cljs.core.nth.call(null,vec__40406,(0),null);
var val = cljs.core.nth.call(null,vec__40406,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40406,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40379.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__40412 = (i__40398 + (1));
i__40398 = G__40412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40399),sablono$core$select_options40379_$_iter__40396.call(null,cljs.core.chunk_rest.call(null,s__40397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40399),null);
}
} else {
var x = cljs.core.first.call(null,s__40397__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__40409 = x;
var text = cljs.core.nth.call(null,vec__40409,(0),null);
var val = cljs.core.nth.call(null,vec__40409,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__40409,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options40379.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options40379_$_iter__40396.call(null,cljs.core.rest.call(null,s__40397__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options40379);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down40413 = (function sablono$core$drop_down40413(var_args){
var args40414 = [];
var len__31204__auto___40417 = arguments.length;
var i__31205__auto___40418 = (0);
while(true){
if((i__31205__auto___40418 < len__31204__auto___40417)){
args40414.push((arguments[i__31205__auto___40418]));

var G__40419 = (i__31205__auto___40418 + (1));
i__31205__auto___40418 = G__40419;
continue;
} else {
}
break;
}

var G__40416 = args40414.length;
switch (G__40416) {
case 2:
return sablono.core.drop_down40413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down40413.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40414.length)].join('')));

}
});

sablono.core.drop_down40413.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down40413.call(null,name,options,null);
});

sablono.core.drop_down40413.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down40413.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down40413);
/**
 * Creates a text area element.
 */
sablono.core.text_area40421 = (function sablono$core$text_area40421(var_args){
var args40422 = [];
var len__31204__auto___40425 = arguments.length;
var i__31205__auto___40426 = (0);
while(true){
if((i__31205__auto___40426 < len__31204__auto___40425)){
args40422.push((arguments[i__31205__auto___40426]));

var G__40427 = (i__31205__auto___40426 + (1));
i__31205__auto___40426 = G__40427;
continue;
} else {
}
break;
}

var G__40424 = args40422.length;
switch (G__40424) {
case 1:
return sablono.core.text_area40421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area40421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40422.length)].join('')));

}
});

sablono.core.text_area40421.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area40421.call(null,name,null);
});

sablono.core.text_area40421.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area40421.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area40421);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label40429 = (function sablono$core$label40429(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label40429);
/**
 * Creates a submit button.
 */
sablono.core.submit_button40430 = (function sablono$core$submit_button40430(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button40430);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button40431 = (function sablono$core$reset_button40431(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button40431);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to40432 = (function sablono$core$form_to40432(var_args){
var args__31211__auto__ = [];
var len__31204__auto___40439 = arguments.length;
var i__31205__auto___40440 = (0);
while(true){
if((i__31205__auto___40440 < len__31204__auto___40439)){
args__31211__auto__.push((arguments[i__31205__auto___40440]));

var G__40441 = (i__31205__auto___40440 + (1));
i__31205__auto___40440 = G__40441;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to40432.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.form_to40432.cljs$core$IFn$_invoke$arity$variadic = (function (p__40435,body){
var vec__40436 = p__40435;
var method = cljs.core.nth.call(null,vec__40436,(0),null);
var action = cljs.core.nth.call(null,vec__40436,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to40432.cljs$lang$maxFixedArity = (1);

sablono.core.form_to40432.cljs$lang$applyTo = (function (seq40433){
var G__40434 = cljs.core.first.call(null,seq40433);
var seq40433__$1 = cljs.core.next.call(null,seq40433);
return sablono.core.form_to40432.cljs$core$IFn$_invoke$arity$variadic(G__40434,seq40433__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to40432);
