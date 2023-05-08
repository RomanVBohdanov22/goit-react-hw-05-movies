import { Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import { Home } from '../pages';
import { Movies } from '../pages';
import { MovieDetail } from '../pages';
import { Cast } from '../pages';
import { Reviews } from '../pages';

import { routes } from '../routes';
import * as FilmService from './services/filmesFetch';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};
export const App = () => {
  /*
  FilmService.getMovieTrending()
    .then(data => {
      console.log('data', data);
    })
    .catch(error => {
      console.log(error.message);
    });
  const query = 'Batman';
  const testID = 414906;
  FilmService.getMovieOnQuery(query)
    .then(data => {
      console.log(query, data);
    })
    .catch(error => {
      console.log(error.message);
    });
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
  return (
    <div style={appStyles}>
      goit-react-hw-05-movies
      {
        <Routes>
          <Route path={routes.HOME} element={<Outlet />} />
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIES_ID} element={<MovieDetail />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={routes.HOME} replace />} />
        </Routes>
      }
    </div>
  );
};
/*

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>

      
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Home />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
*/
