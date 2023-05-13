import { useState } from 'react';
import {
  StyledArrowRightIcon,
  StyledList,
  StyledMenuArrowIcon,
  StyledMenuBtn,
  StyledPencilIcon,
  StyledSlideMenu,
  StyledSlideMenuItem,
  StyledTrashIcon,
} from './StyledTaskToolbar';
import TaskForm from 'components/TaskForm/TaskForm';
import Modal from 'components/Modal/Modal';

const TaskToolbar = () => {
  const [isSlideMenuShown, setIsSlideMenuShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const handleModalOpen = () => {
    setIsModalShown(true);
  };

  const handleSlideMenuOpen = () => {
    setIsSlideMenuShown(true);
  };

  return (
    <>
      <StyledList>
        <li>
          <button type="button" onClick={handleSlideMenuOpen}>
            <StyledArrowRightIcon />
          </button>
        </li>
        <li>
          <button type="button" onClick={handleModalOpen}>
            <StyledPencilIcon />
          </button>
        </li>
        <li>
          <button type="button">
            <StyledTrashIcon />
          </button>
        </li>
      </StyledList>
      {isSlideMenuShown && (
        <StyledSlideMenu>
          <StyledSlideMenuItem>
            <StyledMenuBtn type="button">
              In progress <StyledMenuArrowIcon />
            </StyledMenuBtn>
          </StyledSlideMenuItem>
          <StyledSlideMenuItem>
            <StyledMenuBtn type="button">
              Done <StyledMenuArrowIcon />
            </StyledMenuBtn>
          </StyledSlideMenuItem>
        </StyledSlideMenu>
      )}
      {isModalShown && (
        <Modal handleModalClose={handleModalClose}>{<TaskForm />}</Modal>
      )}
    </>
  );
};

export default TaskToolbar;
