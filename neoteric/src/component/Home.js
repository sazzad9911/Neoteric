import React from 'react'
import './Home.css'
import Card from './sub-component/Card'
import Slider from './sub-component/Slider'
import img1 from './../files/ismart-shankar_156195627930.jpg'
import img2 from './../files/shutterstock_1009843408.jpg'
import img3 from './../files/shutterstock_554314555_copy.jpg'

function Home(){
    return(
        <div className='home'>
            
            <Card></Card>
        
            <div className='bx1'>
            <Slider img1={img1} img2={img2} img3={img3} name1='Be loved each other' name2='Something awessome is comming' name3='Scenario is the theme of your work'></Slider>
            </div>
            <h4>Recent Product :</h4>
            <div className='bx2'>
                
            </div>
            <h4>Top Product :</h4>
            <div className='bx3'>
                
            </div>
        </div> 
    )
}
export default Home; 