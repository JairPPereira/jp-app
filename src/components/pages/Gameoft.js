import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gameoft() {

  return (
    <>
      <h1 className='gameoft'>
        <center>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/xIfvIM7YgkADTrqp23rm3CLaOVQ.jpg" />
      <Card.Body>
        <Card.Title>1
O Inverno Está Chegando</Card.Title>
        <Card.Text><p2>O Lord Ned Stark preocupa-se com as notícias de um desertor da Guarda da Noite; o Rei Robert e os Lannisters chegam a Winterfell; o exilado Viserys Targaryen forja uma nova e poderosa aliança.</p2>
        </Card.Text>
        <Link to="./Gamert1e1"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

        <nav>
          <p><br /></p>
          <Card>
      <Card.Body><Link to="./Boasnovas"><Button variant="primary" size="lg" width="100%">
      Boas novas
        </Button></Link></Card.Body>
    </Card>
   
    <Card>
    <Card.Body><a href="http://video01.soultv.com.br/cnnbrasil/cnnbrasil/chunklist_w1048115623.m3u8"><Button variant="primary" size="lg" width="100%">
    CNN Brasil - Apenas para navegadores mobile
        </Button></a></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Sbt"><Button variant="primary" size="lg" width="100%">
    Sbt
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Aturmadam24"><Button variant="primary" size="lg" width="100%">
    Teste
        </Button></Link></Card.Body>
    </Card>

          <p><br /></p>



        </nav></h1>

    </>



  );
}

