import React from 'react';
import { useHistory } from 'react-router-dom';
import { CSSProperties } from 'react';
import { Button } from '@material-ui/core';
import Switch from 'react-switch';

type InicioProps = {
  showNumbers: boolean;
  onSwitchChange: () => void;
  changeSize: (size: number) => void;
  onStart: () => void;
};

const containerApp: CSSProperties = {
  margin: '1% 3%',
  padding: '2% 0%',
  backgroundColor: '#a3d2ca',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingInline: '5%',
  marginInline: '6%',
};

function Inicio(props: InicioProps) {
  const history = useHistory();
  const { showNumbers, onSwitchChange, changeSize, onStart } = props;
  return (
    <>
      <div style={{}}>
        <div style={containerApp}>
          <div style={{ textAlign: 'center' }}>Dificultad</div>
          <Button
            onClick={() => history.push('/juego/facil')}
            variant='contained'
            color='primary'>
            Facil
          </Button>
          <Button
            onClick={() => history.push('/juego/medio')}
            variant='contained'
            color='primary'>
            Medio
          </Button>
          <Button
            onClick={() => history.push('/juego/dificil')}
            variant='contained'
            color='primary'>
            Dificil
          </Button>
        </div>
        <div style={{ marginTop: '10%', textAlign: 'center' }}>
          <div style={{ textAlign: 'center' }}>Mostrar numeros</div>
          <Switch onChange={onSwitchChange} checked={showNumbers} />
        </div>

        <div>
          <div style={{ marginTop: '10%', textAlign: 'center' }}>Tamaño</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              onClick={() => changeSize(120)}
              variant='contained'
              color='primary'>
              Pequeño
            </Button>
            <Button
              onClick={() => changeSize(240)}
              variant='contained'
              color='primary'>
              Medio
            </Button>
            <Button
              onClick={() => changeSize(480)}
              variant='contained'
              color='primary'>
              Grande
            </Button>
          </div>
        </div>
        <div>
          <div style={{ marginTop: '10%', textAlign: 'center' }}>Contraste</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button variant='contained' color='primary'>
              Bajo
            </Button>
            <Button variant='contained' color='primary'>
              Medio
            </Button>
            <Button variant='contained' color='primary'>
              Alto
            </Button>
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
