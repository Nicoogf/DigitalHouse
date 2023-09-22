import React, { useState } from 'react' ;
import elContextoGlobalDeLaAplicacion from './SharedNotesContext';
import DeskOne from './DeskOne';
import DeskTwo from './DeskTwo';


const Office = () => {

  const [ objetoDeNotasCompartidas , setObjetoDeNotasCompartidas] = useState( [] ) ;

  const funcionParaAgregarNota = ( unaNotaPorParametro ) => {
    setObjetoDeNotasCompartidas( [...objetoDeNotasCompartidas , unaNotaPorParametro])
  }

  return (
  <elContextoGlobalDeLaAplicacion.Provider value={{ objetoDeNotasCompartidas , funcionParaAgregarNota }} >
    <div>
        <div className='oficina'>
          <h1>
            Oficina Compartida
          </h1>

          <DeskOne />
          <DeskTwo />

        </div>
    </div>
   </elContextoGlobalDeLaAplicacion.Provider>
  ) ;
} ;

export default Office ;