import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import './index.css';
import App from './App';
import reducer from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
  reducer,
  compose(applyMiddleware(middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

window.addEventListener("keyup", e => {
  e.keyCode === 17 && console.log(store.getState());
});