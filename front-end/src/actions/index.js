import { store } from "../index";
import { push } from "react-router-redux"
import { setTimeout } from "timers";

export const SET_AUTH_PARAMS = "SET_AUTH_PARAMS";
export const setAuthParams = (login, pass) => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "http://localhost:3001/api/auth");
	xhr.setRequestHeader("Content-type", "Application/json");
	xhr.onload = function () {
		const res = JSON.parse(this.responseText);
		setTimeout(() => {
			store.dispatch({
				type: SET_AUTH_PARAMS,
				status: false,
				token: res.token,
				errorMsg: res.message
			});
			res.token && store.dispatch(push("/"));
		}, 1000)

	}
	const body = JSON.stringify({
		login, pass
	});

	xhr.send(body);

	return {
		type: SET_AUTH_PARAMS,
		status: true
	};
}


export const logout = () => {
	console.log(123);
	localStorage.removeItem("token");
	return {
		type: SET_AUTH_PARAMS,
		token: null
	}
}

export const okError = () => ({
	type: SET_AUTH_PARAMS,
	errorMsg: ""
})
