import React, { useContext, useState } from 'react'
import { CategoriasContext } from "../../Context/CategoriasContext";
import { RecetasContext } from '../../Context/RecetasContext'
import { style } from './index.scss'

const Formulario = () => {

  const { categorias } = useContext(CategoriasContext)
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

  const [busqueda, guardarBusqueda] = useState({
    categoria: ''
  })

  const obtenerDatosReceta = e => {
    
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })    

  }

  return (
    <form      
      className='col-12'
      id={ style }
      onSubmit={ e => {
        e.preventDefault()
        buscarRecetas(busqueda)
        guardarConsultar(true)
      } }
    >
      <fieldset 
        className="text-center"
      >
        <legend>Buscar bebidas</legend>
      </fieldset>

      <div 
        className="row text-center"
      >
        <div className="col-md-6">
          <select 
            name="categoria"
            id="categoria"
            className="form-control"
            onChange={ obtenerDatosReceta }
          >
            <option
              value=""
            >
              -- Selecciona la categoría --
            </option>
            {categorias.map(categoria => (
              <option 
                key={ categoria.strCategory }
                value={ categoria.strCategory }
              >
                { categoria.strCategory }
              </option>
            ))}
          </select>
        </div>
        <div 
          className="col-md-4"
        >
          <input 
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario