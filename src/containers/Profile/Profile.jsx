
import React from 'react';
import {connect} from 'react-redux';

const Profile = (props) => {
    return(
        <div>
            <div>{props.user.name}</div>
            <div>{props.user.apellido}</div>
            <div>{props.user.email}</div>
        </div>
    )
}

export default connect((state)=>({user:state.credentials.user}))(Profile);