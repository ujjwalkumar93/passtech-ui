import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Carousel from './components/carousel/Carousel.js'
import Home from './components/home/Home.js'
//import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return(
   <div>
    <Header/>
    <Carousel/>
    <Home/>
    <Footer/>
   </div>
  ) 
}

export default App;

