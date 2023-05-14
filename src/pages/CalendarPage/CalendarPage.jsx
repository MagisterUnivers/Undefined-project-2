import React from 'react';
import { CalendarToolbar } from '../../components';
import { useCalendar } from './useCalendar';
import { Outlet } from 'react-router-dom';

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

  const properties = { state, calendarProps, daysOfWeekLabels, dateFormatter };

  return (
    <div>
      <CalendarToolbar {...{ title, prevButtonProps, nextButtonProps }} />

      <Outlet context={properties} />
    </div>
  );
};
