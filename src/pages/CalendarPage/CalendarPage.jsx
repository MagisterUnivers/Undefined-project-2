import React, { useState, useEffect } from 'react';
import { CalendarToolbar, ChoosedDay, ChoosedMonth } from '../../components';

export const CalendarPage = () => {
  // consume hook
  const isMonthView = true;

  return (
    <div>
      <CalendarToolbar />

      {isMonthView ? <ChoosedMonth /> : <ChoosedDay />}
    </div>
  );
};
