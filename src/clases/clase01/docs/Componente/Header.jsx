
import React from 'react' ;

/**
 * 
 * @param { object } props Las propiedades del componente
 * @param { string } props.title el titulo del encabezado 
 * @param { string} [props.subTitle] - El subtitlo opcional del encabezado
 * @returns { JSX.Element } El componente del encabezado
 * 
 */

const HeaderComponent = ( {title, subTitle}) => {
  return (
    <header>
        <h1> { title }</h1>
        {subTitle && <h2> {subTitle}</h2>}
    </header>
  ) ;
} ;

export default HeaderComponent ;