import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Board from "../components/Board";
import images from "../components/images";

function Game() {
  const [imgUrl, setImgUrl] = useState("")
  const [gridSize, setGridSize] = useState(4);
  const [boardSize, setBoardSize] = useState(320);
  const [showNumbers, setShowNumbers] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setBoardSize(320);
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

  return (
    <div className="Game">
      <h1>Rompecabezas SARASA</h1>

      <button onClick={() => history.push('/juego/facil')}>Fácil</button>
      <button onClick={() => history.push('/juego/medio')}>Medio</button>
      <button onClick={() => history.push('/juego/dificil')}>Difícil</button>
      <input type="checkbox" defaultChecked={showNumbers} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShowNumbers(e.target.checked)} />
      Mostrar números sobre imágenes

      <Board boardSize={boardSize} gridSize={gridSize} imgUrl={imgUrl} showNumbers={showNumbers} />
      <div>
        {
          images.map((image) => (
            <div>
              <div>{image.name}</div>
              <div><img src={image.image} alt={image.name} onClick={() => setImgUrl(image.image)} /></div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Game;
