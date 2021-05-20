import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Landing() {
  return (
    <>
      <Typography
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
        }}
        variant='h2'
        component='h2'
        gutterBottom>
        Citadine Puzzle
      </Typography>
      <p
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
        }}>
        Bienvenidos a citadine puzzle!
      </p>
      <p
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
        }}>
        Diviertase haciendo puzzles
        <br />
        aprendiendo de sustentatibilidad.
      </p>
      <Button color='primary' href='/juego'>
        Continuar
      </Button>
    </>
  );
}

export default Landing;
