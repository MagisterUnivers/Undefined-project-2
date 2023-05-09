import { UserInfo } from 'components/UserInfo/UserInfo';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, IconButton } from '@mui/material';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
export const Header = () => {
  return (
    <Box
      component="header"
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <IconButton>
        <MenuRoundedIcon
          sx={{
            width: { mobile: 24, tablet: 34 },
            height: { mobile: 24, tablet: 34 },
          }}
        />
      </IconButton>
      <Box sx={{ display: 'flex' }}>
        <ThemeToggler />
        <UserInfo />
      </Box>
    </Box>
  );
};
