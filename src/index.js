import React from 'react';
import ReactDOM from 'react-dom';
import Router from './admin/Router';
import {Provider} from 'mobx-react';
import StoreOrder from './admin/store/storeOrder'
import StoreSet from './admin/store/storeSet'
import StoreLogin from './admin/store/storeLogin'

ReactDOM.render(
    <Provider
        StoreSet = {StoreSet}
        StoreOrder = {StoreOrder}
        StoreLogin = {StoreLogin}
    >
        <Router />
    </Provider>
    , document.getElementById('root')
);
