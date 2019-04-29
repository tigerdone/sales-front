import {inject, observer} from "mobx-react";
import React,{ Component } from "react"
import { Modal,Checkbox,Input } from "antd";
import DropDownPlat from '../../input/DropDownPlat'
import DropDownPay from '../../input/DropDownPay'
import DropDownPerson from '../../input/DropDownPerson'

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
                visible={StoreOrder.modalInputBox}
                onOk={StoreOrder.inputUpdate}
                onCancel={() => StoreOrder.setmodalInputBox(false)}
                width = {400}
                maskClosable={false}
                className={"myModal1"}
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
                    </div>
                    <div>
                        <DropDownPerson personType = {"儿童"} />
                    </div>
                    <div className={"OrderItem"}>
                        <span>
                            安全服：
                        </span>
                        <span>
                            { Number(StoreOrder.InputBox.adultNum) + Number(StoreOrder.InputBox.childNum) }
                            *
                            { StoreOrder.price.clothPrice }
                            元/人
                        </span>
                    </div>
                    <div className={"OrderItem"}>
                        <span>
                            浆板：
                        </span>
                        <span>
                            {StoreOrder.InputBox.adultNum}
                            *
                            {StoreOrder.price.plupPrice}
                            元/人
                        </span>
                    </div>
                    <div className={"OrderItem"}>
                            <span>
                                联系方式：
                            </span>
                        <span>
                            <Input
                                value={StoreOrder.InputBox.phoneNumber}
                                onChange={(e)=>StoreOrder.setPhoneInput(e)}
                                 name={"phoneNumber"}
                            />
                        </span>
                    </div>
                    <div className={"OrderItem"}>
                        <span>
                            总价：
                        </span>
                        <span>
                            {
                                StoreOrder.InputBox.totalMoney
                            }
                            元
                        </span>
                    </div>

                    <div className={"OrderItem"}>
                        <span>
                            已完成：
                        </span>
                        <Checkbox
                            onChange={(value) =>StoreOrder.setIsReback(value)}
                            checked={
                                StoreOrder.InputBox.isReback === "true"
                            }
                        >
                        </Checkbox>
                    </div>
                <div className={"newUserMessage"}>
                    {StoreOrder.addPhoneMessage}
                </div>
            </Modal>
        )
    }
}