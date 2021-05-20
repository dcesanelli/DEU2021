import React, { useEffect, useState, CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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

  const containerApp: CSSProperties = {
    margin: '1% 3%',
    padding: '2% 0%',
    backgroundColor: '#a3d2ca',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: '5%',
    marginInline: '6%',
  };

  const onStartHandler = () => {
    setIsStarted(true);
  };

  const showNumbersHandler = () => {
    setShowNumbers(!showNumbers);
  };

  return (
    <>
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
          color:'#feffde'
        }}
        variant='h2'
        component='h2'
        gutterBottom>
        Citadine Puzzle
      </Typography>
      <div style={containerApp}>
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
