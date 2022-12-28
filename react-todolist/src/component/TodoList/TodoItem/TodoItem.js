import React from "react";

import "./TodoItem.css";
let interval;
class TodoItem extends React.Component {
 /*  constructor(props){
    super(props);
    interval = setInterval(()=>{
      console.log("todoItem")
    },1000)
  } */
  render() {
    const { id, title } = this.props.todo;
    const { onDelete } = this.props;
    return (
      <li className="todoitem">
        <span>{title}</span>
        <button className="btn btn--delete" onClick={() => onDelete(id)}>
          delete
        </button>
      </li>
    );

    
  }
  componentWillUnmount(){
    clearInterval(interval)
    /* console.log("cwu") */
  }
}
// id, title, completed, delete button

export default TodoItem;
