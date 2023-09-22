import React, { useReducer } from 'react' ;

const estadoInicial = { inicioContador : 0 } ; 

function FuncionDelReducer ( estadoRecibido , accionRecibida ) {
    switch ( accionRecibida.type) {

        case 'INCREMENTAR' : {
            return {inicioContador :  estadoRecibido.inicioContador + 1 }
        }

        case 'DECREMENTAR' : {
            return { inicioContador : estadoRecibido.inicioContador - 1 } 
        }
        default:
            return estadoRecibido
    }
}

const ContadorConReducer = () =>{

    const [ estado , unaAcccion ] = useReducer( FuncionDelReducer  , estadoInicial )

    return(
        <div>
            <p> Contador : { estado.inicioContador} </p>
            <button onClick={ () => unaAcccion ( {type: 'INCREMENTAR'} )}> Incrementar </button>
            <button onClick={ () => unaAcccion ( {type: 'DECREMENTAR' })}> Decrementar </button>
        </div>
    )
}

export default ContadorConReducer ;