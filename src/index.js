import React from 'react';
import ReactDOM from 'react-dom';
import Router from './admin/Router';
import {Provider} from 'mobx-react';
import StorePub from './admin/store/storePub'
import StorePro from './admin/store/storePro'
import StoreLogin from './admin/store/storeLogin'

ReactDOM.render(
    <Provider
        StorePub = {StorePub}
        StorePro = {StorePro}
        StoreLogin = {StoreLogin}
    >
        <Router />
    </Provider>
    , document.getElementById('root')
);
