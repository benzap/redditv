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
var G__36213__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36210 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36211 = cljs.core.seq.call(null,vec__36210);
var first__36212 = cljs.core.first.call(null,seq__36211);
var seq__36211__$1 = cljs.core.next.call(null,seq__36211);
var tag = first__36212;
var body = seq__36211__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36214__i = 0, G__36214__a = new Array(arguments.length -  0);
while (G__36214__i < G__36214__a.length) {G__36214__a[G__36214__i] = arguments[G__36214__i + 0]; ++G__36214__i;}
  args = new cljs.core.IndexedSeq(G__36214__a,0);
} 
return G__36213__delegate.call(this,args);};
G__36213.cljs$lang$maxFixedArity = 0;
G__36213.cljs$lang$applyTo = (function (arglist__36215){
var args = cljs.core.seq(arglist__36215);
return G__36213__delegate(args);
});
G__36213.cljs$core$IFn$_invoke$arity$variadic = G__36213__delegate;
return G__36213;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30879__auto__ = (function sablono$core$update_arglists_$_iter__36220(s__36221){
return (new cljs.core.LazySeq(null,(function (){
var s__36221__$1 = s__36221;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36221__$1);
if(temp__4657__auto__){
var s__36221__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36221__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36221__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36223 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36222 = (0);
while(true){
if((i__36222 < size__30878__auto__)){
var args = cljs.core._nth.call(null,c__30877__auto__,i__36222);
cljs.core.chunk_append.call(null,b__36223,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36224 = (i__36222 + (1));
i__36222 = G__36224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36223),sablono$core$update_arglists_$_iter__36220.call(null,cljs.core.chunk_rest.call(null,s__36221__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36223),null);
}
} else {
var args = cljs.core.first.call(null,s__36221__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36220.call(null,cljs.core.rest.call(null,s__36221__$2)));
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
var len__31204__auto___36230 = arguments.length;
var i__31205__auto___36231 = (0);
while(true){
if((i__31205__auto___36231 < len__31204__auto___36230)){
args__31211__auto__.push((arguments[i__31205__auto___36231]));

var G__36232 = (i__31205__auto___36231 + (1));
i__31205__auto___36231 = G__36232;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((0) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31212__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30879__auto__ = (function sablono$core$iter__36226(s__36227){
return (new cljs.core.LazySeq(null,(function (){
var s__36227__$1 = s__36227;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36227__$1);
if(temp__4657__auto__){
var s__36227__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36227__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36227__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36229 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36228 = (0);
while(true){
if((i__36228 < size__30878__auto__)){
var style = cljs.core._nth.call(null,c__30877__auto__,i__36228);
cljs.core.chunk_append.call(null,b__36229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36233 = (i__36228 + (1));
i__36228 = G__36233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36229),sablono$core$iter__36226.call(null,cljs.core.chunk_rest.call(null,s__36227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36229),null);
}
} else {
var style = cljs.core.first.call(null,s__36227__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36226.call(null,cljs.core.rest.call(null,s__36227__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq36225){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36225));
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
sablono.core.link_to36234 = (function sablono$core$link_to36234(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36237 = arguments.length;
var i__31205__auto___36238 = (0);
while(true){
if((i__31205__auto___36238 < len__31204__auto___36237)){
args__31211__auto__.push((arguments[i__31205__auto___36238]));

var G__36239 = (i__31205__auto___36238 + (1));
i__31205__auto___36238 = G__36239;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36234.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.link_to36234.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36234.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36234.cljs$lang$applyTo = (function (seq36235){
var G__36236 = cljs.core.first.call(null,seq36235);
var seq36235__$1 = cljs.core.next.call(null,seq36235);
return sablono.core.link_to36234.cljs$core$IFn$_invoke$arity$variadic(G__36236,seq36235__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36234);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36240 = (function sablono$core$mail_to36240(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36247 = arguments.length;
var i__31205__auto___36248 = (0);
while(true){
if((i__31205__auto___36248 < len__31204__auto___36247)){
args__31211__auto__.push((arguments[i__31205__auto___36248]));

var G__36249 = (i__31205__auto___36248 + (1));
i__31205__auto___36248 = G__36249;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36240.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.mail_to36240.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36243){
var vec__36244 = p__36243;
var content = cljs.core.nth.call(null,vec__36244,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__30096__auto__ = content;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36240.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36240.cljs$lang$applyTo = (function (seq36241){
var G__36242 = cljs.core.first.call(null,seq36241);
var seq36241__$1 = cljs.core.next.call(null,seq36241);
return sablono.core.mail_to36240.cljs$core$IFn$_invoke$arity$variadic(G__36242,seq36241__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36240);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36250 = (function sablono$core$unordered_list36250(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30879__auto__ = (function sablono$core$unordered_list36250_$_iter__36255(s__36256){
return (new cljs.core.LazySeq(null,(function (){
var s__36256__$1 = s__36256;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36256__$1);
if(temp__4657__auto__){
var s__36256__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36256__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36256__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36258 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36257 = (0);
while(true){
if((i__36257 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36257);
cljs.core.chunk_append.call(null,b__36258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36259 = (i__36257 + (1));
i__36257 = G__36259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36258),sablono$core$unordered_list36250_$_iter__36255.call(null,cljs.core.chunk_rest.call(null,s__36256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36258),null);
}
} else {
var x = cljs.core.first.call(null,s__36256__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36250_$_iter__36255.call(null,cljs.core.rest.call(null,s__36256__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36250);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36260 = (function sablono$core$ordered_list36260(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30879__auto__ = (function sablono$core$ordered_list36260_$_iter__36265(s__36266){
return (new cljs.core.LazySeq(null,(function (){
var s__36266__$1 = s__36266;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36266__$1);
if(temp__4657__auto__){
var s__36266__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36266__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36266__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36268 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36267 = (0);
while(true){
if((i__36267 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36267);
cljs.core.chunk_append.call(null,b__36268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36269 = (i__36267 + (1));
i__36267 = G__36269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36268),sablono$core$ordered_list36260_$_iter__36265.call(null,cljs.core.chunk_rest.call(null,s__36266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36268),null);
}
} else {
var x = cljs.core.first.call(null,s__36266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36260_$_iter__36265.call(null,cljs.core.rest.call(null,s__36266__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36260);
/**
 * Create an image element.
 */
sablono.core.image36270 = (function sablono$core$image36270(var_args){
var args36271 = [];
var len__31204__auto___36274 = arguments.length;
var i__31205__auto___36275 = (0);
while(true){
if((i__31205__auto___36275 < len__31204__auto___36274)){
args36271.push((arguments[i__31205__auto___36275]));

var G__36276 = (i__31205__auto___36275 + (1));
i__31205__auto___36275 = G__36276;
continue;
} else {
}
break;
}

var G__36273 = args36271.length;
switch (G__36273) {
case 1:
return sablono.core.image36270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36271.length)].join('')));

}
});

sablono.core.image36270.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36270.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36270.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36270);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36278_SHARP_,p2__36279_SHARP_){
return [cljs.core.str(p1__36278_SHARP_),cljs.core.str("["),cljs.core.str(p2__36279_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36280_SHARP_,p2__36281_SHARP_){
return [cljs.core.str(p1__36280_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36281_SHARP_)].join('');
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
sablono.core.color_field36282 = (function sablono$core$color_field36282(var_args){
var args36283 = [];
var len__31204__auto___36350 = arguments.length;
var i__31205__auto___36351 = (0);
while(true){
if((i__31205__auto___36351 < len__31204__auto___36350)){
args36283.push((arguments[i__31205__auto___36351]));

var G__36352 = (i__31205__auto___36351 + (1));
i__31205__auto___36351 = G__36352;
continue;
} else {
}
break;
}

var G__36285 = args36283.length;
switch (G__36285) {
case 1:
return sablono.core.color_field36282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36283.length)].join('')));

}
});

sablono.core.color_field36282.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.color_field36282.call(null,name__36197__auto__,null);
});

sablono.core.color_field36282.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.color_field36282.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36282);

/**
 * Creates a date input field.
 */
sablono.core.date_field36286 = (function sablono$core$date_field36286(var_args){
var args36287 = [];
var len__31204__auto___36354 = arguments.length;
var i__31205__auto___36355 = (0);
while(true){
if((i__31205__auto___36355 < len__31204__auto___36354)){
args36287.push((arguments[i__31205__auto___36355]));

var G__36356 = (i__31205__auto___36355 + (1));
i__31205__auto___36355 = G__36356;
continue;
} else {
}
break;
}

var G__36289 = args36287.length;
switch (G__36289) {
case 1:
return sablono.core.date_field36286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36287.length)].join('')));

}
});

sablono.core.date_field36286.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.date_field36286.call(null,name__36197__auto__,null);
});

sablono.core.date_field36286.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.date_field36286.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36286);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36290 = (function sablono$core$datetime_field36290(var_args){
var args36291 = [];
var len__31204__auto___36358 = arguments.length;
var i__31205__auto___36359 = (0);
while(true){
if((i__31205__auto___36359 < len__31204__auto___36358)){
args36291.push((arguments[i__31205__auto___36359]));

var G__36360 = (i__31205__auto___36359 + (1));
i__31205__auto___36359 = G__36360;
continue;
} else {
}
break;
}

var G__36293 = args36291.length;
switch (G__36293) {
case 1:
return sablono.core.datetime_field36290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36291.length)].join('')));

}
});

sablono.core.datetime_field36290.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.datetime_field36290.call(null,name__36197__auto__,null);
});

sablono.core.datetime_field36290.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.datetime_field36290.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36290);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36294 = (function sablono$core$datetime_local_field36294(var_args){
var args36295 = [];
var len__31204__auto___36362 = arguments.length;
var i__31205__auto___36363 = (0);
while(true){
if((i__31205__auto___36363 < len__31204__auto___36362)){
args36295.push((arguments[i__31205__auto___36363]));

var G__36364 = (i__31205__auto___36363 + (1));
i__31205__auto___36363 = G__36364;
continue;
} else {
}
break;
}

var G__36297 = args36295.length;
switch (G__36297) {
case 1:
return sablono.core.datetime_local_field36294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36295.length)].join('')));

}
});

sablono.core.datetime_local_field36294.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.datetime_local_field36294.call(null,name__36197__auto__,null);
});

sablono.core.datetime_local_field36294.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.datetime_local_field36294.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36294);

/**
 * Creates a email input field.
 */
sablono.core.email_field36298 = (function sablono$core$email_field36298(var_args){
var args36299 = [];
var len__31204__auto___36366 = arguments.length;
var i__31205__auto___36367 = (0);
while(true){
if((i__31205__auto___36367 < len__31204__auto___36366)){
args36299.push((arguments[i__31205__auto___36367]));

var G__36368 = (i__31205__auto___36367 + (1));
i__31205__auto___36367 = G__36368;
continue;
} else {
}
break;
}

var G__36301 = args36299.length;
switch (G__36301) {
case 1:
return sablono.core.email_field36298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36299.length)].join('')));

}
});

sablono.core.email_field36298.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.email_field36298.call(null,name__36197__auto__,null);
});

sablono.core.email_field36298.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.email_field36298.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36298);

/**
 * Creates a file input field.
 */
sablono.core.file_field36302 = (function sablono$core$file_field36302(var_args){
var args36303 = [];
var len__31204__auto___36370 = arguments.length;
var i__31205__auto___36371 = (0);
while(true){
if((i__31205__auto___36371 < len__31204__auto___36370)){
args36303.push((arguments[i__31205__auto___36371]));

var G__36372 = (i__31205__auto___36371 + (1));
i__31205__auto___36371 = G__36372;
continue;
} else {
}
break;
}

var G__36305 = args36303.length;
switch (G__36305) {
case 1:
return sablono.core.file_field36302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36303.length)].join('')));

}
});

sablono.core.file_field36302.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.file_field36302.call(null,name__36197__auto__,null);
});

sablono.core.file_field36302.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.file_field36302.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36302);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36306 = (function sablono$core$hidden_field36306(var_args){
var args36307 = [];
var len__31204__auto___36374 = arguments.length;
var i__31205__auto___36375 = (0);
while(true){
if((i__31205__auto___36375 < len__31204__auto___36374)){
args36307.push((arguments[i__31205__auto___36375]));

var G__36376 = (i__31205__auto___36375 + (1));
i__31205__auto___36375 = G__36376;
continue;
} else {
}
break;
}

var G__36309 = args36307.length;
switch (G__36309) {
case 1:
return sablono.core.hidden_field36306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36307.length)].join('')));

}
});

sablono.core.hidden_field36306.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.hidden_field36306.call(null,name__36197__auto__,null);
});

sablono.core.hidden_field36306.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.hidden_field36306.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36306);

/**
 * Creates a month input field.
 */
sablono.core.month_field36310 = (function sablono$core$month_field36310(var_args){
var args36311 = [];
var len__31204__auto___36378 = arguments.length;
var i__31205__auto___36379 = (0);
while(true){
if((i__31205__auto___36379 < len__31204__auto___36378)){
args36311.push((arguments[i__31205__auto___36379]));

var G__36380 = (i__31205__auto___36379 + (1));
i__31205__auto___36379 = G__36380;
continue;
} else {
}
break;
}

var G__36313 = args36311.length;
switch (G__36313) {
case 1:
return sablono.core.month_field36310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36311.length)].join('')));

}
});

