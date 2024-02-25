import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from './Tile'

function App() {
  const initialTileData = [
    [{ imageState: viteLogo },{ imageState: viteLogo },{ imageState: viteLogo }],
    [{ imageState: viteLogo },{ imageState: viteLogo },{ imageState: viteLogo }],
    [{ imageState: viteLogo },{ imageState: viteLogo },{ imageState: viteLogo }],
  ]
  const [tileData, setTileData] = useState(initialTileData);

  const handleTileClick = (clickedRowIndex, clickedColumnIndex) => {
    console.log(clickedRowIndex, clickedColumnIndex)
    setTileData((prevTileData) => {
      return prevTileData.map((row, rowIndex) => {
        return row.map((tile, columnIndex) => {
          console.log(clickedRowIndex, clickedColumnIndex)
          if ((rowIndex == clickedRowIndex && columnIndex == clickedColumnIndex) || isAdjacent(clickedRowIndex, clickedColumnIndex, rowIndex, columnIndex)) {
            return { ...tile, imageState: tile.imageState === viteLogo ? reactLogo : viteLogo}
          }
          return tile;
        });
      });
    });
  }

  const isAdjacent = (r1, c1, r2, c2) => (Math.abs(r1 - r2) == 1 && c1 == c2) || (Math.abs(c1 - c2) == 1 && r1 == r2)

  return (
    <div>
      {tileData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
        {row.map((tile, columnIndex) => (
          <Tile
            key={columnIndex}
            imageState={tile.imageState}
            onClick={() => handleTileClick(rowIndex, columnIndex)}
          />
        ))}
        </div>
      ))}
    </div>
  )
}

export default App
