import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchUserDataThunk } from 'redux/UserInfo/userInfoOperations';
import { selectUser } from 'redux/selectors';
// import { SideBar } from './SideBar/SideBar';
// import { useState } from 'react';

export const MainLayout = () => {
  const { email } = useSelector(selectUser);
  console.log(email);
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
    <>
      {' '}
      {/* <Header />
      <SideBar /> */}
      {/* <SideBar
        toggleSidebar={toggleSidebar}
        isOpenSidebarMobile={isOpenSidebarMobile}
      />
      <button type="button" onClick={toggleSidebar}>
        burger-btn
      </button> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
