// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.vimeo');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('redditv.player');
goog.require('redditv.events');
redditv.vimeo.regex_vimeo_url = /https?:\/\/vimeo.com\/([0-9]+)&?.*/;
redditv.vimeo.ex_vimeo_url = "https://vimeo.com/201783721";
redditv.vimeo.is_vimeo_url_QMARK_ = (function redditv$vimeo$is_vimeo_url_QMARK_(url){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,redditv.vimeo.regex_vimeo_url,url));
});
redditv.vimeo.video_url__GT_video_id = (function redditv$vimeo$video_url__GT_video_id(url){
if(cljs.core.truth_(cljs.core.re_matches.call(null,redditv.vimeo.regex_vimeo_url,url))){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,redditv.vimeo.regex_vimeo_url,url));
} else {
return null;
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
redditv.vimeo.VimeoPlayer = (function (dom,context,video_url,event_channel,__meta,__extmap,__hash){
this.dom = dom;
this.context = context;
this.video_url = video_url;
this.event_channel = event_channel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
redditv.vimeo.VimeoPlayer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30718__auto__,k__30719__auto__){
var self__ = this;
var this__30718__auto____$1 = this;
return cljs.core._lookup.call(null,this__30718__auto____$1,k__30719__auto__,null);
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30720__auto__,k35710,else__30721__auto__){
var self__ = this;
var this__30720__auto____$1 = this;
var G__35712 = (((k35710 instanceof cljs.core.Keyword))?k35710.fqn:null);
switch (G__35712) {
case "dom":
return self__.dom;

break;
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
return cljs.core.get.call(null,self__.__extmap,k35710,else__30721__auto__);

}
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30732__auto__,writer__30733__auto__,opts__30734__auto__){
var self__ = this;
var this__30732__auto____$1 = this;
var pr_pair__30735__auto__ = ((function (this__30732__auto____$1){
return (function (keyval__30736__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30733__auto__,cljs.core.pr_writer,""," ","",opts__30734__auto__,keyval__30736__auto__);
});})(this__30732__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30733__auto__,pr_pair__30735__auto__,"#redditv.vimeo.VimeoPlayer{",", ","}",opts__30734__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",-1236537922),self__.dom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"video-url","video-url",1636122700),self__.video_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),self__.event_channel],null))], null),self__.__extmap));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35709){
var self__ = this;
var G__35709__$1 = this;
return (new cljs.core.RecordIter((0),G__35709__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"video-url","video-url",1636122700),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30716__auto__){
var self__ = this;
var this__30716__auto____$1 = this;
return self__.__meta;
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30712__auto__){
var self__ = this;
var this__30712__auto____$1 = this;
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,self__.video_url,self__.event_channel,self__.__meta,self__.__extmap,self__.__hash));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30722__auto__){
var self__ = this;
var this__30722__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30713__auto__){
var self__ = this;
var this__30713__auto____$1 = this;
var h__30531__auto__ = self__.__hash;
if(!((h__30531__auto__ == null))){
return h__30531__auto__;
} else {
var h__30531__auto____$1 = cljs.core.hash_imap.call(null,this__30713__auto____$1);
self__.__hash = h__30531__auto____$1;

return h__30531__auto____$1;
}
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__30714__auto__,other__30715__auto__){
var self__ = this;
var this__30714__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30084__auto__ = other__30715__auto__;
if(cljs.core.truth_(and__30084__auto__)){
var and__30084__auto____$1 = (this__30714__auto____$1.constructor === other__30715__auto__.constructor);
if(and__30084__auto____$1){
return cljs.core.equiv_map.call(null,this__30714__auto____$1,other__30715__auto__);
} else {
return and__30084__auto____$1;
}
} else {
return and__30084__auto__;
}
})())){
return true;
} else {
return false;
}
});

redditv.vimeo.VimeoPlayer.prototype.redditv$player$IPlayer$ = cljs.core.PROTOCOL_SENTINEL;

redditv.vimeo.VimeoPlayer.prototype.redditv$player$IPlayer$play$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.vimeo.VimeoPlayer.prototype.redditv$player$IPlayer$pause$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.vimeo.VimeoPlayer.prototype.redditv$player$IPlayer$fullscreen$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

redditv.vimeo.VimeoPlayer.prototype.redditv$player$IPlayer$dispose$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.dom.remove();
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30727__auto__,k__30728__auto__){
var self__ = this;
var this__30727__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"video-url","video-url",1636122700),null,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"dom","dom",-1236537922),null], null), null),k__30728__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30727__auto____$1),self__.__meta),k__30728__auto__);
} else {
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,self__.video_url,self__.event_channel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30728__auto__)),null));
}
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30725__auto__,k__30726__auto__,G__35709){
var self__ = this;
var this__30725__auto____$1 = this;
var pred__35713 = cljs.core.keyword_identical_QMARK_;
var expr__35714 = k__30726__auto__;
if(cljs.core.truth_(pred__35713.call(null,new cljs.core.Keyword(null,"dom","dom",-1236537922),expr__35714))){
return (new redditv.vimeo.VimeoPlayer(G__35709,self__.context,self__.video_url,self__.event_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35713.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__35714))){
return (new redditv.vimeo.VimeoPlayer(self__.dom,G__35709,self__.video_url,self__.event_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35713.call(null,new cljs.core.Keyword(null,"video-url","video-url",1636122700),expr__35714))){
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,G__35709,self__.event_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35713.call(null,new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),expr__35714))){
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,self__.video_url,G__35709,self__.__meta,self__.__extmap,null));
} else {
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,self__.video_url,self__.event_channel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30726__auto__,G__35709),null));
}
}
}
}
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30730__auto__){
var self__ = this;
var this__30730__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dom","dom",-1236537922),self__.dom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"video-url","video-url",1636122700),self__.video_url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-channel","event-channel",1215556114),self__.event_channel],null))], null),self__.__extmap));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30717__auto__,G__35709){
var self__ = this;
var this__30717__auto____$1 = this;
return (new redditv.vimeo.VimeoPlayer(self__.dom,self__.context,self__.video_url,self__.event_channel,G__35709,self__.__extmap,self__.__hash));
});

