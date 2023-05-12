// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import { Route, Routes } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import { UserForm } from './Forms/UserForm/UserForm';
import AccountPage from 'pages/AccountPage/AccountPage';
import { CalendarPage } from '../pages/CalendarPage/CalendarPage';
import { ChoosedMonth } from '../components/ChoosedMonth/ChoosedMonth';

import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import DemoApp from 'test/DemoApp';
import FormComponent from 'redux/CalendarEvents/test123';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/about" element={<AboutPage />} />{' '}
        {/*TODO: About page element*/}
        <Route path="/register" element={<RegisterPage />} />{' '}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<DemoApp />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/layouttest" element={<div></div>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/calendar/day/:currentDay" />{' '}
          <Route
            path="/calendar/month/:currentDate"
            element={<ChoosedMonth />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
