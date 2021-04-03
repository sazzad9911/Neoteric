import React from 'react'
import './card.css'

function card() {
    return( 
         <div className = 'card-bx' >
         <div className = 'card' >
         <div className = 'imgbx' >
             <img src='t-shart.png'></img>
         <div className = 'card-bx1' >
             <h2>T-Start</h2>
         </div>
         <div className = 'size' >
             <h3>Size</h3>
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