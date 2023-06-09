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

const TaskToolbar = ({ id, categoryId, object, tasks }) => {
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

  return (
    <>
      <StyledList>
        <StyledListItem>
          <StyledListBtn type="button" onClick={handleSlideMenuToggle}>
            <StyledArrowRightIcon className="dark:stroke-white " />
          </StyledListBtn>
        </StyledListItem>
        <StyledListItem>
          <StyledListBtn type="button" onClick={handleModalOpen}>
            <StyledPencilIcon className="dark:stroke-white" />
          </StyledListBtn>
        </StyledListItem>
        <StyledListItem>
          <StyledListBtn
            type="button"
            onClick={() => dispatch(deleteUserTaskThunk(id))}
          >
            <StyledTrashIcon className="dark:stroke-white" />
          </StyledListBtn>
        </StyledListItem>
      </StyledList>

      {isSlideMenuShown && (
        <>
          {categoryId === 'to-do' ? (
            <StyledSlideMenu
              className=" dark:bg-darktheme"
              object={object}
              tasks={tasks}
            >
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'in-progress');
                  }}
                >
                  In progress{' '}
                  <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'done');
                  }}
                >
                  Done <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          ) : categoryId === 'in-progress' ? (
            <StyledSlideMenu className=" dark:bg-darktheme" tasks={tasks}>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'to-do');
                  }}
                >
                  To do <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'done');
                  }}
                >
                  Done <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          ) : (
            <StyledSlideMenu className=" dark:bg-darktheme" tasks={tasks}>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'to-do');
                  }}
                >
                  To do <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
              <StyledSlideMenuItem>
                <StyledMenuBtn
                  className=" dark:text-white"
                  type="button"
                  onClick={() => {
                    handleChangleCategory(object, 'in-progress');
                  }}
                >
                  In progress{' '}
                  <StyledMenuArrowIcon className=" dark:stroke-white" />
                </StyledMenuBtn>
              </StyledSlideMenuItem>
            </StyledSlideMenu>
          )}
        </>
      )}
      {isModalShown && (
        <Modal handleModalClose={handleModalClose}>
          {
            <TaskForm
              isEdit={isEdit}
              id={id}
              handleModalClose={handleModalClose}
            />
          }
        </Modal>
      )}
    </>
  );
};

export default TaskToolbar;
