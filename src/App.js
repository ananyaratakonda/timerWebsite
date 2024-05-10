import logo from './logo.svg';
import './App.css';
import Timer from './timer';
import Home from './home';

import Navbar from "./navBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App">

      </header>
      <Timer />
    </div>
  );
}

export default App;
