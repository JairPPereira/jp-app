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
    <Card.Body><Link to="./Tvsp"><Button variant="primary" size="lg" width="100%">
    Sport
        </Button></Link></Card.Body>
    </Card>

    <Card>
    <Card.Body><Link to="./Tvab"><Button variant="primary" size="lg" width="100%">
    TV Aberta
        </Button></Link></Card.Body>
    </Card>

    <Card>
    <Card.Body><Link to="./Jornalismo"><Button variant="primary" size="lg" width="100%">
    Jornalismo
        </Button></Link></Card.Body>
    </Card>
    

   



          <p><br /></p>



        </nav></h1>
       



    <p></p>

    </>



  );
}

