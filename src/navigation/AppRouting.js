// LIBRARY
import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

// COMPONENT
import LaunchPharma from '../scenes/LaunchPharma';
import Login from '../scenes/Login';
import Home from '../scenes/Home';
import Register from '../scenes/Register';
import PharmacyMgmt from '../scenes/PharmacyMgmt';
import Store from '../scenes/Store';
import Otp from '../scenes/OTP';
import PharmacyAddDetails from '../scenes/PharmacyAddDetails';

/**
 * @desc Application routing configuration
 * @params component 
 * @developed by supriya
 */

export default function AppRouting() {
   return (
      <Router>
      <Switch>
        
         <Route component={Login} exact path='/' />  
         <Route component={Login} exact path='/login' />  
         <Route component={LaunchPharma} exact path='/launch' /> 
         <Route component={Home} exact path='/home' />  
         <Route component={Register} exact path='/register' />  
         <Route component={PharmacyMgmt} exact path='/pharmacymgmt' />  
         <Route component={Otp} exact path='/otp' />  
         <Route component={Store} exact path='/store' />
         <Route component={PharmacyAddDetails} exact path='/pharmaadddetails' />

      </Switch>
   </Router>

   )

}
  

