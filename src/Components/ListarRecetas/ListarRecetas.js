import React, { useContext } from 'react';
import Receta from '../Receta'
import { RecetasContext } from '../../Context/RecetasContext'
import { style } from './index.scss';

const ListarRecetas = () => {

  const { recetas } = useContext(RecetasContext)

    return (
      <div className="row mt-2" id={style}>
        { 
          (recetas)
            ?(
              recetas.map( receta => (
                <Receta 
                  key = { receta.idDrink }
                  receta = { receta }
                />
              ))
            ):
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h4>No hay resultados</h4>
                </div>
              </div>
            </div>
        }
        
      </div>
    );
};

export default ListarRecetas;