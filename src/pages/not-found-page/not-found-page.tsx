import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

function NotFound() :React.JSX.Element {
  return(
    <div>
      <Logo />
      <h1> 404</h1>
      <h2>Page not found</h2>
      <Link to='/'>Return to main page</Link>
    </div>
  );
}

export default NotFound;
