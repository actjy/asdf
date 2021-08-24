import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
//import AppRouter from './routers/AppRouter'
import store from './list/store';
import HomePage from './components/HomePage';
import { Provider } from 'react-redux';

const appRoot = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <HomePage />
    </Provider>,
    appRoot
);


