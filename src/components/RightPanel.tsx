import Typography from '@material-ui/core/Typography';
import HelpModal from "./RightPanel/HelpModal.jsx";
import { Button } from "@material-ui/core";
import posed from 'react-pose';

type RightPanelProps = {
  nextImage: () => void,
  isStarted: boolean,
  onStart: () => void
}

const Box = posed.div({
  hoverable: true,
  pressable: true,
  focusable: true,
  init: {
    scale: 1.1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  press: {
    scale: 1.2,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  focus: { scale: 1.2 },
  blur: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 800
    }
  }
});


function RightPanel(props: RightPanelProps) {
  const { nextImage, onStart} = props;
  return <>
    <div style={{textAlign: 'center',justifyContent: 'space-between'}}>
      <HelpModal />
      <Typography style={{ textAlign: 'center' }} variant="h4" component="h4" gutterBottom>
        Puntos:
      </Typography>
      <Typography style={{ textAlign: 'center',marginBottom: '80%' }} variant="h4" component="h4" gutterBottom>
        848596
      </Typography>
      <Box className="box" >
        <Button onClick={nextImage}  style={{marginBottom: '15%'}} variant="contained" color="primary" > Mezclar </Button>
      </Box>
      <Box className="box" >
        <Button onClick={nextImage}  style={{marginBottom: '15%'}} variant="contained" color="primary" > Siguiente </Button>
      </Box>
      <Box className="box" style={{marginBottom: '10%'}} >
        <Button onClick={onStart}  variant="contained" color="primary" > Comenzar </Button>
      </Box>
      
    </div>
  </>;
}
export default RightPanel;
