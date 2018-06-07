import { store } from "../index";

export const SET_AUTH_PARAMS = "SET_AUTH_PARAMS";
export const setAuthParams = (login, pass) => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3001/api/auth");
  xhr.setRequestHeader("Content-type", "Application/json");
  xhr.onload = function () {
    store.dispatch(({
      type: SET_AUTH_PARAMS,
      status: false
    }));
  }
  const body = JSON.stringify({
    login, pass
  });

  xhr.send(body)

  return {
    type: SET_AUTH_PARAMS,
    status: true
  };
}
