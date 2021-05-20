import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

function Landing() {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
          color: '#feffde',
        }}>
        Citadine Puzzle
      </div>
      <Divider
        style={{ marginInline: '15%', backgroundColor: 'faf2da' }}
        variant='middle'
      />
      <p
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontFamily: 'gameria',
          fontSize: '2em',
          color: '#feffde',
        }}>
        Bienvenidos a citadine puzzle!
      </p>
      <p
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
          fontSize: '1.5em',
          color: '#feffde',
        }}>
        Diviertase haciendo puzzles
        <br />
        aprendiendo de sustentatibilidad.
      </p>
      <Button href='/juego' variant='contained' color='primary'>
        Continuar
      </Button>
    </>
  );
}

export default Landing;
