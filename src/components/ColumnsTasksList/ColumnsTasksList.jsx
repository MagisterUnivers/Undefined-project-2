import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
import { StyledLi, StyledUl } from './ColumnsTasksList.styled';
const tasksExample = [
  {
    title: 'ohohohohhohohoohohohoohdsgfdohhohoohohfdsvsdsdfvs',
    priority: 'low',
  },
  {
    title: 'sdfgfdshtfhtrgdfvhfgvbgtdhfxvthrfdfvrdf',
    priority: 'medium',
  },
  {
    title: 'ohohohohhohohoohohohoohohhohoohoh',
    priority: 'high',
  },
  {
    title: 'zxcvbbn,.kjhjghf',
    priority: 'low',
  },
  {
    title: 'qweqweqwewqeweqrtwrtryhtyjyfhyugrtdgdx',
    priority: 'low',
  },
  {
    title: 'ohoho',
    priority: 'high',
  },
];
export const ColumnsTasksList = ({ tasks }) => {
  return (
    <StyledUl>
      {tasksExample.map((task, index) => (
        <StyledLi key={index}>
          <TaskColumnCard title={task.title} priority={task.priority} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};
