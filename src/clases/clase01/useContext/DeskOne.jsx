import React, { useContext } from 'react' ;
import elContextoGlobalDeLaAplicacion from './SharedNotesContext';


const DeskOne = () => {

  const { objetoDeNotasCompartidas } = useContext( elContextoGlobalDeLaAplicacion )

  return (
    <div className='escritorio'>
      <h2>Escritorio 1</h2>
      <ul>
         { objetoDeNotasCompartidas.map (( notaRecibida , identificador ) =>{
            return(
              <li key = { identificador } >  { notaRecibida } </li>
            )
         })}
      </ul>
    </div>
  ) ;
} ;

export default DeskOne ;