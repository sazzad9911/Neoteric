
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Navigation from './component/sub-component/Navigation'
import {useState,useEffect} from 'react';
import Login from './component/user/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebaseApp from './firebase'
import { FaUserAltSlash } from 'react-icons/fa';
import Loader,{ShowLoader,HideLoader} from './component/sub-component/Loader'
import Alertt,{ShowAlert,HideAlert} from './component/sub-component/Alert';
import Policies from './component/Policies';
import {ActiveMenu} from './component/menu'

function App() {
 const Alert=(data)=>{
    alert(data.head);
  }
  const [post,setPost]=useState(null)
  const [users,setUsers]=useState(null)
  const [main,setMain]=useState(null)
  const [login,setStatus]=useState(null)
  const [uid,setUid]=useState(null)
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
       setStatus('true');
       setUid(user.uid);
       console.log(user.uid);
       var db=firebaseApp.firestore();
       db.collection("user").where("id", "==", user.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUsers(doc.data());
          console.log(doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
      } else {
        setStatus('false');
        //setUsers({'name':'none', 'img': 'none'});
      }
    });



  }, [])
    return ( 
      <Router>



      <div className = "App" >
        <div className='head'>
         {
           users!=null?(
            <Header Name={users.name} Img={users.img} Login={login}></Header>
           ):(
            <Header Name='' Img='' Login={login}></Header>
           )
         }
        </div>

        <Switch>
          <Route path='/login'>
            <div className='body'>
              <Login></Login>
            </div>
          </Route>
          <Route path='/policies'>
            <div className='body'>
              <Policies></Policies>
            </div>
          </Route>
          <Route path='/faq'>
            
          </Route>
          <Route path='/'>
            <div className='body'>
              <Home></Home>
            </div>
          </Route>
        </Switch>


        <div className='foot'>
          <Footer></Footer>
        </div>
        {
          users!=null?(
            <Navigation Name={users.name} Img={users.img} Login={login}></Navigation>
          ):
          (
            <Navigation Name='' Img='' Login={login}></Navigation>
          )
        }
      </div>
      <Alertt></Alertt>
      <Loader></Loader>
      </Router>
    );
}

export default App;