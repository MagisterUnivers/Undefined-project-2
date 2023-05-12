import React from 'react';
import { useDispatch } from 'react-redux';
// import { selectIsOnline } from '../../../redux/selectors';
import styles from './LogOut.module.scss';
import { logoutThunk } from '../../../redux/Auth/authOperations';
import { useNavigate } from 'react-router';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsOnline);

  const handleLogout = () => {
    dispatch(logoutThunk()).then(() => navigate('/'));
    console.log('User is Logged Out');
  };

  // if (!isLoggedIn) {
  //   return null;
  // }

  return (
    <>
      <button className={styles.logout_button} onClick={handleLogout}>
        Log out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12.333 13.167 16.5 9m0 0-4.167-4.167M16.5 9h-10m0-7.5h-1c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C1.5 3.4 1.5 4.1 1.5 5.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.4 16.5 4.1 16.5 5.5 16.5h1"
          />
        </svg>
      </button>
    </>
  );
};

export default LogOut;
