import React from 'react'
import './menu.css'
import {AiFillCaretDown} from "react-icons/ai";


export const ActiveMenu=(props)=>{
  document.getElementById(props).className='active';
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
  <a href="/" id='home'>Home</a>
  <div className="dropdown">
    <button className="dropbtn">Collections 
      <AiFillCaretDown className='a'></AiFillCaretDown>
    </button>
    <div className="dropdown-content">
      <a href="#">T Shirt</a>
      <a href="#">Polo</a>
      <a href="#">Hoodies</a>
      <a href='#'>Basicx Full</a>
      <a href='#'>Sleeves</a>
    </div>
  </div> 
  <a href="/policies" id='policies'>Policies</a>
  <a href="/faq" id='faq'>FAQ</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
</div>
)
}
export default Menu;