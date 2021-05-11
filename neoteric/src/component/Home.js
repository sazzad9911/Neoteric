import React,{useEffect,useState} from 'react'
import './Home.css'
import Card from './sub-component/Card'
import Slider,{Clicked} from './../component/sub-component/Slider'
import firebaseApp from './../firebase'
import {ShowLoader,HideLoader} from './sub-component/Loader'
import {Click} from './../App'
import lg from './../files/t-shart.jpg'
function Home(props){
    const va=[props.banner.b1,props.banner.b2,props.banner.b3,props.banner.b4,props.banner.b5];
    const [top,setTop]=useState([]);
    const [recent,setRecent]=useState(null);
    const [number,setNumber]=useState([]);
    //const [admin,setAdmin]=useState([]);
    useEffect(()=>{
        //console.log(img)
        
            //alert(props.auto);
           
       // ShowLoader();
       const top=props.allpost;
       var temp = [];
  for (var i = 0; i < top.length; i++) {
    for (var j = i; j < top.length; j++) {
        if (top[j].view > top[i].view) {
            temp=top[i];
            top[i]=top[j];
            top[j]=temp;
          }
    }
  }
  setTop(top);
        const db=firebaseApp.firestore();
        
        var k=0;
        var a=[];
        //var b=[];
        db.collection("post").orderBy('date','desc').limit(8)
           .get()
           .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            a[k]=doc.data();
            k++;
        });
        setRecent(a);
      })
        .catch((error) => {
        console.log("Error getting documents: ", error);
       // HideLoader();
      });
     /* db.collection("post").orderBy('view','desc').limit(8)
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
    return () => clearInterval(interval); */

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
            <Slider img={va} auto='true'></Slider>
            </div>
                ):
                (<div></div>)
            }
            <h4>Top Product :</h4>
            {
                    top!==null?(
                        <div className='bx22'>
                            {
                                top.slice(0,8).map((d,i)=>(
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
            <h4>Recent Product :</h4>
            <div className='sliderr'>
            {
            recent!==null?(
                <div className='bx22'>
                    {
                        recent.slice(0,8).map((d,i)=>(
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
        </div> 
    )
}
export default Home; 