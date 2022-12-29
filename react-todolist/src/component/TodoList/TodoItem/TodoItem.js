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
    state = { value: this.props.todo.title };
    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    render() {
        const { id, title } = this.props.todo;
        const { onDelete, isEdit, onEdit, onSave, onComplete } = this.props;
        return (
            <li className="todoitem">
                {isEdit ? (
                    <input value={this.state.value} className="titleInput" onChange={this.handleChange} />
                ) : (
                    <span onClick={onComplete} className="title">{title}</span>
                )}
                {isEdit ? (
                    <button
                    className="btn btn--save"
                        onClick={() => {
                            onSave(id, this.state.value);
                        }}
                    >
                        save
                    </button>
                ) : (
                    <button className="btn btn--edit" onClick={() => onEdit(id)}>edit</button>
                )}
                <button className="btn btn--delete" onClick={() => onDelete(id)}>
                    delete
                </button>
            </li>
        );
    }
    componentWillUnmount() {
        clearInterval(interval);
        /* console.log("cwu") */
    }
}
// id, title, completed, delete button

export default TodoItem;
