import React,{Component, Fragment} from 'react';
import TodoItem from './Todoitem';
import Test from './test'
import './style.css';
import axios from 'axios'//发送ajax 请求
import { observable } from "mobx"

class MyStore {
    @observable myName = 'hunter'
}

class TodoList extends Component{
    constructor(props) {
        super(props);
        //当组件的state或者Props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: 'hello world',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)

    }

    // 性能提升的几个方法
    // 类似的作用域的绑定放构造函数里面 this.handleInputChange = this.handleInputChange.bind(this)
    // setState是一个异步函数，会把多次改变合并成一次
    // 底层比对：同层比对，key值比对，提高效率
    // 借助shouldComponentUpdate 提高react组件的效率

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="inserArea">输入内容</label>
                    <input
                        id="inserArea"
                        className='input_border'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        // ref={(input)=>{this.input = input}}
                        type="text"
                        ref={(input)=>{
                            this.input = input;
                        }}
                    />
                    <button
                        onClick={this.handleBtnClick}
                    >
                        提交
                    </button>
                </div>
                <ul ref={(ul)=>{
                    this.ul = ul;
                }}>
                    { this.getTodoItem() }
                </ul>
                <Test content = {this.state.inputValue}/>
            </Fragment>
        )
    }
    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
                <div key = {index} >
                    <TodoItem
                        test={'222'}
                        items = {item}
                        index = {index}
                        deleteItem = {this.handleItemClick}

                    />
                    {/*<li
                        key={index}
                        onClick={this.handleItemClick.bind(this, index)}
                        dangerouslySetInnerHTML={{__html: item}}
                    >
                    </li>*/}
                </div>
            )
        })
    }
    handleInputChange(e){
        // console.log(e.target)
        const value = this.input.value;
        this.setState(()=>({
                inputValue: value
        }))
    }
    handleBtnClick(e){
        // setState是异步的
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length)
        })

    }
    handleItemClick(index){
        // state 不允许我们做任何的改变，最好不要直接改变state 里面的值，关于后面优化
        // this.state.list.splice(index,1)
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }

    componentDidMount(){
        // 发送ajax
        axios.get('http://127.0.0.1/my_test')
            .then((res2222)=>{
            var data = JSON.parse(res2222.data);
            console.log(data)
            this.setState(()=>({
                list:[...data.data],
            }));
        })
    }
}

export default TodoList;

