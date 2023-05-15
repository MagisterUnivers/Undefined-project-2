import React from 'react';
import styled from 'styled-components';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { useLocation } from 'react-router-dom';
export const CalendarToolbar = ({
  title,
  prevButtonProps,
  nextButtonProps,
  className,
}) => {
  let widthFixed = true;
  const location = useLocation();
  if (location.pathname === '/main/calendar') {
    widthFixed = false;
  } else if (location.pathname === '/main/calendar/day') {
    widthFixed = true; //eslint-disable-line
  }
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
      <PeriodTypeSelect />
    </HeaderDivGroup>
  );
};
const HeaderDivGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 32px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 24px;
    gap: 18px;
    width: ${({ widthFixed }) => widthFixed && '335px'};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ widthFixed }) => widthFixed && '1087px'};
  }
`;
