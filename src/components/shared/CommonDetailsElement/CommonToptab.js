import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../CommonDetailsElement/commondetailelement.css';


const CommonToptab = (props) => {
  return (
   <div>
      <Tabs defaultActiveKey={props.defaultActiveKey} id="uncontrolled-tab-example" >
        <Tab eventKey={props.homeeventKey} title={props.HomeTitle} >
        </Tab>
        <Tab eventKey={props.pharmacyeventKey} title={props.PharmacyTitle}>
        </Tab>
        <Tab eventKey={props.webstoreeventkey} title={props.WebStoreTitle}>
        </Tab>
        <Tab eventKey={props.businesseventkey}  title={props.businessTitle} >
        </Tab>
        <Tab eventKey={props.loyalityeventkey} title={props.LoyalityTitle}>
        </Tab>
        <Tab eventKey={props.eventkeyshop} title={props.ManageShopTitle}>
         </Tab>
        <Tab eventKey={props.eventkeyplan} title={props.planTitle}>
        </Tab>
      </Tabs>
 </div>


  )

}

export { CommonToptab }
