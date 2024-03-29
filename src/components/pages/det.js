import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iframe from 'react-iframe'

import './Det.css';


function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState(null)
  const [cast, setCast] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, release_date, overview } = data
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date
        }
        setMovie(movie)
      })
  }, [id])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const video = data.results.find(result => result.type === 'Trailer' && result.site === 'YouTube')
        if (video) {
          setTrailer(`https://www.youtube.com/embed/${video.key}`)
        }
      })
  }, [id])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        setCast(data.cast)
      })
  }, [id])

  return (
    <Container>
       
      <div className="movie">
        <center>
          <img src={movie.image} alt={movie.sinopse} width="100%"/>
        </center></div>
        
        <div>
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className='release-date'>Release date: {movie.releaseDate}</span>
        </div> 
          <span>
            <Link to={`/${movie.id}`}>
              <Button variant="primary" size="lg" width="80%">
                Assistir
              </Button>
            </Link>
          </span>
        </div>
        <div className="trailer">
          {trailer && (
            <>
              <h2>Trailer</h2>
              <Iframe
                width="100%"
                height="400"
                src={trailer}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </>
          )}
        </div>
        <div className="cast">
  <h2>Elenco</h2>

<CardGroup>
{cast.map((actor, index) => (
<div key={index} className="actor">
<Card>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt={actor.name} width="138" />
      <Card.Body>
        
      <span>{actor.name}</span>
      
        
      </Card.Body>
    </Card>
    </div> ))}
    </CardGroup>
    
    </div>
 
     
      
    </Container>
  );
}

export default Details;
