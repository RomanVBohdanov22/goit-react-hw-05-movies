import { getMovieDetails } from 'components/services/filmesFetch';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  if (!movie) return;
  return (
    <>
      {movie.title}
      <ul>
        <li>
          <Link to="/cast">Cast</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
