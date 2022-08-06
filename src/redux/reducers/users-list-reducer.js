const startState = {
    users: [],
    isFetching: false
};

const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const ADD_USERS = 'ADD_USERS';
const SET_LOADING = 'SET_LOADING';
const STOP_LOADING = 'STOP_LOADING';


function usersListReducer(state=startState, action={}) {
    switch (action.type) {
        case FRIEND:
            return {
                ...state,
                users: {...state}.users.map(u =>
                    u.id === action.id ?
                        {...u, friend: true} :
                        {...u}
                )
            }
        case UNFRIEND:
            return {
                ...state,
                users: {...state}.users.map(u =>
                    u.id === action.id ?
                        {...u, friend: false} :
                        {...u}
                )
            }
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users].concat(action.users)
            }
        case SET_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case STOP_LOADING:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default usersListReducer

export const friend = (id) => ({type: FRIEND, id})
export const unfriend = (id) => ({type: UNFRIEND, id})
export const addUsers = (users=[]) => ({type: ADD_USERS, users})
export const setLoading = () => ({type: SET_LOADING})
export const stopLoading = () => ({type: STOP_LOADING})