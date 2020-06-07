import React from 'react';
import { withRouter,Redirect } from 'react-router-dom';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';
import * as otpfields from '../components/shared/UiControl';

class Otp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          isNavigateToHome: false
        }
    
    
      }

      
  ConfirmOTP() { 
        this.setState({isNavigateToHome : true})

  }

  render() {

    return (
      <React.Fragment>

        <HeaderMenu name="New User" />

        <div className="container">

          <div className="row m-5">


            <div className="col">

              <otpfields.NumberTextField numberClass="form-control form-control-lg rounded-0 mt-3" numberPlaceholder="Mobile Number" />

              <otpfields.AppAnchor href="https://www.google.com" anchorClass="float-left small mt-2" anchorText="Resend OTP" />

              <otpfields.AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="CONFIRM" onClick={() => this.ConfirmOTP()} />

            </div>

            <FooterMenu   href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />

          </div>

        </div>

        {this.state.isNavigateToHome ?  <Redirect to='/home'/>:null}

      </React.Fragment>

    )
  }
}

export default withRouter(Otp);