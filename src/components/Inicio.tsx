import Divider from '@material-ui/core/Divider';
import HelpModal from './HelpModal';
import { CSSProperties } from 'react';
import { Button } from '@material-ui/core';
import Switch from 'react-switch';

type InicioProps = {
  showNumbers: boolean;
  dificultad: string;
  contraste: string;
  onSwitchChange: () => void;
  changeDificultad: (item: string) => void;
  changeContraste: (item: string) => void;
  onStart: () => void;
};

const inicioCSS: CSSProperties = {
  textAlign: 'center',
  padding: '1%',
  margin: '3% 32%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  opacity: '0.95',
  backgroundColor: '#a3d2ca',
};

const itemConfigCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '3% 3%',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#e7d4b5',
};

const buttonGroupCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '2%',
};

const buttonCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  backgroundColor: '#ca8a8b',
};

function Inicio(props: InicioProps) {
  const {
    showNumbers,
    onSwitchChange,
    onStart,
    dificultad,
    changeDificultad,
    contraste,
    changeContraste,
  } = props;

  const onChangeDificultad = (selected: string) => {
    changeDificultad(selected);
  };

  const onChangeContraste = (selected: string) => {
    changeContraste(selected);
  };

  return (
    <>
      <div style={inicioCSS}>
        <div style={itemConfigCSS}>
          <div
            style={{
              textAlign: 'center',
              marginTop: '5px',
              fontSize: '1.9em',
            }}>
            Dificultad
          </div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => onChangeDificultad('facil')}
              variant='contained'
              disabled={dificultad === 'facil'}
              style={buttonCSS}>
              Facil
            </Button>
            <Button
              onClick={() => onChangeDificultad('medio')}
              variant='contained'
              disabled={dificultad === 'medio'}
              style={buttonCSS}>
              Medio
            </Button>
            <Button
              onClick={() => onChangeDificultad('dificil')}
              variant='contained'
              disabled={dificultad === 'dificil'}
              style={buttonCSS}>
              Dificil
            </Button>
          </div>
        </div>
        <div style={itemConfigCSS}>
          <div style={{ textAlign: 'center', fontSize: '1.9em' }}>
            Mostrar numeros
          </div>
          <Switch onChange={onSwitchChange} checked={showNumbers} />
        </div>
        <div style={itemConfigCSS}>
          <div style={{ textAlign: 'center', fontSize: '1.9em' }}>
            Contraste
          </div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => onChangeContraste('bajo')}
              variant='contained'
              style={buttonCSS}
              disabled={contraste === 'bajo'}>
              Bajo
            </Button>
            <Button
              onClick={() => onChangeContraste('medio')}
              variant='contained'
              style={buttonCSS}
              disabled={contraste === 'medio'}>
              Medio
            </Button>
            <Button
              onClick={() => onChangeContraste('alto')}
              variant='contained'
              style={buttonCSS}
              disabled={contraste === 'alto'}>
              Alto
            </Button>
          </div>
        </div>
        <Divider
          style={{
            marginInline: '10%',
            backgroundColor: 'black',
            height: '2px',
            marginBottom: '5%',
            marginTop: '5%',
          }}
          variant='middle'
        />
        <div>
          <HelpModal fontSize={'1.2em'} />
          <Button
            onClick={onStart}
            variant='contained'
            style={{
              marginTop: '5%',
              backgroundColor: '#81b214',
              textAlign: 'center',
              fontSize: '1.8em',
              paddingInline:'10%',
              fontFamily: 'gameria',
            }}>
            Comenzar
          </Button>
        </div>
      </div>
    </>
  );
}
export default Inicio;
