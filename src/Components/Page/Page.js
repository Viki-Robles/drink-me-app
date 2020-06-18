import React from "react";
import Main from "../Main/Main";
import NavBar from "../NavBar/NavBar.js";
import Team from "../Team/Team.js";
import ButtonUp from "./ButtonUp/ButtonUp";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Team />
      <ButtonUp/>
    </div>
  );
}

export default App;
