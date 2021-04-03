import React from 'react'
import './Slider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Slider(props){
    const slideImages = [
        props.img1,
        props.img2,
        props.img3
      ];
   
    return(
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}} className='img'>
              <span>{props.name1}</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}} className='img'>
              <span>{props.name2}</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}} className='img'>
              <span>{props.name3}</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slider; 