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
        case ON_TODO_TYPING:
            return {
                ...state,
                todoInput: action.inp
            }
        case ADD_TODO: {
            const stateCopy = {
                ...state,
                todos: [ ...state.todos ]
            }
            let prevId;
            // stateCopy.todos[stateCopy.todos.length - 1].id;
            for(let i = stateCopy.todos.length - 1; i > -1; i--) {
                if(stateCopy.todos[i]) {
                    prevId = i
                    break;
                }
            }
            if(!prevId)
                prevId = 0;
            return {
                ...stateCopy,
                todos: [ ...stateCopy.todos,  {
                    id: prevId+1,
                    task: action.task
                } ],
                todoInput: ''
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todos: [
                    ...state.todos.filter(t => t.id !== action.id)
                ]
            }
        }
        default:
            return state;
    }
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