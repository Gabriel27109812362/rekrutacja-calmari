import React from 'react';
import styles from './styles.module.scss';
import avatar from '../../assets/avatar.png';

interface AvatarProps {
  image?: string;
  name: string;
  job: string;
  initials: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  job,
  name,
  image,
}) => {
  const randomBoolean = Boolean(job.split(' ').length < 3);

  return (
    <div className={styles.FlexColumn}>
      {image ? (
        <img src={avatar} alt='avatar' className={styles.Avatar} />
      ) : (
        <div
          className={
            randomBoolean ? styles.BluePlaceholder : styles.YellowPlaceholder
          }
        >
          {initials}
        </div>
      )}

      <p className={styles.Name}>{name}</p>
      <p className={styles.Job}>{job}</p>
    </div>
  );
};
