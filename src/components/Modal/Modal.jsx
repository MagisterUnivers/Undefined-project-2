import { createPortal } from 'react-dom';
import {
  StyledBackdrop,
  StyledBtn,
  StyledBtnIcon,
  StyledModal,
} from './StyledModal';
import { useEffect } from 'react';

const Modal = ({ children, handleModalClose }) => {
  useEffect(() => {
    const handleEscBtnClick = (ev) => {
      if (ev.code === 'Escape') {
        handleModalClose();
      }
    };

    const handleBackdropClick = (ev) => {
      if (ev.target.classList.contains('backdrop')) {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleEscBtnClick);
    window.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleEscBtnClick);
      window.removeEventListener('click', handleBackdropClick);
    };
  }, [handleModalClose]);

  const handleCloseBtnClick = () => {
    handleModalClose();
  };

  return createPortal(
    <StyledBackdrop className="backdrop">
      <StyledModal>
        <StyledBtn type="button" onClick={handleCloseBtnClick}>
          <StyledBtnIcon />
        </StyledBtn>
        {children}
      </StyledModal>
    </StyledBackdrop>,
    document.querySelector('#root')
  );
};

export default Modal;

/**
  |============================
  | Outside Modal logic
  |============================
*/

// const [isModalShown, setIsModalShown] = useState(true);
// const handleModalClose = () => {
//   setIsModalShown(false);
// };
//  {isModalShown && (
//   <Modal handleModalClose={handleModalClose}>{<TaskForm />}</Modal>
// )}
