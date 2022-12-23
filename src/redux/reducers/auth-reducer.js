const startState = {
    username: null,
    name: null,
    lastname: null,
    friends: null,
    avatar: null,
    status: null,
    album: null,
    location: null,
    logged: false
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

function authReducer(state=startState, action={}) {
    switch (action?.type) {
        case LOGIN:
            return {
                ...state,
                ...action.credentials,
                logged: true
            }
        case LOGOUT:
            return {
                ...state,
                username: null,
                name: null,
                lastname: null,
                friends: null,
                avatar: null,
                status: null,
                album: null,
                location: null,
                logged: false
            }
        default:
            return state;
    }
}

export default authReducer;

export const login = (credentials) => ({type: LOGIN, credentials})
// export const logout = () => ({type: LOGOUT})
export const logout = () => {
    console.log('logged out')
    return {type: LOGOUT}
}