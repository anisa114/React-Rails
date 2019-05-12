import React, { Component } from "react";
import axios from "axios";

class Survey extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios(`/api/surveys/${id}`)
      .then(response => {
        let questions = response.data.questions;
        console.log(questions);
        this.setState({ questions });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <h1>Survey</h1>;
  }
}

export default Survey;
