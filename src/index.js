import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux'  
import { Provider } from 'react-redux'  
import createSagaMiddleware from 'redux-saga'  
import LoginReducer from './reducers/LoginReducer';  
import LoginSaga from './saga/LoginSaga';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

const store = createStore(  
  LoginReducer,
  applyMiddleware(sagaMiddleware), // allows redux devtools to watch sagas
)

// Begin our Index Saga
sagaMiddleware.run(LoginSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
