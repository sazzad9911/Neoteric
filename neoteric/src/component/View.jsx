import React,{useState,useEffect} from 'react'
import './View.css'
import Slider from './sub-component/Slider'
import img from './../files/t-shart.jpg'
import {ShowLoader,HideLoader} from './sub-component/Loader'
import {ShowAlert,HideAlert} from './sub-component/Alert'
import firebaseApp from './../firebase'

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
    const AddCart=()=>{
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
    }
    const BuyNow=()=>{
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
    }
    return(
        <div className='views'>
            <div className='full-view'>
            <div className='slide-view'>
                <Slider img={d}></Slider>
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
                        if(d.email===props.data.email){
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