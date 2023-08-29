import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus, MAX_CHARACTERS_COUNT, MIN_CHARACTERS_COUNT } from '../../const/const';
import { setFormComment, setFormRating } from '../../store/data-process/data-process';
import { getFormComment, getFormRating } from '../../store/data-process/selectors';

interface Stars {
  [key: number]: string;
}

const starsTitle: Stars = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly'
};

type CommentForm = {
  handleFormSubmit: (rating: number | undefined, review: string | undefined) => void;
}

const starsValues: number[] = [5, 4, 3, 2, 1];

function CommentForm({handleFormSubmit}: CommentForm): React.JSX.Element {

  const authStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const setFormRatingData = (data: number) => {
    dispatch(setFormRating(data));
  };

  const setFormCommentData = (data: string) => {
    dispatch(setFormComment(data));
  };

  const review = useAppSelector(getFormComment);

  const rating = useAppSelector(getFormRating);

  const submitFormHandler = () => {
    handleFormSubmit(rating, review);
  };

  const buttonIsDisabled = () => {
    if (review && rating) {
      return review.length < MIN_CHARACTERS_COUNT
      || review.length > MAX_CHARACTERS_COUNT
      || !+rating || authStatus !== AuthorizationStatus.Auth;
    } else {
      return true;
    }
  };

  const commentFormIsDisabled = authStatus !== AuthorizationStatus.Auth;


  return (
    <div className="reviews__form form" >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starsValues.map((star: number) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={star}
              id={`${star}-stars`}
              type="radio"
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setFormRatingData(Number(evt.target.defaultValue))}
              checked={rating === star}
              disabled={commentFormIsDisabled}
            />
            <label
              htmlFor={`${star}-stars`}
              className="reviews__rating-label form__rating-label"
              title={starsTitle[star]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => setFormCommentData(evt.target.value)}
        disabled={commentFormIsDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          onClick={submitFormHandler}
          disabled={buttonIsDisabled()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentForm;
