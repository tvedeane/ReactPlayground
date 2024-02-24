import { useState } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  let initialTiles = [
    'react', 'vite', 'react', 'vite'
  ];

  const handleTileClick = (clickedIndex) => {
    console.log('Tile clicked', clickedIndex);
  }

  const isAdjacent = (i1, i2) => Math.abs((i1 - i2)) == 1

  return (
    <div>
      {initialTiles.map((tile, index) => (
        <Tile
          key={index}
          imageState={tile.imageState}
          onClick={() => handleTileClick(index)}
          displayedImage='react'
        />
      ))}
    </div>
  )
}

export default App
