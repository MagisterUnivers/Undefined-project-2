import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsOnline } from '../../redux/selectors';

export const UserNav = () => {
  // const isLoggedIn = useSelector(selectIsOnline);

  // if (!isLoggedIn) {
  //   return null;
  // }

  return (
    <nav
      className={`flex gap-4 flex-col
      text-14 tablet:text-16 
      desktop:text-16 leading-17 
      tablet:leading-19 desktop:leading-19`}
    >
      <NavLink
        className={({ isActive }) => {
          return [
            'font-inter flex items-center gap-2 rounded-lg py-2 px-3  w-10 tablet:w-11 desktop:w-12 h-10 tablet:h-11 desktop:h-11',
            !isActive ? 'text-gray-1 dark:text-white' : '',
            isActive ? 'text-blue-1 bg-blue-2' : '',
          ].join(' ');
        }}
        to="/account"
      >
        {({ isActive }) => {
          return (
            <>
              <svg
                className={` h-5 w-5 tablet:h-6 desktop:h-6 ${
                  isActive
                    ? 'stroke-blue-1'
                    : 'stroke-gray-1 dark:stroke-white '
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                  d="M13.333 15 15 16.667l3.333-3.334M10 12.917H6.25c-.541 0-.812 0-1.04.026a4 4 0 0 0-3.517 3.516c-.026.228-.026.5-.026 1.041v0M8.333 10a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                />
              </svg>
              My Account
            </>
          );
        }}
      </NavLink>

      <NavLink
        className={({ isActive }) => {
          return [
            'font-inter flex items-center gap-2 rounded-lg py-2 px-3  w-10 tablet:w-11 desktop:w-12 h-10 tablet:h-11 desktop:h-11',
            !isActive ? 'text-gray-1 dark:text-white' : '',
            isActive ? 'text-blue-1 bg-blue-2' : '',
          ].join(' ');
        }}
        to="/calendar"
      >
        {({ isActive }) => {
          return (
            <>
              <svg
                className={` h-5 w-5 tablet:h-6 desktop:h-6 ${
                  isActive
                    ? 'stroke-blue-1'
                    : 'stroke-gray-1 dark:stroke-white '
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M17.5 8.333h-15m15 2.084V7.333c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2.5 5.233 2.5 5.933 2.5 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272H10m3.333-16.666V5M6.667 1.667V5m5.416 10.833L13.75 17.5l3.75-3.75"
                />
              </svg>
              Calendar
            </>
          );
        }}
      </NavLink>
    </nav>
  );
};
