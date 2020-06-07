import React from 'react';
import { withRouter } from 'react-router-dom';

class LaunchPharma extends React.Component {
    render () {
      return (
        <React.Fragment>
          <div className="jumbotron text-center">
            <h1>Its My Pharma</h1>
           </div>
           <div className="container">
             <div className="row">
                <div className="col-sm-6">
                  <h3>Column 1</h3>
                </div>
                <div className="col-sm-6">
                    <h3>Column 2</h3>
                </div>
            </div>
          </div>
       </React.Fragment>
      )
    }
  }


  export default withRouter( LaunchPharma );