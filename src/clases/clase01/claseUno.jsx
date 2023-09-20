import React , { useState }from 'react' ;

const ClaseUno = ( {valorInicial} ) => {

  console.log("Se renderizo el componente Clase uno")

  
  const [ contador , setContador ] = useState( valorInicial ) ;

  const Aumentar = () =>{
    setContador( contador + 1 )
  }
  return (
    <div>
      <h1> Clase 1</h1>
      <h2> Uso del Hook : useState () </h2>
      <hr />
      <h4> El valor actual del contador es : { contador } </h4>
      <ComponenteHijo onclick={ () => setContador(contador - 1)}> Aumentar </ComponenteHijo>


    </div>
  ) ;
} ;

const ComponenteHijo = ( {onclick , children } ) =>{

  console.log("Se renderizo el ultimocomponente creado")
  return(
  <button onClick={onclick}> {children} </button>
  )
}



export default ClaseUno ;


