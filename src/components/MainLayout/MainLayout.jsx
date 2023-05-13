import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { fetchUserDataThunk, refreshThunk } from '../../redux';

import { Header } from 'components/Header/Header';
import { Box } from '@mui/material';
import { SideBarTest } from 'components/SideBarTest/SideBarTest';

export const MainLayout = () => {
  document.body.style.backgroundColor = '#F7F6F9';

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { error } = await dispatch(refreshThunk());

      if (error) return;

      dispatch(fetchUserDataThunk());
    })();
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
