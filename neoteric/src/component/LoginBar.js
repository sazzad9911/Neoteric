import React from 'react'
import './LoginBar.css'
import img from './../files/afaga.png'
import {BsThreeDotsVertical} from 'react-icons/bs'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import{AiOutlineLogout} from 'react-icons/ai'
import firebaseApp from './../firebase'
function LoginBar(props){
    const Logout=()=>{
        open(null);  
        firebaseApp.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.reload()
          }).catch((error) => {
            // An error happened.
            alert(error);
          });
    }
    const [anchorEl, open] = React.useState(null);  
        const handleClick = event => {  
                open(event.currentTarget);  
        };  
  
        const handleClose = () => {  
                open(null);  
        };
        if(props.login==='false'){
            return(
                <a href='/login' style={{textDecoration:'none'}}>
                    <div className='profile' id='xc'>
                        <AiOutlineLogout style={{width: "30px", height:"30px",margin:"5px 5px"}}></AiOutlineLogout>
                        <h4>LogIn</h4>
                    </div>
                </a>
            )
        }else{
           return(
            <div className='loginbar'>
            <img src={props.img} alt='profile'></img>
            <p>{props.name}</p>
            <BsThreeDotsVertical onClick={handleClick}></BsThreeDotsVertical>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
        </div>
    )
        }
}
export default LoginBar;

