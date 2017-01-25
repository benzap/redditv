// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.player');
goog.require('cljs.core');
goog.require('cljs.core.async');

/**
 * @interface
 */
redditv.player.IPlayer = function(){};

redditv.player.play = (function redditv$player$play(this$){
if((!((this$ == null))) && (!((this$.redditv$player$IPlayer$play$arity$1 == null)))){
return this$.redditv$player$IPlayer$play$arity$1(this$);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (redditv.player.play[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (redditv.player.play["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPlayer.play",this$);
}
}
}
});

redditv.player.pause = (function redditv$player$pause(this$){
if((!((this$ == null))) && (!((this$.redditv$player$IPlayer$pause$arity$1 == null)))){
return this$.redditv$player$IPlayer$pause$arity$1(this$);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (redditv.player.pause[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (redditv.player.pause["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPlayer.pause",this$);
}
}
}
});

redditv.player.dispose = (function redditv$player$dispose(this$){
if((!((this$ == null))) && (!((this$.redditv$player$IPlayer$dispose$arity$1 == null)))){
return this$.redditv$player$IPlayer$dispose$arity$1(this$);
} else {
var x__30890__auto__ = (((this$ == null))?null:this$);
var m__30891__auto__ = (redditv.player.dispose[goog.typeOf(x__30890__auto__)]);
if(!((m__30891__auto__ == null))){
return m__30891__auto__.call(null,this$);
} else {
var m__30891__auto____$1 = (redditv.player.dispose["_"]);
if(!((m__30891__auto____$1 == null))){
return m__30891__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPlayer.dispose",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {redditv.player.IPlayer}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
redditv.player.NullPlayer = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
redditv.player.NullPlayer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30849__auto__,k__30850__auto__){
var self__ = this;
var this__30849__auto____$1 = this;
return cljs.core._lookup.call(null,this__30849__auto____$1,k__30850__auto__,null);
});

redditv.player.NullPlayer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30851__auto__,k41167,else__30852__auto__){
var self__ = this;
var this__30851__auto____$1 = this;
var G__41169 = k41167;
switch (G__41169) {
default:
return cljs.core.get.call(null,self__.__extmap,k41167,else__30852__auto__);

}
});

redditv.player.NullPlayer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30863__auto__,writer__30864__auto__,opts__30865__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var pr_pair__30866__auto__ = ((function (this__30863__auto____$1){
return (function (keyval__30867__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30864__auto__,cljs.core.pr_writer,""," ","",opts__30865__auto__,keyval__30867__auto__);
});})(this__30863__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30864__auto__,pr_pair__30866__auto__,"#redditv.player.NullPlayer{",", ","}",opts__30865__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

redditv.player.NullPlayer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

redditv.player.NullPlayer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41166){
var self__ = this;
var G__41166__$1 = this;
return (new cljs.core.RecordIter((0),G__41166__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

redditv.player.NullPlayer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30847__auto__){
var self__ = this;
var this__30847__auto____$1 = this;
return self__.__meta;
});

redditv.player.NullPlayer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30843__auto__){
var self__ = this;
var this__30843__auto____$1 = this;
return (new redditv.player.NullPlayer(self__.__meta,self__.__extmap,self__.__hash));
});

redditv.player.NullPlayer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30853__auto__){
var self__ = this;
var this__30853__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

redditv.player.NullPlayer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30844__auto__){
var self__ = this;
var this__30844__auto____$1 = this;
var h__30662__auto__ = self__.__hash;
if(!((h__30662__auto__ == null))){
return h__30662__auto__;
} else {
var h__30662__auto____$1 = cljs.core.hash_imap.call(null,this__30844__auto____$1);
self__.__hash = h__30662__auto____$1;

return h__30662__auto____$1;
}
});

redditv.player.NullPlayer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30845__auto__,other__30846__auto__){
var self__ = this;
var this__30845__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30215__auto__ = other__30846__auto__;
if(cljs.core.truth_(and__30215__auto__)){
var and__30215__auto____$1 = (this__30845__auto____$1.constructor === other__30846__auto__.constructor);
if(and__30215__auto____$1){
return cljs.core.equiv_map.call(null,this__30845__auto____$1,other__30846__auto__);
} else {
return and__30215__auto____$1;
}
} else {
return and__30215__auto__;
}
})())){
return true;
} else {
return false;
}
});

redditv.player.NullPlayer.prototype.redditv$player$IPlayer$ = cljs.core.PROTOCOL_SENTINEL;

redditv.player.NullPlayer.prototype.redditv$player$IPlayer$play$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.player.NullPlayer.prototype.redditv$player$IPlayer$pause$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.player.NullPlayer.prototype.redditv$player$IPlayer$dispose$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.player.NullPlayer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30858__auto__,k__30859__auto__){
var self__ = this;
var this__30858__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30859__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30858__auto____$1),self__.__meta),k__30859__auto__);
} else {
return (new redditv.player.NullPlayer(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30859__auto__)),null));
}
});

redditv.player.NullPlayer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30856__auto__,k__30857__auto__,G__41166){
var self__ = this;
var this__30856__auto____$1 = this;
var pred__41170 = cljs.core.keyword_identical_QMARK_;
var expr__41171 = k__30857__auto__;
return (new redditv.player.NullPlayer(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30857__auto__,G__41166),null));
});

redditv.player.NullPlayer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30861__auto__){
var self__ = this;
var this__30861__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

redditv.player.NullPlayer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30848__auto__,G__41166){
var self__ = this;
var this__30848__auto____$1 = this;
return (new redditv.player.NullPlayer(G__41166,self__.__extmap,self__.__hash));
});

redditv.player.NullPlayer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30854__auto__,entry__30855__auto__){
var self__ = this;
var this__30854__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30855__auto__)){
return cljs.core._assoc.call(null,this__30854__auto____$1,cljs.core._nth.call(null,entry__30855__auto__,(0)),cljs.core._nth.call(null,entry__30855__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30854__auto____$1,entry__30855__auto__);
}
});

redditv.player.NullPlayer.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

redditv.player.NullPlayer.cljs$lang$type = true;

redditv.player.NullPlayer.cljs$lang$ctorPrSeq = (function (this__30883__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"redditv.player/NullPlayer");
});

redditv.player.NullPlayer.cljs$lang$ctorPrWriter = (function (this__30883__auto__,writer__30884__auto__){
return cljs.core._write.call(null,writer__30884__auto__,"redditv.player/NullPlayer");
});

redditv.player.__GT_NullPlayer = (function redditv$player$__GT_NullPlayer(){
return (new redditv.player.NullPlayer(null,null,null));
});

redditv.player.map__GT_NullPlayer = (function redditv$player$map__GT_NullPlayer(G__41168){
return (new redditv.player.NullPlayer(null,cljs.core.dissoc.call(null,G__41168),null));
});

redditv.player.create_nullplayer = (function redditv$player$create_nullplayer(){
return redditv.player.__GT_NullPlayer.call(null);
});
