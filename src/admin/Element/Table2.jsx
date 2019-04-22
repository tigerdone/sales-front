import {Table, Button} from 'antd';
import  React,{Component} from "react"
import OrderLine from  "./OrderLine"
import {inject, observer} from "mobx-react";
import AddModal from "./model/AddModal"
import DeleModal from "./model/DeleModal"

const columns = [{
    title: '订单号',
    dataIndex: 'orderNum',
    key: 'orderNum',
}, {
    title: '平台',
    dataIndex: 'platform',
    key: 'platform',
}, {
    title: '支付方式',
    dataIndex: 'payWay',
    key: 'payWay',
}, {
    title: '押金方式',
    dataIndex: 'deposite',
    key: 'deposite',
},{
    title: '人数',
    dataIndex: 'personNum',
    key: 'personNum',
},{
    title: '总价',
    dataIndex: 'totalMoney',
    key: 'totalMoney',
},{
    title: '是否退押金',
    dataIndex: 'isReback',
    key: 'isReback',
    render: (text) =>
        text === "true"?"是":"否"
},{
    title: '售票员',
    dataIndex: 'saler',
    key: 'saler',
},{
    title: '操作',
    key: '_id',
    render: (index,record,text) => (
        <OrderLine record = {record} text = {text} index = {index} />
    )
}];

export default
@inject('StoreOrder')
@observer
class MyTable extends Component{
    render() {
        const {StoreOrder} = this.props;
        return (
            <div>
                <h4 className={"stair1Title"}>
                    -小卖部
                </h4>
                <br/>
                <Table
                    columns={columns}
                    dataSource={StoreOrder.fiter()}
                    rowKey="key"
                    pagination={{ pageSize: 6 }}
                    className={"myTable"}
                    pageSizeOptions = {['10']}
                />
                <div className={"newOrder"}>
                    <Button
                        type="primary"
                        onClick={() => StoreOrder.newOrder()}
                    >
                        新建
                    </Button>
                    <AddModal />
                    <DeleModal />
                </div>
            </div>
        )
    }
}
