/**
 * @desc common utility exported funciton
 * developer Supriya 
 * Date 15th May 2020
 */

import React from 'react';
import '../Footer/footer.css';

export const FooterMenu = (props) => {
    return (
        <React.Fragment>
            <div className="footer">
                <a href={props.href} className="mr-5">{props.textLeft}</a> <a href={props.privacyhref} className="mr-5">{props.textRight}</a>
            </div>
         </React.Fragment>
  );

}


