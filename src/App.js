import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
//import Carousel from './components/carousel/Carousel.js'
//import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return(
   <div>
     <Header/>
     <p>test</p>
     {/* <Carousel/> */}
      <Footer/>
   </div>
  ) 
}

export default App;

