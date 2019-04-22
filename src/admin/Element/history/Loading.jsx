import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'
import { Spin, Switch, Alert } from 'antd';

@inject('StorePro')
@observer
class Card extends React.Component {
    state = { loading: true };
    toggle = (value) => {
        this.setState({ loading: value });
    };
    render() {
        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
                <div style={{ marginTop: 16 }}>
                    Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                </div>
            </div>
        );
    }
}
export default Card