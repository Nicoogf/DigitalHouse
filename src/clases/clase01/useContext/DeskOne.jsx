import React, { useContext } from 'react'
import SharedNotesContext from './SharedNotesContext';

const DeskOne = () => {

const { sharedNotes } = useContext ( SharedNotesContext )
  return (
    <div className='desk'>
     <h2> Escritorio Uno</h2>
     <ul>
         { sharedNotes.map(( note , index) =>(
            <li key={ index }> { note } </li>
         ))}       
     </ul>
    </div>
  ) ;
} ;

export default DeskOne ;