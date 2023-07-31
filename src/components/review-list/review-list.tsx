import { Review } from '../../types';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps) {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
    </ul>
  );
}

export default ReviewList;
