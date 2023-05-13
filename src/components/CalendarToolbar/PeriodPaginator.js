import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { PeriodTypeSelect } from './PeriodTypeSelect';
export const PeriodPaginator = ({
  title,
  prevButtonProps,
  nextButtonProps,
}) => {
  return (
    <HeaderDivGroup>
      <DivGroup>
        <Button>{title}</Button>
        <ButtonGroup>
          <IconButton {...prevButtonProps}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton {...nextButtonProps}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </ButtonGroup>
      </DivGroup>
      <PeriodTypeSelect />
    </HeaderDivGroup>
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
`;
const DivGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const HeaderDivGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 32px;
`;
