import React from 'react';
import {
  mdiBellOutline,
  mdiCalendarBlankOutline,
  mdiEmailOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import styles from './styles.module.scss';

export const ActionControls = () => {
  return (
    <div
      className={styles.FlexRow}
      style={{ borderBottom: '1px solid #F2F4F6' }}
    >
      <button className={styles.ButtonHighligt}>
        <Icon path={mdiBellOutline} size={1} />
      </button>
      <button className={styles.ButtonHighligt}>
        <Icon path={mdiCalendarBlankOutline} size={1} />
      </button>
      <button className={styles.ButtonHighligt}>
        <Icon path={mdiEmailOutline} size={1} />
      </button>
    </div>
  );
};

