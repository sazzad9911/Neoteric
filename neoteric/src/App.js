import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
    return ( 
      <div className = "App" >
        <div className='head'>
          <Header Name="Sayied Hasan" Img="https://i.ibb.co/Q6F00sw/afaga.png" Login="false"></Header>
        </div>
        <div className='body'>
          
        </div>
        <div className='foot'>
          <Footer></Footer>
        </div>
      </div>
    );
}

export default App;