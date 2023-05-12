import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { useEventTasks } from '../../../redux';

/**
 * Cell of the month calendar
 */
export const CalendarCell = ({ state, date }) => {
  const monthTasks = useEventTasks({ date: date.toDate() });

  const ref = useRef(null);

  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td
      {...cellProps}
      ref={ref}
      className={`
       h-20 border-r last:border-r-0  border-gray-3  dark:border-gray-4
     
      ${isDisabled ? 'disabled' : ''} 
      ${isUnavailable ? 'unavailable' : ''}`}
    >
      <button
        className={`relative w-full h-full ${
          isOutsideVisibleRange ? 'text-gray-200 ' : ''
        }`}
        {...buttonProps}
      >
        <span
          className={`font-inter font-bold text-xs 
            tablet:text-16 tablet:leading-17 desktop:text-16 desktop:leading-17
          text-black-text dark:text-white absolute top-12px right-10px 
          w-5 h-6 tablet:w-7 tablet:h-7 desktop:w-7 desktop:h-7 
          rounded-md tablet:rounded-8 desktop:rounded-8 
          flex justify-center items-center
          ${isSelected ? `text-white bg-blue-1` : ''} `}
        >
          {formattedDate}
        </span>

        {JSON.stringify(monthTasks.length)}
      </button>
    </td>
  );
};
