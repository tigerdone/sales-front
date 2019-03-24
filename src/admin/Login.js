import React,{ Component } from 'react';
import { inject, observer } from "mobx-react/index";
import { Spin } from 'antd';
// import Card from './Element/Loading';

@inject('StoreLogin')
@observer
class Login extends Component{
    render(){
        const {StoreLogin} = this.props;
        return (
            <div className="page">
                <div className={"body_container"}>
                    <p className="firm_title">
                        管理员后台管理系统
                    </p>
                    <div className="login_box">
                        <p className="item">
                            登录
                        </p>
                        <form
                            id="my_form"
                            className="input_box"
                            method="post"
                        >
                            <div className="input_item">
                                <div className="the_icon">
                                    <img src="img/user.jpg" alt="user"/>
                                </div>
                                <input
                                    className="username"
                                    required="required"
                                    type="text"
                                    placeholder="账号"
                                    name="inputName"
                                    onChange={(e)=>{StoreLogin.loginInputBoxInput("inputName",e.target.value)}}
                                />
                            </div>
                            <div className="input_item">
                                <div className="the_icon">
                                    <img src="img/password.jpg" alt="user"/>
                                </div>
                                <input
                                    type="password"
                                    required="required"
                                    placeholder="密码"
                                    name="inputPassword"
                                    onChange={(e)=>{StoreLogin.loginInputBoxInput("inputPassword",e.target.value)}}
                                />
                            </div>
                            <div
                                className="input_item radio"
                                onChange={(e)=>{StoreLogin.loginInputBoxInput("power_id",e.target.value)}}
                            >
                                <div className="radio_item">
                                    <label>
                                        <input
                                            required="required"
                                            value="管理员"
                                            name="power_id"
                                            type="radio"
                                            defaultChecked
                                        />
                                        <span>
                                            管理员
                                        </span>
                                    </label>
                                </div>
                                <div className="radio_item">
                                    <label>
                                        <input
                                            required="required"
                                            value="超级管理员"
                                            name="power_id"
                                            type="radio"
                                        />
                                        <span>
                                            超级管理员
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <p className={"message"}>
                                {StoreLogin.message}
                            </p>

                            <div className="btn_item">
                                <button
                                    id="my_submit"
                                    type="button"
                                    className="button login_in"
                                    onClick={()=>{StoreLogin.handleLogin()}}
                                >
                                    { StoreLogin.isLoading?
                                        (
                                            <div className="example">
                                                <Spin/>
                                            </div>
                                        ):
                                        (
                                            <span>
                                                登录
                                            </span>
                                        )
                                    }
                                </button>
                                <button
                                    type="button"
                                    className="button"
                                    onClick={()=>{window.location.href='../../'}}
                                >
                                    取消
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login

