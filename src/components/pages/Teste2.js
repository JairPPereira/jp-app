import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Teste2() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://live-lib-pa-02.video.globo.com/d/s/hls-globo-bel/playlist.m3u8?h=0401661263436171439837916611770367661189414wmOy_DMujl65m6yOgikVdg&k=html5&a=F&u=86b5c605-29bd-49ee-94fd-38157902dfa7"
        frameborder="0"
        width="100%" height="600px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
                  <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

  );
}





