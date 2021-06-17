
import React from 'react';
import "./Login.css";
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types';
import {useHistory} from 'react-router-dom';

const Login = (props) => {

    let history = useHistory();

    const login = async () => {

        //Todo el proceso hasta recibir las credenciales del backend, se presupone a 
        //estas alturas del juego.

        let data = {
            token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkZGYyYmQzNjAzMjQ4ZmMyZTJmNTUiLCJjcmVhdGVBdCI6IjIwMjEtMDYtMDlUMTE6Mjg6MDEuNDEyWiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyMzIzODA4MX0.Fs73g3IGJ5BCqkOnPKHDM5LRQL1-DB4eMt7bviMSHkk',
            user : {
                name: 'Jose Luis',
                apellido: 'Aparicio',
                edad: 36,
                email: 'joseluis@gmail.com'
            }
        }

        //Guardo en RDX
        props.dispatch({type:LOGIN,payload:data});

        //Redireccion a Profile

        setTimeout(()=> {
            
            history.push("/cart");

        },500);

    }

    return (
        <div className="vistaLogin">

            <div className="logMe" onClick={()=>login()}>
                LOGEAME!
            </div>

        </div>
    )
}

export default connect()(Login);