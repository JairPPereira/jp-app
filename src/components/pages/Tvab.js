import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tvab() {

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

    
    


 
   



          <p><br /></p>



        </nav></h1>
        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" />
      <Card.Body>
        <Card.Title>Globo Minas</Card.Title>
        <Card.Text><p2>TV Globo Minas é uma emissora de televisão brasileira sediada em Belo Horizonte, capital do estado de Minas Gerais. Opera no canal 12 e é uma emissora própria da TV Globo, sendo pertencente ao Grupo Globo.</p2>
        </Card.Text>
        <Link to="./Globom"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/pt/9/9e/Logotipo_da_TV_Globo.png" />
      <Card.Body>
        <Card.Title>Globo São Paulo</Card.Title>
        <Card.Text><p2>TV Globo São Paulo é uma emissora de televisão brasileira sediada em São Paulo, capital do estado homônimo. Opera no canal 5 (18 UHF digital), e é uma emissora própria e co-geradora da TV Globo juntamente com a TV Globo Rio de Janeiro, sendo responsável por cobrir parte da Região Metropolitana de São Paulo e o município de Ibiúna.</p2>
        </Card.Text>
        <Link to="./Globosp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/pt/7/75/SBT_Par%C3%A1.png" />
      <Card.Body>
        <Card.Title>SBT Pará</Card.Title>
        <Card.Text><p2>SBT Pará é uma emissora de televisão brasileira sediada em Belém, capital do estado do Pará. Opera no canal 5, e é uma emissora própria do SBT, sendo portanto, pertencente ao Grupo Silvio Santos.</p2>
        </Card.Text>
        <Link to="./Sbt"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7-jt3Yh-cJqBk_en593s7_dv-yWG7xfnQv27bq0ZoyM9Dk9nRR9tWYbJ1hn-G53_OgE&usqp=CAU" />
      <Card.Body>
        <Card.Title>ITV TV</Card.Title>
        <Card.Text><p2>ITV Channel que pode ser uma mão na roda pra você gostaria de ver alguns canais de TV que não estão dísponivéis no Rio de Janeiro ou em qualquer outro lugar do Brasil.</p2>
        </Card.Text>
        <Link to="./Itvtv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://play-lh.googleusercontent.com/gIiZK9ZUU7tt8N08ozfe8OPBnW-KPREAHdbN1WDvqqSscVdAQuuP2_i2c1Gm2zHJ_S9x" />
      <Card.Body>
        <Card.Title>Pluto TV</Card.Title>
        <Card.Text><p2>A Pluto TV é uma aplicação que lhe permite ver mais de 100 canais de televisão portáteis para a Internet, gratuitamente em qualquer dispositivo, em qualquer lugar. Com este aplicativo, você também pode transmitir Pluto TV via Google Chromecast e assistir à oferta de TV em uma grande TV.</p2>
        </Card.Text>
        <Link to="./Canaisp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.runtime.tv/themes/custom/run/runtime/logo.png" />
      <Card.Body>
        <Card.Title>Runtime TV</Card.Title>
        <Card.Text><p2>Runtime é onde você encontra filmes e séries premiadas sempre grátis.</p2>
        </Card.Text>
        <Link to="./Canaisrun"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1461742005176909838/mSlnGpF1_400x400.jpg" />
      <Card.Body>
        <Card.Title>Disney Channel Brasil</Card.Title>
        <Card.Text><p2></p2>
        </Card.Text>
        <Link to="./Disneyc"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>



    <p></p>

    </>



  );
}

