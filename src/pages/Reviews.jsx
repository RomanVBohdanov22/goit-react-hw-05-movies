import { getMovieRewievs } from 'components/services/filmesFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieRewievs(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);
  if (!reviews) return;
  return (
    <>
      <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <h4>author: {item.author ? item.author : '...'}</h4>
            <p>{item.content ? item.content : '...'}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
