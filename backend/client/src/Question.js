import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      response: ""
    };
  }
  saveAndNext = () => {
    const response = this.state.response;
    this.props.nextQuestion(response);
  };
  handleChange = e => {
    this.setState({ response: e.target.value });
  };
  render() {
    if (this.props.display) {
      return (
        <div>
          <Card style={{ width: "30rem", margin: "0 auto" }}>
            <Card.Body className="text-center">
              <Card.Title>Question</Card.Title>
              <Card.Text>{this.props.question}</Card.Text>
              <textarea
                value={this.state.response}
                onChange={this.handleChange}
                style={{ width: "20rem", resize: "none", height: "250px" }}
              />
            </Card.Body>
            <Button onClick={this.saveAndNext} variant="info">
              Next
            </Button>
          </Card>
        </div>
      );
    }
    return null;
  }
}

export default Question;
