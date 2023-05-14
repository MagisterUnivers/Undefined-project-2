import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { setCurrentMonth } from '../../redux';

export const PeriodPaginator = ({
  title,
  prevButtonProps: { onClick: previousClick, ...prevButtonProps },
  nextButtonProps: { onClick: nextClick, ...nextButtonProps },
}) => {
  const { currentDay } = useParams();
  const disablePaginator = !!currentDay;

  const previousOnClick = (event) => {
    if (disablePaginator) {
      event.preventDefault();

      return;
    }

    previousClick(event);

    setCurrentMonth((current) => {
      const currentMonth = new Date(current.year, current.month - 1, 1);
      const newMonth = moment(currentMonth).add('month', -1).toDate();

      return {
        year: newMonth.getFullYear(),
        month: newMonth.getMonth() + 1,
      };
    });
  };

  const nextOnClick = (event) => {
    if (disablePaginator) {
      event.preventDefault();

      return;
    }

    nextClick(event);

    setCurrentMonth((current) => {
      const currentMonth = new Date(current.year, current.month - 1, 1);

      const newMonth = moment(currentMonth).add('month', 1).toDate();

      return {
        year: newMonth.getFullYear(),
        month: newMonth.getMonth() + 1,
      };
    });
  };

  return (
    <DivGroup>
      <Button>{title}</Button>
      <ButtonGroup  className=" dark:bg-gray-bg">
        <IconButton {...prevButtonProps} onClick={previousOnClick}>
          <ArrowBackIosNewIcon
            className={`${
              disablePaginator ? ' text-gray-100  cursor-not-allowed' : ''
            }`}
            fontSize="small"
          />
        </IconButton>

        <IconButton {...nextButtonProps} onClick={nextOnClick}>
          <ArrowForwardIosIcon
            className={`${
              disablePaginator ? 'text-gray-100 cursor-not-allowed' : ''
            }`}
            fontSize="small"
          />
        </IconButton>
      </ButtonGroup>
    </DivGroup>
  );
};
const Button = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  padding: 8px 12px;
  background: #3e85f3;
  border-radius: 8px;
`;
const IconButton = styled.button`
  padding: 8px 10px;
  &:nth-child(2) {
    border-left: 1px solid rgba(220, 227, 229, 0.5);
  }
  color: grey;
  :hover {
    color: black;
  }
`;
const ButtonGroup = styled.div`
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 34px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    margin-left: auto;
  }
`;
const DivGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
