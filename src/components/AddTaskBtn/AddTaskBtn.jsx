import { useState } from 'react';
import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from './icons/plus.svg';
import Modal from 'components/Modal/Modal';
import TaskForm from 'components/Forms/TaskForm/TaskForm';

export const AddTaskBtn = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const handleModalOpen = () => {
    setIsModalShown(true);
  };

  return (
    <>
      <button className={styles.button} onClick={handleModalOpen}>
        <Plus className={styles.plus_icon} />
        Add task
      </button>
      {isModalShown && (
        <Modal handleModalClose={handleModalClose}>{<TaskForm />}</Modal>
      )}
    </>
  );
};
