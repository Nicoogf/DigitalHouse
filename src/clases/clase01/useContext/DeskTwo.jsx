import React, { useContext } from 'react' ;
import elContextoGlobalDeLaAplicacion from './SharedNotesContext' ;

 
const DeskTwo = () => {

 const { funcionParaAgregarNota } = useContext( elContextoGlobalDeLaAplicacion )

  return (
    <div>
     <h2> Escritorio 2 </h2>
     <button onClick={ ()=> funcionParaAgregarNota( "Tarea de testeo agregada")}> Agregar Tarrea</button>
    </div>
  ) ;
} ;

export default DeskTwo ;