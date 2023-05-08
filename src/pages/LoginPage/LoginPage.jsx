import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { StyledIcon, StyledIconWrapper } from './StyledLoginPage';

const LoginPage = () => {
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  return (
    <>
      <LoginForm />
      <StyledIconWrapper>
        <StyledIcon />
      </StyledIconWrapper>
    </>
  );
};

export default LoginPage;
