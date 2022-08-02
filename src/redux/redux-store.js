import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import musicReducer from "./reducers/music-reducer";
import todoReducer from "./reducers/todo-reducer";
import usersListReducer from "./reducers/users-list-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    music: musicReducer,
    todo: todoReducer,
    usersList: usersListReducer
})

const store = createStore(reducers)
window.store = store;

export default store;