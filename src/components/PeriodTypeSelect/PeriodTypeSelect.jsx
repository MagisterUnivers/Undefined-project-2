import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { selectTheme, useCurrentDate } from '../../redux';
import { getStringFromDate } from '../../utils';
import { useSelector } from 'react-redux';

export const PeriodTypeSelect = () => {
  const [currentDay] = useCurrentDate();
  const date_key = getStringFromDate(currentDay?.toDate());
  const theme = useSelector(selectTheme);
  return (
    <>
      {theme === 'light' ? (
        <ButtonGroup>
          <Button to="/main/calendar/" className="dark:bg-gray-bg" $light>
            Month
          </Button>
          <Button
            to={`/main/calendar/day/${date_key}`}
            className="dark:bg-gray-bg"
            $light
          >
            Day
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <Button to="/main/calendar/" className="dark:bg-gray-bg">
            Month
          </Button>
          <Button
            to={`/main/calendar/day/${date_key}`}
            className="dark:bg-gray-bg"
          >
            Day
          </Button>
        </ButtonGroup>
      )}
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
    background-color: ${(props) => (props.$light ? '#cae8ff' : '#3E85F3')};
    color: ${(props) => (props.$light ? '#3E85F3' : '#ffffff')};
  }
`;
