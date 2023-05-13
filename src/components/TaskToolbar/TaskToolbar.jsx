import { useState } from 'react';
import {
  StyledArrowRightIcon,
  StyledList,
  StyledListBtn,
  StyledListItem,
  StyledMenuArrowIcon,
  StyledMenuBtn,
  StyledPencilIcon,
  StyledSlideMenu,
  StyledSlideMenuItem,
  StyledTrashIcon,
} from './StyledTaskToolbar';
import TaskForm from 'components/Forms/TaskForm/TaskForm';
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

  const handleSlideMenuToggle = () => {
    setIsSlideMenuShown(!isSlideMenuShown)
  };

  return (
    <>
      <StyledList>
        <StyledListItem>
          <StyledListBtn type="button" onClick={handleSlideMenuToggle}>
            <StyledArrowRightIcon />
          </StyledListBtn>
        </StyledListItem>
        <StyledListItem>
          <StyledListBtn type="button" onClick={handleModalOpen}>
            <StyledPencilIcon />
          </StyledListBtn>
        </StyledListItem>
        <StyledListItem>
          <StyledListBtn type="button">
            <StyledTrashIcon />
          </StyledListBtn>
        </StyledListItem>
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
