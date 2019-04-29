import { Button, Divider} from 'antd';
import React,{Component} from  'react';
import {inject, observer} from "mobx-react";

export default
@inject('StoreOrder')
@observer
class OrderLine extends Component {
    render() {
        const {StoreOrder,record} = this.props;
        return (
            <div>
                <Button
                    type="primary"
                    disabled = {record.ifFinish==="ing"?(false):(true)}
                    onClick={() => StoreOrder.updateInput(record,"repaire")}
                >
                    修改
                </Button>
                <Divider type="vertical" />
                <Button
                    type="primary"
                    onClick={() => StoreOrder.getInvoice(record)}
                >
                    开票
                </Button>
                <Divider type="vertical" />
                <Button
                    type="danger"
                    onClick={() => StoreOrder.updateInput(record,"delete")}
                >
                    删除
                </Button>
            </div>
        );
    }
}

