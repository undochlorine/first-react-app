import {removeTodoActionCreator} from "../../../../redux/reducers/todo-reducer";
import TodoItem from "./TodoItem";
import {connect} from "react-redux";

function mapStateToProps() {
    return {}
}
function mapDispatchToProps(dispatch, props) {
    function removeTodo(id) {
        dispatch(removeTodoActionCreator(id))
    }
    return {
        removeTodo,
        id: props.id,
        task: props.task
    }
}

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem)

export default TodoItemContainer;