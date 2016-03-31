// Compiled by ClojureScript 1.7.228 {}
goog.provide('redditv.youtube');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.player');
redditv.youtube.regex_youtube_url = /^https?:\/\/www\.youtube\.com\/.*?v=([a-zA-Z0-9_-]+)&?.*/;
redditv.youtube.regex_youtube_shortened_url = /^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)\??.*/;
redditv.youtube.video_url__GT_video_id = (function redditv$youtube$video_url__GT_video_id(url){
if(cljs.core.truth_(cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_url,url))){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_url,url));
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_shortened_url,url))){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_shortened_url,url));
} else {
return null;
}
}
});
redditv.youtube.is_youtube_url_QMARK_ = (function redditv$youtube$is_youtube_url_QMARK_(url){
return cljs.core.boolean$.call(null,(function (){var or__21676__auto__ = cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_url,url);
if(cljs.core.truth_(or__21676__auto__)){
return or__21676__auto__;
} else {
return cljs.core.re_matches.call(null,redditv.youtube.regex_youtube_shortened_url,url);
}
})());
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
redditv.youtube.YoutubePlayer = (function (context,video_url,event_channel,__meta,__extmap,__hash){
this.context = context;
this.video_url = video_url;
this.event_channel = event_channel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
redditv.youtube.YoutubePlayer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22290__auto__,k__22291__auto__){
var self__ = this;
var this__22290__auto____$1 = this;
return cljs.core._lookup.call(null,this__22290__auto____$1,k__22291__auto__,null);
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22292__auto__,k32709,else__22293__auto__){
var self__ = this;
var this__22292__auto____$1 = this;
var G__32711 = (((k32709 instanceof cljs.core.Keyword))?k32709.fqn:null);
switch (G__32711) {
case "context":
return self__.context;

break;
case "video-url":
return self__.video_url;

break;
case "event-channel":
return self__.event_channel;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32709,else__22293__auto__);

}
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22304__auto__,writer__22305__auto__,opts__22306__auto__){
var self__ = this;
var this__22304__auto____$1 = this;
var pr_pair__22307__auto__ = ((function (this__22304__auto____$1){
return (function (keyval__22308__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__22305__auto__,cljs.core.pr_writer,""," ","",opts__22306__auto__,keyval__22308__auto__);
});})(this__22304__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__22305__auto__,pr_pair__22307__auto__,"#redditv.youtube.YoutubePlayer{",", ","}",opts__22306__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"video-url","video-url",1636122700),self__.video_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),self__.event_channel],null))], null),self__.__extmap));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IIterable$ = true;

redditv.youtube.YoutubePlayer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32708){
var self__ = this;
var G__32708__$1 = this;
return (new cljs.core.RecordIter((0),G__32708__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"video-url","video-url",1636122700),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22288__auto__){
var self__ = this;
var this__22288__auto____$1 = this;
return self__.__meta;
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22284__auto__){
var self__ = this;
var this__22284__auto____$1 = this;
return (new redditv.youtube.YoutubePlayer(self__.context,self__.video_url,self__.event_channel,self__.__meta,self__.__extmap,self__.__hash));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22294__auto__){
var self__ = this;
var this__22294__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22285__auto__){
var self__ = this;
var this__22285__auto____$1 = this;
var h__22111__auto__ = self__.__hash;
if(!((h__22111__auto__ == null))){
return h__22111__auto__;
} else {
var h__22111__auto____$1 = cljs.core.hash_imap.call(null,this__22285__auto____$1);
self__.__hash = h__22111__auto____$1;

return h__22111__auto____$1;
}
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__22286__auto__,other__22287__auto__){
var self__ = this;
var this__22286__auto____$1 = this;
if(cljs.core.truth_((function (){var and__21664__auto__ = other__22287__auto__;
if(cljs.core.truth_(and__21664__auto__)){
var and__21664__auto____$1 = (this__22286__auto____$1.constructor === other__22287__auto__.constructor);
if(and__21664__auto____$1){
return cljs.core.equiv_map.call(null,this__22286__auto____$1,other__22287__auto__);
} else {
return and__21664__auto____$1;
}
} else {
return and__21664__auto__;
}
})())){
return true;
} else {
return false;
}
});

redditv.youtube.YoutubePlayer.prototype.redditv$player$IPlayer$ = true;

