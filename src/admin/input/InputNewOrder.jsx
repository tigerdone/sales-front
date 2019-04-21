import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

import DropDownPlat from './DropDownPlat'
import DropDownPay from './DropDownPay'
import DropDownPerson from './DropDownPerson'


@inject('StoreOrder')
@observer
class InputNewOrder extends Component{
    render(){
        const {StoreOrder}=this.props;
        return(
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*// <!-- 模态框头部 -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title">
                                {
                                    StoreOrder.InputBox._id === ""?("新建订单"):("修改订单")
                                }
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/*// <!-- 模态框主体 -->*/}
                        <div className="modal-body">
                            <div className="message_box">
                                <form
                                    id="my_form"
                                    className="message_form"
                                    method="post"
                                >
                                    <div>
                                        <DropDownPlat />
                                    </div>
                                    <div>
                                        <DropDownPay payType = {"payWay"} />
                                    </div>
                                    <div>
                                        <DropDownPay payType = {"deposite"} />
                                    </div>
                                    <div>
                                        <DropDownPerson personType = {"成人"} />
                                        <span>
                                            {StoreOrder.price.adultPrice}
                                            元/人
                                        </span>
                                    </div>
                                    <div>
                                        <DropDownPerson personType = {"儿童"} />
                                        <span>
                                            {StoreOrder.price.childPrice}
                                            元/人
                                        </span>
                                    </div>
                                    <div>
                                        <p>

                                            安全服：
                                            { Number(StoreOrder.InputBox.adultNum) + Number(StoreOrder.InputBox.childNum) }
                                            *
                                            { StoreOrder.price.clothPrice }
                                            元/人
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            浆板：
                                            {StoreOrder.InputBox.adultNum}
                                            *
                                            {StoreOrder.price.plupPrice}
                                            元/人
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            总价：
                                            {
                                                StoreOrder.InputBox.totalMoney
                                            }
                                            元
                                        </p>
                                    </div>
                                    <div className="btn_item message_btn">
                                        <button
                                            id="my_submit"
                                            type="button"
                                            className="button login_in"
                                            onClick={StoreOrder.inputUpdate}
                                            data-dismiss="modal"
                                        >
                                            提交
                                        </button>
                                        <button
                                            type="button"
                                            className="button"
                                            data-dismiss="modal"
                                        >
                                            取消
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default InputNewOrder;
