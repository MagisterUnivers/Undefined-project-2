import styles from './AddTaskBtn.module.css';
import { ReactComponent as Plus } from './icons/plus.svg';

export const AddTaskBtn = () => {
  return (
    <>
      <button className={styles.button}>
        <Plus className={styles.plus_icon} />
        Add task
      </button>
    </>
  );
};
