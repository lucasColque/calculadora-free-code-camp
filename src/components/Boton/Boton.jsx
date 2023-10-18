import React from 'react'
import './boton.css'

const Boton = ({children, agregarInput}) => {

    const esOperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <div
        className={`boton-contenedor ${esOperador(children)?'operador':''}`.trimEnd()}
        onClick={()=>agregarInput(children)}
        >
            {children}
        </div>

    )
}

export default Boton