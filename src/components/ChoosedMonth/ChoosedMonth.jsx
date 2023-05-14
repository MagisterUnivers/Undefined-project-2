import React from 'react';
import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';
import { useOutletContext } from 'react-router-dom';

export const ChoosedMonth = () => {
  const {
    state,
    headerClassName,
    dateFormatter,
    daysOfWeekLabels,
    calendarProps,
  } = useOutletContext();

  return (
    <div {...calendarProps} className="calendar">
      <MonthCalendarHead
        {...{ daysOfWeekLabels, dateFormatter, className: headerClassName }}
        className=" mb-4"
      />

      <CalendarTable
        {...{ daysOfWeekLabels, dateFormatter, state, calendarProps }}
      />
    </div>
  );
};
