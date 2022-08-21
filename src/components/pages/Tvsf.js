import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tvsf() {

  return (
    <>


       


       
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Comedy_Central_2018.svg" />
      <Card.Body>
        <Card.Title>Comedy central</Card.Title>
        <Card.Text><p2>Comedy Central é uma rede e canal pago de humor dos Estados Unidos famoso pelos seus programas de comédia. Pertence a Americana Paramount Media Networks. Entre os destaques de sua programação está a animação South Park célebre pelo seu humor politicamente incorreto.</p2>
        </Card.Text>
        <Link to="./Comedyc"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://megacanais.com/wp-content/uploads/2020/12/hbofamily.png" />
      <Card.Body>
        <Card.Title>HBO Familia</Card.Title>
        <Card.Text><p2>A HBO Brasil é uma rede de canais de televisão por assinatura brasileira pertencente à Warner Bros. Discovery Americas, subsidiária da Warner Bros.</p2>
        </Card.Text>
        <Link to="./Hbof"><Button variant="primary" size="lg" width="100%">
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
      <Card.Img variant="top" src="https://megacanais.com/wp-content/uploads/2020/12/megapix.png" />
      <Card.Body>
        <Card.Title>Megapix</Card.Title>
        <Card.Text><p2>O Megapix é um canal de televisão por assinatura brasileiro pertencente ao Grupo Globo. Trata-se do braço da Rede Telecine nos pacotes básicos das operadoras de TV paga, exibindo títulos que geralmente foram lançados pelo Telecine ou HBO, mas que estreiam com exclusividade nos pacotes básicos pelo Megapix.</p2>
        </Card.Text>
        <Link to="./Megapix"><Button variant="primary" size="lg" width="100%">
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

