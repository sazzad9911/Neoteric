import React,{useEffect} from 'react'
import './ImageSlide.css'

const ImageSlide=(props)=>{
   
    return(
        <div id='slidess'>
      <div className='sliders'>
        <input type='radio' name='radio-btn' id='radio1'></input>
        <input type='radio' name='radio-btn' id='radio2'></input>
        <input type='radio' name='radio-btn' id='radio3'></input>

        <div className='slide first'>
          <img src={props.img1} alt=''></img>
        </div>
        <div className='slide'>
          <img src={props.img2} alt=''></img>
        </div>
        <div className='slide'>
          <img src={props.img3} alt=''></img>
        </div>

        <div className='navigation-auto'>
          <div className='auto-btn1'></div>
          <div className='auto-btn2'></div>
          <div className='auto-btn3'></div>
        </div>
      </div>
      <div className='navigation-manual'>
        <label for='radio1' className='manual-btn'></label>
        <label for='radio2' className='manual-btn'></label>
        <label for='radio3' className='manual-btn'></label>
      </div>
    </div>
    )
}
export default ImageSlide;