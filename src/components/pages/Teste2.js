import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Teste2 extends Component {
    player = {}
    state = {
        video: {
            src: "https://ipv4-c002-bel001-assistemas-isp.1.oca.nflxvideo.net/range/27512299-28586847?o=1&v=85&e=1661344237&t=D2NJci4bQTD5ol5Wj8Nbabqz51ANYZi7ltpvBTHlznXXhS1gT3Uh4X1s21Xi477b2ck6tEkFFmlePUlsipj0KcVmY0Z8_uVcRACz3BR6uG5P4FV6VyOu9gdAhm43817DVlAs7j1FmaOhRVMisV0oW_A0tZMp23ziarWlxgC2LH91WP4nu_0rBGRHG3U0oVdDw8pJVCIxMjyBsG140wqPKUcZ7t865_lhRXFoqDyZVD2jgKS8stk-Wg5LMA&sc=Eq%176%14PSh%07%5B%7CZCzoVxeX%60%06uMqx%05%04W%7DU%11%16%5D%0E%7C%60(EZ%7Bm%24Uh%15%04%1C%5DiCT%40c%10Xx",
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
export default Teste2;