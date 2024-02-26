import { useState } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  const initialTileData = [
    [{ imageString: 'vite' },{ imageString: 'vite' },{ imageString: 'vite' }],
    [{ imageString: 'vite' },{ imageString: 'vite' },{ imageString: 'vite' }],
    [{ imageString: 'vite' },{ imageString: 'vite' },{ imageString: 'vite' }],
  ]
  const [tileData, setTileData] = useState(initialTileData);

  const handleTileClick = (clickedRowIndex, clickedColumnIndex) => {
    setTileData((prevTileData) => {
      return prevTileData.map((row, rowIndex) => {
        return row.map((tile, columnIndex) => {
          if ((rowIndex == clickedRowIndex && columnIndex == clickedColumnIndex) || isAdjacent(clickedRowIndex, clickedColumnIndex, rowIndex, columnIndex)) {
            return { ...tile, imageString: tile.imageString === 'vite' ? 'react' : 'vite'}
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
            imageString={tile.imageString}
            onClick={() => handleTileClick(rowIndex, columnIndex)}
          />
        ))}
        </div>
      ))}
    </div>
  )
}

export default App