redditv.vimeo.VimeoPlayer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30723__auto__,entry__30724__auto__){
var self__ = this;
var this__30723__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30724__auto__)){
return cljs.core._assoc.call(null,this__30723__auto____$1,cljs.core._nth.call(null,entry__30724__auto__,(0)),cljs.core._nth.call(null,entry__30724__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30723__auto____$1,entry__30724__auto__);
}
});

redditv.vimeo.VimeoPlayer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dom","dom",403993605,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"video-url","video-url",-1018313069,null),new cljs.core.Symbol(null,"event-channel","event-channel",-1438879655,null)], null);
});

redditv.vimeo.VimeoPlayer.cljs$lang$type = true;

redditv.vimeo.VimeoPlayer.cljs$lang$ctorPrSeq = (function (this__30752__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"redditv.vimeo/VimeoPlayer");
});

redditv.vimeo.VimeoPlayer.cljs$lang$ctorPrWriter = (function (this__30752__auto__,writer__30753__auto__){
return cljs.core._write.call(null,writer__30753__auto__,"redditv.vimeo/VimeoPlayer");
});

redditv.vimeo.__GT_VimeoPlayer = (function redditv$vimeo$__GT_VimeoPlayer(dom,context,video_url,event_channel){
return (new redditv.vimeo.VimeoPlayer(dom,context,video_url,event_channel,null,null,null));
});

redditv.vimeo.map__GT_VimeoPlayer = (function redditv$vimeo$map__GT_VimeoPlayer(G__35711){
return (new redditv.vimeo.VimeoPlayer(new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(G__35711),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__35711),new cljs.core.Keyword(null,"video-url","video-url",1636122700).cljs$core$IFn$_invoke$arity$1(G__35711),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114).cljs$core$IFn$_invoke$arity$1(G__35711),null,cljs.core.dissoc.call(null,G__35711,new cljs.core.Keyword(null,"dom","dom",-1236537922),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"video-url","video-url",1636122700),new cljs.core.Keyword(null,"event-channel","event-channel",1215556114)),null));
});

redditv.vimeo.vimeo_iframe_id = "redditv-vimeo-player";
redditv.vimeo.create_vimeo_iframe = (function redditv$vimeo$create_vimeo_iframe(dom_id,video_url,event_channel){
var iframe = document.createElement("iframe");
var video_id = redditv.vimeo.video_url__GT_video_id.call(null,video_url);
var src = [cljs.core.str("https://player.vimeo.com/video/"),cljs.core.str(video_id),cljs.core.str("?api=1"),cljs.core.str("&player_id="),cljs.core.str(redditv.vimeo.vimeo_iframe_id)].join('');
var target = document.getElementById(dom_id);
var G__35718_35719 = iframe;
G__35718_35719.setAttribute("id",redditv.vimeo.vimeo_iframe_id);

G__35718_35719.setAttribute("src",src);

G__35718_35719.setAttribute("width","100%");

G__35718_35719.setAttribute("height","100%");

G__35718_35719.setAttribute("frameborder","0");

G__35718_35719.setAttribute("webkiteallowfullscreen",true);

G__35718_35719.setAttribute("mozallowfullscreen",true);

G__35718_35719.setAttribute("allowfullscreen",true);


iframe.addEventListener("error",((function (iframe,video_id,src,target){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,redditv.events.player_not_started.call(null));
});})(iframe,video_id,src,target))
);

target.appendChild(iframe);

return iframe;
});
redditv.vimeo.attach_vimeo_player = (function redditv$vimeo$attach_vimeo_player(){
var iframe = ($([cljs.core.str("#"),cljs.core.str(redditv.vimeo.vimeo_iframe_id)].join(''))[(0)]);
var player = $f(iframe);
return player;
});
redditv.vimeo.create_vimeo_player = (function redditv$vimeo$create_vimeo_player(dom_id,video_url,event_channel){
var iframe = redditv.vimeo.create_vimeo_iframe.call(null,dom_id,video_url,event_channel);
var player = redditv.vimeo.attach_vimeo_player.call(null);
player.addEvent("ready",((function (iframe,player){
return (function (){
player.addEvent("playing",((function (iframe,player){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,redditv.events.player_playing.call(null));
});})(iframe,player))
);

player.addEvent("finish",((function (iframe,player){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,redditv.events.player_ended.call(null));
});})(iframe,player))
);

player.addEvent("error",((function (iframe,player){
return (function (){
return cljs.core.async.put_BANG_.call(null,event_channel,redditv.events.player_not_started.call(null));
});})(iframe,player))
);

return player.api("play");
});})(iframe,player))
);

console.log("player");

console.log(player);

return redditv.vimeo.__GT_VimeoPlayer.call(null,iframe,player,video_url,event_channel);
});
goog.exportSymbol('redditv.vimeo.create_vimeo_player', redditv.vimeo.create_vimeo_player);
