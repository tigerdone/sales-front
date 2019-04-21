import {Table, Tabs, Input, Button, Modal} from 'antd';
import  React,{Component} from "react"
import OrderLine from  "./OrderLine"
// import {observable} from "mobx";
import {inject, observer} from "mobx-react";
import SelectTime from  "./SelectTime"
import SelectPlat from  "./SelectPlat"
import Modal1 from  "./Modal1"
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
},{
    title: '售票员',
    dataIndex: 'saler',
    key: 'saler',
},{
    title: '操作',
    key: 'action',
    render: () => (
            <OrderLine />
    ),
}];

export default
@inject('StoreOrder')
@observer
class MyTable extends Component{
    render() {
        const {StoreOrder} = this.props;
        return (
            <div>
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
                <br/>
                <div className={"seach_box"}>
                    <div className={"seach_container"}>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>
                    <div className={"seach_container"}>
                        <Button
                            type="primary"
                            onClick={StoreOrder.initInput}
                        >
                            默认
                        </Button>
                    </div>
                    <Button
                        type="primary"
                        onClick={() => StoreOrder.setModal1Visible(true)}
                    >
                        新建
                    </Button>
                    <Modal1 />

                </div>

                <br/>

                <Tabs onChange={StoreOrder.setFilishFilter} type="card">
                    <TabPane tab="所有" key="all">
                    </TabPane>
                    <TabPane tab="待完成" key="ing">
                    </TabPane>
                    <TabPane tab="已完成" key="ed">
                    </TabPane>
                </Tabs>
                <Table columns={columns} dataSource={StoreOrder.fiter()} />
            </div>
        )
    }
}


