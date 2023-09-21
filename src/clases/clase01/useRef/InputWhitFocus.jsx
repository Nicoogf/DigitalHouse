import React, { useRef } from 'react' ;

const InputWithFocus = () => {

  const refInput = useRef();

  const enfocar = () =>{
    refInput.current.focus();
  }

  return (
    <div>
     <input type='text' className='input-text' ref={ refInput }></input>
     <button onClick={enfocar}>Enfocar input</button>
    </div>
  ) ;
} ;

export default InputWithFocus ;