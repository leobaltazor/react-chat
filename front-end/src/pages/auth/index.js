import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import "./index.css";
import { connect } from "react-redux";

import { authRequestStart } from "../../actions/";

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onClick = () => {
    let { email, password } = this.state;
    console.log(email + "=====" + password);
    // let {email, password} =
  };
  helperInput = name => event => {
    // console.log(event.target.value);
    // console.log(name);
    this.setState({ [name]: event.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <section>
        <TextField
          label="email"
          margin="normal"
          onInput={this.helperInput("email")}
          margin="normal"
        />
        <TextField
          type="password"
          label="Password"
          onInput={this.helperInput("password")}
        />
        <div className="button">
          <Button
            variant="outlined"
            onClick={this.onClick}
            margin="normal"
            className="button"
          >
            {" "}
            Log-In
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.onClick}
            margin="normal"
            className="button"
          >
            {" "}
            Sing-In
          </Button>
        </div>
      </section>
    );
  }
}

export default AuthLayout;
