import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetail } from '../pages/MovieDetail';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import { Layout } from '../layout/Layout';

import { routes } from '../routes';
import * as FilmService from './services/filmesFetch';

const appStyles = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
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

  FilmService.getMovieOnQuery(query)
    .then(data => {
      console.log(query, data);
    })
    .catch(error => {
      console.log(error.message);
    }); */
  const testID = 414906;
  FilmService.getMovieDetails(testID)
    .then(data => {
      console.log(testID, data);
    })
    .catch(error => {
      console.log(error.message);
    });
  /*
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
          <Route path={routes.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={routes.MOVIES} element={<Movies />} />
            <Route path={routes.MOVIES_ID} element={<MovieDetail />}>
              <Route path={routes.CAST} element={<Cast />} />
              <Route path={routes.REVIEWS} element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={routes.HOME} replace />} />
        </Routes>
      }
    </div>
  );
};

/*


*/
/*
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.MOVIES}>Movies</Link>
        </li>
      </ul
*/
/**
 <Routes>
          <Route path={routes.HOME} element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={routes.MOVIES_ID} element={<MovieDetail />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
 </Route
          <Route path="*" element={<Navigate to={routes.HOME} replace />} />
        </Routes>
 
 
 */
