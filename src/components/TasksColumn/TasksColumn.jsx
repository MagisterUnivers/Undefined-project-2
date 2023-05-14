import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from 'components/ColumnsTasksList/ColumnsTasksList';
import { useSelector } from 'react-redux';
import { selectIsTaskExist } from '../../redux/selectors';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { selectIsTaskExist } from 'redux';
// import styled from 'styled-components';

const TasksColumn = ({ title, currentDay }) => {
  // Selector to check if Tasks is existed

  // const IsTasks = useSelector(selectIsTaskExist);

  let newCategory;

  switch (title.toLowerCase()) {
    case 'in progress':
      newCategory = 'in-progress';
      break;
    case 'to do':
      newCategory = 'to-do';
      break;
    case 'done':
      newCategory = 'done';
      break;
    default:
      break;
  }

  const tasks = useSelector(selectIsTaskExist);
  console.log(tasks);
  let filteredTasks;
  let createdTask;
  
    tasks.forEach(({ tasks, date }) => {
      filteredTasks = tasks.filter((task) => {
        return task.category === newCategory && date === currentDay;
      });
    });
  
  return (
    <ItemTask>
      <ColumnHeadBar title={title} />
      {/* <ColumnsTasksList tasks={''} /> */}
      <AddTaskBtn title={title} currentDay={currentDay} />
      {/* {IsTasks ? ColumnTasksList : blablaba } */}
    </ItemTask>
  );
};

export default TasksColumn;

// const ListTask = styled.ul`
//   display: flex;
//   gap: 27px;
//   margin-top: 16px;
// `;

const ItemTask = styled.li`
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 42px;
  padding: 18px 10px 10px 10px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
`;
