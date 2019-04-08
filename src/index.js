import React from 'react';
import ReactDOM from 'react-dom';
import Router from './admin/Router';
import {Provider} from 'mobx-react';
import StoreOrder from './admin/store/storeOrder'
import StorePro from './admin/store/storePro'
import StoreLogin from './admin/store/storeLogin'

ReactDOM.render(
    <Provider
        StoreOrder = {StoreOrder}
        StorePro = {StorePro}
        StoreLogin = {StoreLogin}
    >
        <Router />
    </Provider>
    , document.getElementById('root')
);
