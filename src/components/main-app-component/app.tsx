import MainPage from '../../pages/main-page/main-page';

type MainAppProps = {
  count : number;
}

function MainApp({count} : MainAppProps): JSX.Element {
  return (
    <MainPage count = {count}/>
  );

}

export default MainApp;
