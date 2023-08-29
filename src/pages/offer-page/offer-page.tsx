import Logo from '../../components/logo/logo';
import { useParams } from 'react-router-dom';
import NavigationListMemo from '../../components/navigation-list/navigation-list';
import { Helmet } from 'react-helmet-async';
import { BookMarkButtonClasses, BookMarkOfferSize, Titles } from '../../const/const';
import CommentForm from '../../components/comment-form/comment-form';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { useEffect } from 'react';
import { fetchDetailedOffer, fetchNearbyOffers, fetchReviews, postUserComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getDetailedOffer, getDetailedOfferLoadingStatus, getNearByOffers, getReviews } from '../../store/data-process/selectors';
import LoadingScreen from '../loading/loading';
import NotFound from '../not-found-page/not-found-page';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { Offer } from '../../types';
import { getRatingCount } from '../../utils/utils';
import PlaceCard from '../../components/card/card';


type OffersPageProps = {
  cardClass: string;
  offerListClass: string;
}

function OffersPage({ cardClass, offerListClass }: OffersPageProps): React.JSX.Element {

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const handleFormSubmit = (rating: number | undefined, comment: string | undefined): void => {
    dispatch(postUserComment({ comment, id, rating }));
  };

  const detailedOffer = useAppSelector(getDetailedOffer);
  const nearbyOffers = useAppSelector(getNearByOffers);
  const reviews = useAppSelector(getReviews);

  const offersToShowInMap = nearbyOffers.slice(0, 3).concat(detailedOffer as unknown as Offer);

  const isOfferLoading = useAppSelector(getDetailedOfferLoadingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailedOffer(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchReviews(id));
    }
  }, [id ,dispatch]);

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
                <NavigationListMemo />
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
                  <FavoriteButton
                    id={detailedOffer.id}
                    isFavorite={detailedOffer.isFavorite}
                    bookMarkClass={BookMarkButtonClasses.detailedOfferCard}
                    bookMarkSize={BookMarkOfferSize}
                  />
                </div>
                <div className='offer__rating rating'>
                  <div className='offer__stars rating__stars'>
                    <span style={getRatingCount(detailedOffer.rating)} />
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
                  <b className='offer__price-value'>€{detailedOffer.price}</b>
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

                  <ReviewList reviews={reviews} />
                  <CommentForm
                    handleFormSubmit={handleFormSubmit}
                  />
                </section>
              </div>
            </div>
            <section className='offer__map map'>
              <Map
                offers={offersToShowInMap}
                city={detailedOffer.city}
                activeCard={detailedOffer.id}
              />
            </section>
          </section>
          <div className='container'>
            <section className='near-places places'>
              <h2 className='near-places__title'>
                Other places in the neighbourhood
              </h2>
              <div className={`${offerListClass} places__list tabs__content`}>
                {nearbyOffers.slice(0, 3).map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    cardClass={cardClass}
                  />
                ))}
              </div>
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
