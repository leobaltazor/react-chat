import React, { Component, Fragment } from 'react';
import { Router, Route } from "react-router";
import routes from "./router";
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        {routes.map((route, index) => (
          <Route
            exact={route.exact}
            path={route.path}
            component={({ match }) => (
              <route.component {...{ ...route, ...match }} />
            )}
            key={index}
          />
        ))}
      </Fragment>
    );
  }
}

export default App;
