import * as React from "react";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import './app.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Ruepa() {
    return (
      <>
<div className='pele'>
<Container>
    
      <Row xs="auto">
        <Col> <main>
         
         
        <div className='pele'>
          <h2>Rádio Uepa</h2>
          <img class="fit-picture"
            src="https://s43.maxcast.com.br/cover/50197/6fbc4263/c9bc6269/c0daa670/1444691e-f1b3-3b4a-9cd9-a03d810cd0c1.jpg"
            alt="Grapefruit slice atop a pile of other slices"></img></div>

  
    
      
        </main></Col>
       
      </Row>


      <Row xs="auto">
        <Col> 
        <div className='pele'>

 


          
          <ReactAudioPlayer
            src="https://s43.maxcast.com.br:8573/live?id=194309176181"
            controls
          />
          </div>
  
    
  
        </Col>
       
      </Row> 
    </Container>
    </div>
       
        <p><br /></p>
        <div className="nave">
        <nav>
        <p><br /></p>
        <Link to="/">Home</Link>
        <p><br /></p>
      
        </nav></div>
      </>
    );
  }

  export default  Ruepa;