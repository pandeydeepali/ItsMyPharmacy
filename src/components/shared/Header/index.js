/**
 * @desc common utility exported funciton
 * developer Supriya 
 * Date 15th May 2020
 */

import React from 'react';

import header from '../Header/header.png';

export const HeaderMenu = (props) => {
    return (
      
              <nav className="navbar navbar-light bg-light">
                <label className="navbar-brand border-0">
                    <img src={header} width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
                    {props.name}
                </label>
                <label className="text-black ml-auto border-0">Phone 99889988991</label>
                </nav>
        
      
      
        );

}


