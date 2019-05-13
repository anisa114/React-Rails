import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { Redirect } from "react-router";

const loginStyles = {
  paddingTop: "15px",
  color: "black",
  textShadow: "0px 2px 3px black"
};
class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id: 0,
        name: ""
      },
      authenticate: false,
      error: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    axios
      .post("/login", {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
        let user = {
          id: response.data.session.id,
          name: response.data.session.name
        };
        this.setState({ user, authenticate: true });
      })
      .catch(error => {
        console.log(error.request);
        console.log(error.response);
        this.setState({ error: "Invalid Email" });
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm={8} />
          <Col style={loginStyles} sm={4}>
            <Form onSubmit={this.handleSubmit}>
              <h1>Login</h1>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Submit
              </Button>
            </Form>
            {this.state.error}
            {this.state.authenticate && (
              <Redirect
                to={{
                  pathname: "/home",
                  state: {
                    id: this.state.user.id,
                    name: this.state.user.name
                  }
                }}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
