import './App.css'
import React from "react";
import TodoContainer from "./components/Content/Todo/TodoContainer";
import {NavLink, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import MusicContainer from "./components/Content/Music/MusicContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import UsersListContainer from './components/Content/UsersList/UsersListContainer'
import Navbar from "./components/Navbar/Navbar";
import {logout} from "./redux/reducers/auth-reducer";

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<ProfileContainer />}
                        />
                        <Route
                            path="/profile"
                            element={<ProfileContainer />}
                        />
                        <Route
                            path="/profile/:id"
                            element={<ProfileContainer />}
                        />
                        <Route
                            path="/dialogs/*"
                            element={<DialogsContainer />}
                        />
                        <Route
                            path="/music/*"
                            element={<MusicContainer />}
                        />
                        <Route
                            path="/todo/*"
                            element={<TodoContainer />}
                        />
                        <Route
                            path="/users/*"
                            element={<UsersListContainer />}
                        />
                    </Routes>
                </div>
            </div>
            <div className="login" onClick={logout}>
                <NavLink to="/login">Log out</NavLink>
            </div>
        </div>
    );
}

export default App;