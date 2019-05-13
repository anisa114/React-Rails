import React, { Component } from "react";
import axios from "axios";
import SurveyCard from "./SurveyCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      surveys: [],
      click: {
        bool: false,
        id: 0
      }
    };
  }

  componentDidMount() {
    axios(`/api/surveys`)
      .then(response => {
        console.log(response);
        this.setState({ surveys: response.data.surveys });
      })
      .catch(error => console.log(error));
  }
  handleClick = id => e => {
    console.log("clicked", id);
    this.setState({
      click: {
        bool: true,
        id: id
      }
    });
  };
  render() {
    const survey = this.state.surveys.map(survey => {
      return (
        <SurveyCard
          handleClick={this.handleClick}
          key={survey.id}
          id={survey.id}
          name={survey.name}
          bool={this.state.click.bool}
          clickID={this.state.click.id}
        />
      );
    });
    return (
      <div>
        <h1>Welcome back, Anisa</h1>
        <h4>Please complete the following surveys</h4>
        <Container>
          <Row>{survey}</Row>
        </Container>
      </div>
    );
  }
}
export default Home;
