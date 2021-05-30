import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import Congrats from '../components/Congrats';
import images from '../components/images';
import Inicio from '../components/Inicio';

function Game() {
  const [gridSize, setGridSize] = useState(4);
  const [showNumbers, setShowNumbers] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [dificultad, setDificultad] = useState('medio');
  const [contraste, setContraste] = useState('medio');
  const [imageIndex, setImageIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(images[imageIndex].image);

  useEffect(() => {
    switch (dificultad) {
      case 'facil':
        setGridSize(2);
        break;
      case 'medio':
        setGridSize(3);
        break;
      case 'dificil':
        setGridSize(4);
        break;

      default:
        setGridSize(3);
        break;
    }
  }, [dificultad]);

  const onStartHandler = () => {
    setIsStarted(true);
  };

  const showNumbersHandler = () => {
    setShowNumbers(!showNumbers);
  };

  const dificultadHandler = (item: string) => {
    setDificultad(item);
  };

  const contrasteHandler = (item: string) => {
    setContraste(item);
  };
  const nextImageHanlder = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
      setImgUrl(images[0].image);
    } else {
      setImageIndex(imageIndex + 1);
      setImgUrl(images[imageIndex + 1].image);
    }
  };

  const nextPuzzle = () => {
    setIsFinished(false);
    nextImageHanlder();
    setIsStarted(true);
  };

  return (
    <>
      <div>
        {!isFinished ? (
          !isStarted ? (
            <Inicio
              onSwitchChange={showNumbersHandler}
              showNumbers={showNumbers}
              dificultad={dificultad}
              changeDificultad={dificultadHandler}
              contraste={contraste}
              changeContraste={contrasteHandler}
              onStart={onStartHandler}
            />
          ) : (
            <Board
              isStarted={isStarted}
              onStart={onStartHandler}
              imgUrl={imgUrl}
              nextImageHanlder={nextImageHanlder}
              boardSize={480}
              gridSize={gridSize}
              showNumbers={showNumbers}
              setIsFinished={setIsFinished}
              imageIndex={imageIndex}
            />
          )
        ) : (
          <Congrats nextPuzzle={nextPuzzle} imageIndex={imageIndex} />
        )}
      </div>
    </>
  );
}

export default Game;
