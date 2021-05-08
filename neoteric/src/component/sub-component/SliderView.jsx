import React,{useState} from 'react'
import './Slider.css'
import $ from 'jquery';

const Clicked=(p)=>{
    //alert(p)
    document.getElementById(p).checked=true;
}
const SliderView=(props)=>{
    
    return(
        <div className='slidershow middle'>
            <div className='sliderss'>
                <input type='radio' name='r' id='r11'></input>
                <input type='radio' name='r' id='r22'></input>
                <input type='radio' name='r' id='s33'></input>
                <input type='radio' name='r' id='s44'></input>
                <input type='radio' name='r' id='p55'></input>
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
                <label onClick={Clicked.bind(this,'r11')} className='barss'></label>
                <label onClick={Clicked.bind(this,'r22')} className='barss'></label>
                <label onClick={Clicked.bind(this,'s33')} className='barss'></label>
                <label onClick={Clicked.bind(this,'s44')} className='barss'></label>
                <label onClick={Clicked.bind(this,'p55')} className='barss'></label>
            </div>
        </div>
                
    )

}
export default SliderView;