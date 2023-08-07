
import NavigationList from '../../components/navigation/navigation-list';
import { Helmet } from 'react-helmet-async';
import { Titles } from '../../const/const';
import { OffersList } from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useState } from 'react';
import { CitiesNav } from '../../components/cities-nav/cities-nav';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { sortOffers } from '../../store/action';

type MainPageProps = {
  cardClass: string;
  offerListClass: string;
};

function MainPage({ cardClass, offerListClass}: MainPageProps): React.JSX.Element {

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector((state) => state.city);

  const availableOffers = useAppSelector((state) => state.offers);

  const currentSortType = useAppSelector((state) => state.sortType);


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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className={`places__option ${currentSortType === 'Popular' ? 'places__option--active' : ''}`}
                    tabIndex={0}
                    onClick={() => dispatch(sortOffers('Popular'))}
                  >
                    Popular
                  </li>
                  <li className={`places__option ${currentSortType === 'Price: low to high' ? 'places__option--active' : ''}`}
                    tabIndex={0}
                    onClick={() => dispatch(sortOffers('Price: low to high'))}
                  >
                    Price: low to high
                  </li>
                  <li className={`places__option ${currentSortType === 'Price: high to low' ? 'places__option--active' : ''}`}
                    tabIndex={0}
                    onClick={() => dispatch(sortOffers('Price: high to low'))}
                  >
                    Price: high to low
                  </li>
                  <li className={`places__option ${currentSortType === 'Top rated first' ? 'places__option--active' : ''}`}
                    tabIndex={0}
                    onClick={() => dispatch(sortOffers('Top rated first'))}
                  >
                    Top rated first
                  </li>
                </ul>
              </form>
              <OffersList
                offers={availableOffers}
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
