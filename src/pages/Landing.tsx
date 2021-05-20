import React from 'react';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import posed from 'react-pose';


const Box = posed.div({
  hoverable: true,
  pressable: true,
  focusable: true,
  init: {
    scale: 1.3,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.8,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  press: {
    scale: 1.8,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  focus: { scale: 1.8 },
  blur: {
    scale: 1.8,
    transition: {
      type: 'spring',
      stiffness: 800,
    },
  },
});

function Landing() {
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
      <Divider style={{marginInline: '15%',backgroundColor:'faf2da'}} variant="middle" />
      <p
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontFamily: 'gameria',
          fontSize: '2em',
          color:'#feffde'
        }}>
        Bienvenidos a citadine puzzle!
      </p>
      <p
        style={{
          textAlign: 'center',
          marginTop: '10px',
          fontFamily: 'gameria',
          fontSize: '1.5em',
          color:'#feffde'
        }}>
        Diviertase haciendo puzzles
        <br />
        aprendiendo de sustentatibilidad.
      </p>
      <Box className='box'>
        <Button  variant='contained' href='/juego' style={{
          display: "flex",
          marginInline: '30%',
          backgroundColor: '#3d84b8',
          marginTop: '50px',
          justifyContent: "center"
        }} >
        Continuar 
        </Button>
      </Box>
    </>
  );
}

export default Landing;
