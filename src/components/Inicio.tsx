import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Switches from './Switches';
import MotionButton from './MotionButton';
import React from 'react';
import { Button } from '@material-ui/core';

type InicioProps = {
  showNumbers: boolean;
  onSwitchChange: () => void;
  changeSize: (size: number) => void;
  onStart: () => void;
};

function Inicio(props: InicioProps) {
  const history = useHistory();
  const { showNumbers, onSwitchChange, changeSize, onStart } = props;
  return (
    <>
      <div style={{}}>
        <Typography
          style={{ textAlign: 'center' }}
          variant='h3'
          component='h3'
          gutterBottom>
          Dificultad
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <MotionButton
            onClick={() => history.push('/juego/facil')}
            texto='Facil'
          />
          <MotionButton
            onClick={() => history.push('/juego/medio')}
            texto='Medio'
          />
          <MotionButton
            onClick={() => history.push('/juego/dificil')}
            texto='Dificil'
          />
        </div>
        <Switches onChange={onSwitchChange} value={showNumbers} />
        <div>
          <Typography
            style={{ marginTop: '10%', textAlign: 'center' }}
            variant='h3'
            component='h3'
            gutterBottom>
            Tamaño
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MotionButton onClick={() => changeSize(120)} texto='Pequeño' />
            <MotionButton onClick={() => changeSize(240)} texto='Medio' />
            <MotionButton onClick={() => changeSize(480)} texto='Grande' />
          </div>
        </div>
        <div>
          <Typography
            style={{ marginTop: '10%', textAlign: 'center' }}
            variant='h3'
            component='h3'
            gutterBottom>
            Contraste
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MotionButton onClick={() => changeSize(120)} texto='Bajo' />
            <MotionButton onClick={() => changeSize(240)} texto='Medio' />
            <MotionButton onClick={() => changeSize(480)} texto='Alto' />
          </div>
        </div>
        <div>
          <Button onClick={onStart} variant='contained' color='primary'>
            Comenzar
          </Button>
        </div>
      </div>
    </>
  );
}
export default Inicio;
