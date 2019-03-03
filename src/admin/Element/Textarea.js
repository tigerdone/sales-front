import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import Textarea from "../input/InputPro";


@inject('StorePro')
@observer
class Input extends Component{
    render(){
        const {StorePro} = this.props;
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
                        // value={StorePub.InputBox.item}
                        name="name"
                        onChange={(e)=>StorePro.handleInputBoxInput("type",e.target.value)}
                    />
                </div>
            </div>

        )
    }
}
export default Input
