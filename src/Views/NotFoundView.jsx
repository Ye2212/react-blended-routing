import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <h1>
      Page not found, return to <Link to="/">main page</Link>
    </h1>
  );
};
