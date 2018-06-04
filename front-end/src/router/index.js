import React from "react";

import MainLayout from "../layout/main";
import AuthLayout from "../layout/auth";

import Auth from "../pages/auth";
import Main from "../pages/main";

const routers = [
  {
    path: "/",
    component: MainLayout,
    exact: true,
    routers: [{

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