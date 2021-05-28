import { useEffect, useState } from 'react';
import Board from '../components/Board';
import Inicio from '../components/Inicio';

function Game() {
  const [gridSize, setGridSize] = useState(4);
  const [boardSize, setBoardSize] = useState(320);
  const [showNumbers, setShowNumbers] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [dificultad, setDificultad] = useState('facil');
  const [contraste, setContraste] = useState('medio');

  useEffect(() => {
    setBoardSize(480);
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

  return (
    <>
      <div>
        {!isStarted ? (
          <Inicio
            onSwitchChange={showNumbersHandler}
            showNumbers={showNumbers}
            dificultad={dificultad}
            changeDificultad={dificultadHandler}
            contraste={contraste}
            changeContraste={contrasteHandler}
            changeSize={setBoardSize}
            onStart={onStartHandler}
          />
        ) : (
          <Board
            isStarted={isStarted}
            onStart={onStartHandler}
            boardSize={boardSize}
            gridSize={gridSize}
            showNumbers={showNumbers}
          />
        )}
      </div>
    </>
  );
}

export default Game;
