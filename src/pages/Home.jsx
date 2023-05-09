import { getMovieTrending } from '../components/services/filmesFetch';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const Home = () => {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    async function dataToFilms() {
      try {
        const { results } = await getMovieTrending();
        if (!results) {
          alert(`What?`);
          return;
        }
        //console.log(results);
        setFilms(results);
      } catch (error) {
        alert(error.message);
      } finally {
      }
    }
    dataToFilms();
  }, []);
  if (!films) return;
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

//import * as FilmService from './services/filmesFetch';
/*
  FilmService.getMovieTrending()
    .then(data => {
      console.log('data', data);
    })
    .catch(error => {
      console.log(error.message);
    });
  const query = 'Batman';

  FilmService.getMovieOnQuery(query)
    .then(data => {
      console.log(query, data);
    })
    .catch(error => {
      console.log(error.message);
    }); 
  const testID = 414906;
  FilmService.getMovieDetails(testID)
    .then(data => {
      console.log(testID, data);
    })
    .catch(error => {
      console.log(error.message);
    });
  
  FilmService.getMovieCredits(testID)
    .then(data => {
      console.log('cred', testID, data);
    })
    .catch(error => {
      console.log(error.message);
    });

  FilmService.getMovieRewievs(testID)
    .then(data => {
      console.log('rev', testID, data);
    })
    .catch(error => {
      console.log(error.message);
    });*/
