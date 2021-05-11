import React,{useState,useEffect} from 'react'
import './View.css'
import Slider from './sub-component/Slider'
import img from './../files/t-shart.jpg'
import {ShowLoader,HideLoader} from './sub-component/Loader'
import {ShowAlert,HideAlert} from './sub-component/Alert'
import firebaseApp from './../firebase'
import SliderView from './sub-component/SliderView'
import { uuid } from 'uuidv4';
import emailjs from 'emailjs-com';
const View=(props)=>{
    if(props.data===null){
        window.location.replace('/');
    }
    var d=[props.data.img,'none',img,'',img,''];
    const [quantity,setQuantity]=useState(1);
    const [color,setColor]=useState(null);
    const [size,setSize]=useState(null);

    useEffect(() => {
        ShowLoader()
        const db=firebaseApp.firestore();
        
        HideLoader()
    }, [])
    const Qn=(p)=>{
        if(p==='+'){
            if(quantity>=20){

            }else{
                setQuantity(quantity+1);
            }
        }else{
            if(quantity===0){

            }else{
                setQuantity(quantity-1);
            }
        }
    }
    const Sz=(p)=>{
        document.getElementById(p).style.background='rgb(120, 202, 99)';
        if(size!==null){
            document.getElementById(size).style.background='none';
        }
        setSize(p);
    }
    const Col=(p)=>{
        document.getElementById(p).style.border='3px solid black';
        if(color!==null){
            document.getElementById(color).style.border='1px solid black';
        }
        setColor(p);
    }
    const SendMessage=(d)=>{
        let db=firebaseApp.firestore();
        db.collection('user').doc(props.data.uid).collection('messages').doc().set({
            message: d,
            date: new Date()
        });
        for(var i=0;i<props.users.length;i++){
            if(props.users[i].id===props.data.uid){
                //alert(props.users[i].email);
                emailjs.send("service_c7wsty3","template_rjwmd5f",{
                    from_name: props.user.name,
                    to_name: props.users[i].name,
                    message: d,
                    reply_to: props.users[i].email,
                },"user_luYgwKeL3OlnAERBaVnBL").then((response)=>{
                    console.log('success');
                },(error)=>{
                    console.log(error);
                });
            }
        }
    }
    
    const AddCart=()=>{
        if(props.user==null){
            ShowAlert('Opps!','You have to create an account first.');
            return;
        }
        if(quantity===0){
            ShowAlert('Wrong!','Enter valid quantity.');
            return;
        }
        if(color===null){
            ShowAlert('Wrong!','Please select color.');
            return;
        }
        if(size===null){
            ShowAlert('Wrong!','Please select your size');
            return;
        }
        ShowLoader();
        let db=firebaseApp.firestore();
       db.collection('user').doc(props.user.id).collection('cart').doc(props.data.id).set({
           id:props.data.id,
           name: props.data.name,
           prize: props.data.prize,
           quantity: quantity,
           color: color,
           size: size
       }).then(()=>{
           HideLoader();
           ShowAlert('Successfull!','Product added into cart.');
           
       })
    }
    const BuyNow=()=>{
        
        if(props.user==null){
            ShowAlert('Opps!','You have to create an account first.');
            return;
        }
        if(quantity===0){
            ShowAlert('Wrong!','Enter valid quantity.');
            return;
        }
        if(color===null){
            ShowAlert('Wrong!','Please select color.');
            return;
        }
        if(size===null){
            ShowAlert('Wrong!','Please select your size');
            return;
        }
        ShowLoader();
        let db=firebaseApp.firestore();
        let id=uuid();
        db.collection('user').doc(props.user.id).collection('buy').doc(id).set({
           id:id,
           productId: props.data.id,
           name: props.data.name,
           prize: props.data.prize,
           quantity: quantity,
           color: color,
           size: size
       }).then(()=>{
        SendMessage('New order post, Product Name: '+props.data.name+' Prize: '+props.data.prize+' ProductId: '+props.data.id+' Quantity: '+quantity+' Color: '+color+' Size: '+size+' Order by: '+props.user.name+' Phone: '+props.user.phone+' Email: '+props.user.email);
           HideLoader();
           ShowAlert('Successfull!','We will contact with you after few hours.');

       })
    }
    return(
        <div className='views'>
            <div className='full-view'>
            <div className='slide-view'>
                <SliderView img={props.data.images}></SliderView>
            </div>
            </div>
            <div className='description-view'>
                <div className='full-view'>
                    <h3>{props.data.name}</h3>
                </div>
                <div className='full-view'>
                    <h4>PRIZE: {(props.data.prize)*quantity}</h4>
                </div>
                <div className='full-view'>
                    <h4>COLOR:</h4>
                    {
                        props.data.color.map((d,i)=>(
                            <span style={{background:d}} onClick={Col.bind(this,d)} id={d}></span>
                        ))
                    }
                </div>
                <div className='full-view'>
                    <h4>SIZE:</h4>
                    {
                        props.data.size.map((d,i)=>(
                            <span id={d} onClick={Sz.bind(this,d)}>{d}</span>
                        ))
                    }
                </div>
                <div className='full-view'>
                    <h4>QUANTITY:</h4>
                    <button onClick={Qn.bind(this,'-')}>-</button>
                    <span>{quantity}</span>
                    <button onClick={Qn.bind(this,'+')}>+</button>
                </div>
                <div className='full-view'>
                    <input type='submit' value='+ Add Cart' onClick={AddCart}></input>
                    <input type='submit' value='$ Buy Now' onClick={BuyNow}></input>
                </div>
                <div className='full-view'>
                    <p><b>Description:</b>{props.data.description}</p>
                </div>
                <div className='full-view'>
                    <h4>SELLER INFORMATION</h4>
                </div>
                {
                    props.users.map((d,i)=>{
                        if(d.id===props.data.uid){
                            return(
                                <div>
                                  <div className='full-view'>
                                    <img src={d.img} alt='profile pic' className='img'></img>
                                    <p>{d.name}</p>
                                 </div>
                                 <div className='full-view'>
                                   <h4>Phone:</h4>
                                   <p>{d.phone}</p>
                                 </div>
                                 <div className='full-view'>
                                   <h4>Email:</h4>
                                   <p>{d.email}</p>
                                 </div>
                                </div>
                            )
                        }else{
                            return(
                                <div></div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )

}
export default View;