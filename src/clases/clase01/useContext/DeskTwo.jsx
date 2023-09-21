import React, { useContext } from 'react' ;
import SharedNotesContext from './SharedNotesContext' ;
 
const DeskTwo = () => {

 const { addNotes } = useContext(SharedNotesContext);

  return (
    <div className='desk'>
        <h2>Escritorio Dos</h2>
        <button onClick={ () => addNotes("Esta es una nota muy importante")}> Agregar Nota</button>
    </div>
  ) ;
} ;

export default DeskTwo ;