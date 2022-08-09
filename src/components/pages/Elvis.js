import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Elvis extends Component {
    player = {}
    state = {
        video: {
            src: "https://908356846.tapecontent.net/radosgw/J2YGmaze9JIjjvv/h4gWLP9Q3UxSajHqrCV2oeKq2IYgpduYqfMgwPUGCb-gj0Fjy8FIUe_9x_4L3wSp99cCj9A8XbZ9o7vU7OLuFuxI80veg0QDOS5u-Y8gD40uM8JIWVT32ikUVzj9SR_1QlUSJ3UYNCfnRaZVrYv7abV-aXAPYPtqDWjijZxMM_5rSe2EXq5B5rKVLR-7ng64Qgrd2obG_bY95VGktHVFBFe5pWSMDMsAl1mYhXw6osCt_f91gL6I9U9Ivz8DduscbkzCChbks4zmlW8D0Oh4fHmY3n3yGck3wxkN7Q/AivJPcmEm4Ixam3U.mp4?stream=1",

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
                    height="auto"
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
export default Elvis;