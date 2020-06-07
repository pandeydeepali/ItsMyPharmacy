import axios from 'axios';
import { API_BASEURL } from '../config/config';


/**
 * 
 * @param {*} makeGETRequest 
 * @param {*} successCallback 
 * @param {*} errorCallback 
 */

const makeGETRequest = (METHOD, successCallback, errorCallback) =>{
      axios.get(API_BASEURL + METHOD)
        .then((response) => {
     
            successCallback(response);
     
        })
        .catch(function (error) {

            errorCallback(error);
            
        });

}

/**
 * 
 * @param {*} makePOSTRequest 
 * @param {*} successCallback 
 * @param {*} errorCallback 
 */

// const makePOSTRequest = (METHOD, payload, successCallback, errorCallback) =>{
  
//     axios.post(API_BASEURL+METHOD+`/${payload}`)
//     headers: headers,
//     "Access-Control-Allow-Origin": "*"
//     .then((response)=>{
       
//             successCallback(response)
//     })
//     .catch(function(error){
//         errorCallback(error)

//     });
//     console.log("from make POST request",API_BASEURL+METHOD+`/${payload}`);
// }

const makePOSTRequest = (METHOD, payload, successCallback, errorCallback) =>{

const headers = {
    "Content-Type":"application/json; charset=utf-8"
  }
  
  
  axios.post(API_BASEURL+ METHOD, payload, {
      headers: headers
    })
    .then((response) => {
        successCallback(response);
    })
    .catch((error) => {
        errorCallback(error.response);
      // errorCallback(error);
    })
}


export { makeGETRequest , makePOSTRequest}