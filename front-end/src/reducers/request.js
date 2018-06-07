import { PRELOADER_ON, PRELOADER_OFF } from "../types";
const init = {
  preloader: false
};

export function request(state = init, action) {
  if (action.type == PRELOADER_ON) {
    return {
      ...state,
      preloader: true
    };
  } else if (action.type == PRELOADER_OFF) {
    return {
      ...state,
      preloader: false
    };
  }
  return state;
}
