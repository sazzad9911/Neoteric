import React from 'react'
import './Home.css'
import Card from './sub-component/Card'
import ImageSlider from './sub-component/ImageSlide'
import img1 from './../files/ismart-shankar_156195627930.jpg'
import img2 from './../files/shutterstock_1009843408.jpg'
import img3 from './../files/shutterstock_554314555_copy.jpg'
import Slider from './../component/sub-component/Slider'

function Home(){
    return(
        <div className='home'>
            <div className='imgslide'>
            
            </div>
            <h4>Recent Product :</h4>
            <div className='bx22'>
                <Card></Card>
                <Card></Card>
                
            </div>
            <h4>Top Product :</h4>
            <div className='bx22'>
            <Card></Card>
            <Card></Card>
            </div>
        </div> 
    )
}
export default Home; 