import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StorePub')
@observer
class Index extends Component{
    render(){
        const {items,StorePub} = this.props;
        return (
                <tr className="active">
                    <td>
                        <p className="body_item">
                            {items.item}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.paper}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.video}
                        </p>
                    </td>
                    <td className={"repaireBtn"}>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success edit_id"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={()=>StorePub.setInput(items)}
                        >
                            修改
                        </button>
                    </td>
                    <td>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success delete_id"
                            data-toggle="modal"
                            data-target="#myModalDelete"
                            onClick={()=>StorePub.setInput(items)}
                        >
                            删除
                        </button>
                    </td>
                </tr>
        )
    }
}

export default Index

