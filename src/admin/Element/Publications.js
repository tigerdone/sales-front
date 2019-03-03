import React,{Component} from 'react'
import Item from './ItemPub'
import {observer,inject} from 'mobx-react'
import InputPub from "../input/InputPub";
import DeleteConfirm from "../input/DeleteConfirm";

@inject('StorePub')
@observer
class Index extends Component{
    render(){
        const {StorePub} = this.props;
        return (
            <div className="container">
                <h1>
                    publications
                </h1>
                <ul className="nav nav-tabs" id="myTab">
                    <li className={"link" + StorePub.getClassName("paper")}>
                        <button onClick={()=>{StorePub.getPaper("paper");StorePub.setClassName("paper")}}>
                            Papers
                        </button>
                    </li>
                    <li className={"link" + StorePub.getClassName("patent")}>
                        <button onClick={()=>{StorePub.getPaper("patent");StorePub.setClassName("patent")}}>
                            Patent
                        </button>
                    </li>
                    <li className={"link" + StorePub.getClassName("software_copyright")}>
                        <button onClick={()=>{StorePub.getPaper("software_copyright");StorePub.setClassName("software_copyright")}}>
                            Software_copyright
                        </button>
                    </li>
                    <li className={"link" + StorePub.getClassName("awards")}>
                        <button onClick={()=>{StorePub.getPaper("awards");StorePub.setClassName("awards")}}>
                            Awards
                        </button>
                    </li>
                    <li className={"addBtn"}>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success edit_id"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={()=>StorePub.clearInput()}
                        >
                            添加
                        </button>

                    </li>
                </ul>

                <div className="tab-content">
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
                                            item
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            paper link
                                        </p>
                                    </th>
                                    <th className="td">
                                        <p className="t_header">
                                            video link
                                        </p>
                                    </th>
                                    <th colSpan={2}>
                                        <p className="t_header">
                                            操作
                                        </p>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="my_tbody my_tbody_pub">
                                {
                                    StorePub.Paper.map(
                                        (todo) => <Item
                                            key = {Math.random()}
                                            items = {todo}
                                        />
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <InputPub/>
                <DeleteConfirm/>
            </div>
        )
    }
}

export default Index


