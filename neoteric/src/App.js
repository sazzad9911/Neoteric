
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
import {ActiveMenu} from './component/menu';
import Profile from './component/user/Profile';

export const Click=(d)=>{
  document.getElementById(d).click();
}
export const Refresh=()=>{
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1);

}
function App() {
  //const Refresh= new Refresh();
  //console.log(Refresh.value);
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

  }, []);

    return ( 
      <Router>
        <Link to='/profile' id='profile'>
        </Link>
        <Link to='/my-account' id='my-account'></Link>
        <Link to='/login' id='login'></Link>
        <Link to='/policies' id='policies'></Link>
        <Link to='/faq' id='faq'></Link>
        <Link to='/' id='home'></Link>
      <div className = "App" >
        <div className='head'>
         {
           users!=null?(
            <Header data={users}></Header>
           ):(
            <Header data={users}></Header>
           )
         }
        </div>
        <div className='head1' id='navbar'>
         {
           users!=null?(
            <Header data={users}></Header>
           ):(
            <Header data={users}></Header>
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
          <div className='body'>
              
          </div>
          </Route>
          <Route path='/collections'>
            <div className='body'>

            </div>
          </Route>
          <Route path='/profile'>
            <div className='body'>
              <Profile data={users}></Profile>
            </div>
          </Route>
          <Route path='my-account'>
            <div className='body'>

            </div>
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
            <Navigation data={users} ></Navigation>
          ):
          (
            <Navigation data={users}></Navigation>
          )
        }
      </div>
      <Alertt></Alertt>
      <Loader></Loader>
      </Router>
    );
}

export default App;