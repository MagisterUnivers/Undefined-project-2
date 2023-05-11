import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/UserInfo/userInfoSlice';
import { selectTheme } from 'redux/selectors';
export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <IconButton onClick={() => dispatch(setTheme())}>
      {theme === 'light' ? (
        <DarkModeOutlinedIcon
          htmlColor="#3E85F3"
          sx={{
            width: { mobile: 24, tablet: 32 },
            height: { mobile: 24, tablet: 32 },
          }}
        />
      ) : (
        <WbSunnyOutlinedIcon
          htmlColor="#3E85F3"
          sx={{
            width: { mobile: 24, tablet: 32 },
            height: { mobile: 24, tablet: 32 },
          }}
        />
      )}
    </IconButton>
  );
};
