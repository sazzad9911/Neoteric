import React,{useState} from 'react'
import './Slider.css'
import $ from 'jquery';


const Slider=(props)=>{
   

    return(
        <div className='slider'>
            <img src={props.img2} alt='' id='img1'></img>
            <img src={props.img2} alt='' id='img2'></img>
            <img src={props.img3} alt='' id='img3'></img>
        </div>
                
    )
}
export default Slider;