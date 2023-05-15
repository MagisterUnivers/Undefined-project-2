import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
import { StyledLi, StyledUl } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks, categoryId }) => {
  return (
    <StyledUl className="dark:::-webkit-scrollbar-track">
      {(tasks ?? []).map((task, index, arr) => (
        <StyledLi key={index}>
          <TaskColumnCard
            title={task.title}
            priority={task.priority}
            id={task._id}
            categoryId={categoryId}
            object={task}
            tasks={arr}
          />
        </StyledLi>
      ))}
    </StyledUl>
  );
};
