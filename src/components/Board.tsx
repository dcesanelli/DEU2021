import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { useState, CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';
import HelpModal from './HelpModal';
import Tile from './Tile';
import CachedIcon from '@material-ui/icons/Cached';
import FastForwardIcon from '@material-ui/icons/FastForward';
import VerImagen from './VerImagen';
import images from './images';

type BoardProps = {
  boardSize: number;
  gridSize: number;
  showNumbers: boolean;
  isStarted: boolean;
  onStart: () => void;
  imgUrl: string;
  nextImageHanlder: () => void;
  setIsFinished: (isFinished: boolean) => void;
  imageIndex: number;
};

const boardCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '1% 32%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
};

const actionsImageCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0%',
  margin: '2% 0%',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
  fontSize: '0.4em',
};

function Board(props: BoardProps) {
  const {
    boardSize,
    gridSize,
    showNumbers,
    isStarted,
    imgUrl,
    nextImageHanlder,
    setIsFinished,
    imageIndex
  } = props;
  const [tiles, setTiles] = useState([...Array(gridSize * gridSize).keys()]);
  const [pieceSize, setPieceSize] = useState(Math.round(boardSize / gridSize));
  const [firstTime, setFirstTime] = useState(true);
  const history = useHistory();

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
    [tilesResult[src], tilesResult[dest]] = [
      tilesResult[dest],
      tilesResult[src],
    ];
    return tilesResult;
  }

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex: number) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);

      // Si el juego inició y esta resuelto muestro el texto final
      if (isStarted && isSolved(swappedTiles)) {
        setIsFinished(true);
      }
    }
  };

  const handleTileClick = (index: number) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  useEffect(() => {
    setPieceSize(Math.round(boardSize / gridSize));
    setTiles([...Array(gridSize * gridSize).keys()]);
  }, [boardSize, gridSize]);

  
  // useCallback(() => {
  //   shuffleTiles();
  //   // eslint-disable-next-line
  // }, []);

  if( firstTime){    
    setTimeout(() => {
      handleShuffleClick();
    }, 2000);
    setFirstTime(false);
  }
  


  return (
    <>
      <div style={boardCSS}>
        <h1>{images[imageIndex].name}</h1>
        <Divider
          style={{
            marginInline: '10%',
            backgroundColor: 'black',
            marginBottom: '3%',
          }}
          variant='middle'
        />
        <div
          style={{
            textAlign: 'center'
          }}>
          <ul
            style={{
              width: boardSize,
              height: boardSize,
              textAlign: 'center',
              borderRadius:'5px',
              border: 'solid white'
            }}
            className='board'>
            {tiles.map((tile, index) => (
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
            ))}
          </ul>
        </div>
        <div style={actionsImageCSS}>
          <Button
            onClick={handleShuffleClick}
            variant='contained'
            style={{ fontSize: '2.2em', fontFamily: 'gameria' }}
            color='primary'>
            Mezclar   <CachedIcon style={{ fontSize: '2em', fontFamily: 'gameria',paddingLeft: '2px' }}/>
          </Button>
          <Button
            onClick={nextImageHanlder}
            variant='contained'
            style={{ fontSize: '2.2em', fontFamily: 'gameria' }}
            color='primary'>
            Próxima Imagen <FastForwardIcon style={{ fontSize: '2em', fontFamily: 'gameria',paddingLeft: '3px' }}/>
          </Button>
          <VerImagen imgUrl={imgUrl} />
        </div>
        <Divider
          style={{
            marginInline: '10%',
            backgroundColor: 'black',
            height:'2px',
            marginTop: '1%',
            marginBottom: '3%',
          }}
          variant='middle'
        />
        <div style={actionsImageCSS}>
          <Button
            onClick={() => history.push('/')}
            variant='contained'
            color='primary'
            style={{
              backgroundColor: 'red',
              fontSize: '2.2em',
              fontFamily: 'gameria',
            }}>
            Salir
          </Button>
          <HelpModal fontSize={'2.2em'} />
        </div>
      </div>
    </>
  );
}

export default Board;
