import { CSSProperties } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const congratsCSS: CSSProperties = {
  textAlign: 'center',
  padding: '1%',
  margin: '2% 20%',
  borderRadius:'8px',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
};

const contentCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '2% 3%',
  borderRadius:'8px',
  fontFamily: 'gameria',
  backgroundColor: '#e7d4b5',
};

const actionsButtonsCSS: CSSProperties = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  padding: '1%',
  margin: '2%',
  fontFamily: 'gameria',
  backgroundColor: '#a3d2ca',
  fontSize: '0.4em'
};

function Congrats() {

  const history = useHistory();

  return <>
  <div style={congratsCSS}>
    <h1>CONTENIDO DESBLOQUEADO !!</h1>
    <p>Titulo de la foto(?</p>
    <div style={contentCSS}>
      <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <ReactPlayer  
                url='https://www.youtube.com/watch?v=LRypKM2G-Qo'
                width='100%'
                height='400px'
       />
    </div>
    <div style={actionsButtonsCSS}>
          <Button onClick={() => history.push('/')} variant='contained'  color='primary' style={{ backgroundColor: 'red', fontSize: '2.8em',fontFamily: 'gameria' }}>
            Salir
          </Button>

          <Button onClick={() => history.push('/juego')} variant='contained' color='primary' style={{ backgroundColor: 'green', fontSize: '2.8em',fontFamily: 'gameria' }}>
            Volver a jugar
          </Button>
          
        </div>
  </div>
    
  </>;
}
export default Congrats;
