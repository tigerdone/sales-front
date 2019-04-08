import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StoreOrder')
@observer
class DropDown extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <label>
                选择付款方式：
                <select
                    value={StoreOrder.InputBox.type}
                    onChange={(e)=>StoreOrder.handleInputBoxInput("platform",e.target.value)}
                >
                    <option value="paper">现金</option>
                    <option value="patent">微信</option>
                    <option value="software_copyright">支付宝</option>
                </select>
            </label>
        )
    }
}

export default DropDown

