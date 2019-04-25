import  React,{Component} from "react"
import Userset from "./Userset"
import Priceset from "./Priceset"


export default
class MyTable extends Component{
    render() {
        return (
            <div>
                <Userset />
                <Priceset />
            </div>
        )
    }
}


