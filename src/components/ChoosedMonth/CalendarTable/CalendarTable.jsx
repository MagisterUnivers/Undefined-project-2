import React from 'react';
import { useLocale } from 'react-aria';
import { getWeeksInMonth } from '@internationalized/date';
// import { MonthCalendarHead } from '../MonthCalendarHead';
import { CalendarCell } from '../CalendarTable/CalendarCell';

import { fillFirstDays, splitArrayIntoChunks } from '../../../utils';

export const CalendarTable = ({
  state,
  dateFormatter,
  daysOfWeekLabels,
  className,
  calendarProps,
}) => {
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
    <table
      className={`w-full rounded-lg border border-gray-3 table-fixed  
    dark:border-gray-4 bg-white dark:bg-gray-bg 
    text-black-text  dark:text-white 
    overflow-hidden shadow-sm ${className}`}
    >
      <tbody>
        {weeks.map((daysInWeek, weekIndex) => {
          // { monday, tuesday }
          const datesOfWeekByDayLabel = daysInWeek.reduce((map, item) => {
            const date = item.toDate();
            const dayLabel = dateFormatter.format(date);

            map.set(dayLabel, item);

            return map;
          }, new Map());

          return (
            <tr
              key={weekIndex}
              className="border-gray-3 dark:border-gray-4 border-b last:border-b-0"
            >
              {daysOfWeekLabels.map((label, index) => {
                // get the day sorted by days the days of the week order
                const date = datesOfWeekByDayLabel.get(label);

                if (!date || date.notIncluded) {
                  return (
                    <td
                      key={index}
                      data-meta="placeholder-cell"
                      className=" border-gray-3 dark:border-gray-4 border-r last:border-r-0  "
                    ></td>
                  );
                }

                return (
                  <CalendarCell key={index} {...{ state, date, locale }} />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
