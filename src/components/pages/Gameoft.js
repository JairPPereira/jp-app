import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gameoft() {

  return (
    <>

        <center>
          <p></p>
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

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w227_and_h127_bestv2/icjOgl5F9DhysOEo6Six2Qfwcu2.jpg" />
      <Card.Body>
        <Card.Title>2
A Estrada Real</Card.Title>
        <Card.Text><p2>Quando Bran miraculosamente sobrevive a uma queda da torre, Cersei e Jaime conspiram para assegurar seu silêncio; Jon Snow e Tyrion se dirigem à Muralha; ao se tornar o braço direito do Rei, Ned deixa Winterfell com suas filhas Sansa e Arya.</p2>
        </Card.Text>
        <Link to="./Gamert1e1"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    

          <p><br /></p>




    </>



  );
}

