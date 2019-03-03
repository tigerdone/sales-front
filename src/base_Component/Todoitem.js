import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        console.log("child render")
        const {items,test} = this.props;
        // JSX createElement -> 虚拟DOM（JSX对象） -> 真实的DOM
        return (
            <div onClick={this.handleClick}>
                {test} --- {items}
            </div>
        )
        // return React.createElement('div', {}, 'item')
    }

    handleClick(){
        // alert(this.props.index);
        // this.props.deleteItem(this.props.index)

        const {deleteItem,index} = this.props;
        deleteItem(index)
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }
        else{
            return false;
        }
    }
}

//规定数据格式
TodoItem.propTypes = {
    content: PropTypes.string,
    test: PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.oneOfType([PropTypes.func,PropTypes.number]),
    // index:PropTypes.number
}

//默认数据
TodoItem.defaultProps = {
    test: "hello world233"
}

export default TodoItem;

