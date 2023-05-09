import { Header } from 'components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchUserDataThunk } from 'redux/UserInfo/userInfoOperations';
import { selectUser } from 'redux/selectors';

export const MainLayout = () => {
  const { email } = useSelector(selectUser);
  console.log(email);
  const dispatch = useDispatch();
  useEffect(() => {
    if (email) {
      dispatch(fetchUserDataThunk());
    }
  }, [dispatch, email]);
  return (
    <>
      {' '}
      <Header />
      {/*  <SideBar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
