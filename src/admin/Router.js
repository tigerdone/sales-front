import React,{Component} from 'react'
import Login from './Login'
import Order from './Order'
import IndexBox from './Element/IndexBox'
import Setting from './Element/setting/Setting'
import { Router , Route, hashHistory,IndexRoute } from 'react-router';
import {inject, observer} from "mobx-react";

@inject('StoreLogin')
@observer
class index extends Component{
    render(){
        const {StoreLogin} = this.props;
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/order' component={Order} onEnter={StoreLogin.isAdmin}>
                    <IndexRoute component={IndexBox}/>
                    <Route path='setting' component={Setting} onEnter={StoreLogin.isAdmin}/>
                </Route>
            </Router>
        )
    }
}
export default index


