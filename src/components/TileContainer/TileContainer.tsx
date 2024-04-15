import React from 'react';
import styles from './styles.module.scss';
import Tile from '../Tile/Tile';

const TileContainer = () => {
  return (
    <div className={styles.Container}>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
};

export default TileContainer;
