import React,{Component} from 'react'
import ItemOrders from './ItemOrders'
import {observer,inject} from 'mobx-react'
import InputNewOrder from "../input/InputNewOrder";
import DeleteConfirm from "../input/DeleteConfirm";

@inject('StoreOrder')
@observer
class Index extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <div className="container">
                <h1>
                    订单状态
                </h1>
                <ul className="nav nav-tabs" id="myTab">
                    <li className={"link" + StoreOrder.getClassName("will")}>
                        <button onClick={()=>{StoreOrder.getPaper("will");StoreOrder.setClassName("will")}}>
                            待完成订单
                        </button>
                    </li>
                    <li className={"link" + StoreOrder.getClassName("ed")}>
                        <button onClick={()=>{StoreOrder.getPaper("ed");StoreOrder.setClassName("ed")}}>
                            已完成订单
                        </button>
                    </li>
                    <li className={"link" + StoreOrder.getClassName("all")}>
                        <button onClick={()=>{StoreOrder.getPaper("all");StoreOrder.setClassName("all")}}>
                            所有订单
                        </button>
                    </li>

                    <li className={"addBtn"}>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success edit_id"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={()=>StoreOrder.clearInput()}
                        >
                            新建定单
                        </button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane active"
                        id="profile"
                    >
                        <div className="">
                            <table className="table table-bordered mytable">
                                <thead>
                                <tr>
                                    <th className="td">
                                        <p className="t_header">
                                            订单号
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            平台
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            人数
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            总价
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            付款押金方式
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            是否退押金
                                        </p>
                                    </th>

                                </tr>
                                </thead>
                                <tbody className="my_tbody my_tbody_pub">
                                {
                                    StoreOrder.Paper.map(
                                        (todo) => <ItemOrders
                                            key = {Math.random()}
                                            items = {todo}
                                        />
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <InputNewOrder/>
                <DeleteConfirm/>
            </div>
        )
    }
}

export default Index


