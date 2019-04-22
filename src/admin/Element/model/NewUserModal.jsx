import {inject, observer} from "mobx-react";
import React,{ Component } from "react"
import { Modal } from "antd";

export default
@inject('StoreSet')
@observer
class MyTable extends Component{
    render(){
        const { StoreSet } = this.props;
        return (
            <Modal
                title="添加用户"
                visible={StoreSet.usersModal}
                onOk={StoreSet.addUser}
                onCancel={() => StoreSet.setUsersModal(false) }
                okText="确认"
                cancelText="取消"
            >
                <p>输入</p>
            </Modal>
        )
    }
}