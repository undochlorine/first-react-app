import React from "react";
import {removeTodoActionCreator} from "../../../../redux/reducers/todo-reducer";
import TodoItem from "./TodoItem";
import StoreContext from "../../../../StoreContext";

const TodoItemContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            function removeTodo(id) {
                store.dispatch(removeTodoActionCreator(id))
            }

            return <TodoItem
                id={props.id}
                task={props.task}
                removeTodo={removeTodo}
            />
        }
        }
    </StoreContext.Consumer>
}

export default TodoItemContainer;