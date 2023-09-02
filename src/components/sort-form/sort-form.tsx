import { memo, useRef } from 'react';
import { SORT_TYPES } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { sortOffers } from '../../store/app-process/app-process';
import { getSortType } from '../../store/app-process/selectors';


function SortForm(): React.JSX.Element {

  const currentSortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  const sortRef = useRef<HTMLUListElement | null>(null);

  const handleOffersSort = (sortType: string) => {
    dispatch(sortOffers(sortType));
    sortRef?.current?.classList.remove('places__options--opened');
  };

  const handleSelectSortToggle = ({ target }: React.MouseEvent<HTMLElement>) => {
    if ((target as HTMLElement).className === 'places__sorting-type') {
      sortRef?.current?.classList.toggle('places__options--opened');
    }

  };

  return (

    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={(evt) => handleSelectSortToggle(evt)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom " ref={sortRef}>
        {SORT_TYPES.map((sortType: string) => (
          <li key={sortType}
            className={`places__option ${currentSortType === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleOffersSort(sortType)}
          >
            {sortType}
          </li>)

        )}
      </ul>
    </form>
  );
}

const SortFormMemo = memo(SortForm);

export default SortFormMemo;
