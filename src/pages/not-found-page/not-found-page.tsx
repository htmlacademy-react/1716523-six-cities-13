import {Link} from 'react-router-dom';

function NotFound() :React.JSX.Element {
  return(
    <div>
      <h1> 404</h1>
      <h2>Page not found</h2>
      <Link to='/'>Return to main page</Link>
    </div>
  );
}

export default NotFound;
