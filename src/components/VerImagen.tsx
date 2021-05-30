import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' color='primary' style={{ fontSize: '2.2em',fontFamily: 'gameria' }}>
        Ver Imagen
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
          <div className={classes.paper} >
            <img src={imgUrl} alt='Imagen resuelta' style={{ width: '100%'}} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
