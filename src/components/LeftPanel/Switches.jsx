import React from "react";
import Switch from "react-switch";


const Switches = (props) => {

  return (
    <div style={{ padding: '10px' }}>
      <Switch onChange={props.onChange} checked={props.value} /> Mostrar Ayuda Numérica
    </div>

  );
};

export default Switches;