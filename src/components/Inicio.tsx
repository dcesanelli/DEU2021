import Divider from '@material-ui/core/Divider';
import HelpModal from './HelpModal';
import { CSSProperties } from 'react';
import { Button } from '@material-ui/core';
import Switch from 'react-switch';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

type InicioProps = {
  showNumbers: boolean;
  dificultad: string;
  contraste: string;
  onSwitchChange: () => void;
  changeDificultad: (item: string) => void;
  changeContraste: (item: string) => void;
  onStart: () => void;
  boardSize: number;
  handleZoomInClick: () => void;
  handleZoomOutClick: () => void;
};

const inicioCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '0 auto',
  borderRadius: '8px',
  fontFamily: 'gameria',
  opacity: '0.95',
};
const inicioBajoCSS: CSSProperties = {
  ...inicioCSS,
  backgroundColor: '#a3d2ca',
};
const inicioAltoCSS: CSSProperties = {
  ...inicioCSS,
  backgroundColor: '#EEEEEE',
};
const itemConfigCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '2% 0',
  borderRadius: '8px',
  fontFamily: 'gameria',
  backgroundColor: '#e7d4b5',
};
const itemConfigBajoCSS: CSSProperties = {
  ...itemConfigCSS,
  backgroundColor: '#e7d4b5',
};
const itemConfigAltoCSS: CSSProperties = {
  ...itemConfigCSS,
  backgroundColor: '#000000',
};
const buttonGroupCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '2%',
};
const buttonBajoCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  backgroundColor: '#ca8a8b',
};
const buttonAltoCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  backgroundColor: '#FFDDCC',
};
const contrasteButtonBajoCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  paddingInline: '60px',
  backgroundColor: '#ca8a8b',
};
const contrasteButtonAltoCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  paddingInline: '60px',
  backgroundColor: '#FFDDCC',
};

function DificultadTooltip() {
  return (
    <>
      <Tooltip
        arrow
        leaveDelay={300}
        style={{ fontSize: '1em' }}
        title={
          <h1 style={{ padding: '2px', fontSize: '1.4em' }}>
            La cantidad de piezas que forman la imagen.
            <br />
            Facil: 4 <br />
            Medio:8 <br />
            Dificil:16
          </h1>
        }>
        <InfoIcon
          style={{ marginTop: '0px', marginLeft: '5px', fontSize: '1em' }}
        />
      </Tooltip>
    </>
  );
}

function ShowNumbersTooltip() {
  return (
    <>
      <Tooltip
        arrow
        leaveDelay={300}
        style={{ fontSize: '1em' }}
        title={
          <h1 style={{ padding: '2px', fontSize: '1.4em' }}>
            Cada pieza tiene la ubicacion que le corresponde en la imagen
            original como ayuda
          </h1>
        }>
        <InfoIcon
          style={{ marginTop: '0px', marginLeft: '5px', fontSize: '1em' }}
        />
      </Tooltip>
    </>
  );
}

function ContrasteTooltip() {
  return (
    <>
      <Tooltip
        arrow
        leaveDelay={300}
        style={{ fontSize: '1em' }}
        title={
          <h1 style={{ padding: '2px', fontSize: '1.4em' }}>
            Se recomienda contraste alto a personas con dificultad al perficibir
            colores.
          </h1>
        }>
        <InfoIcon
          style={{ marginTop: '0px', marginLeft: '5px', fontSize: '1em' }}
        />
      </Tooltip>
    </>
  );
}

function MedidaTooltip() {
  return (
    <>
      <Tooltip
        arrow
        leaveDelay={300}
        style={{ fontSize: '1em' }}
        title={
          <h1 style={{ padding: '2px', fontSize: '1.4em' }}>
            Modificar medida del puzzle.
          </h1>
        }>
        <InfoIcon
          style={{ marginTop: '0px', marginLeft: '5px', fontSize: '1em' }}
        />
      </Tooltip>
    </>
  );
}

function Inicio(props: InicioProps) {
  const {
    showNumbers,
    onSwitchChange,
    onStart,
    dificultad,
    changeDificultad,
    contraste,
    changeContraste,
    boardSize,
    handleZoomInClick,
    handleZoomOutClick,
  } = props;

  const onChangeDificultad = (selected: string) => {
    changeDificultad(selected);
  };

  const onChangeContraste = (selected: string) => {
    changeContraste(selected);
  };

  return (
    <>
      <div
        style={{
          ...(contraste === 'bajo' ? inicioBajoCSS : inicioAltoCSS),
          width: boardSize,
        }}>
        <div
          style={contraste === 'bajo' ? itemConfigBajoCSS : itemConfigAltoCSS}>
          <div
            style={{
              textAlign: 'center',
              marginTop: '5px',
              fontSize: '1.9em',
              color: contraste === 'bajo' ? 'black' : '#EDEDED',
            }}>
            Dificultad
            {DificultadTooltip()}
          </div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => onChangeDificultad('facil')}
              variant='contained'
              disabled={dificultad === 'facil'}
              style={contraste === 'bajo' ? buttonBajoCSS : buttonAltoCSS}>
              Facil
            </Button>
            <Button
              onClick={() => onChangeDificultad('medio')}
              variant='contained'
              disabled={dificultad === 'medio'}
              style={contraste === 'bajo' ? buttonBajoCSS : buttonAltoCSS}>
              Medio
            </Button>
            <Button
              onClick={() => onChangeDificultad('dificil')}
              variant='contained'
              disabled={dificultad === 'dificil'}
              style={contraste === 'bajo' ? buttonBajoCSS : buttonAltoCSS}>
              Dificil
            </Button>
          </div>
        </div>
        <div
          style={contraste === 'bajo' ? itemConfigBajoCSS : itemConfigAltoCSS}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.9em',
              color: contraste === 'bajo' ? 'black' : '#EDEDED',
            }}>
            Mostrar numeros
            {ShowNumbersTooltip()}
          </div>
          <Switch onChange={onSwitchChange} checked={showNumbers} />
        </div>
        <div
          style={contraste === 'bajo' ? itemConfigBajoCSS : itemConfigAltoCSS}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.9em',
              color: contraste === 'bajo' ? 'black' : '#EDEDED',
            }}>
            Contraste
            {ContrasteTooltip()}
          </div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => onChangeContraste('bajo')}
              variant='contained'
              style={
                contraste === 'bajo'
                  ? contrasteButtonBajoCSS
                  : contrasteButtonAltoCSS
              }
              disabled={contraste === 'bajo'}>
              Bajo
            </Button>
            <Button
              onClick={() => onChangeContraste('alto')}
              variant='contained'
              style={
                contraste === 'bajo'
                  ? contrasteButtonBajoCSS
                  : contrasteButtonAltoCSS
              }
              disabled={contraste === 'alto'}>
              Alto
            </Button>
          </div>
        </div>
        <div
          style={contraste === 'bajo' ? itemConfigBajoCSS : itemConfigAltoCSS}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.9em',
              color: contraste === 'bajo' ? 'black' : '#EDEDED',
            }}>
            Medida del puzzle
            {MedidaTooltip()}
          </div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={handleZoomOutClick}
              variant='contained'
              style={
                contraste === 'bajo'
                  ? contrasteButtonBajoCSS
                  : contrasteButtonAltoCSS
              }>
              Achicar
            </Button>
            <Button
              onClick={handleZoomInClick}
              variant='contained'
              style={
                contraste === 'bajo'
                  ? contrasteButtonBajoCSS
                  : contrasteButtonAltoCSS
              }>
              Agrandar
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
              paddingInline: '10%',
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
