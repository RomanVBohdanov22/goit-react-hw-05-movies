import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMovieOnQuery } from 'components/services/filmesFetch';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState(null);
  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) return;

    async function dataToFilms() {
      try {
        const { results } = await getMovieOnQuery(query);
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
  }, [searchParams]);
  const onHandleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      Movies
      <SearchForm onHandleSubmit={onHandleSubmit} />
      {films && <MovieList films={films} />}
    </>
  );
};
