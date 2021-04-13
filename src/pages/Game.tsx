import React, { useEffect, useState, CSSProperties } from "react";

import { useHistory, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const history = useHistory();

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
    margin: '2%',
    padding: '3% 0%',
    backgroundColor: '#a3d2ca' ,
    borderRadius: '15px',
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline:'5%',
    marginInline: '6%'
  }

  const showNumbersHandler = () => {
    setShowNumbers(! showNumbers)
  }

  const nextImageHanlder = () => {
    let random = Math.floor(Math.random() * (images.length - 1)); 
    console.log(random)
    setImgUrl(images[random].image)
  }

  return <>
    <Typography style={{textAlign:'center'}} variant="h2" component="h2" gutterBottom>
      Mega Puzzle
    </Typography>
    <div style={containerApp}>
      <LeftPanel onSwitchChange={showNumbersHandler} showNumbers={showNumbers}/>
      <div >
      <Board boardSize={boardSize} gridSize={gridSize} imgUrl={imgUrl} showNumbers={showNumbers} />
      </div>
      <RightPanel nextImage={nextImageHanlder} />
    </div>
  </>;

  // return (
  //   <div className="Game">
  //     <Board boardSize={boardSize} gridSize={gridSize} imgUrl={imgUrl} showNumbers={showNumbers} />
  //     <div>
  //       {
  //         images.map((image) => (
  //           <div>
  //             <div>{image.name}</div>
  //             <div><img src={image.image} alt={image.name} onClick={() => setImgUrl(image.image)} /></div>
  //           </div>
  //         ))
  //       }
  //     </div>
  //   </div>
  // );
}

export default Game;
