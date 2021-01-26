import React, { Component } from 'react';
import {
    Text,
    Div,
} from './style'


export class Display extends Component {
    render(){
    return(
        <Div>
            <Text>{this.props.display}</Text>
        </Div>
    )}
}

export default Display;