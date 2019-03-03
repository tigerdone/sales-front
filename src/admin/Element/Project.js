import React,{Component} from 'react'
import Item from './ItemPro'
import {observer,inject} from 'mobx-react'
import InputPro from '../input/InputPro'


@inject('StorePro')
@observer
class Index extends Component{
    render(){
        const {StorePro} = this.props;
        return (
            <div className="container">
                <div className="tab-content">
                    <div>
                        <h1>
                            project
                        </h1>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success edit_id_pro"
                            data-toggle="modal"
                            data-target="#myModalPro"
                            // onClick={()=>StorePro.clearInput()}
                        >
                            添加
                        </button>
                    </div>
                    <div
                        className="tab-pane active"
                        id="profile"
                    >
                        <div className="">
                            <table className="table table-bordered mytable">
                                <thead>
                                <tr>
                                    <th className="td">
                                        <p className="t_header">
                                            pictrue
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            item
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            advisor
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            link
                                        </p>
                                    </th>
                                    <th colSpan={2}>
                                        <p className="t_header">
                                            操作
                                        </p>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="my_tbody my_tbody_pro">
                                {/*{*/}
                                    {/*StorePub.datas.map(*/}
                                        {/*(todo) => <Item*/}
                                            {/*key = {Math.random()}*/}
                                            {/*items = {todo}*/}
                                        {/*/>*/}
                                    {/*)*/}
                                {/*}*/}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <InputPro/>
            </div>
        )
    }
}

export default Index


