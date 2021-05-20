import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import posed from 'react-pose';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outlineColor: '#eb5e0b',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outlineColor: '#eb5e0b',
    outline: '5',
  },
}));

type VerImagenProps = {
  imgUrl: string;
};

export default function VerImagen(props: VerImagenProps) {
  const { imgUrl } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Box = posed.div({
    hoverable: true,
    pressable: true,
    focusable: true,
    init: {
      scale: 1.1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    hover: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    press: {
      scale: 1.2,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    },
    focus: { scale: 1.2 },
    blur: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 800,
      },
    },
  });

  return (
    <div>
      <Box className='box'>
        <Button color='primary' variant='contained' onClick={handleOpen}>
          Ver Imagen
        </Button>
      </Box>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={imgUrl} alt='Imagen resuelta' />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
