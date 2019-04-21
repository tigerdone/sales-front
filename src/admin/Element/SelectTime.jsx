import { DatePicker } from 'antd';
// import moment from 'moment';
import  React,{Component} from "react"
import {inject, observer} from "mobx-react";
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

export default
@inject('StoreOrder')
@observer
class SelectTime extends Component {
    render() {
        const {StoreOrder} = this.props;
        return (
            <RangePicker
                onChange = {StoreOrder.setTimefilter}
                // defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
                value={StoreOrder.filterTime.slice()}
                placeholder = {["开始时间","结束时间"]}
            />
        )
    }
}
