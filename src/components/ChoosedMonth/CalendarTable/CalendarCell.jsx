import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';

/**
 * Cell of the month calendar
 */
export const CalendarCell = ({ state, date }) => {
  let ref = useRef(null);

  let {
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
      ${isSelected ? ' bg-blue-300' : ''} 
      ${isDisabled ? 'disabled' : ''} 
      ${isUnavailable ? 'unavailable' : ''}`}
    >
      <button
        className={`relative w-full h-full ${
          isOutsideVisibleRange ? 'text-gray-200 ' : ''
        }`}
        {...buttonProps}
      >
        <span className="absolute top-2 right-2">{formattedDate}</span>
      </button>
    </td>
  );
};
