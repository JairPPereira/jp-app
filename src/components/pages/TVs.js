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
    <Card.Body><a href="https://jppfilmesonline.blogspot.com/p/untitled-1-download-video-file.html"><Button variant="primary" size="lg" width="100%">
    CNN Brasil
        </Button></a></Card.Body>
    </Card>
    <Card>
    <Card.Body><a href="http://video01.soultv.com.br/cnnbrasil/cnnbrasil/chunklist_w1048115623.m3u8"><Button variant="primary" size="lg" width="100%">
    CNN Brasil - Apenas para navegadores mobile
        </Button></a></Card.Body>
    </Card>



          <p><br /></p>



        </nav></h1>
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
      <Card.Img variant="top" src="https://ogimg.infoglobo.com.br/in/2939353-ac7-20b/FT1086A/Novamarca-da-Globo-News-que-muda-o-visual-no-dia-18-de-outubroDivulgacao.jpg" />
      <Card.Body>
        <Card.Title>Globonews</Card.Title>
        <Card.Text><p2>O primeiro canal brasileiro de notícias 24 horas no ar.</p2>
        </Card.Text>
        <Link to="./Globonews"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.mundopositivo.com.br/wp-content/uploads/2020/07/cnn-brasil-comemora-conquista-de-publico-da-classe-ab-em-100-dias-de-operacao-1.jpg" />
      <Card.Body>
        <Card.Title>CNN Brasil</Card.Title>
        <Card.Text><p2>Você por dentro de tudo - Notícias ao vivo, fatos da política nacional e internacional no maior canal de notícias do mundo!</p2>
        </Card.Text>
        <Link to="./Cnnbr"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://scontent.fbel16-1.fna.fbcdn.net/v/t1.6435-9/158721817_1982113368612507_7372704316327449635_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=973b4a&_nc_ohc=i6t4_jGBcMwAX_qRqOy&_nc_ht=scontent.fbel16-1.fna&oh=00_AT_mbvArk7mYS-7NqgoMstT9j5XgVdmtYUSfOSkMwFdtAw&oe=6325A5DD" />
      <Card.Body>
        <Card.Title>Bandnews</Card.Title>
        <Card.Text><p2>BandNews TV é um canal de televisão brasileiro de notícias 24 horas sediado em São Paulo, capital paulista, e que foi inaugurado no dia 19 de março de 2001 pelo Grupo Bandeirantes de Comunicação. Sendo o segundo canal de notícias no Brasil. É o quarto canal de notícias mais visto no Brasil.</p2>
        </Card.Text>
        <Link to="./Bandnews"><Button variant="primary" size="lg" width="100%">
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

