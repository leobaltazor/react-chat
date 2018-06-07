import React from "react";

import MainLayout from "../layout/main";
import AuthLayout from "../layout/auth";

import Auth from "../pages/auth";
import Profiles from "../pages/main";

const routers = [
	{
		path: "/",
		component: MainLayout,
		exact: true,
		routers: [{
			path: "/",
			component: Profiles
		}]
	},
	{
		path: "/auth",
		component: AuthLayout,
		routers: [{
			path: "/auth",
			component: Auth
		}]
	}
];

export default routers;