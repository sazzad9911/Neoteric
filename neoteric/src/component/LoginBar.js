import React from 'react'
import './LoginBar.css'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {BsThreeDotsVertical} from 'react-icons/bs'
function LoginBar(props){
    return(
        <div className='loginbar'>
            <img src={props.image} alt='profile'></img>
            <p>{props.name}</p>
            <BsThreeDotsVertical></BsThreeDotsVertical>
        </div>
    )
}
export default LoginBar;

