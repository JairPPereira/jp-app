import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Teste extends Component {
    player = {}
    state = {
        video: {
            src: "https://tv.amplitudetelecom.com.br/media/n/BZmXnZu2y2G1mZiXndG/a/BZmXnZu2y2G1mZiXndG/720p/chunks.m3u8?ch=BZmXnZu2y2G1mZiXndG&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjEzMjk1NTEsInN1YiI6Im1haW4ub3JnIzE1ODYyODA1OTEiLCJpYXQiOjE2NjEyOTM1NTF9.D_-e5ftrRYxCHhYUaHJU8gvFmx2NsxArhJY3q7WWLyI",
            type:"application/vnd.apple.mpegurl",

            poster: ""
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div>
                      <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720px" 
                    type="application/x-mpegURL"
                    crossorigin="anonymous"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    <p><br /></p> 
               <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Teste;