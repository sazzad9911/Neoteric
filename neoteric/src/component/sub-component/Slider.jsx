import React from 'react'
import './Slider.css'
import $ from 'jquery';


const Slider=(props)=>{
    var a=1;
    setInterval(function(){
        document.getElementById('img'+a).style.display='initial';
        a++;
        if(a>3){
            a=1;
        }
    },3000)

    setInterval(function(){
        
        
    },3000)
    
    return(
        <div className='slider'>
            <img src={props.img1} alt='' id='img1'></img>
            <img src={props.img2} alt='' id='img2'></img>
            <img src={props.img3} alt='' id='img3'></img>
        </div>
                
    )
}
export default Slider;