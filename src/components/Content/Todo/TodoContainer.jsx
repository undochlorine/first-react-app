import {addTodo, onTodoTyping} from "../../../redux/reducers/todo-reducer";
import Todo from "./Todo";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        state: state.todo
    }
}

const TodoContainer = connect(mapStateToProps, {addTodo, onTodoTyping})(Todo)

export default TodoContainer;