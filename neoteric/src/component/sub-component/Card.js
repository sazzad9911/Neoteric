import React from 'react'
import './card.css'
import x from './../../files/t-shart.jpg'

function Card() {
    return( 
         <div className = 'card-bx' >
         <div className = 'card' >
         <div className = 'imgbx' >
             <img src={x}></img>
             <div className ='contentBx'>
             <h2>T-Start</h2>
         <div className = 'size' >
             <h3>Size</h3> 
             <span>s</span>
             <span>m</span>
             <span>l</span>
             <span>xl</span>
             <span>xxl</span>
         </div>
         <div className = 'color' >
             <h3>color :</h3>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
        </div>
        <a href='#'> Buy Now </a>
         </div>
         </div>
         </div>
        </div>
);
  
}
export default Card;