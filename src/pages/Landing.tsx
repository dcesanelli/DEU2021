import { CSSProperties } from 'react';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

const landingCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '11% 32%',
  borderRadius:'8px',
  fontFamily: 'gameria',
  opacity:'0.9',
  backgroundColor: '#a3d2ca',
};


function Landing() {
  return (
    <>
      <div style={landingCSS}>
        <div style={{  fontSize: '3em'}}>
          Citadine Puzzle
        </div>
        <Divider
          style={{ marginInline: '15%', backgroundColor: 'black' }}
          variant='middle'
        />
        <p
          style={{
            marginTop: '20px',
            fontSize: '2em',
          }}>
          Bienvenidos a citadine puzzle!
        </p>
        <p
          style={{
            marginTop: '10px',
            fontSize: '1.5em',
          }}>
          Diviertase resolviendo puzzles
          <br />
          aprendiendo sobre la<br /> sustentatibilidad.
          <br /><br />
          Ordene las imagenes correctamente 

          para recibir valiosas recompensas.
        </p>
        <Button href='/juego' variant='contained' style={{
            marginTop: '10px',
            fontFamily: 'gameria',
            fontSize: '1.8em',
            backgroundColor:'#81b214'
          }}>
          Continuar
        </Button>
      </div>
    </>
  );
}

export default Landing;
