import Logo from '../../components/logo/logo';
import { useParams } from 'react-router-dom';
import NavigationList from '../../components/navigation/navigation-list';
import { Helmet } from 'react-helmet-async';
import { Titles } from '../../const/const';
import CommentForm from '../../components/comment-form/comment-form';
import OfferGallery from '../../components/detailed-offer-gallery/offer-gallery';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { OffersList } from '../../components/offers-list/offers-list';
import { useEffect, useState } from 'react';
import { fetchDetailedOffer, fetchNearbyOffers, fetchReviews, postUserComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getDetailedOffer, getDetailedOfferLoadingStatus, getNearByOffers, getReviews } from '../../store/data-process/selectors';
import LoadingScreen from '../loading/loading';
import NotFound from '../not-found-page/not-found-page';


type OffersPageProps = {
  cardClass: string;
  offerListClass: string;
}

function OffersPage({ cardClass, offerListClass }: OffersPageProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const { id } = useParams();

  const handleFormSubmit = (rating: number, comment: string): void => {
    dispatch(postUserComment({ comment, id, rating }));
  };

  const detailedOffer = useAppSelector(getDetailedOffer);
  const nearbyOffers = useAppSelector(getNearByOffers);
  const reviews = useAppSelector(getReviews);

  const isOfferLoading = useAppSelector(getDetailedOfferLoadingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailedOffer(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchReviews(id));
    }
  }, []);

  if (isOfferLoading) {
    return <LoadingScreen />;
  }

  if (detailedOffer) {
    return (
      <div className='page'>
        <Helmet>
          <title>{Titles.OffersTitle}</title>
        </Helmet>
        <header className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <div className='header__left'>
                <Logo />
              </div>
              <nav className='header__nav'>
                <NavigationList />
              </nav>
            </div>
          </div>
        </header>
        <main className='page__main page__main--offer'>
          <section className='offer'>
            <div className='offer__gallery-container container'>
              {detailedOffer && <OfferGallery imagesUrl={detailedOffer.images} />}
            </div>
            <div className='offer__container container'>
              <div className='offer__wrapper'>
                {detailedOffer.isPremium ? <div className='offer__mark'><span>Premium</span></div> : ''}
                <div className='offer__name-wrapper'>
                  <h1 className='offer__name'>
                    {detailedOffer?.title}
                  </h1>
                  <button className='offer__bookmark-button button' type='button'>
                    <svg className='offer__bookmark-icon' width={31} height={33}>
                      <use xlinkHref='#icon-bookmark' />
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                </div>
                <div className='offer__rating rating'>
                  <div className='offer__stars rating__stars'>
                    <span style={{ width: '80%' }} />
                    <span className='visually-hidden'>Rating</span>
                  </div>
                  <span className='offer__rating-value rating__value'>{detailedOffer.rating}</span>
                </div>
                <ul className='offer__features'>
                  <li className='offer__feature offer__feature--entire'>{detailedOffer.type}</li>
                  <li className='offer__feature offer__feature--bedrooms'>
                    {detailedOffer.bedrooms} Bedrooms
                  </li>
                  <li className='offer__feature offer__feature--adults'>
                    Max {detailedOffer.maxAdults} adults
                  </li>
                </ul>
                <div className='offer__price'>
                  <b className='offer__price-value'>{detailedOffer.price}</b>
                  <span className='offer__price-text'>&nbsp;night</span>
                </div>
                <div className='offer__inside'>
                  <h2 className='offer__inside-title'>What&apos;s inside</h2>
                  <ul className='offer__inside-list'>
                    {detailedOffer.goods.map((good) =>
                      <li key={good} className='offer__inside-item'>{good}</li>)}
                  </ul>
                </div>
                <div className='offer__host'>
                  <h2 className='offer__host-title'>Meet the host</h2>
                  <div className='offer__host-user user'>
                    <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                      <img
                        className='offer__avatar user__avatar'
                        src={detailedOffer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt='Host avatar'
                      />
                    </div>
                    <span className='offer__user-name'>{detailedOffer.host.name}</span>
                    <span className='offer__user-status'>{detailedOffer.host.isPro ? 'Pro' : ''}</span>
                  </div>
                  <div className='offer__description'>
                    <p className='offer__text'>
                      {detailedOffer?.description}
                    </p>
                  </div>
                </div>
                <section className='offer__reviews reviews'>
                  <h2 className='reviews__title'>
                    Reviews · <span className='reviews__amount'>{reviews.length}</span>
                  </h2>
                  <ReviewList reviews={reviews} />
                  <CommentForm
                    handleFormSubmit={handleFormSubmit}
                  />
                </section>
              </div>
            </div>
            <section className='offer__map map'>
              <Map
                offers={nearbyOffers.slice(0, 3)}
                city={detailedOffer.city}
                activeCard={activeCard}
              />
            </section>
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              <OffersList
                offers={nearbyOffers.slice(0, 3)}
                activeCard={activeCard}
                updateActiveCard={setActiveCard}
                cardClass={cardClass}
                offerListClass={offerListClass}
              />
            </section>
          </div>
        </main>
      </div>
    );
  } else {
    return <NotFound />;
  }
}

export default OffersPage;
