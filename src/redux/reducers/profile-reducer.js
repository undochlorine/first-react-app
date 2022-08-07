const startState = {
    user: null,
    loading: false
};

const SET_LOADING = 'SET_LOADING'
const STOP_LOADING = 'STOP_LOADING'
const SET_USER = 'SET_USER'

function profileReducer(state=startState, action={}) {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export const setLoadingAC = () => ({type: SET_LOADING})
export const stopLoadingAC = () => ({type: STOP_LOADING})
export const setUser = (user) => ({type: SET_USER, user})

export default profileReducer;