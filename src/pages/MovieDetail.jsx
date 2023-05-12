import { getMovieDetails } from 'components/services/filmesFetch';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const imgPlaceholder =
  'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp';
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
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : imgPlaceholder
        }
        alt={movie.title}
      />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
