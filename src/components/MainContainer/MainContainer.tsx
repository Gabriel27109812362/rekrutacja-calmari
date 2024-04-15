import React from 'react';
import styles from './styles.module.scss';

const MainContainer = ({ children }: { children?: React.ReactNode }) => {
  return <main className={styles.Container}>{children}</main>;
};

export default MainContainer;
