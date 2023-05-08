import { Route, Routes, Link } from 'react-router-dom';
//import { Home } from './pages';
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
    });
  return <div style={appStyles}>goit-react-hw-05-movies</div>;
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
