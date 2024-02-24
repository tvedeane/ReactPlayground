import { useRef, useEffect } from 'react'
import './App.css'
import Tile from './Tile'

function App() {
  let tiles = [
    'react', 'vite', 'react', 'vite'
  ];

  const tileRefs = useRef([]);

  useEffect(() => {
    tileRefs.current = tileRefs.current.slice(0, tiles.length);
  }, [tiles]);

  const handleTileClick = (clickedIndex) => {
    console.log('hey im in the parent! clicked on tile', clickedIndex);
    tileRefs.current[clickedIndex].swapLogo();
  }

  const isAdjacent = (i1, i2) => Math.abs((i1 - i2)) == 1

  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          ref={el => tileRefs.current[index] = el}
          imageState={tile.imageState}
          onClick={() => handleTileClick(index)}
          displayedImage='react'
        />
      ))}
    </div>
  )
}

export default App
