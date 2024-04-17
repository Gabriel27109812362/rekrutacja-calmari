import React from 'react';
import styles from './styles.module.scss';
import Icon from '@mdi/react';
import {
  mdiDotsHorizontal,
} from '@mdi/js';

import { Profile } from '../../types/profile';
import { Favourite } from './Favourite';
import { Avatar } from './Avatar';
import { ActionControls } from './ActionControls';
import AvgCounter from './AvgCounter';

const Tile: React.FC<Profile> = ({
  job,
  name,
  id,
  favourite,
  image,
  initials,
  actualRank,
  avg,
  count,
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.FlexRow}>
        <button className={styles.SettingsButton}>
          <Icon path={mdiDotsHorizontal} size={1} className={styles.Icon} />
        </button>
        <Favourite isFavourite={favourite} profileId={id} />
      </div>

      <Avatar initials={initials} job={job} name={name} image={image} />
      <ActionControls />

      <AvgCounter actualRank={actualRank} avg={avg} count={count} profileId={id} />

      <div className={styles.FlexRow}>
        <button className={styles.TileAction}>Profile</button>
        <button className={styles.TileAction}>Book A Visit</button>
      </div>
    </div>
  );
};

export default Tile;
