import { getMovieTrending } from '../components/services/filmesFetch';
import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
export const Home = () => {
  const [films, setFilms] = useState(null);
  useEffect(() => {
    async function dataToFilms() {
      try {
        const { results } = await getMovieTrending();
        if (!results.length) {
          alert(`What?`);
          return;
        }

        setFilms(results);
      } catch (error) {
        alert(error.message);
      } finally {
      }
    }
    dataToFilms();
  }, []);
  if (!films) return;
  return <MovieList films={films} />;
};
