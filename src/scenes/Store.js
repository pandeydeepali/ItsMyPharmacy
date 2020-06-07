import React from 'react';
import { withRouter } from 'react-router-dom';
import { SingleMenu } from '../components/shared/Grid';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';

class Store extends React.Component {
    render () {
      return (
        <React.Fragment>
                <HeaderMenu name="Webstore" />
                <SingleMenu data="Wix Portal"/>
                <FooterMenu  href="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />
                </React.Fragment>
      )
    }
  }

export default withRouter( Store );