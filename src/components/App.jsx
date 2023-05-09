// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import { Route, Routes } from 'react-router';
import LogOut from './Btn/LogoutBtn/LogOut';
import { LoginForm } from './Forms/LoginForm/LoginForm';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route index /> {/*TODO: About page element*/}
        <Route path="/register" /> {/*TODO: Register page element*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/calendar" /> {/*TODO: Calendar page element*/}
        <Route path="/calendar/day/:currentDay" />{' '}
        {/*TODO: Calendar day page element*/}
        <Route path="/calendar/month/:currentDate" />{' '}
        {/*TODO: Calendar month page element*/}
      </Routes>
    </>
  );
};
