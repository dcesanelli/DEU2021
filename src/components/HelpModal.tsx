import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HelpOutlineTwoToneIcon from '@material-ui/icons/HelpOutlineTwoTone';

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

export default function HelpModal() {
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
      <Button onClick={handleOpen} variant='contained' color='secondary'>
        Como se juega <HelpOutlineTwoToneIcon />
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
            <h2 id='transition-modal-title'>Carga</h2>
            <p id='transition-modal-description'>
              1. Crea una carpeta para la tarea con formato Ej: T-5341
            </p>
            <p id='transition-modal-description'>
              2. Guarda los scripts con el prefijo Ej: 01_*.sql acorde al orden
              de ejecuccion
            </p>
            <h2 id='transition-modal-title'>Actualizacion</h2>
            <p id='transition-modal-description'>
              1. Al ejecutar cada script es actualizado en cada una de las DB
              seteadas
            </p>
            <p id='transition-modal-description'>
              2. Si algun script falla el mismo retorna la DB y su error
            </p>
            <p id='transition-modal-description'>
              3. En el log se pueden ver las ejecuciones fallidas en detalle
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
