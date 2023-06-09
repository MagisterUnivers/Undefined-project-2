import { useState } from 'react';
import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from './icons/plus.svg';
import TaskModal from 'components/TaskModal/TaskModal';

export const AddTaskBtn = ({ title, currentDay, categoryId }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalClose = () => {
    setIsModalShown(false);
  };

  const handleModalOpen = () => {
    setIsModalShown(true);
  };

  return (
    <>
      <button
        className={`${styles.button}  bg-skyblue dark:bg-blue-1 `}
        onClick={handleModalOpen}
      >
        <Plus className={styles.plus_icon} />
        Add task
      </button>
      {isModalShown && (
        <TaskModal
          handleModalClose={handleModalClose}
          title={title}
          currentDay={currentDay}
          categoryId={categoryId}
        />
      )}
    </>
  );
};
