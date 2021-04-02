import React from 'react'
import './LoginBar.css'
import img from './../files/afaga.png'
import {BsThreeDotsVertical} from 'react-icons/bs'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import{AiOutlineLogout} from 'react-icons/ai'
function LoginBar(props){
    const [anchorEl, open] = React.useState(null);  
        const handleClick = event => {  
                open(event.currentTarget);  
        };  
  
        const handleClose = () => {  
                open(null);  
        };
        if(props.login==='false'){
            return(
                <div className='profile'>
                        <AiOutlineLogout style={{width: "30px", height:"30px",margin:"5px 5px"}}></AiOutlineLogout>
                        <h4>LogIn</h4>
               </div>
            )
        }else{
           return(
            <div className='loginbar'>
            <img src={img} alt='profile'></img>
            <p>{props.name}</p>
            <BsThreeDotsVertical onClick={handleClick}></BsThreeDotsVertical>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
        }
}
export default LoginBar;

