import React from "react";
import Results from "../Results/Results.js";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar.js";
import Team from "../Team/Team.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      {/* <Results /> */}
      <Team />
    </div>
  );
}

export default App;
