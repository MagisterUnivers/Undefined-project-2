// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import { Route, Routes, Navigate } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import { UserForm } from './Forms/UserForm/UserForm';
import AccountPage from 'pages/AccountPage/AccountPage';
// import { Header } from './Header/Header';

import { Calendar } from '../pages/testCalendar';

import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import DemoApp from 'test/DemoApp';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { PublicRoute } from 'Routes/PublicRoute';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        {/*TODO: About page element*/}
        <Route path="/" element={<Navigate to="/about" replace />} />
        {/* <Route path="/about" element={<AboutPage />} />{' '} */}
        {/*TODO: About page element*/}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />{' '}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/" element={<MainLayout />}>
          <Route path="layouttest" element={<div></div>} />
          <Route
            path="account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />{' '}
          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <Calendar />
              </PrivateRoute>
            }
          />
        </Route>
        {/* <Route path="/calendar/day/:currentDay" />{' '}
        <Route path="/calendar/month/:currentDate" />{' '} */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
