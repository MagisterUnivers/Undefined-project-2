import { Box } from '@mui/material';
import styles from './SideBarTest.module.css';

import { ReactComponent as GooseLogo } from './icons/goose.svg';
import styled from 'styled-components';
import { UserNav } from 'components/UserNav/UserNav';
import LogOut from 'components/Btn/LogoutBtn/LogOut';
import { useMediaQuery } from 'react-responsive';

export const SideBarTest = ({ isOpenSidebarMobile }) => {
  const className = isOpenSidebarMobile
    ? styles.container_1
    : styles.container_2;
  console.log(isOpenSidebarMobile);
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1439.98px)' });
  return isMobileOrTablet ? (
    <aside className={className}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <StyledGooseLogo />
          <StyledH2>
            G<StyledSpan>oo</StyledSpan>seTrack
          </StyledH2>
        </Box>
        <Box>
          <StyledH3>User Panel</StyledH3>
          <UserNav />
        </Box>
      </Box>
      <LogOut />
    </aside>
  ) : (
    <Box
      component="aside"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px 24px 24px 24px',
      }}
      className=" bg-white dark:bg-black transition-colors delay-200"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <StyledGooseLogo />
          <StyledH2>
            G<StyledSpan>oo</StyledSpan>seTrack
          </StyledH2>
        </Box>
        <Box>
          <StyledH3>User Panel</StyledH3>
          <UserNav />
        </Box>
      </Box>
      <LogOut />
    </Box>
  );
};

const StyledGooseLogo = styled(GooseLogo)`
  width: 71px;
  height: 68px;
`;
const StyledH2 = styled.h2`
  font-family: inherit;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(24 / 24);
  color: #3e85f3;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;
const StyledSpan = styled.span`
  font-style: italic;
`;

const StyledH3 = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(17 / 14);
  margin-bottom: 32px;

  color: #7e7d82;
`;
