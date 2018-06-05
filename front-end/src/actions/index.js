import { PRELOADER_ON, PRELOADER_OFF } from "../types";

export const authRequestStart = (email, password) => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3001/api/auth-user");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function() {};

  xhr.send(JSON.stringify([{ email, password }]));
  return {
    type: PRELOADER_ON
  };
};

export const authRequestEnd = () => {
  return {
    type: PRELOADER_OFF
  };
};
