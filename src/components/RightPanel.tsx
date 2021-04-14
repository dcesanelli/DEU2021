import React from "react";
import HelpModal from "./RightPanel/HelpModal.jsx";
import { Button } from "@material-ui/core";

type RightPanelProps = {
  nextImage: () => void
}

function RightPanel(props: RightPanelProps) {

  return <>
    <div style={{}}>
      <HelpModal />
      <Button onClick={props.nextImage} variant="contained" color="primary" > Siguiente </Button>
      <Button variant="contained" color="primary" > Comenzar </Button>
    </div>
  </>;
}
export default RightPanel;
