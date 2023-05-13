import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const PeriodTypeSelect = () => {
  return (
    <>
      <ButtonGroup>
        <Button to="calendar">Month</Button>
        <Button to="/main/calendar/day/:currentDay">Day</Button>
      </ButtonGroup>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
  width: 164px;
  height: 34px;
  border-radius: 8px;
  overflow: hidden;
  &:nth-child(2) {
    border-left: 1px solid rgba(62, 133, 243, 0.2);
  }
`;
const Button = styled(NavLink)`
  text-decoration: none;
  background: #e3f3ff;
  width: 82px;
  height: 34px;
  text-align: center;
  padding: 8px 16px;
  color: #3e85f3;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18/16;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  :hover {
    background: #cae8ff;
  }
  &.active {
    background: #cae8ff;
  }
`;
