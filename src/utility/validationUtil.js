/**
 * @desc validation utility reusable exported function
 * @date 17 May 2020
 * @developer Supriya
 * 
 */

const isEmptyInput = (inputVal) => {
    if (!inputVal.length) {
        return true;
    }
}


const isValidEmail = (emailVal) => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(emailVal);
}


const isCheckAlphaNumericInput = (txtvalue) => {
    let Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
    return txtvalue.match(Exp);
}


const isTwelveDigitPassword = (txtVal) => {
    if (txtVal.length === 12) {
        return true;
    }
}


const istendigitMobileNumber = (mobileVal) => {
    let phoneno = /^\d{10}$/;
    return mobileVal.match(phoneno);
}


export { isEmptyInput, isValidEmail, isCheckAlphaNumericInput, istendigitMobileNumber, isTwelveDigitPassword }