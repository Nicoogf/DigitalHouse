import React, { useLayoutEffect, useRef, useState } from 'react' ;



const MeasureElement = () => {

  const [ width , setWidth ] = useState ( 0 ) ;

  const elementRef = useRef();

  useLayoutEffect( () => {
    if( elementRef.current ){
        setWidth( elementRef.current.offsetWidth )
    } 
  } , [] )

  return (
    <div ref={ elementRef } style={ {width: "290px" }}>
        <p> El ancho de este div es : { width } Pixeles</p>
    </div>
  ) ;
} ;

export default MeasureElement