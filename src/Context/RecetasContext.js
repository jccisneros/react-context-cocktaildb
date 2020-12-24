import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';

export const RecetasContext = createContext()

 const RecetasProvider = props => {

  const [recetas, guardarRecetas] = useState([])
  const [consultar, guardarConsultar] = useState(false)  
  const [busqueda, buscarRecetas] = useState({
    categoria: ''
  })
  
  const { categoria } = busqueda

  useEffect(() => {

    if(consultar) {

      const obtenerRecetas = async () => {

        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`        
        const resultado = await axios.get(url)        
        guardarRecetas(resultado.data.drinks)

      }

      obtenerRecetas()

    }
  }, [busqueda, categoria, consultar])

  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        guardarConsultar
      }}
    >
      { props.children }
    </ RecetasContext.Provider>
  )
}

export default RecetasProvider