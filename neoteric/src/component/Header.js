import React from 'react'
import './all-css.css'
import logo from '../files/logo.png'
import Search from './../component/Search'
import {FaBars} from 'react-icons/fa'
import Menu from './menu'
import LoginBar from './LoginBar';
import {Toggle} from './sub-component/Navigation'
import { Click } from '../App';
function Collection(props){
    if(props===1){
        document.getElementById('x').style.display='block';
    }else{
        document.getElementById('x').style.display='none';
    }
}
function Header(props) {
    const setCollName=(d)=>{
        props.setCollName(d);
        Click('collections');
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
                <div className="header-box2" style={{height:"33%", alignItems: 'center',display:'flex'}} id="menus">
                    <Menu admin={props.admin} setCollName={d=>setCollName(d)}></Menu>
                    <Search id='box1' posts={props.posts}></Search>
                    <LoginBar data={props.data} className='x'></LoginBar>
                </div>
                <div className="header-box3">
                <FaBars className="menu-bar" onClick={Toggle.bind(this,"mobile-menu",1)}></FaBars>
                </div>
            </div>
        </div>
    );
    
} 

export default Header;
