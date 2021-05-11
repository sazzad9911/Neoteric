import React,{useEffect,useState} from 'react';
import './styles.css'
import {FcCancel} from 'react-icons/fc';
import firebaseApp from './../../firebase';
import { HideLoader, ShowLoader } from '../sub-component/Loader';
const Mypost = (props) => {
    const [mycart,setCart]=useState(null);
    const [refresh,setRefresh]=useState(null);
    let db=firebaseApp.firestore();

    useEffect(() => {
        ShowLoader();
        let array=[];
        let i=0;
        db.collection('post').where("uid","==",props.user.id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            array[i]=doc.data();
            i++;
        });
        setCart(array); 
      }).then(()=>{
          HideLoader();
      })
    }, [refresh])

    const Delete=(d)=>{
        db.collection('post').doc(d).delete()
        .then(()=>{
            setRefresh(d);
        });
    }
    return (
        <div className='mycart'>
           <div className='mycart-bx1'>
               <h4 style={{marginLeft:'10%'}}>Image</h4>
               <h4>Items</h4>
               <h4>Prize</h4>
           </div>
           {
               mycart!=null?(
                   mycart.map((d,i)=>(
                       <View data={d} serial={i+1} Delete={d=>Delete(d)}></View>
                   ))
               ):(
                   <div className='mycart-bx1'>
                       <p>Cart is empty.</p>
                   </div>
               )
           }
        </div>
    );
};

export default Mypost;



const View=(props)=>{


    return(
        <div className='mycart-bx1' style={{background:'whitesmoke'}}>
            <FcCancel className='i' onClick={props.Delete.bind(this,props.data.id)}></FcCancel>
            <h4><img src={props.data.img} alt={props.data.name}></img></h4>
            <h4>{props.data.name}</h4>
            <h4>{props.data.prize}</h4>
        </div>
    )
}