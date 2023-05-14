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
import {
  deleteUserTaskThunk,
  updateUserTaskThunk,
} from '../../redux/CalendarEvents/calendarEventsOperations';
import { useDispatch } from 'react-redux';

const TaskToolbar = ({ id, categoryId, object }) => {
  const dispatch = useDispatch();
  const [isSlideMenuShown, setIsSlideMenuShown] = useState(false);
  const [isTransferMenuShown, setIsTransferMenuShown] = useState(false);

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

  // const data = {
  //   credentials,
  //   id,
  // };

  const handleChangleCategory = (object, categoryHard) => {
    const credentials = {
      title: object.title,
      start: object.start,
      end: object.end,
      priority: object.priority,
      category: categoryHard,
      date: object.date,
    };

    const modifiedObject = {
      id: object._id,
      credentials,
    };
    setIsTransferMenuShown(!isTransferMenuShown);
    dispatch(updateUserTaskThunk(modifiedObject));
  };

  console.log('Before return: ', categoryId);

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

      {console.log(categoryId)}
      {isSlideMenuShown && (
        <>
          {categoryId === 'to-do' ? (
            <StyledSlideMenu>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'in-progress');
                  }}
                >
                  In progress <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'done');
                  }}
                >
                  Done <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          ) : categoryId === 'in-progress' ? (
            <StyledSlideMenu>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'to-do');
                  }}
                >
                  To do <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'done');
                  }}
                >
                  Done <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          ) : (
            <StyledSlideMenu>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'to-do');
                  }}
                >
                  To do <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'in-progress');
                  }}
                >
                  In progress <StyledMenuArrowIcon />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          )}
        </>
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
