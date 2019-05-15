import React, { Component } from "react";

class Complete extends Component {
  render() {
    const compStyle = {
      marginTop: "15%",
      marginLeft: "25%",
      color: "white",
      textShadow: "0px 1px 1px black"
    };
    return <h1 style={compStyle}>Thank you for taking the Survey!</h1>;
  }
}
export default Complete;
