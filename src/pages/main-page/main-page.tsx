
import NavigationListMemo from '../../components/navigation-list/navigation-list';
import { Helmet } from 'react-helmet-async';
import { Titles } from '../../const/const';
import { OffersList } from '../../components/offers-list/offers-list';
import MemoMap from '../../components/map/map';
import { memo, useCallback, useState } from 'react';
import CitiesNavMemo from '../../components/cities-nav/cities-nav';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import SortFormMemo from '../../components/sort-form/sort-form';
import { getAvailableOffers, getSortedOffers } from '../../utils/utils';
import { Offer } from '../../types';
import { getCity, getSortType } from '../../store/app-process/selectors';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';

type MainPageProps = {
  offers: Offer[];
  cardClass: string;
  offerListClass: string;
};

function MainPage({ offers, cardClass, offerListClass}: MainPageProps): React.JSX.Element {

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const updateActiveCard = useCallback((id: string | null) => {
    setActiveCard(id);
  }, []);

  const currentSortType = useAppSelector(getSortType);
  const currentCity = useAppSelector(getCity);

  const availableOffers = getAvailableOffers(offers, currentCity);

  const sortedOffers = getSortedOffers(availableOffers, currentSortType);

  const city = availableOffers[0]?.city;

  return (
    <div className={`page page--gray page--main ${availableOffers.length ? '' : 'page__main--index-empty'}`}>
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
              <NavigationListMemo />
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesNavMemo />
          </section>
        </div>
        {availableOffers.length ?
          <div className="cities">
            <div className={`cities__places-container ${availableOffers.length ? '' : 'cities__places-container container'} container`}>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{availableOffers.length} places to stay in {currentCity}</b>
                <SortFormMemo />
                <OffersList
                  offers={sortedOffers}
                  updateActiveCard={updateActiveCard}
                  cardClass={cardClass}
                  offerListClass={offerListClass}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MemoMap
                    offers={availableOffers}
                    city={city}
                    activeCard={activeCard}
                  />
                </section>
              </div>
            </div>
          </div> : <MainPageEmpty />}

      </main>
    </div>
  );
}

const MainPageMemo = memo(MainPage);

export default MainPageMemo;
