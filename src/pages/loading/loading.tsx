import { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';


function LoadingScreen(): JSX.Element {

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'blue',
  };


  const loading = true;
  const color = '#ffffff';
  return (
    <>
      <p>Loading ...</p>
      <div className='sweet-loading'>

        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    </>

  );
}

export default LoadingScreen;
