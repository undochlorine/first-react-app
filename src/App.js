import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Music from "./components/Content/Music/Music";
import TodoContainer from "./components/Content/Todo/TodoContainer";
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
                      element={<TodoContainer />}
                  />
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
