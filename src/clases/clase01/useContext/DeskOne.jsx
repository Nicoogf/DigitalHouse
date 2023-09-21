import React, { useContext } from 'react'
import NotasCompartidasContexto from './SharedNotesContext';

const DeskOne = () => {

  const { listaDeTareas } = useContext(NotasCompartidasContexto)

  return (
    <div className='desk'>
        <h2>Escritorio uno</h2>

        <ul>
        {listaDeTareas.map( (tarea , index) =>{
            return(
                <li key={ index }> { tarea } </li>
            )})} 

        </ul>
     
    </div>
  ) ;
} ;

export default DeskOne ;