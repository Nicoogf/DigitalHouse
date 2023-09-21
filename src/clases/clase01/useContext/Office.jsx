import React, { useState } from 'react' ;
import NotasCompartidasContexto from './SharedNotesContext';
import DeskOne from './DeskOne';
import DeskTwo from './DeskTwo';

const Office = () => {

  const [ listaDeTareas , setListaDeTareas ] = useState( [] ) ;

  const FuncionDeAgregarTareas = ( tareaRecibida ) =>{
    setListaDeTareas( [...listaDeTareas , tareaRecibida])
  }
  
  

  return (
    <NotasCompartidasContexto.Provider value={ {listaDeTareas , FuncionDeAgregarTareas}  }>
    <div className='oficina'>
     <h1>Lista de Tareas</h1>
      <DeskOne />
      <DeskTwo /> 
    </div>
   </NotasCompartidasContexto.Provider>
  ) ;
} ;

export default Office ;