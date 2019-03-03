import React, {Component} from 'react'
import 'jquery'

class Test extends Component{
    //当父组件重新渲染时，子组件重新渲染
    render(){
        // console.log("子组件渲染")
        return (
            <div>
                {this.props.content}
                <p onClick={this.my_hand_click}>
                    tiger
                </p>
            </div>
        )
    }

    my_hand_click(){
        console.log("hello world")
        // let content = {some: 'content'};

        // fetch("http://127.0.0.1/my_test").then(
        //     function (response) {
        //         console.log(response)
        //     }
        // );
        // console.log()
    }

}
export default Test
