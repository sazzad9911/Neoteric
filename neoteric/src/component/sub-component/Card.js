import React from 'react'
import './card.css'
import firebaseApp from './../../firebase'

function Card(props) {

    const ViewNow=()=>{
        //Click('view');
        props.changePost(props.data);
        const db=firebaseApp.firestore();
        const v=firebaseApp.firestore.FieldValue.increment();
        db.collection('post').doc(props.data.id).update({
            view: v
        })
    }
    if(props.data===null){
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
                     <img src={props.data.img} alt='n'></img>
                 </div>
                 <div className='contentBx'>
                     <h2>{props.data.name}</h2>
                     <h3>Prize: {props.data.prize}</h3>
                     <div className='size'>
                         <h3>Size :</h3>
                         {
                             props.data.size.map((d,i)=>(
                                <span>{d}</span>
                             ))
                         }
                     </div>
                     <div className='colorr'>
                         <h3>Color :</h3>
                         {
                             props.data.color.map((dat,i)=>(
                                 <span style={{background: dat}}></span>
                             ))
                         }
                     </div>
                     <a onClick={ViewNow}>View Now</a>
                 </div>
             </div>
         </div>
);
    }
}
export default Card;