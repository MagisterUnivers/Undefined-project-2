import { StyledIcon, StyledIconWrapper } from './StyledRegisterPage';
import { RegisterForm } from 'components/Forms/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  return (
    <>
      <RegisterForm />
      <StyledIconWrapper>
        <StyledIcon />
      </StyledIconWrapper>
    </>
  );
};

export default RegisterPage;
