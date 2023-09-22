import React, { useCallback, useState } from 'react' ; 
import ChillComponent from './ChillComponent';

const UseCallbackComponent = () => {

  const [ count , setCount ] = useState( 0 ) ;

 const HandleClick =  useCallback( () => {
    setCount ((prevState) => prevState +1 )
  } , [  ] )

{ /* 
    const HandleClick = () => {
    setCount ( count + 1 )
  }
*/ }
  

  console.log("Renderizado del PADRE")

  return (
    <div>
        <p> Count : { count } </p>

        <ChillComponent onclick={ HandleClick }/>

    </div>
  ) ;
} ;

export default UseCallbackComponent ; 