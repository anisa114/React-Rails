import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import Survey from "./Survey";
import Complete from "./Complete";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/survey/:id" component={Survey} />
            <Route path="/complete" component={Complete} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
