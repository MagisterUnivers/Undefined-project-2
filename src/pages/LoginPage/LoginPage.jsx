import { LoginForm } from 'components/Forms/LoginForm/LoginForm';
import { StyledIcon, StyledIconWrapper } from './StyledLoginPage';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import TaskForm from 'components/TaskForm/TaskForm';

const LoginPage = () => {
  const [isModalShown, setIsModalShown] = useState(true);
  const wrapper = document.querySelector('body');
  wrapper.style.backgroundColor = '#DCEBF7';

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  return (
    <>
      {isModalShown && (
        <Modal handleModalClose={handleModalClose}>{<TaskForm />}</Modal>
      )}

      <StyledIconWrapper>
        <StyledIcon />
      </StyledIconWrapper>
    </>
  );
};

export default LoginPage;
