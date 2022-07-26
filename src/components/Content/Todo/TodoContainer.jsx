import {addTodoActionCreator, onTodoTypingActionCreator} from "../../../redux/reducers/todo-reducer";
import Todo from "./Todo";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        state: state.todo
    }
}
function mapDispatchTopProps(dispatch) {
    function onTodoTyping(inp) {
        dispatch(onTodoTypingActionCreator(inp))
    }
    function addTodo(todo) {
        dispatch(addTodoActionCreator(todo));
    }
    return {
        onTodoTyping,
        addTodo
    }
}
const TodoContainer = connect(mapStateToProps, mapDispatchTopProps)(Todo)

export default TodoContainer;