
import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { ADD_CHARACTERS } from '../../redux/types';

import "./Menu.css";

const Menu = (props) => {

    //Hook
    // const [characters, setCharacters] = useState([]);

    const getFromApi = async () => {

        let res = await axios.get("https://rickandmortyapi.com/api/character");
        

        //Guardaremos en RDX
        props.dispatch({type:ADD_CHARACTERS,payload:res.data.results});

    }


    return (
        <div className="vistaMenu">
            <div className="botonPersonajes" onClick={()=>getFromApi()}>BRING!</div>
        </div>
    )
}

export default connect()(Menu);