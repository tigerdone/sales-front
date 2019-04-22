import React,{Component} from 'react'
import {observer,inject} from 'mobx-react'

@inject('StorePro')
@observer
class Index extends Component{
    render(){
        const {items,StorePro} = this.props;
        return (
            <tr className="active">
                <td>
                    <p className="body_item">
                        {/*{items.items}*/}
                        <img src={"admin/image/" + items.picture[0]} className={"proImageBox"}  alt="找不到img"/>
                    </p>
                </td>
                <td>
                    <p className="body_item">
                        {items.ProgramLeader}
                    </p>
                </td>
                <td>
                    <p className="body_item">
                        {items.PDFLink}
                    </p>
                </td>
                <td>
                    <p className="body_item">
                        {items.PosterLink}
                    </p>
                </td>
                <td className={"repaireBtn"}>
                    <button
                        name=""
                        type="button"
                        className="btn btn-success edit_id"
                        data-toggle="modal"
                        data-target="#myModal"
                        // onClick={()=>StorePro.setInput(items)}
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
                        data-target="#myModalProDelete"
                        onClick={()=>StorePro.setInput(items)}
                    >
                        删除
                    </button>
                </td>
            </tr>
        )
    }
}
export default Index

