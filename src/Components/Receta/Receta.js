import React, { useState, useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { style } from './index.scss';

function getModalStyle() {

  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };

}

const useStyles = makeStyles(theme => ({

  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: '#313131',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '25px'
  }

}));

const Receta = ({ receta }) => {

  const [ modalStyle ]= useState(getModalStyle)
  const [ open, setOpen ] = useState(false)

  const classes= useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
    
  const { infoReceta, guardarReceta, guardarIdReceta } = useContext(ModalContext)

  const mostrarIngredientes = infoReceta => {
    let ingredientes = []
    for(let i = 1; i < 16; i++){
      if( infoReceta[`strIngredient${i}`] ){
        ingredientes.push(
          <p className="mb-1">{infoReceta[`strIngredient${i}`]} {infoReceta[`strMeasure${i}`]} </p>
        )
      }
    }

    return ingredientes

  }
  
  return (
    <div 
      className="col-md-4 mb-3" 
      style={ style }
    >
      <div 
        className="card"
      >
        <h2
          className="card-header"
        >
          { receta.strDrink }
        </h2>
        <img 
          src={ receta.strDrinkThumb } 
          alt={ `Imagen de ${receta.strDrink}` } 
          className="card-img-top"            
        />

        <div 
          className="card-body"
        >
          <button 
            className="btn btn-block btn-primary"
            type="button"
            onClick={ () => {
              guardarIdReceta(receta.idDrink)
              handleOpen()
            }}
          >
            Ver Receta
          </button>

          <Modal
            open={ open }
            onClose={ () =>{
              guardarIdReceta(null)
              guardarReceta({})
              handleClose()
            }}
          >
            <div 
              style={ modalStyle }
              className={ classes.paper }
            >
              <h2
                className="text-white title-receta mb-3"
              >
                {infoReceta.strDrink}
              </h2>
              <img src={infoReceta.strDrinkThumb} alt="" className="img-fluid mb-4" />
              <h3
                className="text-white subtitle-receta"
              >
                Ingredientes
              </h3>
              <div
                className="text-white info-receta"
              >
                { mostrarIngredientes(infoReceta) }
              </div>
              <h3
                className="text-white mt-4 subtitle-receta"
              >
                Instrucciones
              </h3>
              <p
                className="text-white info-receta mb-2"
              >{infoReceta.strInstructions}</p>
            </div>            
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;