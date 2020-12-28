import React from "react";
import Home from "./Home.jsx";
import GamePage from "./GamePage.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/:id" children={<GamePage />} />

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
