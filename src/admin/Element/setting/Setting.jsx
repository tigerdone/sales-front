import {Table, Button} from 'antd';
import  React,{Component} from "react"
import UserLine from "../UserLine"
import {inject, observer} from "mobx-react";
import DeleUser from "../model/DeleUser"
import NewUserModal from "../model/NewUserModal"

const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
},{
    title: '用户密码',
    dataIndex: 'password',
    key: 'password',
},{
    title: '订单数',
    dataIndex: 'orders',
    key: 'orders',
},{
    title: '操作',
    key: '_id',
    render: (index,record,text) => (
        <UserLine record = {record} text = {text} index = {index} />
    )
}];

export default
@inject('StoreSet')
@observer
class MyTable extends Component{
    render() {
        const {StoreSet} = this.props;
        return (
            <div>
                <h4>
                    设置
                </h4>
                <br/>
                <Table
                    columns={columns}
                    dataSource={StoreSet.users.slice()}
                    rowKey="key"
                    pagination={{ pageSize: 6 }}
                    className={"myTable"}
                    pageSizeOptions = {['10']}
                />
                <div className={"newOrder"}>
                    <Button
                        type="primary"
                        onClick={() => StoreSet.newOrder()}
                    >
                        新建
                    </Button>
                </div>

                <NewUserModal />
                <DeleUser />
            </div>
        )
    }
}


