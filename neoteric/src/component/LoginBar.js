import React from 'react'
import './LoginBar.css'
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

