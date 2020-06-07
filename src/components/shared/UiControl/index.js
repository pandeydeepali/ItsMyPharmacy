/**
 * @desc common reusable functions for Ui COntrol
 * developer Supriya 
 * Date 15th May 2020
 */

import React from 'react';


export const PageTitle = (props) => {
    return (<h5>{props.title}</h5>)
}

export const PlainTextField = (props) => {
    return(<input className={props.plainClass} type="text" name={props.name} placeholder={props.plainPlaceholder} maxLength="50"  value={props.value} onChange={props.onChange}  />);

}


export const PlainTextAreaField = (props) => {
    return(<textarea className={props.textareaClass} rows="1" maxLength="50" placeholder={props.plaintextareaholder} onChange={props.onChange}></textarea>);

}

export const EmailTextField = (props) => {
    return(<input className={props.emailClass} name={props.name} type="email" placeholder={props.emailPlaceholder} value={props.value} maxLength="50" onChange={props.onChange} />);
}


export const PasswordTextField = (props) => {
    return (<input className={props.passwordClass} type="password" name={props.name} placeholder={props.passwordPlaceholder} value={props.value} 
    maxLength="12"  autoComplete="off" onChange={props.onChange} />);
}



export const NumberTextField = (props) => {
    return (<input className={props.numberClass} type="number" name={props.name}  value={props.value} placeholder={props.numberPlaceholder} maxLength="10"  onChange={props.onChange}/>);
}



export const AppButton = (props) => {
    return (<button type="submit"  className={props.btnclassName} onClick={props.onClick}>{props.btnText}</button>);

}



export const AppAnchor = (props) => {
   return(<a href={props.href} className={props.anchorClass}>{props.anchorText}</a>);

}

