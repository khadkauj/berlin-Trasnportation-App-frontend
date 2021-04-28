import React from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StopDetails from "./components/StopDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <Switch>
            
            <Route path="/:stop">
              <StopDetails />
            </Route>
            <Route path="/">
              <MainComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
