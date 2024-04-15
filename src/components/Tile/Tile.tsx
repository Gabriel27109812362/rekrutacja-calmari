import React, { useState } from 'react';
import styles from './styles.module.scss';
import Icon from '@mdi/react';
import {
  mdiHeartOutline,
  mdiHeart,
  mdiDotsHorizontal,
  mdiBellOutline,
  mdiCalendarBlankOutline,
  mdiEmailOutline,
  mdiStarBox,
} from '@mdi/js';

import avatar from '../../assets/avatar.png';

const Tile = () => {
  const [favourite, setFavourite] = useState(false);

  return (
    <div className={styles.Container}>
      <div className={styles.FlexRow}>
        <button className={styles.SettingsButton}>
          <Icon path={mdiDotsHorizontal} size={1} className={styles.Icon} />
        </button>

        {!favourite && (
          <div
            onClick={() => setFavourite(true)}
            style={{ marginRight: '20px' }}
          >
            <Icon path={mdiHeartOutline} size={1} className={styles.Icon} />
          </div>
        )}
        {favourite && (
          <div
            onClick={() => setFavourite(false)}
            style={{ marginRight: '20px' }}
          >
            <Icon path={mdiHeart} size={1} className={styles.IconFavourite} />
          </div>
        )}
      </div>

      <div className={styles.FlexColumn}>
        {/* <div className={styles.BluePlaceholder}>DS</div> */}

        <img src={avatar} alt='avatar' className={styles.Avatar} />

        <p className={styles.Name}>Davis Scott</p>
        <p className={styles.Job}>dentist</p>
      </div>

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

      <div className={styles.FlexRow} style={{ height: '88px' }}>
        <div className={styles.StarsContainer}>
          <div className={styles.Star}>
            <Icon path={mdiStarBox} size='37px' />
          </div>

          <div className={styles.Star}>
            <Icon path={mdiStarBox} size='37px' />
          </div>

          <div className={styles.Star}>
            <Icon path={mdiStarBox} size='37px' />
          </div>

          <div className={styles.Star}>
            <Icon path={mdiStarBox} size='37px' />
          </div>

          <div className={styles.StarSelected}>
            <Icon path={mdiStarBox} size='37px' />
          </div>
        </div>

        <div className={styles.AvgContainer}>
          <p className={styles.Avg}>4,9</p>
          <p className={styles.Count}>(39)</p>
        </div>
      </div>

      <div className={styles.FlexRow}>
        <button className={styles.TileAction}>Profile</button>
        <button className={styles.TileAction}>Book A Visit</button>
      </div>
    </div>
  );
};

export default Tile;
