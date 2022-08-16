import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TVs() {

  return (
    <>
      <h1 className='tvs'>

        <nav>
          <p><br /></p>
          <Card>
      <Card.Body><Link to="./Boasnovas"><Button variant="primary" size="lg" width="100%">
      Boas novas
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Fmodia"><Button variant="primary" size="lg" width="100%">
    FM O Dia
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Graopara"><Button variant="primary" size="lg" width="100%">
    Grão Pará
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Rba"><Button variant="primary" size="lg" width="100%">
    Rba
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><Link to="./Recordnews"><Button variant="primary" size="lg" width="100%">
    Recordnews
        </Button></Link></Card.Body>
    </Card>
    <Card>
    <Card.Body><a href="https://jppfilmesonline.blogspot.com/p/bandnews.html"><Button variant="primary" size="lg" width="100%">
    Bandnews
        </Button></a></Card.Body>
    </Card>
    <Card>
    <Card.Body><a href="https://jppfilmesonline.blogspot.com/p/globonews.html?m=1"><Button variant="primary" size="lg" width="100%">
    Globonews
        </Button></a></Card.Body>
    </Card>
    <Card>
    <Card.Body><a href="https://jppfilmesonline.blogspot.com/p/untitled-1-download-video-file.html"><Button variant="primary" size="lg" width="100%">
    CNN Brasil
        </Button></a></Card.Body>
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

