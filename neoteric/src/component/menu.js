import React from 'react'
import './menu.css'

function Menu(props){
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
function x(){
    var i;
    for(i=0;i<3;i++){
        
    }
    
}
    return(
        <div className="topnav" id="myTopnav">
  <a href="#home" className="active" >Home</a>
  <div className="dropdown">
    <button className="dropbtn">Collections 
      
    </button>
    <div className="dropdown-content">
      <a href="#">T Shirt</a>
      <a href="#">Polo</a>
      <a href="#">Hoodies</a>
      <a href='#'>Basicx Full</a>
      <a href='#'>Sleeves</a>
    </div>
  </div> 
  <a href="#contact">Policies</a>
  <a href="#about" >FAQ</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
</div>
    )
}
export default Menu;