import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Board from '../components/Board';
import Inicio from '../components/Inicio';

function Game() {
  const location = useLocation();
  const [gridSize, setGridSize] = useState(4);
  const [boardSize, setBoardSize] = useState(320);
  const [showNumbers, setShowNumbers] = useState(true);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setBoardSize(480);
    switch (location.pathname.substr(7)) {
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
  }, [location.pathname]);

  const onStartHandler = () => {
    setIsStarted(true);
  };

  const showNumbersHandler = () => {
    setShowNumbers(!showNumbers);
  };

  return (
    <>
      <div>
        {!isStarted ? (
          <Inicio
            onSwitchChange={showNumbersHandler}
            showNumbers={showNumbers}
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
