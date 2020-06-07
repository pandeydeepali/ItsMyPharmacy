import React from 'react';
import { withRouter } from 'react-router-dom';
import { SingleMenu } from '../components/shared/Grid';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';

class PharmacyMgmt extends React.Component {

  openPharmacyUrlinFrame() {



  }

  render() {

    return (
      <React.Fragment>
        <HeaderMenu name="Pharmacy Management" />
        <SingleMenu data="HCUE Portal" onClick={() => this.openPharmacyUrlinFrame()} />
        <FooterMenu href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />

      </React.Fragment>
    )


  }
}

export default withRouter(PharmacyMgmt);