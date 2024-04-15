import React from 'react';
import styles from './ControlsBox.module.scss';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const ControlsBox = () => {
  return (
    <div className={styles.Container}>
      <p className={styles.Title}>All specialists (5)</p>

      <div>
        <button className={`${styles.Button} ${styles.Left}`}>
          All Specialists
        </button>
        <button className={`${styles.ButtonSwitched} ${styles.Right}`}>
          My Specialists
        </button>
      </div>

      <div className={styles.InputContainer}>
        <input type='text' placeholder='Search...' className={styles.Search} />
        <Icon path={mdiMagnify} size={1.2} className={styles.Magnify} />
      </div>
    </div>
  );
};

export default ControlsBox;
