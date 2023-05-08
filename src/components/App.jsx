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
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.message);
    });
  console.log('test');

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
