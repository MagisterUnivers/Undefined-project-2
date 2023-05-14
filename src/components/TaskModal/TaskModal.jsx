import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskModal = ({
  handleModalClose,
  title,
  currentDay,
  id,
  isEdit,
  category,
}) => {
  return (
    <>
      <Modal handleModalClose={handleModalClose}>
        <TaskForm
          columnCategory={category}
          currentDay={currentDay}
          id={id}
          isEdit={isEdit}
        />
      </Modal>
    </>
  );
};

export default TaskModal;
