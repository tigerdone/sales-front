import React,{Component} from 'react'
import Login from './Login'
import Home from './Home'
import Mytestssss from './Mytest'
import { Router , Route, hashHistory } from 'react-router';
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
                <Route path='/mytest' component={Mytestssss} />
                <Route path='/home' component={Home} onEnter={StoreLogin.isAdmin}/>
            </Router>
        )
    }
}
export default index


