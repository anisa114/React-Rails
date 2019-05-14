import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const loginStyles = {
  paddingTop: "15px",
  color: "black",
  textShadow: "0px 2px 3px black"
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
