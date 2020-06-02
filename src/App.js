import React from "react";
import "./App.css";
import Results from "./Components/Results/Results.js";
import Main from "./Components/Main/Main.js";
import NavBar from './Components/NavBar/NavBar.js';
import Team from './Components/Team/Team.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main/>
      <Results />
      <Team />
    </div>
  );
}

export default App;