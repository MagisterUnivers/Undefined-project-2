import React from 'react';
import { useLocale } from 'react-aria';
import { getWeeksInMonth } from '@internationalized/date';
import { MonthCalendarHead } from '../MonthCalendarHead';
import { CalendarCell } from '../CalendarTable/CalendarCell';

import { fillFirstDays, splitArrayIntoChunks } from '../../../utils';

export const CalendarTable = ({ state, dateFormatter, daysOfWeekLabels }) => {
  const { locale } = useLocale();

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = !state
    ? []
    : getWeeksInMonth(state?.visibleRange?.start, locale);

  const { start: startDate, end: endDate } = state?.visibleRange ?? {};

  const isBetweenVisibleRange = (date) => {
    return date >= startDate && date <= endDate;
  };

  const allDays = [...new Array(weeksInMonth).keys()].reduce(
    (accumulator, weekIndex) => {
      const days = state?.getDatesInWeek(weekIndex);

      const visibleDays = (days ?? []).filter(isBetweenVisibleRange);

      return [...accumulator, ...visibleDays];
    },
    []
  );

  // add the days before monday
  const sanitizedDays = fillFirstDays(allDays);

  const weeks = splitArrayIntoChunks(sanitizedDays, 7);

  return (
    <div className="grid grid-cols-7  border-r border-t border-gray-1">
      {weeks.map((daysInWeek) => {
        // { monday, tuesday }
        const datesOfWeekByDayLabel = daysInWeek.reduce((map, item) => {
          const date = item.toDate();
          const dayLabel = dateFormatter.format(date);

          map.set(dayLabel, item);

          return map;
        }, new Map());

        // to start in monday
        return daysOfWeekLabels.map((label, index) => {
          // get the day sorted by days the days of the week order
          const date = datesOfWeekByDayLabel.get(label);

          if (!date || date.notIncluded) {
            return (
              <span
                key={index}
                className="border-l border-b border-gray-1 "
              ></span>
            );
          }

          return <CalendarCell key={index} state={state} date={date} />;
        });
      })}
    </div>
  );
};
