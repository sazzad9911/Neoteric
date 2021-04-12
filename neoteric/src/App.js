
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
import Slider from './component/sub-component/Slider'
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

function App() {
  const [post,setPost]=useState(null)
  const [users,setUsers]=useState(null)
  const [main,setMain]=useState(null)
  const [login,setStatus]=useState(null)
  const [uid,setUid]=useState(null)
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
       setStatus('true');
       setUid(user.id);
      } else {
        setStatus('false');
      }
    });

  }, [])
    return ( 
      <Router>



      <div className = "App" >
        <div className='head'>
          <Header Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login={login}></Header>
        </div>

        <Switch>
          <Route path='/login'>
            <div className='body'>
              <Login></Login>
            </div>
          </Route>
          <Route path=''>
          <div className='body'>
          <Slider></Slider>
        </div>
          </Route>
        </Switch>


        <div className='foot'>
          <Footer></Footer>
        </div>
        <Navigation Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login={login}></Navigation>
      </div>
      </Router>
    );
}

export default App;