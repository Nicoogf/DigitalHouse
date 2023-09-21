import React, { useState } from 'react' ;
import SharedNotesContext from './SharedNotesContext';
import DeskOne from './DeskOne';
import DeskTwo from './DeskTwo';

const Office = () => {
  const [ sharedNotes , setSharedNotes] = useState([]) ;
  
  const addNotes = ( note ) =>{
    setSharedNotes([...sharedNotes , note ])
  }

  return (
    <SharedNotesContext.Provider value={ { sharedNotes , addNotes } }>
    <div>
       <div className='office'>
          <h1>Oficina Compartida</h1>
          {/* Escritorio*/}
          <DeskOne />
          <DeskTwo />
       </div>
    </div>
    </SharedNotesContext.Provider>
  ) ;
} ;

export default Office ;