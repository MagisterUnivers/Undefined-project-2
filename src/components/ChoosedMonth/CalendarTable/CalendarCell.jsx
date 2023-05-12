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
    <div
      {...cellProps}
      ref={ref}
      className={`
        h-20 border-l border-b border-gray-1 
      ${isSelected ? ' bg-blue-300' : ''} 
      ${isDisabled ? 'disabled' : ''} 
      ${isUnavailable ? 'unavailable' : ''}`}
    >
      <button
        className={`relative w-full h-full ${
          isOutsideVisibleRange ? 'text-gray-200' : ''
        }`}
        {...buttonProps}
      >
        <span className="absolute top-2 right-2">{formattedDate}</span>
      </button>
    </div>
  );
};
