import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StoreOrder')
@observer
class DropDownPlat extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <label className={"OrderItem"}>
                <span>
                    选择购票平台：
                </span>
                <select
                    value={StoreOrder.InputBox.platform}
                    onChange={(e)=>StoreOrder.handleInputBoxInput("platform",e.target.value)}
                >
                    <option value="现场">现场</option>
                    <option value="美团">美团</option>
                    <option value="红苹果">红苹果</option>
                    <option value="其他">其他</option>
                </select>
            </label>
        )
    }
}

export default DropDownPlat