redditv.youtube.YoutubePlayer.prototype.redditv$player$IPlayer$play$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.youtube.YoutubePlayer.prototype.redditv$player$IPlayer$pause$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.youtube.YoutubePlayer.prototype.redditv$player$IPlayer$dispose$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.context.destroy();
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22299__auto__,k__22300__auto__){
var self__ = this;
var this__22299__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"video-url","video-url",1636122700),null,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__22300__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__22299__auto____$1),self__.__meta),k__22300__auto__);
} else {
return (new redditv.youtube.YoutubePlayer(self__.context,self__.video_url,self__.event_channel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__22300__auto__)),null));
}
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22297__auto__,k__22298__auto__,G__32708){
var self__ = this;
var this__22297__auto____$1 = this;
var pred__32712 = cljs.core.keyword_identical_QMARK_;
var expr__32713 = k__22298__auto__;
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__32713))){
return (new redditv.youtube.YoutubePlayer(G__32708,self__.video_url,self__.event_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"video-url","video-url",1636122700),expr__32713))){
return (new redditv.youtube.YoutubePlayer(self__.context,G__32708,self__.event_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32712.call(null,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),expr__32713))){
return (new redditv.youtube.YoutubePlayer(self__.context,self__.video_url,G__32708,self__.__meta,self__.__extmap,null));
} else {
return (new redditv.youtube.YoutubePlayer(self__.context,self__.video_url,self__.event_channel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__22298__auto__,G__32708),null));
}
}
}
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22302__auto__){
var self__ = this;
var this__22302__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"video-url","video-url",1636122700),self__.video_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),self__.event_channel],null))], null),self__.__extmap));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22289__auto__,G__32708){
var self__ = this;
var this__22289__auto____$1 = this;
return (new redditv.youtube.YoutubePlayer(self__.context,self__.video_url,self__.event_channel,G__32708,self__.__extmap,self__.__hash));
});

redditv.youtube.YoutubePlayer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22295__auto__,entry__22296__auto__){
var self__ = this;
var this__22295__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__22296__auto__)){
return cljs.core._assoc.call(null,this__22295__auto____$1,cljs.core._nth.call(null,entry__22296__auto__,(0)),cljs.core._nth.call(null,entry__22296__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__22295__auto____$1,entry__22296__auto__);
}
});

redditv.youtube.YoutubePlayer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"video-url","video-url",-1018313069,null),new cljs.core.Symbol(null,"event-channel","event-channel",-1438879655,null)], null);
});

redditv.youtube.YoutubePlayer.cljs$lang$type = true;

redditv.youtube.YoutubePlayer.cljs$lang$ctorPrSeq = (function (this__22324__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"redditv.youtube/YoutubePlayer");
});

redditv.youtube.YoutubePlayer.cljs$lang$ctorPrWriter = (function (this__22324__auto__,writer__22325__auto__){
return cljs.core._write.call(null,writer__22325__auto__,"redditv.youtube/YoutubePlayer");
});

redditv.youtube.__GT_YoutubePlayer = (function redditv$youtube$__GT_YoutubePlayer(context,video_url,event_channel){
return (new redditv.youtube.YoutubePlayer(context,video_url,event_channel,null,null,null));
});

redditv.youtube.map__GT_YoutubePlayer = (function redditv$youtube$map__GT_YoutubePlayer(G__32710){
return (new redditv.youtube.YoutubePlayer(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"video-url","video-url",1636122700).cljs$core$IFn$_invoke$arity$1(G__32710),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114).cljs$core$IFn$_invoke$arity$1(G__32710),null,cljs.core.dissoc.call(null,G__32710,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"video-url","video-url",1636122700),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114)),null));
});

redditv.youtube.create_youtubeplayer = (function redditv$youtube$create_youtubeplayer(dom_id,video_url,event_channel){
var context = (new YT.Player(dom_id,{"videoId": redditv.youtube.video_url__GT_video_id.call(null,video_url), "playerVars": {"autoplay": (1)}, "events": {"onStateChange": (function (event){
var video_state = event.data;
var G__32717 = video_state;
switch (G__32717) {
case (-1):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018)], null));

break;
case (0):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-ended","video-ended",1757171761)], null));

break;
case (1):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-playing","video-playing",1131110239)], null));

break;
case (2):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-paused","video-paused",1262325411)], null));

break;
case (3):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113)], null));

break;
case (5):
return cljs.core.async.put_BANG_.call(null,event_channel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864)], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(video_state)].join('')));

}
})}}));
return redditv.youtube.__GT_YoutubePlayer.call(null,context,video_url,event_channel);
});
goog.exportSymbol('redditv.youtube.create_youtubeplayer', redditv.youtube.create_youtubeplayer);
