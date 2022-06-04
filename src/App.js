import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from "./components/Content/Dialogs/Dialogs";
import Music from "./components/Content/Music/Music";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Navbar />
          <div className="content">
              <Routes>
                  <Route exact path="/" element={<Profile/>} />
                  <Route       path="/profile/*" element={<Profile />} />
                  <Route       path="/dialogs/*" element={<Dialogs />} />
                  <Route       path="/music/*" element={<Music />} />
              </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
