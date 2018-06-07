import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { connect } from "react-redux";
import { setAuthParams } from "../../actions";


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    }
  }

  onInput = (val, key) => this.setState({ [key]: val });

  auth = e => {
    e.preventDefault();
    const { login, password } = this.state;
    this.props.setAuthParams(login, password);
  }

  render() {
    const { login, password } = this.state;

    return <section className="auth-form">
      <TextField
        label="email"
        margin="normal"
        value={login}
        onChange={e => this.onInput(e.target.value, "login")}
      />
      <TextField
        label="password"
        type="password"
        margin="normal"
        value={password}
        onChange={e => this.onInput(e.target.value, "password")}
      />
      <Button variant="contained" color="primary" onClick={this.auth}>
        AUTH
      </Button>
    </section>
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setAuthParams: (login, password) => dispatch(setAuthParams(login, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);