import {Modal, Button, Divider} from 'antd';
import React,{Component} from  'react';


export default class OrderLine extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.setModal1Visible(true)}>修改</Button>
                <Modal
                    title="20px to Top"
                    style={{ top: 20 }}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>

                <Divider type="vertical" />

                <Button type="primary" onClick={() => this.setModal2Visible(true)} >删除</Button>
                <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        );
    }
}

