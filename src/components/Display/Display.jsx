
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import "./Display.css";

const Display = (props) => {

    // const [characters, setCharacters] = useState(props?.characters);

    // useEffect(()=> {
        
    // });

    // useEffect(()=> {
    //     console.log("primero",characters[0].id)
    // },[]);


    // if(!props.characters[0]?.id){
    //     return (
    //         <div className="vistaDisplay">
    //             NO HAY NADA AUN
    //         </div>
    //     )
    // }else{
        
        return (
            <div className="vistaDisplay">
                {/* {props.characters[0].name} */}
            </div>
        )
    }
    


export default connect((state)=>(
    {characters:state.characters}))(Display);