import { Route, Routes } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
// import { UserForm } from './Forms/UserForm/UserForm';
import AccountPage from 'pages/AccountPage/AccountPage';
import { CalendarPage } from '../pages/CalendarPage/CalendarPage';
import ChoosedDayPage from 'pages/ChoosedDayPage/ChoosedDayPage';
import { ChoosedMonth } from '../components';
import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import DemoApp from 'test/DemoApp';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { PublicRoute } from 'Routes/PublicRoute';
// import { TaskColumnCard } from './TaskColumnCard/TaskColumnCard';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
// import FormComponent from 'redux/CalendarEvents/test123';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/test" element={<DemoApp />} />
        <Route path="/main" element={<MainLayout />}>
          <Route
            path="account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />

          <Route
            path="calendar"
            element={
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            }
          >
            <Route path="" element={<ChoosedMonth />} />

            <Route path="day/:currentDay" element={<ChoosedDayPage />} />
          </Route>
        </Route>

        <Route path="/tc" element={<ColumnsTasksList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
