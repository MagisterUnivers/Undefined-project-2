import React from 'react';

export const PeriodPaginator = ({
  title,
  prevButtonProps,
  nextButtonProps,
}) => {
  return (
    <div className="header">
      <h2>{title}</h2>

      <button {...prevButtonProps}>&lt;</button>

      <button {...nextButtonProps}>&gt;</button>
    </div>
  );
};
