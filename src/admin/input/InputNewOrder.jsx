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
                                新建订单
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
                                    {
                                        StoreOrder.InputBox._id === "" ?(
                                                <DropDownPlat />
                                            )
                                            :null
                                    }
                                    <div>
                                        <DropDownPay />
                                    </div>
                                    <div>
                                        <DropDownPerson
                                            personType = {"成人"}
                                        />
                                        <span>
                                            80元/人
                                        </span>
                                    </div>
                                    <div>
                                        <DropDownPerson
                                            personType = {"儿童"}
                                        />
                                        <span>
                                            40元/人
                                        </span>
                                    </div>
                                    <div>
                                        <p>
                                            安全服
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            浆板
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            总价
                                        </p>
                                    </div>
                                    {/*<div className={"message_name"}>*/}
                                        {/*isReback:*/}
                                    {/*</div>*/}
                                    {/*<div className="input_message">*/}
                                        {/*<input*/}
                                            {/*type="text"*/}
                                            {/*required="required"*/}
                                            {/*placeholder="是否退发票"*/}
                                            {/*name="isReback"*/}
                                            {/*value={StoreOrder.InputBox.isReback}*/}
                                            {/*onChange={(e)=>StoreOrder.handleInputBoxInput(e.target.name,e.target.value)}*/}
                                        {/*/>*/}
                                    {/*</div>*/}
                                    {/*<div className={"message_name"}>*/}
                                        {/*payWay:*/}
                                    {/*</div>*/}
                                    {/*<div className="input_message">*/}
                                        {/*<input*/}
                                            {/*type="text"*/}
                                            {/*required="required"*/}
                                            {/*placeholder="video link"*/}
                                            {/*name="payWay"*/}
                                            {/*value={StoreOrder.InputBox.video}*/}
                                            {/*onChange={(e)=>StoreOrder.handleInputBoxInput(e.target.name,e.target.value)}*/}

                                        {/*/>*/}
                                    {/*</div>*/}
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
