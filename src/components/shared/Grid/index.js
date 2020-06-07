/**
 * @desc comomn utility exported funcitons
 * developer Supriya 
 * Date 15th May 2020
 */

import React from 'react';
import pharmacy from '../Grid/images/pharmacy.png';

export const GridMenu = (props) => {
    return (
        <div className="container text-center">
            <div className="row mt-5">
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.pharmacy}</p>
                </div>
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.webstore}</p>
                </div>
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.business}</p>

                </div>
            </div>
            <div className="row mt-5">
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.loyality}</p>

                </div>
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.shop}</p>

                </div>
                <div className="col-sm-4 md-4 lg-4 xl-4">
                    <img src={pharmacy} alt="" />
                    <p className="font-weight-bold">{props.subscription}</p>

                </div>
            </div>
        </div>
    );

}

export const SingleMenu = (props) => {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col text-center justify-content-center align-items-center">
                    <img src={pharmacy} alt="" onClick={props.onClick}/>
                    <p className="font-weight-bold">{props.data}</p>
                </div>
            </div>
        </div>
    );

}


