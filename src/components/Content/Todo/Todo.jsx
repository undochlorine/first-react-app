import React from "react";
import style from './Todo.module.css'
import TodoItemContainer from "./TodoItem/TodoItemContainer";

const Todo = (props) => {

    const isEnter = (e) => e.code === 'Enter' ? addTask() : '';

    const input = React.createRef();

    function onTodoTyping() {
        let inp = input.current.value;
        props.onTodoTyping(inp)
    }

    function addTask() {
        let task = input.current.value;
        props.addTodo(task)
    }

    return(
        <div className={style.Main}>
            <div className={style.header}>
                <p>Add a task:</p>
            </div>
            <div className={style.input}>
                <input
                    onKeyDown={isEnter}
                    onChange={onTodoTyping}
                    value={props.state.todoInput}
                    ref={input}
                    type="text"
                    placeholder="Todo: "/>
                <svg onClick={addTask} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#212121' d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>
            </div>
            <div className={style.content}>
                {
                    props.state.todos.map(todo =>
                            todo.task ? <TodoItemContainer id={todo.id} task={todo.task} /> : ''
                    )
                }
            </div>
        </div>
    )
}

export default Todo;