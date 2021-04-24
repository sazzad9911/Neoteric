import React from 'react'
import './card.css'
import x from './../../files/printed-t-shirt-red-png-download-700700-free-transparent-red-t-shirt-png-900_700-removebg-preview.png'

function Card({data}) {
    if(data===null){
        return(
            <div className='container'>
                <div className='card'>
                    <div className='contentBx'>
                        <h3>No such as data!</h3>
                    </div>
                </div>
            </div>
        )
    }
    else{
    return( 
         <div className='container'>
             <div className='card' >
                 <div className='imgBx'>
                     <img src={data.img} alt='n'></img>
                 </div>
                 <div className='contentBx'>
                     <h2>{data.name}</h2>
                     <h3>Prize: {data.prize}</h3>
                     <div className='size'>
                         <h3>Size :</h3>
                         {
                             data.size.map((d,i)=>(
                                <span>{d}</span>
                             ))
                         }
                     </div>
                     <div className='colorr'>
                         <h3>Color :</h3>
                         {
                             data.color.map((dat,i)=>(
                                 <span style={{background: dat}}></span>
                             ))
                         }
                     </div>
                     <a>View Now</a>
                 </div>
             </div>
         </div>
);
    }
}
export default Card;