import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Cars from "../pages/Cars";
import New from "../pages/New/New";

import Dashboard from "../pages/Dashboard";
import DashboardClient from "../pages/Dashboard Client";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/cars" component={Cars} isPrivate />
      <Route path="/new" component={New} isPrivate />

      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/dashboardClient" component={DashboardClient} isPrivate />

      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
