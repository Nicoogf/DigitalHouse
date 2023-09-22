import React, { useEffect } from 'react'

const ChillComponent = React.memo(({ onclick }) => {

console.log("Renderizado del HIJO") ;

useEffect( ()=>{
    console.log("Llamada a la API")
} , [] )
  return (
    <button onClick={ onclick }>
        Incrementar
    </button>
  )
}
)

export default ChillComponent ;