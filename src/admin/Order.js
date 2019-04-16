import React,{Component,Fragment} from 'react'
import Project from "./Element/Project";
import Orders from "./Element/Orders";
import {observer,inject} from 'mobx-react';

@inject('StoreOrder')
@observer
class Order extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <Fragment>
                <div className={"title"}>
                    <span>
                        漂流后台管理系统
                    </span>
                    <button
                        name=""
                        type="button"
                        className="btn btn-success edit_id hello"
                        onClick={()=>StoreOrder.handleLoginOut()}
                    >
                        注销
                    </button>
                    <span className={"hello"}>
                        欢迎你
                    </span>
                </div>
                <Orders/>
                <Project/>
            </Fragment>
        )
    }
}
export default Order


