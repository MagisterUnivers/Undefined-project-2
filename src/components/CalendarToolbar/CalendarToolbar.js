import React from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';

export const CalendarToolbar = ({
  title,
  prevButtonProps,
  nextButtonProps,
  className,
}) => {
  return (
    <div className={`${className} flex justify-between`}>
      <PeriodPaginator
        {...{
          title,
          prevButtonProps,
          nextButtonProps,
        }}
      />
      <PeriodTypeSelect />
    </div>
  );
};
