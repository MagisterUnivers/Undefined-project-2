import React from 'react';

export const MonthCalendarHead = ({ className, daysOfWeekLabels }) => {
  return (
    <div
      className={`grid grid-cols-7  border-r border-t border-gray-1 
      ${className}`}
    >
      {daysOfWeekLabels.map((dayLabel) => {
        const shortLabel = dayLabel.substring(0, 3).toUpperCase();

        return (
          <span
            className={`h-10 text-center border-l border-b border-gray-1`}
            key={dayLabel}
          >
            {shortLabel}
          </span>
        );
      })}
    </div>
  );
};
