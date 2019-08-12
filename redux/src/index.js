import React from 'react';
import ReactDOM from 'react-dom';
// REDUX needed imports //////
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
import reducers from './reducers';

import App from './containers/app'

//Create variable for using in store redux
const createStoreWithMiddleware=applyMiddleware()(createStore)

ReactDOM.render(
    //Add provider with store redux
    <Provider  store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));

