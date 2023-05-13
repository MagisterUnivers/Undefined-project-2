import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useCurrentDate } from '../../redux';
import { getCalendarKey } from '../../utils';

export const PeriodTypeSelect = () => {
  const [currentDay] = useCurrentDate();
  const date_key = getCalendarKey({ date: currentDay.toDate() });

  return (
    <>
      <ButtonGroup>
        <Button to="/main/calendar/">Month</Button>
        <Button to={`/main/calendar/day/${date_key}`}>Day</Button>
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
  &:nth-child(1) {
    border-left: 1px solid rgba(62, 133, 243, 0.2);
  }
  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: 0px;
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
