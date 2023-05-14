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
import { deleteUserTaskThunk } from '../../redux/CalendarEvents/calendarEventsOperations';
import { useDispatch } from 'react-redux';

const TaskToolbar = ({ id }) => {
  const dispatch = useDispatch();
  const [isSlideMenuShown, setIsSlideMenuShown] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const handleModalOpen = () => {
    setIsModalShown(true);
    setIsEdit(true);
  };

  const handleSlideMenuToggle = () => {
    setIsSlideMenuShown(!isSlideMenuShown);
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
          <StyledListBtn
            type="button"
            onClick={() => dispatch(deleteUserTaskThunk(id))}
          >
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
        <Modal handleModalClose={handleModalClose}>
          {<TaskForm isEdit={isEdit} id={id} />}
        </Modal>
      )}
    </>
  );
};

export default TaskToolbar;
