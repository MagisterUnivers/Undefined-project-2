import TasksColumn from 'components/TasksColumn/TasksColumn';
import styled from 'styled-components';

const categoryExample = ['To do', 'In progress', 'Done'];

const TasksColumnsList = ({ category }) => {
  return (
    <ListTask>
      {categoryExample.map((categorys) => {
        return <TasksColumn title={categorys} />;
      })}
    </ListTask>
  );
};

export default TasksColumnsList;

const ListTask = styled.ul`
  display: flex;
  gap: 27px;
  margin-top: 16px;
`;
