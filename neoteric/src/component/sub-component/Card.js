import React from 'react'
import './card.css'
import x from './../../files/printed-t-shirt-red-png-download-700700-free-transparent-red-t-shirt-png-900_700-removebg-preview.png'

function Card() {
    return( 
         <div className='container'>
             <div className='card' >
                 <div className='imgBx'>
                     <img src={x} alt='n'></img>
                 </div>
                 <div className='contentBx'>
                     <h2>Nick Shoes</h2>
                     <h3>Prize: </h3>
                     <div className='size'>
                         <h3>Size :</h3>
                         <span>S</span>
                         <span>M</span>
                         <span>L</span>
                         <span>XL</span>
                     </div>
                     <div className='colorr'>
                         <h3>Color :</h3>
                         <span></span>
                         <span></span>
                         <span></span>
                     </div>
                     <a>View Now</a>
                 </div>
             </div>
         </div>
);
  
}
export default Card;