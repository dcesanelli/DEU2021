import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Switches from "./LeftPanel/Switches";
import MotionButton from "./LeftPanel/MotionButton";

type LeftPanelProps = {
  showNumbers: boolean,
  onSwitchChange: () => void,
  changeSize: (size: number) => void
}


function LeftPanel(props: LeftPanelProps) {

  const history = useHistory();
  const { showNumbers, onSwitchChange, changeSize } = props;
  return <>
    <div style={{}}>
      <Typography style={{ textAlign: 'center' }} variant="h3" component="h3" gutterBottom>
        Dificultad
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MotionButton onClick={() => history.push('/juego/facil')} texto="Facil" />
        <MotionButton onClick={() => history.push('/juego/medio')} texto="Medio" />
        <MotionButton onClick={() => history.push('/juego/dificil')} texto="Dificil" />
      </div>
      <Switches
        onChange={onSwitchChange}
        value={showNumbers}
      />
      <div>
        <Typography style={{ textAlign: 'center' }} variant="h3" component="h3" gutterBottom>
          Tamaño
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <MotionButton onClick={() => changeSize(120)} texto="Pequeño" />
          <MotionButton onClick={() => changeSize(240)} texto="Medio" />
          <MotionButton onClick={() => changeSize(480)} texto="Grande" />
        </div>
      </div>
    </div>
  </>;
}
export default LeftPanel;
