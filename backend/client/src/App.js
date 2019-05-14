import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Survey from "./Survey";
import Complete from "./Complete";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  handleLogin = e => {
    this.setState({ login: !this.state.login });
  };
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Navigation login={this.state.login} />
            <Main handleLogin={this.handleLogin} />
          </div>
        </Router>
      </div>
    );
  }
}

const Navigation = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      {props.login && localStorage.getItem("jwt") ? (
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/logout">
            Log Out
          </NavLink>
        </li>
      ) : (
        <li className="nav-item">
          <NavLink
            exact
            className="nav-link"
            activeClassName="active"
            to="/login"
          >
            Log In
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const Main = prop => (
  <Switch>
    <Route
      path="/login"
      render={props => <Login {...props} handleLogin={prop.handleLogin} />}
    />

    <Route
      path="/logout"
      render={props => <Logout {...props} handleLogin={prop.handleLogin} />}
    />
    <Route exact path="/home" component={Home} />
    <Route exact path="/survey/:id" component={Survey} />
    <Route exact path="/complete" component={Complete} />
  </Switch>
);

export default App;
