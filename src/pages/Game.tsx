import React, { useEffect, useState, CSSProperties } from "react";

import { useLocation } from "react-router-dom";
import Board from "../components/Board";
import images from "../components/images";
import Typography from '@material-ui/core/Typography';
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"

function Game() {
  const [imgUrl, setImgUrl] = useState("")
  const [gridSize, setGridSize] = useState(4);
  const [boardSize, setBoardSize] = useState(320);
  const [showNumbers, setShowNumbers] = useState(true);
  const [imageIndex, setImageIndex] = useState(1);
  const location = useLocation();
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
    marginInline: '6%'
  }

  const onStartHandler = () => {
    setIsStarted(true)
  }

  const showNumbersHandler = () => {
    setShowNumbers(!showNumbers)
  }

  const nextImageHanlder = () => {

    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }

    setImgUrl(images[imageIndex].image);
  }

  return <>
    <Typography style={{ textAlign: 'center',marginTop: '10px',fontFamily:'gameria' }} variant="h2" component="h2" gutterBottom>
      Mega Puzzle
    </Typography>
    <div style={containerApp}>
      <LeftPanel onSwitchChange={showNumbersHandler} showNumbers={showNumbers} changeSize={setBoardSize} />
      <div >
        <Board isStarted={isStarted} onStart={onStartHandler} boardSize={boardSize} gridSize={gridSize} imgUrl={imgUrl} showNumbers={showNumbers} />
      </div>
      <RightPanel isStarted={isStarted}  onStart={onStartHandler} nextImage={nextImageHanlder} />
    </div>
  </>;

}

export default Game;