sablono.core.month_field36310.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.month_field36310.call(null,name__36197__auto__,null);
});

sablono.core.month_field36310.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.month_field36310.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36310);

/**
 * Creates a number input field.
 */
sablono.core.number_field36314 = (function sablono$core$number_field36314(var_args){
var args36315 = [];
var len__31204__auto___36382 = arguments.length;
var i__31205__auto___36383 = (0);
while(true){
if((i__31205__auto___36383 < len__31204__auto___36382)){
args36315.push((arguments[i__31205__auto___36383]));

var G__36384 = (i__31205__auto___36383 + (1));
i__31205__auto___36383 = G__36384;
continue;
} else {
}
break;
}

var G__36317 = args36315.length;
switch (G__36317) {
case 1:
return sablono.core.number_field36314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36315.length)].join('')));

}
});

sablono.core.number_field36314.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.number_field36314.call(null,name__36197__auto__,null);
});

sablono.core.number_field36314.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.number_field36314.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36314);

/**
 * Creates a password input field.
 */
sablono.core.password_field36318 = (function sablono$core$password_field36318(var_args){
var args36319 = [];
var len__31204__auto___36386 = arguments.length;
var i__31205__auto___36387 = (0);
while(true){
if((i__31205__auto___36387 < len__31204__auto___36386)){
args36319.push((arguments[i__31205__auto___36387]));

var G__36388 = (i__31205__auto___36387 + (1));
i__31205__auto___36387 = G__36388;
continue;
} else {
}
break;
}

var G__36321 = args36319.length;
switch (G__36321) {
case 1:
return sablono.core.password_field36318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36319.length)].join('')));

}
});

