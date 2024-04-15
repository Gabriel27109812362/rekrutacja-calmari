import React from 'react';
import MainContainer from './components/MainContainer/MainContainer';
import ControlsBox from './components/ControlsBox/ControlsBox';
import TileContainer from './components/TileContainer/TileContainer';

const App = () => {
  return (
    <MainContainer>
      <ControlsBox />
      <TileContainer />
    </MainContainer>
  );
};

export default App;
