import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StoreOrder')
@observer
class Index extends Component{
    render(){
        const {items,StoreOrder} = this.props;
        return (
                <tr className="active">
                    <td>
                        <p className="body_item">
                            {items.orderNum}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.platform}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {parseInt(items.adultNum)+parseInt(items.childNum)}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {parseInt(items.adultNum)+parseInt(items.childNum)}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.payWay}
                        </p>
                    </td>
                    <td>
                        <p className="body_item">
                            {items.isReback}
                        </p>
                    </td>
                    <td className={"repaireBtn"}>
                        <button
                            name=""
                            type="button"
                            className="btn btn-success edit_id"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={()=>StoreOrder.setInput(items)}
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
                            onClick={()=>StoreOrder.setInput(items)}
                        >
                            删除
                        </button>
                    </td>
                </tr>
        )
    }
}

export default Index

