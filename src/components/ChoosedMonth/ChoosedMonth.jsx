import React from 'react';
import { CalendarTable } from './CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead';

export const ChoosedMonth = () => {
  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable />
    </div>
  );
};
