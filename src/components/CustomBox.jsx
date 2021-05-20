import React from "react";
import posed from 'react-pose';

const CustomBox = (props) => {

  const Box = posed.div({
    hoverable: true,
    pressable: true,
    focusable: true,
    init: {
      scale: 0.85,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 0.9,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    press: {
      scale: 0.8,
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

  return (
        <Box className="box" >
          {props.children}
        </Box >

  );
};

export default CustomBox;
