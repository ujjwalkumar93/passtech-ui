import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
// import Carousel from './components/signinsignup/Carousel.js'
import Signin from './components/signinsignup/Signin.js'
import Home from './containers/Home.js'
import AllBrands from './containers/AllBrands.js'
import AboutUs from './containers/AboutUs.js'
import ContactUs from './containers/ContactUs.js'
import PhoneInfo from './containers/PhoneInfo.js'
import CheckCondition from './containers/CheckCondition'
import PrimaryCheckCondition from './containers/PrimaryCheckCondition'
import Checkout from './containers/Checkout'
// import test from './containers/test.js'
import TermAndCondition from './containers/TermAndCondition.js'
import PrivacyPolicy from './containers/TermAndCondition.js'
import Appointment from './containers/Appointment.js'
import Profile from './containers/Profile.js'
import {BrowserRouter as Router, Route, Switch,useHistory,create} from 'react-router-dom'
import { createBrowserHistory } from 'history';
//import { ThemeProvider } from '@material-ui/core/styles';

import { useState } from 'react';

const history = createBrowserHistory();
function App() {
  const[auth, setAuth] = useState(false)
  return(
    <Router history={history}>
          <Header/>
            <Switch>
              <Route path='/all_brands' component={AllBrands}/>
              <Route path='/about_us' component={AboutUs}/>
              <Route path='/contact_us' component={ContactUs}/>
              <Route path = '/term_and_condition' component={TermAndCondition}/>
              <Route path = '/privacy_policy' component={PrivacyPolicy}/>
              <Route path = '/phone_info/:model' component={PhoneInfo}/>
              <Route path = '/secondry_condition/:model' component={CheckCondition}/>
              <Route path='/primary_condition/:model' component={PrimaryCheckCondition}/>
              {/* <Route path = '/home' component={Home}/> */}
              <Route path='/auth' component={Signin}/>
              <Route path='/checkout' component={Checkout}/>
              <Route path='/appointment' component={Appointment}/>
              <Route path='/profile' component={Profile}/>
              <Route path = '/' component={Home}/>
            </Switch>
          <Footer/>
    </Router>

  ) 
}

export default App;

