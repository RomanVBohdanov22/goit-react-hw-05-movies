import { Outlet, Link } from 'react-router-dom';
import { routes } from '../routes';

export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.MOVIES}>Movies</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
