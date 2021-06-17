
import React from 'react';
import juego from '../../img/counter.jpg'
import { connect } from 'react-redux';
import { ADD_CART, REMOVE_CART, EMPTY_CART } from '../../redux/types';

import "./Cart.css";

const Cart = (props) => {

    let counter = {
        nombre: 'Counter Strike',
        version: 1.6,
        price: 7
    }

    const modificarCompra = (operando) => {
        switch (operando) {

            case "+":
                let game = {
                    products: counter,
                    quantity: 1
                }
                props.dispatch({type: ADD_CART, payload: game})
                break;
            
            case "-":
                break;
        }
    }

    return(
        <div className="vistaCart">
            <div className="botonCarrito" onClick={modificarCompra("-")}>-</div>
            <div className="producto"><img src={juego} alt="cyberCafe"></img></div>
            <div className="botonCarrito" onClick={modificarCompra("+")}>+</div>
        </div>
    )
}

export default connect()(Cart);