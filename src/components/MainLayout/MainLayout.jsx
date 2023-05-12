import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { fetchUserDataThunk } from 'redux/UserInfo/userInfoOperations';
import { Header } from 'components/Header/Header';
import { Box } from '@mui/material';
import { SideBarTest } from 'components/SideBarTest/SideBarTest';
import { selectIsOnline } from 'redux/selectors';
import { Notify } from 'notiflix';

export const MainLayout = () => {
  const isOnline = useSelector(selectIsOnline);
  const navigate = useNavigate();
  document.body.style.backgroundColor = '#F7F6F9';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDataThunk());
  }, [dispatch]);

  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebarMobile(!isOpenSidebarMobile);
  };

  return (
    <Box
      className=" bg-gray-10 dark:bg-black"
      sx={{ display: 'flex', height: '100vh' }}
    >
      <SideBarTest
        isOpenSidebarMobile={isOpenSidebarMobile}
        toggleSidebar={toggleSidebar}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: {
            mobile: '16px 20px 20px 20px',
            tablet: '18px 32px 18px 32px',
            desktop: '36px 32px 32px 32px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { mobile: '64px', desktop: '32px' },
            margin: '0 auto',
            width: '100%',
          }}
        >
          <Header toggleSidebar={toggleSidebar} />
          <main
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <Outlet />
          </main>
        </Box>
      </Box>
    </Box>
  );
};
