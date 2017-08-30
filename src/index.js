/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/index.scss';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/tether/dist/js/tether.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './assets/favicon.ico';


const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);