import React, { useEffect, useState } from 'react' ;

const ClaseUnouseEffect = () => {

  const [ luzPrendida , setLuzPrendida] = useState( true );
  const [ colorDePieza , setColorDePieza ] = useState ('blanco') ;

  useEffect( ()=>{
    if( luzPrendida){
        setColorDePieza("Rojo Encendido")
    }else{
        setColorDePieza('azul muy oscuro')
    }
  } , [ ])

  return (
    <div>
        <button onClick={ () => setLuzPrendida( !luzPrendida )}> 
            { luzPrendida ? 'apagar la luz' : 'prender la luz'} 
        </button>

        <p> El cuarto esta pintado de color :  { colorDePieza } </p>

    </div>
  ) ;
} ;

export default ClaseUnouseEffect ;