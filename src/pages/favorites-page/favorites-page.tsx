import Logo from '../../components/logo/logo';
import NavigationList from '../../components/navigation/navigation-list';
import { Helmet } from 'react-helmet-async';
import { Titles } from '../../const/const';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getFavorites } from '../../store/data-process/selectors';

function FavoritesPage() : React.JSX.Element {

  const favoriteOffers = useAppSelector(getFavorites);
  return(
    <div className="page">
      <Helmet>
        <title>{Titles.FavoritesTitle}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <NavigationList />
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={favoriteOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
