import React from 'react';
import styles from './styles.module.scss';
import { mdiHeartOutline, mdiHeart } from '@mdi/js';
import Icon from '@mdi/react';
import { useDispatch } from 'react-redux';
import { setupFavourite } from '../../store/reducers/profileSlice';

interface FavouriteProps {
  isFavourite: boolean;
  profileId: string;
}

export const Favourite: React.FC<FavouriteProps> = ({
  isFavourite,
  profileId,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {!isFavourite && (
        <div
          onClick={() =>
            dispatch(setupFavourite({ profileId, isFavourite: true }))
          }
          style={{ marginRight: '20px' }}
        >
          <Icon path={mdiHeartOutline} size={1} className={styles.Icon} />
        </div>
      )}

      {isFavourite && (
        <div
          onClick={() =>
            dispatch(setupFavourite({ profileId, isFavourite: false }))
          }
          style={{ marginRight: '20px' }}
        >
          <Icon path={mdiHeart} size={1} className={styles.IconFavourite} />
        </div>
      )}
    </>
  );
};
