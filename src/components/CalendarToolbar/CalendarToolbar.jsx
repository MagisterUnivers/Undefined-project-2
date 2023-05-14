import React from 'react';
import styled from 'styled-components';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
export const CalendarToolbar = ({
  title,
  prevButtonProps,
  nextButtonProps,
  className,
}) => {
  return (
    <HeaderDivGroup>
    <div className={`${className} flex justify-between`}>
      <PeriodPaginator
        {...{
          title,
          prevButtonProps,
          nextButtonProps,
        }}
      />
    </div>
    <PeriodTypeSelect/>
    </HeaderDivGroup>
  );
};
const HeaderDivGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 32px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 24px;
    gap: 18px;
  }
`;
