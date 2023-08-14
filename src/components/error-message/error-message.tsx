import { useAppSelector } from '../../hooks/use-app-dispatch';
import './error-message.css';

function ErrorMessage(): React.JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error) ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;
