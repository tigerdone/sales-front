import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import Item from "../Element/Orders";

@inject('StoreOrder')
@observer
class DropDown extends Component{
    render(){
        const {StoreOrder,personType} = this.props;
        const arr = new Array(10).fill("");

        return (
            <label>
                {personType}人数：
                <select
                    value={StoreOrder.InputBox.type}
                    onChange={(e)=>StoreOrder.handleInputBoxInput("platform",e.target.value)}
                >
                    {
                        arr.map(
                            (i,ii) => <option key={new Date() + Math.random()} value={ii}>{ii}</option>
                        )
                    }
                </select>
            </label>
        )
    }
}

export default DropDown

