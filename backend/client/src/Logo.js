import React, { Component } from "react";

const imageStyle = {
  width: "60%",
  margin: "30% auto"
};
class Logo extends Component {
  render() {
    return (
      <div>
        <img style={imageStyle} src="images/self.png" alt="" />
      </div>
    );
  }
}
export default Logo;
