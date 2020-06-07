/**
 * @desc comomn utility exported funcitons
 * developer Supriya 
 * Date 15th May 2020
 */

import React from 'react';

export const AboutPlatform = (props) => {
    return (
        <React.Fragment>
            <h5>{props.aboutTitle}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.firstPoint}</li>
                <li className="list-group-item">{props.secondPoint}</li>
                <li className="list-group-item">{props.thirdPoint}</li>
                <li className="list-group-item">{props.fourthPoint}</li>
                <li className="list-group-item">{props.fifthPoint}</li>
            </ul>

        </React.Fragment>

    );
}

