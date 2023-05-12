import React from 'react';
import { CalendarToolbar, ChoosedDay, ChoosedMonth } from '../../components';
import { useCalendar } from '../../components/ChoosedMonth';

export const CalendarPage = () => {
  const {
    calendarProps,
    title,
    prevButtonProps,
    nextButtonProps,
    state,
    daysOfWeekLabels,
    dateFormatter,
  } = useCalendar();

  // consume hook
  const isMonthView = true;
  const properties = { state, calendarProps, daysOfWeekLabels, dateFormatter };

  return (
    <div>
      <CalendarToolbar {...{ title, prevButtonProps, nextButtonProps }} />

      {isMonthView && <ChoosedMonth {...properties} />}
      {!isMonthView && <ChoosedDay {...properties} />}
    </div>
  );
};
