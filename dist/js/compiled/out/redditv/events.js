// Compiled by ClojureScript 1.9.293 {}
goog.provide('redditv.events');
goog.require('cljs.core');
/**
 * The next video entry selected for playback
 */
redditv.events.video_select = (function redditv$events$video_select(entry){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-select","video-select",775569479),new cljs.core.Keyword(null,"entry","entry",505168823),entry], null);
});
/**
 * Is this a video selection event?
 */
redditv.events.is_video_select_QMARK_ = (function redditv$events$is_video_select_QMARK_(p__39353){
var map__39356 = p__39353;
var map__39356__$1 = ((((!((map__39356 == null)))?((((map__39356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39356):map__39356);
var event = map__39356__$1;
var event_type = cljs.core.get.call(null,map__39356__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-select","video-select",775569479));
});
redditv.events.video_next = (function redditv$events$video_next(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null);
});
redditv.events.is_video_next_QMARK_ = (function redditv$events$is_video_next_QMARK_(p__39358){
var map__39361 = p__39358;
var map__39361__$1 = ((((!((map__39361 == null)))?((((map__39361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39361):map__39361);
var event_type = cljs.core.get.call(null,map__39361__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-next","video-next",-637268521));
});
redditv.events.video_previous = (function redditv$events$video_previous(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null);
});
redditv.events.is_video_previous_QMARK_ = (function redditv$events$is_video_previous_QMARK_(p__39363){
var map__39366 = p__39363;
var map__39366__$1 = ((((!((map__39366 == null)))?((((map__39366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39366):map__39366);
var event_type = cljs.core.get.call(null,map__39366__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-previous","video-previous",1465036226));
});
redditv.events.player_not_started = (function redditv$events$player_not_started(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018)], null);
});
redditv.events.is_player_not_started_QMARK_ = (function redditv$events$is_player_not_started_QMARK_(p__39368){
var map__39371 = p__39368;
var map__39371__$1 = ((((!((map__39371 == null)))?((((map__39371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39371):map__39371);
var event_type = cljs.core.get.call(null,map__39371__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018));
});
redditv.events.player_ended = (function redditv$events$player_ended(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-ended","video-ended",1757171761)], null);
});
redditv.events.is_player_ended_QMARK_ = (function redditv$events$is_player_ended_QMARK_(p__39373){
var map__39376 = p__39373;
var map__39376__$1 = ((((!((map__39376 == null)))?((((map__39376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39376):map__39376);
var event_type = cljs.core.get.call(null,map__39376__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-ended","video-ended",1757171761));
});
redditv.events.player_playing = (function redditv$events$player_playing(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-playing","video-playing",1131110239)], null);
});
redditv.events.is_player_playing_QMARK_ = (function redditv$events$is_player_playing_QMARK_(p__39378){
var map__39381 = p__39378;
var map__39381__$1 = ((((!((map__39381 == null)))?((((map__39381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39381):map__39381);
var event_type = cljs.core.get.call(null,map__39381__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-playing","video-playing",1131110239));
});
redditv.events.player_paused = (function redditv$events$player_paused(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-paused","video-paused",1262325411)], null);
});
redditv.events.is_player_paused_QMARK_ = (function redditv$events$is_player_paused_QMARK_(p__39383){
var map__39386 = p__39383;
var map__39386__$1 = ((((!((map__39386 == null)))?((((map__39386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39386):map__39386);
var event_type = cljs.core.get.call(null,map__39386__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-paused","video-paused",1262325411));
});
redditv.events.player_buffering = (function redditv$events$player_buffering(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113)], null);
});
redditv.events.is_player_buffering_QMARK_ = (function redditv$events$is_player_buffering_QMARK_(p__39388){
var map__39391 = p__39388;
var map__39391__$1 = ((((!((map__39391 == null)))?((((map__39391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39391):map__39391);
var event_type = cljs.core.get.call(null,map__39391__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113));
});
redditv.events.player_cued = (function redditv$events$player_cued(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864)], null);
});
redditv.events.is_player_cued_QMARK_ = (function redditv$events$is_player_cued_QMARK_(p__39393){
var map__39396 = p__39393;
var map__39396__$1 = ((((!((map__39396 == null)))?((((map__39396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39396):map__39396);
var event_type = cljs.core.get.call(null,map__39396__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864));
});