sablono.core.password_field36318.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.password_field36318.call(null,name__36197__auto__,null);
});

sablono.core.password_field36318.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.password_field36318.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36318);

/**
 * Creates a range input field.
 */
sablono.core.range_field36322 = (function sablono$core$range_field36322(var_args){
var args36323 = [];
var len__31204__auto___36390 = arguments.length;
var i__31205__auto___36391 = (0);
while(true){
if((i__31205__auto___36391 < len__31204__auto___36390)){
args36323.push((arguments[i__31205__auto___36391]));

var G__36392 = (i__31205__auto___36391 + (1));
i__31205__auto___36391 = G__36392;
continue;
} else {
}
break;
}

var G__36325 = args36323.length;
switch (G__36325) {
case 1:
return sablono.core.range_field36322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36323.length)].join('')));

}
});

sablono.core.range_field36322.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.range_field36322.call(null,name__36197__auto__,null);
});

sablono.core.range_field36322.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.range_field36322.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36322);

/**
 * Creates a search input field.
 */
sablono.core.search_field36326 = (function sablono$core$search_field36326(var_args){
var args36327 = [];
var len__31204__auto___36394 = arguments.length;
var i__31205__auto___36395 = (0);
while(true){
if((i__31205__auto___36395 < len__31204__auto___36394)){
args36327.push((arguments[i__31205__auto___36395]));

var G__36396 = (i__31205__auto___36395 + (1));
i__31205__auto___36395 = G__36396;
continue;
} else {
}
break;
}

var G__36329 = args36327.length;
switch (G__36329) {
case 1:
return sablono.core.search_field36326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36327.length)].join('')));

}
});

