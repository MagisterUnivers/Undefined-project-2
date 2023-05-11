import { UserInfo } from 'components/UserInfo/UserInfo';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, IconButton } from '@mui/material';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header = ({ toggleSidebar }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439.98px)' });
  const location = useLocation();
  const pageTitle =
    location.pathname.slice(1, 2).toUpperCase() + location.pathname.slice(2);
  console.log(location);
  console.log(typeof pageTitle);
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid black',
        maxWidth: { tablet: '704px', desktop: '1087px' },
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
      ) : (
        <StyledTypography component="h1">{pageTitle}</StyledTypography>
      )}

      <Box sx={{ display: 'flex' }}>
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
  line-height: calc(32 / 32);

  color: #111111;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;
