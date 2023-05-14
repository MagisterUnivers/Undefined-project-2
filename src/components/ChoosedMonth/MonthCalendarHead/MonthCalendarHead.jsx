import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const MonthCalendarHead = ({ className, daysOfWeekLabels }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return (
    <div
      className={`grid grid-cols-7 rounded-8 border  border-gray-3 
       bg-white dark:bg-gray-bg 
    dark:border-gray-4 overflow-hidden 
      ${className}`}
    >
      {daysOfWeekLabels?.map((dayLabel) => {
        let shortLabel = dayLabel.substring(0, 3).toUpperCase();
        if (isMobile) {
          shortLabel = dayLabel.substring(0, 1).toUpperCase();
        }
        return (
          <span
            className={` flex justify-center items-center
            h-10 text-center  text-gray-2 dark:text-white 
            font-inter font-bold text-16 leading-17 
            border-r last:border-r-0  border-gray-3 
             dark:border-gray-4`}
            key={dayLabel}
          >
            {shortLabel}
          </span>
        );
      })}
    </div>
  );
};
