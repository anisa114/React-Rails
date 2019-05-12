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
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Question</Card.Title>
            <Card.Text>{this.props.question}</Card.Text>
            <textarea
              value={this.state.response}
              onChange={this.handleChange}
              style={{ width: "600px", resize: "none", height: "250px" }}
            />
          </Card.Body>
          <Button onClick={this.saveAndNext} variant="primary">
            Next
          </Button>
        </Card>
      );
    }
    return null;
  }
}

export default Question;
