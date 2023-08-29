import { Review } from '../../types';
import { getSortedReviews } from '../../utils/utils';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({ reviews }: ReviewListProps) {

  let sortedReviews: Review[] = [];
  if (reviews.length) {
    sortedReviews = getSortedReviews(reviews);
  }

  return (
    <>
      <h2 className='reviews__title'>
        Reviews · <span className='reviews__amount'>{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
    </>

  );
}

export default ReviewList;
