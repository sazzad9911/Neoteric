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
function Home(){

    const [recent,setRecent]=useState([]);
    const [top,setTop]=useState([]);

    useEffect(()=>{
        ShowLoader();
        const db=firebaseApp.firestore();
        var i=0,j=0;
        var a=[];
        var b=[];
        db.collection("post").orderBy('date','desc').limit(8)
           .get()
           .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            a[i]=doc.data();
            i++;
        });
        setRecent(a);
      })
        .catch((error) => {
        console.log("Error getting documents: ", error);
        HideLoader();
      });
      db.collection("post").orderBy('view','desc').limit(8)
           .get()
           .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            b[j]=doc.data();
            j++;
        });
        setTop(b);
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
                <Slider img1={img1} img2={img2} img3={img3}></Slider>
            </div>
            <h4>Recent Product :</h4>
            <div className='sliderr'>
            {
                    recent!==null?(
                        <div className='bx22'>
                            {
                                recent.map((d,i)=>(
                                    <Card data={d} className='slide'></Card>
                                ))
                            }
                        </div>
                    ):
                    (
                        <div className='bx22'>
                            <h3>No document to view</h3>
                        </div>
                    )
                }
            </div>
            <h4>Top Product :</h4>
            {
                    top!==null?(
                        <div className='bx22'>
                            {
                                top.map((d,i)=>(
                                    <Card data={d}></Card>
                                ))
                            }
                        </div>
                    ):
                    (
                        <div className='bx22'>
                            <h3>No document to view</h3>
                        </div>
                    )
                }
        </div> 
    )
}
export default Home; 