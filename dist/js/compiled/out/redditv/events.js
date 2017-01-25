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
redditv.events.is_video_select_QMARK_ = (function redditv$events$is_video_select_QMARK_(p__41176){
var map__41179 = p__41176;
var map__41179__$1 = ((((!((map__41179 == null)))?((((map__41179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41179):map__41179);
var event = map__41179__$1;
var event_type = cljs.core.get.call(null,map__41179__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-select","video-select",775569479));
});
redditv.events.video_next = (function redditv$events$video_next(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null);
});
redditv.events.is_video_next_QMARK_ = (function redditv$events$is_video_next_QMARK_(p__41181){
var map__41184 = p__41181;
var map__41184__$1 = ((((!((map__41184 == null)))?((((map__41184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41184):map__41184);
var event_type = cljs.core.get.call(null,map__41184__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-next","video-next",-637268521));
});
redditv.events.video_previous = (function redditv$events$video_previous(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null);
});
redditv.events.is_video_previous_QMARK_ = (function redditv$events$is_video_previous_QMARK_(p__41186){
var map__41189 = p__41186;
var map__41189__$1 = ((((!((map__41189 == null)))?((((map__41189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41189):map__41189);
var event_type = cljs.core.get.call(null,map__41189__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-previous","video-previous",1465036226));
});
redditv.events.player_not_started = (function redditv$events$player_not_started(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018)], null);
});
redditv.events.is_player_not_started_QMARK_ = (function redditv$events$is_player_not_started_QMARK_(p__41191){
var map__41194 = p__41191;
var map__41194__$1 = ((((!((map__41194 == null)))?((((map__41194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41194):map__41194);
var event_type = cljs.core.get.call(null,map__41194__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018));
});
redditv.events.player_ended = (function redditv$events$player_ended(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-ended","video-ended",1757171761)], null);
});
redditv.events.is_player_ended_QMARK_ = (function redditv$events$is_player_ended_QMARK_(p__41196){
var map__41199 = p__41196;
var map__41199__$1 = ((((!((map__41199 == null)))?((((map__41199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41199):map__41199);
var event_type = cljs.core.get.call(null,map__41199__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-ended","video-ended",1757171761));
});
redditv.events.player_playing = (function redditv$events$player_playing(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-playing","video-playing",1131110239)], null);
});
redditv.events.is_player_playing_QMARK_ = (function redditv$events$is_player_playing_QMARK_(p__41201){
var map__41204 = p__41201;
var map__41204__$1 = ((((!((map__41204 == null)))?((((map__41204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41204):map__41204);
var event_type = cljs.core.get.call(null,map__41204__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-playing","video-playing",1131110239));
});
redditv.events.player_paused = (function redditv$events$player_paused(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-paused","video-paused",1262325411)], null);
});
redditv.events.is_player_paused_QMARK_ = (function redditv$events$is_player_paused_QMARK_(p__41206){
var map__41209 = p__41206;
var map__41209__$1 = ((((!((map__41209 == null)))?((((map__41209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41209):map__41209);
var event_type = cljs.core.get.call(null,map__41209__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-paused","video-paused",1262325411));
});
redditv.events.player_buffering = (function redditv$events$player_buffering(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113)], null);
});
redditv.events.is_player_buffering_QMARK_ = (function redditv$events$is_player_buffering_QMARK_(p__41211){
var map__41214 = p__41211;
var map__41214__$1 = ((((!((map__41214 == null)))?((((map__41214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41214):map__41214);
var event_type = cljs.core.get.call(null,map__41214__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113));
});
redditv.events.player_cued = (function redditv$events$player_cued(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864)], null);
});
redditv.events.is_player_cued_QMARK_ = (function redditv$events$is_player_cued_QMARK_(p__41216){
var map__41219 = p__41216;
var map__41219__$1 = ((((!((map__41219 == null)))?((((map__41219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41219):map__41219);
var event_type = cljs.core.get.call(null,map__41219__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864));
});
