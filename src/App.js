import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Music from "./components/Content/Music/Music";
import Todo from "./components/Content/Todo/Todo";
import {Route, Routes} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <div className="wrapper">
          <Navbar />
          <div className="content">
              <Routes>
                  <Route
                      exact path="/"
                      element={<Profile
                                    state={props.state.profile}
                                />}
                  />
                  <Route
                      path="/profile/*"
                      element={<Profile
                                    state={props.state.profile}
                                />}
                  />
                  <Route
                      path="/dialogs/*"
                      element={<Dialogs
                                    state={props.state.dialogs}
                                    dispatch={props.dispatch}
                                />}
                  />
                  <Route
                      path="/music/*"
                      element={<Music
                                    state={props.state.music}
                                />}
                  />
                  <Route
                      path="/todo/*"
                      element={<Todo
                                    state={props.state.todo}
                                    dispatch={props.dispatch}
                                />}
                  />
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
