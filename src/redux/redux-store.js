import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import musicReducer from "./reducers/music-reducer";
import todoReducer from "./reducers/todo-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    music: musicReducer,
    todo: todoReducer
})

const store = createStore(reducers)

export default store;