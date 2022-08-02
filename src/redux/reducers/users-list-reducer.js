const startState = {
    users: []
};

const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const ADD_USERS = 'ADD_USERS';


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
        default:
            return state;
    }
}

export default usersListReducer

export const friendAC = (id) => ({type: FRIEND, id})
export const unfriendAC = (id) => ({type: UNFRIEND, id})
export const addUsersAC = (users=[]) => ({type: ADD_USERS, users})
