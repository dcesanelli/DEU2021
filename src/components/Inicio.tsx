import HelpModal from './HelpModal';
import { useHistory } from 'react-router-dom';
import { CSSProperties } from 'react';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Switch from 'react-switch';

type InicioProps = {
  showNumbers: boolean;
  dificultad: string;
  contraste: string;
  onSwitchChange: () => void;
  changeSize: (size: number) => void;
  changeDificultad: (item:string) => void;
  changeContraste: (item:string) => void;
  onStart: () => void;
};

const inicioCSS: CSSProperties = {
  textAlign: 'center',
  padding: '1%',
  margin: '3% 32%',
  borderRadius:'8px',
  fontFamily: 'gameria',
  opacity:'0.95',
  backgroundColor: '#a3d2ca',
};

const itemConfigCSS: CSSProperties = {
  textAlign: 'center',
  padding: '2%',
  margin: '3% 3%',
  borderRadius:'8px',
  fontFamily: 'gameria',
  backgroundColor: '#e7d4b5',
};

const buttonGroupCSS: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:'2%'
};

const buttonCSS: CSSProperties = {
  fontSize: '1.3em',
  fontFamily: 'gameria',
  backgroundColor:'#ca8a8b'
};


function Inicio(props: InicioProps) {
  const history = useHistory();
  const { showNumbers, onSwitchChange, changeSize, onStart,dificultad,changeDificultad,contraste,changeContraste } = props;

  const onChangeDificultad = (selected:string) => {
    changeDificultad(selected);
  };

  const onChangeContraste = (selected:string) => {
    changeContraste(selected);
  };
  
  return (
    <>
      <div style={inicioCSS}>
          <div style={{ paddingBottom:'6px'}}> <HelpModal fontSize={'1.2em'}/> </div>
          <Divider
            style={{ marginInline: '15%', backgroundColor: 'black',marginBottom:'1px' }}
            variant='middle'
          />
          
          
          <div style={itemConfigCSS}>
              <div style={{ textAlign: 'center',marginTop:'5px',fontSize: '1.9em' }}>Dificultad</div>
              <div style={buttonGroupCSS}>
                <Button
                  onClick={() => onChangeDificultad('facil')}
                  variant='contained'
                  disabled={dificultad == 'facil'}
                  style={buttonCSS}>
                  Facil
                </Button>
                <Button
                  onClick={() => onChangeDificultad('medio')}
                  variant='contained'
                  disabled={dificultad == 'medio'}
                  style={buttonCSS}>
                  Medio
                </Button>
                <Button
                  onClick={() => onChangeDificultad('dificil')}
                  variant='contained'
                  disabled={dificultad == 'dificil'}
                  style={buttonCSS}>
                  Dificil
                </Button>
              </div>  
          </div>
        <div style={itemConfigCSS}>
          <div style={{ textAlign: 'center' ,fontSize: '1.9em'}}>Mostrar numeros</div>
          <Switch onChange={onSwitchChange} checked={showNumbers} />
        </div>

        <div style={itemConfigCSS}>
          <div style={{fontSize: '1.9em' }}>Tamaño</div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => changeSize(120)}
              variant='contained'
              style={buttonCSS}>
              Chico
            </Button>
            <Button
              onClick={() => changeSize(240)}
              variant='contained'
              style={buttonCSS}>
              Medio
            </Button>
            <Button
              onClick={() => changeSize(480)}
              variant='contained'
              style={buttonCSS}>
              Grande
            </Button>
          </div>
        </div>
        <div style={itemConfigCSS}>
          <div style={{  textAlign: 'center',fontSize: '1.9em' }}>Contraste</div>
          <div style={buttonGroupCSS}>
            <Button
              onClick={() => onChangeContraste('bajo')} 
              variant='contained'
              style={buttonCSS}
              disabled={contraste == 'bajo'}>
              Bajo
            </Button>
            <Button
              onClick={() => onChangeContraste('medio')} 
              variant='contained'
              style={buttonCSS}
              disabled={contraste == 'medio'}>
              Medio
            </Button>
            <Button
              onClick={() => onChangeContraste('alto')} 
              variant='contained'
              style={buttonCSS}
              disabled={contraste == 'alto'}>
              Alto
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={onStart} variant='contained' style={{ marginTop: '3%', backgroundColor:'#81b214', textAlign: 'center',fontSize: '1.8em',fontFamily: 'gameria', }}>
            Comenzar
          </Button>
        </div>
      </div>
    </>
  );
}
export default Inicio;
