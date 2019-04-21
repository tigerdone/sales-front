import {Table, Tabs, Input, Button} from 'antd';
import  React,{Component} from "react"
import OrderLine from  "./OrderLine"
// import {observable} from "mobx";
import {inject, observer} from "mobx-react";
import SelectTime from  "./SelectTime"
import SelectPlat from  "./SelectPlat"
import Modal1 from  "./Modal1"
import DeleModal from "./DeleModal"
const TabPane = Tabs.TabPane;
const Search = Input.Search;

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
                <br/>
                <div className={"seach_box"}>
                    <div className={"fiters"}>
                        <span>
                            选择时间：
                        </span>
                        <SelectTime />
                        <span className={"empty"}>
                            选择平台：
                        </span>
                        <SelectPlat />
                    </div>
                    <div className={"seach_container"}>
                        <Search
                            placeholder="请输入编号查询"
                            onSearch={value => StoreOrder.setInputSearch(value)}
                            enterButton
                        />
                    </div>
                </div>
                <Tabs onChange={StoreOrder.setFilishFilter} type="card">
                    <TabPane tab="所有" key="all">
                    </TabPane>
                    <TabPane tab="待完成" key="ing">
                    </TabPane>
                    <TabPane tab="已完成" key="ed">
                    </TabPane>
                </Tabs>
                <Table
                    columns={columns}
                    dataSource={StoreOrder.fiter()}
                    rowKey="key"
                />
                <div className={"newOrder"}>
                    <Button
                        type="primary"
                        onClick={StoreOrder.setInitFilter}
                    >
                        默认
                    </Button>
                    <span className={"empty"}>
                        </span>
                    <Button
                        type="primary"
                        onClick={() => StoreOrder.newOrder()}
                    >
                        新建
                    </Button>
                    <Modal1 />
                    <DeleModal />
                </div>
            </div>
        )
    }
}


