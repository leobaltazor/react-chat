import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <section>
      auth page
    </section>
  }

}

export default AuthLayout;