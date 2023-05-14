import { UserInfo } from 'components/UserInfo/UserInfo';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, IconButton } from '@mui/material';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectMonthDateMap } from 'redux/selectors';

export const Header = ({ toggleSidebar }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439.98px)' });
  const { pathname } = useLocation();
  const monthTasks = useSelector(selectMonthDateMap);
  const setPageTitle = () => {
    if (pathname.includes('account')) {
      return 'User Profile';
    } else if (pathname.includes('calendar')) {
      return 'Calendar';
    }
  };
  const checkToDoOnCurrentDay = () => {
    try {
      if (pathname.includes('/day/')) {
        const currentDay = pathname.slice(-10);
        const dayTasks = monthTasks[currentDay];
        const isSomeToDo = dayTasks.find(
          (dayTask) => dayTask.category === 'to-do'
        );
        return isSomeToDo;
      }
    } catch (error) {
      return false;
    }
  };
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {isTabletOrMobile ? (
        <IconButton onClick={toggleSidebar}>
          <MenuRoundedIcon
            sx={{
              width: { mobile: 24, tablet: 34 },
              height: { mobile: 24, tablet: 34 },
            }}
          />
        </IconButton>
      ) : checkToDoOnCurrentDay() ? (
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <img src={require('./goose.png')} width="64" alt="Motivation Goose" />
          <Box>
            <StyledTypography component="h1">Calendar</StyledTypography>
            <StyledP>
              <StyledSpan>Let go</StyledSpan> of the past and focus on the
              present!
            </StyledP>
          </Box>{' '}
        </Box>
      ) : (
        <StyledTypography component="h1">{setPageTitle()}</StyledTypography>
      )}

      <Box sx={{ display: 'flex', gap: { mobile: '6px', tablet: '2px' } }}>
        <ThemeToggler />
        <UserInfo />
      </Box>
    </Box>
  );
};

const StyledTypography = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 32px;
  line-height: 1;

  color: #111111;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

const StyledP = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);
  margin-top: 8px;
`;
const StyledSpan = styled.span`
  color: #3e85f3;
`;
