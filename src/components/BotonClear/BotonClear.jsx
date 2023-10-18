import React from 'react';
import './botonclear.css';

const BotonClear = ({children, eliminarInput}) => {

    return (
        <div 
        className='boton-clear'
        onClick={()=> eliminarInput()}
        >
            {children}
        </div>
    )
}

export default BotonClear