import { useRef } from 'react';
import { SORT } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { sortOffers } from '../../store/action';


export function SortForm(): React.JSX.Element {

  const currentSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const sortRef = useRef<HTMLUListElement | null>(null);

  const onSortOffers = (sortType: string) => {
    dispatch(sortOffers(sortType));
    sortRef?.current?.classList.remove('places__options--opened');
  };

  const onToggleSort = ({ target }: React.MouseEvent<HTMLElement>) => {
    if ((target as HTMLElement).className === 'places__sorting-type') {
      sortRef?.current?.classList.toggle('places__options--opened');
    }

  };

  return (

    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={(evt) => onToggleSort(evt)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom " ref={sortRef}>
        {SORT.map((sortType: string) => (
          <li key={sortType}
            className={`places__option ${currentSortType === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => onSortOffers(sortType)}
          >
            {sortType}
          </li>)

        )}
      </ul>
    </form>
  );
}