sablono.core.search_field36326.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.search_field36326.call(null,name__36197__auto__,null);
});

sablono.core.search_field36326.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.search_field36326.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36326);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36330 = (function sablono$core$tel_field36330(var_args){
var args36331 = [];
var len__31204__auto___36398 = arguments.length;
var i__31205__auto___36399 = (0);
while(true){
if((i__31205__auto___36399 < len__31204__auto___36398)){
args36331.push((arguments[i__31205__auto___36399]));

var G__36400 = (i__31205__auto___36399 + (1));
i__31205__auto___36399 = G__36400;
continue;
} else {
}
break;
}

var G__36333 = args36331.length;
switch (G__36333) {
case 1:
return sablono.core.tel_field36330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36331.length)].join('')));

}
});

sablono.core.tel_field36330.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.tel_field36330.call(null,name__36197__auto__,null);
});

sablono.core.tel_field36330.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.tel_field36330.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36330);

/**
 * Creates a text input field.
 */
sablono.core.text_field36334 = (function sablono$core$text_field36334(var_args){
var args36335 = [];
var len__31204__auto___36402 = arguments.length;
var i__31205__auto___36403 = (0);
while(true){
if((i__31205__auto___36403 < len__31204__auto___36402)){
args36335.push((arguments[i__31205__auto___36403]));

var G__36404 = (i__31205__auto___36403 + (1));
i__31205__auto___36403 = G__36404;
continue;
} else {
}
break;
}

var G__36337 = args36335.length;
switch (G__36337) {
case 1:
return sablono.core.text_field36334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36335.length)].join('')));

}
});

