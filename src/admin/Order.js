import React,{Component,Fragment} from 'react'
import {observer,inject} from 'mobx-react';
import { Button } from 'antd';

@inject('StoreOrder')
@inject('StoreLogin')
@observer
class Order extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <Fragment>
                <div className={"header"}>
                    <span>
                        漂流后台管理系统
                    </span>
                    <Button
                        type="danger"
                        name=""
                        className="btn btn-success edit_id hello"
                        onClick={()=>StoreOrder.handleLoginOut()}
                        // htmlType={""}
                    >
                        注销
                    </Button>
                    <span className={"hello"}>
                    欢迎你：
                    {StoreOrder.saler}
                    </span>
                </div>
                {this.props.children}
            </Fragment>
        )
    }
}
export default Order


