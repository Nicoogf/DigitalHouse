import React, { useContext } from 'react' ;
import NotasCompartidasContexto from './SharedNotesContext';

 
const DeskTwo = () => {
 const {FuncionDeAgregarTareas} = useContext( NotasCompartidasContexto )


  return (
    <div>
        <h2>Escritorio Dos</h2>

        <button onClick={ ()=> FuncionDeAgregarTareas( "Tarea Nueva ")}> Agregar </button>
        
    </div>
  ) ;
} ;

export default DeskTwo ;