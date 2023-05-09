// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import { Route, Routes } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { UserForm } from './Forms/UserForm/UserForm';
// import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/about" /> {/*TODO: About page element*/}
        <Route path="/register" element={<RegisterPage />} />{' '}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<UserForm />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/calendar" /> {/*TODO: Calendar page element*/}
          <Route path="/calendar/day/:currentDay" />{' '}
          {/*TODO: Calendar day page element*/}
          <Route path="/calendar/month/:currentDate" />{' '}
          {/*TODO: Calendar month page element*/}
        </Route>
        <Route path="*" element={<div>Page not found...</div>} />
      </Routes>
    </>
    // <Header />
  );
};
