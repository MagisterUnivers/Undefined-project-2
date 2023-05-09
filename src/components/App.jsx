// import { RegisterForm } from './Forms/RegisterForm/RegisterForm';
import LogOut from './Btn/LogoutBtn/LogOut';
import { LoginForm } from './Forms/LoginForm/LoginForm';
import { MainLayout } from './MainLayout/MainLayout';

export const App = () => {
  return (
    <div>
      <LoginForm />
      <LogOut />
      <MainLayout />
    </div>
  );
};
