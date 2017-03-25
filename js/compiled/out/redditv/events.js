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
redditv.events.is_video_select_QMARK_ = (function redditv$events$is_video_select_QMARK_(p__40925){
var map__40928 = p__40925;
var map__40928__$1 = ((((!((map__40928 == null)))?((((map__40928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40928):map__40928);
var event = map__40928__$1;
var event_type = cljs.core.get.call(null,map__40928__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-select","video-select",775569479));
});
redditv.events.video_next = (function redditv$events$video_next(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-next","video-next",-637268521)], null);
});
redditv.events.is_video_next_QMARK_ = (function redditv$events$is_video_next_QMARK_(p__40930){
var map__40933 = p__40930;
var map__40933__$1 = ((((!((map__40933 == null)))?((((map__40933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40933):map__40933);
var event_type = cljs.core.get.call(null,map__40933__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-next","video-next",-637268521));
});
redditv.events.video_previous = (function redditv$events$video_previous(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-previous","video-previous",1465036226)], null);
});
redditv.events.is_video_previous_QMARK_ = (function redditv$events$is_video_previous_QMARK_(p__40935){
var map__40938 = p__40935;
var map__40938__$1 = ((((!((map__40938 == null)))?((((map__40938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40938):map__40938);
var event_type = cljs.core.get.call(null,map__40938__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-previous","video-previous",1465036226));
});
redditv.events.player_not_started = (function redditv$events$player_not_started(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018)], null);
});
redditv.events.is_player_not_started_QMARK_ = (function redditv$events$is_player_not_started_QMARK_(p__40940){
var map__40943 = p__40940;
var map__40943__$1 = ((((!((map__40943 == null)))?((((map__40943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40943):map__40943);
var event_type = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-not-started","video-not-started",1796695018));
});
redditv.events.player_ended = (function redditv$events$player_ended(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-ended","video-ended",1757171761)], null);
});
redditv.events.is_player_ended_QMARK_ = (function redditv$events$is_player_ended_QMARK_(p__40945){
var map__40948 = p__40945;
var map__40948__$1 = ((((!((map__40948 == null)))?((((map__40948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40948):map__40948);
var event_type = cljs.core.get.call(null,map__40948__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-ended","video-ended",1757171761));
});
redditv.events.player_playing = (function redditv$events$player_playing(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-playing","video-playing",1131110239)], null);
});
redditv.events.is_player_playing_QMARK_ = (function redditv$events$is_player_playing_QMARK_(p__40950){
var map__40953 = p__40950;
var map__40953__$1 = ((((!((map__40953 == null)))?((((map__40953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40953):map__40953);
var event_type = cljs.core.get.call(null,map__40953__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-playing","video-playing",1131110239));
});
redditv.events.player_paused = (function redditv$events$player_paused(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-paused","video-paused",1262325411)], null);
});
redditv.events.is_player_paused_QMARK_ = (function redditv$events$is_player_paused_QMARK_(p__40955){
var map__40958 = p__40955;
var map__40958__$1 = ((((!((map__40958 == null)))?((((map__40958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40958):map__40958);
var event_type = cljs.core.get.call(null,map__40958__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-paused","video-paused",1262325411));
});
redditv.events.player_buffering = (function redditv$events$player_buffering(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113)], null);
});
redditv.events.is_player_buffering_QMARK_ = (function redditv$events$is_player_buffering_QMARK_(p__40960){
var map__40963 = p__40960;
var map__40963__$1 = ((((!((map__40963 == null)))?((((map__40963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40963):map__40963);
var event_type = cljs.core.get.call(null,map__40963__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-buffering","video-buffering",-755304113));
});
redditv.events.player_cued = (function redditv$events$player_cued(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864)], null);
});
redditv.events.is_player_cued_QMARK_ = (function redditv$events$is_player_cued_QMARK_(p__40965){
var map__40968 = p__40965;
var map__40968__$1 = ((((!((map__40968 == null)))?((((map__40968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40968):map__40968);
var event_type = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
return cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"video-cued","video-cued",-2053300864));
});
