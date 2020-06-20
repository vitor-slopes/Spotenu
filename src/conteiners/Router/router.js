import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import homepage from '../Home/homepage'
import LoginPage from '../LoginPage/LoginPage'
import SignInPage from '../SignInPage/SignInPage'

export const routes = {
  root: "/",
  login: "/login",
  signIn: "/signin"
};

function router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={homepage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signIn} component={SignInPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default router;
