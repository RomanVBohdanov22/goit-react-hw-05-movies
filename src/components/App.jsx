import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetail } from '../pages/MovieDetail';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import { Layout } from '../layout/Layout';

import { routes } from '../routes';

export const App = () => {
  return (
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
  );
};
