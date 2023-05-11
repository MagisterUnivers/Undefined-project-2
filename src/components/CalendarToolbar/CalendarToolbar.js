import React, { useState, useEffect } from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';

export const CalendarToolbar = ({}) => {
  return (
    <div className="flex justify-between">
      <PeriodPaginator /> <PeriodTypeSelect />
    </div>
  );
};
