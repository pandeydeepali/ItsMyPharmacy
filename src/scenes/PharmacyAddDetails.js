import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';
import { CommonToptab } from '../components/shared/CommonDetailsElement/CommonToptab';

import { CommonAddDetails } from '../components/shared/CommonDetailsElement/CommonAdddetails';


class PharmacyAddDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }


  showModal() {     
    alert("show model");
    console.loh("Show Model");
    this.setState({ show: true });
  }

  hideModal() {
    alert("hide model");
    this.setState({ show: false });
  };

          
  render() {

    return (
      <React.Fragment>


        <HeaderMenu name="Add Details" />

        <CommonToptab defaultActiveKey="_pharmacy" homeeventKey="_home" HomeTitle="Home" pharmacyeventKey="_pharmacy" PharmacyTitle="Pharmacy"
          webstoreeventkey="_webstore" WebStoreTitle="WebStore" businesseventkey="_business" businessTitle="Business" loyalityeventkey="_loyality"
          LoyalityTitle="Loyality" eventkeyshop="_shop" ManageShopTitle="Manage Shop" eventkeyplan="_plan" planTitle="Plan" />

        <CommonAddDetails uploadOnClick={() => this.showModal()} />

        <FooterMenu href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />

      </React.Fragment>

    )
  }
}

export default withRouter(PharmacyAddDetails);