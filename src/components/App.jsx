// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import LoginPage from 'pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
