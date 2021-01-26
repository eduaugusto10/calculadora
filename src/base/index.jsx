import React, { useState } from 'react';
import Soma from '../components/soma';
import Display from '../components/display'
import {
    Botao,
    Container,
    Div,
    Text,
} from './style.js';

export function LoadCalculated(){
    const [display, setdisplay] = useState('0')

    function addDigits(e){
        setdisplay(e.target.value)
    }
    return(
        <Container>
            <Div>
            <Display display={display}/>
            </Div>
            <Botao style={{backgroundColor:'gray'}}>%</Botao>
            <Botao style={{backgroundColor:'gray'}}>CE</Botao>
            <Botao style={{backgroundColor:'gray'}}>C</Botao>
            <Botao style={{backgroundColor:'gray'}}>/</Botao>
            <Botao value='7' onClick={addDigits}>7</Botao>
            <Botao value='8' onClick={addDigits}>8</Botao>
            <Botao value='9' onClick={addDigits}>9</Botao>
            <Botao style={{backgroundColor:'gray'}}>*</Botao>
            <Botao value='4' onClick={addDigits}>4</Botao>
            <Botao value='5' onClick={addDigits}>5</Botao>
            <Botao value='6' onClick={addDigits}>6</Botao>
            <Botao style={{backgroundColor:'gray'}}>-</Botao>
            <Botao value='3' onClick={addDigits}>3</Botao>
            <Botao value='2' onClick={addDigits}>2</Botao>
            <Botao value='1' onClick={addDigits}>1</Botao>
            <Botao style={{backgroundColor:'gray'}}>+</Botao>
            <Botao value='.' onClick={addDigits}>.</Botao>
            <Botao value='0' onClick={addDigits}>0</Botao>
            <Botao style={{width:'100px', backgroundColor:'blueviolet'}}>=</Botao>
        </Container>
    )
}

export default LoadCalculated;