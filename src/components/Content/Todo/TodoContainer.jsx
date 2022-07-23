import React from "react";
import {addTodoActionCreator, onTodoTypingActionCreator} from "../../../redux/reducers/todo-reducer";
import Todo from "./Todo";
import StoreContext from "../../../StoreContext";

const TodoContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            function onTodoTyping(inp) {
                store.dispatch(onTodoTypingActionCreator(inp))
            }

            function addTodo(todo) {
                store.dispatch(addTodoActionCreator(todo));
            }

            return <Todo
                onTodoTyping={onTodoTyping}
                addTodo={addTodo}
                state={store.getState().todo}
            />
        }
        }
    </StoreContext.Consumer>
}

export default TodoContainer;