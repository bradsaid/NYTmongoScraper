import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => (
  <Router>
  <div>
    <Nav />
    <Switch>
    <Route exact path="/" component={Books} />
    <Route exact path="/books" component={Books} />
    <Route exact path="/saved" component={Saved} />
    </Switch>
  </div>
  </Router>
);

export default App;
