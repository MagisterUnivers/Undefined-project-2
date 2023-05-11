// import { Header } from 'components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchUserDataThunk } from 'redux/UserInfo/userInfoOperations';
import { selectUser } from 'redux/selectors';
// import { SideBar } from './SideBar/SideBar';
// import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { Box } from '@mui/material';
import { SideBarTest } from 'components/SideBarTest/SideBarTest';
import { useMediaQuery } from 'react-responsive';

export const MainLayout = () => {
  document.body.style.backgroundColor = '#F7F6F9';
  const { email } = useSelector(selectUser);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1439.98px)' });

  const dispatch = useDispatch();
  useEffect(() => {
    if (email) {
      dispatch(fetchUserDataThunk());
    }
  }, [dispatch, email]);

  // const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpenSidebarMobile(!isOpenSidebarMobile);
  // };

  return (
    <Box
      sx={{
        display: 'flex',
        // border: '5px solid red',
        height: '100vh',
      }}
    >
      {/* <SideBar
        toggleSidebar={toggleSidebar}
        isOpenSidebarMobile={isOpenSidebarMobile}
      /> */}
      {!isTabletOrMobile && <SideBarTest />}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // border: '3px solid blue',
          width: '100%',
          padding: {
            mobile: '24px 20px 20px 20px',
            tablet: '24px 32px 18px 32px',
            desktop: '40px 32px 32px 32px',
          },
        }}
      >
        <Box
          sx={{
            // border: '1px solid teal',
            display: 'flex',
            flexDirection: 'column',
            gap: { mobile: '64px', desktop: '32px' },
            margin: '0 auto',
          }}
        >
          <Header />
          <main
            style={{
              // border: '1px solid teal',
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
