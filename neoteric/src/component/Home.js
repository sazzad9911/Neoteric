import React,{useEffect,useState} from 'react'
import './Home.css'
import Card from './sub-component/Card'
import ImageSlider from './sub-component/ImageSlide'
import img1 from './../files/ismart-shankar_156195627930.jpg'
import img2 from './../files/shutterstock_1009843408.jpg'
import img3 from './../files/shutterstock_554314555_copy.jpg'
import Slider from './../component/sub-component/Slider'
import firebaseApp from './../firebase'
import {ShowLoader,HideLoader} from './sub-component/Loader'
import Carousel from 'react-elastic-carousel';
function Home(){

    const [recent,setRecent]=useState([]);

    useEffect(()=>{
        ShowLoader();
        const db=firebaseApp.firestore();
        var i=0;
        var a=[]
        db.collection("post").orderBy('date','desc').limit(10)
           .get()
           .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            a[i]=doc.data();
            i++;
        });
        setRecent(a);
        HideLoader();
      })
        .catch((error) => {
        console.log("Error getting documents: ", error);
        HideLoader();
      });
    },[])

    return(
        <div className='home'>
            <div className='imgslide'>
            
            </div>
            <h4>Recent Product :</h4>
            <div className='bx22'>
                <Carousel>
                {
                    recent!==null?(
                        <div>
                            {
                                recent.map((d,i)=>(
                                    <Card data={d}></Card>
                                ))
                            }
                        </div>
                    ):
                    (
                        <div>
                            <h3>No document to view</h3>
                        </div>
                    )
                }
                </Carousel>
            </div>
            <h4>Top Product :</h4>
            <div className='bx22'>
           
            </div>
        </div> 
    )
}
export default Home; 