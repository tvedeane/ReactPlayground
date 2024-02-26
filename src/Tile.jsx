import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';

const Tile = ({ imageString, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={imageString === 'react' ? reactLogo : viteLogo}
        alt={`Image`}
      />
    </div>
  );
};

export default Tile;
