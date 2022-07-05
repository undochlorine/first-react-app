import React from "react";
import {addTodoActionCreator, onTodoTypingActionCreator} from "../../../redux/reducers/todo-reducer";
import store from '../../../redux/redux-store'
import Todo from "./Todo";

const TodoContainer = () => {
    function onTodoTyping(inp) {
        store.dispatch(onTodoTypingActionCreator(inp))
    }
    function addTodo(todo) {
        store.dispatch(addTodoActionCreator(todo));
    }
    return (<Todo
            onTodoTyping={onTodoTyping}
            addTodo={addTodo}
            state={store.getState().todo}
        />)
}

export default TodoContainer;