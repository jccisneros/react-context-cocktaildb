import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

//Creando Context
export const CategoriasContext = createContext();

//Provider -- aquí se encuentran las funciones y el estate --

const CategoriasProvider = props => {

  const [categorias, guardarCategorias  ] = useState([])

  //Llamando a la API
  useEffect(() => {
    
    const obtenerCategorias = async () => {

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const categorias = await axios.get(url)
      guardarCategorias(categorias.data.drinks)

    }

    obtenerCategorias()    
    
  }, [])

  return(
    <CategoriasContext.Provider
      value={{
        categorias        
      }}
    >
      {props.children}
    </CategoriasContext.Provider>

  )

}

export default CategoriasProvider