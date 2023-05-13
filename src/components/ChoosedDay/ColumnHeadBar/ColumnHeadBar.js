import styled from 'styled-components';
import { Add, ControlPoint } from '@mui/icons-material';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/TaskForm/TaskForm';

const ColumnHeadBar = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const category = ['To do', 'In progress', 'Done'];

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const handleModalOpen = () => {
    setIsModalShown(true);
  };

  return (
    <>
      {category.map((status, index) => (
        <ItemTask key={index}>
          <Title>
            {status}
            <button type="button" onClick={handleModalOpen}>
              <ControlPoint />
            </button>
          </Title>
          {/* <ButtonTask>
            <Add />
            Add task
          </ButtonTask> */}
          <AddTaskBtn />
        </ItemTask>
      ))}
      {isModalShown && (
        <Modal handleModalClose={handleModalClose}>{<TaskForm />}</Modal>
      )}
    </>
  );
};

export default ColumnHeadBar;

const ItemTask = styled.li`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;

const Title = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #111111;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/* <ItemTask>
<Title>To do <ControlPoint/></Title>
<ButtonTask><Add/>Add task</ButtonTask>
</ItemTask>
<ItemTask> 
<Title>In progress <ControlPoint/></Title> 
<ButtonTask><Add/> Add task</ButtonTask> 
</ItemTask> 
<ItemTask> 
<Title>Done <ControlPoint/></Title> 
<ButtonTask><Add/> Add task</ButtonTask> 
</ItemTask> */
