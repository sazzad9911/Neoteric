
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './component/Home'
<<<<<<< Updated upstream
import Slider from './component/sub-component/Slider'
=======
import Navigation from './component/sub-component/Navigation'
>>>>>>> Stashed changes

function App() {
    return ( 
      <div className = "App" >
        <div className='head'>
          <Header Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login="true"></Header>
        </div>
        <div className='body'>

          <Home></Home>
        </div>
        <div className='foot'>
          <Footer></Footer>
        </div>
        <Navigation Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login="true"></Navigation>
      </div>
    );
}

export default App;