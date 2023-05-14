import TasksColumn from 'components/TasksColumn/TasksColumn';
import styled from 'styled-components';

const categoryExample = ['To do', 'In progress', 'Done'];

const TasksColumnsList = ({ category, tasks }) => {
  return (
    <ListTask>
      {categoryExample.map((categorys, index) => {
        return <TasksColumn key={index} tasks={tasks} title={categorys} />;
      })}
    </ListTask>
  );
};

export default TasksColumnsList;

const ListTask = styled.ul`
  display: flex;
  width: 335px;

  overflow: scroll;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 767.98px) {
    width: 704px;
  }
  @media screen and (min-width: 1439.98px) {
    width: 1087px;
    gap: 27px;
  }
`;
