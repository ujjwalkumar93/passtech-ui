import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Carousel from './components/carousel/Carousel.js'
import Home from './containers/Home.js'
import AllBrands from './containers/AllBrands.js'
import AboutUs from './containers/AboutUs.js'
import ContactUs from './containers/ContactUs.js'
import PhoneInfo from './containers/PhoneInfo.js'
import CheckCondition from './containers/CheckCondition'
// import test from './containers/test.js'
import TermAndCondition from './containers/TermAndCondition.js'
import PrivacyPolicy from './containers/TermAndCondition.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return(
    <Router>
      <div>
        <Header/>
          <Switch>
          <Route path='/all_brands' component={AllBrands}/>
            <Route path='/about_us' component={AboutUs}/>
            <Route path='/contact_us' component={ContactUs}/>
            <Route path = '/term_and_condition' component={TermAndCondition}/>
            <Route path = '/privacy_policy' component={PrivacyPolicy}/>
            <Route path = '/phone_info' component={PhoneInfo}/>
            <Route path = '/check_condition' component={CheckCondition}/>
            <Route path = '/' component={Home}/>
          </Switch>
        <Footer/>
      </div>
    </Router>

  ) 
}

export default App;

