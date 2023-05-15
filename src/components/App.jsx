import { Route, Routes } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import { ChoosedMonth } from '../components';
import { PrivateRoute } from 'Routes/PrivateRoute';
import clearConsoleOnError from 'utils/ClearConsole';
import { PublicRoute } from 'Routes/PublicRoute';
// import { UserForm } from './Forms/UserForm/UserForm';
import { Suspense, lazy, useEffect } from 'react';
import Spinner from './Spinner/Spinner';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const ChoosedDayPage = lazy(() =>
  import('pages/ChoosedDayPage/ChoosedDayPage')
);
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  useEffect(() => {
    clearConsoleOnError(); // Очистка консоли при изменении компонента App
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
