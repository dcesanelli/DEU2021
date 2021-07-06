import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HelpIcon from '@material-ui/icons/Help';

type HelpModalProps = {
  fontSize: string;
};

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

export default function HelpModal(props: HelpModalProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant='contained'
        style={{
          backgroundColor: '#fea82f',
          fontFamily: 'gameria',
          fontSize: props.fontSize,
        }}>
        Como se juega <HelpIcon style={{ marginLeft:'3px'}}></HelpIcon>
      </Button>
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
            <h2 id='transition-modal-title' style={{ textAlign: 'center' }}>
              Bienvenido al Citadine Puzzle
            </h2>
            <p id='transition-modal-description'>
              1. Las piezas se moverán haciendo "click" sobre cada una de ellas.
            </p>
            <p id='transition-modal-description'>
              2. Para desordenar el rompecabezas presioná "Mezclar"
            </p>
            <p id='transition-modal-description'>
              3. Para cambiar a la siguiente imagen presioná "Próxima Imagen".
            </p>
            <p id='transition-modal-description'>
              4. Presiona el botón "Ver Imagen" para ver la imagen que deberás
              armar.
            </p>
            <h2 id='transition-modal-title' style={{ textAlign: 'center' }}>
              BUENA SUERTE!!!
            </h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
