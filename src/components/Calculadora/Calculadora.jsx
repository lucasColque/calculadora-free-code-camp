import React, { useState } from 'react';
import './calculadora.css';
import Boton from '../Boton/Boton';
import Pantalla from '../Pantalla/Pantalla';
import BotonClear from '../BotonClear/BotonClear';
import {evaluate} from 'mathjs';

const Calculadora = () => {
    const [input, setInput] = useState('');

    const agregarInput = value =>{
        setInput((input)=> input + value);
    }
    const eliminarInput = () =>{
        setInput('');
    }
    const resultadoInput = () =>{
//evaluate es una funcion del paquete math 

        if(input){
            setInput(evaluate(input));
        }else{
            alert("Ingrese un valor")
        }
    }
    return (
        <div className='contenedor__calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
                <Boton agregarInput={agregarInput}>1</Boton>
                <Boton agregarInput={agregarInput}>2</Boton>
                <Boton agregarInput={agregarInput}>3</Boton>
                <Boton agregarInput={agregarInput}>+</Boton>

            </div>
            <div className='fila'>
                <Boton agregarInput={agregarInput}>4</Boton>
                <Boton agregarInput={agregarInput}>5</Boton>
                <Boton agregarInput={agregarInput}>6</Boton>
                <Boton agregarInput={agregarInput}>-</Boton>
            </div>
            <div className='fila'>
                <Boton agregarInput={agregarInput}>7</Boton>
                <Boton agregarInput={agregarInput}>8</Boton>
                <Boton agregarInput={agregarInput}>9</Boton>
                <Boton agregarInput={agregarInput}>*</Boton>
            </div>
            <div className='fila'>
                <Boton agregarInput={resultadoInput}>=</Boton>
                <Boton agregarInput={agregarInput}>0</Boton>
                <Boton agregarInput={agregarInput}>.</Boton>
                <Boton agregarInput={agregarInput}>/</Boton>
            </div>
            <div className='fila'>
                <BotonClear
                eliminarInput={eliminarInput}
                >
                    Clear
                </BotonClear>
            </div>
        </div>
    )
}

export default Calculadora