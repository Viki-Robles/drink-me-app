import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Results from "./Components/Results/Results.js";
// import Main from "./Components/Main/Main.js";
// import NavBar from "./Components/NavBar/NavBar.js";
// import Team from "./Components/Team/Team.js";
import Drink from "./Components/Drink/Drink";
import Page from "./Components/Page/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/drink/:id" component={Drink} />
          <Route exact path="/" component={Page} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
