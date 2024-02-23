import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './Tile'

function App() {
  const initialTileData = [
    { imageState: viteLogo },
    { imageState: viteLogo },
    { imageState: viteLogo },
    { imageState: viteLogo },
    { imageState: viteLogo },
  ]
  const [tileData, setTileData] = useState(initialTileData);

  const handleTileClick = (clickedIndex) => {
    setTileData((prevTileData) => {
      return prevTileData.map((tile, index) => {
        if (index == clickedIndex) {
          return { ...tile, imageState: tile.imageState === viteLogo ? reactLogo : viteLogo}
        } else if (isAdjacent(index, clickedIndex)) {
          return { ...tile, imageState: tile.imageState === viteLogo ? reactLogo : viteLogo}
        }
        return tile;
      })
    });
  }

  const isAdjacent = (i1, i2) => Math.abs((i1 - i2)) == 1

  return (
    <div>
      {tileData.map((tile, index) => (
        <Tile
          key={index}
          imageState={tile.imageState}
          onClick={() => handleTileClick(index)}
        />
      ))}
    </div>
  )
}

export default App
