import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';
import Iframe from 'react-iframe'
import './Style.css';

export default function Osbansheesi() {
  return (
    <div>
          <p><br /></p>
      <Iframe
        src="https://embedflix.net/filme/tt11813216"
        target="_blank"
        frameborder="0"
        width="100%"
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




