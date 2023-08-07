
import NavigationList from '../../components/navigation/navigation-list';
import { Helmet } from 'react-helmet-async';
import { Titles } from '../../const/const';
import { OffersList } from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import { CitiesNav } from '../../components/cities-nav/cities-nav';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { SortForm } from '../../components/sort/sort-form';
import { getAvailableOffers, getSortedOffers } from '../../utils/utils';

type MainPageProps = {
  cardClass: string;
  offerListClass: string;
};

function MainPage({ cardClass, offerListClass}: MainPageProps): React.JSX.Element {

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const currentSortType = useAppSelector((state) => state.sortType);
  const currentCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);

  const availableOffers = getAvailableOffers(allOffers, currentCity);

  const sortedOffers = getSortedOffers(availableOffers, currentSortType);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{Titles.MainTitle}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <NavigationList />
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesNav />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{availableOffers.length} places to stay in {currentCity}</b>
              <SortForm />
              <OffersList
                offers={sortedOffers}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                cardClass={cardClass}
                offerListClass={offerListClass}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={availableOffers}
                  city={availableOffers[0].city}
                  activeCard={activeCard}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
