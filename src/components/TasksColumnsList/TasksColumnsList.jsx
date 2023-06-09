// import TasksColumn from 'components/TasksColumn/TasksColumn';
// import styled from 'styled-components';

// const categoryExample = ['To do', 'In progress', 'Done'];

// const TasksColumnsList = ({ category, currentDay }) => {
//   return (
//     <ListTask>
//       {categoryExample.map((categorys) => {
//         return <TasksColumn title={categorys} currentDay={currentDay} />;
//       })}
//     </ListTask>
//   );
// };

// export default TasksColumnsList;

// const ListTask = styled.ul`
//   display: flex;
//   width: 335px;

//   overflow: scroll;
//   gap: 16px;
//   margin-top: 16px;
//   @media screen and (min-width: 767.98px) {
//     width: 704px;
//   }
//   @media screen and (min-width: 767.98px) {
//     width: 1087px;
//     gap: 27px;
//   }
// `;

// import { nanoid } from '@reduxjs/toolkit';
import TasksColumn from 'components/TasksColumn/TasksColumn';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectTasks } from 'redux/selectors';
import styled from 'styled-components';

// const categoryExample = ['to-do', 'in-progress', 'done'];

const TasksColumnsList = ({ category, tasks }) => {
  const location = useLocation();

  const currentDay = location.pathname.slice(-10);

  const reduxTasks = useSelector(selectTasks);
  const dayTasks = reduxTasks[currentDay] ?? [];

  const toDoTasks = dayTasks.filter((task) => {
    return task.category === 'to-do';
  });

  const inProgressTasks = dayTasks.filter((task) => {
    return task.category === 'in-progress';
  });

  const doneTasks = dayTasks.filter((task) => {
    return task.category === 'done';
  });

  return (
    <ListTask>
      {/* {categoryExample.map((categorys, index) => {
        return <TasksColumn key={index} tasks={tasks} title={categorys} />;
      })} */}
      <TasksColumn title="To do" tasks={toDoTasks} categoryId="to-do" />
      <TasksColumn
        title="In progress"
        tasks={inProgressTasks}
        categoryId="in-progress"
      />
      <TasksColumn
        title="Done"
        tasks={doneTasks}
        categoryId="done"
        currentDay={currentDay}
      />
    </ListTask>
  );
};

export default TasksColumnsList;

const ListTask = styled.ul`
  display: flex;
  width: 335px;

  gap: 16px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 16px;
  @media screen and (max-width: 1439px) {
    overflow: scroll;
  }
  @media screen and (min-width: 767.98px) {
    width: 704px;
  }
  @media screen and (min-width: 1439.98px) {
    width: 1087px;
    gap: 27px;
  }
`;
