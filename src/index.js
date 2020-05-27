import React from 'react';
import ReactDOM from 'react-dom';
import Router from './admin/Router';
import {Provider} from 'mobx-react';
import StoreOrder from './admin/store/storeOrder';
import StoreSet from './admin/store/storeSet';
import StoreLogin from './admin/store/storeLogin';
import StorePrice from './admin/store/storePrice';
import StoreStore from './admin/store/storeStore';

ReactDOM.render(
    <Provider
        StoreSet = {StoreSet}
        StoreOrder = {StoreOrder}
        StoreLogin = {StoreLogin}
        StorePrice = {StorePrice}
        StoreStore = {StoreStore}
    >
        <Router />
    </Provider>
    , document.getElementById('root')
);
