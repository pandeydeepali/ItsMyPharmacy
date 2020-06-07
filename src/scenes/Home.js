import React from 'react';
import { withRouter } from 'react-router-dom';
import { GridMenu } from '../components/shared/Grid';
import { HeaderMenu } from '../components/shared/Header';
import { FooterMenu } from '../components/shared/Footer';


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderMenu name="Home" />
                <GridMenu pharmacy="Pharmacy" webstore="Webstore" business="Business+" loyality="Loyality" shop="Manage Shop" subscription="Plan/Subscription" />
                <FooterMenu  href="https://www.google.com" privacyhref="https://www.google.com" textLeft="Terms&Conditions" textRight="Privacy" />
                </React.Fragment>
        )
    }
}

export default withRouter(Home);