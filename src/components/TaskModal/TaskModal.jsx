import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskModal = ({
  handleModalClose,
  title,
  currentDay,
  categoryId,
  isEdit,
  category,
}) => {
  return (
    <>
      <Modal handleModalClose={handleModalClose}>
        <TaskForm
          columnCategory={category}
          currentDay={currentDay}
          categoryId={categoryId}
          isEdit={isEdit}
        />
      </Modal>
    </>
  );
};

export default TaskModal;
