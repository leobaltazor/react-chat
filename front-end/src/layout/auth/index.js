import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { routers } = this.props
    return <section>
      {routers.map((route, index) => (
        <Route
          exact={route.exact}
          path={route.path}
          component={({ match }) => (
            <route.component {...{ ...route, ...match }} />
          )}
          key={index}
        />
      ))}
    </section>
  }

}

export default AuthLayout;