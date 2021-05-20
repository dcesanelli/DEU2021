import React from 'react';
import { Button } from '@material-ui/core';
import CustomBox from './CustomBox';

const MotionButton = (props) => {
  return (
    <CustomBox>
      <Button
        onClick={props.onClick}
        style={{ marginInline: '5%', paddingInline: '5%' }}
        variant='contained'
        color='secondary'>
        {props.texto}
      </Button>
    </CustomBox>
  );
};
export default MotionButton;
