import styles from './SideBar.module.css';
import { ReactComponent as GooseLogo } from './icons/goose.svg';
import { ReactComponent as IconClose } from './icons/cross_btn.svg';
import PropTypes from 'prop-types';

export const SideBar = ({ toggleSidebar, isOpenSidebarMobile }) => {
  const className = isOpenSidebarMobile
    ? styles.container_1
    : styles.container_2;

  return (
    <>
      <div className={className}>
        <div>
          <div className={styles.header}>
            <div className={styles.logoContainer}>
              <GooseLogo className={styles.logo} />
              <h1 className={styles.heading}>
                G<span className={styles.headingSpecial}>oo</span>seTrack
              </h1>
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={toggleSidebar}
            >
              <IconClose className={styles.close} />
            </button>
          </div>
          {/* put navbar here */}
        </div>
        {/* put logout button here */}
      </div>
    </>
  );
};

SideBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isOpenSidebarMobile: PropTypes.func.isRequired,
};
