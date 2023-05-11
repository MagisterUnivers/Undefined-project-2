import React from 'react';
import { useCalendarState } from 'react-stately';
import { useCalendar, useLocale, useCalendarCell } from 'react-aria';
import { getWeeksInMonth, createCalendar } from '@internationalized/date';
import {
  splitArrayIntoChunks,
  getDaysOfWeekLabels,
  fillFirstDays,
} from '../utils';

function CalendarCell({ state, date }) {
  let ref = React.useRef(null);

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
}

const CalendarHeader = ({ className, daysOfWeekLabels }) => {
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

const CalendarGrid = ({ state, ...props }) => {
  const { locale } = useLocale();

  const dateFormatter = new Intl.DateTimeFormat(locale, { weekday: 'long' });

  const { daysOfWeekLabels } = getDaysOfWeekLabels({ dateFormatter });

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  const { start: startDate, end: endDate } = state.visibleRange;

  const isBetweenVisibleRange = (date) => {
    return date >= startDate && date <= endDate;
  };

  const allDays = [...new Array(weeksInMonth).keys()].reduce(
    (accumulator, weekIndex) => {
      const days = state.getDatesInWeek(weekIndex);

      const visibleDays = days.filter(isBetweenVisibleRange);

      return [...accumulator, ...visibleDays];
    },
    []
  );

  // add the days before monday
  const sanitizedDays = fillFirstDays(allDays);

  const weeks = splitArrayIntoChunks(sanitizedDays, 7);

  return (
    <>
      <CalendarHeader daysOfWeekLabels={daysOfWeekLabels} className={'mb-3'} />

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
    </>
  );
};

export function Calendar(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let {
    calendarProps,
    prevButtonProps: {
      isDisabled: isDisabled1,
      onPress: prevOnClick,
      ...prevButtonProps
    },
    nextButtonProps: {
      isDisabled: isDisabled2,
      onPress: nextOnClick,
      ...nextButtonProps
    },
  } = useCalendar(props, state);

  const title = calendarProps['aria-label'];

  return (
    <div {...calendarProps} className=" w-3/4 m-auto mt-52">
      <div className="header">
        <h2>{title}</h2>

        <button {...prevButtonProps} onClick={prevOnClick}>
          &lt;
        </button>

        <button {...nextButtonProps} onClick={nextOnClick}>
          &gt;
        </button>
      </div>

      <CalendarGrid state={state} />
    </div>
  );
}
