import { getMovieCredits } from 'components/services/filmesFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  if (!cast) return;
  return (
    <>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : 'https://holstovich.art/content/images/1/1000x1000l80br20/kartina-russkiy-voennyy-korabl-idi-nakhy-50804578290634.webp'
              }
              alt={item.original_name}
              width="150px"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
