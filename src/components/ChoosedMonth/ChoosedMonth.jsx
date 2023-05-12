import React from 'react';
import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';

export const ChoosedMonth = ({
  state,
  headerClassName,
  dateFormatter,
  daysOfWeekLabels,
}) => {
  return (
    <div>
      <MonthCalendarHead
        {...{ daysOfWeekLabels, dateFormatter, className: headerClassName }}
        className="mb-3"
      />

      <CalendarTable {...{ daysOfWeekLabels, dateFormatter, state }} />
    </div>
  );
};
