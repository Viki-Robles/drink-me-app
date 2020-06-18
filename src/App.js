import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Page from "./Components/Page/Page";
import ScrollTop from "./ScrollTop/ScrollTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop/>
        <Switch>
          <Route exact path="/drink/:name" component={Detail} />
          <Route exact path="/" component={Page} />
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
