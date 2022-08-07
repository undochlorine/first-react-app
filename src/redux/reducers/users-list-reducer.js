const startState = {
    users: [],
    isFetching: false,
    areThereMore: false
};

const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const LOAD_MORE_USERS = 'LOAD_MORE_USERS';
const SET_LOADING = 'SET_LOADING';
const STOP_LOADING = 'STOP_LOADING';
const ARE_THERE_MORE = 'ARE_THERE_MORE';


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
        case LOAD_MORE_USERS:
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
        case ARE_THERE_MORE:
            return {
                ...state,
                areThereMore: action.boolState
            }
        default:
            return state;
    }
}

export default usersListReducer

export const friend = (id) => ({type: FRIEND, id})
export const unfriend = (id) => ({type: UNFRIEND, id})
export const loadMoreUsers = (users=[]) => ({type: LOAD_MORE_USERS, users})
export const setLoading = () => ({type: SET_LOADING})
export const stopLoading = () => ({type: STOP_LOADING})
export const switchAreThereMore = (boolState) => ({type: ARE_THERE_MORE, boolState})