import React from "react";
import {removeTodoActionCreator} from "../../../../redux/reducers/todo-reducer";
import store from "../../../../redux/redux-store";
import TodoItem from "./TodoItem";

const TodoItemContainer = (props) => {
    function removeTodo(id) {
        store.dispatch(removeTodoActionCreator(id))
    }
    return(
        <TodoItem
            id={props.id}
            task={props.task}
            removeTodo={removeTodo}
        />
    )
}

export default TodoItemContainer;