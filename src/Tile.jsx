import React, { useState } from 'react';

const Tile = ({ imageState, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={`${imageState}`} alt={`Image`} />
    </div>
  );
};

export default Tile;
