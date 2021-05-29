import { CSSProperties } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import images from './images';

type CongratsProps = {
  nextPuzzle: () => void;
  imageIndex: number;
};
const congratsCSS: CSSProperties = {
  textAlign: 'center',
  padding: '1%',
  margin: '2% 20%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
};

const contentCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '2% 3%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#e7d4b5',
};

const actionsButtonsCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1%',
  margin: '2%',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
  fontSize: '0.4em',
};

function Congrats(props: CongratsProps) {
  const { nextPuzzle, imageIndex } = props;
  const history = useHistory();

  return (
    <>
      <div style={congratsCSS}>
        <h1>CONTENIDO DESBLOQUEADO !!</h1>
        <p>{images[imageIndex].name}</p>
        <div style={contentCSS}>
          <p>{images[imageIndex].texto}</p>
          <ReactPlayer
            url={images[imageIndex].video}
            width='100%'
            height='400px'
          />
        </div>
        <div style={actionsButtonsCSS}>
          <Button
            onClick={() => history.push('/')}
            variant='contained'
            color='primary'
            style={{
              backgroundColor: 'red',
              fontSize: '2.8em',
              fontFamily: 'gameria',
            }}>
            Salir
          </Button>

          <Button
            onClick={() => nextPuzzle()}
            variant='contained'
            color='primary'
            style={{
              backgroundColor: 'green',
              fontSize: '2.8em',
              fontFamily: 'gameria',
            }}>
            Siguiente Imagen
          </Button>
        </div>
      </div>
    </>
  );
}
export default Congrats;
