import React,{useState} from 'react'
import './Slider.css'
import $ from 'jquery';

export const Click=(p)=>{
    //alert(p)
    document.getElementById(p).checked=true;
}
const Slider=({img})=>{
    //console.log(img)
    
    return(
        <div className='slidershow middle'>
            <div className='sliderss'>
                <input type='radio' name='r' id='r1'></input>
                <input type='radio' name='r' id='r2'></input>
                <input type='radio' name='r' id='s3'></input>
                <input type='radio' name='r' id='s4'></input>
                <input type='radio' name='r' id='p5'></input>
                <div className='slidee s1'>
                    <img src={img[0]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={img[1]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={img[2]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={img[3]} alt=''></img>
                </div>
                <div className='slidee'>
                    <img src={img[4]} alt=''></img>
                </div>
            </div>
            <div className='navigation'>
                <label onClick={Click.bind(this,'r1')} className='barss'></label>
                <label onClick={Click.bind(this,'r2')} className='barss'></label>
                <label onClick={Click.bind(this,'s3')} className='barss'></label>
                <label onClick={Click.bind(this,'s4')} className='barss'></label>
                <label onClick={Click.bind(this,'p5')} className='barss'></label>
            </div>
        </div>
                
    )
}
export default Slider;