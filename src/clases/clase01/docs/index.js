
/**
 * nombre de Uusario
 * @type { string }
 *  
 */

let userName = "Nicolas" ;

/**
 * Edad del usuario 
 * @type { number }
 */

let numero = 25


/**
 * lista de numeros
 * @type { Array< Number> }
 */

const miArray = [ 1 , 2, 3, 4, 5 ] ;

/**
 * Lista de arreglo mixta
 * @type { Array <Number | String | boolean>} 
 */

const segundoArray = [ false, 1 , "hola" , 23]



/**
 * 
 *Usuario
 *@type  { {id:Number , nombre:string ,SegundoNombre:string ,Edad :number  ,isActive:boolean } }
 */


const usuario = {
    id: 1 ,
    nombre :"Nicolas",
    SegundoNombre :"Gabriel",
    Edad: 27 ,
    isActive : true 
}

/**
 * Segundo Usuario
 * @typedef { object } User
 * @property { number } id este es el iddel usuario
 * @property { string } nombre Nombre del usuario
 * @property {string } SegundoNombre Segundo nombre del usuario
 * @property { number } Edad  Edad del usuario
 * @property { boolean } isActive Verifica si el usuario esta activo o no
 */

const SegundoUsuario = {
    id: 1 ,
    nombre :"Nicolas",
    SegundoNombre :"Gabriel",
    Edad: 27 ,
    isActive : true 
}


/**
 * @type { User }
 * 
 */

const TercerUsuario = {
    id: 1 ,
    nombre :"Nicolas",
    SegundoNombre :"Gabriel",
    Edad: 27 ,
    isActive : true 
}