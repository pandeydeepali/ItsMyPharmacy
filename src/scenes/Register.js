import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';
import { AboutPlatform } from '../components/shared/AboutPlatform';
import * as registerfields from '../components/shared/UiControl';
import * as validationUtil from '../utility/validationUtil';
import * as helper from '../networkUtil';

import './style.css';

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userName: '',
      userPassword: '',
      userMobile: '',
      isNavigateOTP: false,
      isRegerrors: { 'email': '', 'username': '', 'pass': '', 'mobile': '', 'allRegisterFields': '' },
      isRegApiErrors: { apiError: '' }

    }
  }

  handleEmailChange(evt) {
    this.setState({
      userEmail: evt.target.value,
    }, () => this.onChangeValidateEmail());
  };

  handleUserChange(evt) {
    this.setState({
      userName: evt.target.value,
    }, () => this.onChangeValidateName());
  }

  handlePassChange(evt) {
    this.setState({
      userPassword: evt.target.value,
    }, () => this.onChangeValidatePass());
  }
  handleMobileChange(evt) {
    this.setState({
      userMobile: evt.target.value,
    }, () => this.onChangeValidateMobile());
  }


  onChangeValidateEmail() {
    let isRegerrors = {};

    if (validationUtil.isEmptyInput(this.state.userEmail)) {
      isRegerrors["email"] = "*Email cann't be empty!!"
    }

    else if (!validationUtil.isValidEmail(this.state.userEmail)) {
      isRegerrors["email"] = "*Please Enter Valid Email!!"
    }

    else {

    }

    this.setState({ isRegerrors: isRegerrors });

  }

  onChangeValidateName() {
    let isRegerrors = {};

    if (validationUtil.isEmptyInput(this.state.userName)) {
      isRegerrors["username"] = "*Name cann't be empty"

    }
    else if (!validationUtil.isCheckAlphaNumericInput(this.state.userName)) {
      isRegerrors["username"] = "*Name cann't without Alphanumeric"
    }
    else {

    }

    this.setState({ isRegerrors: isRegerrors });
  }

  onChangeValidatePass() {
    let isRegerrors = {};

    if (validationUtil.isEmptyInput(this.state.userPassword)) {
      isRegerrors["pass"] = "*Password cann't be empty"

    }
    else if (!validationUtil.isTwelveDigitPassword(this.state.userPassword)) {
      isRegerrors["pass"] = "*Password cann't be less than 12 digits"
    }
    else {

    }

    this.setState({ isRegerrors: isRegerrors });

  }

  onChangeValidateMobile() {
    let isRegerrors = {};

    if (validationUtil.isEmptyInput(this.state.userMobile)) {
      isRegerrors["mobile"] = "*Number cann't be empty"

    }
    else if (!validationUtil.istendigitMobileNumber(this.state.userMobile)) {
      isRegerrors["mobile"] = "*Number cann't be less than 10digits"
    }
    else {

    }

    this.setState({ isRegerrors: isRegerrors });


  }


  createUserAccount() {


  }

  handleSubmitRegistrationForm(e) {



    e.preventDefault();

    let isRegerrors = {};

    if (validationUtil.isEmptyInput(this.state.userEmail) && validationUtil.isEmptyInput(this.state.userName) && validationUtil.isEmptyInput(this.state.userPassword) && validationUtil.isEmptyInput(this.state.userMobile)) {
      isRegerrors['email'] = "*Email cann't be empty";
      isRegerrors['username'] = "*Name cann't be empty";
      isRegerrors['pass'] = "*Password cann't be empty";
      isRegerrors['mobile'] = "*Mobile cann't be empty";
    }
    else if (validationUtil.isEmptyInput(this.state.userEmail)) {
      isRegerrors['email'] = "*Email cann't be empty";

    }
    else if (!validationUtil.isValidEmail(this.state.userEmail)) {
      isRegerrors['email'] = "*Please Enter Valid Email";


    }

    else if (validationUtil.isEmptyInput(this.state.userName)) {
      isRegerrors['username'] = "*Name cann't be empty";


    }
    else if (!validationUtil.isCheckAlphaNumericInput(this.state.userName)) {
      isRegerrors['username'] = "*Name should contain alphanumeric character";
    }

    else if (validationUtil.isEmptyInput(this.state.userPassword)) {
      isRegerrors['pass'] = "*Password cann't be empty";


    }
    else if (!validationUtil.isTwelveDigitPassword(this.state.userPassword)) {
      isRegerrors['pass'] = "*Password cann't be less than 12 chars";
    }

    else if (validationUtil.isEmptyInput(this.state.userMobile)) {
      isRegerrors['mobile'] = "*Mobile cann't be empty";

    }

    else if (!validationUtil.istendigitMobileNumber(this.state.userMobile)) {
      isRegerrors['mobile'] = "*Number cann't be less than 10 digits";
    }
    else {
      this.registerAuthUserAPIInvoke();
    }

    this.setState({ isRegerrors: isRegerrors });

  }



  /**
   * @desc OnClick of Register Button , Integration of Registration api using helper function
   * @date 18th May 2020
   * 
   */

  registerAuthUserAPIInvoke() {

    let isRegApiErrors = {};

    let registerUserData = {
      "userEmail": this.state.userEmail,
      "userName": this.state.userName,
      "userPassword": this.state.userPassword,
      "mobileNo": this.state.userMobile
    }


    if (navigator.onLine) {

      helper.makePOSTRequest('addUser', registerUserData, (response) => {

        if (response.hasOwnProperty("data") && response.data.success === true) {
          let registerUserResponse = response.data;
          console.log("registerUserResponse", registerUserResponse);
        }

      }, (error) => {

        console.log(error)

        if (error.data) {

          if (error.hasOwnProperty("data") && error.data.success === false && error.status === 422) {
            console.log(`User is already registered******** ${error.data['message']}`);
            isRegApiErrors['apiError'] = error.data['message']
            // alert(error.data['message'])
            this.setState({ userEmail: '' })
            this.setState({ userPassword: '' })
            this.setState({ userName: '' })
            this.setState({ userMobile: '' })

            return;
          }

          if (error.hasOwnProperty("data") && error.data.success === false && error.status === 500) {
            console.log(`Internal Server Error**********, ${error.data['message']}`);
            isRegApiErrors['apiError'] = error.data['message']
            // alert(error.data['message'])
            this.setState({ userEmail: '' })
            this.setState({ userPassword: '' })
            this.setState({ userName: '' })
            this.setState({ userMobile: '' })
            return;
          }


        }
       
      }
     
      )

    } else {
      console.log(`Internet is not available***, Please check your internet connectivity!`);
      alert("Internet is not available***, Please check your internet connectivity!");
    }
    this.setState({isRegApiErrors:isRegApiErrors})



  }

  render() {


    return (
      <React.Fragment>

        <HeaderMenu name="New User" />

        <div className="container">

          <div className="row m-5">

            <div className="col-sm-6 md-6 lg-6 xl-6">

              <AboutPlatform aboutTitle="About the platform" firstPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" secondPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" thirdPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" fourthPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" fifthPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" />

            </div>


            <div className="col-sm-6 md-6 lg-6 xl-6">

              <registerfields.PageTitle title="New User" />


              {

                this.state.isRegApiErrors.apiError ? <p className="text-danger text-left font-weight-bold">{this.state.isRegApiErrors.apiError}</p> : null
              }


              <form onSubmit={(e) => this.handleSubmitRegistrationForm(e)}>

                <div className="form-group">

                  {

                    this.state.isRegerrors.allRegisterFields ? <p className="text-danger text-left font-weight-bold">{this.state.isRegerrors.allRegisterFields}</p> : null
                  }

                  <registerfields.EmailTextField emailClass="form-control form-control-lg rounded-0 mt-3" name="emailid" emailPlaceholder="Enter your Email" value={this.state.userEmail} onChange={(e) => this.handleEmailChange(e)} />

                  {

                    this.state.isRegerrors.email ? <p className="text-danger text-left font-weight-bold">{this.state.isRegerrors.email}</p> : null
                  }
                  <registerfields.PlainTextField plainClass="form-control form-control-lg rounded-0 mt-3" name="username" plainPlaceholder="User Name" value={this.state.userName} onChange={(e) => this.handleUserChange(e)} />
                  {

                    this.state.isRegerrors.username ? <p className="text-danger text-left font-weight-bold">{this.state.isRegerrors.username}</p> : null
                  }

                  <registerfields.PasswordTextField passwordClass="form-control form-control-lg rounded-0 mt-3" name="password" passwordPlaceholder="Enter your Password" value={this.state.userPassword} onChange={(e) => this.handlePassChange(e)} />

                  {

                    this.state.isRegerrors.pass ? <p className="text-danger text-left font-weight-bold">{this.state.isRegerrors.pass}</p> : null
                  }
                  <registerfields.NumberTextField name="mobileno" numberClass="form-control form-control-lg rounded-0 mt-3" numberPlaceholder="Mobile Number" value={this.state.userMobile} onChange={(e) => this.handleMobileChange(e)} />
                  {

                    this.state.isRegerrors.mobile ? <p className="text-danger text-left font-weight-bold">{this.state.isRegerrors.mobile}</p> : null
                  }


                  <registerfields.AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="CREATE ACCOUNT" onClick={() => this.createUserAccount()} />

                </div>

              </form>

            </div>

            <FooterMenu href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />

          </div>

        </div>


        {this.state.isNavigateOTP ? <Redirect to='/otp' /> : null}

      </React.Fragment>

    )
  }
}

export default withRouter(Register);