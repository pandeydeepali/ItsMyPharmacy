import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';
import { AboutPlatform } from '../components/shared/AboutPlatform';
import { PageTitle, EmailTextField, PasswordTextField, AppButton, AppAnchor } from '../components/shared/UiControl';
import * as validationUtil from '../utility/validationUtil';
import * as helper from '../networkUtil';


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      _isNavigateRegister: false,
      _isNavigateHome: false,
      _emailVal: '',
      _passVal: '',
      errors: { 'email': '', 'pass': '', 'bothemailnpass': '' },
      apiErrors: { 'ApiError': '' }

    }
  }


  handleEmailChange(e) {
    this.setState({ _emailVal: e.target.value }, () => {
      this.validateEmail();
    });
  }

  /**
* @desc onCHange of password, validate password data, validationUtil: Utility validation function
* @date 18th May 2020
* 
*/

  validateEmail = () => {

    let errors = {};

    if (validationUtil.isEmptyInput(this.state._emailVal)) {
      errors["email"] = "Email cann't be empty"
    }

    else if (!validationUtil.isValidEmail(this.state._emailVal)) {
      errors["email"] = "Please Enter Valid Email"
    }

    else {

    }
    this.setState({ errors: errors });

  }


  handlePassChange(e) {
    this.setState({ _passVal: e.target.value }, () => {
      this.validatePass();
    });
  }


  /**
 * @desc onCHange of password, validate password data
 * @date 18th May 2020
 * 
 */

  validatePass = () => {
    let errors = {};

    if (validationUtil.isEmptyInput(this.state._passVal)) {
      errors["pass"] = "Password cann't be empty"

    }
    else if (!validationUtil.isTwelveDigitPassword(this.state._passVal)) {
      errors["pass"] = "Password cann't be less than 12 digits"
    }
    else {

    }

    this.setState({ errors: errors });

  }



  /**
   * @desc OnClick of Login Button , validate User and integrate API
   * @date 18th May 2020
   * 
   */

  validateUser(e) {

    e.preventDefault()

    let errors = {};

    if (validationUtil.isEmptyInput(this.state._emailVal) && validationUtil.isEmptyInput(this.state._passVal)) {
      errors["email"] = "Email cann't be empty";
      errors["pass"] = "Password cann't be empty";
    }

    else if (!validationUtil.isValidEmail(this.state._emailVal)) {
      errors["email"] = "Please Enter Valid Email!!"
    }

    else if (!validationUtil.isTwelveDigitPassword(this.state._passVal)) {
      errors["pass"] = "Password cann't be less than 12 digits"
    }
    else {
      this.authenticateUser();
    }
    this.setState({ errors: errors });
  }



  /**
   * @desc OnClick of Login Button , Integration of Login api using helper function
   * @date 18th May 2020
   * 
   */

  authenticateUser() {
    let apiErrors = {};
    let payload = {
      "userEmail": this.state._emailVal,
      "userPassword": this.state._passVal
    }

    if (navigator.onLine) {
      helper.makePOSTRequest('auth', payload, (response) => {
        if (response.hasOwnProperty("data") && response.data.success === true) {
          let loggedUserData = response.data;
          console.log("loggedUserData", loggedUserData);
          this.renderRedirectToHome()
        }

      }, (error) => {
        console.log(error);

        if (error.data) {

          if (error.hasOwnProperty("data") && error.data.success === false && error.status === 422) {
            console.log(`Error ${error.data['message']}`);
            apiErrors['ApiError'] = error.data['message'];
            this.setState({ _emailVal: '' })
            this.setState({ _passVal: '' })
            return;
          }

          if (error.hasOwnProperty("data") && error.data.success === false && error.status === 500) {
            console.log(`Internal Server Error**********, ${error.data['message']}`);
            apiErrors['ApiError'] = error.data['message'];
            this.setState({ _emailVal: '' })
            this.setState({ _passVal: '' })
            return;
          }
        }
      });
    } else {
      console.log(`Internet is not available***, Please check your internet connectivity!`);
      alert("Internet is not available***, Please check your internet connectivity!");
    }

    this.setState({ apiErrors: apiErrors })
  }

  navigatetoNewUserAccount() {
    this.setState({ _isNavigateRegister: true })


  }

  renderRedirectToRegister = () => {
    if (this.state._isNavigateRegister) {
      return <Redirect to='/register' />
    }
  }


  renderRedirectToHome = () => {
    this.setState({ _isNavigateHome: true })

  }


  render() {

    return (

      <React.Fragment>

        {this.renderRedirectToRegister()}

        {this.state._isNavigateHome ? <Redirect to='/home' /> : null}

        <HeaderMenu name="Login" />

        <div className="container">

          <div className="row m-5">

            <div className="col-sm-6 md-6 lg-6 xl-6">

              <AboutPlatform aboutTitle="About the platform" firstPoint="ItsMyPharma is a state-of-the-art Pharmacy platform"
                secondPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" thirdPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" fourthPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" fifthPoint="ItsMyPharma is a state-of-the-art Pharmacy platform" />

            </div>


            <div className="col-sm-6 md-6 lg-6 xl-6">

              <PageTitle title="Login" />

              {

                this.state.apiErrors.ApiError ? <p className="text-danger text-left font-weight-bold">{this.state.apiErrors.ApiError}</p> : null
              }


              <form onSubmit={(e) => this.validateUser(e)}>
                <div className="form-group">


                  {

                    this.state.errors.bothemailnpass ? <p className="text-danger text-left font-weight-bold">{this.state.errors.bothemailnpass}</p> : null
                  }


                  <EmailTextField emailClass="form-control form-control-lg rounded-0 mt-3" emailPlaceholder="Enter your Email" name="email" value={this.state._emailVal} onChange={(e) => this.handleEmailChange(e)} />

                  {

                    this.state.errors.email ? <p className="text-danger text-left font-weight-bold">{this.state.errors.email}</p> : null
                  }

                  <PasswordTextField passwordClass="form-control form-control-lg rounded-0 mt-3" passwordPlaceholder="Enter your Password" name="pass" value={this.state._passVal} onChange={(e) => this.handlePassChange(e)} />


                  {

                    this.state.errors.pass ? <p className="text-danger text-left font-weight-bold">{this.state.errors.pass}</p> : null
                  }

                  <AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="LOGIN" />

                  <AppAnchor href="https://www.google.com" anchorClass="float-left small mt-2" anchorText="Forgot Password" />

                  <AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="CREATE ACCOUNT" onClick={() => this.navigatetoNewUserAccount()} />

                </div>
              </form>
              <form onSubmit={(e) => this.validateUser(e)}>
                <div className="form-group">


                  {

                    this.state.errors.bothemailnpass ? <p className="text-danger text-left font-weight-bold">{this.state.errors.bothemailnpass}</p> : null
                  }


                  <EmailTextField emailClass="form-control form-control-lg rounded-0 mt-3" emailPlaceholder="Enter your Email" name="email" value={this.state._emailVal} onChange={(e) => this.handleEmailChange(e)} />

                  {

                    this.state.errors.email ? <p className="text-danger text-left font-weight-bold">{this.state.errors.email}</p> : null
                  }

                  <PasswordTextField passwordClass="form-control form-control-lg rounded-0 mt-3" passwordPlaceholder="Enter your Password" name="pass" value={this.state._passVal} onChange={(e) => this.handlePassChange(e)} />


                  {

                    this.state.errors.pass ? <p className="text-danger text-left font-weight-bold">{this.state.errors.pass}</p> : null
                  }

                  <AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="LOGIN" />

                  <AppAnchor href="https://www.google.com" anchorClass="float-left small mt-2" anchorText="Forgot Password" />

                  <AppButton btnclassName="btn btn-primary btn-lg btn-block font-weight-bold rounded-0 mt-4" btnText="CREATE ACCOUNT" onClick={() => this.navigatetoNewUserAccount()} />

                </div>
              </form>
              <FooterMenu href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />

            </div>

          </div>
        </div>
      </React.Fragment>

    )
  }
}


export default withRouter(Login);