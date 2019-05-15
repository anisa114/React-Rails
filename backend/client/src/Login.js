import React, { Component } from "react";
import Logo from "./Logo";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const loginStyles = {
  paddingTop: "15px",
  color: "white",
  margin: "10% auto"
};
class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const request = { auth: { email: email, password: password } };
    axios
      .post("/api/user_token", request)
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.jwt);
        this.props.handleLogin();
        this.props.history.push("/home");
      })
      .catch(error => {
        console.log("error", error);
        this.setState({ error: "Invalid Email" });
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <Logo />
          </Col>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div style={{ color: "darkred" }}>{this.state.error}</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
