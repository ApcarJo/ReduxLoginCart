
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Header.css";
import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types';
import carrito from '../../img/carrito.png';

const Header = (props) => {

    let history = useHistory();

    const takeMe = (where) => {
        history.push(where);
    }

    const logOut = () => {
        props.dispatch({type:LOGOUT})

        setTimeout(()=> {
            history.push('/');
        },500);
    }

    const comprar = () => {
        console.log("hola")
    }

    if(!props.credentials?.token){
        return (
            <div className="vistaHeader">
                <div className="links">
                    <div className="tap" onClick={()=>takeMe("/login")}>Login</div>
                    <div className="tap" onClick={()=>takeMe("/register")}>Register</div>
                </div>
            </div>
        )

    }else{
        return (     

        <div className="vistaHeader">
            <div className="links">
                <div className="tap" onClick={()=>takeMe("/profile")}>{props.credentials?.user.name}</div>
                <div className="tap" onClick={()=>logOut("/")}>Log Out</div>
                <div className="tap" onClick={()=>comprar("/comprar")}>{props.cart?.quantity}</div>
                <div> <img className="fotoCarrito" src={carrito}/></div>
            </div>
        </div>
        )
    }
}

export default connect((state)=>({

    credentials:state.credentials,
    cart:state.cart

}))(Header);