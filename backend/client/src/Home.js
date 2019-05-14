import React, { Component } from "react";
import axios from "axios";
import SurveyCard from "./SurveyCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import qs from "qs";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      surveys: [],
      username: "",
      click: {
        bool: false,
        id: 0,
        error: null
      }
    };
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.defaults.paramsSerializer = params => {
      return qs.stringify(params, { arrayFormat: "brackets" });
    };
    axios({
      method: "get",
      url: "/api/surveys",
      headers: { Authorization: token }
    })
      .then(response => {
        console.log(response);
        this.setState({
          surveys: response.data.surveys,
          username: response.data.name
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: "Acesss Denied" });
      });
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

    if (!this.state.error) {
      return (
        <div>
          <h1>Welcome back, {this.state.username}</h1>
          <h4>Please complete the following surveys</h4>
          <Container>
            <Row>{survey}</Row>
          </Container>
        </div>
      );
    } else {
      return <div>{this.state.error}</div>;
    }
  }
}
export default Home;
