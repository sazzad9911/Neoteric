import React,{useEffect,useState} from 'react'
import './Home.css'
import Card from './sub-component/Card'
import Slider from './../component/sub-component/Slider'
import firebaseApp from './../firebase'
import {ShowLoader,HideLoader} from './sub-component/Loader'
import {Click} from './../App'
function Home(props){

    const [recent,setRecent]=useState([]);
    const [top,setTop]=useState([]);
    const [number,setNumber]=useState(0);
    const c=['r1','r2','s3','s4','p5'];
    //const [admin,setAdmin]=useState([]);
   
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
            //console.log(doc.id, " => ", doc.data());
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
            //console.log(doc.id, " => ", doc.data());
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

      var r=0;
      const interval = setInterval(() => {
        setNumber(number => number + 1);
        r++;
        if(r===4){
            setNumber(0);
            r=0;
        }
      }, 3000);
    return () => clearInterval(interval);
    },[])


    //console.log(number);
    //setTimeout(() => {
      //  Click(c[number]);
    //}, 4000); 

   // console.log(admin.banner)

   const setPost=(p)=>{
       props.changePost(p);
       Click('view');

   }
    return(
        <div className='home'>
            {
                props.admin!==null?(
                    <div className='imgslide'>
            <Slider img={props.admin.banner}></Slider>
            </div>
                ):
                (<div></div>)
            }
            <h4>Recent Product :</h4>
            <div className='sliderr'>
            {
                    recent!==null?(
                        <div className='bx22'>
                            {
                                recent.map((d,i)=>(
                                    <Card data={d} changePost={post=>setPost(post)}></Card>
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
                                    <Card data={d} changePost={post=>setPost(post)}></Card>
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