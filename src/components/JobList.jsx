import { useSelector, useDispatch } from 'react-redux';
import { selectVisiblePositions } from '../store/positions/position-selectors';
import { selectFilters } from '../store/filters/filter-selectors';
import { JobPosition } from './JobPosition';
import { addFilter } from '../store/filters/filter-actions';

export const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => {
    return selectVisiblePositions(state, currentFilters);
  });
  const handleAddDilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddDilter={handleAddDilter}
        />
      ))}
    </div>
  );
};
