import React, { useMemo, useState } from 'react' ;
import data from '../../../dataBase';

const average = ( list ) => {
    console.log( "Calculando average") ;
    const suma = list.reduce(( a, b) => a + b.amount , 0 ) 
    return `El promedio es ${ suma / list.length}`
}   

const UseMemoComponent = () => {

  const [show , setShow] = useState( false ) ;

  const averageMemo = useMemo( () => average(data) , []) ;

  console.log( "Renderizado de Estadisticas")

  const handleShow  = () =>{
    setShow( !show )
  }

  return (
    <div>
        <h2>Estadisticas { averageMemo } </h2>
        <button onClick={ handleShow }> {  show ? 'Ocultar' : 'Mostrar'} </button>
    </div>
  )
}

export default UseMemoComponent ;