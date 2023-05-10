// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import { Route, Routes, Navigate } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import { UserForm } from './Forms/UserForm/UserForm';
import AccountPage from 'pages/AccountPage/AccountPage';
// import { Header } from './Header/Header';

import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import DemoApp from 'test/DemoApp';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />{' '}
        {/*TODO: About page element*/}
        <Route path="/register" element={<RegisterPage />} />{' '}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<DemoApp />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/layouttest" element={<div></div>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendar" /> {/*TODO: Calendar page element*/}
          <Route path="/calendar/day/:currentDay" />{' '}
          {/*TODO: Calendar day page element*/}
          <Route path="/calendar/month/:currentDate" />{' '}
          {/*TODO: Calendar month page element*/}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
