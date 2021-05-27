import { Button } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import { useState, CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';
import HelpModal from './HelpModal';
import images from './images';
import Tile from './Tile';
import VerImagen from './VerImagen';

type BoardProps = {
  boardSize: number;
  gridSize: number;
  showNumbers: boolean;
  isStarted: boolean;
  onStart: () => void;
};

const boardCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '2% 32%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
};

const actionsImageCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1%',
  margin: '2%',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
  fontSize: '0.4em',
};

function Board(props: BoardProps) {
  const { boardSize, gridSize, showNumbers, isStarted } = props;
  const [tiles, setTiles] = useState([...Array(gridSize * gridSize).keys()]);
  const [pieceSize, setPieceSize] = useState(Math.round(boardSize / gridSize));
  const [imageIndex, setImageIndex] = useState(1);
  const [imgUrl, setImgUrl] = useState(images[imageIndex].image);
  const history = useHistory();

  const nextImageHanlder = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(1);
      setImgUrl(images[1].image);
    } else {
      setImageIndex(imageIndex + 1);
      setImgUrl(images[imageIndex + 1].image);
    }

    
  };

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
        history.push('/final');
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

  useCallback(() => {
    shuffleTiles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div style={boardCSS}>
        <ul
          style={{
            width: boardSize,
            height: boardSize,
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
        <div style={actionsImageCSS}>
          <Button
            onClick={handleShuffleClick}
            variant='contained'
            style={{ fontSize: '2.3em', fontFamily: 'gameria' }}
            color='primary'>
            Mezclar
          </Button>
          <Button
            onClick={nextImageHanlder}
            variant='contained'
            style={{ fontSize: '2.3em', fontFamily: 'gameria' }}
            color='primary'>
            Próxima Imagen
          </Button>
          <VerImagen imgUrl={imgUrl} />
        </div>
        <Divider
          style={{
            marginInline: '10%',
            backgroundColor: 'black',
            marginBottom: '5%',
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
              fontSize: '2.3em',
              fontFamily: 'gameria',
            }}>
            Salir
          </Button>
          <HelpModal fontSize={'2.3em'} />
        </div>
      </div>
    </>
  );
}

export default Board;
