import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
<<<<<<< Updated upstream
import Home from './component/Home'
=======
import Slider from './component/sub-component/Slider'
import Card from './component/sub-component/Card'
>>>>>>> Stashed changes

function App() {
    return ( 
      <div className = "App" >
        <div className='head'>
          <Header Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login="false"></Header>
        </div>
        <div className='body'>
<<<<<<< Updated upstream
          <Home></Home>
=======
            <Slider></Slider>
            <Card></Card>
>>>>>>> Stashed changes
        </div>
        <div className='foot'>
          <Footer></Footer>
        </div>
      </div>
    );
}

export default App;