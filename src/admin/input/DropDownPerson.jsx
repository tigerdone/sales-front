import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
// import Item from "../Element/Orders";
// import {Spin} from "antd";

@inject('StoreOrder')
@observer
class DropDown extends Component{
    render(){
        const {StoreOrder,personType} = this.props;
        const arr = new Array(10).fill("");
        var person;
        if(personType === "成人"){
            person = "adultNum";
        }
        else{
            person = "childNum";
        }
        return (
            <label className={"OrderItem"}>
                <span>
                    {personType}人数：
                </span>
                <div>
                    <select
                        value=
                            {
                                (personType === "成人")?
                                    (StoreOrder.InputBox.adultNum):(StoreOrder.InputBox.childNum)
                            }
                        onChange={(e)=>StoreOrder.handleInputBoxInput(person,e.target.value)}
                    >
                        {
                            arr.map(
                                (i,ii) => <option key={new Date() + Math.random()} value={ii}>{ii}</option>
                            )
                        }
                    </select>
                    <span>
                        {
                            (personType === "成人")?
                                (StoreOrder.price.adultPrice):(StoreOrder.price.adultPrice)
                        }
                        元/人
                    </span>
                </div>

            </label>
        )
    }
}

export default DropDown

