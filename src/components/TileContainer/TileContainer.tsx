import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profilesMocks } from '../../mocks/profiles';
import {
  FilteredSpecialists,
  applyProfiles,
} from '../../store/reducers/profileSlice';
import Tile from '../Tile/Tile';
import styles from './styles.module.scss';

const TileContainer = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(FilteredSpecialists);

  useEffect(() => {
    dispatch(applyProfiles(profilesMocks));
  }, []);

  return (
    <div className={styles.Container}>
      {profiles.map(p => (
        <Tile {...p} key={p.id} />
      ))}
    </div>
  );
};

export default TileContainer;
