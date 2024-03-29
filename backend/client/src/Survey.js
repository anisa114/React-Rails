import React, { Component } from "react";
import axios from "axios";
import Question from "./Question";
import { Redirect } from "react-router";

class Survey extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      activeQuestion: 0,
      endOfSurvey: false
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({
      method: "get",
      url: `/api/surveys/${id}`,
      headers: { Authorization: token }
    })
      .then(response => {
        let questions = response.data.questions;
        this.setState({ questions });
      })
      .catch(error => console.log(error));
  }

  nextQuestion = response => {
    if (this.state.activeQuestion < this.state.questions.length - 1) {
      axios.post("/api/responses", {
        user_id: 1,
        question_id: this.state.activeQuestion,
        text: response
      });

      this.setState({
        activeQuestion: this.state.activeQuestion + 1
      });
    } else {
      this.setState({ endOfSurvey: true });
    }
  };

  render() {
    const questions = this.state.questions.map((question, index) => {
      const display = this.state.activeQuestion === index;
      return (
        <Question
          display={display}
          nextQuestion={this.nextQuestion}
          key={question.id}
          question={question.text}
        />
      );
    });
    return (
      <div>
        {questions}
        {this.state.endOfSurvey && <Redirect to="/complete" />}
      </div>
    );
  }
}

export default Survey;
