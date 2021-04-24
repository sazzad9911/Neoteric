import React from 'react'
import './menu.css'
import {AiFillCaretDown} from "react-icons/ai";
import {Click} from './../App';

export const ActiveMenu=(props)=>{
  document.getElementById(props).className='active';
}
const Home=()=>{
  Click('home');
}
const Policies=()=>{
  Click('policies');
}
const Faq=()=>{
  Click('faq');
}
function Menu(props){
   function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return(
        <div className="topnav" id="myTopnav">
  <a id='home' onClick={Home}>Home</a>
  <div className="dropdown">
    <button className="dropbtn">Collections 
      <AiFillCaretDown className='a'></AiFillCaretDown>
    </button>
    <div className="dropdown-content">
      <a>T Shirt</a>
      <a>Polo</a>
      <a>Hoodies</a>
      <a>Basicx Full</a>
      <a>Sleeves</a>
    </div>
  </div> 
  <a id='policies' onClick={Policies}>Policies</a>
  <a id='faq' onClick={Faq}>FAQ</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
</div>
)
}
export default Menu;