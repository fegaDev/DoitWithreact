
import React from 'react'

const Props = ({string,number,booleano,arreglo,objecto,porDefecto,funcion}) => {
  return (
    <div className="containerProps">
      <h1>{string}</h1>
      <h4>{number}</h4>
      <h4>{booleano ? "Boleano Si" : "Booleano No"}</h4>
      <h4>{arreglo.join(',')}</h4>
      <h4>{objecto.id+" "+objecto.nombre+" "+objecto.apellido}</h4>
      <h6>{porDefecto}</h6>
      <h4>{arreglo.map(funcion).join(',')}</h4>
    </div>
  )
}
Props.defaultProps ={
  porDefecto : "Es por defecto este titulo",
}
export default Props