import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StorePub')
@observer
class DropDown extends Component{
    render(){
        const {StorePub} = this.props;
        return (
            <label>choose type：
                <select
                    value={StorePub.InputBox.type}
                    onChange={(e)=>StorePub.handleInputBoxInput("type",e.target.value)}
                >
                    <option value="paper">paper</option>
                    <option value="patent">patent</option>
                    <option value="software_copyright">software_copyright</option>
                    <option value="awards">awards</option>
                </select>
            </label>
        )
    }
}

export default DropDown