sablono.core.text_field36334.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.text_field36334.call(null,name__36197__auto__,null);
});

sablono.core.text_field36334.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.text_field36334.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36334);

/**
 * Creates a time input field.
 */
sablono.core.time_field36338 = (function sablono$core$time_field36338(var_args){
var args36339 = [];
var len__31204__auto___36406 = arguments.length;
var i__31205__auto___36407 = (0);
while(true){
if((i__31205__auto___36407 < len__31204__auto___36406)){
args36339.push((arguments[i__31205__auto___36407]));

var G__36408 = (i__31205__auto___36407 + (1));
i__31205__auto___36407 = G__36408;
continue;
} else {
}
break;
}

var G__36341 = args36339.length;
switch (G__36341) {
case 1:
return sablono.core.time_field36338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36339.length)].join('')));

}
});

sablono.core.time_field36338.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.time_field36338.call(null,name__36197__auto__,null);
});

sablono.core.time_field36338.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.time_field36338.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36338);

/**
 * Creates a url input field.
 */
sablono.core.url_field36342 = (function sablono$core$url_field36342(var_args){
var args36343 = [];
var len__31204__auto___36410 = arguments.length;
var i__31205__auto___36411 = (0);
while(true){
if((i__31205__auto___36411 < len__31204__auto___36410)){
args36343.push((arguments[i__31205__auto___36411]));

var G__36412 = (i__31205__auto___36411 + (1));
i__31205__auto___36411 = G__36412;
continue;
} else {
}
break;
}

var G__36345 = args36343.length;
switch (G__36345) {
case 1:
return sablono.core.url_field36342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36343.length)].join('')));

}
});

