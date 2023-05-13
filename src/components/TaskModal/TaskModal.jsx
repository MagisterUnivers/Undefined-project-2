import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';
import { useState } from 'react';

const TaskModal = () => {

  return (
    <>
      <Modal>
        <TaskForm />
      </Modal>
    </>
  );
};

export default TaskModal;
