import React from 'react'
import './card.css'
import x from './../../files/t-shart.jpg'

function card() {
    return( 
         <div className = 'card-bx' >
         <div className = 'card' >
         <div className = 'imgbx' >
             <img src={x}></img>
         <div className = 'size' >
             <h1>T-Start</h1>
             <h2>Size</h2>
             <span>s</span>
             <span>m</span>
             <span>l</span>
             <span>xl</span>
             <span>xxl</span>
         </div>
         </div>
         </div>
        </div>
);
  
}
export default card;