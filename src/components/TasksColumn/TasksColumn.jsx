import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from 'components/ColumnsTasksList/ColumnsTasksList';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { selectIsTaskExist } from 'redux';
// import styled from 'styled-components';

const TasksColumn = ({ title, tasks, id }) => {
  // Selector to check if Tasks is existed

  // const IsTasks = useSelector(selectIsTaskExist);
  // const tasks = useSelector(selectIsTaskExist);

  // switch (title.toLowerCase()) {
  //   case 'in progress':
  //     newCategory = 'in-progress';
  //     break;
  //   case 'to do':
  //     newCategory = 'to-do';
  //     break;
  //   case 'done':
  //     newCategory = 'done';
  //     break;
  //   default:
  //     break;
  // }

  // const filterTasks = tasks
  //   .filter(({ date }) => {
  //     return date === currentDay;
  //     // return tasks.filter((task) => {
  //     //   console.log(task.category);
  //     //   return task.category === newCategory && date === currentDay;
  //     // });
  //   })
  //   .filter(({ tasks }, index) => {
  //     console.log(tasks);
  //     return tasks[index].category === title;
  //   });

  // console.log(filterTasks);

  return (
    <ItemTask>
      <ColumnHeadBar title={title} id={id} />
      <ColumnsTasksList tasks={tasks} />
      <AddTaskBtn id={id} />
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
  padding: 25px 10px 10px 10px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  @media screen and (min-width: 767.98px) {
    width: 344px;
    padding: 25px 10px 28px 16px;
  }
`;
