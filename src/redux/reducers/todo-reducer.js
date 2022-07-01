const startState = {
    todoInput: '',
    todos: [
        {id: 0, task: 'Test todo'}
    ]
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ON_TODO_TYPING = 'ON_TODO_TYPING';

function todoReducer(state=startState, action={}) {
    switch (action.type) {
        case ON_TODO_TYPING: {
            state.todoInput = action.inp
        }; break;
        case ADD_TODO: {
            let prevId;
            // state.todos[state.todos.length - 1].id;
            for(let i = state.todos.length - 1; i > -1; i--) {
                if(state.todos[i]) {
                    prevId = i
                    break;
                }
            }
            if(!prevId)
                prevId = 0;
            state.todos.push({
                id: prevId+1,
                task: action.task
            });
            state.todoInput = '';
        }; break;
        case REMOVE_TODO: {
            state.todos = state.todos.map(t =>
                t.id === action.id ? '' : t
            )
        }; break;
        default:
            return state;
    }

    return state;
}

export default todoReducer;

export function addTodoActionCreator(task) {
    return {
        type: ADD_TODO,
        task
    }
}

export function removeTodoActionCreator(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function onTodoTypingActionCreator(inp) {
    return {
        type: ON_TODO_TYPING,
        inp
    }
}