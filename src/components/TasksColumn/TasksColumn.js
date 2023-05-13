// import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from 'components/ChoosedDay/ColumnHeadBar/ColumnHeadBar';
// import { ColumnsTasksList } from 'components/ColumnsTasksList/ColumnsTasksList';
// import { useSelector } from 'react-redux';
// import { selectIsTaskExist } from 'redux';
// import styled from 'styled-components';

const TasksColumn = () => {
  // Selector to check if Tasks is existed

  // const IsTasks = useSelector(selectIsTaskExist);

  return (
    <>
      <ColumnHeadBar />
      {/* <ColumnsTasksList /> */}
      {/* <AddTaskBtn /> */}
      {/* {IsTasks ? ColumnTasksList : blablaba } */}
    </>
  );
};

export default TasksColumn;
