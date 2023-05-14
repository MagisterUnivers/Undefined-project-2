import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskModal = ({
  handleModalClose,
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
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default TaskModal;
