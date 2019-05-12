import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Redirect } from "react-router";

class SurveyCard extends Component {
  render() {
    let to = `/survey/${this.props.clickID}`;
    return (
      <Card
        onClick={this.props.handleClick(this.props.id)}
        border="success"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
        </Card.Body>
        {this.props.bool && <Redirect to={to} />}
      </Card>
    );
  }
}
export default SurveyCard;
