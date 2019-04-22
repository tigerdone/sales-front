import { Upload, message, Button, Icon } from 'antd';
import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StorePro')
@observer
class Index extends Component{
    render(){
        const {StorePro} = this.props;
        return (
            <div className="message_name">
                <p>
                    picture:
                </p>
                <div className="clearfix">
                    <Upload {...StorePro.Updata} onChange={(e)=>StorePro.addPicture(e)}>
                        <Icon type="plus" />
                        <div className="ant-upload-text">上传照片</div>
                    </Upload>
                </div>
            </div>
        )
    }
}
export default Index
