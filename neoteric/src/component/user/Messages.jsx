import React,{useEffect,useState} from 'react';
import './styles.css'
import {FcCancel} from 'react-icons/fc';
import firebaseApp from './../../firebase';
import { HideLoader, ShowLoader } from '../sub-component/Loader';
const Messages = (props) => {
    const [mycart,setCart]=useState(null);
    const [refresh,setRefresh]=useState(null);
    let db=firebaseApp.firestore();

    useEffect(() => {
        ShowLoader();
        let array=[];
        let i=0;
        db.collection('user').doc(props.user.id).collection('messages').orderBy('date','desc')
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
        
    }
    return (
        <div className='mycart' style={{overflowY:'scroll'}}>
           <div className='mycart-bx1'>
               <h4 style={{width:'30%'}}>Date</h4>
               <h4 style={{width:'70%'}}>Message</h4>
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

export default Messages;


function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp *1000);
    var b = new Date(UNIX_timestamp*25.5);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = b.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
const View=(props)=>{


    return(
        <div className='mycart-bx1' style={{background:'whitesmoke'}}>
            <h4 style={{width:'30%'}}>{timeConverter(props.data.date)}</h4>
            <h4 style={{width:'70%'}}>{props.data.message}</h4>
        </div>
    )
}