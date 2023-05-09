import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { StyledIcon, StyledIconWrapper } from './StyledLoginPage';
import { MainLayout } from 'components/MainLayout/MainLayout';

const LoginPage = () => {
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  return (
    <>
      <MainLayout />
      <LoginForm />
      <StyledIconWrapper>
        <StyledIcon />
      </StyledIconWrapper>
    </>
  );
};

export default LoginPage;
