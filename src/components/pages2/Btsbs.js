import React from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Btsbs() {
  return (
    <div>
          <p><br /></p>
          <div><Container fluid>
            <Row>
              <Col>
      <Iframe
        src="https://voe.sx/e/0q5nni7fbdfd"
        target="_blank"
        scrolling="no"
        title="Video"
        data-draggable="none"
        marginwidth="0"
        marginheight="0"
        data-popup="none" 
        display="initial"
        frameborder="0"
        overflow="no"
        width="100%" height="640px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
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





