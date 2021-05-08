import React,{useState,useEffect} from 'react'
import './Slider.css'
import $ from 'jquery';

export const Clicked=(p)=>{
    //alert(p)
    document.getElementById(p).checked=true;
}
const Slider=(props)=>{
    const a=['r1','r2','s3','s4','p5'];
    useEffect(() => {
        var i=0;
        setInterval(() => {
           var x=document.getElementById(a[i]);
           if(x!=null){
               x.checked=true;
               //console.log(i);
               i++;
               if(i===5){
                   i=0;
               }
           }else{
               i=0;
               clearInterval();
           }
        }, 3000);
    }, [])
    
    return(
        <div className='slidershow middle'>
            <div className='sliderss'>
                <input type='radio' name='r' id='r1'></input>
                <input type='radio' name='r' id='r2'></input>
                <input type='radio' name='r' id='s3'></input>
                <input type='radio' name='r' id='s4'></input>
                <input type='radio' name='r' id='p5'></input>
                <div className='slidee s1'>
                    <img src={props.img[0]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={props.img[1]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={props.img[2]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={props.img[3]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={props.img[4]} alt=''></img>
                </div>
            </div>
            <div className='navigation'>
                <label onClick={Clicked.bind(this,'r1')} className='barss'></label>
                <label onClick={Clicked.bind(this,'r2')} className='barss'></label>
                <label onClick={Clicked.bind(this,'s3')} className='barss'></label>
                <label onClick={Clicked.bind(this,'s4')} className='barss'></label>
                <label onClick={Clicked.bind(this,'p5')} className='barss'></label>
            </div>
        </div>
                
    )

}
export default Slider;