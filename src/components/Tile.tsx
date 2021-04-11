import React from "react";
import { Motion, spring } from "react-motion";
type TileProps = {
  key: number,
  index: number,
  imgUrl: string,
  tile: number,
  width: number,
  height: number,
  handleTileClick: (index: number) => void,
  boardSize: number,
  gridSize: number,
  showNumbers: boolean
}

function Tile(props: TileProps) {
  const { tile, index, width, height, handleTileClick, imgUrl, boardSize, gridSize, showNumbers } = props;
  console.log("Imagen usada:", imgUrl)
  const { row, col } = {
    row: Math.floor(index / gridSize),
    col: index % gridSize,
  }
  const visualPos = {
    x: col * width,
    y: row * height,
  };

  const tileStyle = {
    width: `calc(100% / ${gridSize})`,
    height: `calc(100% / ${gridSize})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: `${boardSize * 1.25}px`,
    backgroundPosition: `${(100 / gridSize) * (tile % gridSize)}% ${(100 / gridSize) * (Math.floor(tile / gridSize))}%`,

  };
  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y)
  }

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            // Si es el último se oculta
            opacity: tile === (gridSize * gridSize) - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {(!imgUrl || showNumbers) && `${tile + 1}`}
        </li>
      )}
    </Motion>
  );
}

export default Tile;
