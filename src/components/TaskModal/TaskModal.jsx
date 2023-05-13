import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

const TaskModal = ({ handleModalClose, title, currentDay }) => {
  return (
    <>
      <Modal handleModalClose={handleModalClose}>
        <TaskForm columnCategory={title} currentDay={currentDay} />
      </Modal>
    </>
  );
};

export default TaskModal;
