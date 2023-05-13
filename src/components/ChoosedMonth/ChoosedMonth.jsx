import React from 'react';
import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';

export const ChoosedMonth = ({
  state,
  headerClassName,
  dateFormatter,
  daysOfWeekLabels,
  calendarProps,
}) => {
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
