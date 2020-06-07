import React from 'react';
// import * as detailsField from '../UiControl';
import {PlainTextAreaField, PlainTextField,NumberTextField} from '../UiControl';


export const CommonAddDetails = (props) => {
  console.log("CommonAddDetails", props);
  return (
   <div>
      <div className="container mt-3">
          <div className="row m-0">
            <div className="col">
              <div className="card rounded-0">
                <div className="card-header bg-primary text-white p-0">Add Details</div>
                <div className="card-body p-2">

                  <PlainTextField plainClass="form-control form-control-lg rounded-0 mt-2" plainPlaceholder="Owner's Name" />
                  <PlainTextField plainClass="form-control form-control-lg rounded-0 mt-2" plainPlaceholder="Partner Name" />
                  <PlainTextField plainClass="form-control form-control-lg rounded-0 mt-2" plainPlaceholder="Pharmacy Name" />
                  <PlainTextAreaField textareaClass="form-control form-control-lg rounded-0 mt-2" plaintextareaholder="Address line 1" />
                  <PlainTextAreaField textareaClass="form-control form-control-lg rounded-0 mt-2" plaintextareaholder="Address line 1" />

                  <div className="row m-0">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <select className="custom-select rounded-0 mt-2" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <select className="custom-select rounded-0 mt-2" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                  </div>

                  <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-2" numberPlaceholder="Pin Code" />

                  <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-2" numberPlaceholder="Landline/Alt.Mobile" />

                  <div className="row m-0">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-2" numberPlaceholder="TIN" />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-2" numberPlaceholder="PAN" />
                    </div>
                  </div>

                  <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-2" numberPlaceholder="Pharmacy License No" />

                  <div className="row m-0">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <input type="file" className="custom-file-input rounded-0 mt-2" id="customFile" name="filename" />
                      <label className="custom-file-label rounded-0 mt-3" htmlFor="customFile">KYC Document </label>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 rounded-0 ">
                      <NumberTextField numberClass="form-control form-control-lg rounded-0 mt-3" numberPlaceholder="Document ID" />
                    </div>
                  </div>

                 </div>

                <div className="card-footer bg-primary text-white rounded-0 p-2 mt-2" onClick={()=>props.uploadOnClick()}>Upload</div>

              </div>
            </div>


            <div className="col">
              <div className="card rounded-0">
                <div className="card-header bg-primary text-white p-0">Choose Plan </div>
                {/* <div className="card-body">Content</div>
                <div className="card-footer bg-primary text-white p-0">Footer</div> */}
              </div>

            </div>
            <div className="col">
              <div className="card rounded-0">
                <div className="card-header bg-primary text-white p-0">Subscribe & Pay</div>
                {/* <div className="card-body">Content</div>
                <div className="card-footer bg-primary text-white p-0">Footer</div> */}
              </div>

            </div>

          </div>


        </div>
 </div>


  )

}
