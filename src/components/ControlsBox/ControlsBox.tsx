import React from 'react';
import styles from './styles.module.scss';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { useDispatch, useSelector } from 'react-redux';
import {
  AllSpecialistsActiveSelector,
  FilteredSpecialists,
  switchSpecialistsList,
  updateSearchQuery,
} from '../../store/reducers/profileSlice';

const ControlsBox = () => {
  const dispatch = useDispatch();
  const allSpecialistsActive = useSelector(AllSpecialistsActiveSelector);
  const profilesAmount = useSelector(FilteredSpecialists).length;

  return (
    <div className={styles.Container}>
      <p className={styles.Title}>
        {allSpecialistsActive ? 'All specialists' : 'My Specialists'} (
        {profilesAmount})
      </p>

      <div>
        <button
          className={`${
            allSpecialistsActive ? styles.ButtonSwitched : styles.Button
          } ${styles.Left}`}
          onClick={() =>
            dispatch(switchSpecialistsList({ allSpecialists: true }))
          }
        >
          All Specialists
        </button>
        <button
          className={`${
            allSpecialistsActive ? styles.Button : styles.ButtonSwitched
          } ${styles.Right}`}
          onClick={() =>
            dispatch(switchSpecialistsList({ allSpecialists: false }))
          }
        >
          My Specialists
        </button>
      </div>

      <div className={styles.InputContainer}>
        <input
          type='text'
          placeholder='Search...'
          className={styles.Search}
          onChange={e => dispatch(updateSearchQuery(e.target.value))}
        />
        <Icon path={mdiMagnify} size={1.2} className={styles.Magnify} />
      </div>
    </div>
  );
};

export default ControlsBox;
