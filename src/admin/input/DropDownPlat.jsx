import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StoreOrder')
@observer
class DropDownPlat extends Component{
    render(){
        const {StoreOrder} = this.props;
        return (
            <label>
                选择购票平台：
                <select
                    value={StoreOrder.InputBox.type}
                    onChange={(e)=>StoreOrder.handleInputBoxInput("platform",e.target.value)}
                >
                    <option value="paper">现场</option>
                    <option value="patent">美团</option>
                    <option value="software_copyright">红苹果</option>
                    <option value="awards">其他</option>
                </select>
            </label>
        )
    }
}

export default DropDownPlat

