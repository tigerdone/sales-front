import {inject, observer} from "mobx-react";
import React,{ Component } from "react"
import { Modal } from "antd";
import DropDownPlat from '../input/DropDownPlat'
import DropDownPay from '../input/DropDownPay'
import DropDownPerson from '../input/DropDownPerson'

export default
@inject('StoreOrder')
@observer
class MyTable extends Component{
    render(){
        const { StoreOrder } = this.props;
        return (
            <Modal
                title="新建订单"
                style={{ top: 20 }}
                centered
                visible={StoreOrder.modal1Visible}
                onOk={StoreOrder.inputUpdate}
                onCancel={() => StoreOrder.setModal1Visible(false)}
                align={""}
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
            </Modal>
        )
    }
}