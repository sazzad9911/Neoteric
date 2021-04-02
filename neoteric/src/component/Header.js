import React from 'react'
import './all-css.css'
import logo from '../files/logo.png'
import Search from './Search';
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BiCreditCard} from "react-icons/bi"
import {IoMdCash} from 'react-icons/io';
import{AiOutlineLogout} from 'react-icons/ai'
import Menu from './menu'
import LoginBar from './LoginBar';

function Collection(props){
    if(props===1){
        document.getElementById('x').style.display='block';
    }else{
        document.getElementById('x').style.display='none';
    }
}
function Toggle(name,boolean){
    boolean=parseInt(boolean);
    if(boolean===1){
        document.getElementById(name).style.display='block';
    }else{
        document.getElementById(name).style.display='none';
    }
}
function Header(props) {
    var log=null;
    if(props.Login==="flex"){
        log="LogOut";
    }else{
        log="LogIn";
    }
    return ( 
        <div className="header">
            <div className="header-box" >
            <img src={logo} alt="logo"></img>
            </div>
            <div className="header-box1">
                <div className="header-box2">
                    <h1>N</h1>
                    <h2>eoteric <b>BD</b></h2>
                    <p>Fashion Is Freedom</p>
                </div>
                <div className="header-box2" style={{height:"33%", alignItems: 'center'}} id="menus">
                    <Menu></Menu>
                    <Search></Search>
                    <LoginBar></LoginBar>
                </div>
                <div className="header-box3">
                <FaBars className="menu-bar" onClick={Toggle.bind(this,"mobile-menu",1)}></FaBars>
                </div>
            </div>



            <div className="mobile-menu" id="mobile-menu">
                <div className="mobile-menu1">
                <AiOutlineClose className="menu-bar" style={{margin: "5px 5px"}} onClick={Toggle.bind(this,"mobile-menu",0)}></AiOutlineClose>
                <Search></Search>
                    <div className="profile" style={{display: props.Login}}>
                        <div className="img1">
                        <img src={props.Img} alt="profile pic"></img>
                        </div>
                        <p>{props.Name}</p>
                    </div>
                    <div className="profile" style={{marginTop:"8px",display: props.Login}}>
                        <div className="x" style={{width: "30%", height: "fit-content", margin: "1.5px 1.5px", display:"flex", justifyContent:"center", flexWrap:"wrap", alignItems:"center"}}>
                        <CgProfile style={{width: "30px", height:"30px"}}></CgProfile>
                        <p style={{fontSize: "15px", margin:"0", textAlign:"center"}}>ED Profile</p>
                        </div>
                        <div className="x" style={{width: "30%", height: "fit-content", margin: "1.5px 1.5px", display:"flex", justifyContent:"center", flexWrap:"wrap",alignItems:"center"}}>
                        <BiCreditCard style={{width: "30px", height:"30px"}}></BiCreditCard>
                        <p style={{fontSize: "15px", margin:"0", textAlign:"center"}}>Item Cart</p>
                        </div>
                        <div className="x" style={{width: "30%", height: "fit-content", margin: "1.5px 1.5px", display:"flex", justifyContent:"center", flexWrap:"wrap",alignItems:"center"}}>
                        <IoMdCash style={{width: "30px", height:"30px"}}></IoMdCash>
                        <p style={{fontSize: "15px", margin:"0", textAlign:"center"}}>Buy Items</p>
                        </div>
                    </div>
                    <div className="profile" style={{marginTop:"8px", display:"block"}}>
                        <h4 >Home</h4>
                        <h4 >Collections</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>T Shirt</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>Polo</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>TurtleNecks</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>Hoodies</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>Basicx Full</h4>
                        <h4 style={{fontWeight: "400", margin: "5px 25px"}}>Sleeves</h4>
                        <h4>Policies</h4>
                        <h4 >FAQ</h4>
                        <div className='profile'>
                        <AiOutlineLogout style={{width: "30px", height:"30px",margin:"5px 5px"}}></AiOutlineLogout>
                        <h4>{log}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Header;
