import React from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cobrakai() {
  return (
    <div>
          <p><br /></p>
          <div><Container fluid>
            <Row>
              <Col>
      <iframe
        src="https://embedflix.net/serie/tt7221388"
        target="_blank"
        scrolling="no"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
        poster="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/g63KmFgqkvXu6WKS23V56hqEidh.jpg"
        frameborder="0"
        width="100%" height="600px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
      </Col></Row></Container>
                  <div className="nave">
     
                  <p><br /></p>

<Link to="/"><Button variant="primary" size="lg" width="80%">
Home
  </Button></Link>

<p><br /></p>
</div>
</div></div>

  );
}




