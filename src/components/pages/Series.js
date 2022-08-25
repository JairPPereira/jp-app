import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Series() {

  return (
    <>


       

<CardGroup>
       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/l2ezB41chGDjXcKo24lseuXYtKP.jpg" />
      <Card.Body>
        <Card.Title>Game of Thrones (2011)</Card.Title>
        <Link to="./Gameoft"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lQmJRW6vwKSAROylB3JrrGJGccj.jpg" />
      <Card.Body>
        <Card.Title>Turma da Mônica (2022)</Card.Title>
  <Link to="./157485"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg" />
      <Card.Body>
        <Card.Title>The Walking Dead (2010)</Card.Title>

        <Link to="./1402"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

   


    <p></p></CardGroup>

    </>



  );
}

