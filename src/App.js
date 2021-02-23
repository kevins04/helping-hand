import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "Views/Login/Login";
import AppBar from "Views/HomePage/AppBar";
import withRoot from "./withRoot";
import ProductHero from "Views/HomePage/ProductHero";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AppBar />
            <ProductHero />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRoot(App);
