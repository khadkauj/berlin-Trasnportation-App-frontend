import React from "react";
import "./App.css";
import MainComponent from "./components/MainComponent";

import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import StopDetails from "./components/StopDetails";
import FavouriteStops from "./components/FavouriteStops";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <HashRouter>
            
            <Route path="/:stop">
              <StopDetails />
            </Route>
            <Route exact path="/">
              <MainComponent />
              
            </Route>
          </HashRouter>
        </div>
      </Router>
    </div>
  );
}

export default App;
