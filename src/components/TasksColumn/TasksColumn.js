import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
import { useSelector } from 'react-redux';
import { selectIsTaskExist } from 'redux';
// import styled from 'styled-components';

const TasksColumn = () => {
  // Selector to check if Tasks is existed

  // const IsTasks = useSelector(selectIsTaskExist);

  return (
    <>
      <ColumnHeadBar />
      {/* {IsTasks ? ColumnTasksList : blablabla } */}
    </>
  );
};

export default TasksColumn;
