import React, { Component } from "react"
import { Route, Link } from 'react-router-dom';

class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section><Link to="/auth">go to main</Link></section>
  }

}

export default MainLayout;