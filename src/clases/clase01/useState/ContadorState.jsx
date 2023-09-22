import React, { useState } from 'react' ;


const ContadorState = ( {} ) => {

    console.log("Se renderizo ContadorState")

  const [ contador , setContador ]= useState(0) ;

  const BotonAumentar= () =>{
    setContador( contador + 1)
  }
  
  return (
    <div>
        <h1> Contador </h1>
        <h3> { contador } </h3>
        <button onClick = { () => BotonAumentar()}> Aumentar </button>
    </div>
  ) ;
} ;

export default ContadorState ;