import React from 'react'
import './Home.css'
import Card from './component/sub-component/Card'

function Home(){
    return(
        <div className='home'>
             <Slider></Slider>
            <Card></Card>
            
        </div> 
    )
}
export default Home;