import React, { useEffect } from "react";
import { useState } from "react";
import Tile from "./Tile";
type BoardProps = {
  boardSize: number,
  gridSize: number,
  imgUrl: string,
  showNumbers: boolean,
  isStarted: boolean,
  onStart: () => void
}
function Board(props: BoardProps) {
  const { boardSize, gridSize, imgUrl, showNumbers,isStarted,onStart } = props;
  const [tiles, setTiles] = useState([...Array(gridSize * gridSize).keys()]);
  const [pieceSize, setPieceSize] = useState(Math.round(boardSize / gridSize));

  function isSolvable(tiles: number[]) {
    let product = 1;
    for (let i = 1, l = gridSize * gridSize - 1; i <= l; i++) {
      for (let j = i + 1, m = l + 1; j <= m; j++) {
        product *= (tiles[i - 1] - tiles[j - 1]) / (i - j);
      }
    }
    return Math.round(product) === 1;
  }

  function isSolved(tiles: number[]) {
    for (let i = 0, l = tiles.length; i < l; i++) {
      if (tiles[i] !== i) {
        return false;
      }
    }
    return true;
  }

  function shuffle(tiles: number[]): number[] {
    console.log(tiles);
    const shuffledTiles = [
      ...tiles
        .filter((t) => t !== tiles.length - 1)
        .sort(() => Math.random() - 0.5),
      tiles.length - 1,
    ];
    return isSolvable(shuffledTiles) && !isSolved(shuffledTiles)
      ? shuffledTiles
      : shuffle(shuffledTiles);
  }

  function canSwap(srcIndex: number, destIndex: number) {
    const { row: srcRow, col: srcCol } = {
      row: Math.floor(srcIndex / gridSize),
      col: srcIndex % gridSize,
    };
    const { row: destRow, col: destCol } = {
      row: Math.floor(destIndex / gridSize),
      col: destIndex % gridSize,
    };
    return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
  }

  function swap(tiles: number[], src: number, dest: number) {
    const tilesResult = [...tiles];
    [tilesResult[src], tilesResult[dest]] = [tilesResult[dest], tilesResult[src]];
    return tilesResult;
  }

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex: number) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index: number) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    onStart()
  }

  useEffect(() => {
    setPieceSize(Math.round(boardSize / gridSize));
    setTiles([...Array(gridSize * gridSize).keys()]);
  }, [boardSize, gridSize]);

  // Si el juego inició y esta resuelto muestro el texto final
  if (isStarted && isSolved(tiles)) {
    // ToDo: Mostrar Texto/ Video 
  }

  return (
    <>
      <ul style={{
        width: boardSize,
        height: boardSize,
      }} className="board" >
        {
          tiles.map((tile, index) => (
            <Tile
              key={tile}
              index={index}
              imgUrl={imgUrl}
              tile={tile}
              width={pieceSize}
              height={pieceSize}
              handleTileClick={handleTileClick}
              boardSize={boardSize}
              gridSize={gridSize}
              showNumbers={showNumbers}
              isSolved={isStarted && isSolved(tiles)}
            />
          ))
        }
      </ul>
      {
        !isStarted ?
          (<button onClick={() => handleStartClick()
          }> Mezclar!!!! </button>) :
          (<button onClick={() => handleShuffleClick()}> Reiniciar!!!!! </button>)}
    </>
  );
}

export default Board;
