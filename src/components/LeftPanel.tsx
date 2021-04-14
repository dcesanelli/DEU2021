import { useHistory } from "react-router-dom";
import React from "react";
import Switches from "./LeftPanel/Switches";
import MotionButton from "./LeftPanel/MotionButton";

type LeftPanelProps = {
  showNumbers: boolean,
  onSwitchChange: () => void
}


function LeftPanel(props: LeftPanelProps) {

  const history = useHistory();
  return <>
    <div style={{}}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MotionButton onClick={() => history.push('/juego/facil')} texto="Facil" />
        <MotionButton onClick={() => history.push('/juego/medio')} texto="Medio" />
        <MotionButton onClick={() => history.push('/juego/dificil')} texto="Dificil" />
      </div>
      <Switches
        onChange={props.onSwitchChange}
        value={props.showNumbers}
      />
    </div>
  </>;
}
export default LeftPanel;
