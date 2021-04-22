import Typography from '@material-ui/core/Typography';
import Switch from "react-switch";


const Switches = (props) => {

  return (
    <div style={{ marginTop: '20%',textAlign: 'center' }}>
      <Typography style={{ textAlign: 'center' }} variant="h4" component="h4" gutterBottom>
        Mostrar numeros
      </Typography>
      <Switch onChange={props.onChange} checked={props.value} />
    </div>

  );
};

export default Switches;