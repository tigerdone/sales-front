import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import Textarea from "../../input/InputPro";


@inject('StorePro')
@observer
class Input extends Component{
    render(){
        const {StorePro,item} = this.props;
        return (

            <div className={"message_name"}>
                <p>
                    item:
                </p>
                <div className="input_message">
                    <textarea
                        className="username"
                        required="required"
                        placeholder="item"
                        // value={StoreOrder.InputBox.item}
                        name={item}
                        onChange={(e)=>StorePro.handleInputBoxInput(e.target.name,e.target.value)}
                    />
                </div>
            </div>

        )
    }
}
export default Input
