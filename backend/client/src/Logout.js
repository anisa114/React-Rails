import React from "react";
import { Redirect } from "react-router-dom";

const Logout = props => {
  localStorage.removeItem("jwt");
  props.handleLogin();
  return <Redirect to="/login" />;
};

export default Logout;