sablono.core.url_field36342.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.url_field36342.call(null,name__36197__auto__,null);
});

sablono.core.url_field36342.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.url_field36342.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36342);

/**
 * Creates a week input field.
 */
sablono.core.week_field36346 = (function sablono$core$week_field36346(var_args){
var args36347 = [];
var len__31204__auto___36414 = arguments.length;
var i__31205__auto___36415 = (0);
while(true){
if((i__31205__auto___36415 < len__31204__auto___36414)){
args36347.push((arguments[i__31205__auto___36415]));

var G__36416 = (i__31205__auto___36415 + (1));
i__31205__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var G__36349 = args36347.length;
switch (G__36349) {
case 1:
return sablono.core.week_field36346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36347.length)].join('')));

}
});

sablono.core.week_field36346.cljs$core$IFn$_invoke$arity$1 = (function (name__36197__auto__){
return sablono.core.week_field36346.call(null,name__36197__auto__,null);
});

sablono.core.week_field36346.cljs$core$IFn$_invoke$arity$2 = (function (name__36197__auto__,value__36198__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36197__auto__,value__36198__auto__);
});

sablono.core.week_field36346.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36346);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36418 = (function sablono$core$check_box36418(var_args){
var args36419 = [];
var len__31204__auto___36422 = arguments.length;
var i__31205__auto___36423 = (0);
while(true){
if((i__31205__auto___36423 < len__31204__auto___36422)){
args36419.push((arguments[i__31205__auto___36423]));

var G__36424 = (i__31205__auto___36423 + (1));
i__31205__auto___36423 = G__36424;
continue;
} else {
}
break;
}

var G__36421 = args36419.length;
switch (G__36421) {
case 1:
return sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36419.length)].join('')));

}
});

sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36418.call(null,name,null);
});

sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36418.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36418.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36418.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36418);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36426 = (function sablono$core$radio_button36426(var_args){
var args36427 = [];
var len__31204__auto___36430 = arguments.length;
var i__31205__auto___36431 = (0);
while(true){
if((i__31205__auto___36431 < len__31204__auto___36430)){
args36427.push((arguments[i__31205__auto___36431]));

var G__36432 = (i__31205__auto___36431 + (1));
i__31205__auto___36431 = G__36432;
continue;
} else {
}
break;
}

var G__36429 = args36427.length;
switch (G__36429) {
case 1:
return sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36427.length)].join('')));

}
});

sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36426.call(null,group,null);
});

sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36426.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36426.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36426.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36426);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36434 = (function sablono$core$select_options36434(coll){
var iter__30879__auto__ = (function sablono$core$select_options36434_$_iter__36451(s__36452){
return (new cljs.core.LazySeq(null,(function (){
var s__36452__$1 = s__36452;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36452__$1);
if(temp__4657__auto__){
var s__36452__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36452__$2)){
var c__30877__auto__ = cljs.core.chunk_first.call(null,s__36452__$2);
var size__30878__auto__ = cljs.core.count.call(null,c__30877__auto__);
var b__36454 = cljs.core.chunk_buffer.call(null,size__30878__auto__);
if((function (){var i__36453 = (0);
while(true){
if((i__36453 < size__30878__auto__)){
var x = cljs.core._nth.call(null,c__30877__auto__,i__36453);
cljs.core.chunk_append.call(null,b__36454,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36461 = x;
var text = cljs.core.nth.call(null,vec__36461,(0),null);
var val = cljs.core.nth.call(null,vec__36461,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36461,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36434.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__36467 = (i__36453 + (1));
i__36453 = G__36467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36454),sablono$core$select_options36434_$_iter__36451.call(null,cljs.core.chunk_rest.call(null,s__36452__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36454),null);
}
} else {
var x = cljs.core.first.call(null,s__36452__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__36464 = x;
var text = cljs.core.nth.call(null,vec__36464,(0),null);
var val = cljs.core.nth.call(null,vec__36464,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__36464,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options36434.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36434_$_iter__36451.call(null,cljs.core.rest.call(null,s__36452__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36434);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down36468 = (function sablono$core$drop_down36468(var_args){
var args36469 = [];
var len__31204__auto___36472 = arguments.length;
var i__31205__auto___36473 = (0);
while(true){
if((i__31205__auto___36473 < len__31204__auto___36472)){
args36469.push((arguments[i__31205__auto___36473]));

var G__36474 = (i__31205__auto___36473 + (1));
i__31205__auto___36473 = G__36474;
continue;
} else {
}
break;
}

var G__36471 = args36469.length;
switch (G__36471) {
case 2:
return sablono.core.drop_down36468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down36468.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36469.length)].join('')));

}
});

sablono.core.drop_down36468.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down36468.call(null,name,options,null);
});

sablono.core.drop_down36468.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down36468.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down36468);
/**
 * Creates a text area element.
 */
sablono.core.text_area36476 = (function sablono$core$text_area36476(var_args){
var args36477 = [];
var len__31204__auto___36480 = arguments.length;
var i__31205__auto___36481 = (0);
while(true){
if((i__31205__auto___36481 < len__31204__auto___36480)){
args36477.push((arguments[i__31205__auto___36481]));

var G__36482 = (i__31205__auto___36481 + (1));
i__31205__auto___36481 = G__36482;
continue;
} else {
}
break;
}

var G__36479 = args36477.length;
switch (G__36479) {
case 1:
return sablono.core.text_area36476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area36476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36477.length)].join('')));

}
});

sablono.core.text_area36476.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area36476.call(null,name,null);
});

sablono.core.text_area36476.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30096__auto__ = value;
if(cljs.core.truth_(or__30096__auto__)){
return or__30096__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area36476.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area36476);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label36484 = (function sablono$core$label36484(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label36484);
/**
 * Creates a submit button.
 */
sablono.core.submit_button36485 = (function sablono$core$submit_button36485(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button36485);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button36486 = (function sablono$core$reset_button36486(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button36486);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to36487 = (function sablono$core$form_to36487(var_args){
var args__31211__auto__ = [];
var len__31204__auto___36494 = arguments.length;
var i__31205__auto___36495 = (0);
while(true){
if((i__31205__auto___36495 < len__31204__auto___36494)){
args__31211__auto__.push((arguments[i__31205__auto___36495]));

var G__36496 = (i__31205__auto___36495 + (1));
i__31205__auto___36495 = G__36496;
continue;
} else {
}
break;
}

var argseq__31212__auto__ = ((((1) < args__31211__auto__.length))?(new cljs.core.IndexedSeq(args__31211__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to36487.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31212__auto__);
});

sablono.core.form_to36487.cljs$core$IFn$_invoke$arity$variadic = (function (p__36490,body){
var vec__36491 = p__36490;
var method = cljs.core.nth.call(null,vec__36491,(0),null);
var action = cljs.core.nth.call(null,vec__36491,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to36487.cljs$lang$maxFixedArity = (1);

sablono.core.form_to36487.cljs$lang$applyTo = (function (seq36488){
var G__36489 = cljs.core.first.call(null,seq36488);
var seq36488__$1 = cljs.core.next.call(null,seq36488);
return sablono.core.form_to36487.cljs$core$IFn$_invoke$arity$variadic(G__36489,seq36488__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to36487);
