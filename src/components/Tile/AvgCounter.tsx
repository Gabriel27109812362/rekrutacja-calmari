import React from 'react';
import styles from './styles.module.scss';
import { mdiStarBox } from '@mdi/js';
import Icon from '@mdi/react';
import { useDispatch } from 'react-redux';
import { updateScore } from '../../store/reducers/profileSlice';

interface AvgCounterProps {
  actualRank: number;
  avg: number;
  count: number;
  profileId: string;
}

const Star = ({
  selected,
  mark,
  profileId,
}: {
  selected?: boolean;
  mark: number;
  profileId: string;
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={selected ? styles.StarSelected : styles.Star}
      onClick={() => dispatch(updateScore({ profileId, mark }))}
    >
      <Icon path={mdiStarBox} size='37px' />
    </div>
  );
};

const AvgCounter: React.FC<AvgCounterProps> = ({
  actualRank,
  avg,
  count,
  profileId,
}) => {
  return (
    <div className={styles.FlexRow} style={{ height: '88px' }}>
      <div className={styles.StarsContainer}>
        {[...Array(5).keys()]
          .map(x => x + 1)
          .map(y => (
            <Star key={`${profileId}${y}`} selected={y <= actualRank} mark={y} profileId={profileId} />
          ))}
      </div>

      <div className={styles.AvgContainer}>
        <p className={styles.Avg}>{avg.toFixed(1)}</p>
        <p className={styles.Count}>({count})</p>
      </div>
    </div>
  );
};

export default AvgCounter;
