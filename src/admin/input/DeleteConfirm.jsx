import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'


@inject('StoreOrder')
@observer
class Input extends Component{
    render(){
        const {StoreOrder}=this.props;
        return(
            <div className="modal fade" id="myModalDelete">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/*// <!-- 模态框头部 -->*/}
                        <div className="modal-header">
                            <h4 className="modal-title">
                                确认删除？
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
                                    <div className={"message_name"}>
                                        item:
                                    </div>
                                    <div className="input_message">
                                        {StoreOrder.InputBox.item}
                                    </div>
                                    <div className={"message_name"}>
                                        paper link:
                                    </div>
                                    <div className="input_message">
                                        {StoreOrder.InputBox.paper}
                                    </div>
                                    <div className={"message_name"}>
                                        video link:
                                    </div>
                                    <div className="input_message">
                                        {StoreOrder.InputBox.video}
                                    </div>
                                    <div className="btn_item message_btn">
                                        <button
                                            id="my_submit"
                                            type="button"
                                            className="button login_in"
                                            onClick={StoreOrder.handleDelete}
                                            data-dismiss="modal"

                                        >
                                            删除
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


export default Input;
