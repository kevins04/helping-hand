import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "Views/Login/Login";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
