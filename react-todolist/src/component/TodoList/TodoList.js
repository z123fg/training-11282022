import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import { getTodos, addTodo, removeTodo, saveTodo } from "../../apis/TodoApis";

import "./TodoList.css";
//filter, find
// least common ancestor
class TodoList extends React.Component {
    /* 
      //editIndex:number
      editId
      [
        {content, completed}
      ]
    */
    state = {
        editId: null,
        todos: [],
        inputText: "",
    };

    handleInputChange = (e) => {
        this.setState({
            inputText: e.target.value,
        });
    };

    handleEdit = (id) => {
        this.setState({
            editId: id,
        });
    };

    handleSave = (id, title) => {
        //patch
        saveTodo(id, title).then((res) => {
            console.log("saved task", res);
            /* 
        wrong:
        this.state.todos.forEach(item=>{ 
          if(item.id === id) item.title = res.title
        }) 
        */
            //update immutably
            this.setState({
                editId: null,
                todos: this.state.todos.map((item) => {
                    if (item.id === id) {
                        return res;
                    } else {
                        return item;
                    }
                }),
            });
        });
    };

    handleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            }),
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.inputText.trim() === "") {
            return;
        } else {
            const newTodo = {
                title: this.state.inputText,
                completed: false,
            };
            addTodo(newTodo).then((todo) => {
                this.setState((prevState) => {
                    return {
                        todos: [...prevState.todos, todo],
                        inputText: "",
                    };
                });

                this.setState((prevState) => {
                    return {
                        todos: [...this.state.todos, todo],
                        inputText: "",
                    };
                });
            });
        }
    };

    handleDelete = (id) => {
        removeTodo(id).then(() => {
            this.setState({
                todos: this.state.todos.filter((todo) => id !== todo.id),
            });
        });
    };
    render() {
        const pendingTodos = this.state.todos.filter((item) => !item.completed);
        const completedTodos = this.state.todos.filter((item) => item.completed);
        return (
            <section className="todolist">
                <header className="todolist__header">
                    <h4>Todo List</h4>
                </header>
                <form className="todolist__form">
                    <input
                        type="text"
                        className="todolist__input"
                        onChange={this.handleInputChange}
                        value={this.state.inputText}
                    />
                    <button className="btn btn--primary" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
                <ul className="todolist__content">
                    <li className="todolist__divider"><h4>pending:</h4></li>
                    {pendingTodos.length === 0? <li className="todolist__placeholder">no task</li> : pendingTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            isEdit={todo.id === this.state.editId}
                            onComplete={() => this.handleComplete(todo.id)}
                            onSave={this.handleSave}
                            onEdit={this.handleEdit}
                            todo={todo}
                            onDelete={this.handleDelete}
                        />
                    ))}
                    <li className="todolist__divider"><h4>completed:</h4></li>
                    {completedTodos.length === 0? <li className="todolist__placeholder">no task</li> :completedTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            isEdit={todo.id === this.state.editId}
                            onComplete={() => this.handleComplete(todo.id)}
                            onSave={this.handleSave}
                            onEdit={this.handleEdit}
                            todo={todo}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
            </section>
        );
    }

    componentDidMount() {
        getTodos().then((data) => {
            this.setState({
                todos: data,
            });
        });
    }
}

export default TodoList;
