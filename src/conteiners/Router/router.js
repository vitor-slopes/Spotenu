import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import homepage from '../Home/homepage'
import LoginPage from '../LoginPage/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'

export const routes = {
  root: "/",
  login: "/login",
  homePage: "/homepage",
  signUp: "/signUp",
};

function router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* <Route exact path={routes.root} component={homepage} /> */}
        <Route exact path={routes.root} component={SignUpPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.homePage} component={homepage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default router;
