import { Box } from '@mui/material';
import { ReactComponent as GooseLogo } from './icons/goose.svg';
import styled from 'styled-components';
import { UserNav } from 'components/UserNav/UserNav';
import LogOut from 'components/Btn/LogoutBtn/LogOut';

export const SideBarTest = () => {
  return (
    <Box
      component="aside"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px 24px 24px 24px',
      }}
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
