import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

class SurveyCard extends Component {
  render() {
    let to = `/survey/${this.props.clickID}`;
    return (
      <div
        onClick={this.props.handleClick(this.props.id)}
        border="success"
        style={{ width: "18rem" }}
      >
        <Button>{this.props.name}</Button>

        {this.props.bool && <Redirect to={to} />}
      </div>
    );
  }
}
export default SurveyCard;
