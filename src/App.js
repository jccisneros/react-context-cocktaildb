import React from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import ListarRecetas from './Components/ListarRecetas'

import CategoriasProvider from './Context/CategoriasContext'
import RecetasProvider from './Context/RecetasContext'
import ModalProvider from './Context/ModalContext'

function App() {
  return (

    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListarRecetas />
          </div>        

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
    
  );
}

export default App